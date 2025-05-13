
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TransferForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [transferDate, setTransferDate] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Transfer Declined",
        description: "Your transfer could not be processed. Please contact customer service for assistance.",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="from-account">From</Label>
        <Select value={fromAccount} onValueChange={setFromAccount} required>
          <SelectTrigger id="from-account" className="wf-input">
            <SelectValue placeholder="Select account" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="checking">EVERYDAY CHECKING ••••1234 - $800,000.00</SelectItem>
            <SelectItem value="savings">WAY2SAVE SAVINGS ••••5678 - $150,000.00</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="to-account">To</Label>
        <Select value={toAccount} onValueChange={setToAccount} required>
          <SelectTrigger id="to-account" className="wf-input">
            <SelectValue placeholder="Select account" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="savings">WAY2SAVE SAVINGS ••••5678</SelectItem>
            <SelectItem value="external">Add external account</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-wf-dark-gray">$</span>
          <Input
            id="amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="wf-input pl-8"
            placeholder="0.00"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Transfer Date</Label>
        <Input
          id="date"
          type="date"
          value={transferDate}
          onChange={(e) => setTransferDate(e.target.value)}
          className="wf-input"
          required
        />
      </div>

      <Button 
        type="submit" 
        className="bg-wf-red text-white font-semibold hover:bg-opacity-90 w-full mt-4"
        disabled={loading}
      >
        {loading ? "Processing..." : "Transfer Money"}
      </Button>
    </form>
  );
};

export default TransferForm;
