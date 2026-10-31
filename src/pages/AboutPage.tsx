import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { ACADEMY_IMAGES } from '../assets/images.ts';
import { CheckCircle2, ExternalLink, ShieldCheck, Award } from 'lucide-react';

export function AboutPage() {
  const { settings, openEnquiryModal } = useAcademy();

  return (
    <div className="py-12 bg-[#071C1A] text-[#F3FAF7] min-h-screen relative overflow-hidden">
      {/* Soft Ambient Radial Lab Reflections */}
      <div className="absolute top-0 right-1/3 w-[650px] h-[380px] bg-gradient-to-tr from-[#27D7AC]/15 via-[#064E46]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#064E46]/35 rounded-full blur-[120px] pointer-events-none" />

      {/* Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B332F_1px,transparent_1px),linear-gradient(to_bottom,#0B332F_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-20 pointer-events-none" />

      <SeoHead
        title="About Agentic.AI – Lead Instructor Abhishek Sharma & Emerald Glass Lab"
        description="Learn about Agentic.AI Academy, led by Abhishek Sharma (MSc in AI & ML), Lead Instructor & Curriculum Architect. Practical AI training for enterprise teams and universities."
        canonicalPath="/about"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About the Academy' }]} />

        {/* Hero Section */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#064E46]/40 border border-[#27D7AC]/40 text-xs font-semibold tracking-wider uppercase text-[#27D7AC] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#27D7AC] animate-pulse shadow-[0_0_8px_#27D7AC]" />
            <span>Applied AI Education</span>
            <span aria-hidden="true" className="text-[#0B332F]">/</span>
            <span>Emerald Glass Lab</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3FAF7] leading-tight">
            Practical AI Training Grounded in Engineering Reality.
          </h1>
          <p className="text-lg text-[#C3E5D8] leading-relaxed">
            Agentic.AI Academy was established to solve a persistent industry problem: the gap between academic theory, superficial marketing demonstrations, and actual operational AI execution.
          </p>
        </div>

        {/* Relationship & Identity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-7 space-y-6 text-[#C3E5D8] leading-relaxed text-base">
            <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
              The Education Division of Agentic AI
            </h2>
            <p>
              Agentic.AI Academy operates as the dedicated training, workshop, and education laboratory of <strong className="text-[#F3FAF7]">Agentic AI</strong>. While our parent consultancy delivers enterprise AI systems, workflow orchestration, and bespoke model engineering for commercial clients, the Academy translates those real production patterns into hands-on curriculum for enterprise teams, college faculties, and career practitioners.
            </p>
            <p>
              Every exercise, prompt scaffold, and code template taught in our programmes originates from live systems we architect and maintain. When our students learn to build RAG knowledge bases, handle token costs, or orchestrate multi-agent workflows, they are working with patterns tested against real commercial demands.
            </p>

            <div className="p-5 bg-[#0A2421]/90 border border-[#27D7AC]/30 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-hover-effect shadow-lg backdrop-blur-xl">
              <div>
                <span className="font-display text-sm font-bold text-[#F3FAF7] block">Agentic AI Enterprise Lab</span>
                <span className="text-xs text-[#8EB7A8]">Explore our parent company's enterprise AI orchestration offerings.</span>
              </div>
              <a
                href={settings.parentCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#27D7AC] hover:text-[#04100F] hover:bg-[#27D7AC] border border-[#27D7AC]/40 rounded-lg transition-all inline-flex items-center gap-1.5 shrink-0 shadow-[0_0_12px_rgba(39,215,172,0.2)]"
              >
                Visit Parent Company <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <h2 className="font-display text-2xl font-bold text-[#F3FAF7] pt-6">
              Our Core Teaching Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-[#0A2421]/80 border border-[#0B332F] rounded-xl space-y-2 card-hover-effect">
                <div className="flex items-center gap-2 text-xs font-bold text-[#27D7AC]">
                  <CheckCircle2 className="w-4 h-4 text-[#27D7AC]" />
                  <span>Zero Mock Fluff</span>
                </div>
                <p className="text-xs text-[#8EB7A8]">
                  We reject superficial novelty demos. Learners build real tools with production data structures, API credentials, and schema assertions.
                </p>
              </div>

              <div className="p-5 bg-[#0A2421]/80 border border-[#0B332F] rounded-xl space-y-2 card-hover-effect">
                <div className="flex items-center gap-2 text-xs font-bold text-[#27D7AC]">
                  <ShieldCheck className="w-4 h-4 text-[#27D7AC]" />
                  <span>Enterprise Data Hygiene</span>
                </div>
                <p className="text-xs text-[#8EB7A8]">
                  Data privacy, confidentiality tiers, prompt injection defense, and governance are embedded into every programme.
                </p>
              </div>

              <div className="p-5 bg-[#0A2421]/80 border border-[#0B332F] rounded-xl space-y-2 card-hover-effect">
                <div className="flex items-center gap-2 text-xs font-bold text-[#27D7AC]">
                  <Award className="w-4 h-4 text-[#27D7AC]" />
                  <span>Verifiable Artifacts</span>
                </div>
                <p className="text-xs text-[#8EB7A8]">
                  Attendees leave with documented prompt repositories, automated workflows, or deployed GitHub code repositories.
                </p>
              </div>

              <div className="p-5 bg-[#0A2421]/80 border border-[#0B332F] rounded-xl space-y-2 card-hover-effect">
                <div className="flex items-center gap-2 text-xs font-bold text-[#27D7AC]">
                  <CheckCircle2 className="w-4 h-4 text-[#27D7AC]" />
                  <span>Transparent Proposals</span>
                </div>
                <p className="text-xs text-[#8EB7A8]">
                  Clear prerequisites, custom durations, and honest feasibility reviews before any workshop engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Abhishek Sharma Profile Card with Confident_Professional_at_Work_f3878c3b.png */}
          <div className="lg:col-span-5 bg-[#0A2421]/85 border border-[#27D7AC]/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_12px_45px_rgba(0,0,0,0.7)] card-hover-effect backdrop-blur-xl">
            
            {/* Luminous Portrait Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#27D7AC]/40 shadow-[0_0_35px_rgba(39,215,172,0.3)] w-full h-80 sm:h-96 group">
              <img
                src={ACADEMY_IMAGES.leadInstructor || '/assets/aistudio/Confident_Professional_at_Work_f3878c3b.png'}
                alt="Abhishek Sharma, Lead Instructor and Curriculum Architect at Agentic.AI"
                className="w-full h-full object-cover object-top brightness-[0.85] contrast-[1.12] transition-transform duration-700 group-hover:scale-104"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04100F] via-[#04100F]/40 to-transparent pointer-events-none" />
              
              {/* Floating Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="px-3 py-1 rounded bg-[#071C1A]/90 border border-[#27D7AC]/50 text-[#27D7AC] font-mono text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_12px_rgba(39,215,172,0.4)]">
                  Lead Instructor
                </span>
              </div>

              <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#071C1A]/90 border border-[#0B332F] backdrop-blur-md">
                <span className="font-display text-base font-bold text-[#F3FAF7] block">
                  {settings.founderName}
                </span>
                <span className="text-[11px] text-[#27D7AC] font-semibold block">
                  {settings.founderQualification}
                </span>
                <span className="text-[10px] text-[#8EB7A8] block">
                  Lead Instructor & Curriculum Architect
                </span>
              </div>
            </div>

            <div className="text-left space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B7F3D7] px-2.5 py-1 rounded bg-[#064E46]/50 border border-[#27D7AC]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27D7AC] animate-pulse" />
                <span>AI Engineer, Educator & Consultant</span>
              </div>
            </div>

            <div className="text-xs text-[#C3E5D8] space-y-3 border-t border-[#0B332F] pt-4 leading-relaxed">
              <p>
                Abhishek holds a Master of Science (MSc) in Artificial Intelligence and Machine Learning. With hands-on engineering experience across applied deep learning, natural language processing, vector retrieval systems, and autonomous multi-agent loops, he directly leads all curriculum engineering.
              </p>
              
              {/* Technical Skill Stack */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono text-[#8EB7A8] uppercase tracking-wider block font-bold">
                  Technical Stack & Frameworks
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'PyTorch', 'LangGraph', 'pgvector', 'FastAPI', 'Docker', 'TypeScript', 'Pydantic v2', 'Scikit-Learn'].map((tech, tIdx) => (
                    <span key={tIdx} className="font-mono text-[10px] bg-[#071C1A] text-[#27D7AC] px-2 py-0.5 rounded border border-[#0B332F]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Active Research & Lab Focus */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono text-[#8EB7A8] uppercase tracking-wider block font-bold">
                  Current Lab Focus & Research
                </span>
                <p className="text-[11px] text-[#8EB7A8] leading-relaxed">
                  Active research on deterministic Abstract Syntax Tree (AST) validation gates to eliminate non-deterministic hallucinations in enterprise autonomous agent pipelines.
                </p>
              </div>

              {/* Collaboration Goals */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono text-[#8EB7A8] uppercase tracking-wider block font-bold">
                  Collaboration Goals
                </span>
                <p className="text-[11px] text-[#8EB7A8] leading-relaxed">
                  Open to consulting partnerships with technical leads, enterprise AI strategy briefings, and hands-on collegiate computer science workshops.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#0B332F] flex flex-col gap-3">
              <button
                onClick={() => openEnquiryModal({ type: 'corporate' })}
                className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-lg transition-all cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.45)]"
              >
                Request Briefing with Lead Instructor
              </button>
              <button
                onClick={() => openEnquiryModal({ type: 'college' })}
                className="w-full text-center py-2.5 text-xs font-medium uppercase tracking-wider text-[#F3FAF7] hover:text-[#27D7AC] border border-[#0B332F] bg-[#071C1A] hover:bg-[#064E46]/40 rounded-lg transition-colors cursor-pointer"
              >
                Inquire for College Workshop
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
