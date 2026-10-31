import { useState, useRef } from 'react';
import { useAcademy } from '../../context/AcademyContext.tsx';
import { 
  Sparkles, 
  BrainCircuit, 
  Bot, 
  BarChart4, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Activity,
  Terminal,
  Cpu
} from 'lucide-react';

interface ConstellationNode {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  icon: typeof Sparkles;
  x: number; // percentage in SVG viewBox
  y: number; // percentage in SVG viewBox
  connections: string[];
  metrics: { label: string; value: string };
  keyTech: string[];
  recommendedProgrammeSlug: string;
  recommendedProgrammeTitle: string;
}

const CONSTELLATION_NODES: ConstellationNode[] = [
  {
    id: 'genai',
    name: 'Generative AI',
    category: 'Foundation Models',
    shortDesc: 'Context orchestration, structured prompt schemas, few-shot prompting & multimodal reasoning.',
    icon: Sparkles,
    x: 22,
    y: 28,
    connections: ['ml', 'agents', 'projects'],
    metrics: { label: 'Schema Fidelity', value: '99.4%' },
    keyTech: ['Claude 3.7', 'Gemini 2.5', 'Pydantic', 'Structured Outputs'],
    recommendedProgrammeSlug: 'prompt-engineering-for-professionals',
    recommendedProgrammeTitle: 'Prompt Engineering for Professionals'
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    category: 'Machine Learning',
    shortDesc: 'Statistical feature pipelines, gradient boosting (XGBoost), PyTorch neural architectures & SHAP explainability.',
    icon: BrainCircuit,
    x: 78,
    y: 26,
    connections: ['genai', 'analytics', 'projects'],
    metrics: { label: 'Validation ROC-AUC', value: '0.946' },
    keyTech: ['Scikit-Learn', 'PyTorch', 'XGBoost', 'Optuna', 'SHAP'],
    recommendedProgrammeSlug: 'machine-learning-with-practical-projects',
    recommendedProgrammeTitle: 'Machine Learning with Practical Projects'
  },
  {
    id: 'agents',
    name: 'AI Agents',
    category: 'Autonomous Systems',
    shortDesc: 'ReAct cognitive execution loops, tool binding via MCP, persistent vector state & human-in-the-loop circuits.',
    icon: Bot,
    x: 50,
    y: 50,
    connections: ['genai', 'ml', 'analytics', 'projects'],
    metrics: { label: 'Execution Reliability', value: 'Deterministic' },
    keyTech: ['LangGraph', 'Model Context Protocol (MCP)', 'n8n', 'Vector Memory'],
    recommendedProgrammeSlug: 'agentic-ai-and-workflow-automation',
    recommendedProgrammeTitle: 'Agentic AI & Workflow Automation'
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    category: 'Data Engineering',
    shortDesc: 'Relational data pipelines, multi-table SQL CTEs, vectorized Pandas transformations & executive star-schema BI.',
    icon: BarChart4,
    x: 20,
    y: 74,
    connections: ['ml', 'agents', 'projects'],
    metrics: { label: 'Pipeline Velocity', value: '1.2M rows/s' },
    keyTech: ['PostgreSQL', 'Python / Pandas', 'Power BI / DAX', 'SQL CTEs'],
    recommendedProgrammeSlug: 'data-analytics-with-python-and-sql',
    recommendedProgrammeTitle: 'Data Analytics with Python & SQL'
  },
  {
    id: 'projects',
    name: 'Practical Projects',
    category: 'Production Lab',
    shortDesc: 'Deploying verified AI applications to production containers with real-time SSE streaming, caching & security guardrails.',
    icon: Layers,
    x: 78,
    y: 76,
    connections: ['genai', 'ml', 'agents', 'analytics'],
    metrics: { label: 'Production Uptime', value: '99.8%' },
    keyTech: ['FastAPI / Express', 'React 19', 'Docker', 'SSE Streaming', 'Redis Cache'],
    recommendedProgrammeSlug: 'ai-application-development-and-deployment',
    recommendedProgrammeTitle: 'AI Application Development & Deployment'
  }
];

