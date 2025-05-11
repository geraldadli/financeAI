import React from 'react';
import Header from '../components/layout/Header';
import BankAccountList from '../components/financial/BankAccountList';
import RecentTransactions from '../components/financial/RecentTransactions';
import CashFlowAnalysis from '../components/financial/CashFlowAnalysis';
import AccountLinking from '../components/financial/AccountLinking';
import TransferPayments from '../components/financial/TransferPayments';

import { BankAccount, BankTransaction } from '../data/mockData';
import '../styles/banking.css';

interface BankingPageProps {
  bankAccounts: BankAccount[];
  bankTransactions: BankTransaction[];
  onPageChange: (pageId: string) => void;
}

const Banking: React.FC<BankingPageProps> = ({ bankAccounts, bankTransactions, onPageChange }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header 
        title="Banking" 
        subtitle="Manage your accounts, transactions, and cash flow" 
        onPageChange={onPageChange} // Pass onPageChange to Header
      />

      <div className="flex-1 overflow-y-auto p-6 bg-grey-50">
        <div className="max-w-7xl mx-auto space-y-8">
          <BankAccountList accounts={bankAccounts} />
          
          <RecentTransactions transactions={bankTransactions} />

          <CashFlowAnalysis transactions={bankTransactions} />

          <AccountLinking />

          <TransferPayments accounts={bankAccounts} />
        </div>
      </div>
    </div>
  );
};

export default Banking;
