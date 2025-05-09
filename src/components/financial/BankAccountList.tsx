import React from 'react';
import { BankAccount } from '../../data/mockData';

interface BankAccountListProps {
  accounts?: BankAccount[]; // Make accounts optional
}

const BankAccountList: React.FC<BankAccountListProps> = ({ accounts = [] }) => (
  <section className="banking-section">
    <h2 className="banking-title">Connected Accounts</h2>
    <ul className="space-y-3">
      {accounts.map(acc => (
        <li key={acc.id} className="banking-card flex justify-between items-center">
          <div>
            <div className="font-medium">{acc.name}</div>
            <div className="text-sm text-gray-600 capitalize">{acc.type.replace('_', ' ')}</div>
          </div>
          <div className={`font-semibold ${acc.balance < 0 ? 'text-red-600' : 'text-gray-800'}`}>
            ${acc.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default BankAccountList;