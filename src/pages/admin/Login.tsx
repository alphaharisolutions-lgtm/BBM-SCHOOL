import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { storage } from '@/lib/storage';
import { toast } from 'sonner';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@bbm.com' && password === 'admin123') {
      storage.login(email);
      toast.success('Login successful');
      navigate('/admin/dashboard');
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <Card className="w-full max-w-md rounded-[2rem] border-border shadow-2xl overflow-hidden">
        <div className="bg-primary p-8 text-primary-foreground text-center space-y-4">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto overflow-hidden p-1">
            <img 
              src="/logo.png" 
              alt="BBM Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">BBM High School</h1>
            <p className="text-primary-foreground/70 text-sm">Administration Portal</p>
          </div>
        </div>
        
        <CardContent className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail size={16} /> Email Address
              </label>
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@bbm.com" 
                className="rounded-xl h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Lock size={16} /> Password
              </label>
              <Input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="rounded-xl h-12"
                required
              />
            </div>

            <Button type="submit" className="w-full h-12 rounded-xl font-bold text-lg">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
