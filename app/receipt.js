import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

const ReceiptScreen = () => {
  const { order } = useLocalSearchParams();
  const [parsedOrder, setParsedOrder] = useState(null);

  useEffect(() => {
    try {
      if (order) {
        const parsed = JSON.parse(order);
        setParsedOrder(parsed);
      }
    } catch (err) {
      console.error('Invalid order data:', err);
    }
  }, [order]);

  if (!parsedOrder) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>⚠️ No Order Found</Text>
        <Text style={styles.subtitle}>Please place a new order to view the receipt.</Text>
      </View>
    );
  }

  const { customer = {}, items = [], orderType, tableNumber, _id, date } = parsedOrder;

  const calculatedTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formattedDate = new Date(date || Date.now()).toLocaleString();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🧾 Order Receipt</Text>

      <Text style={styles.receiptInfo}>Order ID: #{_id?.slice(-6) || 'N/A'}</Text>
      <Text style={styles.receiptInfo}>Date: {formattedDate}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👤 Customer Information</Text>
        <Text style={styles.infoText}>Name: {customer.name || 'N/A'}</Text>
        <Text style={styles.infoText}>Phone: {customer.phone || 'N/A'}</Text>
        {customer.address ? <Text style={styles.infoText}>Address: {customer.address}</Text> : null}
      </View>

      {orderType === 'dine-in' && tableNumber && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🍽️ Dine-In Details</Text>
          <Text style={styles.infoText}>Table Number: {tableNumber}</Text>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛒 Items Ordered</Text>
        {items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            {item.image && (
              <Image
                source={item.image}
                style={styles.itemImage}
                resizeMode="cover"
              />
            )}
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              {item.size && <Text style={styles.infoText}>Size: {item.size}</Text>}
              <Text style={styles.infoText}>Quantity: {item.quantity}</Text>
              <Text style={styles.infoText}>
                Subtotal: Rs. {(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total Amount</Text>
        <Text style={styles.totalAmount}>Rs. {calculatedTotal.toFixed(2)}</Text>
      </View>

      <Text style={styles.thankYou}>🙏 Thank you for ordering with us!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    paddingBottom: 40,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 6,
    textAlign: 'center',
  },
  receiptInfo: {
    textAlign: 'center',
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  section: {
    marginVertical: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 6,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  itemDetails: {
    marginLeft: 12,
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
    color: '#222',
  },
  totalSection: {
    marginTop: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  thankYou: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 16,
    color: '#4caf50',
    fontStyle: 'italic',
  },
});

export default ReceiptScreen;
