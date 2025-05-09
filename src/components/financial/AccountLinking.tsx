import React from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

const AccountLinking: React.FC = () => (
  <section className="banking-section">
    <h2 className="banking-title">Link / Unlink Accounts</h2>
    <div className="flex space-x-4">
      <button className="px-4 py-2 banking-btn">
        <PlusCircle size={18} className="inline-block mr-1" /> Link Account
      </button>
      <button className="px-4 py-2 banking-btn">
        <MinusCircle size={18} className="inline-block mr-1" /> Unlink Account
      </button>
    </div>
  </section>
);

export default AccountLinking;
