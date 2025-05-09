import React from 'react';
import { BankTransaction } from '../../data/mockData';

interface RecentTransactionsProps {
  transactions?: BankTransaction[]; // Make transactions optional
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions = [] }) => (
  <section className="banking-section">
    <h2 className="banking-title">Recent Transactions</h2>
    <div className="overflow-x-auto">
      <table className="w-full table-auto banking-table">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-right">Amount</th>
            <th className="px-4 py-2 text-center">Type</th>
            <th className="px-4 py-2 text-center">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id} className="hover:bg-gray-100">
              <td className="px-4 py-2">{new Date(tx.date).toLocaleDateString()}</td>
              <td className="px-4 py-2">{tx.description}</td>
              <td className={`px-4 py-2 text-right ${tx.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
              </td>
              <td className="px-4 py-2 text-center">{tx.type}</td>
              <td className="px-4 py-2 text-center capitalize">{tx.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default RecentTransactions;