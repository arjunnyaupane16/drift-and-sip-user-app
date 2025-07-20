import { View, ViewProps } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme'; // Named import


const ThemedView = (props: ViewProps) => {
  const theme = useColorScheme();

  return (
    <View
      {...props}
      style={[
        props.style,
        { backgroundColor: theme === 'dark' ? '#000' : '#fff' },
      ]}
    />
  );
};

export default ThemedView;
