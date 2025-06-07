'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './ChartDisplay.module.css';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ChartDisplay({ expenses }) {
  const processChartData = () => {
    if (!expenses || expenses.length === 0) {
      return null;
    }

    const categoryTotals = expenses.reduce((acc, expense) => {
      const category = expense.category || 'Uncategorized'; // Handle undefined category
      acc[category] = (acc[category] || 0) + (expense.amount || 0); // Handle undefined amount
      return acc;
    }, {});

    const labels = Object.keys(categoryTotals);
    const dataValues = Object.values(categoryTotals);

    // Basic color palette - can be expanded or made dynamic
    const backgroundColors = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(199, 199, 199, 0.7)',
      'rgba(83, 102, 255, 0.7)',
    ];
    const borderColors = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(199, 199, 199, 1)',
      'rgba(83, 102, 255, 1)',
    ];

    // Ensure enough colors for categories, repeat if necessary
    const numCategories = labels.length;
    const finalBackgroundColors = Array(numCategories).fill(null).map((_, i) => backgroundColors[i % backgroundColors.length]);
    const finalBorderColors = Array(numCategories).fill(null).map((_, i) => borderColors[i % borderColors.length]);


    return {
      labels,
      datasets: [
        {
          label: 'Expenses by Category',
          data: dataValues,
          backgroundColor: finalBackgroundColors,
          borderColor: finalBorderColors,
          borderWidth: 1,
        },
      ],
    };
  };

  const chartData = processChartData();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Important for sizing within a container
    plugins: {
      legend: {
        position: 'top', // 'top', 'bottom', 'left', 'right'
        labels: {
          padding: 20, // Add padding to legend items
           boxWidth: 15, // Smaller color boxes
           font: {
            size: 13, // Adjust font size of legend
          }
        }
      },
      title: {
        display: false, // The h2 "Expense Chart" is already there
        text: 'Expense Distribution by Category',
        font: {
            size: 18
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              // Format as currency (e.g., USD)
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <h2>Expense Chart</h2>
      {chartData ? (
        <div style={{ position: 'relative', height: '300px', width: '100%' }}> {/* Wrapper for chart sizing */}
          <Pie data={chartData} options={chartOptions} />
        </div>
      ) : (
        <p className={styles.placeholderText}>No data available to display chart.</p>
      )}
    </div>
  );
}
