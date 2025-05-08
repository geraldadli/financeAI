import React from 'react';
import { SavingRecommendation, FinancialProfile } from '../types/financial';
import Header from '../components/layout/Header';
import Card from '../components/ui/Card';
import RecommendationCard from '../components/financial/RecommendationCard';
import ProgressBar from '../components/ui/ProgressBar';
import { ArrowUpCircle, ArrowDownCircle, DollarSign, PiggyBank, TrendingUp } from 'lucide-react';

interface SavingsPageProps {
  profile: FinancialProfile;
  savingRecommendations: SavingRecommendation[];
}

const SavingsPage: React.FC<SavingsPageProps> = ({ profile, savingRecommendations }) => {
  // Calculate savings rate
  const savingsRate = (profile.monthlySavings / profile.monthlyIncome) * 100;
  
  // Calculate monthly surplus (income - expenses)
  const monthlySurplus = profile.monthlyIncome - profile.monthlyExpenses;
  
  // Mock spending categories for the chart
  const spendingCategories = [
    { name: 'Housing', amount: 1800, color: 'bg-teal-500' },
    { name: 'Transportation', amount: 600, color: 'bg-navy-500' },
    { name: 'Food', amount: 800, color: 'bg-amber-500' },
    { name: 'Utilities', amount: 400, color: 'bg-green-500' },
    { name: 'Entertainment', amount: 350, color: 'bg-red-400' },
    { name: 'Other', amount: 650, color: 'bg-purple-400' },
  ];
  
  // Total spending
  const totalSpending = spendingCategories.reduce((sum, category) => sum + category.amount, 0);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header 
        title="Savings & Expenses" 
        subtitle="Optimize your spending and increase your savings"
      />
      
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="flex items-center p-6 space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <PiggyBank className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-500">Monthly Savings</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-2xl font-bold">${profile.monthlySavings.toLocaleString()}</p>
                  <p className="text-sm text-green-600">{savingsRate.toFixed(1)}%</p>
                </div>
              </div>
            </Card>
            
            <Card className="flex items-center p-6 space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <ArrowUpCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-500">Monthly Income</p>
                <p className="text-2xl font-bold">${profile.monthlyIncome.toLocaleString()}</p>
              </div>
            </Card>
            
            <Card className="flex items-center p-6 space-x-4">
              <div className="p-3 bg-amber-100 rounded-full">
                <ArrowDownCircle className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-gray-500">Monthly Expenses</p>
                <p className="text-2xl font-bold">${profile.monthlyExpenses.toLocaleString()}</p>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Monthly Cash Flow">
              <div className="space-y-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="text-gray-500">Income</p>
                    <p className="text-xl font-semibold text-blue-600">
                      ${profile.monthlyIncome.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Expenses</p>
                    <p className="text-xl font-semibold text-amber-600">
                      ${profile.monthlyExpenses.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <p className="font-medium">Monthly Surplus</p>
                    <p className={`font-semibold ${monthlySurplus >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${monthlySurplus.toLocaleString()}
                    </p>
                  </div>
                  
                  {monthlySurplus >= 0 ? (
                    <div className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      You're spending less than you earn. Great job!
                    </div>
                  ) : (
                    <div className="text-sm text-red-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 transform rotate-180" />
                      You're spending more than you earn. Let's fix this!
                    </div>
                  )}
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Spending Breakdown</p>
                  <div className="flex h-8 mb-4 rounded-md overflow-hidden">
                    {spendingCategories.map((category, index) => (
                      <div
                        key={index}
                        className={`${category.color} h-full transition-all duration-500`}
                        style={{ width: `${(category.amount / totalSpending) * 100}%` }}
                        title={`${category.name}: $${category.amount}`}
                      />
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {spendingCategories.map((category, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        <div className="text-sm">
                          <span className="text-gray-700">{category.name}</span>
                          <span className="text-gray-500 ml-1">${category.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            
            <Card title="Savings Progress">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-medium">Emergency Fund</p>
                    <p className="text-teal-600 font-medium">$24,000 / $30,000</p>
                  </div>
                  <ProgressBar value={24000} max={30000} color="success" size="lg" />
                  <p className="mt-2 text-sm text-gray-500">
                    6 months of expenses - 80% complete
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-medium">Savings Rate</p>
                    <p className="text-teal-600 font-medium">{savingsRate.toFixed(1)}%</p>
                  </div>
                  <ProgressBar value={savingsRate} max={25} color="primary" size="lg" />
                  <p className="mt-2 text-sm text-gray-500">
                    Target: 20% or higher
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-medium">Total Liquid Savings</p>
                    <p className="text-teal-600 font-medium">${profile.totalSavings.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <p>This equals {(profile.totalSavings / profile.monthlyExpenses).toFixed(1)} months of expenses</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Smart Savings Recommendations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savingRecommendations.map((recommendation) => (
                <RecommendationCard
                  key={recommendation.id}
                  recommendation={recommendation}
                  type="saving"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsPage;