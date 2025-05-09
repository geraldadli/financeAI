import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const dummyTrends = [
  { name: 'S&P 500', change: 1.2 },
  { name: 'NASDAQ', change: -0.5 },
  { name: 'Gold', change: 0.8 },
];

const MarketTrends: React.FC = () => (
  <section className="investment-section">
    <h2 className="investment-title">Market Trends</h2>
    <ul className="space-y-3">
      {dummyTrends.map(tr => (
        <li key={tr.name} className="flex justify-between items-center investment-card">
          <span>{tr.name}</span>
          <div className="flex items-center space-x-1">
            {tr.change >= 0 ? <TrendingUp size={18} className="text-green-600" /> : <TrendingDown size={18} className="text-red-600" />}
            <span>{tr.change.toFixed(2)}%</span>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default MarketTrends;
