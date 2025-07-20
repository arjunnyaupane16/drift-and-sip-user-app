import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

type ThemedTextProps = TextProps & {
  type?: 'title' | 'link' | 'default' | 'defaultSemiBold';
};

const fontStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: '#2e78b7',
  },
  default: {
    fontSize: 16,
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default function ThemedText({ type = 'default', style, ...props }: ThemedTextProps) {
  return <Text style={[fontStyles[type], style]} {...props} />;
}
