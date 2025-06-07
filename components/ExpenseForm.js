'use client';

import React from 'react';
import styles from './ExpenseForm.module.css';

export default function ExpenseForm({ onAddOrUpdateExpense, currentExpense, isEditing }) {
  // Basic state for form inputs (can be lifted later if needed)
  const [description, setDescription] = React.useState(currentExpense ? currentExpense.description : '');
  const [amount, setAmount] = React.useState(currentExpense ? currentExpense.amount : '');
  const [category, setCategory] = React.useState(currentExpense ? currentExpense.category : '');

  // Update form fields if currentExpense changes (e.g., when an item is selected for edit)
  React.useEffect(() => {
    if (isEditing && currentExpense) {
      setDescription(currentExpense.description);
      setAmount(currentExpense.amount);
      setCategory(currentExpense.category);
    } else if (!isEditing) {
      setDescription('');
      setAmount('');
      setCategory('');
    }
  }, [currentExpense, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // More specific validation messages
    if (!description.trim()) {
      alert('Please enter an expense description.');
      // Consider focusing the input: document.getElementById('description')?.focus();
      // However, direct DOM manipulation is often discouraged. Props could enable this.
      return;
    }
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Please enter a valid positive amount.');
      // document.getElementById('amount')?.focus();
      return;
    }
    if (!category.trim()) {
      alert('Please enter an expense category.');
      // document.getElementById('category')?.focus();
      return;
    }

    // Call the parent handler with the validated and processed data
    if (onAddOrUpdateExpense) {
        onAddOrUpdateExpense({ description: description.trim(), amount: numericAmount, category: category.trim() });
    }
    // Clear form if not editing (or handle clearing/resetting in parent)
    if(!isEditing) {
        setDescription('');
        setAmount('');
        setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{isEditing ? 'Edit Expense' : 'Add New Expense'}</h2>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter expense description"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
          min="0.01"
          step="0.01"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category (e.g., Food)"
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        {isEditing ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
}
