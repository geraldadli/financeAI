import React from 'react';
import { FinancialGoal, SavingRecommendation } from '../../types/financial';
import { Star } from 'lucide-react';

interface GoalRecommendationsProps {
  goals: FinancialGoal[];
  recommendations: SavingRecommendation[];
}

const GoalRecommendations: React.FC<GoalRecommendationsProps> = ({ goals, recommendations }) => (
  <section className="goals-section">
    <h2 className="goals-title">Goal-Specific Tips</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {goals.map(goal => {
        const recs = recommendations.filter(r => r.category === goal.category).slice(0, 2);
        return recs.map(r => (
          <div key={`${goal.id}-${r.id}`} className="goals-card">
            <div className="flex items-center mb-2">
              <Star className="text-yellow-500 mr-1" />
              <span className="font-semibold">{goal.name}</span>
            </div>
            <div className="text-sm">{r.title}</div>
            <div className="mt-1 text-xs text-gray-600">{r.description}</div>
            <div className="mt-2 font-medium">Save ~${r.potentialSaving}/mo</div>
          </div>
        ));
      })}
    </div>
  </section>
);

export default GoalRecommendations;
