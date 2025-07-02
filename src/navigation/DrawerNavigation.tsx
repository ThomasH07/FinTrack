import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from '../screens/Homescreen';
//import Accessscreen from '../screens/Accessscreen';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" 
        component={Homescreen} 
    />

    {/* <Drawer.Screen 
      name="Profile" 
      component={Accessscreen} 
    /> */}
    
    </Drawer.Navigator>
  );
}
