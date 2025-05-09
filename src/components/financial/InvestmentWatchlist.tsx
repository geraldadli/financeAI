import React, { useState } from 'react';
import { Investment } from '../../types/financial';
import { Star, X } from 'lucide-react';
import { watchlist as initialWatch } from '../../data/mockData';

const InvestmentWatchlist: React.FC = () => {
  const [watchlist, setWatchlist] = useState<Investment[]>(initialWatch);
  const [symbol, setSymbol] = useState('');

  const addToWatch = () => {
    if (!symbol) return;
    setWatchlist([
      ...watchlist,
      { id: Date.now().toString(), name: symbol.toUpperCase(), type: 'stock', value: 0, returns: 0, risk: 'medium' }
    ]);
    setSymbol('');
  };

  const removeFromWatch = (id: string) =>
    setWatchlist(watchlist.filter(i => i.id !== id));

  return (
    <section className="investment-section">
      <h2 className="investment-title">Watchlist</h2>
      <div className="flex mb-4">
        <input
          className="flex-1 px-4 py-2 border rounded-l-lg"
          placeholder="Ticker symbol"
          value={symbol}
          onChange={e => setSymbol(e.target.value)}
        />
        <button onClick={addToWatch} className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
          Add
        </button>
      </div>
      <ul>
        {watchlist.map(i => (
          <li key={i.id} className="investment-card flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Star size={18} className="text-yellow-500" />
              <span>{i.name}</span>
            </div>
            <button onClick={() => removeFromWatch(i.id)}>
              <X size={16} className="text-gray-500 hover:text-red-600" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InvestmentWatchlist;
