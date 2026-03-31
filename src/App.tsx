import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDocuments from "./pages/admin/AdminDocuments";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminAuditLog from "./pages/admin/AdminAuditLog";
import AdminAnalytics from "./pages/admin/AdminAnalytics";

import NotaryDashboard from "./pages/notary/NotaryDashboard";
import NotarySessions from "./pages/notary/NotarySessions";
import NotaryDocuments from "./pages/notary/NotaryDocuments";
import NotaryLiveSession from "./pages/notary/NotaryLiveSession";

import SignerDashboard from "./pages/signer/SignerDashboard";
import SignerUpload from "./pages/signer/SignerUpload";
import SignerDocuments from "./pages/signer/SignerDocuments";
import SignerPayment from "./pages/signer/SignerPayment";
import SignerCompleted from "./pages/signer/SignerCompleted";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/documents" element={<AdminDocuments />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/audit" element={<AdminAuditLog />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />

          {/* Notary */}
          <Route path="/notary" element={<NotaryDashboard />} />
          <Route path="/notary/sessions" element={<NotarySessions />} />
          <Route path="/notary/documents" element={<NotaryDocuments />} />
          <Route path="/notary/live" element={<NotaryLiveSession />} />

          {/* Signer */}
          <Route path="/signer" element={<SignerDashboard />} />
          <Route path="/signer/upload" element={<SignerUpload />} />
          <Route path="/signer/documents" element={<SignerDocuments />} />
          <Route path="/signer/payment" element={<SignerPayment />} />
          <Route path="/signer/completed" element={<SignerCompleted />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
