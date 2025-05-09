import React, { useState } from 'react';

const SavingsGoalCalculator: React.FC = () => {
  const [goalAmount, setGoalAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [rate, setRate] = useState(0.03);

  // months needed solving FV series for n: approximate via iterative
  let balance = 0;
  let months = 0;
  while (balance < goalAmount && months < 1000) {
    balance = balance * (1 + rate / 12) + monthlyContribution;
    months++;
  }
  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  return (
    <section className="calc-section">
      <h2 className="calc-title">Savings Goal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          Goal Amount ($)
          <input type="number" value={goalAmount} onChange={e => setGoalAmount(+e.target.value)} className="calc-input" />
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
        <div className="text-gray-600">Time to reach goal:</div>
        <div className="text-xl font-semibold">
          {years} years {remMonths} months
        </div>
      </div>
    </section>
  );
};

export default SavingsGoalCalculator;
