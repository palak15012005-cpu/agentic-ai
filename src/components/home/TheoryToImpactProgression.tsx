import { useState } from 'react';
import { ACADEMY_IMAGES } from '../../assets/images.ts';
import { useAcademy } from '../../context/AcademyContext.tsx';
import { 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Maximize2, 
  X, 
  Terminal, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

export interface ProgressionStage {
  id: string;
  step: string;
  title: string;
  kicker: string;
  phaseName: string;
  photoUrl: string;
  photoAlt: string;
  description: string;
  keyCompetencies: string[];
  deliverable: {
    title: string;
    techStack: string[];
    summary: string;
  };
  impactMetric: {
    metric: string;
    label: string;
  };
  curriculumSlug?: string;
}

export const PROGRESSION_STAGES: ProgressionStage[] = [
  {
    id: 'stage-1',
    step: '01',
    title: 'Theoretical Foundations & Latent Space Dynamics',
    kicker: 'Phase 1 · Foundations',
    phaseName: 'Theory & Mechanics',
    photoUrl: ACADEMY_IMAGES.progression.stage1Theory,
    photoAlt: 'AI researcher analyzing multidimensional neural network attention tensors and vector mathematical graphs on dark mode holographic monitors',
    description: 'Demystify deep learning mathematics, softmax attention matrices, high-dimensional vector embeddings, and probabilistic token entropy without hand-waving abstractions.',
    keyCompetencies: [
      'Multi-head self-attention Q, K, V tensor operations',
      'High-dimensional vector embeddings & cosine distance geometry',
      'Context window tokenization mechanics & KV-cache memory limits',
      'Probabilistic sampling: temperature, top-p, and frequency penalties'
    ],
    deliverable: {
      title: 'Vector Attention Heatmap & Latent Space Visualizer',
      techStack: ['PyTorch', 'NumPy', 'HuggingFace', 'Matplotlib'],
      summary: 'A standalone mathematical workbench reproducing scaled dot-product attention calculations and embedding cluster projections.'
    },
    impactMetric: {
      metric: '100% Math Clarity',
      label: 'Eliminates black-box guesswork before writing production code'
    },
    curriculumSlug: 'generative-ai-foundations'
  },
  {
    id: 'stage-2',
    step: '02',
    title: 'Systematic Prompt Engineering & Context Caching',
    kicker: 'Phase 2 · Controlled Lab',
    phaseName: 'Guided Practice',
    photoUrl: ACADEMY_IMAGES.progression.stage2Practice,
    photoAlt: 'Software engineer in an advanced AI development workstation testing prompt engineering parameters and token context windows',
    description: 'Transition from ad-hoc chatting to rigorous, deterministic prompt engineering with typed schema extraction, variable isolation, and context caching strategies.',
    keyCompetencies: [
      'Few-shot in-context learning with calibrated exemplar distribution',
      'Deterministic JSON/Pydantic schema validation & structural repair',
      'System prompt isolation & negative instruction constraints',
      'Prompt caching architectures for 80%+ latency & API cost reductions'
    ],
    deliverable: {
      title: 'Pydantic-Validated LLM Ingestion Pipeline',
      techStack: ['Instructor', 'Pydantic v2', 'Gemini SDK', 'Tiktoken'],
      summary: 'Production parser converting raw unformatted enterprise documents into strictly typed, guaranteed-valid database records.'
    },
    impactMetric: {
      metric: '99.4% Parsing Rate',
      label: 'Zero JSON format breaks across 10,000+ synthetic documents'
    },
    curriculumSlug: 'prompt-engineering-masterclass'
  },
  {
    id: 'stage-3',
    step: '03',
    title: 'Autonomous Agent Orchestration & Tool Harnessing',
    kicker: 'Phase 3 · Architecture',
    phaseName: 'Autonomous Systems',
    photoUrl: ACADEMY_IMAGES.progression.stage3Build,
    photoAlt: 'AI systems architect building an autonomous multi-agent orchestration framework on an ultrawide dark display',
    description: 'Engineer multi-agent cognitive loops using stateful graph architectures, dynamic function calling, external database lookups, and MCP protocols.',
    keyCompetencies: [
      'Stateful graph state machines with conditional cyclic branching',
      'Dynamic tool execution: SQL synthesis, REST APIs & web scraping',
      'Model Context Protocol (MCP) server & client integration',
      'Multi-agent task delegation: Planner, Executor & Critic topologies'
    ],
    deliverable: {
      title: 'Multi-Agent Autonomous Research & Document Synthesizer',
      techStack: ['LangGraph', 'FastAPI', 'MCP Protocol', 'pgvector'],
      summary: 'Collaborative 3-agent collective executing live web queries, SQL validation, and drafting publication-ready reports.'
    },
    impactMetric: {
      metric: '8.4x Speedup',
      label: 'Reduces multi-step analytical research workflows from 3 hours to 2 minutes'
    },
    curriculumSlug: 'agentic-ai-and-workflow-automation'
  },
  {
    id: 'stage-4',
    step: '04',
    title: 'Empirical Evaluation, Guardrails & Security Audits',
    kicker: 'Phase 4 · Lab Auditing',
    phaseName: 'Evaluation & Safety',
    photoUrl: ACADEMY_IMAGES.progression.stage4Review,
    photoAlt: 'AI safety and performance evaluation suite on curved monitors showing automated benchmark curves and red-teaming security matrix',
    description: 'Replace subjective vibes with automated quantitative evaluation harnesses, hallucination detectors, adversarial red-teaming, and defensive security firewalls.',
    keyCompetencies: [
      'Automated LLM-as-a-judge benchmarking & G-Eval frameworks',
      'RAG triad validation: Context relevance, Groundedness & Answer faithfulness',
      'Adversarial red-teaming: prompt injection, jailbreaks & data exfiltration',
      'Real-time defensive guardrails & semantic moderation barriers'
    ],
    deliverable: {
      title: 'Automated CI/CD Evaluation Harness & Security Matrix',
      techStack: ['DeepEval', 'Ragas', 'NeMo Guardrails', 'pytest'],
      summary: 'Regression testbed testing every model prompt update against 150 adversarial test cases before CI/CD release.'
    },
    impactMetric: {
      metric: '<0.1% Hallucination',
      label: 'Verified accuracy across enterprise knowledge retrieval bases'
    },
    curriculumSlug: 'eval-benchmarks-and-ai-safety'
  },
  {
    id: 'stage-5',
    step: '05',
    title: 'Low-Latency Serving & Enterprise Production Impact',
    kicker: 'Phase 5 · Deployment',
    phaseName: 'Production Impact',
    photoUrl: ACADEMY_IMAGES.progression.stage5Impact,
    photoAlt: 'Enterprise technology command center with corporate leaders and engineers monitoring deployment of an automated AI system',
    description: 'Deploy optimized containerized agent clusters into mission-critical corporate operations with sub-second latency, continuous telemetry, and verified ROI.',
    keyCompetencies: [
      'High-throughput vLLM serving, continuous batching & speculative decoding',
      'Containerized microservice packaging with Docker & Kubernetes',
      'OpenTelemetry distributed tracing, token accounting & cost governance',
      'Business change management & operational workflow adoption'
    ],
    deliverable: {
      title: 'Enterprise-Grade Dockerized Agent Gateway & Telemetry Console',
      techStack: ['vLLM', 'Docker', 'Kubernetes', 'OpenTelemetry', 'Grafana'],
      summary: 'Scalable production inference gateway with token budget limits, health probes, and enterprise Prometheus telemetry.'
    },
    impactMetric: {
      metric: '340+ Hours Saved/Mo',
      label: 'Direct operational efficiency unlocked per deployed enterprise workflow'
    },
    curriculumSlug: 'enterprise-ai-strategy-and-governance'
  }
];

export function TheoryToImpactProgression() {
  const { navigate, openEnquiryModal } = useAcademy();
  const [activeStageId, setActiveStageId] = useState<string>('stage-1');
  const [showFrameworkChart, setShowFrameworkChart] = useState<boolean>(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<{ url: string; title: string; subtitle: string } | null>(null);

  const activeStage = PROGRESSION_STAGES.find(s => s.id === activeStageId) || PROGRESSION_STAGES[0];

  return (
    <section className="py-24 border-b border-[#0B332F] bg-[#071C1A] text-[#F3FAF7] relative overflow-hidden">
      
      {/* Deep Emerald Background Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-[#27D7AC]/10 via-[#064E46]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-12 right-0 w-80 h-80 bg-[#064E46]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064E46]/40 border border-[#27D7AC]/40 text-[#27D7AC] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-[#27D7AC]" />
              <span>Pedagogical Continuum</span>
              <span aria-hidden="true" className="text-[#0B332F]">/</span>
              <span className="text-[#F3FAF7]">5-Stage Arc</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3FAF7] leading-tight">
              Structured Progression from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#B7F3D7] to-[#27D7AC]">Theory to Production Impact</span>
            </h2>

            <p className="text-base text-[#C3E5D8] leading-relaxed">
              Every course and workshop follows a verifiable engineering trajectory. We bridge mathematical comprehension to guided lab experimentation, autonomous agent construction, empirical auditing, and mission-critical production deployment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setShowFrameworkChart(!showFrameworkChart)}
              className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#27D7AC] hover:text-[#04100F] hover:bg-[#27D7AC] bg-[#0A2421] border border-[#27D7AC]/40 rounded-lg transition-all cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(39,215,172,0.2)]"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showFrameworkChart ? 'Hide Architecture Chart' : 'View Architecture Flowchart'}</span>
            </button>

            <button
              onClick={() => navigate('/learning-paths')}
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-lg transition-all cursor-pointer flex items-center gap-2 shadow-[0_4px_16px_rgba(39,215,172,0.4)]"
            >
              <span>Explore Roadmaps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Collapsible Architecture Flowchart Card */}
        {showFrameworkChart && (
          <div className="mb-12 bg-[#0A2421]/80 border border-[#27D7AC]/40 rounded-2xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-mono font-bold text-[#27D7AC] uppercase tracking-wider">
                  Framework Topology Overview
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3FAF7]">
                  The 5-Step Practical Learning Lifecycle
                </h3>
                <p className="text-xs text-[#C3E5D8] leading-relaxed">
                  High-level architectural blueprint charting how learners progress from Understand (mechanics) to Practise (controlled lab), Build (autonomous agent synthesis), Review (security & benchmark audit), and Apply (mission-critical enterprise deployment).
                </p>
                <div className="pt-2 text-xs text-[#8EB7A8] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#27D7AC]">✓</span>
                    <span>100% Code-grounded deliverables at each gate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#27D7AC]">✓</span>
                    <span>Zero slide-only passive memorization</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 bg-[#04100F] p-4 rounded-xl border border-[#0B332F] flex items-center justify-center">
                <img
                  src={ACADEMY_IMAGES.lifecycleChart}
                  alt="Infographic flowchart showing the 5 stages of practical learning: Understand, Practise, Build, Review, Apply"
                  className="w-full max-h-72 object-contain rounded-lg shadow-md cursor-pointer hover:brightness-110 transition-all"
                  onClick={() => setLightboxPhoto({
                    url: ACADEMY_IMAGES.lifecycleChart,
                    title: 'The 5-Step Practical Learning Lifecycle Flowchart',
                    subtitle: 'Architecture diagram connecting Understand, Practise, Build, Review, and Apply'
                  })}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        )}

        {/* Interactive Stage Tab Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PROGRESSION_STAGES.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#064E46]/60 border-[#27D7AC] shadow-[0_0_25px_rgba(39,215,172,0.35)] ring-1 ring-[#27D7AC]'
                    : 'bg-[#0A2421]/60 border-[#0B332F] hover:bg-[#0A2421] hover:border-[#27D7AC]/40'
                }`}
              >
                {/* Active Top Glow Bar */}
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7]" />
                )}

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono font-bold">
                    <span className={isActive ? 'text-[#27D7AC]' : 'text-[#8EB7A8]'}>
                      STAGE {stage.step}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#27D7AC] shadow-[0_0_8px_#27D7AC]' : 'bg-[#0B332F]'}`} />
                  </div>
                  <div className={`font-display text-sm font-bold truncate ${isActive ? 'text-[#F3FAF7]' : 'text-[#C3E5D8]'}`}>
                    {stage.phaseName}
                  </div>
                </div>

                <div className="text-[11px] text-[#8EB7A8] mt-2 truncate">
                  {stage.deliverable.techStack.slice(0, 2).join(' · ')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Stage Spotlight Deck: Translucent Glass Frame */}
        <div className="bg-[#0A2421]/75 border border-[#27D7AC]/30 rounded-2xl overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.7),0_0_30px_rgba(39,215,172,0.15)] mb-14 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Cinematic High-Res Photo with Dark Vignette */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-[#04100F] overflow-hidden group">
              <img
                src={activeStage.photoUrl}
                alt={activeStage.photoAlt}
                className="w-full h-full object-cover brightness-[0.82] contrast-[1.14] transition-transform duration-700 group-hover:scale-103"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Deep Cinematic Contrast Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2421] via-[#0A2421]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2421]/80 via-transparent to-[#0A2421]/40 pointer-events-none" />

              {/* Stage Badge & Expand Action */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <span className="px-3 py-1.5 rounded-md bg-[#04100F]/90 backdrop-blur-md border border-[#27D7AC]/40 text-[#27D7AC] font-mono text-xs font-semibold shadow-lg">
                  STAGE {activeStage.step} // {activeStage.phaseName.toUpperCase()}
                </span>

                <button
                  onClick={() => setLightboxPhoto({
                    url: activeStage.photoUrl,
                    title: activeStage.title,
                    subtitle: activeStage.photoAlt
                  })}
                  className="p-2 rounded-md bg-[#04100F]/85 backdrop-blur-md border border-[#0B332F] hover:border-[#27D7AC] text-[#C3E5D8] hover:text-[#F3FAF7] transition-colors cursor-pointer"
                  title="Enlarge photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0A2421] via-[#0A2421]/95 to-transparent border-t border-[#0B332F]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[#27D7AC] font-mono text-[11px] block">Verified Lab Artifact</span>
                    <span className="font-semibold text-[#F3FAF7]">{activeStage.deliverable.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#064E46]/60 text-[#C3E5D8] text-[11px] font-mono border border-[#27D7AC]/25">
                      {activeStage.deliverable.techStack.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Explanation, Competencies & Impact */}
            <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-6 bg-[#0A2421]/50 border-t lg:border-t-0 lg:border-l border-[#0B332F]">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#27D7AC] block">
                    {activeStage.kicker}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F3FAF7] leading-snug">
                    {activeStage.title}
                  </h3>
                </div>

                <p className="text-sm text-[#C3E5D8] leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Key Technical Competencies */}
                <div className="pt-2 space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#F3FAF7] block">
                    Technical Competencies Mastered
                  </span>
                  <ul className="space-y-2 text-xs text-[#8EB7A8]">
                    {activeStage.keyCompetencies.map((comp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#27D7AC] shrink-0 mt-0.5" />
                        <span className="leading-snug text-[#C3E5D8]">{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantitative Impact Metric Box */}
                <div className="p-4 rounded-xl bg-[#064E46]/35 border border-[#27D7AC]/25 space-y-1">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#27D7AC]" />
                    <span className="font-mono text-base font-bold text-[#27D7AC]">
                      {activeStage.impactMetric.metric}
                    </span>
                  </div>
                  <p className="text-xs text-[#8EB7A8]">
                    {activeStage.impactMetric.label}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-[#0B332F] flex flex-wrap items-center justify-between gap-3">
                {activeStage.curriculumSlug ? (
                  <button
                    onClick={() => navigate(`/programmes/${activeStage.curriculumSlug}`)}
                    className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.4)] flex items-center gap-1.5"
                  >
                    <span>View Stage Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : null}

                <button
                  onClick={() => openEnquiryModal({ programmeTitle: activeStage.title })}
                  className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F3FAF7] hover:text-[#27D7AC] bg-[#064E46]/40 hover:bg-[#064E46]/80 border border-[#27D7AC]/30 rounded-lg transition-colors cursor-pointer"
                >
                  Enquire for Team
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 5-Step Visual Photo Gallery Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C3E5D8]">
              Full 5-Stage Visual Progression
            </span>
            <span className="text-xs text-[#8EB7A8]">
              Click any stage card to explore or zoom photo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROGRESSION_STAGES.map((stg) => {
              const isSelected = stg.id === activeStageId;
              return (
                <div
                  key={stg.id}
                  onClick={() => setActiveStageId(stg.id)}
                  className={`group rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#064E46]/60 border-[#27D7AC] shadow-[0_0_20px_rgba(39,215,172,0.35)] ring-1 ring-[#27D7AC]'
                      : 'bg-[#0A2421]/60 border-[#0B332F] hover:border-[#27D7AC]/40 hover:bg-[#0A2421]'
                  }`}
                >
                  <div>
                    {/* Card Photo Header */}
                    <div className="h-36 relative overflow-hidden bg-[#04100F]">
                      <img
                        src={stg.photoUrl}
                        alt={stg.photoAlt}
                        className="w-full h-full object-cover brightness-[0.78] contrast-[1.12] transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2421] via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#04100F]/90 border border-[#27D7AC]/40 text-[#27D7AC] font-mono text-[10px] font-bold">
                        {stg.step}
                      </div>

                      <div className="absolute bottom-2 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxPhoto({
                              url: stg.photoUrl,
                              title: stg.title,
                              subtitle: stg.photoAlt
                            });
                          }}
                          className="p-1 rounded bg-[#04100F]/80 text-white hover:text-[#27D7AC] transition-colors"
                          title="View high-res"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 space-y-2">
                      <div className="text-[10px] uppercase font-semibold text-[#27D7AC]">
                        {stg.phaseName}
                      </div>
                      <h4 className="font-display text-sm font-bold text-[#F3FAF7] line-clamp-2 leading-snug group-hover:text-[#27D7AC] transition-colors">
                        {stg.title}
                      </h4>
                      <p className="text-[11px] text-[#8EB7A8] line-clamp-3 leading-relaxed">
                        {stg.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-4 pt-2 border-t border-[#0B332F] flex items-center justify-between text-[11px] text-[#8EB7A8]">
                    <span className="font-mono text-[#27D7AC] truncate">
                      {stg.deliverable.techStack[0]}
                    </span>
                    <span className="font-semibold text-white group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for High-Resolution Visual Inspection */}
      {lightboxPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-[#030F0E]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxPhoto(null)}
        >
          <div 
            className="max-w-5xl w-full bg-[#0A2421] border border-[#27D7AC]/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.95),0_0_30px_rgba(39,215,172,0.3)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#071C1A] border-b border-[#0B332F] flex items-center justify-between text-xs">
              <span className="font-display font-bold text-[#F3FAF7] truncate pr-4">
                {lightboxPhoto.title}
              </span>
              <button
                onClick={() => setLightboxPhoto(null)}
                className="p-1.5 rounded-lg bg-[#064E46]/60 text-[#C3E5D8] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-[#04100F] flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={lightboxPhoto.url}
                alt={lightboxPhoto.title}
                className="w-full h-auto max-h-[75vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-[#071C1A] border-t border-[#0B332F] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#8EB7A8]">
              <span className="text-[11px] text-[#8EB7A8] line-clamp-1">
                {lightboxPhoto.subtitle}
              </span>
              <span className="font-mono text-[#27D7AC] text-[11px] shrink-0">
                MindWash AI Academy · Emerald Glass Lab
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
