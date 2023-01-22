import { FlatList, ListRenderItem } from 'react-native';

import ExpenseItem from './ExpenseItem';

const renderExpenseItem: ListRenderItem<{ id: string; description: string; amount: number; date: Date }> = (
  itemData,
) => {
  return <ExpenseItem {...itemData.item} />;
};

type ExpensesListProps = {
  expenses: Array<{ id: string; description: string; amount: number; date: Date }>;
};

function ExpensesList({ expenses }: ExpensesListProps) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />;
}

export default ExpensesList;
