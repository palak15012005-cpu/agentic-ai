import { useState } from 'react';
import { useAcademy } from '../../context/AcademyContext.tsx';
import { 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Database, 
  Bot, 
  TrendingUp, 
  Calendar,
  Briefcase,
  Terminal,
  Award
} from 'lucide-react';

interface CareerPathwayConfig {
  id: string;
  roleTitle: string;
  badge: string;
  targetAudience: string;
  duration: string;
  image: string;
  imageAlt: string;
  overview: string;
  salaryBenchmarkNote: string;
  milestones: {
    level: string;
    title: string;
    skills: string[];
    deliverable: string;
    programmeSlug: string;
  }[];
  productionStack: string[];
}

const CAREER_PATHWAYS: CareerPathwayConfig[] = [
  {
    id: 'ai-data-engineer',
    roleTitle: 'AI & Data Engineering Career Foundations',
    badge: 'Flagship Foundation Track',
    targetAudience: 'College graduates, transitioners & data analysts building engineering foundations',
    duration: '12–16 Weeks · Structured Cohort',
    image: '/assets/images/ai_data_engineering_lab_1793001240338.jpg',
    imageAlt: 'AI and Data Engineering multi-monitor workstation with streaming data pipelines and neural architectures',
    overview: 'A full-spectrum technical pathway grounding learners in modern software engineering, relational SQL databases with window functions, exploratory data wrangling in Pandas, predictive machine learning with XGBoost, and star-schema Power BI reporting.',
    salaryBenchmarkNote: 'Prepares candidates for Associate Data Engineer, ML Engineer & BI Developer roles.',
    milestones: [
      {
        level: 'Milestone 1',
        title: 'Core Python Craftsmanship & Data Structures',
        skills: ['Python 3.12 OOP', 'Type Annotations', 'Data Cleaning', 'File I/O'],
        deliverable: 'CLI transaction ledger with automated log error analyzer.',
        programmeSlug: 'python-programming-foundations-to-applications'
      },
      {
        level: 'Milestone 2',
        title: 'Advanced SQL Querying & Pandas Pipelines',
        skills: ['CTEs & Window Functions', 'Pandas Vectorization', 'Statistical EDA', 'Cohort Matrices'],
        deliverable: 'Full retail cohort retention diagnostic on 100k transaction records.',
        programmeSlug: 'data-analytics-with-python-and-sql'
      },
      {
        level: 'Milestone 3',
        title: 'Supervised ML, Gradient Boosting & SHAP',
        skills: ['Scikit-Learn Pipelines', 'XGBoost Tuning', 'ROC-AUC Optimization', 'SHAP Force Plots'],
        deliverable: 'Loan default risk classifier served via containerized FastAPI REST endpoint.',
        programmeSlug: 'machine-learning-with-practical-projects'
      },
      {
        level: 'Milestone 4',
        title: 'Executive BI Star Schema & DAX Modeling',
        skills: ['Power Query ETL', 'Star Schema Architecture', 'DAX Time Intelligence', 'Role Security'],
        deliverable: 'Executive sales and margin dashboard with interactive drill-down navigation.',
        programmeSlug: 'power-bi-and-business-dashboards'
      }
    ],
    productionStack: ['Python', 'PostgreSQL', 'Pandas', 'Scikit-Learn', 'XGBoost', 'Power BI', 'FastAPI']
  },
  {
    id: 'agentic-architect',
    roleTitle: 'Autonomous Multi-Agent Systems Architect',
    badge: 'Advanced Engineering Track',
    targetAudience: 'Senior backend engineers, technical product leads & cloud developers',
    duration: '8–12 Weeks · Advanced Immersion',
    image: '/assets/images/agent_workflow_lab_1793001256101.jpg',
    imageAlt: 'Futuristic glass laboratory interface displaying multi-agent AI orchestration workflow and execution graphs',
    overview: 'Advance from stateless conversational prompts into deterministic cognitive systems. Build autonomous multi-agent graphs with LangGraph, bind external tools via Model Context Protocol (MCP), integrate hybrid vector memory, and deploy streaming web applications.',
    salaryBenchmarkNote: 'Prepares candidates for Senior AI Engineer, Agent Architect & Solutions Lead roles.',
    milestones: [
      {
        level: 'Milestone 1',
        title: 'Enterprise RAG & Hybrid Vector Search',
        skills: ['pgvector & ChromaDB', 'Hybrid BM25 + Dense Search', 'Cross-Encoder Reranking', 'Ragas'],
        deliverable: 'Internal knowledge assistant with strict quote citations and hallucination guardrails.',
        programmeSlug: 'rag-and-ai-knowledge-assistants'
      },
      {
        level: 'Milestone 2',
        title: 'Multi-Agent ReAct Graph Orchestration',
        skills: ['LangGraph State Machines', 'MCP Tool Calling', 'Human-in-Loop Circuits', 'Sub-graphs'],
        deliverable: 'Multi-agent customer research & qualification system with tool execution.',
        programmeSlug: 'agentic-ai-and-workflow-automation'
      },
      {
        level: 'Milestone 3',
        title: 'Visual Automation Pipelines with n8n',
        skills: ['Self-hosted n8n', 'Webhook Security', 'Conditional Routing', 'Docker Swarm'],
        deliverable: 'Automated invoice reconciliation and payment anomaly alerting pipeline.',
        programmeSlug: 'n8n-automation-for-business-workflows'
      },
      {
        level: 'Milestone 4',
        title: 'Full-Stack Production AI Deployment',
        skills: ['Server-Sent Events (SSE)', 'Semantic Redis Cache', 'Docker Cloud Run', 'Telemetry'],
        deliverable: 'Deployed AI-native web product with real-time token streaming and rate-limiting.',
        programmeSlug: 'ai-application-development-and-deployment'
      }
    ],
    productionStack: ['LangGraph', 'Python / TypeScript', 'FastAPI', 'pgvector', 'n8n', 'Docker', 'Redis']
  },
  {
    id: 'applied-career-roadmap',
    roleTitle: 'Applied AI & Machine Learning Specialist',
    badge: 'Comprehensive Specialization Track',
    targetAudience: 'Engineers, researchers, and technical leaders targeting specialized AI mastery',
    duration: '16 Weeks · Career Acceleration',
    image: '/assets/images/career_pathways_milestones_1793001270885.jpg',
    imageAlt: 'Futuristic translucent emerald glass technology milestone roadmap with glowing mint green career stations',
    overview: 'A complete end-to-end journey spanning the foundational mathematics of predictive models to fine-tuning Transformer architectures with PyTorch and LoRA, deterministic prompt engineering, and production cloud serving.',
    salaryBenchmarkNote: 'Prepares candidates for Applied AI Scientist & Machine Learning Specialist positions.',
    milestones: [
      {
        level: 'Milestone 1',
        title: 'Systematic Prompt Design & Schema Fidelity',
        skills: ['Few-Shot Patterns', 'Pydantic Strict Schemas', 'Injection Defense', 'Test Harnesses'],
        deliverable: 'Automated contract clause parsing engine with 99.8% schema adherence.',
        programmeSlug: 'prompt-engineering-for-professionals'
      },
      {
        level: 'Milestone 2',
        title: 'Predictive Modeling & Tabular Engineering',
        skills: ['Exploratory Data Analysis', 'Scikit-Learn ColumnTransformers', 'XGBoost Tuning', 'SHAP'],
        deliverable: 'High-throughput fraud detection model with cost-sensitive threshold tuning.',
        programmeSlug: 'machine-learning-with-practical-projects'
      },
      {
        level: 'Milestone 3',
        title: 'Deep Learning & Transformer Fine-Tuning',
        skills: ['PyTorch Tensors', 'Self-Attention Mechanics', 'Hugging Face Trainer', 'LoRA / QLoRA'],
        deliverable: 'Domain-adapted customer support triage model fine-tuned on GPU compute.',
        programmeSlug: 'deep-learning-and-applied-nlp'
      },
      {
        level: 'Milestone 4',
        title: 'Production Serving & Container Architecture',
        skills: ['FastAPI Microservices', 'Streaming Responses', 'Prometheus Metrics', 'Docker'],
        deliverable: 'Containerized deep learning inference server with automated load health checks.',
        programmeSlug: 'ai-application-development-and-deployment'
      }
    ],
    productionStack: ['PyTorch', 'Hugging Face', 'Scikit-Learn', 'Docker', 'FastAPI', 'CUDA / Colab']
  }
];

