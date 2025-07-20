import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Platform, StatusBar as RNStatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import TopNavBar from '../components/TopNavBar';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <CartProvider>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
            }}
          >
            <StatusBar style="dark" translucent backgroundColor="transparent" />

            {/* 🔝 Top Navigation */}
            <TopNavBar />

            {/* 🧭 Page Navigation */}
            <Stack
              screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                contentStyle: { backgroundColor: '#f8f9fa' },
              }}
            >
              {/* Main Screens */}
              <Stack.Screen name="index" options={{ title: 'Home' }} />
              <Stack.Screen name="menu" options={{ title: 'Menu' }} />
              <Stack.Screen name="cart" options={{ title: 'Your Cart' }} />
              <Stack.Screen name="order" options={{ title: 'Order' }} />
              <Stack.Screen name="receipt" options={{ title: 'Receipt' }} />
              <Stack.Screen name="checkout" options={{ title: 'Checkout', presentation: 'modal' }} />

              {/* Visit Us Screens */}
              <Stack.Screen name="about" options={{ title: 'About Us' }} />
              <Stack.Screen name="contact" options={{ title: 'Contact' }} />
              <Stack.Screen name="gallery" options={{ title: 'Gallery' }} />
            </Stack>
          </View>
        </CartProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
