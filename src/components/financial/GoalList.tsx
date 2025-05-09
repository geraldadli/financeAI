import React from 'react';
import { FinancialGoal } from '../../types/financial';
import ProgressBar from '../ui/ProgressBar';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useFormatCurrency } from '../../utils/formatCurrency';

interface GoalListProps {
  goals: FinancialGoal[];
}

const GoalList: React.FC<GoalListProps> = ({ goals }) => {
  const { currency, rate } = useCurrency();
  const format = useFormatCurrency();

  console.log('[GoalList] currency:', currency, 'rate:', rate);

  return (
    <section className="goals-section">
      <h2 className="goals-title">Progress Tracker</h2>
      <ul className="space-y-4">
        {goals.map(goal => {
          const pct = goal.targetAmount > 0
            ? (goal.currentAmount / goal.targetAmount) * 100
            : 0;

          // For debugging raw converted values:
          const currentConverted = goal.currentAmount * rate;
          const targetConverted = goal.targetAmount * rate;

          return (
            <li key={goal.id} className="goals-card">
              <div className="flex justify-between mb-1">
                <span>{goal.name}</span>
                <span>{pct.toFixed(1)}%</span>
              </div>

              <ProgressBar percentage={pct} />

              <div className="mt-2 text-sm text-gray-600 space-y-1">
                {/* Properly formatted */}
                <div>
                  {format(goal.currentAmount)} of {format(goal.targetAmount)} by{' '}
                  {new Date(goal.targetDate).toLocaleDateString()}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default GoalList;
