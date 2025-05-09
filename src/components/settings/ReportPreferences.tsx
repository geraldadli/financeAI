import React, { useState } from 'react';
import { ReportPreference } from '../../data/mockData';

interface ReportPreferencesProps {
  items: ReportPreference[];
}

const ReportPreferences: React.FC<ReportPreferencesProps> = ({ items }) => {
  const [prefs, setPrefs] = useState(items);

  const update = (id: string, value: string) =>
    setPrefs(prefs.map(p => p.id === id ? { ...p, value } : p));

  return (
    <section className="settings-section">
      <h2 className="settings-title">Report Preferences</h2>
      <ul className="space-y-4">
        {prefs.map(p => (
          <li key={p.id}>
            <label className="block text-sm mb-1">{p.name}</label>
            <input
              type="text"
              value={p.value}
              onChange={e => update(p.id, e.target.value)}
              className="settings-input"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReportPreferences;
