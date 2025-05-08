import React from 'react';
import { Investment } from '../../types/financial';
import Card from '../ui/Card';
import { ChevronRight } from 'lucide-react';

interface InvestmentAllocationProps {
  investments: Investment[];
}

const InvestmentAllocation: React.FC<InvestmentAllocationProps> = ({ investments = [] }) => {
  // Calculate total investment value
  const totalValue = investments.reduce((sum, investment) => sum + (investment?.value || 0), 0);
  
  // Sort investments by value (highest first)
  const sortedInvestments = [...investments]
    .filter((investment): investment is Investment => investment != null)
    .sort((a, b) => (b?.value || 0) - (a?.value || 0));
  
  // Get type colors for the allocation bars
  const getTypeColor = (type: string | undefined) => {
    if (!type) return 'bg-gray-400';
    switch (type) {
      case 'stock': return 'bg-teal-500';
      case 'bond': return 'bg-navy-500';
      case 'crypto': return 'bg-amber-500';
      case 'real_estate': return 'bg-green-500';
      case 'cash': return 'bg-blue-400';
      default: return 'bg-gray-400';
    }
  };
  
  // Get risk colors
  const getRiskColor = (risk: string | undefined) => {
    if (!risk) return 'text-gray-600 bg-gray-50';
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-amber-600 bg-amber-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <Card title="Investment Allocation">
      {totalValue > 0 ? (
        <>
          <div className="flex h-8 mb-4 rounded-md overflow-hidden">
            {sortedInvestments.map((investment) => (
              <div
                key={investment?.id || Math.random()}
                className={`${getTypeColor(investment?.type)} h-full transition-all duration-500`}
                style={{ width: `${((investment?.value || 0) / totalValue) * 100}%` }}
                title={`${investment?.name || 'Unknown'}: $${(investment?.value || 0).toLocaleString()}`}
              />
            ))}
          </div>
          
          <div className="space-y-3">
            {sortedInvestments.map((investment) => (
              <div key={investment?.id || Math.random()} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getTypeColor(investment?.type)}`} />
                  <div>
                    <p className="font-medium text-gray-800">{investment?.name || 'Unknown Investment'}</p>
                    <p className="text-xs text-gray-500 capitalize">{(investment?.type || 'unknown').replace('_', ' ')}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">${(investment?.value || 0).toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{(((investment?.value || 0) / totalValue) * 100).toFixed(1)}%</p>
                  </div>
                  
                  <span className={`text-xs px-2 py-1 rounded-full ${getRiskColor(investment?.risk)}`}>
                    {investment?.risk || 'unknown'}
                  </span>
                  
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            ))}
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