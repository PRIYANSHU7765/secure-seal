import { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Upload, FileText, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface UploadedFile {
  name: string;
  size: string;
  status: 'uploading' | 'uploaded';
  progress: number;
}

export default function SignerUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([
    { name: 'Contract_Draft_v2.pdf', size: '1.8 MB', status: 'uploaded', progress: 100 },
  ]);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const newFile: UploadedFile = { name: 'New_Document.pdf', size: '2.3 MB', status: 'uploading', progress: 0 };
    setFiles([...files, newFile]);
    // Simulate upload
    setTimeout(() => {
      setFiles(prev => prev.map(f => f.name === 'New_Document.pdf' ? { ...f, status: 'uploaded', progress: 100 } : f));
    }, 2000);
  };

  return (
    <DashboardLayout role="signer">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Upload Document</h1>
          <p className="text-muted-foreground">Upload documents for notarization</p>
        </div>

        {/* Upload area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`rounded-2xl border-2 border-dashed p-12 text-center transition-all ${
            dragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
          }`}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-4">
            <Upload className="h-8 w-8 text-primary" />
          </div>
          <p className="text-lg font-semibold">Drop your files here</p>
          <p className="mt-1 text-sm text-muted-foreground">or click to browse — PDF, DOC, DOCX up to 25MB</p>
          <Button variant="outline" className="mt-4">Browse Files</Button>
        </motion.div>

        {/* File list */}
        {files.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border bg-card shadow-card">
            <div className="border-b p-4">
              <h2 className="font-semibold">Uploaded Files</h2>
            </div>
            <div className="divide-y">
              {files.map((file, i) => (
                <div key={i} className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{file.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-muted-foreground">{file.size}</p>
                      {file.status === 'uploaded' ? (
                        <span className="flex items-center gap-1 text-xs text-success font-medium">
                          <CheckCircle className="h-3 w-3" /> Uploaded
                        </span>
                      ) : (
                        <div className="flex-1 max-w-32">
                          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-primary"
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 2 }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Progress tracker */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border bg-card p-6 shadow-card">
          <h2 className="font-semibold mb-4">Document Status Tracker</h2>
          <div className="space-y-4">
            {['Upload', 'Admin Review', 'Notary Assignment', 'Live Session', 'Notarization', 'Payment', 'Complete'].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  i === 0 ? 'gradient-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {i === 0 ? <CheckCircle className="h-4 w-4" /> : i + 1}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${i === 0 ? '' : 'text-muted-foreground'}`}>{step}</p>
                </div>
                {i === 0 && <span className="text-xs text-success font-medium">Complete</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
