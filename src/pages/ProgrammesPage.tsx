import { useState, useMemo, useEffect } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { Search, RotateCcw, CheckCircle2, BarChart3, TrendingUp, Cpu, Sparkles, Code2, Layers } from 'lucide-react';
import { AudienceType, ProgrammeLevel, SubjectCategory, DeliveryMode } from '../types/index.ts';
import { ACADEMY_IMAGES, getProgrammePhoto } from '../assets/images.ts';

export function ProgrammesPage() {
  const { programmes, navigate, openEnquiryModal } = useAcademy();

  // Parse initial state from URL query parameters
  const [search, setSearch] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return p.get('search') || '';
    }
    return '';
  });

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return p.get('category') || 'All';
    }
    return 'All';
  });

  const [selectedAudience, setSelectedAudience] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return p.get('audience') || 'All';
    }
    return 'All';
  });

  const [selectedLevel, setSelectedLevel] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return p.get('level') || 'All';
    }
    return 'All';
  });

  const [selectedMode, setSelectedMode] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return p.get('mode') || 'All';
    }
    return 'All';
  });

  // Sync state to URL for shareable search results
  useEffect(() => {
    const params = new URLSearchParams();
    if (search.trim()) params.set('search', search.trim());
    if (selectedCategory !== 'All') params.set('category', selectedCategory);
    if (selectedAudience !== 'All') params.set('audience', selectedAudience);
    if (selectedLevel !== 'All') params.set('level', selectedLevel);
    if (selectedMode !== 'All') params.set('mode', selectedMode);

    const queryString = params.toString();
    const newRelativePathQuery = window.location.pathname + (queryString ? `?${queryString}` : '');
    window.history.replaceState(null, '', newRelativePathQuery);
  }, [search, selectedCategory, selectedAudience, selectedLevel, selectedMode]);

  const categories: (SubjectCategory | 'All')[] = [
    'All',
    'Generative AI',
    'Agentic AI & Automation',
    'Data & Analytics',
    'Machine Learning & NLP',
    'Software & Full-Stack'
  ];

  const audiences = [
    { id: 'All', label: 'All Audiences' },
    { id: 'corporate', label: 'Corporate Teams' },
    { id: 'colleges', label: 'Colleges & Faculty' },
    { id: 'professionals', label: 'Professionals' },
    { id: 'students', label: 'Students' }
  ];

  const levels: (ProgrammeLevel | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const modes: (DeliveryMode | 'All')[] = ['All', 'Online', 'Onsite', 'Hybrid'];

  const filteredProgrammes = useMemo(() => {
    return programmes.filter((prog) => {
      // 1. Search Query
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesTitle = prog.title.toLowerCase().includes(q);
        const matchesOverview = prog.overview.toLowerCase().includes(q);
        const matchesOutcomes = prog.learningOutcomes.some(o => o.toLowerCase().includes(q));
        const matchesTools = prog.toolsUsed.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesOverview && !matchesOutcomes && !matchesTools) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'All' && prog.category !== selectedCategory) {
        return false;
      }

      // 3. Audience Filter
      if (selectedAudience !== 'All' && !prog.audienceType.includes(selectedAudience as AudienceType)) {
        return false;
      }

      // 4. Level Filter
      if (selectedLevel !== 'All') {
        if (selectedLevel === 'Beginner' && prog.level !== 'Beginner' && prog.level !== 'Beginner to Intermediate') return false;
        if (selectedLevel === 'Intermediate' && prog.level !== 'Intermediate' && prog.level !== 'Beginner to Intermediate') return false;
        if (selectedLevel === 'Advanced' && prog.level !== 'Advanced') return false;
      }

      // 5. Mode Filter
      if (selectedMode !== 'All' && !prog.deliveryModes.includes(selectedMode as DeliveryMode)) {
        return false;
      }

      return true;
    });
  }, [programmes, search, selectedCategory, selectedAudience, selectedLevel, selectedMode]);

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory('All');
    setSelectedAudience('All');
    setSelectedLevel('All');
    setSelectedMode('All');
  };

  const hasActiveFilters = search || selectedCategory !== 'All' || selectedAudience !== 'All' || selectedLevel !== 'All' || selectedMode !== 'All';

  return (
    <div className="py-12 bg-[#071C1A] text-[#F3FAF7] min-h-screen relative overflow-hidden">
      {/* Soft Ambient Radial Lab Reflections */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-[#27D7AC]/10 via-[#064E46]/25 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[350px] bg-[#064E46]/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Architectural Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B332F_1px,transparent_1px),linear-gradient(to_bottom,#0B332F_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-20 pointer-events-none" />

      <SeoHead
        title="AI & Engineering Programmes Catalogue – Agentic.AI Emerald Glass Lab"
        description="Explore interactive engineering curricula in Generative AI, Autonomous Agents, Data Analytics, Machine Learning, and Full-Stack Engineering."
        canonicalPath="/programmes"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Programmes Catalogue' }]} />

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-8 space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3FAF7]">
              All Programmes
            </h1>
            <p className="text-base text-[#C3E5D8] leading-relaxed max-w-2xl">
              Every curriculum is engineered around practical competencies and live lab sandboxes. Filter by audience, topic, skill level, and delivery format.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <div className="p-4 rounded-xl bg-[#0A2421]/80 border border-[#27D7AC]/30 backdrop-blur-md shadow-md text-xs space-y-1">
              <span className="text-[#8EB7A8] block">Curriculum Architect:</span>
              <span className="font-display text-sm font-bold text-[#F3FAF7] block">Abhishek Sharma</span>
              <span className="text-[#27D7AC] block font-mono text-[11px]">MSc AI & ML · Lead Instructor</span>
            </div>
          </div>
        </div>

        {/* All Programmes Showcase Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-[#27D7AC]/35 mb-10 shadow-[0_16px_45px_rgba(0,0,0,0.6)] group">
          <img
            src={ACADEMY_IMAGES.allProgrammesHub}
            alt="Applied engineering team collaborative session mapping out programmes on whiteboard"
            className="w-full h-72 sm:h-96 object-cover brightness-[0.88] contrast-[1.08] group-hover:scale-[1.02] transition-transform duration-700"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071C1A] via-[#071C1A]/40 to-transparent pointer-events-none" />
        </div>

        {/* Filter Controls Box: Emerald Glass Panel */}
        <div className="bg-[#0A2421]/85 border border-[#27D7AC]/30 rounded-2xl p-6 sm:p-7 mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl space-y-6">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#8EB7A8] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search programmes by topic, keyword, or tool (e.g. n8n, SQL, RAG, PyTorch, LangGraph, LoRA)..."
              className="w-full pl-11 pr-4 py-3 text-sm bg-[#071C1A]/90 border border-[#0B332F] rounded-lg text-[#F3FAF7] placeholder-[#8EB7A8]/70 focus:border-[#27D7AC] focus:ring-1 focus:ring-[#27D7AC] outline-none transition-colors"
            />
          </div>

          {/* Interactive Filter Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Subject Category */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#B7F3D7] mb-1.5">
                Subject Area
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#071C1A] border border-[#0B332F] rounded text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-[#071C1A]">{c}</option>
                ))}
              </select>
            </div>

            {/* Target Audience */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#B7F3D7] mb-1.5">
                Target Audience
              </label>
              <select
                value={selectedAudience}
                onChange={(e) => setSelectedAudience(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#071C1A] border border-[#0B332F] rounded text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
              >
                {audiences.map((a) => (
                  <option key={a.id} value={a.id} className="bg-[#071C1A]">{a.label}</option>
                ))}
              </select>
            </div>

            {/* Skill Level */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#B7F3D7] mb-1.5">
                Skill Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#071C1A] border border-[#0B332F] rounded text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
              >
                {levels.map((l) => (
                  <option key={l} value={l} className="bg-[#071C1A]">{l}</option>
                ))}
              </select>
            </div>

            {/* Delivery Mode */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#B7F3D7] mb-1.5">
                Delivery Format
              </label>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#071C1A] border border-[#0B332F] rounded text-[#F3FAF7] focus:border-[#27D7AC] outline-none"
              >
                {modes.map((m) => (
                  <option key={m} value={m} className="bg-[#071C1A]">{m}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Active Filter Indicators & Reset */}
          {hasActiveFilters && (
            <div className="pt-3 border-t border-[#0B332F] flex items-center justify-between text-xs text-[#C3E5D8]">
              <span>Showing {filteredProgrammes.length} of {programmes.length} programmes matching criteria</span>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-[#27D7AC] hover:text-[#F3FAF7] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset All Filters
              </button>
            </div>
          )}

        </div>

        {/* Programmes Grid: All Programmes with Visual Photos & Telemetry Charts */}
        {filteredProgrammes.length === 0 ? (
          <div className="py-20 text-center bg-[#0A2421]/80 border border-[#0B332F] rounded-2xl space-y-4">
            <h3 className="font-display text-xl font-bold text-[#F3FAF7]">
              No matching programmes found
            </h3>
            <p className="text-sm text-[#C3E5D8] max-w-md mx-auto">
              Try adjusting your search query or resetting filters to view all available academy curricula.
            </p>
            <div className="pt-2">
              <button
                onClick={clearFilters}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.4)]"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProgrammes.map((prog) => {
              const photoUrl = getProgrammePhoto(prog.slug || prog.id, prog.imageUrl);
              const telemetry = prog.labTelemetry;

              return (
                <div
                  key={prog.id}
                  className="bg-[#0A2421]/80 border border-[#27D7AC]/30 rounded-2xl overflow-hidden flex flex-col justify-between card-hover-effect backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] group relative"
                >
                  {/* Cybernetic High-Tech Corner Crosshairs */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#27D7AC] z-20 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#27D7AC] z-20 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Programme Photo Header with Clean Emerald Gradient Overlay */}
                    <div className="relative h-56 sm:h-64 overflow-hidden border-b border-[#0B332F]">
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

                    <div className="p-6 sm:p-7 space-y-5">
                      {/* Title & Overview */}
                      <div className="space-y-2">
                        <h2 
                          className="font-display text-2xl font-bold text-[#F3FAF7] hover:text-[#27D7AC] transition-colors cursor-pointer"
                          onClick={() => navigate(`/programmes/${prog.slug}`)}
                        >
                          {prog.title}
                        </h2>

                        <p className="text-sm text-[#C3E5D8] leading-relaxed">
                          {prog.overview}
                        </p>
                      </div>

                      {/* Interactive Curriculum Benchmark Chart Widget */}
                      {telemetry && (
                        <div className="p-4 rounded-xl bg-[#071C1A]/90 border border-[#0B332F] space-y-3 shadow-inner">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 text-[#27D7AC] font-semibold">
                              <BarChart3 className="w-3.5 h-3.5" />
                              <span>{telemetry.chartTitle || 'Lab Telemetry Benchmarks'}</span>
                            </div>
                            <span className="text-[10px] font-mono text-[#8EB7A8] flex items-center gap-1">
                              <TrendingUp className="w-3 h-3 text-[#27D7AC]" />
                              {telemetry.accuracy || 'Verified Impact'}
                            </span>
                          </div>

                          {/* Metric Bars */}
                          {telemetry.metrics && (
                            <div className="space-y-2.5 pt-1">
                              {telemetry.metrics.map((m, mIdx) => (
                                <div key={mIdx} className="space-y-1">
                                  <div className="flex items-center justify-between text-[11px] font-mono">
                                    <span className="text-[#8EB7A8]">{m.label}</span>
                                    <span className="text-[#B7F3D7] font-semibold">{m.value}</span>
                                  </div>
                                  <div className="w-full h-1.5 bg-[#04100F] rounded-full overflow-hidden border border-[#0B332F]">
                                    <div 
                                      className="h-full bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7] rounded-full shadow-[0_0_8px_rgba(39,215,172,0.5)] transition-all duration-1000"
                                      style={{ width: `${m.pct}%` }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Core Modules Count & Outcomes */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between text-xs text-[#8EB7A8]">
                          <span className="font-semibold uppercase tracking-wider text-[#F3FAF7]">Curriculum Preview</span>
                          <span className="font-mono text-[#27D7AC] px-2 py-0.5 rounded bg-[#064E46]/40 border border-[#27D7AC]/30">
                            {prog.modules.length} Intensive Modules
                          </span>
                        </div>

                        <ul className="space-y-1.5 text-xs text-[#8EB7A8]">
                          {prog.learningOutcomes.slice(0, 3).map((out, idxOut) => (
                            <li key={idxOut} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#27D7AC] shrink-0 mt-0.5" />
                              <span className="text-[#C3E5D8]">{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools preview */}
                      <div className="pt-2 text-xs text-[#8EB7A8] flex flex-wrap gap-1.5 items-center">
                        <span className="font-medium text-[#F3FAF7] mr-1 flex items-center gap-1">
                          <Layers className="w-3 h-3 text-[#27D7AC]" />
                          Tools:
                        </span>
                        {prog.toolsUsed.map((tool, i) => (
                          <span key={i} className="font-mono bg-[#071C1A] text-[#B7F3D7] px-2 py-0.5 rounded border border-[#0B332F] text-[11px]">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
