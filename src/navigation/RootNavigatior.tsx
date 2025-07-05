import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accessscreen from '../screens/Accessscreen';
import DrawerNavigator from './DrawerNavigation';
import { RootDrawerParamList } from '../components/types';

const Stack = createNativeStackNavigator<RootDrawerParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="FinTrack">{/**  change to Access later */}
      <Stack.Screen name="Access" component={Accessscreen} />
      <Stack.Screen 
        name="FinTrack" 
        component={DrawerNavigator} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}
