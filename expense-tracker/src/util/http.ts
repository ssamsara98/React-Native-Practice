import axios from 'axios';
import Constants from 'expo-constants';
import { ExpenseType } from '../../types';

// const BACKEND_URL =
//   'https://react-native-course-3cceb-default-rtdb.firebaseio.com';
const BACKEND_URL = Constants.expoConfig?.extra?.backendUrl;

export async function storeExpense(expenseData: Omit<ExpenseType, 'id'>) {
  const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses: Array<ExpenseType> = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id: string, expenseData: Omit<ExpenseType, 'id'>) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id: string) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
