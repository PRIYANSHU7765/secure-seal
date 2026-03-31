export type UserRole = 'admin' | 'notary' | 'signer';

export type DocumentStatus =
  | 'uploaded'
  | 'under_review'
  | 'approved'
  | 'session_scheduled'
  | 'in_session'
  | 'notarized'
  | 'awaiting_payment'
  | 'paid'
  | 'completed';

export const STATUS_CONFIG: Record<DocumentStatus, { label: string; color: string; bgColor: string }> = {
  uploaded: { label: 'Uploaded', color: 'text-muted-foreground', bgColor: 'bg-muted' },
  under_review: { label: 'Under Review', color: 'text-warning-foreground', bgColor: 'bg-warning' },
  approved: { label: 'Approved', color: 'text-primary-foreground', bgColor: 'bg-primary' },
  session_scheduled: { label: 'Session Scheduled', color: 'text-primary-foreground', bgColor: 'bg-primary/80' },
  in_session: { label: 'In Live Session', color: 'text-warning-foreground', bgColor: 'bg-warning' },
  notarized: { label: 'Notarized', color: 'text-success-foreground', bgColor: 'bg-success' },
  awaiting_payment: { label: 'Awaiting Payment', color: 'text-warning-foreground', bgColor: 'bg-warning' },
  paid: { label: 'Paid', color: 'text-success-foreground', bgColor: 'bg-success/80' },
  completed: { label: 'Completed', color: 'text-success-foreground', bgColor: 'bg-success' },
};

export interface Document {
  id: string;
  name: string;
  uploadedBy: string;
  signerName: string;
  notaryAssigned: string;
  uploadDate: string;
  status: DocumentStatus;
  type: string;
  size: string;
}

export interface AuditEntry {
  id: string;
  action: string;
  user: string;
  role: UserRole;
  documentName: string;
  timestamp: string;
  details: string;
}

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  verified: boolean;
  active: boolean;
  joinDate: string;
}

export const mockDocuments: Document[] = [
  { id: '1', name: 'Property Deed Transfer.pdf', uploadedBy: 'Sarah Chen', signerName: 'Sarah Chen', notaryAssigned: 'James Mitchell', uploadDate: '2026-03-28', status: 'under_review', type: 'PDF', size: '2.4 MB' },
  { id: '2', name: 'Power of Attorney.pdf', uploadedBy: 'Michael Torres', signerName: 'Michael Torres', notaryAssigned: 'Emily Watson', uploadDate: '2026-03-27', status: 'approved', type: 'PDF', size: '1.8 MB' },
  { id: '3', name: 'Mortgage Agreement.pdf', uploadedBy: 'Lisa Park', signerName: 'Lisa Park', notaryAssigned: 'James Mitchell', uploadDate: '2026-03-26', status: 'in_session', type: 'PDF', size: '3.1 MB' },
  { id: '4', name: 'Trust Document.pdf', uploadedBy: 'Robert Kim', signerName: 'Robert Kim', notaryAssigned: 'Emily Watson', uploadDate: '2026-03-25', status: 'notarized', type: 'PDF', size: '1.2 MB' },
  { id: '5', name: 'Affidavit of Identity.pdf', uploadedBy: 'Anna Lee', signerName: 'Anna Lee', notaryAssigned: 'James Mitchell', uploadDate: '2026-03-24', status: 'awaiting_payment', type: 'PDF', size: '890 KB' },
  { id: '6', name: 'Will & Testament.pdf', uploadedBy: 'David Brown', signerName: 'David Brown', notaryAssigned: 'Emily Watson', uploadDate: '2026-03-23', status: 'completed', type: 'PDF', size: '2.1 MB' },
  { id: '7', name: 'Vehicle Title Transfer.pdf', uploadedBy: 'Maria Garcia', signerName: 'Maria Garcia', notaryAssigned: 'James Mitchell', uploadDate: '2026-03-22', status: 'paid', type: 'PDF', size: '1.5 MB' },
  { id: '8', name: 'Lease Agreement.pdf', uploadedBy: 'John Smith', signerName: 'John Smith', notaryAssigned: 'Emily Watson', uploadDate: '2026-03-29', status: 'uploaded', type: 'PDF', size: '4.2 MB' },
];

export const mockAuditLog: AuditEntry[] = [
  { id: '1', action: 'Document Uploaded', user: 'Sarah Chen', role: 'signer', documentName: 'Property Deed Transfer.pdf', timestamp: '2026-03-28 14:32:00', details: 'Document uploaded for notarization' },
  { id: '2', action: 'Admin Review Started', user: 'Admin User', role: 'admin', documentName: 'Property Deed Transfer.pdf', timestamp: '2026-03-28 15:10:00', details: 'Document placed under review' },
  { id: '3', action: 'Document Approved', user: 'Admin User', role: 'admin', documentName: 'Power of Attorney.pdf', timestamp: '2026-03-27 10:45:00', details: 'Document approved for notarization' },
  { id: '4', action: 'Live Session Started', user: 'James Mitchell', role: 'notary', documentName: 'Mortgage Agreement.pdf', timestamp: '2026-03-26 09:00:00', details: 'Notary started live session with Lisa Park' },
  { id: '5', action: 'Document Notarized', user: 'Emily Watson', role: 'notary', documentName: 'Trust Document.pdf', timestamp: '2026-03-25 16:20:00', details: 'Document marked as notarized' },
  { id: '6', action: 'Payment Requested', user: 'System', role: 'admin', documentName: 'Affidavit of Identity.pdf', timestamp: '2026-03-24 11:30:00', details: 'Payment request sent to signer' },
  { id: '7', action: 'Payment Completed', user: 'David Brown', role: 'signer', documentName: 'Will & Testament.pdf', timestamp: '2026-03-23 13:15:00', details: 'Payment of $75.00 completed via Stripe' },
  { id: '8', action: 'Document Completed', user: 'System', role: 'admin', documentName: 'Will & Testament.pdf', timestamp: '2026-03-23 13:16:00', details: 'Document marked as completed and stored' },
];

export const mockUsers: UserRecord[] = [
  { id: '1', name: 'Sarah Chen', email: 'sarah.chen@email.com', role: 'signer', verified: true, active: true, joinDate: '2026-01-15' },
  { id: '2', name: 'James Mitchell', email: 'james.mitchell@email.com', role: 'notary', verified: true, active: true, joinDate: '2025-11-20' },
  { id: '3', name: 'Emily Watson', email: 'emily.watson@email.com', role: 'notary', verified: true, active: true, joinDate: '2025-12-01' },
  { id: '4', name: 'Michael Torres', email: 'm.torres@email.com', role: 'signer', verified: true, active: true, joinDate: '2026-02-10' },
  { id: '5', name: 'Lisa Park', email: 'lisa.park@email.com', role: 'signer', verified: false, active: true, joinDate: '2026-03-01' },
  { id: '6', name: 'Robert Kim', email: 'r.kim@email.com', role: 'signer', verified: true, active: false, joinDate: '2025-10-15' },
  { id: '7', name: 'Anna Lee', email: 'anna.lee@email.com', role: 'signer', verified: true, active: true, joinDate: '2026-03-10' },
  { id: '8', name: 'David Brown', email: 'd.brown@email.com', role: 'signer', verified: true, active: true, joinDate: '2026-01-25' },
];
