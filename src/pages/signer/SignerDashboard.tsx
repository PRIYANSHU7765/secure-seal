import { DashboardLayout } from '@/components/DashboardLayout';
import { StatsCard } from '@/components/StatsCard';
import { StatusChip } from '@/components/StatusChip';
import { mockDocuments } from '@/lib/mock-data';
import { Upload, FileText, Clock, Video, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SignerDashboard() {
  const myDocs = mockDocuments.filter(d => ['Sarah Chen', 'Lisa Park', 'Anna Lee'].includes(d.signerName));

  return (
    <DashboardLayout role="signer">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">My Dashboard</h1>
          <p className="text-muted-foreground">Track your documents and notarization progress</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatsCard title="Uploaded" value={3} icon={Upload} />
          <StatsCard title="Pending Review" value={1} icon={Clock} />
          <StatsCard title="Live Session" value={1} icon={Video} />
          <StatsCard title="Awaiting Payment" value={1} icon={CreditCard} />
          <StatsCard title="Completed" value={0} icon={CheckCircle} />
        </div>

        {/* Status flow */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="rounded-xl border bg-card p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-4">Notarization Progress</h2>
          <div className="flex flex-wrap items-center gap-2">
            {['Uploaded', 'Under Review', 'Approved', 'Live Session', 'Notarized', 'Payment', 'Completed'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
                  i <= 2 ? 'bg-success/10 text-success' : i === 3 ? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                }`}>
                  {i <= 2 && <CheckCircle className="h-3 w-3" />}
                  {step}
                </div>
                {i < 6 && <ArrowRight className="h-3 w-3 text-muted-foreground shrink-0" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick actions */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Link to="/signer/upload">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="rounded-xl border bg-card p-6 shadow-card hover:shadow-elevated transition-all cursor-pointer group">
              <Upload className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold">Upload Document</h3>
              <p className="text-sm text-muted-foreground mt-1">Upload a new document for notarization</p>
            </motion.div>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="rounded-xl border bg-card p-6 shadow-card hover:shadow-elevated transition-all cursor-pointer">
            <Video className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold">Join Live Session</h3>
            <p className="text-sm text-muted-foreground mt-1">Join your scheduled notarization session</p>
          </motion.div>
          <Link to="/signer/payment">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="rounded-xl border bg-card p-6 shadow-card hover:shadow-elevated transition-all cursor-pointer">
              <CreditCard className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold">Make Payment</h3>
              <p className="text-sm text-muted-foreground mt-1">Complete payment for notarized documents</p>
            </motion.div>
          </Link>
        </div>

        {/* Documents */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="rounded-xl border bg-card shadow-card">
          <div className="border-b p-4 lg:p-6">
            <h2 className="text-lg font-semibold">My Documents</h2>
          </div>
          <div className="divide-y">
            {myDocs.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 lg:px-6 hover:bg-muted/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">Uploaded {doc.uploadDate}</p>
                  </div>
                </div>
                <StatusChip status={doc.status} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
