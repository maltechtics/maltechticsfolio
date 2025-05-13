
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import WFHeader from '../components/WFHeader';
import WFFooter from '../components/WFFooter';
import AccountCard from '../components/AccountCard';
import MapLocation from '../components/MapLocation';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TransferForm from '../components/TransferForm';
import { AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading dashboard data
    setTimeout(() => {
      setLoading(false);
    }, 800);
    
    // Check if user should be here
    const checkAuth = () => {
      // In a real app, we'd verify with a token or session
      // For demo, we'll just use localStorage to simulate a login state
      const isLoggedIn = localStorage.getItem('wfLoggedIn') === 'true';
      if (!isLoggedIn) {
        toast({
          variant: "destructive",
          title: "Session expired",
          description: "Please log in again to access your account.",
        });
        navigate('/');
      }
    };
    
    // Set login state for demonstration purposes
    localStorage.setItem('wfLoggedIn', 'true');
    checkAuth();
    
    return () => {
      // Cleanup would happen here in a real app
    };
  }, [navigate, toast]);
  
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const today = new Date();
  const lastLoginDate = new Date(2024, 9, 15); // October 15, 2024
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <WFHeader isLoggedIn={true} />
        <main className="flex-grow flex items-center justify-center bg-[#F7F7F7]">
          <div className="text-center">
            <div className="animate-pulse w-12 h-12 mx-auto mb-4 rounded-full bg-wf-red"></div>
            <p className="text-wf-navy font-medium">Loading your account information...</p>
          </div>
        </main>
        <WFFooter />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      <WFHeader isLoggedIn={true} />
      
      <main className="flex-grow container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h1 className="text-2xl font-bold text-wf-navy">Good day, Jonathan</h1>
            <p className="text-sm text-gray-600 mt-1">
              {formatDate(today)}
            </p>
          </div>
          
          <div className="bg-wf-red/10 border border-wf-red/20 rounded-md p-3 text-sm flex">
            <AlertCircle className="text-wf-red h-5 w-5 mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium text-wf-red">Security Alert</p>
              <p className="text-gray-700">Last sign on: {formatDate(lastLoginDate)}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-wf-navy mb-4">Your Accounts</h2>
            
            <div className="space-y-4">
              <AccountCard 
                accountName="EVERYDAY CHECKING"
                accountNumber="1234567890"
                balance="$800,000.00"
                type="checking"
              />
              
              <AccountCard 
                accountName="WAY2SAVE SAVINGS"
                accountNumber="0987654321"
                balance="$150,000.00"
                type="savings"
              />
              
              <AccountCard 
                accountName="ACTIVE CASH VISA PLATINUM"
                accountNumber="4111567812345678"
                balance="$0.00"
                type="credit"
              />
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-wf-navy">Recent Transactions</CardTitle>
                <CardDescription>
                  Last transaction was on October 15, 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div>
                      <p className="font-medium">ATM Cash Withdrawal</p>
                      <p className="text-sm text-gray-500">Oct 15, 2024</p>
                    </div>
                    <span className="font-bold text-red-600">-$500.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div>
                      <p className="font-medium">Deposit</p>
                      <p className="text-sm text-gray-500">Oct 10, 2024</p>
                    </div>
                    <span className="font-bold text-green-600">+$5,000.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div>
                      <p className="font-medium">Grocery Store</p>
                      <p className="text-sm text-gray-500">Oct 08, 2024</p>
                    </div>
                    <span className="font-bold text-red-600">-$125.35</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div>
                      <p className="font-medium">Streaming Service</p>
                      <p className="text-sm text-gray-500">Oct 05, 2024</p>
                    </div>
                    <span className="font-bold text-red-600">-$14.99</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Restaurant</p>
                      <p className="text-sm text-gray-500">Oct 01, 2024</p>
                    </div>
                    <span className="font-bold text-red-600">-$78.50</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-wf-navy">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="transfer" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="transfer">Transfer</TabsTrigger>
                    <TabsTrigger value="payment">Pay Bills</TabsTrigger>
                  </TabsList>
                  <TabsContent value="transfer">
                    <TransferForm />
                  </TabsContent>
                  <TabsContent value="payment">
                    <div className="text-center py-6">
                      <p className="text-wf-dark-gray mb-4">
                        Bill Pay is currently unavailable.
                      </p>
                      <button className="bg-wf-red text-white font-semibold py-2 px-4 rounded hover:bg-opacity-90">
                        Try Again Later
                      </button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <MapLocation />
          </div>
        </div>
      </main>
      
      <WFFooter />
    </div>
  );
};

export default Dashboard;
