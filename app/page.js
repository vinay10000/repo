'use client'; // This page will manage state and interactivity

import React, { useState, useEffect } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ChartDisplay from '../components/ChartDisplay';
import TotalExpenses from '../components/TotalExpenses'; // Import TotalExpenses component
import styles from './page.module.css'; // Import page-specific styles

export default function HomePage() {
  const [expenses, setExpenses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null); // Expense object being edited
  const [totalExpensesAmount, setTotalExpensesAmount] = useState(0); // State for total expenses

  // Load expenses from local storage on initial render
  useEffect(() => {
    try {
      const storedExpenses = localStorage.getItem('expenses');
      if (storedExpenses) {
        const parsedExpenses = JSON.parse(storedExpenses);
        // Ensure what's loaded is an array
        if (Array.isArray(parsedExpenses)) {
          setExpenses(parsedExpenses);
        } else {
          setExpenses([]);
        }
      } else {
        setExpenses([]); // Initialize with empty array if nothing is stored
      }
    } catch (error) {
      console.error("Failed to load or parse expenses from local storage:", error);
      setExpenses([]); // Initialize with empty array on error
    }
  }, []);

  // Save expenses to local storage whenever they change
  // Ensure expenses is always an array before stringifying
  useEffect(() => {
    if (Array.isArray(expenses)) {
      localStorage.setItem('expenses', JSON.stringify(expenses));

      // Calculate total expenses whenever expenses array changes
      const total = expenses.reduce((sum, expense) => {
        // Ensure amount is a number and add to sum
        const amount = parseFloat(expense.amount);
        return sum + (isNaN(amount) ? 0 : amount);
      }, 0);
      setTotalExpensesAmount(total);
    } else {
      // If expenses is not an array (e.g., during initial bad load), reset total
      setTotalExpensesAmount(0);
    }
  }, [expenses]);

  const handleAddOrUpdateExpense = (expenseData) => {
    if (isEditing && currentExpense) {
      // Update existing expense
      setExpenses(prevExpenses =>
        prevExpenses.map(exp =>
          exp.id === currentExpense.id ? { ...exp, ...expenseData } : exp
        )
      );
      setIsEditing(false);
      setCurrentExpense(null);
    } else {
      // Add new expense with a string ID
      setExpenses(prevExpenses => [
        ...prevExpenses,
        { id: Date.now().toString(), ...expenseData }
      ]);
    }
  };

  const handleEditExpense = (expenseToEdit) => {
    setIsEditing(true);
    setCurrentExpense(expenseToEdit);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to form for editing
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenses(expenses.filter(exp => exp.id !== expenseId));
    if (isEditing && currentExpense && currentExpense.id === expenseId) {
      // If the expense being edited is deleted, reset the form
      setIsEditing(false);
      setCurrentExpense(null);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Modern Expense Tracker</h1>
      </header>

      <main> {/* Added main tag for semantic structure */}
        <ExpenseForm
          onAddOrUpdateExpense={handleAddOrUpdateExpense} // Renamed prop for clarity
          currentExpense={currentExpense}
          isEditing={isEditing}
        />

        <ExpenseList
          expenses={expenses}
          onEditExpense={handleEditExpense}
          onDeleteExpense={handleDeleteExpense}
        />

        <TotalExpenses total={totalExpensesAmount} /> {/* Add TotalExpenses display */}

        <ChartDisplay expenses={expenses} />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Expense Tracker App</p>
      </footer>
    </div>
  );
}
