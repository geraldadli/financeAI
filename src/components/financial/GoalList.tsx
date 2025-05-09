import React from 'react';
import { FinancialGoal } from '../../types/financial';
import ProgressBar from '../ui/ProgressBar';

interface GoalListProps {
  goals: FinancialGoal[];
}

const GoalList: React.FC<GoalListProps> = ({ goals }) => (
  <section className="goals-section">
    <h2 className="goals-title">Progress Tracker</h2>
    <ul className="space-y-4">
      {goals.map(goal => {
        const pct = goal.targetAmount > 0
          ? (goal.currentAmount / goal.targetAmount) * 100
          : 0;
        return (
          <li key={goal.id} className="goals-card">
            <div className="flex justify-between mb-1">
              <span>{goal.name}</span>
              <span>{pct.toFixed(1)}%</span>
            </div>
            <ProgressBar percentage={pct} />
            <div className="mt-2 text-sm text-gray-600">
              ${goal.currentAmount.toLocaleString()} of ${goal.targetAmount.toLocaleString()} by {new Date(goal.targetDate).toLocaleDateString()}
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);

export default GoalList;
