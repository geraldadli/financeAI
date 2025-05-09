import React, { useState } from 'react';

const RetirementCalculator: React.FC = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [rate, setRate] = useState(0.06);

  // Future value of a series + lump sum
  const years = retireAge - currentAge;
  const fvLump = currentSavings * Math.pow(1 + rate, years);
  const fvSeries = monthlyContribution * ((Math.pow(1 + rate / 12, years * 12) - 1) / (rate / 12));
  const totalFuture = fvLump + fvSeries;

  return (
    <section className="calc-section">
      <h2 className="calc-title">Retirement Planner</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          Current Age
          <input type="number" value={currentAge} onChange={e => setCurrentAge(+e.target.value)} className="calc-input" />
        </label>
        <label>
          Retirement Age
          <input type="number" value={retireAge} onChange={e => setRetireAge(+e.target.value)} className="calc-input" />
        </label>
        <label>
          Current Savings ($)
          <input type="number" value={currentSavings} onChange={e => setCurrentSavings(+e.target.value)} className="calc-input" />
        </label>
        <label>
          Monthly Contribution ($)
          <input type="number" value={monthlyContribution} onChange={e => setMonthlyContribution(+e.target.value)} className="calc-input" />
        </label>
        <label className="sm:col-span-2">
          Expected Annual Return (%)
          <input type="number" step="0.01" value={rate * 100} onChange={e => setRate(+e.target.value / 100)} className="calc-input" />
        </label>
      </div>
      <div className="mt-4">
        <div className="text-gray-600">At age {retireAge}, you’ll have approximately:</div>
        <div className="text-xl font-semibold">${totalFuture.toFixed(2)}</div>
      </div>
    </section>
  );
};

export default RetirementCalculator;
