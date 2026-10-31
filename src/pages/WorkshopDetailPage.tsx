import { useState } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { 
  Clock, 
  Users, 
  CheckCircle2, 
  Laptop, 
  User, 
  MapPin, 
  Calendar,
  AlertCircle,
  Copy,
  Check,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ACADEMY_IMAGES } from '../assets/images.ts';

export function WorkshopDetailPage({ slug }: { slug: string }) {
  const { workshops, navigate, openEnquiryModal } = useAcademy();

  const workshop = workshops.find(w => w.slug === slug);

  // Quick Interest Registration in sidebar
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [deliveryPreference, setDeliveryPreference] = useState('Flexible');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [regSuccess, setRegSuccess] = useState<{ referenceNumber: string } | null>(null);
  const [copied, setCopied] = useState(false);

  if (!workshop) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4 bg-[#071C1A] text-[#F3FAF7]">
        <h1 className="font-display text-2xl font-bold text-[#F3FAF7] mb-2">
          Workshop Not Found
        </h1>
        <p className="text-sm text-[#C3E5D8] mb-6">
          The requested workshop format could not be found or has been retired.
        </p>
        <button
          onClick={() => navigate('/workshops')}
          className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#20BE97] rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.4)]"
        >
          View All Workshop Formats
        </button>
      </div>
    );
  }

  const handleRegisterInterest = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!consent) {
      setErrorMessage('Please confirm consent to be contacted.');
      return;
    }

    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide your name and a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        type: 'workshop_registration',
        fullName: name.trim(),
        email: email.trim().toLowerCase(),
        organisation: org.trim() || undefined,
        workshopSlug: workshop.slug,
        workshopTitle: workshop.title,
        preferredDeliveryMode: deliveryPreference,
        goalsAndRequirements: `Interest registered for workshop format: ${workshop.title}`,
        marketingConsent: false
      };

      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Registration failed.');
      }

      setRegSuccess({ referenceNumber: data.referenceNumber });
    } catch (err: any) {
      setErrorMessage(err.message || 'Error processing registration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRef = () => {
    if (regSuccess?.referenceNumber) {
      navigator.clipboard.writeText(regSuccess.referenceNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Workshop hero visual image
  const workshopImage = workshop.imageUrl || (
    workshop.category === 'Generative AI' ? ACADEMY_IMAGES.introGenAiWorkshop : ACADEMY_IMAGES.collegeBootcampLab
  );

  return (
    <div className="py-12 bg-[#071C1A] text-[#F3FAF7] min-h-screen relative overflow-hidden">
      {/* Ambient Radial Lab Reflections */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-[#27D7AC]/15 via-[#064E46]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[350px] bg-[#064E46]/35 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B332F_1px,transparent_1px),linear-gradient(to_bottom,#0B332F_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-20 pointer-events-none" />

      <SeoHead
        title={`${workshop.title} – Workshop Specification | Agentic.AI Academy`}
        description={workshop.overview.slice(0, 155)}
        canonicalPath={`/workshops/${workshop.slug}`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Workshops', path: '/workshops' },
            { label: workshop.title }
          ]}
        />

        {/* Top Hero Banner & Workshop Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#0B332F]">
          
          <div className="lg:col-span-8 space-y-5">
            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#C3E5D8]">
              <span className="px-3 py-1 rounded-full bg-[#064E46]/60 border border-[#27D7AC]/40 font-semibold text-[#27D7AC] shadow-[0_0_8px_rgba(39,215,172,0.2)]">
                {workshop.category}
              </span>
              <span aria-hidden="true" className="text-[#0B332F]">/</span>
              <span className="px-2.5 py-0.5 rounded bg-[#0A2421] border border-[#0B332F] text-[#B7F3D7]">{workshop.formatType}</span>
              <span aria-hidden="true" className="text-[#0B332F]">/</span>
              <span className="font-mono text-[#27D7AC]">{workshop.duration}</span>
              {workshop.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#27D7AC]/15 border border-[#27D7AC]/40 text-[#27D7AC] font-medium text-[11px] ml-auto">
                  {workshop.badge}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3FAF7] leading-tight">
              {workshop.title}
            </h1>

            <p className="text-base sm:text-lg text-[#C3E5D8] leading-relaxed max-w-3xl">
              {workshop.overview}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#C3E5D8]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A2421] border border-[#0B332F]">
                <Clock className="w-4 h-4 text-[#27D7AC]" />
                <span>{workshop.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A2421] border border-[#0B332F]">
                <Users className="w-4 h-4 text-[#27D7AC]" />
                <span>Target: {workshop.audience}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A2421] border border-[#0B332F]">
                <Laptop className="w-4 h-4 text-[#27D7AC]" />
                <span>Mode: {workshop.deliveryMode.join(' / ')}</span>
              </div>
            </div>

            {/* High-Fidelity Workshop Photo Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-[#27D7AC]/30 shadow-[0_16px_45px_rgba(0,0,0,0.6)] group">
              <img
                src={workshopImage}
                alt={workshop.title}
                className="w-full h-64 sm:h-80 object-cover brightness-[0.88] contrast-[1.08] group-hover:scale-[1.02] transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C1A] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 bg-[#0A2421]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#27D7AC]/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27D7AC] animate-pulse shadow-[0_0_8px_#27D7AC]" />
                  <span className="text-xs font-bold text-[#F3FAF7]">Practical Lab Deployment Session</span>
                  <span className="text-[11px] text-[#27D7AC] hidden sm:inline">• Live Environment Sandbox</span>
                </div>
                <span className="text-[11px] font-mono text-[#B7F3D7] bg-[#064E46]/60 px-2.5 py-0.5 rounded border border-[#27D7AC]/30">
                  {workshop.tools.slice(0, 3).join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Registration & Proposal Trigger Box */}
          <div className="lg:col-span-4 bg-[#0A2421]/90 border border-[#0B332F] rounded-2xl p-6 space-y-5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl sticky top-24">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#27D7AC] block mb-1">
                Workshop Scheduling Status
              </span>
              <div className="font-display text-xl font-bold text-[#F3FAF7]">
                {workshop.isConfirmedEvent ? 'Confirmed Cohort Batch' : 'Available On Request'}
              </div>
              <p className="text-xs text-[#C3E5D8] mt-1.5 leading-relaxed">
                {workshop.isConfirmedEvent 
                  ? `Confirmed Date: ${workshop.confirmedDate || 'TBA'} · Capacity: ${workshop.capacity || 'Limited'}`
                  : 'Can be scheduled for your university department, engineering batch, or enterprise team.'}
              </p>
            </div>

            {/* Quick Registration Form */}
            {regSuccess ? (
              <div className="p-5 bg-[#064E46]/40 rounded-xl border border-[#27D7AC]/40 text-center space-y-3">
                <CheckCircle2 className="w-9 h-9 text-[#27D7AC] mx-auto shadow-[0_0_12px_rgba(39,215,172,0.4)]" />
                <h4 className="font-display text-base font-bold text-[#F3FAF7]">Interest Registered!</h4>
                <p className="text-xs text-[#C3E5D8] leading-relaxed">
                  Your registration has been saved to the database. Our academic coordinator will contact you with scheduled cohort options.
                </p>
                <div className="bg-[#071C1A] p-3 rounded-lg border border-[#0B332F] flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#27D7AC]">{regSuccess.referenceNumber}</span>
                  <button
                    onClick={copyRef}
                    className="p-1 text-[#F3FAF7] hover:text-[#27D7AC] cursor-pointer flex items-center gap-1 text-[11px]"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#27D7AC]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegisterInterest} className="space-y-3.5 pt-2 border-t border-[#0B332F]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#27D7AC] block">
                  Register Interest / Request Schedule
                </span>

                {errorMessage && (
                  <div className="p-2.5 bg-red-950/70 text-red-200 text-[11px] rounded-lg flex items-center gap-2 border border-red-500/30">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#071C1A] border border-[#0B332F] text-[#F3FAF7] rounded-lg placeholder-[#64748B] focus:border-[#27D7AC] outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work or University Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#071C1A] border border-[#0B332F] text-[#F3FAF7] rounded-lg placeholder-[#64748B] focus:border-[#27D7AC] outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="College, University or Company (Optional)"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#071C1A] border border-[#0B332F] text-[#F3FAF7] rounded-lg placeholder-[#64748B] focus:border-[#27D7AC] outline-none transition-colors"
                  />
                </div>

                <div>
                  <select
                    value={deliveryPreference}
                    onChange={(e) => setDeliveryPreference(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#071C1A] border border-[#0B332F] text-[#F3FAF7] rounded-lg focus:border-[#27D7AC] outline-none"
                  >
                    <option value="Flexible">Delivery Mode: Flexible</option>
                    <option value="On-Campus / In-Person">On-Campus / In-Person Lab</option>
                    <option value="Live Virtual Interactive">Live Virtual Interactive</option>
                    <option value="Hybrid Format">Hybrid Format</option>
                  </select>
                </div>

                <label className="flex items-start gap-2.5 text-[11px] text-[#C3E5D8] cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded text-[#27D7AC] bg-[#071C1A] border-[#0B332F] focus:ring-[#27D7AC]"
                  />
                  <span>I consent to be notified regarding workshop scheduling and syllabus details.</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#20BE97] rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.4)] flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Register Workshop Interest'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={() => openEnquiryModal({ workshopSlug: workshop.slug, workshopTitle: workshop.title, type: 'corporate' })}
                className="w-full py-2.5 text-xs font-semibold text-[#F3FAF7] hover:text-[#27D7AC] border border-[#0B332F] hover:border-[#27D7AC]/40 bg-[#071C1A] rounded-xl transition-all cursor-pointer text-center block"
              >
                Or Book Dedicated College / Team Cohort
              </button>
            </div>
          </div>

        </div>

        {/* Detailed Sections & Telemetry Benchmark Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 items-start">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Hands-On Telemetry Benchmark Chart Widget */}
            <div className="bg-[#0A2421]/90 border border-[#27D7AC]/30 rounded-2xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-52 h-52 bg-[#27D7AC]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-[#0B332F]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#064E46]/60 border border-[#27D7AC]/40 flex items-center justify-center text-[#27D7AC]">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#F3FAF7]">
                      {workshop.labTelemetry?.chartTitle || 'Workshop Hands-On Competency Telemetry'}
                    </h3>
                    <p className="text-xs text-[#8DE0C8]">
                      Practical coding benchmark targets & lab proficiency milestones
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#27D7AC]/15 border border-[#27D7AC]/40 text-[#27D7AC] text-xs font-bold">
                    {workshop.labTelemetry?.badge || 'Hands-On Lab Verified'}
                  </span>
                </div>
              </div>

              {/* Progress bars metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {(workshop.labTelemetry?.metrics || [
                  { label: 'Prompt Architecture & Context', value: '96%', pct: 96 },
                  { label: 'API & Pipeline Integration', value: '92%', pct: 92 },
                  { label: 'Evaluation & Guardrails', value: '88%', pct: 88 },
                ]).map((metric, mIdx) => (
                  <div key={mIdx} className="bg-[#071C1A]/80 border border-[#0B332F] rounded-xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#C3E5D8] font-medium">{metric.label}</span>
                      <span className="font-mono font-bold text-[#27D7AC]">{metric.value}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#071C1A] border border-[#0B332F] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7] transition-all duration-1000 shadow-[0_0_8px_#27D7AC]"
                        style={{ width: `${metric.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Telemetry bottom stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[#0B332F]/80 text-xs">
                <div className="bg-[#071C1A]/50 p-2.5 rounded-lg border border-[#0B332F]">
                  <span className="text-[#8DE0C8] text-[11px] block">Build Readiness</span>
                  <span className="font-mono font-bold text-[#27D7AC] text-sm">
                    {workshop.labTelemetry?.accuracy || '98.4%'}
                  </span>
                </div>
                <div className="bg-[#071C1A]/50 p-2.5 rounded-lg border border-[#0B332F]">
                  <span className="text-[#8DE0C8] text-[11px] block">Velocity Gain</span>
                  <span className="font-mono font-bold text-[#B7F3D7] text-sm">
                    {workshop.labTelemetry?.speed || '3.5x faster'}
                  </span>
                </div>
                <div className="bg-[#071C1A]/50 p-2.5 rounded-lg border border-[#0B332F]">
                  <span className="text-[#8DE0C8] text-[11px] block">Code Exercises</span>
                  <span className="font-mono font-bold text-[#F3FAF7] text-sm">4 Practical Labs</span>
                </div>
                <div className="bg-[#071C1A]/50 p-2.5 rounded-lg border border-[#0B332F]">
                  <span className="text-[#8DE0C8] text-[11px] block">Credential</span>
                  <span className="font-mono font-bold text-[#27D7AC] text-sm">Certificate Included</span>
                </div>
              </div>
            </div>

            {/* Agenda */}
            <section className="bg-[#0A2421]/90 border border-[#0B332F] rounded-2xl p-7 space-y-6 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#0B332F]">
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
                    Workshop Agenda & Time Breakdown
                  </h2>
                  <p className="text-xs text-[#C3E5D8] mt-0.5">
                    Structured modular pacing for maximum retention and applied coding
                  </p>
                </div>
                <span className="text-xs font-mono text-[#27D7AC] bg-[#064E46]/60 px-3 py-1 rounded-full border border-[#27D7AC]/30 font-semibold">
                  {workshop.duration}
                </span>
              </div>

              <div className="space-y-4">
                {workshop.agenda.map((slot, idx) => (
                  <div key={idx} className="p-4 bg-[#071C1A]/90 rounded-xl border border-[#0B332F] hover:border-[#27D7AC]/30 transition-all space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#27D7AC] bg-[#064E46]/40 px-2.5 py-0.5 rounded border border-[#27D7AC]/20">
                        {slot.timeSlot}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#F3FAF7]">
                      {slot.title}
                    </h3>
                    <p className="text-xs text-[#C3E5D8] leading-relaxed">
                      {slot.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className="bg-[#0A2421]/90 border border-[#0B332F] rounded-2xl p-7 space-y-5 backdrop-blur-xl">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
                  What Participants Will Learn & Build
                </h2>
                <p className="text-xs text-[#C3E5D8] mt-0.5">
                  Core competencies acquired through instructor-led live demonstrations and hands-on drills
                </p>
              </div>

              <div className="space-y-2.5">
                {workshop.learningOutcomes.map((out, idx) => (
                  <div key={idx} className="p-3.5 bg-[#071C1A]/90 border border-[#0B332F] rounded-xl flex items-start gap-3 hover:border-[#27D7AC]/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#27D7AC] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F3FAF7] font-medium leading-relaxed">{out}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Prerequisites */}
            <section className="bg-[#0A2421]/90 border border-[#0B332F] rounded-2xl p-6 space-y-2.5 backdrop-blur-xl">
              <h3 className="font-display text-base font-bold text-[#F3FAF7] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#27D7AC]" />
                <span>Prerequisites & Participant Preparation</span>
              </h3>
              <p className="text-xs text-[#C3E5D8] leading-relaxed">
                {workshop.prerequisites}
              </p>
            </section>

          </div>

          {/* Right Column: Instructor & Specs */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Instructor Card with Verified Portrait */}
            <div className="bg-[#0A2421]/90 border border-[#0B332F] rounded-2xl p-6 space-y-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#27D7AC]">
                <User className="w-4 h-4" />
                <span>Lead Instructor & Curriculum Architect</span>
              </div>
              
              <div className="flex items-center gap-4">
                <img
                  src={ACADEMY_IMAGES.founder}
                  alt="Abhishek Sharma - Lead AI Instructor"
                  className="w-16 h-16 rounded-xl object-cover border-2 border-[#27D7AC]/40 shadow-[0_0_15px_rgba(39,215,172,0.3)] shrink-0"
                />
                <div>
                  <h3 className="font-display text-lg font-bold text-[#F3FAF7]">
                    {workshop.trainer}
                  </h3>
                  <p className="text-xs text-[#27D7AC] font-medium">MSc in AI & ML, Systems Architect</p>
                </div>
              </div>

              <p className="text-xs text-[#C3E5D8] leading-relaxed border-t border-[#0B332F] pt-3">
                Sessions are designed and facilitated by Abhishek Sharma and senior AI practitioners with hands-on systems architecture experience in LLM pipelines, autonomous agents, and enterprise data engines.
              </p>
            </div>

            {/* Tools Used */}
            <div className="bg-[#0A2421]/90 border border-[#0B332F] rounded-2xl p-6 space-y-3.5 backdrop-blur-xl">
              <h3 className="font-display text-base font-bold text-[#F3FAF7] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#27D7AC]" />
                <span>Tools & Technologies Explored</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {workshop.tools.map((t, idx) => (
                  <span key={idx} className="font-mono text-xs bg-[#071C1A] text-[#B7F3D7] px-2.5 py-1 rounded-lg border border-[#0B332F]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Delivery Modes */}
            <div className="bg-[#0A2421]/90 border border-[#0B332F] rounded-2xl p-6 space-y-3 backdrop-blur-xl">
              <h3 className="font-display text-base font-bold text-[#F3FAF7] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#27D7AC]" />
                <span>Delivery Modes</span>
              </h3>
              <p className="text-xs text-[#C3E5D8] leading-relaxed">
                Available as: <strong className="text-[#F3FAF7]">{workshop.deliveryMode.join(' or ')}</strong>. Includes live sandbox access, hands-on lab repos, and post-session code references.
              </p>
            </div>

            {/* Institutional Brochure / Syllabus CTA */}
            <div className="bg-gradient-to-br from-[#064E46]/60 to-[#0A2421] border border-[#27D7AC]/40 rounded-2xl p-6 space-y-3.5 text-center">
              <h4 className="font-display text-sm font-bold text-[#F3FAF7]">
                Need a Custom College or Team Syllabus?
              </h4>
              <p className="text-xs text-[#C3E5D8] leading-relaxed">
                We can adjust duration from 2 hours to multi-day intensives with custom lab exercises tailored to your team's stack.
              </p>
              <button
                onClick={() => openEnquiryModal({ workshopSlug: workshop.slug, workshopTitle: workshop.title, type: 'college' })}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#20BE97] rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.35)]"
              >
                Request Custom Syllabus
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
