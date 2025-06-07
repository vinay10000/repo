'use client';

import React from 'react';
import styles from './ExpenseList.module.css'; // Using the same module as ExpenseList

export default function ExpenseItem({ expense, onEdit, onDelete }) {
  if (!expense) {
    return null;
  }

  const { id, description, amount, category } = expense;

  // Note: onEdit in ExpenseList passes the whole expense object,
  // but here we are assuming it might eventually just pass the ID.
  // For consistency with ExpenseList's onEdit={() => onEditExpense(expense)},
  // this onEdit prop should expect the full expense object or just its ID.
  // The current ExpenseList passes the full object, so onEdit(expense) would be more direct.
  // However, if only ID is needed, then onEdit(id) is fine. Let's stick to onEdit(id) for now for this component.
  // The parent (ExpenseList) calls onEditExpense(expense), so this component's onEdit prop is actually onEditExpense(expense).
  // So calling onEdit() here means calling onEditExpense(expense) from the parent.

  return (
    <tr className={styles.expenseRow}>
      <td>{description}</td>
      <td className={styles.amountCell}>${amount ? amount.toFixed(2) : '0.00'}</td>
      <td>{category}</td>
      <td className={styles.actionsCell}>
        <button
          onClick={() => onEdit(expense)} // Corrected: pass the expense object as expected by ExpenseList
          className={`${styles.actionsCellButton} ${styles.editButton}`}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className={`${styles.actionsCellButton} ${styles.deleteButton}`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
