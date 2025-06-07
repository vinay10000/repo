'use client';

import React from 'react';
import styles from './TotalExpenses.module.css';

export default function TotalExpenses({ total }) {
  const formattedTotal = (total || 0).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className={styles.totalContainer}>
      <span className={styles.totalLabel}>Total Expenses:</span>
      <span className={styles.totalText}>{formattedTotal}</span>
    </div>
  );
}
