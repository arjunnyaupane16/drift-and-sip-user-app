import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useCart } from '../context/CartContext';
import { BACKEND_URL } from '../utils/constants';
import styles from './styles/OrderStyle';

const OrderScreen = () => {
  const { cartItems, clearCart, getTotal } = useCart();
  const router = useRouter();

  const [orderDetails, setOrderDetails] = useState({
    customerName: '',
    phone: '',
    tableNumber: '',
    specialInstructions: ''
  });

  const [loading, setLoading] = useState(false);

  const handleOrderSubmit = async () => {
    if (cartItems.length === 0) {
      return Alert.alert('Empty Cart', 'You must add at least one item to your order.');
    }

    const { customerName, phone, tableNumber } = orderDetails;

    if (!customerName.trim()) {
      return Alert.alert('Missing Info', 'Name is required');
    }

    if (!tableNumber.trim()) {
      return Alert.alert('Missing Info', 'Table Number is required');
    }

    setLoading(true);

    try {
      const orderData = {
        customer: {
          id: null,
          name: customerName,
          phone
        },
        tableNumber,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
          image: item.image
        })),
        specialInstructions: orderDetails.specialInstructions,
        totalAmount: getTotal(),
        createdAt: new Date().toISOString()
      };

      const res = await fetch(`${BACKEND_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to place order');

      clearCart();

      router.push({
        pathname: '/receipt',
        params: {
          order: JSON.stringify(data),
          paymentStatus: 'N/A'
        }
      });

    } catch (error) {
      Alert.alert('Order Failed', error.message || 'Something went wrong');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderOrderItem = (item, index) => (
    <View key={`${item.id}-${index}`} style={styles.itemContainer}>
      {item.image && (
        <Image
          source={typeof item.image === 'string'
            ? { uri: item.image }
            : item.image?.uri
              ? { uri: item.image.uri }
              : null}
          style={styles.itemImage}
        />
      )}
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemMeta}>
          Size: {item.size} | Qty: {item.quantity}
        </Text>
        <Text style={styles.itemPrice}>
          Rs. {(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.sectionTitle}>Your Information</Text>

            <TextInput
              style={styles.input}
              placeholder="Name *"
              placeholderTextColor="#888"
              value={orderDetails.customerName}
              onChangeText={(text) => setOrderDetails({ ...orderDetails, customerName: text })}
            />

            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={orderDetails.phone}
              onChangeText={(text) => setOrderDetails({ ...orderDetails, phone: text })}
            />

            <TextInput
              style={styles.input}
              placeholder="Table Number *"
              placeholderTextColor="#888"
              keyboardType="number-pad"
              value={orderDetails.tableNumber}
              onChangeText={(text) => setOrderDetails({ ...orderDetails, tableNumber: text })}
            />

            <TextInput
              style={[styles.input, styles.multilineInput]}
              placeholder="Special Instructions"
              placeholderTextColor="#888"
              value={orderDetails.specialInstructions}
              onChangeText={(text) => setOrderDetails({ ...orderDetails, specialInstructions: text })}
              multiline
              numberOfLines={3}
            />

            <Text style={styles.sectionTitle}>Your Order</Text>
            {cartItems.map(renderOrderItem)}

            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalAmount}>Rs. {(getTotal() ?? 0).toFixed(2)}</Text>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleOrderSubmit}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.submitButtonText}>Place Order</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OrderScreen;
