import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accessscreen from '../screens/Accessscreen';
import DrawerNavigator from './DrawerNavigation';
import { RootStackParamList } from '../components/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Access">
      <Stack.Screen name="Access" component={Accessscreen} />
      <Stack.Screen 
        name="FinTrack" 
        component={DrawerNavigator} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}
