import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';

interface NavigationProps {}

const Stack = createNativeStackNavigator();

const RootNavigator: FunctionComponent = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Root"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const Navigation: FunctionComponent<NavigationProps> = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
