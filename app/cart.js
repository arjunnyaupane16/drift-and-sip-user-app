import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Swipeable } from 'react-native-gesture-handler';
import { useCart } from '../context/CartContext';
import styles from './styles/CartStyle';

export default function CartScreen() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
  } = useCart();

  const router = useRouter();

  const renderRightActions = (item) => (
    <TouchableOpacity
      onPress={() => removeFromCart(item.id, item.size)}
      style={styles.deleteButton}
    >
      <FontAwesome name="trash" size={20} color="white" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛒 Your Cart</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="shopping-cart" size={60} color="#ddd" />
          <Text style={styles.emptyText}>Your cart is currently empty.</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {cartItems.map((item, index) => (
            <Swipeable
              key={`${item.id}-${item.size}`}
              renderRightActions={() => renderRightActions(item)}
            >
              <Animatable.View
                animation="fadeInUp"
                duration={600}
                delay={index * 100}
                style={styles.itemCard}
              >
                <Image source={item.image} style={styles.itemImage} />

                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemMeta}>Size: {item.size}</Text>
                  <Text style={styles.itemMeta}>
                    ₹{item.price} × {item.quantity}
                  </Text>

                  <View style={styles.quantityRow}>
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() =>
                        item.quantity > 1
                          ? updateQuantity(item.id, item.size, item.quantity - 1)
                          : removeFromCart(item.id, item.size)
                      }
                    >
                      <FontAwesome name="minus" size={14} color="#4DB6AC" />
                    </TouchableOpacity>

                    <Text style={styles.qtyText}>{item.quantity}</Text>

                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                    >
                      <FontAwesome name="plus" size={14} color="#4DB6AC" />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.itemTotal}>
                    Total: ₹{((item.price ?? 0) * (item.quantity ?? 1)).toFixed(2)}
                  </Text>
                </View>
              </Animatable.View>
            </Swipeable>
          ))}
        </ScrollView>
      )}

      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalBar}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalAmount}>
              ₹{(getTotal() ?? 0).toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={() => router.push('/order')}
          >
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={clearCart} style={styles.clearBtn}>
            <Text style={styles.clearText}>Clear Cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
