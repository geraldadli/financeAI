import React from 'react';
import { NotificationItem } from '../../data/mockData';

interface NotificationListProps {
  notifications: NotificationItem[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => (
  <ul className="space-y-2">
    {notifications.map(n => (
      <li
        key={n.id}
        className={`p-4 bg-white border rounded-lg flex justify-between items-start hover:shadow-sm transition ${
          n.read ? 'opacity-70' : 'bg-teal-50'
        }`}
      >
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-medium capitalize">{n.type}</span>
            <span className="text-xs text-gray-500">
              {new Date(n.date).toLocaleString()}
            </span>
          </div>
          <p className="mt-1 text-gray-700">{n.content}</p>
        </div>
        {!n.read && (
          <span
            className="ml-4 inline-block h-2 w-2 bg-red-500 rounded-full"
            aria-label="Unread notification"
          />
        )}
      </li>
    ))}
    {notifications.length === 0 && (
      <li className="text-center text-gray-500 py-6">No notifications</li>
    )}
  </ul>
);

export default NotificationList;
