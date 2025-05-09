import React from 'react';
import { GoalReminder } from '../../data/mockData';
import { Bell } from 'lucide-react';

interface MilestoneNotificationsProps {
  reminders: GoalReminder[];
}

const MilestoneNotifications: React.FC<MilestoneNotificationsProps> = ({ reminders }) => (
  <section className="goals-section">
    <h2 className="goals-title">Milestone Reminders</h2>
    <ul className="space-y-2">
      {reminders.map(r => (
        <li key={r.id} className="goals-card flex items-center space-x-2">
          <Bell className="text-blue-600" />
          <div>
            <div>{r.message}</div>
            <div className="text-sm text-gray-500">{new Date(r.date).toLocaleDateString()}</div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default MilestoneNotifications;
