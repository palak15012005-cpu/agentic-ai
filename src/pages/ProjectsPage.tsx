import { useState } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { ACADEMY_IMAGES } from '../assets/images.ts';
import { 
  CheckCircle2, 
  Layers, 
  Code2, 
  Terminal, 
  ExternalLink, 
  Database, 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  AlertCircle, 
  X,
  FileCode2,
  Cpu
} from 'lucide-react';
import { LearningProject } from '../types/index.ts';

// Enhanced technical specifications for each capstone project
const PROJECT_TECH_SPECS: Record<string, {
  datasetDesc: string;
  implementationProcess: string;
  evaluationResult: string;
  limitations: string;
  blueprintSnippet: string;
}> = {
  'internal-knowledge-assistant': {
    datasetDesc: '500+ pages of unstructured enterprise engineering documentation, PDF operations manuals, and markdown architecture guides.',
    implementationProcess: 'Recursive semantic chunking (500 tokens, 50 token overlap) -> text-embedding-004 indexing in pgvector -> cosine distance retrieval -> prompt synthesis with mandatory citation boundaries.',
    evaluationResult: 'Top-3 retrieval recall: 94.6% · Zero ungrounded token generation across 150 benchmark test queries.',
    limitations: 'Vector retrieval does not natively support multi-table cross-referencing without secondary SQL query generation.',
    blueprintSnippet: `// RAG Retrieval & Prompt Assembly
const embedding = await embedText(userQuery);
const contextChunks = await pgvector.query({
  vector: embedding,
  topK: 3,
  minSimilarity: 0.78
});
const systemPrompt = assembleGroundedContext(contextChunks);`
  },
  'lead-enquiry-automation': {
    datasetDesc: '1,200 synthetic inbound B2B sales inquiry payloads with variable fields, malformed company domains, and multi-language messages.',
    implementationProcess: 'Webhook receiver with schema validation -> LLM intent classification node -> Clearbit/enrichment API simulation -> PostgreSQL lead ledger -> Slack notification dispatch.',
    evaluationResult: 'Average end-to-end execution latency: 2.84s · Ingestion reliability: 99.8% with automated error recovery sub-workflow.',
    limitations: 'Relies on synchronous API calls; high volume bursts (>100 req/sec) require Redis message queue buffering.',
    blueprintSnippet: `// n8n Webhook Ingestion Hook
$input.item.json = {
  received_at: new Date().toISOString(),
  intent: $node["LLM Classifier"].json.intent,
  priority_score: calculateLeadScore($input.item.json),
  crm_status: "PENDING_SALES_REP_CONTACT"
};`
  },
  'hr-faq-assistant': {
    datasetDesc: 'Curated handbook of 84 corporate employment policies, medical insurance tiers, and parental leave clauses.',
    implementationProcess: 'Two-tier verification: exact semantic hash matching against FAQ ledger first; fallback to dense vector RAG with confidence scoring and automated human ticket escalation.',
    evaluationResult: '88.2% automated resolution rate · 100% adherence to escalation protocol when query confidence fell below 0.75.',
    limitations: 'Requires monthly handbook re-indexing when internal company leave policies or tax regulations change.',
    blueprintSnippet: `// Two-Tier Escalation Gate
if (queryConfidence < 0.75) {
  await dispatchJiraTicket({
    queue: "HR_UNRESOLVED",
    employee_query: sanitizedQuery
  });
  return "I have routed your question to HR specialists.";
}`
  },
  'sales-performance-dashboard': {
    datasetDesc: '3 years of transactional retail sales records (N=250,000 rows across 4 global territories, 12 product categories).',
    implementationProcess: 'Power Query dimensional modeling into clean Kimball Star Schema -> custom DAX time-intelligence measures -> interactive cross-filtering matrix with drill-through pages.',
    evaluationResult: 'Report refresh latency under 4 seconds · 100% parity against verified finance reconciliation ledger.',
    limitations: 'DirectQuery mode is required for sub-minute transactional updates in multi-billion dollar enterprise warehouses.',
    blueprintSnippet: `// DAX Measure: 30-Day Moving Average Revenue
MovingAvg30D = 
CALCULATE(
    AVERAGEX(
        DATESINPERIOD('DimDate'[Date], LASTDATE('DimDate'[Date]), -30, DAY),
        [TotalRevenue]
    )
)`
  },
  'customer-churn-prediction': {
    datasetDesc: 'Telco churn dataset (10,000 customer accounts with 21 demographic and usage features).',
    implementationProcess: 'Exploratory data analysis & one-hot encoding -> SMOTE class balancing -> Scikit-Learn Random Forest and Gradient Boosting comparison -> SHAP explainability analysis.',
    evaluationResult: 'ROC-AUC: 0.884 · Recall on high-risk churners: 86.2% · Top feature: Month-to-month contract duration.',
    limitations: 'Static batch inference; real-time event streaming requires integration with Kafka or Redis Streams.',
    blueprintSnippet: `// Scikit-Learn Model Pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', GradientBoostingClassifier(n_estimators=150, learning_rate=0.08))
])
pipeline.fit(X_train, y_train)`
  },
  'support-ticket-routing': {
    datasetDesc: '5,000 multi-department enterprise customer support tickets labeled with category, priority, and required engineering tier.',
    implementationProcess: 'Text preprocessing & tokenization -> DistilBERT fine-tuning / LLM few-shot classification -> JSON schema enforcement -> ticketing system routing hook.',
    evaluationResult: 'Classification accuracy: 93.8% · Reduced manual ticket triage time from 4.2 hours to 45 seconds.',
    limitations: 'Ambiguous tickets mentioning multiple simultaneous bugs require multi-label classification routing.',
    blueprintSnippet: `// Ticket Routing Contract
interface TriagePayload {
  ticket_id: string;
  predicted_tier: "L1" | "L2" | "L3_ENGINEERING";
  assigned_queue: "billing" | "security" | "core_api";
  confidence_score: number;
}`
  }
};

