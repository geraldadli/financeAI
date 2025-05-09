import React from 'react';
import { DeductibleExpense } from '../../data/mockData';

interface DeductibleExpensesProps {
  expenses?: DeductibleExpense[];
}

const DeductibleExpenses: React.FC<DeductibleExpensesProps> = ({ expenses = [] }) => (
  <section className="tax-section">
    <h2 className="tax-title">Deductible Expenses</h2>
    <ul className="space-y-2">
      {expenses.map(e => (
        <li key={e.id} className="tax-card flex justify-between">
          <div>
            <div>{e.description}</div>
            <div className="text-sm text-gray-500 capitalize">{e.category}</div>
          </div>
          <div>${e.amount.toFixed(2)}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default DeductibleExpenses;
