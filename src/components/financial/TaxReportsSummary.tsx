import React from 'react';
import { TaxReport } from '../../data/mockData';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useFormatCurrency } from '../../utils/formatCurrency';

interface TaxReportsSummaryProps {
  reports?: TaxReport[];
}

const TaxReportsSummary: React.FC<TaxReportsSummaryProps> = ({ reports = [] }) => {
  const { currency, rate } = useCurrency();
  const format = useFormatCurrency();

  console.log('[TaxReportsSummary] currency:', currency, 'rate:', rate);

  return (
    <section className="tax-section">
      <h2 className="tax-title">Reports & Summaries</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto tax-table">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Year</th>
              <th className="px-4 py-2 text-right">Income</th>
              <th className="px-4 py-2 text-right">Tax</th>
              <th className="px-4 py-2 text-right">Refund/Owed</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(r => {
              // Raw USD values
              const incUSD = r.totalIncome;
              const taxUSD = r.totalTax;
              const refUSD = r.refundOrOwed;

              // Converted for debug
              const incConv = incUSD * rate;
              const taxConv = taxUSD * rate;
              const refConv = refUSD * rate;

              return (
                <tr key={r.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{r.year}</td>
                  
                  {/* Income */}
                  <td className="px-4 py-2 text-right">
                    <div className="text-xs text-gray-400">
                      Debug: {currency} {incConv.toFixed(2)}
                    </div>
                    {format(incUSD)}
                  </td>

                  {/* Tax */}
                  <td className="px-4 py-2 text-right">
                    <div className="text-xs text-gray-400">
                      Debug: {currency} {taxConv.toFixed(2)}
                    </div>
                    {format(taxUSD)}
                  </td>

                  {/* Refund/Owed */}
                  <td
                    className={`px-4 py-2 text-right ${
                      refUSD >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    <div className="text-xs text-gray-400">
                      Debug: {currency} {refConv.toFixed(2)}
                    </div>
                    {refUSD >= 0 ? '+' : '-'}
                    {format(Math.abs(refUSD))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TaxReportsSummary;
