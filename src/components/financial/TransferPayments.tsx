import React, { useState } from 'react';
import { BankAccount } from '../../data/mockData';

interface TransferPaymentsProps {
  accounts: BankAccount[];
}

const TransferPayments: React.FC<TransferPaymentsProps> = ({ accounts }) => {
  if (!accounts || accounts.length < 2) {
    return (
      <section className="banking-section">
        <h2 className="banking-title">Transfer & Payments</h2>
        <p className="text-gray-500">You need at least two accounts to make a transfer.</p>
      </section>
    );
  }

  const [from, setFrom] = useState(accounts[0]?.id || '');
  const [to, setTo] = useState(accounts[1]?.id || '');
  const [amount, setAmount] = useState<number>(0);

  const submit = () => {
    // wire up your API here
    alert(`Transfer $${amount} from ${from} to ${to}`);
  };

  return (
    <section className="banking-section">
      <h2 className="banking-title">Transfer & Payments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-sm mb-1">From</label>
          <select
            className="w-full px-3 py-2 border rounded"
            value={from}
            onChange={e => setFrom(e.target.value)}
          >
            {accounts.map(a => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">To</label>
          <select
            className="w-full px-3 py-2 border rounded"
            value={to}
            onChange={e => setTo(e.target.value)}
          >
            {accounts.map(a => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Amount</label>
          <input
            type="number"
            className="w-full px-3 py-2 border rounded"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </div>
      </div>
      <button
        onClick={submit}
        className="mt-4 px-5 py-2 banking-btn"
      >
        Send
      </button>
    </section>
  );
};

export default TransferPayments;