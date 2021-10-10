import React, {FunctionComponent} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/Auth/SignIn';
import { SignUp } from '../screens/Auth/SignUp';
import { SignOut } from '../screens/Auth/SignOut';

export const AuthStackRoutes: FunctionComponent = () => {
  const { Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName={'SignIn'}
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignOut" component={SignOut} />
    </Navigator>
  );
}
