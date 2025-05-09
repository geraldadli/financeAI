import React, { useState } from 'react';

const BudgetPlanningCalculator: React.FC = () => {
  const [income, setIncome] = useState(5000);
  const [housingPct, setHousingPct] = useState(30);
  const [foodPct, setFoodPct] = useState(15);
  const [savingsPct, setSavingsPct] = useState(20);

  const housing = (housingPct / 100) * income;
  const food = (foodPct / 100) * income;
  const savings = (savingsPct / 100) * income;
  const other = income - (housing + food + savings);

  return (
    <section className="calc-section">
      <h2 className="calc-title">Budget Planner</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          Monthly Income ($)
          <input type="number" value={income} onChange={e => setIncome(+e.target.value)} className="calc-input" />
        </label>
        <label>
          Housing (%)
          <input type="number" value={housingPct} onChange={e => setHousingPct(+e.target.value)} className="calc-input" />
        </label>
        <label>
          Food (%)
          <input type="number" value={foodPct} onChange={e => setFoodPct(+e.target.value)} className="calc-input" />
        </label>
        <label>
          Savings (%)
          <input type="number" value={savingsPct} onChange={e => setSavingsPct(+e.target.value)} className="calc-input" />
        </label>
      </div>
      <div className="mt-4 space-y-1">
        <div>Housing: ${housing.toFixed(2)}</div>
        <div>Food: ${food.toFixed(2)}</div>
        <div>Savings: ${savings.toFixed(2)}</div>
        <div>Other: ${other.toFixed(2)}</div>
      </div>
    </section>
  );
};

export default BudgetPlanningCalculator;
