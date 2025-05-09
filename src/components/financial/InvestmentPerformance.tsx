import React from 'react';
import { Investment } from '../../types/financial';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useFormatCurrency } from '../../utils/formatCurrency';

interface InvestmentPerformanceProps {
  investments: Investment[];
}

const InvestmentPerformance: React.FC<InvestmentPerformanceProps> = ({ investments }) => {
  const { currency, rate } = useCurrency();
  const format = useFormatCurrency();

  console.log('[InvestmentPerformance] currency:', currency, 'rate:', rate);

  return (
    <section className="investment-section">
      <h2 className="investment-title">Performance</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto investment-table">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-right">Value</th>
              <th className="px-4 py-2 text-right">Annual Return</th>
              <th className="px-4 py-2 text-center">Risk</th>
            </tr>
          </thead>
          <tbody>
            {investments.map(inv => {
              const convertedValue = inv.value * rate;
              return (
                <tr key={inv.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{inv.name}</td>

                  {/* Formatted, rate-applied value */}
                  <td className="px-4 py-2 text-right font-semibold">
                    {format(inv.value)}
                  </td>

                  <td className={`px-4 py-2 text-right ${inv.returns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {inv.returns >= 0 ? <ArrowUp size={16}/> : <ArrowDown size={16}/>}
                    {Math.abs(inv.returns).toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 text-center capitalize">{inv.risk}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default InvestmentPerformance;
