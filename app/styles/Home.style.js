import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const isSmallDevice = width < 768;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  // Navbar
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 3,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoImage: {
    width: 30,
    height: 30,
    marginRight: 8,
    resizeMode: 'contain',
  },

  callBtn: {
    backgroundColor: '#4CAF50', // ✅ Green button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  callBtnText: {
    color: '#fff',
    fontSize: 16,
  },

  // Hero
  hero: {
    backgroundColor: '#6e6e6e',
    padding: 10,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  heroButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  primaryBtn: {
    backgroundColor: '#b7895b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    margin: 5,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  secondaryBtn: {
    backgroundColor: '#b7895b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    margin: 5,
    borderWidth: 2,
    borderColor: '#fff',
  },
  secondaryBtnText: {
    color: '#fff',
    fontSize: 16,
  },

  // Section Title
  section: {
    padding: 30,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },

  // Specialties Grid
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 0,
    paddingHorizontal: 0,
  },
  card: {
    width: isSmallDevice ? '47%' : 160,
    height: isSmallDevice ? '52%' : 220,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 6,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b7895b',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },

  // Founders
  founderCards: {
    gap: 20,
    width: '100%',
  },
  founderCard: {
    flexDirection: isSmallDevice ? 'column' : 'row',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 1,
  },
  founderImage: {
    width: 150,
    height: 150,
    borderRadius: 60,
    marginBottom: isSmallDevice ? 10 : 0,
    marginRight: isSmallDevice ? 0 : 20,
    borderWidth: 3,
    borderColor: '#b7895b',
  },
  founderName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b7895b',
  },
  founderRole: {
    fontStyle: 'italic',
    color: '#777',
    marginBottom: 6,
  },
  founderDesc: {
    color: '#444',
    marginTop: 4,
    maxWidth: 300,
  },

  // Footer
  footer: {
    backgroundColor: '#333',
    padding: 30,
    alignItems: 'center',
  },
  footerLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
  },
});
