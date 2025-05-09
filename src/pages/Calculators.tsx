import React from 'react';
import Header from '../components/layout/Header';
import RetirementCalculator from '../components/financial/RetirementCalculator';
import LoanCalculator from '../components/financial/LoanCalculator';
import InvestmentReturnCalculator from '../components/financial/InvestmentReturnCalculator';
import BudgetPlanningCalculator from '../components/financial/BudgetPlanningCalculator';
import SavingsGoalCalculator from '../components/financial/SavingsGoalCalculator';

import '../styles/Calculators.css';

const Calculators: React.FC = () => (
  <div className="flex flex-col h-screen overflow-hidden">
    <Header
      title="Calculators"
      subtitle="Plan your finances with our interactive tools"
    />

    <div className="flex-1 overflow-y-auto p-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <RetirementCalculator />
        <LoanCalculator />
        <InvestmentReturnCalculator />
        <BudgetPlanningCalculator />
        <SavingsGoalCalculator />
      </div>
    </div>
  </div>
);

export default Calculators;
