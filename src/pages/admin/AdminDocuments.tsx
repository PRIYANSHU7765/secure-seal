import { DashboardLayout } from '@/components/DashboardLayout';
import { mockDocuments } from '@/lib/mock-data';
import { StatusChip } from '@/components/StatusChip';
import { FileText, Eye, Check, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function AdminDocuments() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Documents</h1>
            <p className="text-muted-foreground">Manage all uploaded documents</p>
          </div>
          <Input placeholder="Search documents..." className="w-full sm:w-72" />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border bg-card shadow-card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Document</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Signer</th>
                <th className="hidden px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider md:table-cell">Notary</th>
                <th className="hidden px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider sm:table-cell">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mockDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.type} · {doc.size}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm">{doc.signerName}</td>
                  <td className="hidden px-4 py-4 text-sm md:table-cell">{doc.notaryAssigned}</td>
                  <td className="hidden px-4 py-4 text-sm text-muted-foreground sm:table-cell">{doc.uploadDate}</td>
                  <td className="px-4 py-4"><StatusChip status={doc.status} /></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-success"><Check className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><X className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MessageSquare className="h-3.5 w-3.5" /></Button>
                    </div>
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
