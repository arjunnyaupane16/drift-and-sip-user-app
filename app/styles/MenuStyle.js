import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Main container styles
  container: {
    backgroundColor: '#ffffff',
    paddingBottom: 120,
    borderTopWidth: 3,
    borderTopColor: '#90caf9',
    borderBottomWidth: 3,
    borderBottomColor: '#90caf9',
  },

  // Category selection buttons
  topButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    margin: 5,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#cfd8dc',
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },

  activeCategoryButton: {
    backgroundColor: '#2196f3',
    borderColor: '#1565c0',
    shadowColor: '#2196f3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0d47a1',
  },

  activeButtonText: {
    color: '#fff',
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },

  categoryTotalText: {
    fontSize: 11,
    color: '#1565c0',
    marginTop: 2,
    fontWeight: 'bold',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 10,
  },

  // Section styles
  section: {
    marginBottom: 30,
    paddingHorizontal: 12,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 18,
    paddingLeft: 12,
    color: '#5d4037',
    borderLeftWidth: 5,
    borderLeftColor: '#90caf9',
    textShadowColor: 'rgba(0,0,0,0.05)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },

  sectionTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginBottom: 12,
    marginLeft: 12,
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },

  // Grid layout
  gridRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  cardWrapper: {
    width: '175',
    marginBottom: 16,
    paddingHorizontal: 2, // ✅ added for spacing between cards
  },


  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 9,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },

  name: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
    color: '#5d4037',
    height: 40,
    lineHeight: 20,
  },

  priceInfo: {
    fontSize: 13,
    color: '#616161',
    marginBottom: 10,
    fontWeight: '500',
  },

  // Size options
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  sizeButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 3,
    height: 32,
  },

  activeSizeButton: {
    backgroundColor: '#2196f3',
    shadowColor: '#2196f3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },

  inactiveSizeButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  activeSizeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },

  inactiveSizeText: {
    color: '#424242',
    fontWeight: '500',
    fontSize: 13,
  },

  // Quantity selector
  qty: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  qtyButton: {
    backgroundColor: '#e3f2fd',
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#bbdefb',
  },

  qtyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginTop: -2,
  },

  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 12,
    minWidth: 20,
    textAlign: 'center',
  },

  // Total price
  totalText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0d47a1',
    marginBottom: 8,
    textAlign: 'center',
    backgroundColor: '#e3f2fd',
    paddingVertical: 4,
    borderRadius: 8,
  },

  // Add to cart button
  addToCart: {
    backgroundColor: '#2196f3',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    marginTop: 6,
    shadowColor: '#2196f3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },

  // Floating cart button
  floatingCartContainer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    zIndex: 100,
  },

  floatingCartButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 22,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
  },

  cartIcon: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
  },

  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FF6B6B',
  },

  cartBadgeText: {
    color: '#FF6B6B',
    fontSize: 12,
    fontWeight: 'bold',
  },

  cartTotalText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
  },

  // Animation styles
  flyingItem: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    borderWidth: 1.5,
    borderColor: '#2196f3',
  },

  flyingItemText: {
    fontWeight: 'bold',
    color: '#2196f3',
    fontSize: 14,
  },

  // Empty state
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  emptyText: {
    fontSize: 18,
    color: '#757575',
    textAlign: 'center',
    marginTop: 20,
  },

  // Loading state
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Responsive adjustments
  responsiveCard: {
    '@media (max-width: 350)': {
      width: '100%',
    },
  },
});

