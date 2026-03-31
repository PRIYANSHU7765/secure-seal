import { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { CreditCard, Lock, Shield, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

export default function SignerPayment() {
  const [paid, setPaid] = useState(false);
  const notarized = true; // This would come from document state

  if (paid) {
    return (
      <DashboardLayout role="signer">
        <div className="flex items-center justify-center min-h-[60vh]">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-10 w-10 text-success" />
            </div>
            <h1 className="text-2xl font-bold">Payment Successful!</h1>
            <p className="mt-2 text-muted-foreground">Your notarized document is now complete and stored securely.</p>
            <div className="mt-6 rounded-xl border bg-card p-4 shadow-card">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="font-semibold">$75.00</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-muted-foreground">Transaction ID</span>
                <span className="font-mono text-xs">txn_1Nh7...4kMp</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-muted-foreground">Document</span>
                <span className="font-medium">Affidavit of Identity.pdf</span>
              </div>
            </div>
            <div className="mt-6 flex gap-3 justify-center">
              <Button variant="outline"><FileText className="mr-2 h-4 w-4" />Download Document</Button>
              <Button variant="outline"><CreditCard className="mr-2 h-4 w-4" />Download Receipt</Button>
            </div>
          </motion.div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="signer">
      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Payment</h1>
          <p className="text-muted-foreground">Complete payment for your notarized document</p>
        </div>

        {!notarized ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border bg-card p-8 shadow-card text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Lock className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold">Payment Locked</h2>
            <p className="mt-2 text-sm text-muted-foreground">Payment will be available after your document has been notarized.</p>
          </motion.div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            {/* Payment form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border bg-card p-6 shadow-card space-y-5">
              <div className="flex items-center gap-2 text-sm text-success font-medium">
                <Shield className="h-4 w-4" />
                Secure payment powered by Stripe
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Cardholder Name</Label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label>Card Number</Label>
                  <div className="relative">
                    <Input placeholder="4242 4242 4242 4242" className="pl-10" />
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Expiry</Label>
                    <Input placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label>CVC</Label>
                    <Input placeholder="123" />
                  </div>
                </div>
              </div>

              <Button className="w-full gradient-primary border-0 h-11" onClick={() => setPaid(true)}>
                Pay $75.00 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Summary */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
              <div className="rounded-xl border bg-card p-5 shadow-card">
                <h3 className="font-semibold mb-4">Payment Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Document</span>
                    <span className="font-medium">Affidavit of Identity</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Notary Fee</span>
                    <span>$50.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span>$15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing</span>
                    <span>$10.00</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$75.00</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-card p-5 shadow-card">
                <h3 className="font-semibold mb-3">Notarization Status</h3>
                <div className="flex items-center gap-2 text-success text-sm font-medium">
                  <Shield className="h-4 w-4" />
                  Document Notarized ✓
                </div>
                <p className="text-xs text-muted-foreground mt-2">Notarized by Emily Watson on Mar 24, 2026</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
