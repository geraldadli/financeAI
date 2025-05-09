import React from 'react';
import { FinancialProfile } from '../../types/financial';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { transactions } from '../../data/mockData';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useFormatCurrency } from '../../utils/formatCurrency';

interface TransactionHistoryProps {
  profile: FinancialProfile;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = () => {
  const { currency, rate } = useCurrency();
  const format = useFormatCurrency();

  console.log('[TransactionHistory] currency:', currency, 'rate:', rate);

  return (
    <section className="investment-section">
      <h2 className="investment-title">Transaction History</h2>
      <ul className="space-y-3">
        {transactions.map(tx => {
          const unitConverted = tx.price * rate;
          const total = tx.quantity * tx.price;
          const totalConverted = total * rate;

          return (
            <li
              key={tx.id}
              className="investment-card flex justify-between items-center"
            >
              <div>
                <div className="font-medium">{tx.asset}</div>
                <div className="text-sm text-gray-600">
                  {new Date(tx.date).toLocaleDateString()}
                </div>
              </div>

              <div className="flex flex-col items-end space-y-1">
                <div className="flex items-center space-x-4">
                  {tx.type === 'buy' ? (
                    <ArrowDownCircle size={20} className="text-green-500" />
                  ) : (
                    <ArrowUpCircle size={20} className="text-red-500" />
                  )}
                  <span>
                    {tx.quantity} @ {format(tx.price)}
                  </span>
                  <span className="font-semibold">{format(total)}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TransactionHistory;
