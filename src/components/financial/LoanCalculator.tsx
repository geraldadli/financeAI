import React, { useState } from 'react';

const LoanCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState(200000);
  const [annualRate, setAnnualRate] = useState(3.5);
  const [termYears, setTermYears] = useState(30);

  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  const payment = (principal * r) / (1 - Math.pow(1 + r, -n));

  return (
    <section className="calc-section">
      <h2 className="calc-title">Loan / Mortgage Payment</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          Loan Amount ($)
          <input type="number" value={principal} onChange={e => setPrincipal(+e.target.value)} className="calc-input" />
        </label>
        <label>
          Annual Interest Rate (%)
          <input type="number" step="0.01" value={annualRate} onChange={e => setAnnualRate(+e.target.value)} className="calc-input" />
        </label>
        <label>
          Term (years)
          <input type="number" value={termYears} onChange={e => setTermYears(+e.target.value)} className="calc-input" />
        </label>
      </div>
      <div className="mt-4">
        <div className="text-gray-600">Your monthly payment:</div>
        <div className="text-xl font-semibold">${isFinite(payment) ? payment.toFixed(2) : '–'}</div>
      </div>
    </section>
  );
};

export default LoanCalculator;
