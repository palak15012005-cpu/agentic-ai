import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { Mail, Clock, CheckCircle2, AlertCircle, Copy, Check, ExternalLink } from 'lucide-react';

export function ContactPage() {
  const { settings } = useAcademy();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successRef, setSuccessRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!consent) {
      setErrorMessage('Please confirm consent to be contacted.');
      return;
    }

    if (!fullName.trim() || !email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide your name and a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        type: 'general',
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        organisation: organisation.trim() || undefined,
        goalsAndRequirements: message.trim() || 'General enquiry submitted via contact page.',
        website_url_check: honeypot
      };

      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }

      setSuccessRef(data.referenceNumber);
    } catch (err: any) {
      setErrorMessage(err.message || 'Error submitting message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRef = () => {
    if (successRef) {
      navigator.clipboard.writeText(successRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 bg-[#071C1A] text-[#F3FAF7] min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#064E46]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#27D7AC]/10 rounded-full blur-3xl pointer-events-none" />

      <SeoHead
        title="Contact Admissions & Research Lab – Agentic.AI"
        description="Connect with the Agentic.AI admissions, research fellows, and curriculum team to arrange corporate training, workshops, or course inquiries."
        canonicalPath="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Contact Lab' }]} />

        <div className="max-w-3xl space-y-3 mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3FAF7]">
            Connect With Our AI Lab
          </h1>
          <p className="text-base text-[#B7F3D7]/80 leading-relaxed">
            Have questions about programme cohorts, corporate team customization, or scheduling a technical laboratory workshop? Our curriculum engineers and admissions desk are here to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Verified Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0A2421]/90 backdrop-blur-md border border-[#064E46]/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_0_35px_rgba(39,215,172,0.12)]">
              <h2 className="font-display text-xl font-bold text-[#F3FAF7] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#27D7AC]" />
                Direct Communication Channels
              </h2>

              <div className="space-y-4 text-sm text-[#B7F3D7]/80">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#27D7AC] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#27D7AC]/70 block mb-0.5">Admissions & Inquiries</span>
                    <a href={`mailto:${settings.contactEmail}`} className="hover:text-[#27D7AC] font-medium transition-colors text-[#F3FAF7]">
                      {settings.contactEmail}
                    </a>
                  </div>
                </div>

                {settings.officeHours && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#27D7AC] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#27D7AC]/70 block mb-0.5">Response Hours</span>
                      <span className="text-[#F3FAF7]">{settings.officeHours}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#064E46]/60 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#27D7AC]/70 block">
                  Curriculum & Laboratory Headquarters
                </span>
                <p className="text-xs text-[#B7F3D7]/80 leading-relaxed">
                  Agentic.AI operates as an advanced AI engineering and applied research lab spearheaded by Abhishek Sharma.
                </p>
                <a
                  href={settings.parentCompanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#27D7AC] hover:text-[#B7F3D7] font-medium transition-colors"
                >
                  Visit Agentic AI <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Working Contact Form */}
          <div className="lg:col-span-7 bg-[#0A2421]/90 backdrop-blur-md border border-[#064E46]/80 rounded-2xl p-6 sm:p-8 shadow-[0_0_35px_rgba(39,215,172,0.12)]">
            <h2 className="font-display text-xl font-bold text-[#F3FAF7] mb-2">
              Transmit Direct Laboratory Dispatch
            </h2>
            <p className="text-xs text-[#B7F3D7]/70 mb-6">
              All messages are securely logged into our admissions registry with an encrypted reference hash.
            </p>

            {successRef ? (
              <div className="p-8 text-center space-y-4 bg-[#071C1A]/90 rounded-xl border border-[#27D7AC]/40">
                <CheckCircle2 className="w-10 h-10 text-[#27D7AC] mx-auto shadow-[0_0_15px_rgba(39,215,172,0.4)]" />
                <h3 className="font-display text-lg font-bold text-[#F3FAF7]">
                  Dispatch Received & Queued
                </h3>
                <p className="text-xs text-[#B7F3D7]/80 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. Your laboratory inquiry has been verified. Abhishek Sharma and our admissions committee will review your dispatch.
                </p>
                <div className="bg-[#0A2421] p-3 rounded-lg border border-[#064E46] flex items-center justify-between text-xs max-w-sm mx-auto">
                  <div className="text-left">
                    <span className="text-[#27D7AC]/70 block text-[10px] uppercase font-mono">Telemetry Reference</span>
                    <span className="font-mono font-bold text-[#27D7AC] text-sm">{successRef}</span>
                  </div>
                  <button
                    onClick={copyRef}
                    className="p-1.5 text-[#F3FAF7] hover:text-[#27D7AC] cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#27D7AC]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 rounded text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website_url_check"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                      Full Name <span className="text-[#27D7AC]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Maya Iyer"
                      className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                      Email Address <span className="text-[#27D7AC]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="maya@company.com"
                      className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Company or Educational Institution (Optional)
                  </label>
                  <input
                    type="text"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder="e.g. Acme Tech Solutions / University"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Message / Training Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the courses, agentic pipelines, or workshop dates you would like to explore..."
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none resize-none"
                  />
                </div>

                <label className="flex items-start gap-2 text-xs text-[#B7F3D7]/80 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded text-[#27D7AC] bg-[#071C1A] border-[#064E46] accent-[#27D7AC]"
                  />
                  <span>
                    I consent to being contacted by Agentic.AI regarding this enquiry. <span className="text-[#27D7AC]">*</span>
                  </span>
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#071C1A] bg-gradient-to-r from-[#27D7AC] to-[#B7F3D7] hover:brightness-110 disabled:opacity-50 rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.35)]"
                  >
                    {isSubmitting ? 'Transmitting Dispatch...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
