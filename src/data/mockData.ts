import { FinancialProfile, SavingRecommendation, InvestmentRecommendation, TaxRecommendation } from '../types/financial';
import { Investment } from '../types/financial';
// Mock financial profile
export const mockFinancialProfile: FinancialProfile = {
  monthlyIncome: 5800,
  monthlySavings: 1200,
  monthlyExpenses: 4600,
  totalSavings: 34500,
  totalDebt: 18600,
  investments: [
    {
      id: '1',
      name: 'S&P 500 Index Fund',
      type: 'stock',
      value: 45000,
      returns: 8.5,
      risk: 'medium'
    },
    {
      id: '2',
      name: 'Treasury Bonds',
      type: 'bond',
      value: 25000,
      returns: 4.2,
      risk: 'low'
    },
    {
      id: '3',
      name: 'Tech Growth Fund',
      type: 'stock',
      value: 15000,
      returns: 12.8,
      risk: 'high'
    },
    {
      id: '4',
      name: 'Bitcoin',
      type: 'crypto',
      value: 8000,
      returns: 24.5,
      risk: 'high'
    },
    {
      id: '5',
      name: 'High-Yield Savings',
      type: 'cash',
      value: 18000,
      returns: 3.5,
      risk: 'low'
    }
  ],
  goals: [
    {
      id: '1',
      name: 'Retirement Fund',
      targetAmount: 1000000,
      currentAmount: 150000,
      targetDate: new Date('2050-01-01'),
      category: 'retirement'
    },
    {
      id: '2',
      name: 'House Down Payment',
      targetAmount: 80000,
      currentAmount: 45000,
      targetDate: new Date('2025-06-01'),
      category: 'house'
    },
    {
      id: '3',
      name: 'Emergency Fund',
      targetAmount: 30000,
      currentAmount: 24000,
      targetDate: new Date('2023-12-31'),
      category: 'emergency'
    },
    {
      id: '4',
      name: 'Dream Vacation',
      targetAmount: 12000,
      currentAmount: 3800,
      targetDate: new Date('2024-07-15'),
      category: 'vacation'
    }
  ]
};

// Mock recommendations
export const mockSavingRecommendations: SavingRecommendation[] = [
  {
    id: '1',
    title: 'Reduce Subscription Services',
    description: 'You\'re spending $95/month on streaming and subscription services. Consider consolidating to save up to $45 monthly.',
    potentialSaving: 540,
    difficulty: 'easy',
    category: 'subscriptions'
  },
  {
    id: '2',
    title: 'Refinance Your Auto Loan',
    description: 'Current interest rate is 5.8%. Refinancing could reduce this to 3.9%, saving you money over the loan term.',
    potentialSaving: 1200,
    difficulty: 'medium',
    category: 'debt'
  },
  {
    id: '3',
    title: 'Optimize Utility Usage',
    description: 'Your electricity bills are 20% higher than average. Simple changes could reduce this significantly.',
    potentialSaving: 420,
    difficulty: 'easy',
    category: 'bills'
  }
];

export const mockInvestmentRecommendations: InvestmentRecommendation[] = [
  {
    id: '1',
    title: 'Increase Index Fund Allocation',
    description: 'Consider moving some of your high-risk investments to index funds for more stable long-term growth.',
    potentialReturn: 7.2,
    risk: 'low',
    timeHorizon: 'long'
  },
  {
    id: '2',
    title: 'Add I-Bonds to Your Portfolio',
    description: 'I-Bonds are currently yielding over 6% and are government-backed, making them ideal for your safety allocation.',
    potentialReturn: 6.5,
    risk: 'low',
    timeHorizon: 'medium'
  },
  {
    id: '3',
    title: 'Diversify with International Stocks',
    description: 'Your portfolio is heavily US-focused. Adding international exposure could improve risk-adjusted returns.',
    potentialReturn: 8.8,
    risk: 'medium',
    timeHorizon: 'long'
  }
];