export function MilestonePathways() {
  const { navigate, openEnquiryModal } = useAcademy();
  const [selectedPathId, setSelectedPathId] = useState<string>('ai-data-engineer');

  const currentPathway = CAREER_PATHWAYS.find(p => p.id === selectedPathId) || CAREER_PATHWAYS[0];

  return (
    <section 
      aria-labelledby="milestone-pathways-heading"
      className="py-22 bg-[#071C1A] border-b border-[#0B332F] relative overflow-hidden"
    >
      {/* Background radial reflections */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#27D7AC]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#064E46]/35 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E46]/50 border border-[#27D7AC]/40 text-xs font-semibold text-[#27D7AC] uppercase tracking-wider backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#27D7AC]" />
            <span>Recommended Career Pathways</span>
          </div>
          <h2 id="milestone-pathways-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F3FAF7]">
            Milestone Career Pathways in AI & Data
          </h2>
          <p className="text-base text-[#C3E5D8] leading-relaxed">
            Choose your specialization track. Each pathway guides you through four cumulative milestones with real portfolio deliverables, verified code review, and production deployment.
          </p>
        </div>

        {/* Pathway Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CAREER_PATHWAYS.map((pathway) => {
            const isSelected = pathway.id === selectedPathId;
            return (
              <button
                key={pathway.id}
                onClick={() => setSelectedPathId(pathway.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer flex items-center gap-2.5 backdrop-blur-md ${
                  isSelected
                    ? 'bg-[#27D7AC] text-[#04100F] shadow-[0_0_24px_rgba(39,215,172,0.45)]'
                    : 'bg-[#0A2421]/90 text-[#C3E5D8] hover:text-[#F3FAF7] border border-[#27D7AC]/25 hover:border-[#27D7AC]/60'
                }`}
              >
                <span>{pathway.roleTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pathway Main Card */}
        <div className="bg-[#0A2421]/80 border border-[#27D7AC]/30 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.7)]">
          
          {/* Top Banner with High-Fidelity Photo & Track Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-[#0B332F]">
            
            {/* Visual Photo Header Column */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
              <img
                src={currentPathway.image}
                alt={currentPathway.imageAlt}
                className="w-full h-full object-cover brightness-[0.82] contrast-[1.12]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2421] via-[#0A2421]/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A2421] hidden lg:block pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded bg-[#071C1A]/90 border border-[#27D7AC]/40 text-[#27D7AC] font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                  {currentPathway.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#071C1A]/90 border border-[#0B332F] p-3 rounded-lg backdrop-blur-md text-xs text-[#C3E5D8]">
                <span className="block font-semibold text-[#F3FAF7]">Target Cohort:</span>
                <span className="text-[11px] text-[#8EB7A8]">{currentPathway.targetAudience}</span>
              </div>
            </div>

            {/* Pathway Overview & Stats Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8EB7A8]">
                  <span className="flex items-center gap-1.5 text-[#27D7AC]">
                    <Calendar className="w-3.5 h-3.5" />
                    {currentPathway.duration}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5 text-[#B7F3D7]">
                    <Award className="w-3.5 h-3.5 text-[#27D7AC]" />
                    4 Milestones
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F3FAF7]">
                  {currentPathway.roleTitle}
                </h3>

                <p className="text-sm text-[#C3E5D8] leading-relaxed">
                  {currentPathway.overview}
                </p>

                <div className="p-3.5 rounded-xl bg-[#071C1A] border border-[#0B332F] text-xs text-[#B7F3D7] flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-[#27D7AC] shrink-0" />
                  <span>{currentPathway.salaryBenchmarkNote}</span>
                </div>
              </div>

              {/* Production Toolstack */}
              <div className="space-y-2 pt-2 border-t border-[#0B332F]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8EB7A8] block">
                  Core Production Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentPathway.productionStack.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#064E46]/40 border border-[#27D7AC]/30 text-xs font-mono text-[#F3FAF7]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* 4 Sequential Milestones Grid */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-6">
            <h4 className="font-display text-lg font-bold text-[#F3FAF7] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#27D7AC]" />
              <span>Structured Career Progression Milestones</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentPathway.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#071C1A]/90 border border-[#0B332F] hover:border-[#27D7AC]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#27D7AC] uppercase tracking-wider px-2 py-0.5 rounded bg-[#064E46]/60 border border-[#27D7AC]/30">
                        {m.level}
                      </span>
                      <span className="text-xs text-[#8EB7A8] font-mono">0{idx + 1}/04</span>
                    </div>

                    <h5 className="font-display text-sm font-bold text-[#F3FAF7] group-hover:text-[#27D7AC] transition-colors leading-snug">
                      {m.title}
                    </h5>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1">
                      {m.skills.map((s, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A2421] text-[#C3E5D8] border border-[#0B332F]">
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Deliverable */}
                    <div className="pt-2 border-t border-[#0B332F]/60 text-[11px] text-[#8EB7A8] space-y-1">
                      <span className="text-[#27D7AC] font-semibold block">Deliverable:</span>
                      <p className="line-clamp-2">{m.deliverable}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/programmes/${m.programmeSlug}`)}
                    className="w-full py-2 text-[11px] font-semibold text-[#F3FAF7] hover:text-[#04100F] bg-[#064E46]/40 hover:bg-[#27D7AC] border border-[#27D7AC]/30 rounded transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action Strip */}
            <div className="pt-4 border-t border-[#0B332F] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#8EB7A8] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#27D7AC]" />
                <span>Flexible delivery formats available for enterprise teams and academic institutions.</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/learning-paths')}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#C3E5D8] hover:text-[#F3FAF7] border border-[#0B332F] bg-[#071C1A] rounded-md transition-colors cursor-pointer"
                >
                  Compare All Paths
                </button>
                <button
                  onClick={() => openEnquiryModal({ type: 'programme', programmeTitle: currentPathway.roleTitle })}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-md transition-all cursor-pointer shadow-[0_0_18px_rgba(39,215,172,0.4)]"
                >
                  Enrol in Pathway
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
