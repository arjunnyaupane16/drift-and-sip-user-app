import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderTypeSelector = ({ selectedType, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Order Type</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => onSelect('dine-in')}
          style={[
            styles.optionButton,
            selectedType === 'dine-in' && styles.selectedButton
          ]}
        >
          <Text
            style={[
              styles.optionText,
              selectedType === 'dine-in' && styles.selectedText
            ]}
          >
            Dine-In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  optionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2196f3',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginRight: 10
  },
  optionText: {
    fontSize: 16,
    color: '#2196f3',
    fontWeight: 'bold'
  },
  selectedButton: {
    backgroundColor: '#ff3b30',
    borderColor: '#ff3b30'
  },
  selectedText: {
    color: 'white'
  }
});

export default OrderTypeSelector;
