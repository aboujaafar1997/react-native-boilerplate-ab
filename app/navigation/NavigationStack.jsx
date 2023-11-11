import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Toaster from '../components/toast';
import Login from '../screens/login/Login';

import { navigationRef } from '../util/navigation';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { token } = useSelector((state) => state.auth);
  const { text, type, visible } = useSelector((state) => state.toaster);

  return (
    <NavigationContainer ref={navigationRef}>
      {!token ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <AuthStack />
      )}
      <Toaster text={text} type={type} visible={visible} />
    </NavigationContainer>
  );
};
export default Navigation;
