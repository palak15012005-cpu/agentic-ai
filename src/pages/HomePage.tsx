import { useState, useMemo } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { ACADEMY_IMAGES, getProgrammePhoto } from '../assets/images.ts';
import { AIConstellation } from '../components/home/AIConstellation.tsx';
import { MilestonePathways } from '../components/home/MilestonePathways.tsx';
import { InteractiveProjectShowcase } from '../components/home/InteractiveProjectShowcase.tsx';
import { EmeraldWorkflowPlayground } from '../components/home/EmeraldWorkflowPlayground.tsx';
import { AIVideoStudio } from '../components/home/AIVideoStudio.tsx';
import { MLPredictionLab } from '../components/home/MLPredictionLab.tsx';
import { AIResearchJournal } from '../components/home/AIResearchJournal.tsx';
import { 
  Briefcase, 
  GraduationCap, 
  UserCheck, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Workflow, 
  Compass, 
  Zap, 
  Cpu, 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Layers, 
  Terminal, 
  ExternalLink, 
  Film, 
  Filter,
  X,
  FileCode2,
  FolderGit2
} from 'lucide-react';
import { Programme, SubjectCategory } from '../types/index.ts';

export function HomePage() {
  const { programmes, navigate, openEnquiryModal, settings } = useAcademy();

  // Active Category Filter for Applied Curricula Programmes
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Interactive Lab Architecture Inspector Modal State
  const [inspectedProgramme, setInspectedProgramme] = useState<Programme | null>(null);

  const categories: (SubjectCategory | 'All')[] = [
    'All',
    'Generative AI',
    'Agentic AI & Automation',
    'Data & Analytics',
    'Machine Learning & NLP',
    'Software & Full-Stack'
  ];

  const filteredProgrammes = useMemo(() => {
    if (selectedCategory === 'All') return programmes;
    return programmes.filter(p => p.category === selectedCategory);
  }, [programmes, selectedCategory]);

  return (
    <>
      <SeoHead
        title="Agentic.AI – Learn AI. Build What’s Next. | Emerald Glass Lab"
        description="Interactive, rich, modern AI laboratory. Learn AI. Build What’s Next. Master Generative AI, Autonomous Multi-Agent Workflows, Machine Learning, and Data Engineering."
        canonicalPath="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          'name': 'Agentic.AI',
          'description': 'The practical training and education division of Agentic AI, delivering enterprise upskilling and collegiate bootcamps in advanced AI engineering.',
          'url': 'https://agentic.ai',
          'parentOrganization': {
            '@type': 'Organization',
            'name': 'Agentic AI',
            'url': 'https://agenticai.com'
          },
          'founder': {
            '@type': 'Person',
            'name': 'Abhishek Sharma',
            'jobTitle': 'Lead Instructor & Curriculum Architect'
          }
        }}
      />

      {/* Hero Section: Premium Emerald Glass Lab – Ivory, Midnight Navy, Academic Teal, Muted Gold */}
      <section className="relative pt-16 pb-24 border-b border-[#0B332F] overflow-hidden bg-[#071C1A]">
        
        {/* Deep Multi-Layered Forest-to-Navy Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030F0E] via-[#071C1A] to-[#0A192F]/80 pointer-events-none" />
        
        {/* Soft Radial Ambient Reflections & Muted Gold Accent Highlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[480px] bg-gradient-to-tr from-[#27D7AC]/15 via-[#064E46]/35 to-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#064E46]/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-6 left-12 w-80 h-80 bg-[#27D7AC]/10 rounded-full blur-[110px] pointer-events-none" />

        {/* Subtle Architectural Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B332F_1px,transparent_1px),linear-gradient(to_bottom,#0B332F_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Exact Requested Headline: Understand AI. Explore Possibilities. Build the Future. */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAF9F6] leading-[1.08] text-balance">
                  Understand AI. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#B7F3D7] to-[#27D7AC]">Explore Possibilities.</span> Build the Future.
                </h1>
                <p className="text-lg text-[#C3E5D8] leading-relaxed max-w-2xl font-normal pt-2">
                  Discover artificial intelligence through interactive experiments, intelligent workflows, practical projects, and hands-on learning experiences.
                </p>
              </div>

              {/* Action Buttons: Explore the AI Lab & Build Your First AI Agent */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/programmes')}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-md transition-all duration-200 cursor-pointer shadow-[0_0_22px_rgba(39,215,172,0.5)] hover:shadow-[0_0_32px_rgba(39,215,172,0.75)] flex items-center gap-2"
                >
                  <Cpu className="w-4 h-4 text-[#04100F]" />
                  <span>Explore the AI Lab</span>
                </button>
                <button
                  onClick={() => navigate('/programmes/agentic-ai-and-workflow-automation')}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] hover:text-[#27D7AC] bg-[#0A2421]/80 hover:bg-[#064E46]/60 border border-[#27D7AC]/35 hover:border-[#27D7AC] rounded-md transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.6)] backdrop-blur-md"
                >
                  Build Your First AI Agent
                </button>
              </div>

              {/* Connected AI Topic Cards Row in Hero */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { title: 'Generative AI', slug: 'prompt-engineering-for-professionals' },
                  { title: 'AI Agents', slug: 'agentic-ai-and-workflow-automation' },
                  { title: 'Machine Learning', slug: 'machine-learning-with-practical-projects' },
                  { title: 'Data Analytics', slug: 'data-analytics-with-python-and-sql' }
                ].map((topic, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={() => navigate(`/programmes/${topic.slug}`)}
                    className="p-3 rounded-xl bg-[#0A2421]/80 border border-[#27D7AC]/25 hover:border-[#27D7AC] text-center transition-all duration-200 cursor-pointer backdrop-blur-md group"
                  >
                    <span className="block text-xs font-bold text-[#FAF9F6] group-hover:text-[#27D7AC] transition-colors truncate">
                      {topic.title}
                    </span>
                  </button>
                ))}
              </div>

            </div>

            {/* Right Media Column: Official Agentic.AI Emblem without frame */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative flex items-center justify-center p-2">
                {/* Soft Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#27D7AC]/25 via-[#00B4D8]/15 to-transparent rounded-full blur-[70px] pointer-events-none" />

                <img
                  src="/assets/aistudio/Futuristic_Agentic_AI_Emblem_20fd47ad.png"
                  alt="Agentic AI Official Emblem Logo - Smart Agents. Real Solutions."
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain rounded-full drop-shadow-[0_0_45px_rgba(39,215,172,0.35)]"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 1: Animated AI Constellation (Connected Nodes: GenAI, ML, Agents, Analytics, Projects) */}
      <AIConstellation />

      {/* Signature Feature: Live-Looking AI Workflow Playground with Connected Nodes */}
      <EmeraldWorkflowPlayground />

      {/* Next-Gen Feature: AI Video Synthesis & Simulation Lab (Veo 2.0 / Omni-Flash Studio) */}
      <AIVideoStudio />

      {/* Feature 3: Applied Curricula Programmes Showcase with Dedicated Photos & Telemetry Charts */}
      <section className="py-22 bg-[#071C1A] border-b border-[#0B332F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="space-y-2">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF9F6]">
                All Applied Programmes
              </h2>
              <p className="text-base text-[#C3E5D8] max-w-2xl leading-relaxed">
                Explore our full suite of practical engineering programmes. Every curriculum includes dedicated live sandboxes, verified production capstones, and competency telemetry.
              </p>
            </div>

            <button
              onClick={() => navigate('/programmes')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.4)] shrink-0"
            >
              <span>Explore Course Filter Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Applied Programmes Collaborative Session Photo Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#27D7AC]/35 mb-10 shadow-[0_16px_50px_rgba(0,0,0,0.7)] group">
            <img
              src={ACADEMY_IMAGES.allProgrammesHub}
              alt="AI Innovation Hub team collaborative session mapping out applied programmes on whiteboard"
              className="w-full h-64 sm:h-80 md:h-96 object-cover brightness-[0.88] contrast-[1.08] group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071C1A] via-[#071C1A]/40 to-transparent pointer-events-none" />
          </div>

          {/* Category Filter Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#27D7AC] text-[#04100F] shadow-[0_0_16px_rgba(39,215,172,0.45)] font-bold'
                      : 'bg-[#0A2421]/90 text-[#C3E5D8] border border-[#0B332F] hover:border-[#27D7AC]/40 hover:text-[#FAF9F6]'
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Programmes Grid (Applied with Photos, Telemetry Charts, and Syllabus Links) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProgrammes.map((prog) => {
              const photoUrl = getProgrammePhoto(prog.slug || prog.id, prog.imageUrl);
              const telemetry = prog.labTelemetry;

              return (
                <div
                  key={prog.id}
                  className="bg-[#0A2421]/90 border border-[#27D7AC]/30 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#27D7AC] hover:-translate-y-1.5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] group relative"
                >
                  {/* Cybernetic High-Tech Corner Crosshairs */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#27D7AC] z-20 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#27D7AC] z-20 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Programme Photo Header with Clean Emerald Gradient Overlay */}
                    <div className="relative h-52 sm:h-56 overflow-hidden border-b border-[#0B332F]">
                      <img
                        src={photoUrl}
                        alt={prog.title}
                        className="w-full h-full object-cover brightness-[0.82] contrast-[1.12] transition-transform duration-700 group-hover:scale-104"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      {/* Emerald Dark Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2421] via-[#0A2421]/30 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#071C1A]/70 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Title & Overview */}
                      <div className="space-y-1.5">
                        <h3 
                          className="font-display text-xl font-bold text-[#FAF9F6] hover:text-[#27D7AC] transition-colors cursor-pointer line-clamp-1"
                          onClick={() => navigate(`/programmes/${prog.slug}`)}
                        >
                          {prog.title}
                        </h3>

                        <p className="text-xs text-[#C3E5D8] leading-relaxed line-clamp-2">
                          {prog.overview}
                        </p>
                      </div>

                      {/* Interactive Curriculum Benchmark Chart Widget */}
                      {telemetry && (
                        <div className="p-3.5 rounded-xl bg-[#071C1A]/95 border border-[#0B332F] space-y-2.5 shadow-inner">
                          <div className="flex items-center justify-between text-[11px]">
                            <div className="flex items-center gap-1.5 text-[#27D7AC] font-semibold">
                              <BarChart3 className="w-3.5 h-3.5" />
                              <span className="truncate max-w-[180px]">{telemetry.chartTitle || 'Lab Telemetry'}</span>
                            </div>
                            <span className="text-[10px] font-mono text-[#8EB7A8] flex items-center gap-1">
                              <TrendingUp className="w-3 h-3 text-[#27D7AC]" />
                              {telemetry.speed || 'Verified'}
                            </span>
                          </div>

                          {/* Metric Bars */}
                          <div className="space-y-1.5 pt-0.5">
                            {(telemetry.metrics || [
                              { label: 'Practical Lab Pass Rate', value: '100%', pct: 100 },
                              { label: 'Code Review Score', value: '98%', pct: 98 },
                            ]).slice(0, 2).map((m, mIdx) => (
                              <div key={mIdx} className="space-y-1">
                                <div className="flex items-center justify-between text-[10px] font-mono">
                                  <span className="text-[#8EB7A8] truncate max-w-[140px]">{m.label}</span>
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
                      )}

                      {/* Core Learning Outcomes */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FAF9F6] block font-mono">
                          Key Competencies:
                        </span>
                        <ul className="space-y-1 text-xs text-[#8EB7A8]">
                          {prog.learningOutcomes.slice(0, 2).map((out, idxOut) => (
                            <li key={idxOut} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#27D7AC] shrink-0 mt-0.5" />
                              <span className="text-[#C3E5D8] line-clamp-1">{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Interactive Lab Architecture Inspector Modal */}
          {inspectedProgramme && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04100F]/85 backdrop-blur-xl animate-fadeIn">
              <div className="bg-[#071C1A] border border-[#27D7AC]/60 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(39,215,172,0.3)]">
                
                {/* Modal Header */}
                <div className="bg-[#0A2421] px-6 py-4 border-b border-[#0B332F] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#064E46] border border-[#27D7AC]/40 flex items-center justify-center text-[#27D7AC]">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#27D7AC] font-bold uppercase tracking-widest">
                          // LAB SANDBOX ARCHITECTURE
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#071C1A] text-[#B7F3D7] border border-[#0B332F]">
                          {inspectedProgramme.category}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-[#FAF9F6]">{inspectedProgramme.title}</h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setInspectedProgramme(null)}
                    className="p-1.5 rounded-lg bg-[#071C1A] border border-[#0B332F] text-[#8EB7A8] hover:text-[#FAF9F6] hover:border-[#27D7AC] cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
                  
                  {/* Overview Strip */}
                  <div className="p-4 rounded-xl bg-[#0A2421] border border-[#0B332F] space-y-2">
                    <span className="text-[10px] font-mono text-[#8EB7A8] uppercase tracking-wider block">
                      CURRICULUM OBJECTIVE & LAB DELIVERABLE
                    </span>
                    <p className="text-sm text-[#C3E5D8] leading-relaxed">
                      {inspectedProgramme.overview}
                    </p>
                  </div>

                  {/* Dual Grid: File Structure & Verified Stack */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Column 1: Hands-on Git Repository Structure */}
                    <div className="p-4 rounded-xl bg-[#040E0D] border border-[#0B332F] font-mono space-y-3">
                      <div className="flex items-center justify-between text-[#27D7AC]">
                        <span className="flex items-center gap-1.5 font-bold">
                          <FolderGit2 className="w-4 h-4" />
                          <span>HANDS-ON LAB REPO TOPOLOGY</span>
                        </span>
                        <span className="text-[10px] text-[#8EB7A8]">git:main</span>
                      </div>

                      <div className="text-[11px] text-[#C3E5D8] space-y-1 pt-1 leading-relaxed border-t border-[#0B332F]">
                        <div className="text-[#8EB7A8]">├── src/</div>
                        <div className="pl-4">├── core/</div>
                        <div className="pl-8 text-[#27D7AC]">├── orchestrator.py (state machine)</div>
                        <div className="pl-8 text-[#FAF9F6]">├── guardrails.py (schema validator)</div>
                        <div className="pl-4">├── tools/</div>
                        <div className="pl-8 text-[#FAF9F6]">├── mcp_connectors.py</div>
                        <div className="pl-4">├── evals/</div>
                        <div className="pl-8 text-[#B7F3D7]">└── test_grounding_evals.py</div>
                        <div className="text-[#8EB7A8]">├── docker-compose.yml</div>
                        <div className="text-[#8EB7A8]">└── pyproject.toml</div>
                      </div>
                    </div>

                    {/* Column 2: Verified Tooling & Capabilities */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-[#0A2421] border border-[#0B332F] space-y-3">
                        <span className="text-[10px] font-mono text-[#27D7AC] uppercase tracking-wider block font-bold">
                          PRODUCTION TECH STACK & PACKAGES
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {inspectedProgramme.toolsUsed.map((tool, tIdx) => (
                            <span 
                              key={tIdx}
                              className="px-2.5 py-1 rounded bg-[#071C1A] text-[#FAF9F6] border border-[#0B332F] font-mono text-[11px]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#064E46]/30 border border-[#27D7AC]/30 space-y-2">
                        <span className="text-[10px] font-mono text-[#B7F3D7] uppercase tracking-wider block font-bold">
                          VERIFIED LAB BENCHMARK
                        </span>
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#8EB7A8]">Lab Pass Threshold</span>
                          <span className="text-[#27D7AC] font-bold">100% Deterministic CI</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#8EB7A8]">Industry Assessment</span>
                          <span className="text-[#FAF9F6] font-bold">Production Capstone Review</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-[#0A2421] border-t border-[#0B332F] flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#8EB7A8]">
                    Assessment: <strong className="text-[#FAF9F6]">{inspectedProgramme.assessmentApproach}</strong>
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        const slug = inspectedProgramme.slug;
                        setInspectedProgramme(null);
                        navigate(`/programmes/${slug}`);
                      }}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-[#FAF9F6] hover:text-[#27D7AC] border border-[#0B332F] hover:border-[#27D7AC]/40 bg-[#071C1A] cursor-pointer"
                    >
                      View Full Module Syllabus
                    </button>
                    <button
                      onClick={() => {
                        const progTitle = inspectedProgramme.title;
                        const progSlug = inspectedProgramme.slug;
                        setInspectedProgramme(null);
                        openEnquiryModal({ programmeSlug: progSlug, programmeTitle: progTitle });
                      }}
                      className="px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] cursor-pointer shadow-[0_0_16px_rgba(39,215,172,0.4)]"
                    >
                      Request Lab Access
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* Feature 4: Functional Project Showcase (AI assistants, workflow automation, dashboards, doc extraction) */}
      <InteractiveProjectShowcase />

      {/* Feature 4b: Hands-On Machine Learning Prediction Lab */}
      <MLPredictionLab />

      {/* Feature 5: Milestone Career Pathways Recommender (with AI & Data Engineering photo) */}
      <MilestonePathways />

      {/* Feature 5b: Audience Pathways Section (Corporate Teams, Colleges, Students & Practitioners) */}
      <section className="py-22 bg-[#04100F] border-b border-[#0B332F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#27D7AC] block">
              Distinct Entry Points
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAF9F6]">
              Structured Pathways for Every Audience
            </h2>
            <p className="text-base text-[#C3E5D8] leading-relaxed">
              Whether you are an enterprise executive upskilling a departmental team, an academic institution hosting a technical bootcamp, or an individual practitioner deepening your technical toolkit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pathway 1: Corporate Teams */}
            <div className="bg-[#0A2421]/75 border border-[#27D7AC]/25 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#27D7AC] hover:-translate-y-1 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <div>
                <div className="h-52 overflow-hidden border-b border-[#0B332F] relative">
                  <img
                    src={ACADEMY_IMAGES.pathwayCorporate}
                    alt="Corporate business and engineering team in an AI strategy briefing"
                    className="w-full h-full object-cover brightness-[0.8] contrast-[1.1] transition-transform duration-500 hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#071C1A]/90 border border-[#27D7AC]/40 text-[#27D7AC] text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-md">
                    Enterprise Level
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#064E46]/50 text-[#27D7AC] border border-[#27D7AC]/30 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FAF9F6]">
                    Corporate Teams & Leaders
                  </h3>
                  <p className="text-sm text-[#C3E5D8] leading-relaxed">
                    Tailored programmes for business units, operations, HR, marketing, and leadership. Learn structured prompting, workflow automation with n8n, and enterprise data hygiene.
                  </p>
                  <div className="text-xs text-[#8EB7A8] space-y-1.5 pt-2 border-t border-[#0B332F]">
                    <p>· Needs assessment & custom curriculum</p>
                    <p>· Before-and-after skills benchmarking</p>
                    <p>· Real operational capstone deliverables</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => navigate('/corporate-training')}
                  className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-md transition-all cursor-pointer shadow-[0_0_16px_rgba(39,215,172,0.4)]"
                >
                  Corporate Training Solutions →
                </button>
              </div>
            </div>

            {/* Pathway 2: Colleges & Institutions */}
            <div className="bg-[#0A2421]/75 border border-[#27D7AC]/25 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#27D7AC] hover:-translate-y-1 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <div>
                <div className="h-52 overflow-hidden border-b border-[#0B332F] relative">
                  <img
                    src={ACADEMY_IMAGES.pathwayColleges}
                    alt="University students and professor collaborating in computer science lab"
                    className="w-full h-full object-cover brightness-[0.8] contrast-[1.1] transition-transform duration-500 hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#071C1A]/90 border border-[#27D7AC]/40 text-[#27D7AC] text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-md">
                    Collegiate & Faculty
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#064E46]/50 text-[#27D7AC] border border-[#27D7AC]/30 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FAF9F6]">
                    Colleges & Universities
                  </h3>
                  <p className="text-sm text-[#C3E5D8] leading-relaxed">
                    Hands-on technical bootcamps, faculty development programmes (FDP), and final-year capstone project mentoring in Python, ML, NLP, and Agentic AI.
                  </p>
                  <div className="text-xs text-[#8EB7A8] space-y-1.5 pt-2 border-t border-[#0B332F]">
                    <p>· Industry-relevant practical curricula</p>
                    <p>· Zero-configuration cloud lab environments</p>
                    <p>· Meaningful GitHub resume artifacts</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => navigate('/college-training')}
                  className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-md transition-all cursor-pointer shadow-[0_0_16px_rgba(39,215,172,0.4)]"
                >
                  Colleges & Workshops →
                </button>
              </div>
            </div>

            {/* Pathway 3: Students & Professionals */}
            <div className="bg-[#0A2421]/75 border border-[#27D7AC]/25 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#27D7AC] hover:-translate-y-1 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <div>
                <div className="h-52 overflow-hidden border-b border-[#0B332F] relative">
                  <img
                    src={ACADEMY_IMAGES.pathwayProfessionals}
                    alt="Engineer working on machine learning loss curves and code"
                    className="w-full h-full object-cover brightness-[0.8] contrast-[1.1] transition-transform duration-500 hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#071C1A]/90 border border-[#27D7AC]/40 text-[#27D7AC] text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-md">
                    Career Advancement
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#064E46]/50 text-[#27D7AC] border border-[#27D7AC]/30 flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FAF9F6]">
                    Students & Professionals
                  </h3>
                  <p className="text-sm text-[#C3E5D8] leading-relaxed">
                    Self-directed career transitions and skill acceleration. Advance through verified learning paths from software foundations to production AI deployment.
                  </p>
                  <div className="text-xs text-[#8EB7A8] space-y-1.5 pt-2 border-t border-[#0B332F]">
                    <p>· Code reviews and instructor feedback</p>
                    <p>· Realistic business problem datasets</p>
                    <p>· 3 structured career learning pathways</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => navigate('/learning-paths')}
                  className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-md transition-all cursor-pointer shadow-[0_0_16px_rgba(39,215,172,0.4)]"
                >
                  Explore Learning Paths →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 6: AI Research & Engineering Technical Journal */}
      <AIResearchJournal />

      {/* Feature 7: Founder & Leadership Section (Abhishek Sharma with approved portrait) */}
      <section className="py-22 border-b border-[#0B332F] bg-[#071C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2421]/75 border border-[#27D7AC]/30 rounded-2xl p-8 sm:p-12 shadow-[0_12px_45px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Founder Portrait Photo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#27D7AC]/40 shadow-[0_0_30px_rgba(39,215,172,0.3)] w-64 h-72 sm:w-72 sm:h-80">
                  <img
                    src={ACADEMY_IMAGES.founder}
                    alt="Abhishek Sharma, Lead Instructor and Curriculum Architect at Agentic.AI"
                    className="w-full h-full object-cover object-top brightness-[0.92] contrast-[1.08]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#04100F] via-[#04100F]/70 to-transparent text-white">
                    <span className="font-display text-sm font-bold block text-[#FAF9F6]">{settings.founderName}</span>
                    <span className="text-[10px] text-[#27D7AC] uppercase tracking-wider font-semibold">
                      {settings.founderQualification}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#27D7AC]">
                  <span>Academy Leadership</span>
                  <span aria-hidden="true" className="text-[#0B332F]">/</span>
                  <span>Lead Instructor & Curriculum Architect</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FAF9F6]">
                  {settings.founderName}
                </h3>
                <div className="text-sm font-semibold text-[#B7F3D7]">
                  {settings.founderQualification} · {settings.founderPositioning}
                </div>

                <p className="text-sm text-[#C3E5D8] leading-relaxed">
                  Abhishek Sharma leads the applied curriculum architecture and training division at Agentic AI. Holding a Master of Science in Artificial Intelligence and Machine Learning, he designs technical upskilling programmes for enterprise engineering teams, corporate business units, and collegiate computer science faculties.
                </p>

                <p className="text-sm text-[#8EB7A8] leading-relaxed">
                  His pedagogical philosophy emphasizes building verified production artifacts over passive theory: every participant constructs deterministic prompt harnesses, autonomous multi-agent loops, and robust relational data pipelines with full schema validation.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => navigate('/about')}
                    className="text-xs font-semibold uppercase tracking-wider text-[#27D7AC] hover:text-[#FAF9F6] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    Read More About Academy Principles →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-24 bg-[#04100F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#27D7AC]/8 to-[#071C1A] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#27D7AC] block font-mono">
            Emerald Glass Lab · Applied AI Academy
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FAF9F6] leading-tight">
            Your AI Journey Starts Here
          </h2>
          <p className="text-base text-[#C3E5D8] max-w-2xl mx-auto leading-relaxed">
            Master Artificial Intelligence, Machine Learning, Generative AI, and AI Agents with beginner-friendly explanations and interactive lab experiences.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/programmes')}
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-md transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(39,215,172,0.5)] hover:shadow-[0_0_35px_rgba(39,215,172,0.8)]"
            >
              Start Learning for Free
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
