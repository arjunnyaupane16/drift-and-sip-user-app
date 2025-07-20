import React, { useState } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import * as Animatable from 'react-native-animatable';

const images = [
  { id: 1, source: require('../assets/images/A1.jpg') },
  { id: 2, source: require('../assets/images/B1.jpg') },
  { id: 3, source: require('../assets/images/C1.jpg') },
  { id: 4, source: require('../assets/images/D1.jpg') },
  { id: 5, source: require('../assets/images/E1.jpg') },
  { id: 6, source: require('../assets/images/F1.jpg') },
  { id: 7, source: require('../assets/images/G1.jpg') },
  { id: 8, source: require('../assets/images/H1.jpg') },
  { id: 9, source: require('../assets/images/I1.jpg') },
  { id: 10, source: require('../assets/images/J1.jpg') },
  { id: 11, source: require('../assets/images/K1.jpg') },
  { id: 12, source: require('../assets/images/L1.jpg') },
  { id: 13, source: require('../assets/images/M1.jpg') },
  { id: 14, source: require('../assets/images/N1.jpg') },
];

export default function GalleryScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openImage = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const imageUrls = images.map((img) => ({
    url: '',
    props: { source: img.source },
  }));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/drift-logo.png')} style={styles.logo} />
        <Text style={styles.title}>Gallery</Text>
      </View>
      <Text style={styles.subtitle}>Tap on any image to zoom in and explore</Text>

      {/* Image Grid */}
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => openImage(index)} activeOpacity={0.8}>
            <Animatable.View animation="zoomIn" duration={500} delay={index * 50}>
              <Image source={item.source} style={styles.thumbnail} />
            </Animatable.View>
          </TouchableOpacity>
        )}
      />

      {/* Zoom Viewer Modal */}
      <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <StatusBar hidden />
        <ImageViewer
          imageUrls={imageUrls}
          index={selectedIndex}
          onSwipeDown={() => setModalVisible(false)}
          enableSwipeDown={true}
          backgroundColor="black"
          onCancel={() => setModalVisible(false)}
          saveToLocalByLongPress={false}
        />
      </Modal>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginLeft: 16,
    marginBottom: 12,
  },
  grid: {
    paddingHorizontal: 12,
  },
  thumbnail: {
    width: width / 2 - 24,
    height: width / 2 - 24,
    margin: 6,
    borderRadius: 16,
    resizeMode: 'cover',
  },
});
