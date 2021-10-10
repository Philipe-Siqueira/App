import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const SignOut: React.FC = () => {
  return(
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
      edges={['top', 'left', 'right','bottom']}
    >
      <Text>SignOut</Text>
    </SafeAreaView>
  );
}
