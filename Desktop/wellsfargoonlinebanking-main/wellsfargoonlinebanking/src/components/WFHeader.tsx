
import React from 'react';
import WFLogo from './WFLogo';
import { Search, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WFHeader = ({ isLoggedIn = false }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <WFLogo />
            
            {isLoggedIn && (
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-wf-navy hover:text-wf-red font-medium">Accounts</a>
                <a href="#" className="text-wf-navy hover:text-wf-red font-medium">Transfers</a>
                <a href="#" className="text-wf-navy hover:text-wf-red font-medium">Payments</a>
                <a href="#" className="text-wf-navy hover:text-wf-red font-medium">Cards</a>
                <a href="#" className="text-wf-navy hover:text-wf-red font-medium">Investments</a>
              </nav>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button className="text-wf-navy hover:text-wf-red">
                  <Search className="h-5 w-5" />
                </button>
                <div className="flex items-center space-x-2">
                  <img 
                    src="/lovable-uploads/15f05089-8926-4b37-a7eb-11dcf86503f1.png" 
                    alt="Profile" 
                    className="h-8 w-8 rounded-full object-cover border border-gray-200"
                  />
                  <span className="hidden md:inline text-sm font-medium">Jonathan Roumie</span>
                </div>
                <button 
                  onClick={handleSignOut}
                  className="text-sm text-wf-navy hover:text-wf-red font-medium"
                >
                  Sign Off
                </button>
              </>
            ) : (
              <>
                <button className="text-sm text-wf-navy hover:text-wf-red font-medium">
                  <User className="h-5 w-5 inline-block mr-1" />
                  <span className="hidden md:inline">Customer Service</span>
                </button>
                <button className="text-sm text-wf-navy hover:text-wf-red font-medium">Locations</button>
                <button className="text-sm text-wf-navy hover:text-wf-red font-medium">Spanish</button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default WFHeader;
