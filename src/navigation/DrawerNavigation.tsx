import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from '../screens/Homescreen';
import BudgetDetails from '../screens/BudgetDetails';
//import Accessscreen from '../screens/Accessscreen';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="FinTrack">
      <Drawer.Screen 
        name="FinTrack" 
        component={Homescreen} 
    />

    <Drawer.Screen 
      name="Budget Details" 
      component={BudgetDetails} 
    />
    
    </Drawer.Navigator>
  );
}
