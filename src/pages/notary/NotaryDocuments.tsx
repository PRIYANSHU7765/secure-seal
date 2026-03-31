import { DashboardLayout } from '@/components/DashboardLayout';
import { StatusChip } from '@/components/StatusChip';
import { mockDocuments } from '@/lib/mock-data';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotaryDocuments() {
  return (
    <DashboardLayout role="notary">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Documents</h1>
          <p className="text-muted-foreground">All documents assigned to you</p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border bg-card shadow-card">
          <div className="divide-y">
            {mockDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 lg:px-6 hover:bg-muted/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">Signer: {doc.signerName} · {doc.size}</p>
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
