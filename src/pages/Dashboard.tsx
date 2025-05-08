import React from 'react';
import { FinancialProfile, SavingRecommendation, InvestmentRecommendation, TaxRecommendation } from '../types/financial';
import Header from '../components/layout/Header';
import FinancialSummary from '../components/financial/FinancialSummary';
import GoalTracker from '../components/financial/GoalTracker';
import InvestmentAllocation from '../components/financial/InvestmentAllocation';
import RecommendationCard from '../components/financial/RecommendationCard';

interface DashboardProps {
  profile: FinancialProfile;
  savingRecommendations: SavingRecommendation[];
  investmentRecommendations: InvestmentRecommendation[];
  taxRecommendations: TaxRecommendation[];
}

const Dashboard: React.FC<DashboardProps> = ({
  profile,
  savingRecommendations,
  investmentRecommendations,
  taxRecommendations
}) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header 
        title="Financial Dashboard" 
        subtitle="Your financial health at a glance" 
      />
      
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-6">
          <FinancialSummary profile={profile} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Your Goals</h2>
              <GoalTracker goals={profile.goals} />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Investment Portfolio</h2>
              <InvestmentAllocation investments={profile.investments} />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Personalized Recommendations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Prioritize high-relevance tax recommendations */}
              {taxRecommendations
                .filter(rec => rec.relevance === 'high')
                .slice(0, 1)
                .map(rec => (
                  <RecommendationCard key={rec.id} recommendation={rec} type="tax" />
                ))
              }
              
              {/* Add an investment recommendation */}
              {investmentRecommendations.slice(0, 1).map(rec => (
                <RecommendationCard key={rec.id} recommendation={rec} type="investment" />
              ))}
              
              {/* Add an easy saving recommendation */}
              {savingRecommendations
                .filter(rec => rec.difficulty === 'easy')
                .slice(0, 1)
                .map(rec => (
                  <RecommendationCard key={rec.id} recommendation={rec} type="saving" />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;