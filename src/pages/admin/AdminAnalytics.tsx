import { DashboardLayout } from '@/components/DashboardLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const monthlyData = [
  { month: 'Oct', notarizations: 45, payments: 38 },
  { month: 'Nov', notarizations: 52, payments: 48 },
  { month: 'Dec', notarizations: 61, payments: 55 },
  { month: 'Jan', notarizations: 78, payments: 70 },
  { month: 'Feb', notarizations: 85, payments: 79 },
  { month: 'Mar', notarizations: 94, payments: 88 },
];

const statusData = [
  { name: 'Pending', value: 12, color: 'hsl(38, 92%, 50%)' },
  { name: 'In Progress', value: 8, color: 'hsl(239, 84%, 67%)' },
  { name: 'Completed', value: 45, color: 'hsl(142, 76%, 36%)' },
  { name: 'Awaiting Payment', value: 5, color: 'hsl(0, 72%, 51%)' },
];

export default function AdminAnalytics() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Platform performance and trends</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4">Notarization Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(220, 13%, 91%)' }} />
                <Bar dataKey="notarizations" fill="hsl(239, 84%, 67%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4">Payment Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(220, 13%, 91%)' }} />
                <Line type="monotone" dataKey="payments" stroke="hsl(142, 76%, 36%)" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4">Document Status Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={statusData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={3} dataKey="value">
                  {statusData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(220, 13%, 91%)' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {statusData.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v * 25}`} />
                <Tooltip contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(220, 13%, 91%)' }} formatter={(v: number) => [`$${v * 25}`, 'Revenue']} />
                <Bar dataKey="payments" fill="hsl(239, 84%, 67%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
