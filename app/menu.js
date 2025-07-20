import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FloatingCartButton from '../components/FloatingCartButton';
import { useCart } from '../context/CartContext';
import styles from './styles/MenuStyle';

// Image imports
import burger from '../assets/images/burger.jpg';
import cappuccino from '../assets/images/cappuccino.jpg';
import chickenMomo from '../assets/images/chicken_momo.jpg';
import classicMilkTea from '../assets/images/classic_milk_tea.jpg';
import doubleAppleHookah from '../assets/images/double_apple_hookah.jpg';
import espresso from '../assets/images/espresso.jpg';
import grapesHookah from '../assets/images/grapes_hookah.jpg';
import latte from '../assets/images/latte.jpg';
import mangoGreenTea from '../assets/images/mango_green_tea.jpg';
import mintHookah from '../assets/images/mint_hookah.jpg';
import roll from '../assets/images/roll.jpg';
import sandwich from '../assets/images/sandwich.jpg';
import sausage from '../assets/images/sausage.jpg';
import keemaNoodles from '../assets/images/keema_Noodles.jpg';
import strawberryBoba from '../assets/images/strawberry_boba.jpg';
import taroBubbleTea from '../assets/images/taro_bubble_tea.jpg';
// Category data
const categories = {
  'bubble-tea': {
    title: '🧋 Bubble Tea',
    items: [
      { id: 1, name: 'Classic Milk Tea', priceHalf: 70, priceFull: 120, image: classicMilkTea },
      { id: 3, name: 'Mango Green Tea', priceHalf: 80, priceFull: 135, image: mangoGreenTea },
      { id: 4, name: 'Strawberry Boba', priceHalf: 85, priceFull: 140, image: strawberryBoba },
      { id: 2, name: 'Taro Bubble Tea', priceHalf: 75, priceFull: 130, image: taroBubbleTea },
    ],
  },
  coffee: {
    title: '☕ Coffee',
    items: [
      { id: 6, name: 'Cappuccino', priceHalf: 70, priceFull: 120, image: cappuccino },
      { id: 5, name: 'Espresso', priceHalf: 50, priceFull: 90, image: espresso },
      { id: 7, name: 'Latte', priceHalf: 75, priceFull: 130, image: latte },
    ],
  },
  food: {
    title: '🍽️ Food',
    items: [
      { id: 10, name: 'Burger', priceHalf: 70, priceFull: 120, image: burger },
      { id: 8, name: 'Chicken Momo', priceHalf: 90, priceFull: 160, image: chickenMomo },
       { id: 11, name: 'Keema Noodles', priceHalf: 80, priceFull: 150, image: keemaNoodles },
      { id: 9, name: 'Roll', priceHalf: 80, priceFull: 140, image: roll },
      { id: 12, name: 'Sandwich', priceHalf: 80, priceFull: 140, image: sandwich },
      { id: 13, name: 'sausage', priceHalf: 60, priceFull: 110, image: sausage },
    ],
  },
  hookah: {
    title: '💨 Hookah',
    items: [

      { id: 15, name: 'Double Apple Hookah', priceHalf: 160, priceFull: 270, image: doubleAppleHookah },
      { id: 16, name: 'Grapes Hookah', priceHalf: 155, priceFull: 260, image: grapesHookah },
       { id: 14, name: 'Mint Hookah', priceHalf: 150, priceFull: 250, image: mintHookah },
    ],
  },
};

