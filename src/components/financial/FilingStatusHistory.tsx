import React from 'react';
import { FilingStatus } from '../../data/mockData';
import { CheckCircle, Clock } from 'lucide-react';

interface FilingStatusHistoryProps {
  statuses?: FilingStatus[];
}

const FilingStatusHistory: React.FC<FilingStatusHistoryProps> = ({ statuses = [] }) => (
  <section className="tax-section">
    <h2 className="tax-title">Filing Status</h2>
    <ul className="space-y-2">
      {statuses.map(s => (
        <li key={s.id} className="tax-card flex justify-between items-center">
          <span>{s.year}</span>
          <div className="flex items-center space-x-2">
            {s.status === 'Filed'
              ? <CheckCircle className="text-green-600" />
              : <Clock className="text-yellow-600" />
            }
            <span>{s.status}</span>
            {s.filedDate && (
              <span className="text-sm text-gray-500">
                ({new Date(s.filedDate).toLocaleDateString()})
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default FilingStatusHistory;
