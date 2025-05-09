import React, { useState } from 'react';
import { NotificationPreference } from '../../data/mockData';

interface NotificationPreferencesProps {
  items: NotificationPreference[];
}

const NotificationPreferences: React.FC<NotificationPreferencesProps> = ({ items }) => {
  const [prefs, setPrefs] = useState(items);

  const toggle = (id: string) =>
    setPrefs(prefs.map(p => p.id === id ? { ...p, enabled: !p.enabled } : p));

  return (
    <section className="settings-section">
      <h2 className="settings-title">Notification Preferences</h2>
      <ul className="space-y-3">
        {prefs.map(p => (
          <li key={p.id} className="settings-item flex justify-between items-center">
            <span>{p.name}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={p.enabled}
                onChange={() => toggle(p.id)}
              />
              <span className="slider round" />
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NotificationPreferences;
