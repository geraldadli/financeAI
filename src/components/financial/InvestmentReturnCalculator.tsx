import React, { useState } from 'react';

const InvestmentReturnCalculator: React.FC = () => {
  const [initial, setInitial] = useState(10000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(0.08);

  const futureValue = initial * Math.pow(1 + rate, years);

  return (
    <section className="calc-section">
      <h2 className="calc-title">Investment Return</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          Initial Amount ($)
          <input type="number" value={initial} onChange={e => setInitial(+e.target.value)} className="calc-input" />
        </label>
        <label>
          Years
          <input type="number" value={years} onChange={e => setYears(+e.target.value)} className="calc-input" />
        </label>
        <label className="sm:col-span-2">
          Expected Annual Return (%)
          <input type="number" step="0.01" value={rate * 100} onChange={e => setRate(+e.target.value / 100)} className="calc-input" />
        </label>
      </div>
      <div className="mt-4">
        <div className="text-gray-600">Future value after {years} years:</div>
        <div className="text-xl font-semibold">${futureValue.toFixed(2)}</div>
      </div>
    </section>
  );
};

export default InvestmentReturnCalculator;
