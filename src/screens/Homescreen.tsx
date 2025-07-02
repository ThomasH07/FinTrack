import React from 'react';
import { Button, View, Text } from 'react-native';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { userPool } from '../Cognitoservices'; 
import { RootStackParamList } from '../components/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'FinTrack'>;

export default function Homescreen({navigation} : Props) {
    const handleSignOut = () => {
        const user: CognitoUser | null = userPool.getCurrentUser();
    
        if (user) {
          user.signOut(); // Sign out from Cognito
          navigation.replace('Access'); // Redirect to login/access screen
        }
      };
    
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Welcome to Home</Text>
          <Button title="Sign Out" onPress={handleSignOut} />
        </View>
      );
  }
  