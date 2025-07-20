import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'link' | 'defaultSemiBold';
};

function ThemedText({ style, type = 'default', ...rest }: ThemedTextProps) {
  let color = useThemeColor({}, 'text');
  let fontSize = 16;
  let fontWeight: TextStyle['fontWeight'] = 'normal';

  if (type === 'title') {
    fontSize = 24;
    fontWeight = 'bold';
  } else if (type === 'link') {
    color = '#1B95E0';
  } else if (type === 'defaultSemiBold') {
    fontWeight = '600'; // Must be string, not number
  }

  return (
    <Text
      style={[
        { color, fontSize, fontWeight },
        style, // allow user to override any styles
      ]}
      {...rest}
    />
  );
}

export default ThemedText;
