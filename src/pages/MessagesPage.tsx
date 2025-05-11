import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: string;
  from: string;
  snippet: string;
  date: string;
  unread: boolean;
}

interface MessagesPageProps {
    onPageChange: (pageId: string) => void;
}

const mockMessages: Message[] = [
  { id: 'm1', from: 'Support', snippet: 'Your account statement is ready.', date: '2025-05-09T11:20:00Z', unread: true },
  { id: 'm2', from: 'Advisor', snippet: 'Let’s schedule a call this week.', date: '2025-05-07T15:45:00Z', unread: false },
  // …more…
];

const MessagesPage: React.FC<MessagesPageProps> = ({ onPageChange }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header title="Messages"
        subtitle="Stay updated with your account notifications"
        onPageChange={onPageChange} // Pass onPageChange to Header
      />
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-4">
          {mockMessages.map(m => (
            <Card key={m.id} className={`p-4 flex justify-between items-start ${m.unread ? 'bg-white' : 'bg-gray-100 opacity-75'}`}>
              <div>
                <h3 className="font-medium text-gray-900">{m.from}</h3>
                <p className="text-sm text-gray-700 mt-1">{m.snippet}</p>
                <p className="text-xs text-gray-500 mt-1">{new Date(m.date).toLocaleString()}</p>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center">
                <Send className="h-4 w-4 mr-1" /> Reply
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
