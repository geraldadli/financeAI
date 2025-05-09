import React from 'react';
import Header from '../components/layout/Header';
import PortfolioOverview from '../components/financial/PortfolioOverview';
import InvestmentPerformance from '../components/financial/InvestmentPerformance';
import TransactionHistory from '../components/financial/TransactionHistory';
import InvestmentWatchlist from '../components/financial/InvestmentWatchlist';
import MarketTrends from '../components/financial/MarketTrends';

import { FinancialProfile } from '../types/financial';
import '../styles/investment.css';

interface InvestmentPageProps {
  profile: FinancialProfile;
}

const Investment: React.FC<InvestmentPageProps> = ({ profile }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header 
        title="Investment Overview" 
        subtitle="Track performance, trends, and opportunities" 
      />
      
      <div className="flex-1 overflow-y-auto p-6 bg-grey-50">
        <div className="max-w-7xl mx-auto space-y-8">
          <PortfolioOverview investments={profile.investments} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InvestmentPerformance investments={profile.investments} />
            <MarketTrends />
          </div>

          <TransactionHistory profile={profile} />
          <InvestmentWatchlist />
        </div>
      </div>
    </div>
  );
};

export default Investment;
