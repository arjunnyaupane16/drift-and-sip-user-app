import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import FloatingCartButton from '../components/FloatingCartButton';

import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useCart } from '../context/CartContext';
import styles from './styles/MenuDetailsStyle';

// Image imports
import burger from '../assets/images/burger.jpg';
import cappuccino from '../assets/images/cappuccino.jpg';
import chickenMomo from '../assets/images/chicken_momo.jpg';
import classicMilkTea from '../assets/images/classic_milk_tea.jpg';
import doubleAppleHookah from '../assets/images/double_apple_hookah.jpg';
import espresso from '../assets/images/espresso.jpg';
import grapesHookah from '../assets/images/grapes_hookah.jpg';
import keemaNoodles from '../assets/images/keema_Noodles.jpg';
import latte from '../assets/images/latte.jpg';
import mangoGreenTea from '../assets/images/mango_green_tea.jpg';
import mintHookah from '../assets/images/mint_hookah.jpg';
import roll from '../assets/images/roll.jpg';
import sandwich from '../assets/images/sandwich.jpg';
import sausage from '../assets/images/sausage.jpg';
import strawberryBoba from '../assets/images/strawberry_boba.jpg';
import taroBubbleTea from '../assets/images/taro_bubble_tea.jpg';

// Image key mapping
const imageMap = {
  burger,
  cappuccino,
  chicken_momo: chickenMomo,
  classic_milk_tea: classicMilkTea,
  double_apple_hookah: doubleAppleHookah,
  espresso,
  grapes_hookah: grapesHookah,
  latte,
  mango_green_tea: mangoGreenTea,
  mint_hookah: mintHookah,
  strawberry_boba: strawberryBoba,
  taro_bubble_tea: taroBubbleTea,
  keema_noodles: keemaNoodles,
  roll,
  sausage,
  sandwich,
};

// Alias mapping: camelCase → snake_case
const imageKeyAlias = {
  keemaNoodles: 'keema_noodles',
  chickenMomo: 'chicken_momo',
  classicMilkTea: 'classic_milk_tea',
  doubleAppleHookah: 'double_apple_hookah',
  mangoGreenTea: 'mango_green_tea',
  mintHookah: 'mint_hookah',
  strawberryBoba: 'strawberry_boba',
  taroBubbleTea: 'taro_bubble_tea',
  grapesHookah: 'grapes_hookah',
};

// Product details
const productDetailsMap = {
  burger: {
    ingredients: 'Bun, Veg Patty, Lettuce, Tomato, Onion, Cheese, Sauce',
    preparation: 'Toasted bun filled with seasoned veg patty, fresh veggies, cheese and sauces.',
    benefits: 'Fulfilling meal, rich in carbs and flavor.',
    bestWith: 'Great with fries and cola.',
    nutrition: 'Energy: 220 kcal, Carbs: 30g, Protein: 8g, Fat: 10g',
  },
  cappuccino: {
    ingredients: 'Espresso, Steamed Milk, Milk Foam',
    preparation: 'Double espresso with equal parts steamed milk and dense foam.',
    benefits: 'Rich aroma, energy booster, smooth texture.',
    bestWith: 'Pairs well with croissants or cookies.',
    nutrition: 'Energy: 60 kcal, Carbs: 5g, Protein: 3g, Fat: 2g',
  },
  chicken_momo: {
    ingredients: 'Chicken, Onion, Garlic, Ginger, Spices, Flour',
    preparation: 'Minced chicken filling wrapped in dough and steamed.',
    benefits: 'High protein, low fat, tasty.',
    bestWith: 'Best with spicy chutney or soup.',
    nutrition: 'Energy: 150 kcal, Protein: 10g, Carbs: 12g, Fat: 5g',
  },
  classic_milk_tea: {
    ingredients: 'Assam Black Tea, Milk, Tapioca Pearls, Sugar Syrup, Ice',
    preparation: 'Brewed with premium black tea, shaken with milk and syrup, served chilled with chewy boba pearls.',
    benefits: 'Caffeine boost, refreshing texture, customizable sweetness.',
    bestWith: 'Best with chicken momo or spicy noodles.',
    nutrition: 'Energy: 80 kcal, Carbs: 12g, Sugar: 9g, Fat: 2g',
  },
  espresso: {
    ingredients: '100% Arabica Coffee Beans, Water',
    preparation: 'High pressure brewed coffee shot in 30 seconds.',
    benefits: 'Instant energy, purest caffeine dose.',
    bestWith: 'Ideal with biscuits or alone as a shot.',
    nutrition: 'Energy: 10 kcal, Zero fat/sugar.',
  },
  latte: {
    ingredients: 'Espresso, Steamed Milk',
    preparation: 'Single shot espresso with creamy milk base.',
    benefits: 'Smooth drink, milder than cappuccino.',
    bestWith: 'Pairs great with sandwiches.',
    nutrition: 'Energy: 90 kcal, Carbs: 8g, Protein: 4g, Fat: 3g',
  },
  mango_green_tea: {
    ingredients: 'Green Tea, Mango Pulp, Ice, Sugar',
    preparation: 'Fresh green tea shaken with mango extract and ice.',
    benefits: 'Antioxidants, boosts metabolism.',
    bestWith: 'Enjoy during summer or with snacks.',
    nutrition: 'Energy: 70 kcal, Sugar: 10g, Carbs: 11g',
  },
  strawberry_boba: {
    ingredients: 'Strawberry Syrup, Milk, Boba, Ice',
    preparation: 'Blended strawberry milk with tapioca pearls.',
    benefits: 'Sweet and fruity, fun to drink.',
    bestWith: 'Desserts or spicy food.',
    nutrition: 'Energy: 90 kcal, Carbs: 13g, Sugar: 11g',
  },
  taro_bubble_tea: {
    ingredients: 'Taro Powder, Milk, Tapioca, Ice',
    preparation: 'Taro base mixed with milk, shaken with boba pearls.',
    benefits: 'Rich flavor, soothing and creamy.',
    bestWith: 'Best standalone or light snacks.',
    nutrition: 'Energy: 100 kcal, Carbs: 14g, Sugar: 9g',
  },
  mint_hookah: {
    ingredients: 'Mint Shisha, Charcoal, Hookah Base',
    preparation: 'Traditional hookah setup with mint flavor.',
    benefits: 'Cool, soothing and relaxing.',
    bestWith: 'Used in social or chill settings.',
    nutrition: 'Not applicable.',
  },
  double_apple_hookah: {
    ingredients: 'Apple Flavored Shisha, Water Base, Charcoal',
    preparation: 'Rich apple tones with slight anise notes.',
    benefits: 'Sweet taste, relaxing aroma.',
    bestWith: 'Perfect for evening hookah lounges.',
    nutrition: 'Not applicable.',
  },
  grapes_hookah: {
    ingredients: 'Grapes Shisha Blend, Ice Water Base',
    preparation: 'Cool and fruity grape hookah experience.',
    benefits: 'Smooth and flavorful.',
    bestWith: 'Enjoy with soft music and dim lights.',
    nutrition: 'Not applicable.',
  },
  keema_noodles: {
    ingredients: 'Noodles, Keema, Soy Sauce, Onion, Spices',
    preparation: 'Stir-fried keema with noodles, onions and masala in a hot wok.',
    benefits: 'Protein-rich, spicy, fulfilling dish.',
    bestWith: 'Pairs well with iced tea or momo.',
    nutrition: 'Energy: 240 kcal, Carbs: 30g, Protein: 10g, Fat: 8g',
  },
  roll: {
    ingredients: 'Flatbread, Veg/Chicken Filling, Spices, Sauce',
    preparation: 'Grilled flatbread wrapped with hot filling and seasoning.',
    benefits: 'Easy to eat, customizable, satisfying snack.',
    bestWith: 'Best with tea or soft drinks.',
    nutrition: 'Energy: 190 kcal, Carbs: 22g, Protein: 6g, Fat: 7g',
  },
  sausage: {
    ingredients: 'Veg/Chicken Sausage, Herbs, Oil, Bun (optional)',
    preparation: 'Grilled sausage served with dip or in a bun.',
    benefits: 'Quick protein source, great taste.',
    bestWith: 'Best with bun or salad.',
    nutrition: 'Energy: 150 kcal, Protein: 10g, Fat: 8g, Carbs: 5g',
  },
  sandwich: {
    ingredients: 'Bread, Veggies, Cheese, Mayo, Seasoning',
    preparation: 'Grilled or cold sandwich with fresh fillings.',
    benefits: 'Healthy and light, customizable.',
    bestWith: 'Pairs with coffee or iced tea.',
    nutrition: 'Energy: 200 kcal, Carbs: 24g, Protein: 7g, Fat: 6g',
  },
};

