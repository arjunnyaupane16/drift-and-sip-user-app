import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContainer: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 160 : 120,
  },

  // Section Title
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 12,
    color: '#222',
  },

  // Input Fields
  input: {
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    marginBottom: 14,
    fontSize: 16,
    color: '#111',
  },

  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },

  // Order Item Card
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },

  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eaeaea',
  },

  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },

  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },

  itemMeta: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },

  itemPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#d32f2f',
    marginTop: 4,
  },

  // Total Section
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#444',
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007bff',
  },

  // Footer Button Area
  footer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 10,
    zIndex: 1000,
  },

  submitButton: {
    backgroundColor: '#e53935',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    backgroundColor: '#bbb',
  },

  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },

  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 24,
    color: '#222',
    textAlign: 'center',
  },

  authButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 12,
    width: '80%',
    alignItems: 'center',
  },

  authButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  authToggleText: {
    color: '#007bff',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});
