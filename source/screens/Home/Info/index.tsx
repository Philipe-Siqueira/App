import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Info: React.FC = () => {
  return(
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
      edges={['top', 'left', 'right','bottom']}
    >
      <Text>Main</Text>
    </SafeAreaView>
  );
}