export const mockTaxRecommendations: TaxRecommendation[] = [
  {
    id: '1',
    title: 'Maximize 401(k) Contributions',
    description: 'You\'re not maxing out your 401(k). Increasing contributions could save up to $2,200 in taxes this year.',
    potentialSaving: 2200,
    relevance: 'high',
    deadline: new Date('2023-12-31')
  },
  {
    id: '2',
    title: 'Tax-Loss Harvesting Opportunity',
    description: 'Consider selling underperforming investments to offset gains and reduce your tax liability.',
    potentialSaving: 1500,
    relevance: 'medium',
    deadline: new Date('2023-12-31')
  },
  {
    id: '3',
    title: 'Open a Health Savings Account (HSA)',
    description: 'With your high-deductible health plan, an HSA could provide triple tax advantages.',
    potentialSaving: 980,
    relevance: 'high',
    deadline: null
  }
];

// match TransactionHistory’s shape
export interface Transaction {
  id: string;
  date: string;       // ISO string or parsable date
  type: 'buy' | 'sell';
  asset: string;
  quantity: number;
  price: number;
}

// example transactions
export const transactions: Transaction[] = [
  {
    id: 'tx1',
    date: '2025-05-01T14:30:00Z',
    type: 'buy',
    asset: 'AAPL',
    quantity: 10,
    price: 172.50,
  },
  {
    id: 'tx2',
    date: '2025-05-03T09:15:00Z',
    type: 'sell',
    asset: 'GOOG',
    quantity: 2,
    price: 2375.00,
  },
  // …more
];

// match InvestmentWatchlist’s shape
export const watchlist: Investment[] = [
  { id: 'w1', name: 'TSLA', type: 'stock', value: 0, returns: 0, risk: 'high' },
  { id: 'w2', name: 'BTC', type: 'crypto', value: 0, returns: 0, risk: 'high' },
  // …more
];

// 1) Bank accounts
export interface BankAccount {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit_card' | 'loan';
  balance: number;
}
export const bankAccounts: BankAccount[] = [
  { id: 'b1', name: 'Checking ••••1234', type: 'checking', balance: 2540.75 },
  { id: 'b2', name: 'Savings ••••5678', type: 'savings', balance: 10230.00 },
  { id: 'b3', name: 'Credit Card ••••9012', type: 'credit_card', balance: -350.40 },
];

// 2) Bank transactions
export interface BankTransaction {
  id: string;
  date: string;            // ISO or parsable string
  amount: number;
  type: 'debit' | 'credit';
  description: string;
  category: 'food' | 'utilities' | 'entertainment' | 'salary' | 'transfer' | 'other';
}
export const bankTransactions: BankTransaction[] = [
  {
    id: 't1',
    date: '2025-05-05T10:15:00Z',
    amount: 2500,
    type: 'credit',
    description: 'ACME Corp Payroll',
    category: 'salary',
  },
  {
    id: 't2',
    date: '2025-05-06T18:30:00Z',
    amount: 65.12,
    type: 'debit',
    description: 'Grocery Store',
    category: 'food',
  },
  {
    id: 't3',
    date: '2025-05-07T08:00:00Z',
    amount: 120.50,
    type: 'debit',
    description: 'Electric Bill',
    category: 'utilities',
  },
  // … more …
];

// 1) Tax documents & deadlines
export interface TaxDocument {
  id: string;
  name: string;
  type: 'W-2' | '1099' | 'Receipt' | 'Other';
  dateUploaded: string;    // ISO string
}
export const taxDocuments: TaxDocument[] = [
  { id: 'd1', name: 'W-2 2024', type: 'W-2', dateUploaded: '2025-01-15T10:00:00Z' },
  { id: 'd2', name: '1099-DIV 2024', type: '1099', dateUploaded: '2025-02-02T14:30:00Z' },
];

export interface TaxDeadline {
  id: string;
  name: string;
  deadline: string;       // ISO date
}
export const taxDeadlines: TaxDeadline[] = [
  { id: 'dl1', name: 'File Federal Return', deadline: '2025-04-15' },
  { id: 'dl2', name: 'State Return', deadline: '2025-04-15' },
];

// 2) Tax reports & filing history
export interface TaxReport {
  id: string;
  year: number;
  totalIncome: number;
  totalTax: number;
  refundOrOwed: number;
}
export const taxReports: TaxReport[] = [
  { id: 'r2023', year: 2023, totalIncome: 120000, totalTax: 24000, refundOrOwed: 1500 },
  { id: 'r2024', year: 2024, totalIncome: 130000, totalTax: 26000, refundOrOwed: -500 },
];

