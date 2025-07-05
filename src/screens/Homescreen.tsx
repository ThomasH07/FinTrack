import React from 'react';
import { Button, View, Text } from 'react-native';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { userPool } from '../Cognitoservices'; 
import { RootDrawerParamList } from '../components/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BudgetCircle } from '../components/budgetcircle'

type Props = NativeStackScreenProps<RootDrawerParamList, 'FinTrack'>;

export default function Homescreen({navigation} : Props) {
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
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <BudgetCircle totalBudget={1000} expenses={expenses} />
          <Text>Welcome to Home</Text>
          <Button title="Sign Out" onPress={handleSignOut} />
        </View>
      );
  }
  