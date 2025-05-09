import React from 'react';
import { TaxReport } from '../../data/mockData';

interface TaxReportsSummaryProps {
  reports?: TaxReport[];
}

const TaxReportsSummary: React.FC<TaxReportsSummaryProps> = ({ reports = [] }) => (
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
          {reports.map(r => (
            <tr key={r.id} className="hover:bg-gray-100">
              <td className="px-4 py-2">{r.year}</td>
              <td className="px-4 py-2 text-right">${r.totalIncome.toLocaleString()}</td>
              <td className="px-4 py-2 text-right">${r.totalTax.toLocaleString()}</td>
              <td className={`px-4 py-2 text-right ${r.refundOrOwed >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {r.refundOrOwed >= 0 ? '+' : '-'}${Math.abs(r.refundOrOwed).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default TaxReportsSummary;