export interface FilingStatus {
  id: string;
  year: number;
  status: 'Filed' | 'Pending' | 'Not Filed';
  filedDate: string | null;  // ISO date or null
}
export const filingStatuses: FilingStatus[] = [
  { id: 'fs2023', year: 2023, status: 'Filed', filedDate: '2025-03-20' },
  { id: 'fs2024', year: 2024, status: 'Pending', filedDate: null },
];

// 3) Deductible expenses
export interface DeductibleExpense {
  id: string;
  description: string;
  amount: number;
  category: 'Charity' | 'Business' | 'Health' | 'Education' | 'Other';
  date: string;            // ISO date
}
export const deductibleExpenses: DeductibleExpense[] = [
  { id: 'e1', description: 'Charity – Red Cross', amount: 500, category: 'Charity', date: '2025-01-10' },
  { id: 'e2', description: 'Home Office Supplies', amount: 200, category: 'Business', date: '2025-02-05' },
];

// 1) Goal reminders & notifications
export interface GoalReminder {
  id: string;
  goalId: string;
  date: string;      // ISO date
  message: string;
}
export const goalReminders: GoalReminder[] = [
  {
    id: 'gr1',
    goalId: 'g1',
    date: '2025-06-01',
    message: 'You’ve hit 25% of your Retirement goal!',
  },
  {
    id: 'gr2',
    goalId: 'g2',
    date: '2025-07-01',
    message: 'Halfway to your Vacation fund—keep it up!',
  },
  // …more…
];

// 2) Saving recommendations (to be shown per goal)
export const savingRecommendations: SavingRecommendation[] = [
  {
    id: 'sr1',
    title: 'Reduce streaming subscriptions',
    description: 'Cancel or downgrade unused streaming services.',
    potentialSaving: 20,
    difficulty: 'easy',
    category: 'subscriptions',
  },
  {
    id: 'sr2',
    title: 'Pack lunch twice a week',
    description: 'Save on eating out by meal-prepping.',
    potentialSaving: 50,
    difficulty: 'easy',
    category: 'spending',
  },
  // …more…
];


// 1) Notification preferences
export interface NotificationPreference {
  id: string;
  name: string;
  enabled: boolean;
}
export const notificationPreferences: NotificationPreference[] = [
  { id: 'n1', name: 'Email Alerts', enabled: true },
  { id: 'n2', name: 'SMS Notifications', enabled: false },
  { id: 'n3', name: 'Push Notifications', enabled: true },
];

// 2) Security & privacy controls
export interface SecuritySetting {
  id: string;
  name: string;
  enabled: boolean;
}
export const securitySettings: SecuritySetting[] = [
  { id: 's1', name: 'Two‐factor Authentication', enabled: true },
  { id: 's2', name: 'Save Login & Device Info', enabled: false },
  { id: 's3', name: 'Share Usage Data', enabled: false },
];

// 3) Connected accounts (reuse if desired)
// import { bankAccounts } from './mockData';
// export { bankAccounts };

// 4) Default currency & time zone
export const defaultCurrency = 'USD';
export const defaultTimeZone = 'Asia/Jakarta';

// 5) Report preferences
export interface ReportPreference {
  id: string;
  name: string;
  value: string;
}
export const reportPreferences: ReportPreference[] = [
  { id: 'r1', name: 'Statement Frequency', value: 'Monthly' },
  { id: 'r2', name: 'Statement Format', value: 'PDF' },
  { id: 'r3', name: 'Include Inactive Accounts', value: 'No' },
];

export type NotificationType = 'system' | 'message' | 'alert';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  content: string;
  date: string;       // ISO string
  read: boolean;
}

// Example notifications
export const notifications: NotificationItem[] = [
  {
    id: 'n1',
    type: 'system',
    content: 'Your password will expire in 5 days.',
    date: '2025-05-09T14:30:00Z',
    read: false,
  },
  {
    id: 'n2',
    type: 'message',
    content: 'You have a new message from Alice.',
    date: '2025-05-10T08:15:00Z',
    read: false,
  },
  {
    id: 'n3',
    type: 'alert',
    content: 'Unusual login attempt detected.',
    date: '2025-05-08T22:45:00Z',
    read: true,
  },
];