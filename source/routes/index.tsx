import React, {
  FunctionComponent, 
  useCallback, 
  useContext, 
  useEffect, 
  useLayoutEffect, 
  useState} from 'react';
import { View, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContext } from '../hooks/AuthContext';

/* Unauthenticated Flux */
import { AuthStackRoutes } from './auth.stack.routes';

export const Routes: FunctionComponent = () => {
  const authState  = useContext(AuthContext);
  const prefix = Linking.getInitialURL();
  const config = {
    screens: {
      SignIn: 'signin',
      SignUp: 'signup',
      SignOut: 'signout',
      Main: 'main',
      Info: 'info',
    }
  };
  const linking = { 
    prefixes: ['app://'],
    config
  };
  return(
    <SafeAreaProvider>
      <NavigationContainer
        linking={linking}
        fallback={<View />}
      >
        <AuthStackRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}

