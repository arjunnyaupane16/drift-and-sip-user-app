import React from 'react';
import { StyleProp, TextStyle, View } from 'react-native';

type IconSymbolProps = {
  name: string;
  size?: number;           // added size
  color?: string;          // added color
  style?: StyleProp<TextStyle>;
};

export default function IconSymbol({
  name,
  size = 24,
  color = '#000',
  style,
}: IconSymbolProps) {
  // Render your icon here using name, size, color, and style props.
  // For example, if you use some icon library:
  // return <SomeIcon name={name} size={size} color={color} style={style} />

  return <View />; // Placeholder, replace with your actual icon rendering logic
}
