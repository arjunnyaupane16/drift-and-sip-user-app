import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import bubbleTea from '../assets/images/Bubble tea.png';
import coffee from '../assets/images/Coffee.png';
import foodItems from '../assets/images/Food Items.png';
import hookah from '../assets/images/Hookah.png';
import karuna from '../assets/images/Karuna.png';
import kopila from '../assets/images/Kopila.png';
import styles from './styles/Home.style';

export default function HomePage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* Navbar */}
        <View style={styles.navbar}>
          <View style={styles.logoRow}>
            <Image
              source={require('../assets/images/drift-logo.png')}
              style={styles.logoImage}
            />
            <Text style={styles.logo}>Drift and Sip</Text>
          </View>

          <TouchableOpacity
            style={styles.callBtn}
            onPress={() => Linking.openURL('tel:+977976902712')}
          >
            <Text style={styles.callBtnText}>
              <Text>📞</Text> Call Now
            </Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Welcomeeeee</Text>
          <Text style={styles.heroSubtitle}>
            Where every sip takes you on a journey of flavor and comfort
          </Text>

          <View style={styles.heroButtons}>
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => router.push('/menu')}
            >
              <Text style={styles.primaryBtnText}>View Menu</Text>
            </TouchableOpacity>


          </View>
        </View>

        {/* Specialties */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Specialties</Text>
          <Text style={styles.sectionSubtitle}>Explore our most loved categories</Text>

          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() =>

                router.push({ pathname: '/menu', params: { category: 'bubble-tea' } })
              }
            >
              <Image source={bubbleTea} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Bubble Tea</Text>
              <Text style={styles.cardText}>20+ refreshing flavors</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                router.push({ pathname: '/menu', params: { category: 'coffee' } })
              }
            >
              <Image source={coffee} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Coffee</Text>
              <Text style={styles.cardText}>Bold blends & rich aromas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                router.push({ pathname: '/menu', params: { category: 'food' } })
              }
            >
              <Image source={foodItems} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Food Items</Text>
              <Text style={styles.cardText}>Momo, noodles, burgers & more</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                router.push({ pathname: '/menu', params: { category: 'hookah' } })
              }
            >
              <Image source={hookah} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Hookah</Text>
              <Text style={styles.cardText}>Smooth premium flavors</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Founders */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Founders</Text>
          <View style={styles.founderCards}>
            <View style={styles.founderCard}>
              <Image source={karuna} style={styles.founderImage} />
              <View>
                <Text style={styles.founderName}>Karuna Jaishi</Text>
                <Text style={styles.founderRole}>Co-Founder & CEO</Text>
                <Text style={styles.founderDesc}>
                </Text>
              </View>
            </View>

            <View style={styles.founderCard}>
              <Image source={kopila} style={styles.founderImage} />
              <View>
                <Text style={styles.founderName}>Kopila Nyaupane</Text>
                <Text style={styles.founderRole}>Co-Founder</Text>
                <Text style={styles.founderDesc}>
                  {'\n'}

                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerLogo}>Drift and Sip</Text>
          <Text style={styles.footerText}>
            <Text>📍</Text> Koteshwor, Kathmandu{'\n'}
            <Text>📞</Text> +977 976-9402712{'\n'}
            <Text>📧</Text> driftandsip22@gmail.com
          </Text>


          <View style={{ flexDirection: 'row', gap: 20, marginTop: 20 }}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.instagram.com/drift_and_sip?igsh=MTlsa2xwbXptYmNhMQ=='
                )
              }
            >
              <FontAwesome name="instagram" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.facebook.com/share/16v37pa55K/?mibextid=wwXIfr'
                )
              }
            >
              <FontAwesome name="facebook-square" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.tiktok.com/@driftandsip')}
            >
              <Entypo name="video" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
