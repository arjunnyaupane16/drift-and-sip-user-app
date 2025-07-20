import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  detailImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    resizeMode: 'cover',
  },

  detailContent: {
    padding: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  detailName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#5C2C06',
    marginBottom: 10,
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  priceLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },

  priceValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  sizeContainer: {
    marginVertical: 20,
  },

  sizeLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 12,
  },

  sizeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 12,
    rowGap: 12,
  },

  sizeButton: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 20,
    borderWidth: 1.5,
    alignItems: 'center',
    minWidth: 90,
  },

  activeSizeButton: {
    backgroundColor: '#1E1E1E',
    borderColor: '#1E1E1E',
  },

  inactiveSizeButton: {
    backgroundColor: '#F0F0F0',
    borderColor: '#D0D0D0',
  },

  activeSizeText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },

  inactiveSizeText: {
    color: '#444',
    fontWeight: '500',
    fontSize: 16,
  },

  quantityContainer: {
    marginVertical: 20,
  },

  quantityLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 10,
  },

  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },

  quantityButton: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  quantityButtonText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  quantityText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },

  totalText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginVertical: 16,
    textAlign: 'center',
  },

  addToCartButton: {
    backgroundColor: '#28a745',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  addToCartButtonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  extraDetails: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 24,
    marginTop: 12,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
    marginTop: 16,
  },

  subText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
});
