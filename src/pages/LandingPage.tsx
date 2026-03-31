import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileCheck, Video, CreditCard, Lock, Users, ArrowRight, CheckCircle2, Zap, Globe, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const features = [
  { icon: Shield, title: 'Legally Binding', description: 'Every notarization meets state and federal compliance requirements.' },
  { icon: Video, title: 'Live Video Sessions', description: 'Real-time video meetings between notaries and signers with full recording.' },
  { icon: FileCheck, title: 'Document Workspace', description: 'Interactive drag-and-drop tools for stamps, signatures, and annotations.' },
  { icon: Lock, title: 'Bank-Grade Security', description: 'End-to-end encryption, tamper-proof audit trails, and secure storage.' },
  { icon: CreditCard, title: 'Integrated Payments', description: 'Secure Stripe-powered payments triggered only after notarization.' },
  { icon: Users, title: 'Role-Based Access', description: 'Dedicated dashboards for Admins, Notaries, and Signers.' },
];

const steps = [
  { step: '01', title: 'Upload Document', description: 'Signer uploads documents that need notarization through a secure portal.' },
  { step: '02', title: 'Admin Review', description: 'Admin reviews and approves documents, assigning a qualified notary.' },
  { step: '03', title: 'Live Notarization', description: 'Notary and signer meet via live video for real-time document notarization.' },
  { step: '04', title: 'Payment & Completion', description: 'After notarization, signer completes payment and receives certified documents.' },
];

const pricingPlans = [
  { name: 'Starter', price: '$9', period: '/notarization', description: 'For individuals needing occasional notarizations', features: ['Single document', 'Standard processing', 'Email support', '7-day document storage'] },
  { name: 'Professional', price: '$29', period: '/month', description: 'For businesses with regular notarization needs', features: ['Up to 20 documents/mo', 'Priority processing', 'Dedicated notary', '1-year secure storage', 'API access'], popular: true },
  { name: 'Enterprise', price: 'Custom', period: '', description: 'For organizations requiring volume notarization', features: ['Unlimited documents', 'SLA-backed uptime', 'Custom integrations', 'Compliance reporting', 'SSO & SAML', 'Dedicated account manager'] },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">NotaryVault</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="gradient-primary border-0">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(239_84%_67%/0.08),transparent_60%)]" />
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 shadow-card">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Trusted by 2,000+ businesses</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Secure Online{' '}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Notarization
              </span>
              {' '}Made Simple
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The complete platform for remote online notarization. Upload documents, connect with certified notaries via live video, and receive legally binding notarizations — all from anywhere.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/signup">
                <Button size="lg" className="gradient-primary border-0 px-8 text-base h-12">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="px-8 text-base h-12">
                  View Demo
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" />SOC 2 Compliant</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" />256-bit Encryption</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" />MISMO Certified</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-card/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Everything You Need for Remote Notarization</h2>
            <p className="mt-4 text-muted-foreground">A complete solution designed for legal professionals, businesses, and individuals.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-muted-foreground">Four simple steps to get your documents notarized online.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <span className="text-6xl font-extrabold text-primary/10">{step.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="border-t bg-card/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Enterprise-Grade Security & Compliance</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Built from the ground up with security and legal compliance at its core. Every notarization creates a tamper-proof audit trail.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'SOC 2 Type II certified infrastructure',
                  'End-to-end 256-bit AES encryption',
                  'MISMO® RON compliant',
                  'Tamper-evident audit trails',
                  'Multi-factor identity verification',
                  'GDPR and CCPA compliant data handling',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-8 shadow-elevated">
              <div className="space-y-6">
                <div className="flex items-center gap-4 rounded-xl bg-muted/50 p-4">
                  <Lock className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Tamper-Proof Seal</p>
                    <p className="text-sm text-muted-foreground">Every document receives a cryptographic seal</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-muted/50 p-4">
                  <Globe className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">50-State Compliance</p>
                    <p className="text-sm text-muted-foreground">Legal in all US states with RON legislation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-muted/50 p-4">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Real-Time Verification</p>
                    <p className="text-sm text-muted-foreground">Instant identity and credential verification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-muted-foreground">No hidden fees. Pay only for what you need.</p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border p-8 transition-all duration-200 hover:shadow-elevated ${
                  plan.popular ? 'border-primary shadow-elevated ring-1 ring-primary' : 'bg-card shadow-card'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className="block mt-8">
                  <Button className={`w-full ${plan.popular ? 'gradient-primary border-0' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="rounded-3xl gradient-hero p-12 text-center sm:p-16">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Ready to Transform Your Notarization Process?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Join thousands of businesses and professionals using NotaryVault for secure, efficient remote notarization.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="px-8 h-12 text-base font-semibold">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Shield className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold">NotaryVault</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 NotaryVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
