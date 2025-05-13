
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';

interface LoginFormProps {
  onSuccessfulLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccessfulLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network request
    setTimeout(() => {
      if (username === 'jonathanroumie@gmail.com' && password === 'jonathanR443') {
        toast({
          title: "Login successful",
          description: "Welcome back, Jonathan Roumie.",
        });
        onSuccessfulLogin();
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Incorrect username or password. Please try again.",
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-4">
        <div>
          <Label htmlFor="username" className="text-wf-dark-gray font-semibold mb-1">Username</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="wf-input"
            placeholder="Username or email"
            required
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <Label htmlFor="password" className="text-wf-dark-gray font-semibold">Password</Label>
            <a href="#" className="text-sm text-wf-navy hover:underline">Forgot password?</a>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="wf-input"
            placeholder="Password"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="rememberMe" 
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            className="wf-checkbox"
          />
          <Label htmlFor="rememberMe" className="text-sm text-wf-dark-gray">Save username</Label>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-wf-red hover:bg-opacity-90 text-white font-semibold py-3"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In"}
      </Button>

      <div className="flex items-center justify-center space-x-2 text-wf-dark-gray text-xs">
        <Lock className="h-3.5 w-3.5" />
        <span>Secure Sign In</span>
      </div>

      <div className="text-center space-y-3 pt-4">
        <p className="text-sm text-wf-dark-gray">
          Don't have username and password? <a href="#" className="text-wf-navy hover:underline">Enroll now</a>
        </p>
        <a href="#" className="text-sm text-wf-navy hover:underline block">
          Need assistance? Get help signing in
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
