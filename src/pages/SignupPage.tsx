import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

export default function SignupPage() {
  const [role, setRole] = useState<'signer' | 'notary'>('signer');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(role === 'notary' ? '/notary' : '/signer');
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 lg:flex flex-col justify-between gradient-hero p-12">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/20 backdrop-blur-sm">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary-foreground">NotaryVault</span>
        </Link>
        <div>
          <h2 className="text-3xl font-bold text-primary-foreground">Join the Future of Notarization</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-md leading-relaxed">
            Create your account and start notarizing documents online in minutes.
          </p>
        </div>
        <p className="text-sm text-primary-foreground/60">© 2026 NotaryVault</p>
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">NotaryVault</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="mt-2 text-muted-foreground">Get started with secure online notarization</p>
          </div>

          {/* Role selector */}
          <div className="grid grid-cols-2 gap-3">
            {(['signer', 'notary'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  role === r ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:bg-muted/50'
                }`}
              >
                <p className="text-sm font-semibold capitalize">{r}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {r === 'signer' ? 'Upload & sign documents' : 'Notarize documents'}
                </p>
              </button>
            ))}
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="name" placeholder="John Doe" className="pl-9" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" className="pl-9" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-9" required />
              </div>
            </div>
            <Button type="submit" className="w-full gradient-primary border-0 h-11">
              Create Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
