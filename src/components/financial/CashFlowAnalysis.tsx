import React from 'react';
import { BankTransaction } from '../../data/mockData';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useFormatCurrency } from '../../utils/formatCurrency';

interface CashFlowAnalysisProps {
  transactions?: BankTransaction[]; // Make transactions optional
}

const CashFlowAnalysis: React.FC<CashFlowAnalysisProps> = ({ transactions = [] }) => {
  const { currency, rate } = useCurrency();
  const format = useFormatCurrency();

  // Determine this month’s transactions
  const month = new Date().getMonth();
  const thisMonth = transactions.filter(tx =>
    new Date(tx.date).getMonth() === month
  );

  // Sum inflows and outflows (in USD)
  const totalInUSD = thisMonth
    .filter(tx => tx.type === 'credit')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalOutUSD = thisMonth
    .filter(tx => tx.type === 'debit')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const netUSD = totalInUSD - totalOutUSD;

  // Convert for debug (optional)
  const totalInConverted  = totalInUSD * rate;
  const totalOutConverted = totalOutUSD * rate;
  const netConverted      = netUSD * rate;

  return (
    <section className="banking-section">
      <h2 className="banking-title">This Month’s Cash Flow</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Total Inflows</span>
          <div className="text-right">
            <div className="font-semibold text-green-600">
              {format(totalInUSD)}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <span>Total Outflows</span>
          <div className="text-right">
            <div className="font-semibold text-red-600">
              {format(totalOutUSD)}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <span>Net Cash Flow</span>
          <div className="text-right">
            <div className={`font-semibold ${netUSD >= 0 ? 'text-green-700' : 'text-red-700'}`}>
              {format(netUSD)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashFlowAnalysis;
