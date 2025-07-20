// app/styles/PaymentStyle.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  paymentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginVertical: 10
  },

  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10
  },

  selectedPayment: {
    borderColor: '#007bff',
    backgroundColor: '#e6f0ff'
  },

  disabledOption: {
    opacity: 0.5
  },

  paymentIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain'
  },

  paymentLabel: {
    fontSize: 16
  },

  qrContainer: {
    marginTop: 10,
    alignItems: 'center'
  },

  qrTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6
  },

  qrImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc'
  }
});
