import React, { useState } from 'react';

const TaxPlanningTools: React.FC = () => {
  const [income, setIncome] = useState<number>(0);
  const [deductions, setDeductions] = useState<number>(0);
  const estimatedTax = (income - deductions) * 0.2; // simple 20% estimator

  return (
    <section className="tax-section">
      <h2 className="tax-title">Tax Estimator</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm mb-1">Estimated Income</label>
          <input
            type="number"
            className="w-full px-3 py-2 border rounded"
            value={income}
            onChange={e => setIncome(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Deductions</label>
          <input
            type="number"
            className="w-full px-3 py-2 border rounded"
            value={deductions}
            onChange={e => setDeductions(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col justify-end">
          <div className="text-gray-600">Estimated Tax:</div>
          <div className="text-xl font-semibold">${estimatedTax.toFixed(2)}</div>
        </div>
      </div>
    </section>
)};

export default TaxPlanningTools;
