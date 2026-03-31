import { DashboardLayout } from '@/components/DashboardLayout';
import { mockUsers } from '@/lib/mock-data';
import { Shield, CheckCircle, XCircle, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function AdminUsers() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">User Management</h1>
            <p className="text-muted-foreground">Manage signers and notaries</p>
          </div>
          <Input placeholder="Search users..." className="w-full sm:w-72" />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border bg-card shadow-card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">User</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                <th className="hidden px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider sm:table-cell">Verified</th>
                <th className="hidden px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider md:table-cell">Status</th>
                <th className="hidden px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider md:table-cell">Joined</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-bold text-primary">{user.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`status-chip ${user.role === 'notary' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      {user.role === 'notary' && <Shield className="h-3 w-3" />}
                      <span className="capitalize">{user.role}</span>
                    </span>
                  </td>
                  <td className="hidden px-4 py-4 sm:table-cell">
                    {user.verified ? (
                      <span className="trust-badge border-success/30 bg-success/10 text-success"><CheckCircle className="h-3 w-3" />Verified</span>
                    ) : (
                      <span className="trust-badge border-warning/30 bg-warning/10 text-warning"><XCircle className="h-3 w-3" />Pending</span>
                    )}
                  </td>
                  <td className="hidden px-4 py-4 md:table-cell">
                    <span className={`status-chip ${user.active ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                      {user.active ? 'Active' : 'Blocked'}
                    </span>
                  </td>
                  <td className="hidden px-4 py-4 text-sm text-muted-foreground md:table-cell">{user.joinDate}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
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
