import { STATUS_CONFIG, type DocumentStatus } from '@/lib/mock-data';
import { Shield, CheckCircle2, Clock, CreditCard, Video, FileSearch, Upload, Calendar, FileCheck } from 'lucide-react';

const STATUS_ICONS: Record<DocumentStatus, React.ElementType> = {
  uploaded: Upload,
  under_review: FileSearch,
  approved: CheckCircle2,
  session_scheduled: Calendar,
  in_session: Video,
  notarized: Shield,
  awaiting_payment: CreditCard,
  paid: CreditCard,
  completed: FileCheck,
};

export function StatusChip({ status }: { status: DocumentStatus }) {
  const config = STATUS_CONFIG[status];
  const Icon = STATUS_ICONS[status];

  return (
    <span className={`status-chip ${config.bgColor} ${config.color}`}>
      <Icon className="h-3 w-3" />
      {config.label}
    </span>
  );
}