export function AIConstellation() {
  const { navigate } = useAcademy();
  const [activeNodeId, setActiveNodeId] = useState<string>('agents');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedNode = CONSTELLATION_NODES.find(n => n.id === (hoveredNodeId || activeNodeId)) || CONSTELLATION_NODES[2];

  // Helper to test if connection is active
  const isConnected = (sourceId: string, targetId: string) => {
    const focusId = hoveredNodeId || activeNodeId;
    return (sourceId === focusId && CONSTELLATION_NODES.find(n => n.id === sourceId)?.connections.includes(targetId)) ||
           (targetId === focusId && CONSTELLATION_NODES.find(n => n.id === targetId)?.connections.includes(sourceId));
  };

  return (
    <section 
      aria-labelledby="constellation-heading"
      className="py-20 bg-[#071C1A] border-b border-[#0B332F] relative overflow-hidden"
    >
      {/* Background Soft Emerald Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#27D7AC]/10 via-[#064E46]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#064E46]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 id="constellation-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F3FAF7]">
            Animated AI Constellation
          </h2>
          <p className="text-base text-[#C3E5D8] leading-relaxed">
            Explore interconnected core disciplines in modern AI. Click or hover any node to inspect telemetry, real tool stacks, and direct learning pathways.
          </p>
        </div>

        {/* Grid: Left Constellation Canvas, Right Glass Inspection Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Constellation SVG & Node Canvas */}
          <div 
            ref={containerRef}
            className="lg:col-span-7 bg-[#0A2421]/80 border border-[#27D7AC]/30 rounded-2xl p-6 sm:p-8 relative backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.65)] min-h-[460px] flex flex-col justify-between"
          >
            {/* Constellation Canvas Viewport */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] max-h-[380px] my-2 select-none">
              
              {/* Dynamic SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#27D7AC" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#B7F3D7" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="lineGradIdle" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0B332F" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#064E46" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Render All Node Interconnections */}
                {CONSTELLATION_NODES.map((node) => 
                  node.connections.map((targetId) => {
                    const targetNode = CONSTELLATION_NODES.find(n => n.id === targetId);
                    if (!targetNode || node.id > targetId) return null; // Avoid duplicate lines
                    const active = isConnected(node.id, targetId);

                    return (
                      <g key={`${node.id}-${targetId}`}>
                        <line
                          x1={node.x}
                          y1={node.y}
                          x2={targetNode.x}
                          y2={targetNode.y}
                          stroke={active ? 'url(#lineGradActive)' : 'url(#lineGradIdle)'}
                          strokeWidth={active ? '0.75' : '0.35'}
                          strokeDasharray={active ? '2 1' : 'none'}
                          className={active ? 'transition-all duration-300' : ''}
                        />
                        {active && (
                          <circle r="0.8" fill="#F3FAF7" className="animate-pulse">
                            <animateMotion
                              path={`M ${node.x} ${node.y} L ${targetNode.x} ${targetNode.y}`}
                              dur="2.4s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })
                )}
              </svg>

              {/* Render Interactive Nodes */}
              {CONSTELLATION_NODES.map((node) => {
                const NodeIcon = node.icon;
                const isSelected = selectedNode.id === node.id;
                const isCenter = node.id === 'agents';

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onFocus={() => setActiveNodeId(node.id)}
                    tabIndex={0}
                    aria-label={`Inspect ${node.name} node: ${node.category}`}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D7AC] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071C1A] rounded-2xl transition-all duration-300 ${
                      isSelected ? 'scale-110 z-20' : 'hover:scale-105 z-10'
                    }`}
                  >
                    {/* Glowing Aura */}
                    <div 
                      className={`absolute -inset-2 rounded-2xl blur-md transition-opacity duration-300 ${
                        isSelected 
                          ? 'bg-[#27D7AC]/40 opacity-100' 
                          : 'bg-[#064E46]/20 opacity-0 group-hover:opacity-75'
                      }`} 
                    />

                    {/* Node Glass Card */}
                    <div className={`relative px-3 sm:px-4 py-2.5 rounded-xl flex items-center gap-2.5 border transition-all duration-300 backdrop-blur-md shadow-lg ${
                      isSelected
                        ? 'bg-[#064E46]/95 border-[#27D7AC] shadow-[0_0_24px_rgba(39,215,172,0.45)]'
                        : 'bg-[#071C1A]/90 border-[#0B332F] group-hover:border-[#27D7AC]/60 group-hover:bg-[#0A2421]'
                    }`}>
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-[#27D7AC] text-[#04100F] shadow-[0_0_12px_#27D7AC]' 
                          : 'bg-[#064E46]/50 text-[#27D7AC] group-hover:bg-[#27D7AC]/20'
                      }`}>
                        <NodeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>

                      <div className="text-left">
                        <span className={`block font-display text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-colors ${
                          isSelected ? 'text-[#F3FAF7]' : 'text-[#C3E5D8] group-hover:text-[#F3FAF7]'
                        }`}>
                          {node.name}
                        </span>
                        <span className="block text-[10px] text-[#8EB7A8] font-mono whitespace-nowrap">
                          {node.category}
                        </span>
                      </div>

                      {/* Small Pulse Ring for the Central Agent Node */}
                      {isCenter && !isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#27D7AC] animate-ping ml-1" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Node Info */}
            <div className="pt-3 border-t border-[#0B332F] flex items-center justify-between text-xs text-[#8EB7A8]">
              <span className="flex items-center gap-1.5 text-[#27D7AC] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#27D7AC]" />
                Interactive Neural Map
              </span>
              <span className="font-mono text-[11px] text-[#B7F3D7]">
                {selectedNode.name}
              </span>
            </div>

          </div>

          {/* Right Column: Translucent Glass Inspection Terminal */}
          <div className="lg:col-span-5">
            <div className="bg-[#0A2421]/90 border border-[#27D7AC]/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.7)] space-y-6 relative overflow-hidden transition-all duration-300">
              
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#D4AF37]" />

              {/* Selected Node Details */}
              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F3FAF7] flex items-center gap-3">
                  {selectedNode.name}
                </h3>
                <p className="text-sm text-[#C3E5D8] leading-relaxed">
                  {selectedNode.shortDesc}
                </p>
              </div>

              {/* Key Technologies Pills */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8EB7A8] block">
                  Production Toolstack & Protocols
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.keyTech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#071C1A] border border-[#0B332F] text-xs font-mono text-[#B7F3D7] hover:border-[#27D7AC]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connected Disciplines */}
              <div className="space-y-2 pt-2 border-t border-[#0B332F]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8EB7A8] block">
                  Interconnected Pathways
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.connections.map((cId) => {
                    const cNode = CONSTELLATION_NODES.find(n => n.id === cId);
                    if (!cNode) return null;
                    return (
                      <button
                        key={cId}
                        onClick={() => setActiveNodeId(cId)}
                        className="text-xs px-2.5 py-1 rounded bg-[#064E46]/40 hover:bg-[#064E46]/80 text-[#C3E5D8] hover:text-[#27D7AC] border border-[#27D7AC]/25 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27D7AC]" />
                        {cNode.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Syllabus Navigation Button */}
              <div className="pt-2">
                <button
                  onClick={() => navigate(`/programmes/${selectedNode.recommendedProgrammeSlug}`)}
                  className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-md transition-all cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.45)] hover:shadow-[0_0_30px_rgba(39,215,172,0.7)] flex items-center justify-center gap-2"
                >
                  <Cpu className="w-4 h-4 text-[#04100F]" />
                  <span>Explore {selectedNode.recommendedProgrammeTitle}</span>
                  <ArrowRight className="w-4 h-4 text-[#04100F]" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
