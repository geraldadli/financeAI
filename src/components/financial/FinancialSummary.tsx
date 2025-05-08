import React from 'react';
import { FinancialProfile } from '../../types/financial';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import { DollarSign, TrendingUp, CreditCard, Target } from 'lucide-react';

interface FinancialSummaryProps {
  profile: FinancialProfile;
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({ profile }) => {
  const savingsRate = (profile.monthlySavings / profile.monthlyIncome) * 100;
  const debtToIncomeRatio = (profile.totalDebt / (profile.monthlyIncome * 12)) * 100;
  
  // Calculate total investment value
  const totalInvestmentValue = profile.investments.reduce((sum, investment) => sum + investment.value, 0);
  
  // Calculate progress towards primary goal (if any)
  const primaryGoal = profile.goals.length > 0 ? profile.goals[0] : null;
  const goalProgress = primaryGoal ? (primaryGoal.currentAmount / primaryGoal.targetAmount) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="md:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Financial Overview</h2>
          <span className="text-sm text-gray-500">Updated today</span>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Monthly Income</p>
              <p className="text-xl font-semibold">${profile.monthlyIncome.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Savings</p>
              <p className="text-xl font-semibold">${profile.totalSavings.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <CreditCard className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Debt</p>
              <p className="text-xl font-semibold">${profile.totalDebt.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-navy-100 rounded-lg">
              <Target className="h-5 w-5 text-navy-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Investments</p>
              <p className="text-xl font-semibold">${totalInvestmentValue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Health</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Savings Rate</span>
              <span className="text-sm font-medium text-gray-700">{savingsRate.toFixed(1)}%</span>
            </div>
            <ProgressBar 
              value={savingsRate} 
              max={25} 
              color={savingsRate >= 20 ? 'success' : savingsRate >= 10 ? 'warning' : 'error'} 
            />
            <p className="mt-1 text-xs text-gray-500">Target: 20% or higher</p>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Debt-to-Income</span>
              <span className="text-sm font-medium text-gray-700">{debtToIncomeRatio.toFixed(1)}%</span>
            </div>
            <ProgressBar 
              value={debtToIncomeRatio} 
              max={100} 
              color={debtToIncomeRatio <= 36 ? 'success' : debtToIncomeRatio <= 42 ? 'warning' : 'error'} 
            />
            <p className="mt-1 text-xs text-gray-500">Target: 36% or lower</p>
          </div>
        </div>
      </Card>

      {primaryGoal && (
        <Card>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Primary Goal</h3>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{primaryGoal.name}</span>
              <span className="text-teal-600 font-semibold">
                ${primaryGoal.currentAmount.toLocaleString()} / ${primaryGoal.targetAmount.toLocaleString()}
              </span>
            </div>
            <ProgressBar value={primaryGoal.currentAmount} max={primaryGoal.targetAmount} color="accent" size="lg" />
            <p className="mt-2 text-sm text-gray-600">
              Target date: {primaryGoal.targetDate.toLocaleDateString()}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default FinancialSummary;