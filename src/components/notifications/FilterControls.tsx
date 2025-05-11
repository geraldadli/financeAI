import React from 'react';

interface FilterControlsProps {
  type: string;
  onTypeChange: (type: string) => void;
  unreadOnly: boolean;
  onUnreadToggle: (u: boolean) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  type, onTypeChange, unreadOnly, onUnreadToggle
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
    <label className="flex items-center space-x-2">
      <span className="text-sm">Type:</span>
      <select
        aria-label="Filter by type"
        value={type}
        onChange={e => onTypeChange(e.target.value)}
        className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        <option value="all">All</option>
        <option value="system">System</option>
        <option value="message">Message</option>
        <option value="alert">Alert</option>
      </select>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={unreadOnly}
        onChange={e => onUnreadToggle(e.target.checked)}
        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        aria-label="Show unread only"
      />
      <span className="text-sm">Unread only</span>
    </label>
  </div>
);

export default FilterControls;
