import React from 'react';
import { Search, Bell, MessageSquare, Menu } from 'lucide-react';
import Button from '../ui/Button';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onOpenSidebar?: () => void;
  onPageChange: (pageId: string) => void;  // new
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  onOpenSidebar,
  onPageChange,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <br></br><br></br>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-2">
        <div className="flex items-center space-x-3">
          {/* Mobile menu button */}
          {onOpenSidebar && (
            <button
              className="md:hidden p-2 text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors"
              onClick={onOpenSidebar}
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto justify-end">
          {/* Search */}
          <div className="relative hidden md:block w-48">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-full"
            />
          </div>

          {/* Notifications */}
          <button
            className="relative p-2 text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => onPageChange('notifications')}
            aria-label="View notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Messages */}
          <button
            className="relative p-2 text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => onPageChange('messages')}
            aria-label="View messages"
          >
            <MessageSquare className="h-5 w-5" />
          </button>

          {/* Upgrade Plan */}
          <Button
            size="sm"
            variant="primary"
            onClick={() => onPageChange('upgradeplan')}
          >
            Upgrade Plan
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
