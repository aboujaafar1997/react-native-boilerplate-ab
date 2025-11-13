import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/home/Home';
import { ButtomTabs } from './ButtomTabs';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainTabs"
        component={ButtomTabs}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
