import React from 'react';
import { FinancialProfile } from '../../types/financial';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { transactions } from '../../data/mockData';

interface Transaction {
  id: string;
  date: string;
  type: 'buy' | 'sell';
  asset: string;
  quantity: number;
  price: number;
}

interface TransactionHistoryProps {
  profile: FinancialProfile;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = () => {
  return (
    <section className="investment-section">
      <h2 className="investment-title">Transaction History</h2>
      <ul className="space-y-3">
        {transactions.map(tx => (
          <li key={tx.id} className="investment-card flex justify-between items-center">
            <div>
              <div className="font-medium">{tx.asset}</div>
              <div className="text-sm text-gray-600">{new Date(tx.date).toLocaleDateString()}</div>
            </div>
            <div className="flex items-center space-x-4">
              {tx.type === 'buy' ? <ArrowDownCircle size={20} className="text-green-500" /> : <ArrowUpCircle size={20} className="text-red-500" />}
              <span>{tx.quantity} @ ${tx.price.toFixed(2)}</span>
              <span className="font-semibold">${(tx.quantity * tx.price).toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TransactionHistory;
