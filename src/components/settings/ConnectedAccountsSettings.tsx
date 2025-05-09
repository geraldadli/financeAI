import React from 'react';
import { BankAccount } from '../../data/mockData';
import { Trash } from 'lucide-react';

interface ConnectedAccountsSettingsProps {
  accounts: BankAccount[];
}

const ConnectedAccountsSettings: React.FC<ConnectedAccountsSettingsProps> = ({ accounts }) => (
  <section className="settings-section">
    <h2 className="settings-title">Manage Connected Accounts</h2>
    <ul className="space-y-3">
      {accounts.map(acc => (
        <li key={acc.id} className="settings-item flex justify-between items-center">
          <div>
            <div className="font-medium">{acc.name}</div>
            <div className="text-sm text-gray-500 capitalize">{acc.type.replace('_',' ')}</div>
          </div>
          <button className="text-red-600 hover:text-red-800">
            <Trash size={18} />
          </button>
        </li>
      ))}
    </ul>
  </section>
);

export default ConnectedAccountsSettings;
