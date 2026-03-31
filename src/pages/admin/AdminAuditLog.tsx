import { DashboardLayout } from '@/components/DashboardLayout';
import { mockAuditLog } from '@/lib/mock-data';
import { Upload, FileSearch, CheckCircle, Video, Shield, CreditCard, FileCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const ACTION_ICONS: Record<string, React.ElementType> = {
  'Document Uploaded': Upload,
  'Admin Review Started': FileSearch,
  'Document Approved': CheckCircle,
  'Live Session Started': Video,
  'Document Notarized': Shield,
  'Payment Requested': CreditCard,
  'Payment Completed': CreditCard,
  'Document Completed': FileCheck,
};

const ACTION_COLORS: Record<string, string> = {
  'Document Uploaded': 'bg-muted text-muted-foreground',
  'Admin Review Started': 'bg-warning/10 text-warning',
  'Document Approved': 'bg-primary/10 text-primary',
  'Live Session Started': 'bg-warning/10 text-warning',
  'Document Notarized': 'bg-success/10 text-success',
  'Payment Requested': 'bg-warning/10 text-warning',
  'Payment Completed': 'bg-success/10 text-success',
  'Document Completed': 'bg-success/10 text-success',
};

export default function AdminAuditLog() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Audit Log</h1>
            <p className="text-muted-foreground">Complete timeline of all platform actions</p>
          </div>
          <Input placeholder="Search actions..." className="w-full sm:w-72" />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border bg-card shadow-card">
          <div className="divide-y">
            {mockAuditLog.map((entry, i) => {
              const Icon = ACTION_ICONS[entry.action] || CheckCircle;
              const color = ACTION_COLORS[entry.action] || 'bg-muted text-muted-foreground';
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 p-4 lg:px-6 hover:bg-muted/20 transition-colors"
                >
                  <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                      <p className="text-sm font-semibold">{entry.action}</p>
                      <span className="text-xs text-muted-foreground">by {entry.user} ({entry.role})</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{entry.details}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{entry.documentName}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground whitespace-nowrap">{entry.timestamp}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
