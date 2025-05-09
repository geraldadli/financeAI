import React from 'react';
import { Investment } from '../../types/financial';
import Card from '../ui/Card';
import { ChevronRight } from 'lucide-react';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useFormatCurrency } from '../../utils/formatCurrency';

interface InvestmentAllocationProps {
  investments: Investment[];
}

const InvestmentAllocation: React.FC<InvestmentAllocationProps> = ({ investments = [] }) => {
  const { currency, rate } = useCurrency();
  const format = useFormatCurrency();

  // Helper to pick bar color by asset type
  const getTypeColor = (type?: Investment['type']) => {
    switch (type) {
      case 'stock':       return 'bg-teal-500';
      case 'bond':        return 'bg-navy-500';
      case 'crypto':      return 'bg-amber-500';
      case 'real_estate': return 'bg-green-500';
      case 'cash':        return 'bg-blue-400';
      default:            return 'bg-gray-400';
    }
  };

  // Helper to pick badge color by risk
  const getRiskColor = (risk?: Investment['risk']) => {
    switch (risk) {
      case 'low':     return 'text-green-600 bg-green-50';
      case 'medium':  return 'text-amber-600 bg-amber-50';
      case 'high':    return 'text-red-600 bg-red-50';
      default:        return 'text-gray-600 bg-gray-50';
    }
  };

  // Total portfolio value (in USD)
  const totalValueUSD = investments.reduce((sum, inv) => sum + (inv?.value || 0), 0);

  return (
    <Card title="Investment Allocation">
      {totalValueUSD > 0 ? (
        <>
          {/* Allocation bar */}
          <div className="flex h-8 mb-4 rounded-md overflow-hidden">
            {investments.map(inv => {
              const pct = (inv.value / totalValueUSD) * 100;
              return (
                <div
                  key={inv.id}
                  className={`${getTypeColor(inv.type)} h-full transition-all duration-500`}
                  style={{ width: `${pct}%` }}
                  title={`${inv.name}: ${format(inv.value)}`}
                />
              );
            })}
          </div>

          {/* Detailed list */}
          <div className="space-y-3">
            {investments
              .slice()
              .sort((a, b) => b.value - a.value)
              .map(inv => {
                const pct = totalValueUSD > 0 ? (inv.value / totalValueUSD) * 100 : 0;
                return (
                  <div
                    key={inv.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getTypeColor(inv.type)}`} />
                      <div>
                        <p className="font-medium text-gray-800">{inv.name}</p>
                        <p className="text-xs text-gray-500 capitalize">
                          {inv.type.replace('_', ' ')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* Formatted value & percentage */}
                      <div className="text-right">
                        <p className="font-medium">{format(inv.value)}</p>
                        <p className="text-xs text-gray-500">{pct.toFixed(1)}%</p>
                      </div>

                      {/* Risk badge */}
                      <span className={`text-xs px-2 py-1 rounded-full ${getRiskColor(inv.risk)}`}>
                        {inv.risk}
                      </span>

                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <div className="text-center py-6">
          <p className="text-gray-500">No investments added yet</p>
        </div>
      )}
    </Card>
  );
};

export default InvestmentAllocation;
