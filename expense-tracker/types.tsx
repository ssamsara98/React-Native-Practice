/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  ExpensesOverview: undefined;
  ManageExpense: {
    expenseId: string;
  };
};
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
export type RootStackNavigationProps<Screen extends keyof RootStackParamList> = NativeStackNavigationProp<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};
export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
export type RootTabNavigationProps<Screen extends keyof RootTabParamList> = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, Screen>,
  NativeStackNavigationProp<RootStackParamList>
>;

// ---===---

export class ExpenseType {
  public id!: string;
  public description!: string;
  public amount!: number;
  public date!: Date;
}
