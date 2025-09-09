import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from '../screens/Homescreen';
import BudgetDetails from '../screens/BudgetDetails';
//import Accessscreen from '../screens/Accessscreen';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function DrawerNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
    }}
    >
      <Tab.Screen name="Home" component={Homescreen} 
      options={{
        headerLeft: () =>( null),
        }}/>
      <Tab.Screen name="Budget" component={BudgetDetails} />
      {/* <Tab.Screen name="Transaction List" component={BudgetDetails} /> */}
      {/* <Tab.Screen name="Settings" component={BudgetDetails} /> */}

    </Tab.Navigator>
  );
}
