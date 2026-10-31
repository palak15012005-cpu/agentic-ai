import { useState, useMemo } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { Calendar, Clock, CheckCircle2, Users, Search, RotateCcw, BarChart3, TrendingUp, Code2 } from 'lucide-react';
import { SubjectCategory, AudienceType } from '../types/index.ts';
import { ACADEMY_IMAGES } from '../assets/images.ts';

export function WorkshopsPage() {
  const { workshops, navigate, openEnquiryModal } = useAcademy();

  const [activeTab, setActiveTab] = useState<'formats' | 'confirmed' | 'past'>('formats');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAudience, setSelectedAudience] = useState<string>('All');
  const [search, setSearch] = useState('');

  const confirmedEvents = useMemo(() => workshops.filter(w => w.isConfirmedEvent), [workshops]);
  const onDemandFormats = useMemo(() => workshops.filter(w => !w.isConfirmedEvent), [workshops]);

  const categories: (SubjectCategory | 'All')[] = [
    'All',
    'Generative AI',
    'Agentic AI & Automation',
    'Data & Analytics',
    'Machine Learning & NLP'
  ];

  const filteredFormats = useMemo(() => {
    return onDemandFormats.filter((ws) => {
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!ws.title.toLowerCase().includes(q) && !ws.overview.toLowerCase().includes(q)) {
          return false;
        }
      }
      if (selectedCategory !== 'All' && ws.category !== selectedCategory) return false;
      if (selectedAudience !== 'All' && ws.audienceType !== selectedAudience) return false;
      return true;
    });
  }, [onDemandFormats, search, selectedCategory, selectedAudience]);

  return (
    <div className="py-12 bg-[#071C1A] text-[#F3FAF7] min-h-screen relative overflow-hidden">
      {/* Ambient Radial Lab Reflections */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-[#27D7AC]/15 via-[#064E46]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[350px] bg-[#064E46]/35 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B332F_1px,transparent_1px),linear-gradient(to_bottom,#0B332F_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-20 pointer-events-none" />

      <SeoHead
        title="Hands-On AI Workshops & Bootcamps – Agentic.AI Emerald Glass Lab"
        description="Explore interactive workshop formats available on request for teams and colleges, led by Abhishek Sharma and senior AI instructors."
        canonicalPath="/workshops"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Workshops & Events' }]} />

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E46]/40 border border-[#27D7AC]/40 text-xs font-semibold tracking-wider uppercase text-[#27D7AC] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#27D7AC] shadow-[0_0_8px_#27D7AC]" />
              <span>Applied Learning Labs</span>
              <span aria-hidden="true" className="text-[#0B332F]">/</span>
              <span>Intensive Bootcamps</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3FAF7]">
              Workshops & Bootcamps
            </h1>
            <p className="text-base text-[#C3E5D8] leading-relaxed">
              Intensive, practical workshops designed for rapid capability acquisition. Review formats available on request, register interest for upcoming public cohorts, or arrange an on-campus or corporate session.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#27D7AC]/30 shadow-[0_12px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <img
                src={ACADEMY_IMAGES.handsOnLab}
                alt="Technology learners in hands-on lab workshop"
                className="w-full h-48 sm:h-56 object-cover brightness-[0.8] contrast-[1.12]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Functional Tabs / Segmented Control */}
        <div className="flex items-center gap-2 border-b border-[#0B332F] pb-4 mb-8">
          <button
            onClick={() => setActiveTab('formats')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeTab === 'formats'
                ? 'bg-[#27D7AC] text-[#04100F] shadow-[0_0_15px_rgba(39,215,172,0.45)]'
                : 'text-[#C3E5D8] hover:text-[#F3FAF7] hover:bg-[#0A2421]'
            }`}
          >
            Formats Available On Request ({onDemandFormats.length})
          </button>
          <button
            onClick={() => setActiveTab('confirmed')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeTab === 'confirmed'
                ? 'bg-[#27D7AC] text-[#04100F] shadow-[0_0_15px_rgba(39,215,172,0.45)]'
                : 'text-[#C3E5D8] hover:text-[#F3FAF7] hover:bg-[#0A2421]'
            }`}
          >
            Confirmed Upcoming Events ({confirmedEvents.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeTab === 'past'
                ? 'bg-[#27D7AC] text-[#04100F] shadow-[0_0_15px_rgba(39,215,172,0.45)]'
                : 'text-[#C3E5D8] hover:text-[#F3FAF7] hover:bg-[#0A2421]'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Tab 1: Formats Available on Request */}
        {activeTab === 'formats' && (
          <div className="space-y-8">
            
            {/* Filter controls */}
            <div className="bg-[#0A2421]/80 border border-[#0B332F] rounded-xl p-5 flex flex-wrap items-center justify-between gap-4 backdrop-blur-xl">
              <div className="flex flex-wrap items-center gap-3">
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-1.5 text-xs bg-[#071C1A] border border-[#0B332F] rounded text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
                  >
                    <option value="All">All Topics</option>
                    {categories.filter(c => c !== 'All').map(c => (
                      <option key={c} value={c} className="bg-[#071C1A]">{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={selectedAudience}
                    onChange={(e) => setSelectedAudience(e.target.value)}
                    className="px-3 py-1.5 text-xs bg-[#071C1A] border border-[#0B332F] rounded text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
                  >
                    <option value="All">All Audiences</option>
                    <option value="corporate">Corporate</option>
                    <option value="colleges">Colleges</option>
                    <option value="professionals">Professionals</option>
                    <option value="students">Students</option>
                  </select>
                </div>
              </div>

              {(selectedCategory !== 'All' || selectedAudience !== 'All' || search) && (
                <button
                  onClick={() => { setSelectedCategory('All'); setSelectedAudience('All'); setSearch(''); }}
                  className="text-xs text-[#27D7AC] hover:text-[#F3FAF7] flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset filters
                </button>
              )}
            </div>

            {/* Formats Grid with Photos & Telemetry Benchmark Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormats.map((ws) => {
                const photoUrl = ws.imageUrl || (ws.slug === 'introduction-to-generative-ai' ? ACADEMY_IMAGES.introGenAiWorkshop : ACADEMY_IMAGES.handsOnLab);
                const telemetry = ws.labTelemetry;

                return (
                  <div
                    key={ws.id}
                    className="bg-[#0A2421]/90 border border-[#27D7AC]/30 rounded-2xl overflow-hidden flex flex-col justify-between card-hover-effect shadow-[0_12px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl group"
                  >
                    <div>
                      {/* Photo Header with Emerald Gradient Overlay & Badge */}
                      <div className="relative h-48 sm:h-52 overflow-hidden border-b border-[#0B332F]">
                        <img
                          src={photoUrl}
                          alt={ws.title}
                          className="w-full h-full object-cover brightness-[0.8] contrast-[1.12] transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2421] via-[#0A2421]/30 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#071C1A]/70 via-transparent to-transparent pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded bg-[#071C1A]/90 border border-[#27D7AC]/40 text-[#27D7AC] font-mono text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-[0_0_12px_rgba(39,215,172,0.3)]">
                            {ws.badge || ws.category}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3">
                          <span className="px-2.5 py-1 rounded bg-[#064E46]/85 border border-[#27D7AC]/30 text-[#B7F3D7] font-mono text-[10px] font-medium backdrop-blur-md">
                            {ws.duration}
                          </span>
                        </div>

                        {/* Photo Bottom Bar */}
                        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-[#C3E5D8]">
                          <span className="font-semibold text-[#F3FAF7] flex items-center gap-1.5 bg-[#071C1A]/80 px-2 py-0.5 rounded border border-[#0B332F] backdrop-blur-md text-[11px]">
                            <Code2 className="w-3.5 h-3.5 text-[#27D7AC]" />
                            {ws.category}
                          </span>
                          <span className="text-[10px] font-mono text-[#8EB7A8] bg-[#071C1A]/80 px-2 py-0.5 rounded border border-[#0B332F] backdrop-blur-md">
                            {ws.formatType}
                          </span>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 space-y-4">
                        <div className="space-y-1.5">
                          <h3 
                            onClick={() => navigate(`/workshops/${ws.slug}`)}
                            className="font-display text-xl font-bold text-[#F3FAF7] hover:text-[#27D7AC] transition-colors cursor-pointer"
                          >
                            {ws.title}
                          </h3>

                          <p className="text-xs text-[#C3E5D8] leading-relaxed">
                            {ws.overview}
                          </p>
                        </div>

                        {/* Telemetry Benchmark Chart Widget */}
                        {telemetry && (
                          <div className="p-3.5 rounded-xl bg-[#071C1A]/90 border border-[#0B332F] space-y-2.5 shadow-inner">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-1.5 text-[#27D7AC] font-semibold text-[11px]">
                                <BarChart3 className="w-3.5 h-3.5" />
                                <span>{telemetry.chartTitle || 'Workshop Telemetry'}</span>
                              </div>
                              <span className="text-[10px] font-mono text-[#8EB7A8] flex items-center gap-1">
                                <TrendingUp className="w-3 h-3 text-[#27D7AC]" />
                                {telemetry.accuracy || 'Verified Impact'}
                              </span>
                            </div>

                            {/* Metric Bars */}
                            {telemetry.metrics && (
                              <div className="space-y-2 pt-0.5">
                                {telemetry.metrics.map((m, mIdx) => (
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
                            )}
                          </div>
                        )}

                        <div className="pt-2 text-xs text-[#C3E5D8] space-y-1">
                          <div><strong className="text-[#F3FAF7]">Audience:</strong> {ws.audience}</div>
                          <div><strong className="text-[#F3FAF7]">Delivery:</strong> {ws.deliveryMode.join(' / ')}</div>
                          <div className="text-[11px] text-[#27D7AC] font-mono pt-1">
                            Instructor: Abhishek Sharma & Senior Instructors
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="p-6 pt-0 border-t border-[#0B332F] flex items-center justify-between gap-3 mt-4">
                      <button
                        onClick={() => navigate(`/workshops/${ws.slug}`)}
                        className="text-xs font-medium text-[#27D7AC] hover:text-[#F3FAF7] underline underline-offset-4 cursor-pointer"
                      >
                        View Full Agenda →
                      </button>
                      <button
                        onClick={() => openEnquiryModal({ workshopSlug: ws.slug, workshopTitle: ws.title, type: 'workshop_registration' })}
                        className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded transition-all cursor-pointer shadow-[0_0_12px_rgba(39,215,172,0.4)]"
                      >
                        Request Workshop
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Tab 2: Confirmed Upcoming Events */}
        {activeTab === 'confirmed' && (
          <div className="p-12 text-center bg-[#0A2421]/80 border border-[#27D7AC]/30 rounded-2xl space-y-5 max-w-2xl mx-auto shadow-[0_0_30px_rgba(39,215,172,0.15)] backdrop-blur-xl">
            <div className="w-12 h-12 rounded-full bg-[#064E46]/60 border border-[#27D7AC]/40 text-[#27D7AC] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(39,215,172,0.3)]">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-[#F3FAF7]">
              No Confirmed Public Batches Currently Scheduled
            </h2>
            <p className="text-sm text-[#C3E5D8] leading-relaxed">
              We deliver workshops primarily as commissioned corporate engagements and campus bootcamps. When public open-enrolment batches are announced, dates and capacity limits will be posted here.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openEnquiryModal({ type: 'workshop_registration' })}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-lg transition-all cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.4)]"
              >
                Register Interest for Next Public Batch
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Past Events */}
        {activeTab === 'past' && (
          <div className="p-12 text-center bg-[#0A2421]/80 border border-[#0B332F] rounded-2xl space-y-4 max-w-xl mx-auto backdrop-blur-xl">
            <h2 className="font-display text-xl font-bold text-[#F3FAF7]">
              Past Events Archive
            </h2>
            <p className="text-xs text-[#C3E5D8] leading-relaxed">
              Records and case studies of completed institutional and corporate workshops will be archived here upon verification.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('formats')}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F3FAF7] border border-[#0B332F] bg-[#071C1A] hover:border-[#27D7AC] rounded transition-colors cursor-pointer"
              >
                Return to Available Formats
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
