import React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { userPool } from '../Cognitoservices'; 
import { RootDrawerParamList } from '../components/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BudgetCircle } from '../components/budgetcircle'
import "../components/test.css"
type Props = NativeStackScreenProps<RootDrawerParamList, 'Home'>;

export default function Homescreen({navigation} :  Props) {
  const [monthYear, setMonthYear] = useState('August 2025');
  const expenses = [
    { tag: 'Food', amount: 120 },
    { tag: 'Rent', amount: 600 },
    { tag: 'Transport', amount: 80 },
  ];
    

    const handleSignOut = () => {
        const user: CognitoUser | null = userPool.getCurrentUser();
    
        if (user) {
          user.signOut();
          navigation.replace('Access');
        }else{
          console.log("error not a user");
          navigation.replace('Access');
        }
      };
      
      return (
        <View className="bg-gradient-to-br from-blue-50 items-center justify-center">
          {/* Month Navigation */}
          <View className="w-full flex justify-between items-center px-6 mt-4 flex-row">
          <Text className="text-2xl text-gray-800 rounded-full p-2 hover:bg-gray-200 cursor-pointer">&lt;</Text>
          <View className="flex flex-col items-center">
            <Text className="text-lg font-bold text-gray-700">Month</Text>
            <Text className="text-sm text-gray-500">{monthYear}</Text>
          </View>
          <Text className="text-2xl text-gray-800 rounded-full p-2 hover:bg-gray-200 cursor-pointer">&gt;</Text>
        </View>
          {/* Section */}
        <View className="w-11/12 h-64 my-6 rounded-3xl bg-white shadow-lg flex items-center justify-center">
        <BudgetCircle totalBudget = {1000} expenses={expenses}/>
        </View>
        {/* Section */}
        {/* Section */}
        {/* Section */}
        </View>
      );
  }
  