export default function Menu() {
  const scrollRef = useRef();
  const sectionRefs = useRef({});
  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const refs = Object.entries(sectionRefs.current);

    const promises = refs.map(([key, ref]) => {
      return new Promise((resolve) => {
        if (ref && scrollRef.current) {
          ref.measureLayout(
            scrollRef.current,
            (x, y) => resolve({ key, y }),
            () => resolve(null)
          );
        } else {
          resolve(null);
        }
      });
    });

    Promise.all(promises).then((results) => {
      const offsets = results.filter(Boolean).sort((a, b) => a.y - b.y);
      let current = activeSection;

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY + 50 >= offsets[i].y) {
          current = offsets[i].key;
          break;
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    });
  };


  const { addToCart, totalItems, totalPrice } = useCart();
  const params = useLocalSearchParams();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('bubble-tea');
  const [categoryTotals, setCategoryTotals] = useState(
    Object.keys(categories).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {})
  );
  const [animatingItem, setAnimatingItem] = useState(null);

  const animation = useRef(new Animated.Value(0)).current;

  const scrollToSection = (key) => {
    sectionRefs.current[key]?.measureLayout(
      scrollRef.current,
      (x, y) => {
        scrollRef.current.scrollTo({ y, animated: true });
      },
      (err) => console.log('measure error:', err)
    );
  };


  useEffect(() => {
    if (params.category && sectionRefs.current[params.category]) {
      setTimeout(() => {
        scrollToSection(params.category);
      }, 400);
    }
  }, [params.category]);

  const handleAddToCart = (item, size, quantity, total, position) => {
    const finalQuantity = quantity === 0 ? 1 : quantity;
    const finalTotal = quantity === 0 ? (size === 'Half' ? item.priceHalf : item.priceFull) : total;

    // Start the animation
    setAnimatingItem({
      id: item.id,
      position: position || { x: 0, y: 0 }

    });
    animateToCart(position);
    // Add to cart after animation starts
    setTimeout(() => {
      addToCart({
        ...item,
        id: item.id.toString(),
        size,
        price: size === 'Half' ? item.priceHalf : item.priceFull,
        quantity: finalQuantity,
        finalPrice: finalTotal,
      });

      setCategoryTotals(prev => ({
        ...prev,
        [activeSection]: prev[activeSection] + finalTotal,
      }));
    }, 300);
  };

  const animateToCart = (startPosition) => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start(() => {
      setAnimatingItem(null);
    });
  };

  const navigateToDetails = (item) => {
    router.push({
      pathname: '/menuDetails',
      params: {
        ...item,
        id: item.id.toString(),
        price: item.priceHalf,
        image:
          item.image === burger ? 'burger' :
            item.image === cappuccino ? 'cappuccino' :
              item.image === classicMilkTea ? 'classic_milk_tea' :
                item.image === mangoGreenTea ? 'mango_green_tea' :
                  item.image === taroBubbleTea ? 'taro_bubble_tea' :
                    item.image === strawberryBoba ? 'strawberry_boba' :
                      item.image === chickenMomo ? 'chicken_momo' :
                        item.image === roll ? 'roll' :
                          item.image === espresso ? 'espresso' :
                            item.image === latte ? 'latte' :
                              item.image === doubleAppleHookah ? 'double_apple_hookah' :
                                item.image === grapesHookah ? 'grapes_hookah' :
                                  item.image === mintHookah ? 'mint_hookah' :
                                    item.image === doubleAppleHookah ? 'double_apple_hookah' :
                                      item.image === grapesHookah ? 'grapes_hookah' :
                                        item.image === burger ? 'burger' :
                                          item.image === keemaNoodles ? 'keema_noodles' :
                                            item.image === sandwich ? 'sandwich' :
                                              item.image === sausage ? 'sausage' : 'burger',
      },
    });
  };

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {/* Animated flying item */}
      {animatingItem && (
        <Animated.View
          style={[styles.flyingItem, {
            left: animatingItem.position.x,
            top: animatingItem.position.y,
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 120], // rightwards
                }),
              },
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 180], // downwards
                }),
              },
              {
                scale: animation.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 1.5, 0.5],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 1, 0],
            }),

          }]}
        >
          <Text style={styles.flyingItemText}>+1</Text>
        </Animated.View>
      )}

      <View style={styles.topButtons}>
        {Object.keys(categories).map((key) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.categoryButton,
              activeSection === key && styles.activeCategoryButton,
            ]}
            onPress={() => scrollToSection(key)}
          >
            <Text style={[
              styles.buttonText,
              activeSection === key && styles.activeButtonText,
            ]}>
              {categories[key].title}
            </Text>
            {categoryTotals[key] > 0 && (
              <Text style={styles.categoryTotalText}>Rs.{categoryTotals[key]}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >

        {Object.entries(categories).map(([key, { title, items }]) => (
          <View
            key={key}
            ref={(ref) => (sectionRefs.current[key] = ref)}
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>{title}</Text>
            {categoryTotals[key] > 0 && (
              <Text style={styles.sectionTotal}>Total: Rs.{categoryTotals[key]}</Text>
            )}

            <View style={styles.gridRowWrap}>
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onAddToCart={handleAddToCart}
                  onPressDetails={() => navigateToDetails(item)}
                  isAnimating={animatingItem?.id === item.id}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      <FloatingCartButton itemCount={totalItems} totalPrice={totalPrice} />
    </View>
  );
}

function ItemCard({ item, onAddToCart, onPressDetails, isAnimating }) {
  const [size, setSize] = useState('Full');
  const [quantity, setQuantity] = useState(0);
  const price = size === 'Half' ? item.priceHalf : item.priceFull;
  const total = price * quantity;
  const itemRef = useRef(null);
  const handleAddToCartPress = (e) => {
    e.stopPropagation();

    if (quantity === 0) {
      setQuantity(1); // Update state for UI
    }

    itemRef.current.measureInWindow((x, y) => {
      onAddToCart(item, size, quantity === 0 ? 1 : quantity, total === 0 ? price : total, { x, y });
    });
  };


  return (
    <View ref={itemRef} collapsable={false}>
      <Animatable.View
        animation="fadeInUp"
        duration={500}
        style={[styles.cardWrapper, isAnimating && { opacity: 0.5 }]}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={onPressDetails}
          activeOpacity={0.85}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.priceInfo}>Half: Rs.{item.priceHalf} | Full: Rs.{item.priceFull}</Text>

          <View style={styles.options}>
            {['Half', 'Full'].map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[
                  styles.sizeButton,
                  size === opt ? styles.activeSizeButton : styles.inactiveSizeButton,
                ]}
                onPress={(e) => {
                  e.stopPropagation();
                  setSize(opt);
                }}
              >
                <Text style={size === opt ? styles.activeSizeText : styles.inactiveSizeText}>
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.qty}>
            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation();
                setQuantity(Math.max(0, quantity - 1));
              }}
              style={[
                styles.qtyButton,
                quantity === 0 && { opacity: 0.4 },
              ]}
              disabled={quantity === 0}
            >
              <Text style={styles.qtyButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>{quantity}</Text>

            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation();
                setQuantity(quantity + 1);
              }}
              style={styles.qtyButton}
            >
              <Text style={styles.qtyButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          {(quantity > 0 || total > 0) && (
            <Text style={styles.totalText}>Total: Rs.{quantity === 0 ? price : total}</Text>
          )}

          <TouchableOpacity
            style={styles.addToCart}
            onPress={handleAddToCartPress}
          >
            <Animatable.Text
              animation={isAnimating ? "pulse" : null}
              iterationCount="infinite"
              duration={1000}
              style={styles.addToCartText}
            >
              Add to Cart
            </Animatable.Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
