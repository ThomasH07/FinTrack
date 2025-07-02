import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Text, View } from 'react-native';

import RootNavigator from './navigation/RootNavigatior';

//const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}