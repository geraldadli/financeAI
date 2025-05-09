import React from 'react';
import { FinancialGoal } from '../../types/financial';

interface CompletionProjectionProps {
  goals: FinancialGoal[];
  monthlySavings: number;
}

const CompletionProjection: React.FC<CompletionProjectionProps> = ({ goals, monthlySavings }) => (
  <section className="goals-section">
    <h2 className="goals-title">Completion Projections</h2>
    <ul className="space-y-3">
      {goals.map(goal => {
        const remaining = Math.max(goal.targetAmount - goal.currentAmount, 0);
        const months = monthlySavings > 0 ? remaining / monthlySavings : Infinity;
        const projDate = new Date();
        projDate.setMonth(projDate.getMonth() + Math.ceil(months));
        return (
          <li key={goal.id} className="goals-card flex justify-between">
            <span>{goal.name}</span>
            <span className="font-medium">{projDate.toLocaleDateString()}</span>
          </li>
        );
      })}
    </ul>
  </section>
);

export default CompletionProjection;
