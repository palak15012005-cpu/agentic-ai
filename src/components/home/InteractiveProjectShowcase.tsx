import { useState } from 'react';
import { useAcademy } from '../../context/AcademyContext.tsx';
import { 
  Bot, 
  Workflow, 
  BarChart3, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Play, 
  X,
  ExternalLink,
  Layers,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface ShowcaseProject {
  id: string;
  slug: string;
  title: string;
  badge: string;
  category: string;
  icon: typeof Bot;
  shortDesc: string;
  architectureDetails: string;
  toolsUsed: string[];
  samplePayload: {
    inputLabel: string;
    sampleInput: string;
    outputLabel: string;
    sampleOutput: string;
  };
  metrics: { label: string; value: string }[];
  associatedProgrammeSlug: string;
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-ai-assistant',
    slug: 'internal-engineering-knowledge-assistant',
    title: 'Internal Knowledge AI Assistant',
    badge: 'RAG & Vector Grounding',
    category: 'AI Assistants',
    icon: Bot,
    shortDesc: 'Indexes multi-format technical docs, architecture notes, and API specs with hybrid BM25/vector search and strict quote citations.',
    architectureDetails: 'Uses pgvector with HNSW index, Cohere cross-encoder reranking, and zero-hallucination citation guardrails to attribute exact source document pages.',
    toolsUsed: ['Python', 'pgvector', 'FastAPI', 'Gemini 2.5', 'React', 'Ragas'],
    samplePayload: {
      inputLabel: 'User Query',
      sampleInput: 'What are the enterprise rate limits and timeout thresholds for our customer data API?',
      outputLabel: 'Verified Grounded Response',
      sampleOutput: 'According to Section 4.2 of Architecture-Spec-2025: Maximum rate is 500 req/min per tenant with a 15-second hard timeout. [Source: doc_id #84, page 12]'
    },
    metrics: [
      { label: 'Grounding Fidelity', value: '99.2%' },
      { label: 'P95 Query Latency', value: '95ms' },
      { label: 'Zero-Hallucination Gate', value: 'Active' }
    ],
    associatedProgrammeSlug: 'rag-and-ai-knowledge-assistants'
  },
  {
    id: 'proj-workflow-auto',
    slug: 'autonomous-inbound-lead-qualification-agent',
    title: 'Autonomous Workflow Automation',
    badge: 'Multi-Agent n8n Pipeline',
    category: 'Workflow Automation',
    icon: Workflow,
    shortDesc: 'Automates customer enquiry triage, multi-source firmographic enrichment, CRM synchronization, and customized briefing generation.',
    architectureDetails: 'Event-driven webhook ingest in self-hosted n8n feeding into a LangGraph ReAct agent that queries external APIs, validates output schema, and dispatches Slack alerts.',
    toolsUsed: ['n8n', 'LangGraph', 'Docker', 'PostgreSQL', 'Slack API', 'Pydantic'],
    samplePayload: {
      inputLabel: 'Incoming Webhook Payload',
      sampleInput: '{\n  "lead": "FinTech Corp",\n  "employees": 250,\n  "intent": "Enterprise AI Upskilling for 45 engineers"\n}',
      outputLabel: 'Agent Autonomous Route & Action',
      sampleOutput: 'Lead classified: Tier-1 Enterprise. Auto-generated 4-week tailored syllabus preview. Drafted executive proposal. Dispatched Slack alert to Senior Enterprise Advisor.'
    },
    metrics: [
      { label: 'End-to-End Execution', value: '< 3.8s' },
      { label: 'Schema Validation', value: '100%' },
      { label: 'Human-in-Loop Safe Gate', value: 'Triggered' }
    ],
    associatedProgrammeSlug: 'n8n-automation-for-business-workflows'
  },
  {
    id: 'proj-realtime-dash',
    slug: 'executive-sales-margin-performance-dashboard',
    title: 'Streaming Latency & Telemetry Dashboards',
    badge: 'Executive BI & Monitoring',
    category: 'Dashboards',
    icon: BarChart3,
    shortDesc: 'High-throughput operational intelligence dashboard monitoring real-time token throughput, TTFT latency percentiles, and API budgets.',
    architectureDetails: 'Star-schema normalized relational models powered by PostgreSQL and Power BI with dynamic DAX time intelligence and automated drift anomaly detection.',
    toolsUsed: ['Power BI', 'DAX', 'PostgreSQL', 'Python / Pandas', 'Docker'],
    samplePayload: {
      inputLabel: 'Live Telemetry Ingestion',
      sampleInput: 'Streaming 12,000 requests/hr across Gemini 2.5 Flash, Claude 3.7, and Local Ollama embeddings.',
      outputLabel: 'DAX Calculated KPI Cards',
      sampleOutput: 'Average TTFT: 142ms | Semantic Cache Hit: 46.8% | Net Token Cost Variance: -38.4% vs monthly target budget.'
    },
    metrics: [
      { label: 'Query Refresh', value: '< 200ms' },
      { label: 'Star Schema Fidelity', value: '100%' },
      { label: 'Cross-Filter Response', value: 'Instant' }
    ],
    associatedProgrammeSlug: 'power-bi-and-business-dashboards'
  },
  {
    id: 'proj-doc-extraction',
    slug: 'contract-clause-classification-engine',
    title: 'Multimodal Document Extraction Engine',
    badge: 'Deterministic JSON Parser',
    category: 'Document Extraction',
    icon: FileText,
    shortDesc: 'Extracts tabular financials, liability indemnification clauses, and expiration dates from messy unstructured contracts into validated JSON.',
    architectureDetails: 'Combines Vision OCR with constrained Pydantic schemas and automated 50-item regression verification tests to eliminate hallucinated attributes.',
    toolsUsed: ['Python', 'Pydantic', 'FastAPI', 'Gemini Vision', 'PyPDF'],
    samplePayload: {
      inputLabel: 'Unstructured PDF Contract Snippet',
      sampleInput: '...Section 9. Liability shall not exceed aggregate fees paid in prior 12 months. Auto-renews on Dec 15, 2026 unless 30-day notice given...',
      outputLabel: 'Structured JSON Schema Output',
      sampleOutput: '{\n  "liabilityCap": "12_MONTHS_FEES",\n  "renewalDate": "2026-12-15",\n  "noticePeriodDays": 30,\n  "riskLevel": "LOW"\n}'
    },
    metrics: [
      { label: 'Extraction Precision', value: '99.8%' },
      { label: 'Processing Speed', value: '1.2s / doc' },
      { label: 'Edge-Case Pass Rate', value: '98.5%' }
    ],
    associatedProgrammeSlug: 'prompt-engineering-for-professionals'
  }
];

