import React, { useState } from 'react';
import { SecuritySetting } from '../../data/mockData';

interface SecurityPrivacyControlsProps {
  items: SecuritySetting[];
}

const SecurityPrivacyControls: React.FC<SecurityPrivacyControlsProps> = ({ items }) => {
  const [settings, setSettings] = useState(items);

  const toggle = (id: string) =>
    setSettings(settings.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));

  return (
    <section className="settings-section">
      <h2 className="settings-title">Security & Privacy</h2>
      <ul className="space-y-3">
        {settings.map(s => (
          <li key={s.id} className="settings-item flex justify-between items-center">
            <span>{s.name}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={s.enabled}
                onChange={() => toggle(s.id)}
              />
              <span className="slider round" />
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SecurityPrivacyControls;
