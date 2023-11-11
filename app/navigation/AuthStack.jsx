import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: true,
        animation: 'slide_from_right',
      }}
    />
  </Stack.Navigator>;
};
export default AuthStack;
