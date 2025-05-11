import React from 'react';
import Header from '../components/layout/Header';

import NotificationPreferences from '../components/settings/NotificationPreferences';
import SecurityPrivacyControls from '../components/settings/SecurityPrivacyControls';
import ConnectedAccountsSettings from '../components/settings/ConnectedAccountsSettings';
import CurrencyTimeZone from '../components/settings/CurrencyTimeZone';
import ReportPreferences from '../components/settings/ReportPreferences';

import {
  notificationPreferences,
  securitySettings,
  bankAccounts,
  defaultCurrency,
  defaultTimeZone,
  reportPreferences
} from '../data/mockData';

import '../styles/Settings.css';

interface SettingsPageProps {
  onPageChange: (pageId: string) => void;
}

const Settings: React.FC<SettingsPageProps> = ({ onPageChange }) => (
  <div className="flex flex-col h-screen overflow-hidden">
    <Header
      title="Settings"
      subtitle="Customize your preferences and account controls"
      onPageChange={onPageChange} // Pass onPageChange to Header
    />

    <div className="flex-1 overflow-y-auto p-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <NotificationPreferences items={notificationPreferences} />
        <SecurityPrivacyControls items={securitySettings} />
        <ConnectedAccountsSettings accounts={bankAccounts} />
        <CurrencyTimeZone
          currency={defaultCurrency}
          timeZone={defaultTimeZone}
        />
        <ReportPreferences items={reportPreferences} />
      </div>
    </div>
  </div>
);

export default Settings;
