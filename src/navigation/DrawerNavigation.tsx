import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homescreen from '../screens/Homescreen';
import BudgetDetails from '../screens/BudgetDetails';
import Settings from '../screens/Settings';
import Transactions from '../screens/Transactions';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function DrawerNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
    }}
    >
      <Tab.Screen name="Dashboard" component={Homescreen}
        options={{
          tabBarIcon: ({  size, color }) => (
            <Image
              source={'../assets/'}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}/>
      <Tab.Screen name="Budget" component={BudgetDetails} 
        options={{
          tabBarIcon: ({  size, color }) => (
            <Image
              source={'../assets/'}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
      }}/>
      <Tab.Screen name=' ' component={Homescreen} 
        options={{
          tabBarIcon: ({  size, color }) => (
            <Image
              source={'../assets/'}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
      }}/>

      <Tab.Screen name="Transactions" component={Transactions} 
        options={{
          tabBarIcon: ({  size, color }) => (
            <Image
              source={'../assets/'}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
      }}/>
      <Tab.Screen name="Settings" component={Settings} 
        options={{
          tabBarIcon: ({  size, color }) => (
            <Image
              source={'../assets/'}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}/>
      {/* <Tab.Screen name="Transaction List" component={BudgetDetails} /> */}
      {/* <Tab.Screen name="Settings" component={BudgetDetails} /> */}

    </Tab.Navigator>
  );
}
