// styles/GalleryStyle.js

import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },

  scrollContent: {
    paddingBottom: Platform.OS === 'ios' ? 100 : 60,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
  },

  title: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#333',
  },

  caption: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },

  // Map Container
  mapContainer: {
    marginBottom: 20,
    backgroundColor: '#f6f6f6',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  mapTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },

  mapButton: {
    backgroundColor: '#2c8ef4',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },

  mapButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  footerContainer: {
    backgroundColor: '#1a1a1a', // dark background for Perplexity-style feel
    padding: 20,
    borderRadius: 16,
    marginTop: 30,
  },

  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },

  footerText: {
    color: '#fff',
    fontSize: 15,
  },

  // Form
  formContainer: {
    backgroundColor: '#f6f6f6',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  formTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },

  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    color: '#333',
    paddingVertical: Platform.OS === 'ios' ? 14 : 10, // ✅ fixed for iPhone
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 20,
  },

  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },

  // Buttons
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sendButton: {
    backgroundColor: '#ff6a00',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },

  clearButton: {
    backgroundColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },

  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Footer
  footerContainer: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 20,
    marginTop: 25,
    shadowColor: '#001',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },

  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },

  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  contactIcon: {
    marginRight: 10,
  },

  footerText: {
    color: 'black',
    fontSize: 15,
  },

  // Social Media
  socialTitle: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  socialIcons: {
    flexDirection: 'row',
  },

  socialIcon: {
    marginRight: 16,
  },

  instagramIcon: {
    color: '#C13584',
  },

  facebookIcon: {
    color: '#1877F2',
  },

  tiktokIcon: {
    color: '#25F4EE',
  },
});