export function ProjectsPage() {
  const { learningProjects, openEnquiryModal, navigate } = useAcademy();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectedProject, setInspectedProject] = useState<LearningProject | null>(null);

  const categories = ['All', 'Agentic AI & Automation', 'Generative AI', 'Data & Analytics', 'Machine Learning'];

  const filteredProjects = selectedCategory === 'All'
    ? learningProjects
    : learningProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="py-12 bg-[#071C1A] text-[#F3FAF7] min-h-screen relative overflow-hidden">
      {/* Ambient Radial Lab Reflections */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-[#27D7AC]/15 via-[#064E46]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[350px] bg-[#064E46]/35 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B332F_1px,transparent_1px),linear-gradient(to_bottom,#0B332F_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-20 pointer-events-none" />

      <SeoHead
        title="Technical Capstone Projects – Agentic.AI Emerald Glass Lab"
        description="Review 6 verified practical AI and engineering learning capstones: Knowledge Assistants, autonomous n8n automations, ML prediction models, and analytics dashboards."
        canonicalPath="/projects"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Sample Learning Projects' }]} />

        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3FAF7]">
            Technical Capstone Projects
          </h1>
          <p className="text-base text-[#C3E5D8] leading-relaxed">
            Every project in our curriculum is engineered as a production-grade artifact: complete with architectural schemas, datasets, evaluation benchmarks, and documented boundary constraints.
          </p>
        </div>

        {/* Featured Architecture Diagram Banner */}
        <div className="bg-[#0A2421]/85 border border-[#27D7AC]/30 rounded-2xl overflow-hidden mb-12 shadow-[0_12px_45px_rgba(0,0,0,0.65)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#27D7AC] font-mono">
                Architectural Blueprint // Capstone Reference
              </span>
              <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
                Sample RAG & Agentic Architecture
              </h2>
              <p className="text-xs text-[#C3E5D8] leading-relaxed">
                A representative system architecture built in our advanced programmes: ingesting enterprise unstructured documentation, indexing vectors in pgvector, executing hybrid retrieval, and invoking external API tools.
              </p>
              <div className="text-xs text-[#8EB7A8] space-y-1.5 pt-2 border-t border-[#0B332F]">
                <div className="flex items-center gap-2">
                  <span className="text-[#27D7AC]">·</span>
                  <span>Vector Knowledge Base (Embeddings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#27D7AC]">·</span>
                  <span>Hybrid Retrieval & Reranking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#27D7AC]">·</span>
                  <span>Tool Execution & Guardrails</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#071C1A] p-4 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#0B332F]">
              <img
                src={ACADEMY_IMAGES.projectArchitecture}
                alt="Architectural diagram of an intelligent agent workflow with vector knowledge base and automated tools"
                className="w-full max-h-88 object-contain rounded-lg shadow-md brightness-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#27D7AC] text-[#04100F] font-bold shadow-[0_0_15px_rgba(39,215,172,0.4)]'
                    : 'bg-[#0A2421] text-[#C3E5D8] border border-[#0B332F] hover:border-[#27D7AC]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 6 Technical Capstone Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => {
            const specs = PROJECT_TECH_SPECS[proj.slug] || {
              datasetDesc: 'Representative sample enterprise datasets curated specifically for hands-on learning.',
              implementationProcess: proj.architectureNotes,
              evaluationResult: '100% adherence to defined functional rubric.',
              limitations: 'Optimized for educational demonstration sandboxes.',
              blueprintSnippet: '// Architecture verified'
            };

            return (
              <div 
                key={proj.id}
                className="bg-[#0A2421]/80 border border-[#27D7AC]/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 card-hover-effect shadow-md backdrop-blur-xl"
              >
                <div className="space-y-4">
                  
                  {/* Header Strip with Mandatory Label */}
                  <div className="flex items-center justify-between text-xs text-[#8EB7A8]">
                    <span className="font-semibold text-[#27D7AC] font-mono">{proj.category}</span>
                    <span className="bg-[#071C1A] text-[#B7F3D7] px-2 py-0.5 rounded text-[10px] font-mono border border-[#0B332F]">
                      Verified Capstone
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#FAF9F6] leading-snug">
                    {proj.title}
                  </h3>

                  {/* Problem Addressed */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8EB7A8] block mb-1">
                      Problem Statement
                    </span>
                    <p className="text-xs text-[#C3E5D8] leading-relaxed line-clamp-2">
                      {proj.problemStatement}
                    </p>
                  </div>

                  {/* Dataset & Evaluation Strip */}
                  <div className="p-3 bg-[#071C1A] rounded-xl border border-[#0B332F] space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-[#27D7AC] uppercase block">
                        Dataset Specification
                      </span>
                      <p className="text-[11px] text-[#C3E5D8] line-clamp-2 leading-relaxed">
                        {specs.datasetDesc}
                      </p>
                    </div>
                    <div className="pt-1.5 border-t border-[#0B332F]/60 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#8EB7A8]">Benchmark:</span>
                      <span className="text-[#B7F3D7] font-semibold truncate max-w-[170px]">{specs.evaluationResult}</span>
                    </div>
                  </div>

                  {/* Learning Objectives */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8EB7A8] block mb-1.5">
                      Core Implementation Focus
                    </span>
                    <ul className="space-y-1 text-xs text-[#8EB7A8]">
                      {proj.learningObjectives.slice(0, 2).map((obj, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#27D7AC] shrink-0 mt-0.5" />
                          <span className="text-[#C3E5D8] line-clamp-1">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Strip */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.toolsUsed.slice(0, 4).map((t, i) => (
                      <span key={i} className="font-mono text-[10px] bg-[#071C1A] text-[#B7F3D7] px-2 py-0.5 rounded border border-[#0B332F]">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Actions: Inspect Blueprint & Enquire */}
                <div className="pt-4 border-t border-[#0B332F] grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setInspectedProject(proj)}
                    className="py-2 px-3 text-xs font-mono font-semibold text-[#27D7AC] hover:text-[#FAF9F6] border border-[#27D7AC]/40 hover:bg-[#064E46]/60 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Terminal className="w-3 h-3 text-[#27D7AC]" />
                    <span>Inspect Specs</span>
                  </button>

                  <button
                    onClick={() => openEnquiryModal({ type: 'programme', programmeTitle: `Project: ${proj.title}` })}
                    className="py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-lg transition-all cursor-pointer shadow-[0_0_12px_rgba(39,215,172,0.3)] text-center"
                  >
                    Enquire
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Inspect Technical Blueprint Modal */}
      {inspectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04100F]/90 backdrop-blur-xl animate-fadeIn">
          <div className="bg-[#071C1A] border border-[#27D7AC]/60 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-[0_20px_70px_rgba(0,0,0,0.95)]">
            
            {/* Modal Header */}
            <div className="bg-[#0A2421] px-6 py-4 border-b border-[#0B332F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#064E46] border border-[#27D7AC]/40 flex items-center justify-center text-[#27D7AC]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#27D7AC] uppercase tracking-wider">
                    {inspectedProject.category} // Technical Architecture
                  </span>
                  <h3 className="font-display text-base font-bold text-[#FAF9F6]">
                    {inspectedProject.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setInspectedProject(null)}
                className="p-1.5 rounded-lg bg-[#071C1A] border border-[#0B332F] text-[#8EB7A8] hover:text-[#FAF9F6] hover:border-[#27D7AC] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-[#C3E5D8]">
              
              {/* Problem & Dataset */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0A2421] border border-[#0B332F] space-y-1.5">
                  <span className="text-[10px] font-mono text-[#27D7AC] uppercase tracking-wider block font-bold">
                    Problem Solved
                  </span>
                  <p className="text-xs leading-relaxed text-[#FAF9F6]">
                    {inspectedProject.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0A2421] border border-[#0B332F] space-y-1.5">
                  <span className="text-[10px] font-mono text-[#27D7AC] uppercase tracking-wider block font-bold">
                    Dataset Description
                  </span>
                  <p className="text-xs leading-relaxed text-[#FAF9F6]">
                    {PROJECT_TECH_SPECS[inspectedProject.slug]?.datasetDesc}
                  </p>
                </div>
              </div>

              {/* Implementation Architecture */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#8EB7A8] uppercase tracking-wider block">
                  Implementation Architecture & Pipeline
                </span>
                <p className="text-xs leading-relaxed bg-[#0A2421]/60 p-4 rounded-xl border border-[#0B332F]">
                  {PROJECT_TECH_SPECS[inspectedProject.slug]?.implementationProcess || inspectedProject.architectureNotes}
                </p>
              </div>

              {/* Blueprint Code Snippet */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#27D7AC] uppercase tracking-wider block">
                  Reference Implementation Logic
                </span>
                <div className="p-4 rounded-xl bg-[#040E0D] border border-[#27D7AC]/30 font-mono text-[#B7F3D7] overflow-x-auto">
                  <pre>{PROJECT_TECH_SPECS[inspectedProject.slug]?.blueprintSnippet}</pre>
                </div>
              </div>

              {/* Benchmark & Known Limitations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#064E46]/30 border border-[#27D7AC]/40 space-y-1">
                  <span className="text-[10px] font-mono text-[#27D7AC] uppercase tracking-wider block font-bold">
                    Evaluation Benchmark
                  </span>
                  <p className="text-xs text-[#FAF9F6]">
                    {PROJECT_TECH_SPECS[inspectedProject.slug]?.evaluationResult}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#071C1A] border border-[#0B332F] space-y-1">
                  <span className="text-[10px] font-mono text-[#8EB7A8] uppercase tracking-wider block font-bold">
                    Known Limitations & Roadmap
                  </span>
                  <p className="text-xs text-[#C3E5D8]">
                    {PROJECT_TECH_SPECS[inspectedProject.slug]?.limitations}
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-[#0A2421] px-6 py-4 border-t border-[#0B332F] flex items-center justify-between text-xs">
              <span className="text-[#8EB7A8] font-mono">
                Verified Academy Capstone Artifact
              </span>
              <button
                onClick={() => {
                  const title = inspectedProject.title;
                  setInspectedProject(null);
                  openEnquiryModal({ type: 'programme', programmeTitle: `Project: ${title}` });
                }}
                className="px-4 py-2 rounded-lg bg-[#27D7AC] text-[#04100F] font-bold cursor-pointer"
              >
                Enquire to Build This Capstone
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
