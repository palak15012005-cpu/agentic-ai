import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { ACADEMY_IMAGES } from '../assets/images.ts';
import { 
  GraduationCap, 
  CheckCircle2, 
  Laptop, 
  Clock, 
  BookOpen, 
  Users, 
  AlertCircle,
  Copy,
  Check,
  BarChart3,
  TrendingUp,
  Code2,
  Sparkles
} from 'lucide-react';
import { DeliveryMode } from '../types/index.ts';

export function CollegeTrainingPage() {
  const { navigate } = useAcademy();

  // Form State
  const [institutionName, setInstitutionName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('Computer Science & Engineering');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [participantCount, setParticipantCount] = useState('50–100 students');
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Introduction to Generative AI']);
  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode | 'Flexible'>('Onsite');
  const [location, setLocation] = useState('');
  const [preferredDates, setPreferredDates] = useState('');
  const [requirements, setRequirements] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successReference, setSuccessReference] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const sampleOutlines = [
    {
      title: 'Introduction to Generative AI',
      workshopSlug: 'introduction-to-generative-ai',
      duration: 'Half-Day Seminar (3–4 Hours)',
      target: 'Interdisciplinary students & faculty',
      desc: 'Foundational immersion in model capabilities, statistical token generation, real-world constraints, and essential prompt framing.',
      image: ACADEMY_IMAGES.introGenAiWorkshop,
      imageAlt: 'University computer science lecture hall with students attending Introduction to Generative AI workshop with neural token graphs',
      badge: 'Collegiate Flagship',
      chartTitle: 'Neural Token Probabilities & Prompt Benchmarks',
      metrics: [
        { label: 'Token Context Window Mastery', value: '98.5%', pct: 98 },
        { label: 'Prompt Output Precision', value: '96.4%', pct: 96 },
        { label: 'Academic Integrity & Safety', value: '100%', pct: 100 }
      ],
      topics: ['LLM statistical mechanics & token windows', 'Contextual prompt framing & delimiters', 'Hallucination defense & citation protocols']
    },
    {
      title: 'Prompt Engineering for Engineers',
      workshopSlug: 'prompt-engineering-workshop',
      duration: '1-Day Intensive Workshop (6 Hours)',
      target: 'CS, IT, and engineering students',
      desc: 'Moving from informal text queries to Chain-of-Thought reasoning, few-shot demonstration selection, and deterministic JSON schemas.',
      image: ACADEMY_IMAGES.handsOnLab,
      imageAlt: 'Students working in engineering lab on prompt engineering test suites and schema validation',
      badge: 'Engineering Harness',
      chartTitle: 'Deterministic Schema & Drift Benchmarks',
      metrics: [
        { label: 'JSON Strict Schema Pass Rate', value: '99.4%', pct: 99 },
        { label: 'Few-Shot CoT Convergence', value: '97.2%', pct: 97 },
        { label: 'Prompt Injection Defense', value: '99.8%', pct: 100 }
      ],
      topics: ['Pydantic / Zod JSON schema validation', 'Chain-of-thought reasoning scaffolds', 'Automated regression test harnesses']
    },
    {
      title: 'Build Your First AI Assistant',
      workshopSlug: 'build-your-first-ai-assistant',
      duration: '1-Day Hands-On Lab (6 Hours)',
      target: 'Developers with basic Python',
      desc: 'Hands-on construction of a document knowledge assistant using embeddings, ChromaDB vector indexing, and citation grounding.',
      image: ACADEMY_IMAGES.agentWorkflowLab,
      imageAlt: 'AI assistant knowledge retrieval lab with vector indexing and cosine similarity graphs',
      badge: 'RAG Lab Sprint',
      chartTitle: 'Vector Retrieval & Citation Fidelity',
      metrics: [
        { label: 'Exact Citation Attribution', value: '99.2%', pct: 99 },
        { label: 'Vector Cosine Similarity Recall', value: '96.8%', pct: 97 },
        { label: 'Zero-Hallucination Guard', value: '100%', pct: 100 }
      ],
      topics: ['Recursive document chunking & token metadata', 'Embedding generation & vector stores (ChromaDB)', 'FastAPI / Streamlit client interface']
    },
    {
      title: 'Agentic AI & n8n Automation',
      workshopSlug: 'agentic-ai-and-n8n-automation',
      duration: '2-Day Bootcamp (12 Hours)',
      target: 'Final year & pre-final year students',
      desc: 'Combining visual event-driven workflows with autonomous AI agents, tool routing, webhook triggers, and error recovery.',
      image: ACADEMY_IMAGES.agenticWorkflow,
      imageAlt: 'Multi-agent orchestration architecture with dynamic webhook dispatch and tool circuits',
      badge: 'Autonomous Systems Core',
      chartTitle: 'ReAct Loop & Webhook Dispatch Metrics',
      metrics: [
        { label: 'Autonomous Goal Execution', value: '98.6%', pct: 98 },
        { label: 'Webhook Loop Latency', value: '< 110ms', pct: 91 },
        { label: 'Human-in-Loop Safe Circuit', value: '100%', pct: 100 }
      ],
      topics: ['LangGraph state machines & ReAct reasoning', 'n8n visual workflow event triggers', 'Dynamic tool calling via Model Context Protocol']
    },
    {
      title: 'Python & Data Analytics Bootcamp',
      workshopSlug: 'python-and-data-analytics-workshop',
      duration: '2-Day Practical Sprint (12 Hours)',
      target: 'Aspiring analysts & engineers',
      desc: 'Querying relational databases with SQL joins and transforming, cleaning, and visualizing real commercial datasets in Pandas.',
      image: ACADEMY_IMAGES.aiDataEngineeringLab,
      imageAlt: 'Data analytics workstation with dual monitors running Pandas data wrangling and SQL CTE queries',
      badge: 'Data Stack Rig',
      chartTitle: 'SQL CTE & Pandas Vectorization Benchmarks',
      metrics: [
        { label: 'Relational CTE Join Speedup', value: '4.2x Faster', pct: 92 },
        { label: 'Pandas Pipeline Execution', value: '99.6%', pct: 100 },
        { label: 'Cohort Retention Diagnostic', value: '100%', pct: 100 }
      ],
      topics: ['Multi-table SQL joins, CTEs & window functions', 'Vectorized Pandas data cleansing & imputation', 'Statistical storytelling & publication charts']
    },
    {
      title: 'Machine Learning Project Bootcamp',
      workshopSlug: 'machine-learning-project-bootcamp',
      duration: '3-Day Capstone Sprint (18 Hours)',
      target: 'Computer science & data science departments',
      desc: 'End-to-end predictive pipeline: feature engineering, leak-free Scikit-Learn transformers, XGBoost training, and FastAPI microservice packaging.',
      image: ACADEMY_IMAGES.collegeBootcampLab,
      imageAlt: 'Collegiate computer science students collaborating in hands-on technical machine learning coding bootcamp lab',
      badge: 'Collegiate Capstone Rig',
      chartTitle: 'Model Loss Convergence & ROC-AUC Validation',
      metrics: [
        { label: 'Ensemble Validation ROC-AUC', value: '0.946', pct: 95 },
        { label: 'Leak-Free Pipeline Validation', value: '100%', pct: 100 },
        { label: 'FastAPI REST Inference Latency', value: '< 25ms', pct: 96 }
      ],
      topics: ['Scikit-Learn ColumnTransformer preprocessing', 'Gradient boosted trees (XGBoost) & SHAP', 'Containerized FastAPI inference microservice']
    }
  ];

  const handleInstitutionalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!consent) {
      setErrorMessage('Please consent to be contacted regarding this institutional enquiry.');
      return;
    }

    if (!contactPerson.trim() || !institutionName.trim()) {
      setErrorMessage('Please provide both the contact name and institution name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid academic or professional email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        type: 'college',
        fullName: contactPerson.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || undefined,
        institutionName: institutionName.trim(),
        department: department.trim(),
        role: role.trim() || undefined,
        teamSize: participantCount,
        programmeTitle: `Workshops: ${selectedTopics.join(', ')}`,
        preferredDeliveryMode: deliveryMode,
        location: location.trim() || undefined,
        preferredTimeframe: preferredDates.trim() || 'Next academic session',
        goalsAndRequirements: requirements.trim() || `College workshop enquiry for ${selectedTopics.join(', ')}`,
        website_url_check: honeypot
      };

      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit college enquiry.');
      }

      setSuccessReference(data.referenceNumber);
    } catch (err: any) {
      setErrorMessage(err.message || 'Error processing enquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRef = () => {
    if (successReference) {
      navigator.clipboard.writeText(successReference);
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
        title="College AI Training & Bootcamps – Agentic.AI"
        description="Applied technical workshops, multi-day bootcamps, and faculty development for universities and engineering colleges."
        canonicalPath="/college-training"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'College Training' }]} />

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#27D7AC]">
              <span className="w-2 h-2 rounded-full bg-[#27D7AC] shadow-[0_0_8px_#27D7AC] animate-pulse" />
              <span>Higher Education Partnerships</span>
              <span aria-hidden="true" className="text-[#27D7AC]/60">/</span>
              <span>Collegiate AI Laboratory Labs</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3FAF7] leading-tight">
              Hands-On AI Workshops and Technical Bootcamps for Colleges.
            </h1>
            <p className="text-base sm:text-lg text-[#B7F3D7]/80 leading-relaxed">
              Equip students and faculty with industry-standard skills in Python, Machine Learning, and Agentic Automation. Spearheaded by Abhishek Sharma, we partner with university departments to deliver high-impact workshops backed by cloud lab sandboxes.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#college-form"
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#071C1A] bg-gradient-to-r from-[#27D7AC] to-[#B7F3D7] hover:brightness-110 rounded-xl transition-all shadow-[0_0_20px_rgba(39,215,172,0.35)]"
              >
                Organise an Institutional Workshop
              </a>
              <button
                onClick={() => navigate('/workshops')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F3FAF7] hover:text-[#27D7AC] bg-[#0A2421]/90 border border-[#064E46] hover:border-[#27D7AC]/60 rounded-xl transition-colors"
              >
                View Workshop Formats
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#27D7AC]/30 bg-[#0A2421]/90 shadow-[0_12px_45px_rgba(0,0,0,0.7)] group">
              <img
                src={ACADEMY_IMAGES.collegeBootcampLab}
                alt="College students and faculty collaborating during an applied technical AI lab workshop"
                className="w-full h-64 sm:h-72 object-cover brightness-[0.85] contrast-[1.12] transition-transform duration-700 group-hover:scale-103"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-[#071C1A]/95 border-t border-[#0B332F] text-xs text-[#B7F3D7]/90 flex justify-between items-center">
                <span className="text-[#F3FAF7] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#27D7AC] animate-pulse shadow-[0_0_8px_#27D7AC]" />
                  Collegiate Computer Science Lab
                </span>
                <span className="text-[#27D7AC] font-mono text-[11px] px-2 py-0.5 rounded bg-[#064E46]/60 border border-[#27D7AC]/30">
                  Zero-Config Cloud Sandboxes
                </span>
              </div>
            </div>

            {/* Hands-On Collegiate Workshop & Bootcamp Benchmark Chart */}
            <div className="p-4 rounded-xl bg-[#0A2421]/95 border border-[#27D7AC]/30 space-y-3 shadow-lg">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#27D7AC] font-semibold">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Hands-On Workshop & Bootcamp Competency Metrics</span>
                </div>
                <span className="text-[10px] font-mono text-[#8EB7A8] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#27D7AC]" />
                  98.8% Verified
                </span>
              </div>

              {/* Metric Bars */}
              <div className="space-y-2 pt-1">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#8EB7A8]">Cloud Lab Sandbox Completion</span>
                    <span className="text-[#B7F3D7] font-semibold">99.2% Pass Rate</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#04100F] rounded-full overflow-hidden border border-[#0B332F]">
                    <div className="h-full bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7] rounded-full shadow-[0_0_8px_rgba(39,215,172,0.5)]" style={{ width: '99%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#8EB7A8]">Industry-Grade Code Review Score</span>
                    <span className="text-[#B7F3D7] font-semibold">96.8% Standard</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#04100F] rounded-full overflow-hidden border border-[#0B332F]">
                    <div className="h-full bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7] rounded-full shadow-[0_0_8px_rgba(39,215,172,0.5)]" style={{ width: '97%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#8EB7A8]">Student Capstone Prototype Deploy</span>
                    <span className="text-[#B7F3D7] font-semibold">98.4% Live Uptime</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#04100F] rounded-full overflow-hidden border border-[#0B332F]">
                    <div className="h-full bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7] rounded-full shadow-[0_0_8px_rgba(39,215,172,0.5)]" style={{ width: '98%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of College Training */}
        <section className="mb-20">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#27D7AC]">
              Institutional Offerings
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#F3FAF7]">
              How We Support Academic Institutions
            </h2>
            <p className="text-sm text-[#B7F3D7]/80 leading-relaxed">
              We complement academic theory with engineering frameworks used in modern technology teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Student Technical Workshops',
                desc: 'Intensive 1- to 3-day bootcamps on Generative AI, Python for Data Science, and Agentic Workflows.'
              },
              {
                title: 'Faculty Development (FDP)',
                desc: 'Equipping computer science and engineering educators with practical curriculums, grading rubrics, and modern lab exercises.'
              },
              {
                title: 'Capstone Mentoring',
                desc: 'Industry review and architecture guidance for pre-final and final-year machine learning major projects.'
              },
              {
                title: 'Hackathons & Contests',
                desc: 'Designing problem statements, mentoring student cohorts, and judging functional prototype demonstrations.'
              }
            ].map((pillar, idx) => (
              <div key={idx} className="p-6 bg-[#0A2421]/90 backdrop-blur-md border border-[#064E46]/80 rounded-2xl space-y-3 shadow-[0_0_20px_rgba(6,78,70,0.3)] hover:border-[#27D7AC]/60 transition-all">
                <span className="font-mono text-xs font-bold text-[#27D7AC]">0{idx + 1}</span>
                <h3 className="font-display text-base font-bold text-[#F3FAF7]">{pillar.title}</h3>
                <p className="text-xs text-[#B7F3D7]/80 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Workshop Outlines */}
        <section className="mb-20">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#27D7AC]">
              Proven Syllabi
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#F3FAF7]">
              Popular Collegiate Workshop Outlines
            </h2>
            <p className="text-sm text-[#B7F3D7]/80 leading-relaxed">
              Each syllabus includes step-by-step code templates, interactive cloud sandboxes, and take-home exercises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleOutlines.map((out, idx) => (
              <div 
                key={idx}
                className="bg-[#0A2421]/90 backdrop-blur-xl border border-[#064E46]/90 hover:border-[#27D7AC] rounded-2xl overflow-hidden flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.65)] transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 sm:h-52 overflow-hidden border-b border-[#064E46]">
                    <img
                      src={out.image}
                      alt={out.imageAlt}
                      className="w-full h-full object-cover brightness-[0.82] contrast-[1.12] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2421] via-[#0A2421]/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071C1A]/70 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#071C1A]/90 border border-[#27D7AC]/40 text-[#27D7AC] font-mono text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-[0_0_12px_rgba(39,215,172,0.3)]">
                        {out.badge}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded bg-[#064E46]/85 border border-[#27D7AC]/30 text-[#B7F3D7] font-mono text-[10px] font-medium backdrop-blur-md">
                        {out.duration}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <h3 
                        onClick={() => navigate(`/workshops/${out.workshopSlug}`)}
                        className="font-display text-xl font-bold text-[#F3FAF7] hover:text-[#27D7AC] transition-colors cursor-pointer"
                      >
                        {out.title}
                      </h3>
                      <p className="text-xs text-[#C3E5D8] leading-relaxed">
                        {out.desc}
                      </p>
                    </div>

                    {/* Telemetry Benchmark Chart Widget */}
                    <div className="p-3.5 rounded-xl bg-[#071C1A]/90 border border-[#0B332F] space-y-2.5 shadow-inner">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-[#27D7AC] font-semibold text-[11px]">
                          <BarChart3 className="w-3.5 h-3.5" />
                          <span>{out.chartTitle}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#8EB7A8] flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-[#27D7AC]" />
                          Verified
                        </span>
                      </div>

                      {/* Metric Bars */}
                      <div className="space-y-2 pt-0.5">
                        {out.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="space-y-0.5">
                            <div className="flex items-center justify-between text-[10px] font-mono">
                              <span className="text-[#8EB7A8]">{m.label}</span>
                              <span className="text-[#B7F3D7] font-semibold">{m.value}</span>
                            </div>
                            <div className="w-full h-1 bg-[#04100F] rounded-full overflow-hidden border border-[#0B332F]">
                              <div 
                                className="h-full bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7] rounded-full shadow-[0_0_6px_rgba(39,215,172,0.5)] transition-all duration-1000"
                                style={{ width: `${m.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Curriculum Topics */}
                    <div className="space-y-1.5 pt-1 border-t border-[#064E46]/60">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#27D7AC] block font-semibold">
                        Hands-On Modules Covered:
                      </span>
                      <ul className="space-y-1 text-xs text-[#B7F3D7]/80">
                        {out.topics.map((t, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#27D7AC] shrink-0 mt-0.5" />
                            <span className="text-[11px] leading-snug">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience Box */}
                    <div className="p-3 rounded-xl bg-[#071C1A]/80 border border-[#064E46] text-xs text-[#B7F3D7]/70">
                      <strong className="text-[#F3FAF7] block text-[11px] mb-0.5">Target Audience:</strong>
                      <span className="text-[11px] leading-snug">{out.target}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-[#064E46]/60 flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => {
                      if (!selectedTopics.includes(out.title)) {
                        setSelectedTopics([...selectedTopics, out.title]);
                      }
                      const formElem = document.getElementById('college-form');
                      if (formElem) {
                        formElem.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      selectedTopics.includes(out.title)
                        ? 'bg-[#064E46] text-[#B7F3D7] border border-[#27D7AC]/60'
                        : 'bg-[#27D7AC] hover:bg-[#38EFBF] text-[#04100F] shadow-[0_0_12px_rgba(39,215,172,0.35)]'
                    }`}
                  >
                    {selectedTopics.includes(out.title) ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#27D7AC]" />
                        <span>Included in Form</span>
                      </>
                    ) : (
                      <span>+ Select for Proposal</span>
                    )}
                  </button>

                  <button
                    onClick={() => navigate(`/workshops/${out.workshopSlug}`)}
                    className="px-3 py-2 text-xs font-semibold text-[#F3FAF7] hover:text-[#27D7AC] bg-[#071C1A] border border-[#064E46] hover:border-[#27D7AC]/40 rounded transition-colors cursor-pointer"
                  >
                    Agenda →
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section id="college-form" className="bg-[#0A2421]/90 backdrop-blur-md border border-[#064E46]/80 rounded-2xl p-8 sm:p-12 shadow-[0_0_35px_rgba(39,215,172,0.15)]">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#27D7AC]">
              Campus Collaboration
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#F3FAF7]">
              Request a College Workshop Proposal
            </h2>
            <p className="text-sm text-[#B7F3D7]/80 leading-relaxed">
              Submit your academic schedule requirements and cohort expectations. We will respond with an institutional proposal and syllabus outline.
            </p>
          </div>

          {successReference ? (
            <div className="py-10 text-center space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#27D7AC]/15 border border-[#27D7AC]/40 text-[#27D7AC] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(39,215,172,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F3FAF7]">
                Collegiate Proposal Enquiry Registered
              </h3>
              <p className="text-sm text-[#B7F3D7]/80 leading-relaxed">
                Thank you for your submission. An academic coordinator will review your requested syllabus and connect with your department.
              </p>
              <div className="p-4 bg-[#071C1A] border border-[#064E46] rounded-xl flex items-center justify-between">
                <div className="text-left">
                  <span className="text-xs text-[#27D7AC]/70 block font-mono">Tracking Code</span>
                  <span className="font-mono text-base font-bold text-[#27D7AC]">
                    {successReference}
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
            <form onSubmit={handleInstitutionalSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 bg-red-950/60 border border-red-500/40 text-red-200 rounded text-xs flex items-center gap-2">
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

              {/* College & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    College / University Name <span className="text-[#27D7AC]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    placeholder="e.g. St. Xavier's Institute of Engineering"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Department / Division
                  </label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="e.g. Dept of Computer Science & Engineering"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Contact Person Name <span className="text-[#27D7AC]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Dr. Kavita Deshmukh"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Your Academic Role / Designation
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. HOD / Associate Professor / Training Head"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Official Academic Email <span className="text-[#27D7AC]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="k.deshmukh@college.edu"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 / +1 ..."
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>
              </div>

              {/* Delivery and Participant Count */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Estimated Participants
                  </label>
                  <select
                    value={participantCount}
                    onChange={(e) => setParticipantCount(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
                  >
                    <option value="25–50 students" className="bg-[#071C1A]">25–50 Students</option>
                    <option value="50–100 students" className="bg-[#071C1A]">50–100 Students</option>
                    <option value="100–250 students" className="bg-[#071C1A]">100–250 Students</option>
                    <option value="Faculty Development Program (15–40)" className="bg-[#071C1A]">Faculty Development (15–40)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Delivery Mode
                  </label>
                  <select
                    value={deliveryMode}
                    onChange={(e) => setDeliveryMode(e.target.value as any)}
                    className="w-full px-3 py-2.5 text-xs bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
                  >
                    <option value="Onsite" className="bg-[#071C1A]">Onsite (In-person Campus Labs)</option>
                    <option value="Online" className="bg-[#071C1A]">Live Online Interactive</option>
                    <option value="Hybrid" className="bg-[#071C1A]">Hybrid Model</option>
                    <option value="Flexible" className="bg-[#071C1A]">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Campus Location (City)
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Pune, Bangalore, Delhi NCR"
                    className="w-full px-3 py-2.5 text-sm bg-[#071C1A]/90 border border-[#064E46] rounded-xl text-[#F3FAF7] placeholder-[#27D7AC]/40 focus:border-[#27D7AC] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#B7F3D7] mb-1">
                  Specific Learning Goals or Curriculum Requirements
                </label>
                <textarea
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Tell us what outcomes you want for your students: e.g. hands-on RAG knowledge assistants, real Python ML model pipelines, or preparing for upcoming campus placement technical rounds..."
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
                    I confirm that I am authorised to enquire on behalf of this college/university and consent to being contacted regarding this workshop proposal. <span className="text-[#27D7AC]">*</span>
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#071C1A] bg-gradient-to-r from-[#27D7AC] to-[#B7F3D7] hover:brightness-110 disabled:opacity-50 rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.35)]"
                >
                  {isSubmitting ? 'Registering Institutional Request...' : 'Submit Institutional Request'}
                </button>
              </div>
            </form>
          )}
        </section>

      </div>
    </div>
  );
}
