
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface AccountCardProps {
  accountName: string;
  accountNumber: string;
  balance: string;
  type: 'checking' | 'savings' | 'credit';
}

const AccountCard: React.FC<AccountCardProps> = ({
  accountName,
  accountNumber,
  balance,
  type
}) => {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    navigate(`/account/${accountNumber}`);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-wf-navy">{accountName}</h3>
            <p className="text-xs text-gray-500 mt-1">
              ••••••{accountNumber.slice(-4)}
            </p>
          </div>
          <div className="ml-4 text-right">
            <span className="font-bold text-lg">{balance}</span>
            <p className="text-xs text-gray-500 mt-1">Available balance</p>
          </div>
        </div>
      </div>
      
      <div className="p-3 flex justify-between items-center">
        <button 
          onClick={handleViewDetails}
          className="text-sm text-wf-navy hover:text-wf-red flex items-center"
        >
          Account details
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