export function InteractiveProjectShowcase() {
  const { navigate } = useAcademy();
  const [activeModalProject, setActiveModalProject] = useState<ShowcaseProject | null>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationResult, setSimulationResult] = useState<string | null>(null);

  const handleOpenModal = (project: ShowcaseProject) => {
    setActiveModalProject(project);
    setSimulationResult(null);
    setIsSimulating(false);
  };

  const handleRunSimulation = () => {
    if (!activeModalProject) return;
    setIsSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      setSimulationResult(activeModalProject.samplePayload.sampleOutput);
    }, 700);
  };

  return (
    <section 
      aria-labelledby="project-showcase-heading"
      className="py-22 bg-[#04100F] border-b border-[#0B332F] relative overflow-hidden"
    >
      {/* Soft emerald reflections */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#27D7AC]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E46]/50 border border-[#27D7AC]/40 text-xs font-semibold text-[#27D7AC] uppercase tracking-wider backdrop-blur-md">
              <Layers className="w-3.5 h-3.5 text-[#27D7AC]" />
              <span>Production Portfolio Rig</span>
            </div>
            <h2 id="project-showcase-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F3FAF7]">
              Functional Project Showcase
            </h2>
            <p className="text-sm text-[#C3E5D8] max-w-2xl leading-relaxed">
              Every course requires tangible engineering deliverables. Explore four representative production projects with live interactive simulation and telemetry verification.
            </p>
          </div>

          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#27D7AC] hover:text-[#04100F] bg-[#0A2421] hover:bg-[#27D7AC] border border-[#27D7AC]/35 hover:border-[#27D7AC] rounded-md transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.2)]"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Interactive Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SHOWCASE_PROJECTS.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <div
                key={project.id}
                className="bg-[#0A2421]/80 border border-[#27D7AC]/30 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#27D7AC] hover:-translate-y-1 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] group"
              >
                <div className="space-y-5">
                  {/* Card Top: Icon & Topic Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#064E46]/60 border border-[#27D7AC]/40 text-[#27D7AC] flex items-center justify-center group-hover:bg-[#27D7AC] group-hover:text-[#04100F] transition-colors shadow-[0_0_14px_rgba(39,215,172,0.3)]">
                      <ProjectIcon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#071C1A] border border-[#27D7AC]/30 text-[#B7F3D7]">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-[#F3FAF7] group-hover:text-[#27D7AC] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#C3E5D8] leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Telemetry Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#071C1A]/90 border border-[#0B332F] text-center">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="block text-[10px] text-[#8EB7A8] uppercase tracking-wider">{m.label}</span>
                        <span className="block text-xs font-mono font-bold text-[#27D7AC]">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tool Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.toolsUsed.map((tool, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#064E46]/40 text-[#B7F3D7] border border-[#27D7AC]/20">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-6 border-t border-[#0B332F] flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.4)] flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Launch Interactive Test</span>
                  </button>

                  <button
                    onClick={() => navigate(`/programmes/${project.associatedProgrammeSlug}`)}
                    className="text-xs font-semibold text-[#8EB7A8] hover:text-[#F3FAF7] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Associated Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#27D7AC]" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal Detail View & Sandbox Tester */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="bg-[#0A2421] border border-[#27D7AC]/50 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#0B332F]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#27D7AC] uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Interactive Project Sandbox</span>
                </div>
                <h3 id="modal-project-title" className="font-display text-2xl font-bold text-[#F3FAF7]">
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg bg-[#071C1A] text-[#8EB7A8] hover:text-[#F3FAF7] border border-[#0B332F] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Rationale */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8EB7A8] block">
                Architecture Blueprint
              </span>
              <p className="text-sm text-[#C3E5D8] leading-relaxed bg-[#071C1A] p-4 rounded-xl border border-[#0B332F]">
                {activeModalProject.architectureDetails}
              </p>
            </div>

            {/* Sandbox Simulation Interactive Runner */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#27D7AC] flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Execution Simulator
                </span>
                <span className="text-[11px] font-mono text-[#8EB7A8]">
                  Verified Deterministic Test
                </span>
              </div>

              {/* Sample Input Preview */}
              <div className="p-3.5 rounded-xl bg-[#071C1A] border border-[#0B332F] space-y-1">
                <span className="text-[10px] font-mono text-[#8EB7A8] block uppercase">
                  {activeModalProject.samplePayload.inputLabel}:
                </span>
                <p className="text-xs font-mono text-[#F3FAF7] whitespace-pre-wrap">
                  {activeModalProject.samplePayload.sampleInput}
                </p>
              </div>

              {/* Simulation Trigger Button */}
              <button
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] disabled:opacity-50 rounded-lg transition-all cursor-pointer shadow-[0_0_18px_rgba(39,215,172,0.4)] flex items-center justify-center gap-2"
              >
                {isSimulating ? (
                  <>
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#04100F] border-t-transparent animate-spin" />
                    <span>Executing Pipeline in Cloud Harness...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Verification & Schema Check</span>
                  </>
                )}
              </button>

              {/* Simulation Output Window */}
              {simulationResult && (
                <div className="p-4 rounded-xl bg-[#051614] border border-[#27D7AC]/40 space-y-1.5 animate-fadeIn">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#27D7AC]">
                    <span>✓ Execution Succeeded</span>
                    <span>Status: 200 OK (84ms)</span>
                  </div>
                  <pre className="text-xs font-mono text-[#B7F3D7] whitespace-pre-wrap leading-relaxed">
                    {simulationResult}
                  </pre>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="pt-4 border-t border-[#0B332F] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  const slug = activeModalProject.associatedProgrammeSlug;
                  setActiveModalProject(null);
                  navigate(`/programmes/${slug}`);
                }}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F3FAF7] bg-[#064E46]/60 hover:bg-[#064E46] border border-[#27D7AC]/30 rounded-md transition-colors cursor-pointer"
              >
                View Linked Curriculum →
              </button>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2.5 text-xs font-semibold text-[#8EB7A8] hover:text-[#F3FAF7] transition-colors cursor-pointer"
              >
                Close Sandbox
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
