import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Landmark, 
  PiggyBank, 
  BarChart3, 
  Receipt, 
  Target, 
  Calculator, 
  Settings,
  User,
  Menu,
  X,
} from 'lucide-react';

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
        active
          ? 'bg-teal-100 text-teal-700 font-medium'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

interface SidebarProps {
  activePage: string;S
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
    { id: 'savings', label: 'Savings', icon: <PiggyBank className="h-5 w-5" /> },
    { id: 'investments', label: 'Investments', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'banking', label: 'Banking', icon: <Landmark className="h-5 w-5" /> },
    { id: 'taxes', label: 'Taxes', icon: <Receipt className="h-5 w-5" /> },
    { id: 'goals', label: 'Goals', icon: <Target className="h-5 w-5" /> },
    { id: 'calculators', label: 'Calculators', icon: <Calculator className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-white p-2 rounded-full shadow"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </button>

      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity md:hidden ${open ? 'block' : 'hidden'}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed z-40 top-0 left-0 h-full bg-white border-r border-gray-200 flex flex-col
          w-64 transition-transform duration-200
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:static md:translate-x-0 md:w-64
        `}
      >
        {/* Close button on mobile */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden">
          <div className="flex items-center space-x-3">
            <div className="bg-teal-100 p-2 rounded-md">
              <Landmark className="h-6 w-6 text-teal-700" />
            </div>
            <h1 className="text-xl font-bold">FinanceAI</h1>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close sidebar">
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Logo for desktop */}
        <div className="p-4 border-b border-gray-200 hidden md:block">
          <div className="flex items-center space-x-3">
            <div className="bg-teal-100 p-2 rounded-md">
              <Landmark className="h-6 w-6 text-teal-700" />
            </div>
            <h1 className="text-xl font-bold">FinanceAI</h1>
          </div>
        </div>
        
        <div className="flex-1 py-4 px-1 md:px-3 space-y-1 overflow-y-auto">
          {links.map((link) => (
            <SidebarLink
              key={link.id}
              icon={link.icon}
              label={<span>{link.label}</span>} // <-- Always show label
              active={activePage === link.id}
              onClick={() => {
                onPageChange(link.id);
                setOpen(false); // Close sidebar on mobile after click
              }}
            />
          ))}
        </div>
        
        <div className="p-1 md:p-3 border-t border-gray-200">
          <SidebarLink
            icon={<Settings className="h-5 w-5" />}
            label={<span className="hidden md:inline">Settings</span>}
            active={activePage === 'settings'}
            onClick={() => {
              onPageChange('settings');
              setOpen(false);
            }}
          />
          <div className="mt-4 flex items-center p-3 space-x-3 hidden md:flex">
            <div className="bg-gray-200 rounded-full p-1">
              <User className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">John Smith</p>
              <p className="text-xs text-gray-500">Free Plan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;