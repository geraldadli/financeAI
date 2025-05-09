import React from 'react';
import Header from '../components/layout/Header';
import GoalList from '../components/financial/GoalList';
import MilestoneNotifications from '../components/financial/MilestoneNotifications';
import CompletionProjection from '../components/financial/CompletionProjection';
import GoalAdjustment from '../components/financial/GoalAdjustment';
import GoalRecommendations from '../components/financial/GoalRecommendations';

import { FinancialProfile } from '../types/financial';
import { goalReminders, savingRecommendations } from '../data/mockData';
import '../styles/Goals.css';

interface GoalsPageProps {
  profile: FinancialProfile;
}

const Goals: React.FC<GoalsPageProps> = ({ profile }) => (
  <div className="flex flex-col h-screen overflow-hidden">
    <Header
      title="Your Goals"
      subtitle="Track progress, set reminders, and stay on target"
    />

    <div className="flex-1 overflow-y-auto p-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <GoalList goals={profile.goals} />
        <MilestoneNotifications reminders={goalReminders} />
        <CompletionProjection
          goals={profile.goals}
          monthlySavings={profile.monthlySavings}
        />
        <GoalAdjustment goals={profile.goals} />
        <GoalRecommendations
          goals={profile.goals}
          recommendations={savingRecommendations}
        />
      </div>
    </div>
  </div>
);

export default Goals;
