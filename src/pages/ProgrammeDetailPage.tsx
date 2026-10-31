import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { ACADEMY_IMAGES, getProgrammePhoto } from '../assets/images.ts';
import { 
  CheckCircle2, 
  Clock, 
  Layers, 
  Laptop, 
  HelpCircle, 
  FileCheck2, 
  Sparkles, 
  ArrowRight,
  BarChart3,
  TrendingUp,
  Cpu,
  Code2
} from 'lucide-react';

export function ProgrammeDetailPage({ slug }: { slug: string }) {
  const { programmes, navigate, openEnquiryModal, settings } = useAcademy();

  const programme = programmes.find(p => p.slug === slug);

  if (!programme) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4 bg-[#071C1A] text-[#F3FAF7]">
        <h1 className="font-display text-2xl font-bold text-[#F3FAF7] mb-2">
          Programme Not Found
        </h1>
        <p className="text-sm text-[#C3E5D8] mb-6">
          The requested programme could not be found or has not yet been published.
        </p>
        <button
          onClick={() => navigate('/programmes')}
          className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.4)]"
        >
          View All Programmes
        </button>
      </div>
    );
  }

  const relatedList = programmes.filter(p => programme.relatedProgrammes.includes(p.slug));
  const photoUrl = getProgrammePhoto(programme.slug || programme.id, programme.imageUrl);
  const telemetry = programme.labTelemetry;

  return (
    <div className="py-12 bg-[#071C1A] text-[#F3FAF7] min-h-screen relative overflow-hidden">
      {/* Ambient Radial Lab Reflections */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-[#27D7AC]/15 via-[#064E46]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[350px] bg-[#064E46]/35 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B332F_1px,transparent_1px),linear-gradient(to_bottom,#0B332F_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-20 pointer-events-none" />

      <SeoHead
        title={`${programme.title} – Agentic.AI Emerald Glass Lab`}
        description={programme.tagline || programme.overview.slice(0, 155)}
        canonicalPath={`/programmes/${programme.slug}`}
        type="course"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          'name': programme.title,
          'description': programme.overview,
          'provider': {
            '@type': 'EducationalOrganization',
            'name': 'Agentic.AI',
            'url': 'https://agentic.ai'
          },
          'hasCourseInstance': {
            '@type': 'CourseInstance',
            'courseMode': programme.deliveryModes.join(', '),
            'courseWorkload': programme.durationNote
          }
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Programmes', path: '/programmes' },
            { label: programme.title }
          ]}
        />

        {/* Hero Photo Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-[#27D7AC]/35 shadow-[0_12px_45px_rgba(0,0,0,0.7)] mb-12 h-64 sm:h-80 lg:h-96 group">
          <img
            src={photoUrl}
            alt={programme.title}
            className="w-full h-full object-cover brightness-[0.72] contrast-[1.15] transition-transform duration-700 group-hover:scale-102"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071C1A] via-[#071C1A]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071C1A]/85 via-transparent to-transparent pointer-events-none" />

          {/* Floating Hero Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#071C1A]/90 border border-[#27D7AC]/50 text-[#27D7AC] font-mono text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(39,215,172,0.35)]">
              {telemetry?.badge || programme.category}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#064E46]/80 border border-[#27D7AC]/30 text-[#B7F3D7] font-mono text-xs backdrop-blur-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27D7AC] animate-pulse" />
              <span>{programme.level}</span>
            </span>
          </div>

          <div className="absolute bottom-6 inset-x-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#27D7AC] block">
                {programme.category} Track
              </span>
              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F3FAF7] leading-tight">
                {programme.title}
              </h1>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#C3E5D8] bg-[#071C1A]/90 px-3.5 py-2 rounded-lg border border-[#0B332F] backdrop-blur-md shrink-0">
              <Clock className="w-4 h-4 text-[#27D7AC]" />
              <span>{programme.durationNote}</span>
            </div>
          </div>
        </div>

        {/* Programme Header & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-[#0B332F]">
          
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
              Programme Overview
            </h2>

            <p className="text-base text-[#C3E5D8] leading-relaxed max-w-3xl">
              {programme.overview}
            </p>

            {/* Telemetry Chart Widget */}
            {telemetry && (
              <div className="p-5 rounded-2xl bg-[#0A2421]/90 border border-[#27D7AC]/30 space-y-4 shadow-md backdrop-blur-xl mt-6">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#27D7AC] font-semibold">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm">{telemetry.chartTitle || 'Laboratory Benchmark Metrics'}</span>
                  </div>
                  <span className="text-xs font-mono text-[#B7F3D7] flex items-center gap-1 bg-[#064E46]/60 px-2.5 py-1 rounded border border-[#27D7AC]/30">
                    <TrendingUp className="w-3.5 h-3.5 text-[#27D7AC]" />
                    {telemetry.accuracy || '99% Verified'}
                  </span>
                </div>

                {telemetry.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    {telemetry.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 bg-[#071C1A] rounded-xl border border-[#0B332F] space-y-1.5">
                        <span className="text-[11px] text-[#8EB7A8] block font-mono">{m.label}</span>
                        <span className="text-base font-bold text-[#F3FAF7] block font-display">{m.value}</span>
                        <div className="w-full h-1.5 bg-[#04100F] rounded-full overflow-hidden border border-[#0B332F]">
                          <div 
                            className="h-full bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7] rounded-full"
                            style={{ width: `${m.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Box Card */}
          <div className="lg:col-span-4 bg-[#0A2421]/85 border border-[#27D7AC]/30 rounded-2xl p-6 space-y-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B7F3D7] block mb-1">
                Programme Availability
              </span>
              <div className="font-display text-xl font-bold text-[#F3FAF7]">
                Enquire for Availability
              </div>
              <p className="text-xs text-[#8EB7A8] mt-1">
                Cohorts and schedules are customised based on organizational or academic requirements.
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#C3E5D8] pt-2 border-t border-[#0B332F]">
              <div className="flex justify-between py-1 border-b border-[#0B332F]/60">
                <span className="text-[#8EB7A8]">Delivery Modes:</span>
                <span className="font-medium text-[#F3FAF7]">{programme.deliveryModes.join(', ')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#0B332F]/60">
                <span className="text-[#8EB7A8]">Target Level:</span>
                <span className="font-medium text-[#F3FAF7]">{programme.level}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#8EB7A8]">Modules:</span>
                <span className="font-medium text-[#27D7AC]">{programme.modules.length} Modules</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openEnquiryModal({ programmeSlug: programme.slug, programmeTitle: programme.title, type: 'programme' })}
                className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-lg transition-all cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.45)]"
              >
                Enquire About This Programme
              </button>
            </div>

            <p className="text-[11px] text-[#8EB7A8] text-center leading-normal">
              {programme.certificateNote}
            </p>
          </div>

        </div>

        {/* Main Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          
          {/* Left Column: Syllabus & Deep Dive */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Intended Audience & Prerequisites */}
            <section className="bg-[#0A2421]/80 border border-[#0B332F] rounded-2xl p-8 space-y-6 backdrop-blur-xl">
              <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
                Who This Programme is For
              </h2>
              
              <ul className="space-y-2 text-sm text-[#C3E5D8]">
                {programme.audience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27D7AC] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#0B332F]">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#27D7AC] mb-2">
                  Prerequisites
                </h3>
                <p className="text-sm text-[#C3E5D8] leading-relaxed bg-[#071C1A] p-4 rounded-xl border border-[#0B332F]">
                  {programme.prerequisites}
                </p>
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
                Specific Learning Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {programme.learningOutcomes.map((outcome, idx) => {
                  const isPromptArch = outcome.toLowerCase().includes('prompt') || outcome.toLowerCase().includes('pattern');
                  const isReasoning = outcome.toLowerCase().includes('reasoning') || outcome.toLowerCase().includes('chain');
                  const cardPhoto = isPromptArch ? ACADEMY_IMAGES.systematicPromptArchitecture : isReasoning ? ACADEMY_IMAGES.reasoningFrameworks : null;

                  return (
                    <div key={idx} className="p-5 bg-[#0A2421]/80 border border-[#0B332F] rounded-xl space-y-3 card-hover-effect overflow-hidden flex flex-col justify-between">
                      {cardPhoto && (
                        <div className="relative h-32 w-full rounded-lg overflow-hidden border border-[#27D7AC]/30 mb-1">
                          <img
                            src={cardPhoto}
                            alt={outcome}
                            className="w-full h-full object-cover brightness-[0.85] contrast-[1.1]"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2421] via-transparent to-transparent" />
                        </div>
                      )}
                      <div className="space-y-1">
                        <span className="font-mono text-xs font-bold text-[#27D7AC]">Outcome 0{idx + 1}</span>
                        <p className="text-sm text-[#F3FAF7] font-medium leading-normal">
                          {outcome}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Curriculum Modules */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
                  Curriculum Modules ({programme.modules.length})
                </h2>
                <span className="text-xs text-[#8EB7A8] font-mono">Sequential progression</span>
              </div>

              <div className="space-y-4">
                {programme.modules.map((mod) => (
                  <div 
                    key={mod.id} 
                    className="p-6 bg-[#0A2421]/80 border border-[#0B332F] rounded-2xl space-y-3 card-hover-effect"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#27D7AC]">
                        Module {mod.moduleNumber < 10 ? `0${mod.moduleNumber}` : mod.moduleNumber}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#F3FAF7]">
                      {mod.title}
                    </h3>

                    <p className="text-sm text-[#C3E5D8] leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8EB7A8] block">
                        Topics Explored
                      </span>
                      <div className="flex flex-wrap gap-2 text-xs text-[#C3E5D8]">
                        {mod.keyTopics.map((topic, i) => (
                          <span key={i} className="bg-[#071C1A] text-[#B7F3D7] px-2.5 py-1 rounded border border-[#0B332F]">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 p-3 bg-[#071C1A] rounded-xl border border-[#0B332F] text-xs text-[#C3E5D8]">
                      <span className="font-semibold text-[#27D7AC] block mb-0.5">Hands-On Lab:</span>
                      {mod.handsOnLab}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Practical Exercises & Sample Projects */}
            <section className="bg-[#0A2421]/80 border border-[#0B332F] rounded-2xl p-8 space-y-6">
              <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
                Sample Projects & Exercises
              </h2>

              <div className="space-y-4">
                {programme.sampleProjects.map((proj, idx) => (
                  <div key={idx} className="p-5 bg-[#071C1A] rounded-xl border border-[#0B332F] space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-[#F3FAF7]">
                        {proj.title}
                      </h3>
                      <span className="text-[11px] uppercase tracking-wider text-[#27D7AC] font-semibold">
                        Sample Project
                      </span>
                    </div>
                    <p className="text-sm text-[#C3E5D8] leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs text-[#8EB7A8]">
                      <span className="font-medium text-[#F3FAF7]">Tools Used:</span>
                      {proj.tools.join(', ')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#0B332F]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#27D7AC] block mb-2">
                  Additional Practical Exercises
                </span>
                <ul className="space-y-2 text-sm text-[#C3E5D8]">
                  {programme.practicalExercises.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#27D7AC] shrink-0 mt-0.5" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQs */}
            {programme.faqs && programme.faqs.length > 0 && (
              <section className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
                  Programme Specific FAQs
                </h2>
                <div className="space-y-3">
                  {programme.faqs.map((faq, idx) => (
                    <div key={idx} className="p-6 bg-[#0A2421]/80 border border-[#0B332F] rounded-2xl space-y-2 card-hover-effect">
                      <h3 className="font-display text-base font-bold text-[#F3FAF7] flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#27D7AC]" />
                        {faq.question}
                      </h3>
                      <p className="text-sm text-[#C3E5D8] leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column: Sidebar Specifications & Abhishek Sharma Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Abhishek Sharma Instructor Card */}
            <div className="bg-[#0A2421]/85 border border-[#27D7AC]/30 rounded-2xl p-6 space-y-4 shadow-lg backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#27D7AC]/40 shrink-0 shadow-[0_0_12px_rgba(39,215,172,0.3)]">
                  <img
                    src={ACADEMY_IMAGES.leadInstructor || '/assets/aistudio/Confident_Professional_at_Work_f3878c3b.png'}
                    alt="Abhishek Sharma"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#27D7AC] uppercase tracking-wider font-semibold block">
                    Curriculum Architect
                  </span>
                  <span className="font-display text-base font-bold text-[#F3FAF7] block">
                    {settings.founderName}
                  </span>
                  <span className="text-xs text-[#8EB7A8] block">
                    {settings.founderQualification}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#C3E5D8] leading-relaxed">
                Directly structured and overseen by Lead Instructor Abhishek Sharma, ensuring production fidelity and alignment with modern AI industry benchmarks.
              </p>
            </div>

            {/* Tools Participants Will Use */}
            <div className="bg-[#0A2421]/80 border border-[#0B332F] rounded-2xl p-6 space-y-4">
              <h3 className="font-display text-base font-bold text-[#F3FAF7]">
                Tools & Technologies
              </h3>
              <p className="text-xs text-[#8EB7A8] leading-relaxed">
                Hands-on immersion with production-grade engineering tools and interfaces:
              </p>
              <div className="flex flex-wrap gap-2">
                {programme.toolsUsed.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="font-mono text-xs bg-[#071C1A] text-[#B7F3D7] px-2.5 py-1 rounded border border-[#0B332F]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Assessment Approach */}
            <div className="bg-[#0A2421]/80 border border-[#0B332F] rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#27D7AC]">
                <FileCheck2 className="w-4 h-4" />
                <span>Assessment Approach</span>
              </div>
              <h3 className="font-display text-base font-bold text-[#F3FAF7]">
                Practical Capability Review
              </h3>
              <p className="text-xs text-[#C3E5D8] leading-relaxed">
                {programme.assessmentApproach}
              </p>
            </div>

            {/* Related Programmes */}
            {relatedList.length > 0 && (
              <div className="bg-[#0A2421]/80 border border-[#0B332F] rounded-2xl p-6 space-y-4">
                <h3 className="font-display text-base font-bold text-[#F3FAF7]">
                  Related Programmes
                </h3>
                <div className="space-y-3">
                  {relatedList.map((rel) => (
                    <div 
                      key={rel.id}
                      onClick={() => navigate(`/programmes/${rel.slug}`)}
                      className="p-3 bg-[#071C1A] rounded-xl border border-[#0B332F] hover:border-[#27D7AC] transition-all cursor-pointer space-y-1"
                    >
                      <h4 className="font-display text-sm font-bold text-[#F3FAF7] hover:text-[#27D7AC]">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[#8EB7A8]">
                        {rel.category} · {rel.level}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enquiry Card */}
            <div className="bg-[#0A2421]/90 border border-[#27D7AC]/40 text-white rounded-2xl p-6 space-y-4 shadow-[0_0_30px_rgba(39,215,172,0.25)]">
              <h3 className="font-display text-lg font-bold text-[#F3FAF7]">
                Shape This Programme for Your Team
              </h3>
              <p className="text-xs text-[#C3E5D8] leading-relaxed">
                Tell us about your team size, timeframe, and technical goals. We will assemble a customized syllabus and proposal.
              </p>
              <button
                onClick={() => openEnquiryModal({ programmeSlug: programme.slug, programmeTitle: programme.title, type: 'corporate' })}
                className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.4)]"
              >
                Request Proposal
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
