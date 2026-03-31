import { DashboardLayout } from '@/components/DashboardLayout';
import { StatusChip } from '@/components/StatusChip';
import { mockDocuments } from '@/lib/mock-data';
import { FileText, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function SignerDocuments() {
  const myDocs = mockDocuments.filter(d => ['Sarah Chen', 'Lisa Park', 'Anna Lee'].includes(d.signerName));

  return (
    <DashboardLayout role="signer">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">My Documents</h1>
          <p className="text-muted-foreground">Track all your uploaded documents</p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border bg-card shadow-card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Document</th>
                <th className="hidden px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider sm:table-cell">Notary</th>
                <th className="hidden px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider md:table-cell">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {myDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.size}</p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden px-4 py-4 text-sm sm:table-cell">{doc.notaryAssigned}</td>
                  <td className="hidden px-4 py-4 text-sm text-muted-foreground md:table-cell">{doc.uploadDate}</td>
                  <td className="px-4 py-4"><StatusChip status={doc.status} /></td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
