import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import SavingsPage from './pages/SavingsPage';
import Investment from './pages/Investment';
import Banking from './pages/Banking';
import { mockFinancialProfile, mockSavingRecommendations, mockInvestmentRecommendations, mockTaxRecommendations } from './data/mockData';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <Dashboard 
            profile={mockFinancialProfile} 
            savingRecommendations={mockSavingRecommendations} 
            investmentRecommendations={mockInvestmentRecommendations} 
            taxRecommendations={mockTaxRecommendations} 
          />
        );
      case 'savings':
        return (
          <SavingsPage 
            profile={mockFinancialProfile} 
            savingRecommendations={mockSavingRecommendations} 
          />
        );
      case 'investments':
        return (
          <Investment
            profile={mockFinancialProfile}
            savingRecommendations={mockSavingRecommendations}
            investmentRecommendations={mockInvestmentRecommendations}
            taxRecommendations={mockTaxRecommendations}
          />
        );
      case 'banking':
        return (
          <Banking
            bankAccounts={mockFinancialProfile.bankAccounts}
            bankTransactions={mockFinancialProfile.bankTransactions}
          />
        );
      default:
        return (
          <div className="flex flex-col h-screen items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</h1>
            <p className="text-gray-500">This page is under construction</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <div className="flex-1 overflow-hidden">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;