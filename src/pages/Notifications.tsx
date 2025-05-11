import React, { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import FilterControls from '../components/notifications/FilterControls';
import NotificationList from '../components/notifications/NotificationList';
import PaginationControls from '../components/notifications/PaginationControls';
import { notifications as allNotifications } from '../data/mockData';
import '../styles/Notifications.css';

const PAGE_SIZE = 10;

const NotificationsPage: React.FC<{ onPageChange: (pageId: string) => void }> = ({ onPageChange }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [page, setPage] = useState(1);

  // Filter and paginate notifications
  const filtered = useMemo(() => {
    return allNotifications
      .filter(n => (filterType === 'all' || n.type === filterType))
      .filter(n => (!showUnreadOnly || !n.read))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [filterType, showUnreadOnly]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const markAllRead = () => {
    allNotifications.forEach(n => (n.read = true));
    // Trigger re-render:
    setFilterType(ft => ft);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header
        title="Notifications"
        onPageChange={onPageChange} // Pass onPageChange to Header
      />

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex justify-between items-center">
            <FilterControls
              type={filterType}
              onTypeChange={setFilterType}
              unreadOnly={showUnreadOnly}
              onUnreadToggle={setShowUnreadOnly}
            />
            <button
              onClick={markAllRead}
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Mark all as read
            </button>
          </div>

          <NotificationList notifications={pageItems} />

          <PaginationControls
            page={page}
            pageCount={pageCount}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;