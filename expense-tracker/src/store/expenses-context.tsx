import React, { createContext, useReducer } from 'react';
import { ExpenseType } from '../../types';

interface ExpensesContextProps {
  expenses: Array<ExpenseType>;
  addExpense: (expense: ExpenseType) => void;
  setExpenses: (expenses: Array<ExpenseType>) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expense: Omit<ExpenseType, 'id'>) => void;
}

export const ExpensesContext = createContext<ExpensesContextProps>({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state: Array<ExpenseType>, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense: ExpenseType) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense: ExpenseType) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }: { children: React.ReactNode }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData: ExpenseType) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function setExpenses(expenses: Array<ExpenseType>) {
    dispatch({ type: 'SET', payload: expenses });
  }

  function deleteExpense(id: string) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id: string, expenseData: Omit<ExpenseType, 'id'>) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value: ExpensesContextProps = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
