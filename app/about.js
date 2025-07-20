// app/about.js
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Image source={require('../assets/images/F1.jpg')} style={styles.heroImage} />
      <Text style={styles.title}>Drift & Sip</Text>
      <Text style={styles.tagline}>The City’s Favorite Hangout Spot</Text>

      {/* What We Do */}
      <Text style={styles.sectionTitle}>What We Serve</Text>
      <Text style={styles.paragraph}>
        Drift & Sip is a vibrant **physical café** based in Kathmandu. We proudly serve a wide variety of items:
      </Text>
      <View style={styles.itemsList}>
        <Text style={styles.bullet}>• Coffee & Bubble Tea</Text>
        <Text style={styles.bullet}>• Burgers,Chlli,Sandwich Noodles, Keema Noodles</Text>
        <Text style={styles.bullet}>• Sausage,Chicken Rolls, & Momo</Text>
        <Text style={styles.bullet}>• Refresher,Premium Hookah</Text>
      </View>

      {/* Story */}
      <Image source={require('../assets/images/G1.jpg')} style={styles.sectionImage} />
      <Text style={styles.sectionTitle}>Our Story</Text>
      <Text style={styles.paragraph}>
        Started as a cozy corner café, Drift & Sip has grown into a go-to chill zone for coffee lovers and foodies. Whether you’re catching up with friends or looking to relax, we’ve created the perfect spot for you.
      </Text>

      {/* Vibes Section */}
      <Image source={require('../assets/images/M1.jpg')} style={styles.sectionImage} />
      <Text style={styles.sectionTitle}>Vibes & Experience</Text>
      <Text style={styles.paragraph}>
        Good vibes, soulful music, comfy corners, and the aroma of fresh brew — that's our daily rhythm. Our interior reflects warmth, creativity, and urban cool.
      </Text>

      {/* Contact Box */}
      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>Contact & Location</Text>

        <View style={styles.contactRow}>
          <Ionicons name="location" size={22} color="green" style={styles.icon} />
          <Text style={styles.contactText}>Koteshwor, Kathmandu</Text>
        </View>

        <View style={styles.contactRow}>
          <Ionicons name="call" size={22} color="green" style={styles.icon} />
          <Text style={styles.contactText}>+977 976-9402712</Text>
        </View>

        <View style={styles.contactRow}>
          <MaterialCommunityIcons name="email" size={22} color="yellow" style={styles.icon} />
          <Text style={styles.contactText}>driftandsip22@gmail.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    backgroundColor: '#1a1a1a',
  },
  heroImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f4f1ee',
    marginTop: 16,
  },
  tagline: {
    textAlign: 'center',
    fontSize: 16,
    color: '#bfa08f',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f4b63f',
    marginHorizontal: 20,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 15,
    color: '#ddd',
    lineHeight: 22,
    marginHorizontal: 20,
    marginBottom: 14,
  },
  sectionImage: {
    width: width - 40,
    height: 180,
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 12,
  },
  itemsList: {
    marginLeft: 28,
    marginBottom: 18,
  },
  bullet: {
    fontSize: 15,
    color: '#ccc',
    marginBottom: 6,
  },
  contactBox: {
    marginTop: 30,
    backgroundColor: '#292524',
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 14,
  },
  contactTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    color: '#eee',
    fontSize: 15,
    marginLeft: 10,
  },
  icon: {
    marginRight: 4,
  },
});
