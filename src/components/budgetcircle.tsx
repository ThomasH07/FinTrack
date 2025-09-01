import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Expense, RootDrawerParamList } from '../components/types'
interface BudgetCircleProps {
    totalBudget: number;
    expenses: Expense[];

}
type BudgetCircleNavProp = DrawerNavigationProp<RootDrawerParamList, 'BudgetCircle'>;

export const BudgetCircle: React.FC<BudgetCircleProps> = ({ totalBudget, expenses }) => {
    const navigation = useNavigation<BudgetCircleNavProp>();
    const spent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const remaining = Math.max(totalBudget - spent, 0);
    const fill = Math.min((spent / totalBudget) * 100, 100);
    // REDO THIS
    const getColor = (): string => {
        if (fill < 50) return '#4caf50';
        if (fill < 75) return '#ff9800';
        return '#f44336';
    };
    const handlePress = () => {
        navigation.navigate('BudgetDetails'); 
    };
    return (
        <Pressable onPress={handlePress}>
            <View style={styles.container}>
            <AnimatedCircularProgress
                size={200}
                width={15}
                fill= {fill}
                tintColor= {getColor()}
                backgroundColor="#e0e0e0"
                duration={1000}
                lineCap="round"
            >
                {() => (
                <View style={styles.innerText}>
                    <Text style={styles.amountLeft}>${remaining.toFixed(2)}</Text>
                    <Text style={styles.label}>Left</Text>
                </View>
                )}
            </AnimatedCircularProgress>
            </View>
        </Pressable>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      innerText: {
        alignItems: 'center',
      },
      amountLeft: {
        fontSize: 32,
        fontWeight: 'bold',
      },
      label: {
        fontSize: 16,
      },
    });