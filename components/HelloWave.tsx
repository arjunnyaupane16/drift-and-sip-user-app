import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWave = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Hello!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  text: { fontSize: 28 },
});

export default HelloWave;
