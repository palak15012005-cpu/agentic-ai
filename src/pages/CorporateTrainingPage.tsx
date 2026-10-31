import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { ACADEMY_IMAGES } from '../assets/images.ts';
import { 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  Target, 
  Users, 
  BarChart, 
  ShieldCheck, 
  FileCheck2, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { DeliveryMode } from '../types/index.ts';

export function CorporateTrainingPage() {
  const { openEnquiryModal } = useAcademy();

  // Embedded Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [role, setRole] = useState('');
  const [teamSize, setTeamSize] = useState('6–15 team members');
  const [topics, setTopics] = useState<string[]>(['Generative AI for Business Teams']);
  const [currentSkillLevel, setCurrentSkillLevel] = useState('Beginner to Intermediate');
  const [preferredDeliveryMode, setPreferredDeliveryMode] = useState<DeliveryMode | 'Flexible'>('Flexible');
  const [location, setLocation] = useState('');
  const [preferredTimeframe, setPreferredTimeframe] = useState('Within the next 4–6 weeks');
  const [goalsAndRequirements, setGoalsAndRequirements] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [consent, setConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successData, setSuccessData] = useState<{ referenceNumber: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const availableTracks = [
    'AI Literacy for Employees',
    'Generative AI for Business Teams',
    'AI for HR, Sales, Marketing, and Operations',
    'Leadership & AI Adoption',
    'Agentic AI for Technical Teams',
    'Data Analytics & BI',
    'Custom AI Engineering Programmes'
  ];

  const toggleTopic = (track: string) => {
    if (topics.includes(track)) {
      if (topics.length > 1) {
        setTopics(topics.filter(t => t !== track));
      }
    } else {
      setTopics([...topics, track]);
    }
  };

  const handleProposalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!consent) {
      setErrorMessage('Please consent to be contacted regarding this proposal.');
      return;
    }

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid work email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        type: 'corporate',
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || undefined,
        organisation: organisation.trim() || undefined,
        role: role.trim() || undefined,
        teamSize,
        programmeTitle: `Tracks: ${topics.join(', ')}`,
        currentSkillLevel,
        preferredDeliveryMode,
        location: location.trim() || undefined,
        preferredTimeframe,
        goalsAndRequirements: goalsAndRequirements.trim() || `Corporate proposal request for tracks: ${topics.join(', ')}`,
        budgetRange: budgetRange.trim() || undefined,
        marketingConsent,
        website_url_check: honeypot
      };

      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit proposal request.');
      }

      setSuccessData({ referenceNumber: data.referenceNumber });
    } catch (err: any) {
      setErrorMessage(err.message || 'Error submitting request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRef = () => {
    if (successData?.referenceNumber) {
      navigator.clipboard.writeText(successData.referenceNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 bg-[#071C1A] text-[#F3FAF7] min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#064E46]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#27D7AC]/10 rounded-full blur-3xl pointer-events-none" />

      <SeoHead
        title="Custom Corporate AI Training & Laboratory Upskilling – Agentic.AI"
        description="Bespoke AI training for business teams, HR, operations, and software engineers. Needs assessment, role-based tracks, and verified capstone outcomes."
        canonicalPath="/corporate-training"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Corporate Training' }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3FAF7] leading-tight">
              Role-Based AI Training for Modern Enterprise Teams.
            </h1>
            <p className="text-base sm:text-lg text-[#B7F3D7]/80 leading-relaxed">
              Equip business analysts, departmental managers, operations leads, and software engineers with verifiable competencies. Led by Abhishek Sharma and research architects, we customize every engagement around your real production boundaries.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#proposal-form"
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#071C1A] bg-gradient-to-r from-[#27D7AC] to-[#B7F3D7] hover:brightness-110 rounded-xl transition-all shadow-[0_0_20px_rgba(39,215,172,0.35)]"
              >
                Request a Training Proposal
              </a>
              <button
                onClick={() => openEnquiryModal({ type: 'corporate' })}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F3FAF7] hover:text-[#27D7AC] bg-[#0A2421]/90 border border-[#064E46] hover:border-[#27D7AC]/60 rounded-xl transition-colors"
              >
                Quick Scope Discussion
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#064E46]/80 bg-[#0A2421]/90 shadow-[0_0_35px_rgba(39,215,172,0.15)]">
              <img
                src={ACADEMY_IMAGES.corporate}
                alt="Corporate engineering and executive team reviewing an automated AI workflow architecture"
                className="w-full h-72 sm:h-80 object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-[#071C1A]/95 border-t border-[#064E46]/60 text-xs text-[#B7F3D7]/80 flex justify-between">
                <span className="text-[#F3FAF7]">Executive & Engineering Briefing</span>
                <span className="text-[#27D7AC] font-mono">Onsite & Virtual Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Training Tracks Section */}
        <section className="mb-20">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#27D7AC]">
              Modular Architecture
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#F3FAF7]">
              Tailored Corporate Training Tracks
            </h2>
            <p className="text-sm text-[#B7F3D7]/80 leading-relaxed">
              We design curriculums matched to functional roles rather than delivering a generic one-size-fits-all lecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Literacy for Employees',
                formTrackName: 'AI Literacy for Employees',
                desc: 'Universal foundational training on model capabilities, secure enterprise usage, confidential data protection, and prompt hygiene.',
                target: 'All staff, administrative personnel, and general knowledge workers.',
                image: ACADEMY_IMAGES.corpAiLiteracy,
                imageAlt: 'Corporate employees engaged in an AI literacy workshop learning data security and prompt hygiene',
                badge: 'Enterprise Foundation',
                metric: '100% Zero Data Leakage',
                curriculumPoints: [
                  'Data privacy, confidential prompt sanitization & copyright basics',
                  'Structured prompting for daily email, meeting & memo drafting',
                  'Recognizing hallucinations & systematic fact-checking SOPs'
                ]
              },
              {
                title: 'Generative AI for Business Teams',
                formTrackName: 'Generative AI for Business Teams',
                desc: 'Applied document synthesis, meeting intelligence, structured report drafting, and automated spreadsheet reconciliation.',
                target: 'Business analysts, operations coordinators, and project managers.',
                image: ACADEMY_IMAGES.corpGenAiTeams,
                imageAlt: 'Cross-functional corporate business team collaborating around glass dashboard with generative AI workflows',
                badge: 'Departmental Velocity',
                metric: '4.8x Document Velocity',
                curriculumPoints: [
                  'Synthesizing transcripts, long decks & policy docs into briefs',
                  'Transforming messy tables into structured JSON/CSV datasets',
                  'Constructing repeatable departmental prompt libraries'
                ]
              },
              {
                title: 'AI for HR, Sales, Marketing & Ops',
                formTrackName: 'AI for HR, Sales, Marketing, and Operations',
                desc: 'Department-specific prompt frameworks, candidate sourcing SOPs, prospect research pipelines, and CRM triage.',
                target: 'Departmental leads, recruiters, copywriters, and commercial teams.',
                image: ACADEMY_IMAGES.corpAiHrSales,
                imageAlt: 'Corporate team working on HR talent analytics, CRM pipeline lead scoring, and marketing workflows',
                badge: 'Commercial Operations',
                metric: '99.2% Schema Precision',
                curriculumPoints: [
                  'HR: Candidate resume screening rubrics & interview question design',
                  'Sales: Inbound lead enrichment, qualification & CRM triage',
                  'Marketing & Ops: Multichannel copy variations & SLA monitoring'
                ]
              },
              {
                title: 'Leadership & AI Adoption',
                formTrackName: 'Leadership & AI Adoption',
                desc: 'Strategic feasibility auditing, vendor vs build analysis, governance framework design, and risk mitigation.',
                target: 'Directors, vice presidents, C-suite executives, and business unit heads.',
                image: ACADEMY_IMAGES.corporateBriefing,
                imageAlt: 'Executive leadership briefing on corporate AI adoption and risk governance',
                badge: 'Executive Strategy',
                metric: 'Governance & ROI Blueprint',
                curriculumPoints: [
                  'Assessing high-ROI departmental workflows vs high-risk traps',
                  'Licensing tiers, IP indemnity & enterprise security models',
                  'Structuring departmental AI adoption KPIs & change management'
                ]
              },
              {
                title: 'Agentic AI for Technical Teams',
                formTrackName: 'Agentic AI for Technical Teams',
                desc: 'Multi-agent loops, state machines, ReAct architectures, function-calling APIs, and production circuit breakers.',
                target: 'Software engineers, system architects, and technical automation specialists.',
                image: ACADEMY_IMAGES.agentWorkflowLab || ACADEMY_IMAGES.agenticWorkflow,
                imageAlt: 'Autonomous multi-agent system execution graphs and tool connections',
                badge: 'Autonomous Systems Core',
                metric: '< 110ms Tool Execution',
                curriculumPoints: [
                  'LangGraph cognitive loops, graph routing & persistent state',
                  'Model Context Protocol (MCP) and dynamic tool dispatch',
                  'Human-in-the-loop authorization gates and error circuits'
                ]
              },
              {
                title: 'Data Analytics & BI',
                formTrackName: 'Data Analytics & BI',
                desc: 'Advanced SQL queries, automated data cleansing in Pandas, and executive Power BI star-schema dashboards.',
                target: 'BI developers, financial analysts, and quantitative operations staff.',
                image: ACADEMY_IMAGES.aiDataEngineeringLab,
                imageAlt: 'Data analytics and business intelligence multi-monitor dashboard and pipelines',
                badge: 'Quantitative Intelligence',
                metric: '1.2M rows/s Processing',
                curriculumPoints: [
                  'Relational SQL joins, Common Table Expressions & window analytics',
                  'Automated Pandas data cleansing, imputation & statistical EDA',
                  'Star-schema modeling, DAX time intelligence & executive cards'
                ]
              },
              {
                title: 'Custom AI Engineering Programmes',
                formTrackName: 'Custom AI Engineering Programmes',
                desc: 'Bespoke deep-dives into proprietary vector knowledge bases (RAG), private fine-tuning (LoRA), or n8n automation.',
                target: 'Specialist AI development teams building customer-facing solutions.',
                image: ACADEMY_IMAGES.handsOnLab,
                imageAlt: 'Engineers in hands-on coding lab developing custom AI architectures',
                badge: 'Tailored Sprint',
                metric: 'Custom Production Rig',
                curriculumPoints: [
                  'Retrieval-Augmented Generation (RAG) with pgvector & ChromaDB',
                  'Parameter-Efficient Fine-Tuning (PEFT/LoRA) on custom domain text',
                  'Visual webhook pipelines with self-hosted n8n and Docker'
                ]
              }
            ].map((track, idx) => (
              <div 
                key={idx}
                className="bg-[#0A2421]/90 backdrop-blur-xl border border-[#064E46]/90 hover:border-[#27D7AC] rounded-2xl overflow-hidden flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.65)] transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 sm:h-52 overflow-hidden border-b border-[#064E46]">
                    <img
                      src={track.image}
                      alt={track.imageAlt}
                      className="w-full h-full object-cover brightness-[0.8] contrast-[1.12] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    {/* Emerald Dark Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2421] via-[#0A2421]/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071C1A]/70 via-transparent to-transparent pointer-events-none" />

                    {/* Track Badge & Number */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#071C1A]/90 border border-[#27D7AC]/40 text-[#27D7AC] font-mono text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-[0_0_12px_rgba(39,215,172,0.3)]">
                        Track 0{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#064E46]/85 border border-[#27D7AC]/30 text-[#B7F3D7] font-mono text-[10px] backdrop-blur-md">
                        {track.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 rounded bg-[#071C1A]/90 border border-[#27D7AC]/30 text-[#27D7AC] font-mono text-[10px] font-semibold backdrop-blur-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27D7AC] animate-pulse" />
                        {track.metric}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="font-display text-xl font-bold text-[#F3FAF7] group-hover:text-[#27D7AC] transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-xs text-[#C3E5D8] leading-relaxed">
                        {track.desc}
                      </p>
                    </div>

                    {/* Key Curriculum Focus Points */}
                    <div className="space-y-1.5 pt-2 border-t border-[#064E46]/60">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#27D7AC] block font-semibold">
                        Core Training Modules:
                      </span>
                      <ul className="space-y-1 text-xs text-[#B7F3D7]/80">
                        {track.curriculumPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#27D7AC] shrink-0 mt-0.5" />
                            <span className="text-[11px] leading-snug">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommended Audience Box */}
                    <div className="p-3 rounded-xl bg-[#071C1A]/80 border border-[#064E46] text-xs text-[#B7F3D7]/70">
                      <strong className="text-[#F3FAF7] block text-[11px] mb-0.5">Target Participants:</strong>
                      <span className="text-[11px] leading-snug">{track.target}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-[#064E46]/60 flex items-center gap-2 mt-4">
                  <button
                    onClick={() => {
                      if (!topics.includes(track.formTrackName)) {
                        setTopics([...topics, track.formTrackName]);
                      }
                      const formElem = document.getElementById('proposal-form');
                      if (formElem) {
                        formElem.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      topics.includes(track.formTrackName)
                        ? 'bg-[#064E46] text-[#B7F3D7] border border-[#27D7AC]/60'
                        : 'bg-[#27D7AC] hover:bg-[#38EFBF] text-[#04100F] shadow-[0_0_12px_rgba(39,215,172,0.35)]'
                    }`}
                  >
                    {topics.includes(track.formTrackName) ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#27D7AC]" />
                        <span>Included in Form</span>
                      </>
                    ) : (
                      <span>+ Include in Proposal</span>
                    )}
                  </button>

                  <button
                    onClick={() => openEnquiryModal({ type: 'corporate', programmeTitle: `Track: ${track.title}` })}
                    className="px-3 py-2 text-xs font-semibold text-[#F3FAF7] hover:text-[#27D7AC] bg-[#071C1A] border border-[#064E46] hover:border-[#27D7AC]/40 rounded transition-colors cursor-pointer"
                    title="Quick Scope Enquiry"
                  >
                    Enquire
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="mb-20 p-8 sm:p-12 bg-[#0A2421]/90 backdrop-blur-md border border-[#064E46]/80 rounded-2xl shadow-[0_0_35px_rgba(39,215,172,0.12)]">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#27D7AC]">
              Laboratory Methodology
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F3FAF7]">
              How We Customise Corporate Engagements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Phase 1',
                title: 'Needs Assessment',
                desc: 'Audit current workflows, data sensitivity tiers, technical literacy, and management expectations.'
              },
              {
                step: 'Phase 2',
                title: 'Curriculum Shaping',
                desc: 'Select relevant modules, prepare internal sandbox environments, and tailor examples to your industry.'
              },
              {
                step: 'Phase 3',
                title: 'Interactive Delivery',
                desc: 'Hands-on sprint delivery with 70% lab exercises, live debugging, and milestone feedback.'
              },
              {
                step: 'Phase 4',
                title: 'Capstone Review',
                desc: 'Evaluate participant capstones against production safety standards with concrete follow-up roadmaps.'
              }
            ].map((p, idx) => (
              <div key={idx} className="space-y-2 p-4 bg-[#071C1A]/90 border border-[#064E46] rounded-xl">
                <span className="font-mono text-xs font-bold text-[#27D7AC] block">{p.step}</span>
                <h3 className="font-display text-base font-bold text-[#F3FAF7]">{p.title}</h3>
                <p className="text-xs text-[#B7F3D7]/80 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proposal Submission Form */}
        <section id="proposal-form" className="bg-[#0A2421]/90 backdrop-blur-md border border-[#064E46]/80 rounded-2xl p-8 sm:p-12 shadow-[0_0_35px_rgba(39,215,172,0.15)]">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#27D7AC]">
              Direct Engagement
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#F3FAF7]">
              Request a Custom Training Proposal
            </h2>
            <p className="text-sm text-[#B7F3D7]/80 leading-relaxed">
              Complete the scope criteria below. An instructor will review your requirements and formulate a tailored syllabus within 24 hours.
            </p>
          </div>

          {successData ? (
            <div className="py-10 text-center space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#27D7AC]/15 border border-[#27D7AC]/40 text-[#27D7AC] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(39,215,172,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F3FAF7]">
                Proposal Request Received
              </h3>
              <p className="text-sm text-[#B7F3D7]/80 leading-relaxed">
                Thank you for your submission. Your enquiry has been persisted to our admissions registry. Our team will prepare a structured proposal based on your selections.
              </p>
              <div className="p-4 bg-[#071C1A] border border-[#064E46] rounded-xl flex items-center justify-between">
                <div className="text-left">
                  <span className="text-xs text-[#27D7AC]/70 block font-mono">Tracking Reference</span>
                  <span className="font-mono text-base font-bold text-[#27D7AC]">
                    {successData.referenceNumber}
                  </span>
                </div>
                <button
                  onClick={copyRef}
                  className="px-3 py-1.5 text-xs text-[#F3FAF7] hover:text-[#27D7AC] border border-[#064E46] bg-[#0A2421] rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#27D7AC]" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleProposalSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 bg-red-950/60 border border-red-500/40 text-red-200 rounded text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_url_check">Leave this field blank</label>
                <input
                  type="text"
                  id="website_url_check"
                  name="website_url_check"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Select Tracks */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#B7F3D7] mb-2">
                  Select Applicable Training Tracks (Select 1 or more)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {availableTracks.map((trk) => {
                    const isSelected = topics.includes(trk);
                    return (
                      <button
                        key={trk}
                        type="button"
                        onClick={() => toggleTopic(trk)}
                        className={`text-left p-3 rounded-xl text-xs transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-[#27D7AC] text-[#071C1A] border-[#27D7AC] font-bold shadow-[0_0_15px_rgba(39,215,172,0.4)]'
                            : 'bg-[#071C1A]/90 text-[#B7F3D7] border-[#064E46] hover:border-[#27D7AC]/50 hover:text-[#F3FAF7]'
                        }`}
                      >
                        {trk}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal & Company Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="corp-name" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Your Full Name <span className="text-[#27D7AC]">*</span>
                  </label>
                  <input
                    id="corp-name"
                    type="text"
                    required
                    maxLength={120}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sumanth Rao"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="corp-email" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Corporate Email <span className="text-[#27D7AC]">*</span>
                  </label>
                  <input
                    id="corp-email"
                    type="email"
                    required
                    maxLength={150}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="s.rao@enterprise.com"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="corp-org" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Organisation / Company Name
                  </label>
                  <input
                    id="corp-org"
                    type="text"
                    maxLength={150}
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder="e.g. Bluefin Technologies Ltd"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="corp-role" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Your Role / Job Title
                  </label>
                  <input
                    id="corp-role"
                    type="text"
                    maxLength={100}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Head of Talent Development / VP Tech"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>
              </div>

              {/* Cohort Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="corp-team" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Estimated Cohort Size
                  </label>
                  <select
                    id="corp-team"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
                  >
                    <option value="1–5 team members" className="bg-[#071C1A]">Small Pilot (1–5 members)</option>
                    <option value="6–15 team members" className="bg-[#071C1A]">Department Cohort (6–15 members)</option>
                    <option value="16–35 team members" className="bg-[#071C1A]">Division Training (16–35 members)</option>
                    <option value="40+ organisation-wide" className="bg-[#071C1A]">Enterprise Rollout (40+ members)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="corp-mode" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Delivery Format
                  </label>
                  <select
                    id="corp-mode"
                    value={preferredDeliveryMode}
                    onChange={(e) => setPreferredDeliveryMode(e.target.value as any)}
                    className="w-full px-3 py-2.5 text-xs bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
                  >
                    <option value="Flexible" className="bg-[#071C1A]">Flexible / Open to Recommendation</option>
                    <option value="Online" className="bg-[#071C1A]">Live Virtual Interactive</option>
                    <option value="Onsite" className="bg-[#071C1A]">Onsite at Our Corporate Office</option>
                    <option value="Hybrid" className="bg-[#071C1A]">Hybrid Delivery</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="corp-time" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Preferred Timeframe
                  </label>
                  <select
                    id="corp-time"
                    value={preferredTimeframe}
                    onChange={(e) => setPreferredTimeframe(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
                  >
                    <option value="Within 2 weeks (Immediate)" className="bg-[#071C1A]">Immediate (Next 1–2 weeks)</option>
                    <option value="Within the next 4–6 weeks" className="bg-[#071C1A]">Within 4–6 weeks</option>
                    <option value="Next quarter" className="bg-[#071C1A]">Next Quarter</option>
                    <option value="Planning / exploratory" className="bg-[#071C1A]">Exploratory</option>
                  </select>
                </div>
              </div>

              {/* Requirements & Challenges */}
              <div>
                <label htmlFor="corp-reqs" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                  Specific Learning Objectives, Workflows or Tech Stack
                </label>
                <textarea
                  id="corp-reqs"
                  rows={4}
                  maxLength={3000}
                  value={goalsAndRequirements}
                  onChange={(e) => setGoalsAndRequirements(e.target.value)}
                  placeholder="Detail the business context: e.g. upskilling 12 marketing copywriters to use structured LLM prompts, training 8 engineers on vector databases, or implementing compliance-friendly AI policies..."
                  className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none resize-none"
                />
              </div>

              {/* Consent */}
              <div className="space-y-2 pt-2 border-t border-[#064E46]/60">
                <label className="flex items-start gap-2.5 text-xs text-[#B7F3D7]/80 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded text-[#27D7AC] bg-[#071C1A] border-[#064E46] accent-[#27D7AC]"
                  />
                  <span>
                    I confirm that I am authorised to enquire on behalf of this organisation, and consent to being contacted regarding this training proposal. <span className="text-[#27D7AC]">*</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#071C1A] bg-gradient-to-r from-[#27D7AC] to-[#B7F3D7] hover:brightness-110 disabled:opacity-50 rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.35)]"
                >
                  {isSubmitting ? 'Formulating Proposal Scope...' : 'Submit Proposal Request'}
                </button>
              </div>
            </form>
          )}
        </section>

      </div>
    </div>
  );
}
