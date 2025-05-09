import React, { useState } from 'react';

interface CurrencyTimeZoneProps {
  currency: string;
  timeZone: string;
}

const CurrencyTimeZone: React.FC<CurrencyTimeZoneProps> = ({ currency, timeZone }) => {
  const [curr, setCurr] = useState(currency);
  const [tz, setTz] = useState(timeZone);

  return (
    <section className="settings-section">
      <h2 className="settings-title">Currency & Time Zone</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Default Currency</label>
          <select
            value={curr}
            onChange={e => setCurr(e.target.value)}
            className="settings-select"
          >
            {['USD','EUR','GBP','IDR','JPY'].map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Time Zone</label>
          <select
            value={tz}
            onChange={e => setTz(e.target.value)}
            className="settings-select"
          >
            {Intl.supportedValuesOf('timeZone').map(zone => (
              <option key={zone} value={zone}>{zone}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default CurrencyTimeZone;
