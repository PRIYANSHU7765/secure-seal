import { DashboardLayout } from '@/components/DashboardLayout';
import { StatsCard } from '@/components/StatsCard';
import { StatusChip } from '@/components/StatusChip';
import { mockDocuments } from '@/lib/mock-data';
import { Video, FileText, Clock, CheckCircle, Play, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const sessions = [
  { id: '1', signerName: 'Lisa Park', document: 'Mortgage Agreement.pdf', status: 'in_session' as const, time: '09:00 AM', date: '2026-03-31' },
  { id: '2', signerName: 'Michael Torres', document: 'Power of Attorney.pdf', status: 'session_scheduled' as const, time: '02:00 PM', date: '2026-03-31' },
  { id: '3', signerName: 'Anna Lee', document: 'Affidavit of Identity.pdf', status: 'approved' as const, time: '04:00 PM', date: '2026-04-01' },
];

export default function NotaryDashboard() {
  return (
    <DashboardLayout role="notary">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Notary Dashboard</h1>
          <p className="text-muted-foreground">Manage your sessions and notarizations</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard title="Assigned Sessions" value={3} icon={Calendar} />
          <StatsCard title="Pending Documents" value={2} icon={FileText} />
          <StatsCard title="Live Today" value={1} icon={Video} />
          <StatsCard title="Completed" value={12} icon={CheckCircle} trend="+3 this week" trendUp />
        </div>

        {/* Sessions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border bg-card shadow-card">
          <div className="flex items-center justify-between border-b p-4 lg:p-6">
            <div>
              <h2 className="text-lg font-semibold">Upcoming Sessions</h2>
              <p className="text-sm text-muted-foreground">Your scheduled and active sessions</p>
            </div>
            <Link to="/notary/live">
              <Button className="gradient-primary border-0">
                <Video className="mr-2 h-4 w-4" /> Start Live Meeting
              </Button>
            </Link>
          </div>
          <div className="divide-y">
            {sessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 lg:px-6 hover:bg-muted/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{session.signerName}</p>
                    <p className="text-xs text-muted-foreground">{session.document}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden text-right sm:block">
                    <p className="text-sm font-medium">{session.time}</p>
                    <p className="text-xs text-muted-foreground">{session.date}</p>
                  </div>
                  <StatusChip status={session.status} />
                  {session.status === 'in_session' && (
                    <Link to="/notary/live">
                      <Button size="sm" className="gradient-primary border-0">
                        <Play className="mr-1 h-3 w-3" /> Join
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Assigned documents */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border bg-card shadow-card">
          <div className="border-b p-4 lg:p-6">
            <h2 className="text-lg font-semibold">Assigned Documents</h2>
          </div>
          <div className="divide-y">
            {mockDocuments.filter(d => d.notaryAssigned === 'James Mitchell').map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 lg:px-6 hover:bg-muted/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">Signer: {doc.signerName}</p>
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
