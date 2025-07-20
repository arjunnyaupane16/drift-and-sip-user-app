import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#E53935', // Main red theme
    marginBottom: 16,
    textAlign: 'center',
  },

  scrollContainer: {
    paddingBottom: 150,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },

  emptyText: {
    fontSize: 20,
    color: '#666',
    marginTop: 12,
  },

  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 3,
  },

  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#eee',
  },

  itemInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },

  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263238', // dark blue-grey
    marginBottom: 4,
  },

  itemMeta: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  qtyBtn: {
    borderColor: '#42A5F5', // Blue accent
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 6,
    backgroundColor: '#fff',
  },

  qtyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  itemTotal: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  deleteButton: {
    backgroundColor: '#E53935', // Red for delete
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    marginVertical: 6,
    borderRadius: 14,
  },

  footer: {
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 18,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 10,
    borderRadius: 8,
  },

  totalBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },

  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E53935', // Red
  },

  checkoutBtn: {
    backgroundColor: '#E53935', // Red main
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#E53935',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  clearBtn: {
    alignItems: 'center',
    paddingTop: 6,
  },

  clearText: {
    fontSize: 14,
    color: '#42A5F5', // blue for subtle link
  },
});
