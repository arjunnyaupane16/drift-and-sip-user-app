import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useCart } from '../context/CartContext';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const FloatingCartButton = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  if (!cartItems || cartItems.length === 0) return null;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Animatable.View
      animation={{
        from: { transform: [{ translateY: 80 }, { translateX: 50 }], opacity: 0 },
        to: { transform: [{ translateY: 0 }, { translateX: 0 }], opacity: 1 },
      }}
      duration={600}
      delay={100}
      useNativeDriver
      style={styles.wrapper}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() => router.push('/cart')}
        activeOpacity={0.85}
      >
        <FontAwesome name="shopping-cart" size={18} color="#fff" />
        <Text style={styles.text}> {totalItems} - NPR {totalPrice} </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default FloatingCartButton;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 22,
    right: 18,
    zIndex: 999,
  },
  container: {
    backgroundColor: '#E53935', // Cart red
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 13,
  },
});
