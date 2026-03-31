import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Shield, LayoutDashboard, FileText, Users, ClipboardList, BarChart3,
  Video, Upload, CreditCard, CheckCircle, Bell, Search, Menu, X,
  ChevronDown, LogOut, Settings, Moon, Sun, FileCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import type { UserRole } from '@/lib/mock-data';

const NAV_ITEMS: Record<UserRole, { label: string; icon: React.ElementType; path: string }[]> = {
  admin: [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { label: 'Documents', icon: FileText, path: '/admin/documents' },
    { label: 'Users', icon: Users, path: '/admin/users' },
    { label: 'Audit Log', icon: ClipboardList, path: '/admin/audit' },
    { label: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
  ],
  notary: [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/notary' },
    { label: 'Sessions', icon: Video, path: '/notary/sessions' },
    { label: 'Documents', icon: FileText, path: '/notary/documents' },
    { label: 'Live Meeting', icon: Video, path: '/notary/live' },
  ],
  signer: [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/signer' },
    { label: 'Upload', icon: Upload, path: '/signer/upload' },
    { label: 'Documents', icon: FileText, path: '/signer/documents' },
    { label: 'Payment', icon: CreditCard, path: '/signer/payment' },
    { label: 'Completed', icon: CheckCircle, path: '/signer/completed' },
  ],
};

const ROLE_LABELS: Record<UserRole, string> = {
  admin: 'Administrator',
  notary: 'Notary Public',
  signer: 'Document Signer',
};

interface DashboardLayoutProps {
  role: UserRole;
  children: React.ReactNode;
}

export function DashboardLayout({ role, children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const items = NAV_ITEMS[role];

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col border-r bg-sidebar transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-[72px]'
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            {sidebarOpen && (
              <span className="text-lg font-bold tracking-tight">NotaryVault</span>
            )}
          </Link>
        </div>

        {/* Role badge */}
        {sidebarOpen && (
          <div className="mx-4 mt-4 rounded-lg bg-sidebar-accent px-3 py-2">
            <p className="text-xs font-medium text-sidebar-accent-foreground">{ROLE_LABELS[role]}</p>
          </div>
        )}

        {/* Nav */}
        <nav className="mt-4 flex-1 space-y-1 px-3">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                }`}
              >
                <item.icon className="h-[18px] w-[18px] shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t p-3 space-y-1">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/50 transition-colors"
          >
            <Menu className="h-[18px] w-[18px] shrink-0" />
            {sidebarOpen && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-72 border-r bg-sidebar lg:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b px-4">
                <Link to="/" className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold">NotaryVault</span>
                </Link>
                <button onClick={() => setMobileOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-4 space-y-1 px-3">
                {items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                          : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50'
                      }`}
                    >
                      <item.icon className="h-[18px] w-[18px]" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-card/80 backdrop-blur-xl px-4 lg:px-6">
          <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>

          <div className="relative hidden md:block w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search documents, users..."
              className="pl-9 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleDark} className="rounded-lg">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="relative rounded-lg">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
            </Button>
            <div className="ml-2 flex items-center gap-2 rounded-lg border px-3 py-1.5 cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="h-7 w-7 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">JD</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs text-muted-foreground">{ROLE_LABELS[role]}</p>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
