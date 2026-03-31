import { DashboardLayout } from '@/components/DashboardLayout';
import { StatsCard } from '@/components/StatsCard';
import { StatusChip } from '@/components/StatusChip';
import { mockDocuments, mockUsers, mockAuditLog } from '@/lib/mock-data';
import { Users, FileText, Clock, Video, CheckCircle, CreditCard, Eye, Check, X, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of all platform activity</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <StatsCard title="Total Users" value={mockUsers.length} icon={Users} trend="+12%" trendUp />
          <StatsCard title="Documents" value={mockDocuments.length} icon={FileText} trend="+8%" trendUp />
          <StatsCard title="Pending Review" value={mockDocuments.filter(d => d.status === 'under_review').length} icon={Clock} />
          <StatsCard title="Live Sessions" value={mockDocuments.filter(d => d.status === 'in_session').length} icon={Video} />
          <StatsCard title="Completed" value={mockDocuments.filter(d => d.status === 'completed').length} icon={CheckCircle} />
          <StatsCard title="Payments" value={mockDocuments.filter(d => d.status === 'paid' || d.status === 'completed').length} icon={CreditCard} />
        </div>

        {/* Document approval table */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border bg-card shadow-card">
          <div className="flex items-center justify-between border-b p-4 lg:p-6">
            <div>
              <h2 className="text-lg font-semibold">Document Approvals</h2>
              <p className="text-sm text-muted-foreground">Review and manage uploaded documents</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider lg:px-6">Document</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Uploaded By</th>
                  <th className="hidden px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider md:table-cell">Notary</th>
                  <th className="hidden px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider sm:table-cell">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider lg:px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {mockDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-4 lg:px-6">
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
                    <td className="px-4 py-4 text-sm">{doc.uploadedBy}</td>
                    <td className="hidden px-4 py-4 text-sm md:table-cell">{doc.notaryAssigned}</td>
                    <td className="hidden px-4 py-4 text-sm text-muted-foreground sm:table-cell">{doc.uploadDate}</td>
                    <td className="px-4 py-4"><StatusChip status={doc.status} /></td>
                    <td className="px-4 py-4 lg:px-6">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-3.5 w-3.5" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-success"><Check className="h-3.5 w-3.5" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><X className="h-3.5 w-3.5" /></Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent audit log */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border bg-card shadow-card">
          <div className="border-b p-4 lg:p-6">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <p className="text-sm text-muted-foreground">Latest actions across the platform</p>
          </div>
          <div className="divide-y">
            {mockAuditLog.slice(0, 5).map((entry) => (
              <div key={entry.id} className="flex items-start gap-4 p-4 lg:px-6 hover:bg-muted/20 transition-colors">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{entry.action}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{entry.details}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{entry.timestamp.split(' ')[1]}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
