import { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Video, Mic, MicOff, VideoOff, Monitor, Phone, Clock, Wifi, Circle,
  Type, Stamp, Calendar, PenTool, CheckSquare, Hash, ZoomIn, ZoomOut, ChevronLeft, ChevronRight,
  Shield, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const tools = [
  { icon: PenTool, label: 'Signature', color: 'text-primary' },
  { icon: Stamp, label: 'Stamp', color: 'text-success' },
  { icon: Calendar, label: 'Date', color: 'text-warning' },
  { icon: Type, label: 'Initials', color: 'text-primary' },
  { icon: Hash, label: 'Text Field', color: 'text-muted-foreground' },
  { icon: CheckSquare, label: 'Checkbox', color: 'text-primary' },
];

export default function NotaryLiveSession() {
  const [muted, setMuted] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [notarized, setNotarized] = useState(false);

  return (
    <DashboardLayout role="notary">
      <div className="space-y-4">
        {/* Top bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-destructive animate-pulse" />
              Live Session — Lisa Park
            </h1>
            <p className="text-sm text-muted-foreground">Mortgage Agreement.pdf</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="trust-badge border-success/30 bg-success/10 text-success"><Wifi className="h-3 w-3" />Connected</span>
            <span className="trust-badge border-primary/30 bg-primary/10 text-primary"><Circle className="h-3 w-3 fill-current" />Recording</span>
            <span className="trust-badge border-border bg-muted text-muted-foreground"><Clock className="h-3 w-3" />12:34</span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
          {/* Document workspace */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border bg-card shadow-card overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b px-4 py-2">
              <div className="flex items-center gap-1">
                {tools.map((tool) => (
                  <button
                    key={tool.label}
                    className="flex flex-col items-center gap-0.5 rounded-lg px-3 py-2 text-xs hover:bg-muted/50 transition-colors cursor-grab"
                    title={`Drag: ${tool.label}`}
                  >
                    <tool.icon className={`h-4 w-4 ${tool.color}`} />
                    <span className="text-[10px] text-muted-foreground hidden sm:block">{tool.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setZoom(Math.max(50, zoom - 10))}><ZoomOut className="h-4 w-4" /></Button>
                <span className="text-xs font-medium w-10 text-center">{zoom}%</span>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setZoom(Math.min(200, zoom + 10))}><ZoomIn className="h-4 w-4" /></Button>
              </div>
            </div>

            {/* Document area */}
            <div className="relative flex items-center justify-center bg-muted/30 p-8" style={{ minHeight: '500px' }}>
              <div className="w-full max-w-lg rounded-lg border-2 border-dashed border-border bg-card p-12 text-center shadow-elevated">
                <p className="text-lg font-semibold">Mortgage Agreement</p>
                <p className="mt-2 text-sm text-muted-foreground">Between Lisa Park and First National Bank</p>
                <div className="mt-8 space-y-4 text-left text-sm text-muted-foreground">
                  <p>This agreement is entered into on the 26th day of March, 2026...</p>
                  <p>WHEREAS, the Borrower desires to obtain a loan from the Lender for the purpose of purchasing real property...</p>
                  <div className="mt-6 rounded-lg border border-dashed border-primary/50 bg-primary/5 p-4">
                    <p className="text-xs font-medium text-primary">↕ Drop signature here</p>
                  </div>
                  <div className="mt-4 rounded-lg border border-dashed border-success/50 bg-success/5 p-4">
                    <p className="text-xs font-medium text-success">↕ Drop notary stamp here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Page nav */}
            <div className="flex items-center justify-center gap-3 border-t py-3">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setPage(Math.max(1, page - 1))}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium">Page {page} of 5</span>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setPage(Math.min(5, page + 1))}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right panel */}
          <div className="space-y-4">
            {/* Video call */}
            <div className="rounded-xl border bg-card shadow-card overflow-hidden">
              <div className="aspect-video bg-foreground/90 flex items-center justify-center relative">
                <Video className="h-10 w-10 text-primary-foreground/30" />
                <div className="absolute bottom-3 left-3 text-xs text-primary-foreground/80 font-medium">Lisa Park</div>
                <div className="absolute bottom-3 right-3 h-16 w-24 rounded-lg bg-foreground/60 flex items-center justify-center">
                  <span className="text-[10px] text-primary-foreground/80">You</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 py-3">
                <Button variant={muted ? 'destructive' : 'ghost'} size="icon" className="h-9 w-9 rounded-full" onClick={() => setMuted(!muted)}>
                  {muted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button variant={!videoOn ? 'destructive' : 'ghost'} size="icon" className="h-9 w-9 rounded-full" onClick={() => setVideoOn(!videoOn)}>
                  {videoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full"><Monitor className="h-4 w-4" /></Button>
                <Button variant="destructive" size="icon" className="h-9 w-9 rounded-full"><Phone className="h-4 w-4" /></Button>
              </div>
            </div>

            {/* Participant */}
            <div className="rounded-xl border bg-card p-4 shadow-card">
              <h3 className="text-sm font-semibold mb-3">Participants</h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-9 w-9 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">LP</span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-success" />
                </div>
                <div>
                  <p className="text-sm font-medium">Lisa Park</p>
                  <p className="text-xs text-success">Online</p>
                </div>
              </div>
            </div>

            {/* Notary actions */}
            <div className="rounded-xl border bg-card p-4 shadow-card space-y-3">
              <h3 className="text-sm font-semibold">Notary Actions</h3>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" /> Add Notes
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <CheckCircle className="mr-2 h-4 w-4" /> Verify Fields
              </Button>
              {!notarized ? (
                <Button className="w-full gradient-primary border-0" onClick={() => setNotarized(true)}>
                  <Shield className="mr-2 h-4 w-4" /> Mark as Notarized
                </Button>
              ) : (
                <div className="rounded-lg border border-success/30 bg-success/10 p-3 text-center">
                  <p className="text-sm font-semibold text-success flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4" /> Notarized ✓
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Awaiting signer payment</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
