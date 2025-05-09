import React from 'react';
import { BankTransaction } from '../../data/mockData';

interface CashFlowAnalysisProps {
  transactions?: BankTransaction[]; // Make transactions optional
}

const CashFlowAnalysis: React.FC<CashFlowAnalysisProps> = ({ transactions = [] }) => {
  const month = new Date().getMonth(); // current month index
  // filter this month's transactions
  const thisMonth = transactions.filter(tx =>
    new Date(tx.date).getMonth() === month
  );

  const totalIn = thisMonth
    .filter(tx => tx.type === 'credit')
    .reduce((sum, tx) => sum + tx.amount, 0);
  const totalOut = thisMonth
    .filter(tx => tx.type === 'debit')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const net = totalIn - totalOut;

  return (
    <section className="banking-section">
      <h2 className="banking-title">This Month’s Cash Flow</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Total Inflows</span>
          <span className="font-semibold text-green-600">${totalIn.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Outflows</span>
          <span className="font-semibold text-red-600">${totalOut.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Net Cash Flow</span>
          <span className={`font-semibold ${net >= 0 ? 'text-green-700' : 'text-red-700'}`}>
            ${net.toFixed(2)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CashFlowAnalysis;