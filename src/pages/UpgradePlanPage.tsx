import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Star } from 'lucide-react';

interface UpgradePlanPageProps {
  onPageChange: (pageId: string) => void;
}

const UpgradePlanPage: React.FC<UpgradePlanPageProps> = ({ onPageChange }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header title="UpgradePlan"
        subtitle="Unlock premium features and benefits"
        onPageChange={onPageChange} // Pass onPageChange to Header
      />
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="max-w-2xl mx-auto space-y-6">
          
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <Star className="h-6 w-6 text-yellow-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Premium Plan</h3>
                <p className="text-gray-600">Unlock advanced analytics, priority support, and more.</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-3xl font-bold text-gray-900">$49/mo</p>
              <Button size="lg" variant="primary">Upgrade Now</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">What’s included</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Real-time market insights</li>
                <li>Personalized tax optimization</li>
                <li>Unlimited financial reports</li>
                <li>Dedicated account manager</li>
              </ul>
            </div>
          </Card>

          <div className="text-center text-sm text-gray-500">
            Already on Premium? <a href="/settings" className="text-teal-600 underline">Manage Subscription</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlanPage;
