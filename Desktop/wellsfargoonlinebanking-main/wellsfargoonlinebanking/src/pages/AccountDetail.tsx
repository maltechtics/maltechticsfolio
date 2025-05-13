
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import WFHeader from '../components/WFHeader';
import WFFooter from '../components/WFFooter';
import { 
  Card, 
  CardContent,  
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  balance: number;
}

// Mock account data for the demo
const accountData = {
  '1234567890': {
    name: 'EVERYDAY CHECKING',
    number: '1234567890',
    balance: 800000,
    available: 800000,
    type: 'checking',
    transactions: [
      {
        id: '1',
        date: 'Oct 15, 2024',
        description: 'ATM Cash Withdrawal',
        amount: -500,
        balance: 800000
      },
      {
        id: '2',
        date: 'Oct 10, 2024',
        description: 'Deposit',
        amount: 5000,
        balance: 800500
      },
      {
        id: '3',
        date: 'Oct 08, 2024',
        description: 'Grocery Store',
        amount: -125.35,
        balance: 795500
      },
      {
        id: '4',
        date: 'Oct 05, 2024',
        description: 'Streaming Service',
        amount: -14.99,
        balance: 795625.35
      },
      {
        id: '5',
        date: 'Oct 01, 2024',
        description: 'Restaurant',
        amount: -78.50,
        balance: 795640.34
      }
    ]
  },
  '0987654321': {
    name: 'WAY2SAVE SAVINGS',
    number: '0987654321',
    balance: 150000,
    available: 150000,
    type: 'savings',
    transactions: [
      {
        id: '1',
        date: 'Oct 05, 2024',
        description: 'Interest Payment',
        amount: 125.75,
        balance: 150000
      },
      {
        id: '2',
        date: 'Sep 25, 2024',
        description: 'Transfer from Checking',
        amount: 10000,
        balance: 149874.25
      }
    ]
  }
};

