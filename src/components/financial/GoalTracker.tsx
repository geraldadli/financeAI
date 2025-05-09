import React from 'react';
import { FinancialGoal } from '../../types/financial';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import { Calendar, Target, TrendingUp } from 'lucide-react';
import { useFormatCurrency } from '../../utils/formatCurrency';
import { useCurrency } from '../../contexts/CurrencyContext';

interface GoalTrackerProps {
  goals: FinancialGoal[];
}

const GoalTracker: React.FC<GoalTrackerProps> = ({ goals }) => {
  const format = useFormatCurrency();
  const { currency, rate } = useCurrency();

  // Helper to pick the right icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'retirement':  return <Target className="h-5 w-5 text-teal-600" />;
      case 'house':       return <Target className="h-5 w-5 text-amber-600" />;
      case 'education':   return <Target className="h-5 w-5 text-navy-600" />;
      case 'vacation':    return <Target className="h-5 w-5 text-green-600" />;
      case 'emergency':   return <Target className="h-5 w-5 text-red-600" />;
      default:            return <Target className="h-5 w-5 text-gray-600" />;
    }
  };

  // Decide bar color based on progress & time left
  const getGoalColor = (goal: FinancialGoal) => {
    const progress = (goal.currentAmount / goal.targetAmount) * 100;
    const daysLeft = 
      (new Date(goal.targetDate).getTime() - Date.now()) / (1000 * 3600 * 24);
    if (daysLeft < 30 && progress < 80) return 'error';
    if (daysLeft < 90 && progress < 50) return 'warning';
    return progress > 75 ? 'success' : 'primary';
  };

  const formatTimeRemaining = (targetDate: Date) => {
    const daysLeft = 
      (new Date(targetDate).getTime() - Date.now()) / (1000 * 3600 * 24);
    if (daysLeft < 0) return 'Overdue';
    if (daysLeft < 30) return `${Math.floor(daysLeft)} days left`;
    if (daysLeft < 365) return `${Math.floor(daysLeft / 30)} months left`;
    return `${Math.floor(daysLeft / 365)} years left`;
  };

  return (
    <Card title="Financial Goals">
      <div className="space-y-6">
        {goals.map(goal => {
          // raw converted for optional debug:
          const currentConverted = goal.currentAmount * rate;
          const targetConverted  = goal.targetAmount * rate;

          return (
            <div key={goal.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {getCategoryIcon(goal.category)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{goal.name}</h4>
                    <p className="text-sm text-gray-500 capitalize">{goal.category}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-teal-600 font-medium">
                    {format(goal.currentAmount)}
                  </div>
                  <div className="text-sm text-gray-500">
                    of {format(goal.targetAmount)}
                  </div>
                </div>
              </div>

              <ProgressBar
                value={(goal.currentAmount / goal.targetAmount) * 100}
                max={100}
                color={getGoalColor(goal)}
                size="md"
              />

              <div className="flex justify-between mt-2 text-sm">
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatTimeRemaining(goal.targetDate)}
                </div>
                <div className="flex items-center text-gray-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {Math.round((goal.currentAmount / goal.targetAmount) * 100)}% complete
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default GoalTracker;
