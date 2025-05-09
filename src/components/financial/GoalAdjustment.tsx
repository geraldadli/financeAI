import React from 'react';
import { FinancialGoal } from '../../types/financial';
import { ArrowUp, ArrowDown, Edit } from 'lucide-react';

interface GoalAdjustmentProps {
  goals: FinancialGoal[];
}

const GoalAdjustment: React.FC<GoalAdjustmentProps> = ({ goals }) => (
  <section className="goals-section">
    <h2 className="goals-title">Adjust & Prioritize</h2>
    <ul className="space-y-2">
      {goals.map((g, idx) => (
        <li key={g.id} className="goals-card flex justify-between items-center">
          <div>
            <span className="font-medium">{g.name}</span>
            <span className="text-sm text-gray-500 ml-2">({g.category})</span>
          </div>
          <div className="flex items-center space-x-2">
            <button><ArrowUp size={16} /></button>
            <button><ArrowDown size={16} /></button>
            <button><Edit size={16} /></button>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default GoalAdjustment;
