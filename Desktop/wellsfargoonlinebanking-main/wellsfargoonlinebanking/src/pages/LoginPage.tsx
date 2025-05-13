
import React, { useState } from 'react';
import WFHeader from '../components/WFHeader';
import WFFooter from '../components/WFFooter';
import LoginForm from '../components/LoginForm';
import PrivacyNotice from '../components/PrivacyNotice';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LoginPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PrivacyNotice />
      <WFHeader isLoggedIn={isLoggedIn} />
      
      <main className="flex-grow bg-[#F7F7F7]">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row max-w-6xl gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Tabs defaultValue="signOn" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="signOn" className="text-base">Sign On</TabsTrigger>
                  <TabsTrigger value="enrollment" className="text-base">Enrollment</TabsTrigger>
                </TabsList>
                <TabsContent value="signOn">
                  <LoginForm onSuccessfulLogin={handleSuccessfulLogin} />
                </TabsContent>
                <TabsContent value="enrollment">
                  <div className="text-center py-6">
                    <p className="text-wf-dark-gray">
                      New user enrollment is temporarily unavailable due to system maintenance.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-wf-navy font-semibold text-lg mb-4">Security Center</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="bg-wf-red rounded-full h-2 w-2 mt-1.5 mr-2"></div>
                  <span>Never share your password, account or personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-wf-red rounded-full h-2 w-2 mt-1.5 mr-2"></div>
                  <span>We will never ask for your account information via email</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-wf-red rounded-full h-2 w-2 mt-1.5 mr-2"></div>
                  <span>Report suspicious activity immediately</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-wf-red rounded-full h-2 w-2 mt-1.5 mr-2"></div>
                  <span>Always access your account through wellsfargo.com</span>
                </li>
              </ul>
              <a href="#" className="text-wf-navy hover:underline text-sm block mt-4">
                Learn more about online security
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-wf-navy font-semibold text-lg mb-4">Important Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-wf-dark-gray">Account Security</h3>
                  <p className="text-sm mt-2 text-wf-dark-gray">
                    Wells Fargo uses advanced encryption and multi-factor authentication to protect your accounts. 
                    For more information on our security measures, visit 
                    <a href="#" className="text-wf-navy hover:underline ml-1">
                      Security Center
                    </a>.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-wf-dark-gray">Temporary Access</h3>
                  <p className="text-sm mt-2 text-wf-dark-gray">
                    For security reasons, login credentials are provided separately.
                    Please contact your account manager if you need access information.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-wf-dark-gray">Security Notice</h3>
                  <p className="text-sm mt-2 text-wf-dark-gray">
                    Always ensure you're on the legitimate Wells Fargo website before entering any credentials.
                    Look for https:// in the URL and verify the site's security certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <WFFooter />
    </div>
  );
};

export default LoginPage;
