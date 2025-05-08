export interface FinancialProfile {
  monthlyIncome: number;
  monthlySavings: number;
  monthlyExpenses: number;
  totalSavings: number;
  totalDebt: number;
  investments: Investment[];
  goals: FinancialGoal[];
}

export interface Investment {
  id: string;
  name: string;
  type: 'stock' | 'bond' | 'crypto' | 'real_estate' | 'cash' | 'other';
  value: number;
  returns: number; // Annual percentage
  risk: 'low' | 'medium' | 'high';
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date;
  category: 'retirement' | 'house' | 'education' | 'vacation' | 'emergency' | 'other';
}

export interface SavingRecommendation {
  id: string;
  title: string;
  description: string;
  potentialSaving: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'spending' | 'bills' | 'subscriptions' | 'debt' | 'other';
}

export interface InvestmentRecommendation {
  id: string;
  title: string;
  description: string;
  potentialReturn: number;
  risk: 'low' | 'medium' | 'high';
  timeHorizon: 'short' | 'medium' | 'long';
}

export interface TaxRecommendation {
  id: string;
  title: string;
  description: string;
  potentialSaving: number;
  relevance: 'high' | 'medium' | 'low';
  deadline: Date | null;
}

export type RecommendationType = SavingRecommendation | InvestmentRecommendation | TaxRecommendation;