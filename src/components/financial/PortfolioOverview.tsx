import React from 'react';
import { Investment } from '../../types/financial';
import ProgressBar from '../ui/ProgressBar';
import { useFormatCurrency } from '../../utils/formatCurrency';

interface PortfolioOverviewProps {
  investments: Investment[];
}

const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({ investments }) => {
  const format = useFormatCurrency();

  // Sum by type
  const totals = investments.reduce<Record<string, number>>((acc, inv) => {
    acc[inv.type] = (acc[inv.type] || 0) + inv.value;
    return acc;
  }, {});

  const totalValue = Object.values(totals).reduce((sum, v) => sum + v, 0);

  return (
    <section className="investment-section">
      <h2 className="investment-title">Asset Allocation</h2>

      {Object.entries(totals).map(([type, value]) => {
        const pct = totalValue > 0 ? (value / totalValue) * 100 : 0;

        return (
          <div key={type} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="capitalize">{type.replace('_', ' ')}</span>
              <span>
                {pct.toFixed(1)}%&nbsp;&mdash;&nbsp;{format(value)}
              </span>
            </div>
            <ProgressBar percentage={pct} />
          </div>
        );
      })}
    </section>
  );
};

export default PortfolioOverview;
