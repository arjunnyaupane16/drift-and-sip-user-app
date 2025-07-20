import { FontAwesome } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import { useState } from 'react';
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview'; // ✅ ADD THIS IMPORT

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendEmail = async () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please provide a valid email address');
      return;
    }

    try {
      const isAvailable = await MailComposer.isAvailableAsync();
      if (isAvailable) {
        await MailComposer.composeAsync({
          recipients: ['driftandsip22@gmail.com'],
          subject: `Message from ${name}`,
          body: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
        });
        Alert.alert('Success', 'Message composed. Please send it from your mail app.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        Alert.alert('Mail Not Available', 'Please configure a mail app on your device.');
      }
    } catch (error) {
      Alert.alert('Error', 'Could not send email. Try again later.');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/drift-logo.png')} style={styles.logo} />
        <Text style={styles.title}>Contact</Text>
      </View>

      {/* Google Map (Embedded) */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapTitle}>Find Us Here</Text>

        {/* Embedded Google Map via WebView */}
        <View style={styles.webMap}>
          <WebView
            source={{
              uri: 'https://www.google.com/maps?q=Drift+and+Sip,Koteshwor,Kathmandu&output=embed',
            }}
            style={{ flex: 1 }}
          />
        </View>

        <TouchableOpacity
          style={styles.mapButton}
          onPress={() =>
            Linking.openURL('https://www.google.com/maps?q=Drift+and+Sip,Koteshwor,Kathmandu')
          }
        >
          <View style={styles.mapButtonInner}>
            <FontAwesome name="map" size={20} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.mapButtonText}>Open in Google Maps</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Contact Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Send us a message</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
          maxLength={250}
          placeholderTextColor="#aaa"
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.sendButton} onPress={handleSendEmail}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sendButton, { backgroundColor: '#ccc' }]}
            onPress={() => {
              setName('');
              setEmail('');
              setMessage('');
            }}
          >
            <Text style={[styles.sendButtonText, { color: '#333' }]}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerTitle}>Contact Drift & Sip</Text>

        <View style={styles.contactItem}>
          <FontAwesome name="map-marker" size={20} color="green" style={styles.contactIcon} />
          <Text style={styles.footerText}>Koteshwor, Kathmandu</Text>
        </View>

        <TouchableOpacity onPress={() => Linking.openURL('tel:+9779769402712')}>
          <View style={styles.contactItem}>
            <FontAwesome name="phone" size={20} color="green" style={styles.contactIcon} />
            <Text style={styles.footerText}>+977 976-9402712</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('mailto:driftandsip22@gmail.com')}>
          <View style={styles.contactItem}>
            <FontAwesome name="envelope" size={20} color="yellow" style={styles.contactIcon} />
            <Text style={styles.footerText}>driftandsip22@gmail.com</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.socialTitle}>Follow Us</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity
            style={styles.socialIcon}
            onPress={() => Linking.openURL('https://www.instagram.com/drift_and_sip')}
          >
            <FontAwesome name="instagram" size={28} color="#C13584" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIcon}
            onPress={() => Linking.openURL('https://www.facebook.com/share/16v37pa55K')}
          >
            <FontAwesome name="facebook-square" size={28} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIcon}
            onPress={() => Linking.openURL('https://www.tiktok.com/@driftandsip')}
          >
            <FontAwesome name="music" size={28} color="#25F4EE" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fefefe' },
  scrollContent: { paddingBottom: 40 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6b4c3b',
  },
  mapContainer: { padding: 20 },
  mapTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  webMap: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mapButton: {
    marginTop: 12,
    backgroundColor: '#4285F4',
    borderRadius: 6,
    padding: 10,
  },
  mapButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: { padding: 20 },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6b4c3b',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#333',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sendButton: {
    backgroundColor: '#6b4c3b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerContainer: {
    backgroundColor: '#6b4c3b',
    padding: 20,
    paddingBottom: 30,
  },
  footerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactIcon: {
    marginRight: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 15,
  },
  socialTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialIcon: {
    marginRight: 16,
  },
});
