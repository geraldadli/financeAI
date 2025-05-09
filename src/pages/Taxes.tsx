import React from 'react';
import Header from '../components/layout/Header';
import TaxPlanningTools from '../components/financial/TaxPlanningTools';
import DocumentTracker from '../components/financial/DocumentTracker';
import TaxReportsSummary from '../components/financial/TaxReportsSummary';
import DeductibleExpenses from '../components/financial/DeductibleExpenses';
import FilingStatusHistory from '../components/financial/FilingStatusHistory';

import {
  TaxDocument,
  TaxDeadline,
  TaxReport,
  DeductibleExpense,
  FilingStatus,
} from '../data/mockData';

import '../styles/Taxes.css';

interface TaxesPageProps {
  documents: TaxDocument[];
  deadlines: TaxDeadline[];
  reports: TaxReport[];
  expenses: DeductibleExpense[];
  statuses: FilingStatus[];
}

const Taxes: React.FC<TaxesPageProps> = ({
  documents,
  deadlines,
  reports,
  expenses,
  statuses,
}) => (
  <div className="flex flex-col h-screen overflow-hidden">
    <Header
      title="Taxes"
      subtitle="Plan, track, and file your tax returns"
    />

    <div className="flex-1 overflow-y-auto p-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <TaxPlanningTools />
        <DocumentTracker documents={documents} deadlines={deadlines} />
        <TaxReportsSummary reports={reports} />
        <DeductibleExpenses expenses={expenses} />
        <FilingStatusHistory statuses={statuses} />
      </div>
    </div>
  </div>
);

export default Taxes;
