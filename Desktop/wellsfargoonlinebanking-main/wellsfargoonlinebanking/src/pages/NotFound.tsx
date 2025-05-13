
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import WFHeader from '../components/WFHeader';
import WFFooter from '../components/WFFooter';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      <WFHeader />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="bg-wf-red text-white inline-block p-3 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-wf-navy mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved to another URL.
          </p>
          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/')} 
              className="bg-wf-red text-white font-semibold py-2 px-6 w-full"
            >
              Return to Home
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = 'https://www.wellsfargo.com'}
              className="text-wf-navy border-wf-navy py-2 px-6 w-full"
            >
              Go to wellsfargo.com
            </Button>
          </div>
        </div>
      </main>
      
      <WFFooter />
    </div>
  );
};

export default NotFound;
