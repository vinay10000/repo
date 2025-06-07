'use client';

import React from 'react';
import ExpenseItem from './ExpenseItem';
import styles from './ExpenseList.module.css';

export default function ExpenseList({ expenses, onEditExpense, onDeleteExpense }) {
  if (!expenses || expenses.length === 0) {
    return <p className={styles.noExpensesMessage}>No expenses recorded yet. Add some!</p>;
  }

  return (
    <div className={styles.listContainer}>
      <h2>Expenses</h2>
      <div className={styles.tableWrapper}> {/* Added for horizontal scroll on small screens */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Description</th>
              <th className={styles.amountCell}>Amount</th>
              <th>Category</th>
              <th className={styles.actionsCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                onEdit={() => onEditExpense(expense)}
                onDelete={() => onDeleteExpense(expense.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
