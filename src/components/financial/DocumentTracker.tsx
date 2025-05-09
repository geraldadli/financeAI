import React from 'react';
import { TaxDocument, TaxDeadline } from '../../data/mockData';
import { Calendar, FileText } from 'lucide-react';

interface DocumentTrackerProps {
  documents?: TaxDocument[]; // Make optional
  deadlines?: TaxDeadline[]; // Make optional
}

const DocumentTracker: React.FC<DocumentTrackerProps> = ({ documents = [], deadlines = [] }) => (
  <section className="tax-section">
    <h2 className="tax-title">Documents & Deadlines</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <div className="font-medium mb-2 flex items-center">
          <FileText className="mr-2" /> Uploaded Documents
        </div>
        <ul className="space-y-2">
          {documents.map(doc => (
            <li key={doc.id} className="tax-card flex justify-between">
              <span>{doc.name}</span>
              <span className="text-sm text-gray-500">{new Date(doc.dateUploaded).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-medium mb-2 flex items-center">
          <Calendar className="mr-2" /> Upcoming Deadlines
        </div>
        <ul className="space-y-2">
          {deadlines.map(dl => (
            <li key={dl.id} className="tax-card flex justify-between">
              <span>{dl.name}</span>
              <span className="text-sm text-red-600">{new Date(dl.deadline).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default DocumentTracker;