const AccountDetail: React.FC = () => {
  const { accountNumber } = useParams<{ accountNumber: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<any>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('wfLoggedIn') === 'true';
    if (!isLoggedIn) {
      toast({
        variant: "destructive",
        title: "Session expired",
        description: "Please log in again to access your account.",
      });
      navigate('/');
      return;
    }

    // Simulate loading account data
    setTimeout(() => {
      if (accountNumber && accountNumber in accountData) {
        const data = accountData[accountNumber as keyof typeof accountData];
        setAccount(data);
        setTransactions(data.transactions);
      } else {
        toast({
          variant: "destructive",
          title: "Account not found",
          description: "The requested account could not be found.",
        });
        navigate('/dashboard');
      }
      setLoading(false);
    }, 800);
  }, [accountNumber, navigate, toast]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const handleDownloadStatement = () => {
    toast({
      title: "Statement download failed",
      description: "This function is not available in the demo version.",
      variant: "destructive"
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <WFHeader isLoggedIn={true} />
        <main className="flex-grow flex items-center justify-center bg-[#F7F7F7]">
          <div className="text-center">
            <div className="animate-pulse w-12 h-12 mx-auto mb-4 rounded-full bg-wf-red"></div>
            <p className="text-wf-navy font-medium">Loading account details...</p>
          </div>
        </main>
        <WFFooter />
      </div>
    );
  }

  if (!account) {
    return (
      <div className="flex flex-col min-h-screen">
        <WFHeader isLoggedIn={true} />
        <main className="flex-grow flex items-center justify-center bg-[#F7F7F7]">
          <div className="text-center">
            <p className="text-wf-navy font-medium">Account not found</p>
            <Button 
              onClick={() => navigate('/dashboard')} 
              className="mt-4 bg-wf-red text-white"
            >
              Return to Dashboard
            </Button>
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
        <div className="flex items-center mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/dashboard')} 
            className="mr-4"
          >
            Back to Accounts
          </Button>
          <h1 className="text-2xl font-bold text-wf-navy">{account.name}</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-wf-navy">Account Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-600">Account Number:</span>
                    <span className="font-medium">••••••{account.number.slice(-4)}</span>
                  </div>
                  
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-600">Available Balance:</span>
                    <span className="font-bold text-lg">{formatCurrency(account.available)}</span>
                  </div>
                  
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-600">Current Balance:</span>
                    <span className="font-medium">{formatCurrency(account.balance)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Type:</span>
                    <span className="font-medium capitalize">{account.type}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-wf-navy">Transaction History</CardTitle>
                  <Button 
                    variant="outline" 
                    onClick={handleDownloadStatement} 
                    className="text-sm"
                  >
                    Download Statement
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="deposits">Deposits</TabsTrigger>
                    <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all">
                    <div className="space-y-4">
                      {transactions.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="py-3 text-left text-gray-600">Date</th>
                                <th className="py-3 text-left text-gray-600">Description</th>
                                <th className="py-3 text-right text-gray-600">Amount</th>
                                <th className="py-3 text-right text-gray-600">Balance</th>
                              </tr>
                            </thead>
                            <tbody>
                              {transactions.map((transaction) => (
                                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                                  <td className="py-3">{transaction.date}</td>
                                  <td className="py-3">{transaction.description}</td>
                                  <td className={`py-3 text-right ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                    {formatCurrency(transaction.amount)}
                                  </td>
                                  <td className="py-3 text-right font-medium">
                                    {formatCurrency(transaction.balance)}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-center py-6 text-gray-500">No transactions found</p>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="deposits">
                    <div className="space-y-4">
                      {transactions.filter(t => t.amount > 0).length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="py-3 text-left text-gray-600">Date</th>
                                <th className="py-3 text-left text-gray-600">Description</th>
                                <th className="py-3 text-right text-gray-600">Amount</th>
                                <th className="py-3 text-right text-gray-600">Balance</th>
                              </tr>
                            </thead>
                            <tbody>
                              {transactions.filter(t => t.amount > 0).map((transaction) => (
                                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                                  <td className="py-3">{transaction.date}</td>
                                  <td className="py-3">{transaction.description}</td>
                                  <td className="py-3 text-right text-green-600">
                                    {formatCurrency(transaction.amount)}
                                  </td>
                                  <td className="py-3 text-right font-medium">
                                    {formatCurrency(transaction.balance)}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-center py-6 text-gray-500">No deposits found</p>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="withdrawals">
                    <div className="space-y-4">
                      {transactions.filter(t => t.amount < 0).length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="py-3 text-left text-gray-600">Date</th>
                                <th className="py-3 text-left text-gray-600">Description</th>
                                <th className="py-3 text-right text-gray-600">Amount</th>
                                <th className="py-3 text-right text-gray-600">Balance</th>
                              </tr>
                            </thead>
                            <tbody>
                              {transactions.filter(t => t.amount < 0).map((transaction) => (
                                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                                  <td className="py-3">{transaction.date}</td>
                                  <td className="py-3">{transaction.description}</td>
                                  <td className="py-3 text-right text-red-600">
                                    {formatCurrency(transaction.amount)}
                                  </td>
                                  <td className="py-3 text-right font-medium">
                                    {formatCurrency(transaction.balance)}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-center py-6 text-gray-500">No withdrawals found</p>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-wf-navy">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full bg-wf-red text-white">Transfer Money</Button>
                  <Button className="w-full bg-wf-navy text-white">Pay Bills</Button>
                  <Button className="w-full bg-white text-wf-navy border border-wf-navy">
                    View Statements
                  </Button>
                  <Button className="w-full bg-white text-wf-navy border border-wf-navy">
                    Account Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-wf-navy">Account Owner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <img 
                    src="/lovable-uploads/15f05089-8926-4b37-a7eb-11dcf86503f1.png" 
                    alt="Jonathan Roumie" 
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Jonathan Roumie</h3>
                    <p className="text-sm text-gray-500">Primary Account Holder</p>
                    <p className="text-sm text-gray-500 mt-1">Member since: 2015</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-wf-navy">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>Contact customer service for assistance with your account.</p>
                  <div className="border-t pt-2">
                    <p className="font-medium">Phone:</p>
                    <p>1-800-956-4442</p>
                  </div>
                  <div>
                    <p className="font-medium">Hours:</p>
                    <p>24 hours a day, 7 days a week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <WFFooter />
    </div>
  );
};

export default AccountDetail;
