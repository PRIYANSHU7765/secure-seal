import { DashboardLayout } from '@/components/DashboardLayout';
import { FileCheck, Download, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const completedDocs = [
  { name: 'Will & Testament.pdf', notary: 'Emily Watson', date: '2026-03-23', amount: '$75.00', txn: 'txn_abc123' },
];

export default function SignerCompleted() {
  return (
    <DashboardLayout role="signer">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Completed Documents</h1>
          <p className="text-muted-foreground">Your finalized and notarized documents</p>
        </div>

        {completedDocs.length === 0 ? (
          <div className="rounded-xl border bg-card p-12 shadow-card text-center">
            <FileCheck className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <h3 className="mt-4 font-semibold text-muted-foreground">No completed documents yet</h3>
            <p className="mt-1 text-sm text-muted-foreground">Your completed notarizations will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {completedDocs.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border bg-card p-6 shadow-card"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
                      <FileCheck className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold">{doc.name}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="trust-badge border-success/30 bg-success/10 text-success">
                          <Shield className="h-3 w-3" />Notarized
                        </span>
                        <span>Notary: {doc.notary}</span>
                        <span>Completed: {doc.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm"><Download className="mr-1.5 h-3.5 w-3.5" />Document</Button>
                    <Button variant="outline" size="sm"><CreditCard className="mr-1.5 h-3.5 w-3.5" />Receipt</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
