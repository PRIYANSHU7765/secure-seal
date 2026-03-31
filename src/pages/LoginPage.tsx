import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: route based on email
    if (email.includes('admin')) navigate('/admin');
    else if (email.includes('notary')) navigate('/notary');
    else navigate('/signer');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="hidden w-1/2 lg:flex flex-col justify-between gradient-hero p-12">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/20 backdrop-blur-sm">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary-foreground">NotaryVault</span>
        </Link>
        <div>
          <h2 className="text-3xl font-bold text-primary-foreground">Secure. Legal. Effortless.</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-md leading-relaxed">
            Access your notarization dashboard to manage documents, sessions, and payments — all in one place.
          </p>
        </div>
        <p className="text-sm text-primary-foreground/60">© 2026 NotaryVault</p>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">NotaryVault</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="mt-2 text-muted-foreground">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-9" required />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-9" required />
              </div>
            </div>
            <Button type="submit" className="w-full gradient-primary border-0 h-11">
              Sign In <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Demo accounts:</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p><span className="font-medium text-foreground">admin@demo.com</span> → Admin Dashboard</p>
              <p><span className="font-medium text-foreground">notary@demo.com</span> → Notary Dashboard</p>
              <p><span className="font-medium text-foreground">signer@demo.com</span> → Signer Dashboard</p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-primary hover:underline">Create account</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