export default function MenuDetails() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { addToCart, totalItems, totalPrice } = useCart();

  const resolvedKey = imageKeyAlias[params.image] || params.image;

  const [size, setSize] = useState('Half');
  const [quantity, setQuantity] = useState(1);

  const priceHalf = parseFloat(params.priceHalf);
  const priceFull = parseFloat(params.priceFull);
  const price = size === 'Half' ? priceHalf : priceFull;
  const total = price * quantity;

  const imageSource = imageMap[resolvedKey] || burger;
  const details = productDetailsMap[resolvedKey] || {
    ingredients: 'N/A',
    preparation: 'N/A',
    benefits: 'N/A',
    bestWith: 'N/A',
    nutrition: 'N/A',
  };
const handleAddToCart = () => {
  addToCart({
    id: params.id,
    name: params.name,
    image: imageSource, // ✅ Correct image
    size,
    price,
    quantity,
    finalPrice: total,
  });
  setTimeout(() => router.back(), 400);
};

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>
        <Image source={imageSource} style={styles.detailImage} resizeMode="cover" />
        <View style={styles.detailContent}>
          <Text style={styles.detailName}>{params.name}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price:</Text>
            <Text style={styles.priceValue}>Half: ₹{priceHalf} | Full: ₹{priceFull}</Text>
          </View>

          <View style={styles.sizeContainer}>
            <Text style={styles.sizeLabel}>Size:</Text>
            <View style={styles.sizeButtons}>
              {['Half', 'Full'].map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={[
                    styles.sizeButton,
                    size === opt ? styles.activeSizeButton : styles.inactiveSizeButton,
                  ]}
                  onPress={() => setSize(opt)}
                >
                  <Text style={size === opt ? styles.activeSizeText : styles.inactiveSizeText}>
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Quantity:</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.totalText}>Total: ₹{total.toFixed(2)}</Text>

          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>

          <View style={styles.extraDetails}>
            <Text style={styles.subTitle}>Ingredients</Text>
            <Text style={styles.subText}>• {details.ingredients}</Text>

            <Text style={styles.subTitle}>Preparation</Text>
            <Text style={styles.subText}>{details.preparation}</Text>

            <Text style={styles.subTitle}>Benefits</Text>
            <Text style={styles.subText}>• {details.benefits}</Text>

            <Text style={styles.subTitle}>Best Enjoyed With</Text>
            <Text style={styles.subText}>• {details.bestWith}</Text>

            <Text style={styles.subTitle}>Nutritional Info</Text>
            <Text style={styles.subText}>• {details.nutrition}</Text>
          </View>
        </View>
      </ScrollView>
      <FloatingCartButton itemCount={totalItems} totalPrice={totalPrice} />
    </View>
  );
}
