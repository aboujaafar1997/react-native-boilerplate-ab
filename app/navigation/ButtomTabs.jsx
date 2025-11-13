// @ts-nocheck
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home/Home';
import About from '../screens/About/About';

const Tab = createBottomTabNavigator();

export const ButtomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'About') iconName = 'albums-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home"  component={Home} />
      <Tab.Screen name="About"  component={About} />
    </Tab.Navigator>
  );
};
