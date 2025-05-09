import React from 'react';
import { BankAccount } from '../../data/mockData';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useFormatCurrency } from '../../utils/formatCurrency';

interface BankAccountListProps {
  accounts?: BankAccount[]; // Make accounts optional
}

const BankAccountList: React.FC<BankAccountListProps> = ({ accounts = [] }) => {
  const { currency, rate } = useCurrency();
  const format = useFormatCurrency();

  console.log('[BankAccountList] currency:', currency, 'rate:', rate);

  return (
    <section className="banking-section">
      <h2 className="banking-title">Connected Accounts</h2>
      <ul className="space-y-3">
        {accounts.map(acc => {
          const converted = acc.balance * rate;
          return (
            <li
              key={acc.id}
              className="banking-card flex justify-between items-center"
            >
              <div>
                <div className="font-medium">{acc.name}</div>
                <div className="text-sm text-gray-600 capitalize">
                  {acc.type.replace('_', ' ')}
                </div>
              </div>

              <div className="flex flex-col items-end">
                {/* Debug line */}
                <span className="text-xs text-gray-400">
                  Debug: {currency} {converted.toFixed(2)}
                </span>

                {/* Formatted balance */}
                <span
                  className={`font-semibold ${
                    acc.balance < 0 ? 'text-red-600' : 'text-gray-800'
                  }`}
                >
                  {format(acc.balance)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BankAccountList;
