import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

type HapticTabProps = {
  onPress: (event: GestureResponderEvent) => void;
  label: string;
};

export default function HapticTab({ onPress, label }: HapticTabProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
