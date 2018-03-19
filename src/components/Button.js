import React from 'react';
import { View, Text } from 'react-native';

type Props = { children: React.Children };

function Button({ children }: Props) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default Button;
