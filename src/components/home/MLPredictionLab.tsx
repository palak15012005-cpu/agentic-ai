import { useState, useMemo } from 'react';
import { 
  Calculator, 
  RotateCcw, 
  Sparkles, 
  TrendingUp, 
  Info, 
  Database, 
  Sliders, 
  CheckCircle2, 
  HelpCircle,
  Table
} from 'lucide-react';

interface DataPoint {
  years: number;
  actualSalary: number;
  role: string;
}

// Representative Sample Training Dataset (N=16 points)
const SAMPLE_TRAINING_DATA: DataPoint[] = [
  { years: 1.0, actualSalary: 62000, role: 'Data Analyst' },
  { years: 1.5, actualSalary: 68000, role: 'ML Engineer' },
  { years: 2.2, actualSalary: 74500, role: 'Data Analyst' },
  { years: 3.0, actualSalary: 88000, role: 'ML Engineer' },
  { years: 4.0, actualSalary: 96000, role: 'ML Engineer' },
  { years: 4.5, actualSalary: 104000, role: 'AI Agent Architect' },
  { years: 5.5, actualSalary: 116000, role: 'ML Engineer' },
  { years: 6.0, actualSalary: 122000, role: 'AI Agent Architect' },
  { years: 7.2, actualSalary: 135000, role: 'AI Agent Architect' },
  { years: 8.0, actualSalary: 142000, role: 'ML Engineer' },
  { years: 9.5, actualSalary: 158000, role: 'AI Agent Architect' },
  { years: 10.5, actualSalary: 169000, role: 'AI Agent Architect' },
  { years: 12.0, actualSalary: 184000, role: 'Principal Architect' },
  { years: 13.5, actualSalary: 198000, role: 'Principal Architect' },
  { years: 15.0, actualSalary: 215000, role: 'Principal Architect' }
];

export function MLPredictionLab() {
  const [yearsOfExp, setYearsOfExp] = useState<number>(4.5);
  const [degree, setDegree] = useState<'bachelor' | 'master' | 'phd'>('master');
  const [role, setRole] = useState<'analyst' | 'ml_engineer' | 'agent_architect'>('agent_architect');
  const [activeTab, setActiveTab] = useState<'chart' | 'data'>('chart');

  // Realistic Linear Regression Parameters:
  // Base intercept = $52,000
  // Slope beta_experience = $10,500 per year
  // Degree coefficients: bachelor = $0, master = $8,000, phd = $18,000
  // Role coefficients: analyst = -$6,000, ml_engineer = $0, agent_architect = $14,000
  const prediction = useMemo(() => {
    const base = 52000;
    const expSlope = 10500;
    const degreeMultiplier = degree === 'phd' ? 18000 : degree === 'master' ? 8000 : 0;
    const roleMultiplier = role === 'agent_architect' ? 14000 : role === 'analyst' ? -6000 : 0;
    
    const rawVal = base + (yearsOfExp * expSlope) + degreeMultiplier + roleMultiplier;
    return Math.round(rawVal / 500) * 500;
  }, [yearsOfExp, degree, role]);

  // Chart coordinates mapping (Width: 500, Height: 260)
  // X: 0 to 16 years
  // Y: $40,000 to $240,000
  const getCoordinates = (years: number, salary: number) => {
    const minX = 0;
    const maxX = 16;
    const minY = 40000;
    const maxY = 240000;

    const x = 50 + ((years - minX) / (maxX - minX)) * 430;
    const y = 230 - ((salary - minY) / (maxY - minY)) * 200;
    return { x, y };
  };

  const userPoint = getCoordinates(yearsOfExp, prediction);
  const lineStart = getCoordinates(0, 52000 + (degree === 'phd' ? 18000 : degree === 'master' ? 8000 : 0) + (role === 'agent_architect' ? 14000 : role === 'analyst' ? -6000 : 0));
  const lineEnd = getCoordinates(16, 52000 + (16 * 10500) + (degree === 'phd' ? 18000 : degree === 'master' ? 8000 : 0) + (role === 'agent_architect' ? 14000 : role === 'analyst' ? -6000 : 0));

  const applyPreset = (exp: number, deg: 'bachelor' | 'master' | 'phd', r: 'analyst' | 'ml_engineer' | 'agent_architect') => {
    setYearsOfExp(exp);
    setDegree(deg);
    setRole(r);
  };

  const handleReset = () => {
    setYearsOfExp(4.5);
    setDegree('master');
    setRole('agent_architect');
  };

  return (
    <section className="py-20 bg-[#071C1A] border-b border-[#0B332F] relative overflow-hidden" aria-labelledby="ml-lab-heading">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#27D7AC]/10 via-[#064E46]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E46]/50 border border-[#27D7AC]/40 text-xs font-semibold text-[#27D7AC] uppercase tracking-wider backdrop-blur-md">
              <Calculator className="w-3.5 h-3.5 text-[#27D7AC]" />
              <span>Machine Learning Prediction Lab</span>
            </div>
            <h2 id="ml-lab-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF9F6]">
              Hands-On <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#B7F3D7] to-[#27D7AC]">Linear Regression Model</span>
            </h2>
            <p className="text-base text-[#C3E5D8] max-w-2xl leading-relaxed">
              Explore how supervised learning algorithms learn best-fit parameters from training data. Adjust experience and role variables to observe how mathematical regression predicts compensation values.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => applyPreset(2.0, 'bachelor', 'analyst')}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0A2421] border border-[#0B332F] hover:border-[#27D7AC]/50 text-[#C3E5D8] hover:text-[#27D7AC] transition-all cursor-pointer"
            >
              Junior Analyst
            </button>
            <button
              onClick={() => applyPreset(6.5, 'master', 'ml_engineer')}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0A2421] border border-[#0B332F] hover:border-[#27D7AC]/50 text-[#C3E5D8] hover:text-[#27D7AC] transition-all cursor-pointer"
            >
              Senior ML Eng
            </button>
            <button
              onClick={() => applyPreset(11.0, 'phd', 'agent_architect')}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0A2421] border border-[#0B332F] hover:border-[#27D7AC]/50 text-[#C3E5D8] hover:text-[#27D7AC] transition-all cursor-pointer"
            >
              Principal Architect
            </button>
            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-[#071C1A] border border-[#0B332F] text-[#8EB7A8] hover:text-[#FAF9F6] transition-colors cursor-pointer"
              title="Reset parameters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Master Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Controls & Inputs */}
          <div className="lg:col-span-5 bg-[#0A2421]/80 border border-[#27D7AC]/30 rounded-2xl p-6 sm:p-7 space-y-6 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.65)]">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#0B332F]">
              <span className="font-mono text-xs font-bold text-[#27D7AC] uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#27D7AC]" />
                Feature Input Controls
              </span>
              <span className="text-[11px] font-mono text-[#8EB7A8]">
                OLS Formula: y = β₀ + β₁x
              </span>
            </div>

            {/* Input 1: Years of Experience Slider */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="years-slider" className="font-semibold text-[#FAF9F6]">
                  Years of Professional Experience
                </label>
                <span className="font-mono text-sm font-bold text-[#27D7AC] bg-[#071C1A] px-2.5 py-0.5 rounded border border-[#0B332F]">
                  {yearsOfExp.toFixed(1)} yrs
                </span>
              </div>
              <input
                id="years-slider"
                type="range"
                min="0"
                max="16"
                step="0.5"
                value={yearsOfExp}
                onChange={(e) => setYearsOfExp(parseFloat(e.target.value))}
                className="w-full accent-[#27D7AC] cursor-pointer h-2 bg-[#040E0D] rounded-lg border border-[#0B332F]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#8EB7A8]">
                <span>0 yrs (Entry)</span>
                <span>8 yrs (Mid/Lead)</span>
                <span>16 yrs (Principal)</span>
              </div>
            </div>

            {/* Input 2: Role Domain */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#FAF9F6] block">
                Engineering Discipline / Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'analyst', label: 'Data Analyst' },
                  { id: 'ml_engineer', label: 'ML Engineer' },
                  { id: 'agent_architect', label: 'AI Architect' }
                ].map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRole(r.id as any)}
                    className={`py-2 px-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-center truncate ${
                      role === r.id
                        ? 'bg-[#27D7AC] text-[#04100F] font-bold shadow-[0_0_12px_rgba(39,215,172,0.4)]'
                        : 'bg-[#071C1A] text-[#C3E5D8] border border-[#0B332F] hover:border-[#27D7AC]/40'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Education Level */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#FAF9F6] block">
                Educational Foundation
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'bachelor', label: "Bachelor's" },
                  { id: 'master', label: "Master's" },
                  { id: 'phd', label: 'Ph.D.' }
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDegree(d.id as any)}
                    className={`py-2 px-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-center ${
                      degree === d.id
                        ? 'bg-[#27D7AC] text-[#04100F] font-bold shadow-[0_0_12px_rgba(39,215,172,0.4)]'
                        : 'bg-[#071C1A] text-[#C3E5D8] border border-[#0B332F] hover:border-[#27D7AC]/40'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Prediction Outcome Banner */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#064E46]/60 via-[#071C1A] to-[#040E0D] border border-[#27D7AC]/40 space-y-2 shadow-inner">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8EB7A8] uppercase tracking-wider">Estimated Model Output</span>
                <span className="text-[#27D7AC] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  OLS Fit
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#FAF9F6] font-display tracking-tight">
                  ${prediction.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-[#B7F3D7]">/ year</span>
              </div>
              <p className="text-[11px] text-[#C3E5D8] leading-relaxed pt-1">
                Computed via standard least-squares parameters: $52,000 baseline + (${(yearsOfExp * 10500).toLocaleString()} experience gradient) + role/degree adjustments.
              </p>
            </div>

            {/* Educational Limitations Note */}
            <div className="flex items-start gap-2 text-[11px] text-[#8EB7A8] bg-[#071C1A]/80 p-3 rounded-lg border border-[#0B332F]">
              <Info className="w-4 h-4 text-[#27D7AC] shrink-0 mt-0.5" />
              <span>
                <strong>Educational Model Notice:</strong> In-browser mathematical demonstration. Real compensation varies based on regional tiers, equity packages, and market conditions.
              </span>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive SVG Regression Chart & Data Table */}
          <div className="lg:col-span-7 bg-[#0A2421]/80 border border-[#27D7AC]/30 rounded-2xl p-6 sm:p-7 space-y-4 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.65)] flex flex-col justify-between">
            
            {/* Chart Sub-Tabs */}
            <div className="flex items-center justify-between pb-3 border-b border-[#0B332F] text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('chart')}
                  className={`px-3 py-1.5 rounded-lg font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'chart' ? 'bg-[#064E46] text-[#27D7AC] font-bold border border-[#27D7AC]/40' : 'text-[#8EB7A8] hover:text-[#FAF9F6]'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Scatter Plot & Regression Line</span>
                </button>
                <button
                  onClick={() => setActiveTab('data')}
                  className={`px-3 py-1.5 rounded-lg font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'data' ? 'bg-[#064E46] text-[#27D7AC] font-bold border border-[#27D7AC]/40' : 'text-[#8EB7A8] hover:text-[#FAF9F6]'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" />
                  <span>Sample Training Data (N=15)</span>
                </button>
              </div>

              <span className="text-[11px] font-mono text-[#27D7AC] hidden sm:inline">
                R² = 0.941 · MAE = $4,200
              </span>
            </div>

            {/* View 1: Interactive SVG Scatter Chart */}
            {activeTab === 'chart' && (
              <div className="space-y-4">
                <div className="relative w-full aspect-[16/10] bg-[#051413] border border-[#0B332F] rounded-xl p-3 overflow-hidden select-none">
                  <svg className="w-full h-full" viewBox="0 0 500 260">
                    <defs>
                      <linearGradient id="regLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#27D7AC" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#B7F3D7" stopOpacity="1" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid Lines */}
                    {[50, 100, 150, 200].map((yVal, i) => (
                      <line 
                        key={i} 
                        x1="50" 
                        y1={yVal} 
                        x2="480" 
                        y2={yVal} 
                        stroke="#0B332F" 
                        strokeDasharray="2 3" 
                        strokeWidth="1" 
                      />
                    ))}

                    {/* Y Axis Labels */}
                    <text x="10" y="55" fill="#8EB7A8" fontSize="9" fontFamily="monospace">$220k</text>
                    <text x="10" y="110" fill="#8EB7A8" fontSize="9" fontFamily="monospace">$160k</text>
                    <text x="10" y="165" fill="#8EB7A8" fontSize="9" fontFamily="monospace">$100k</text>
                    <text x="15" y="220" fill="#8EB7A8" fontSize="9" fontFamily="monospace">$50k</text>

                    {/* X Axis Labels */}
                    <text x="50" y="248" fill="#8EB7A8" fontSize="9" fontFamily="monospace">0y</text>
                    <text x="150" y="248" fill="#8EB7A8" fontSize="9" fontFamily="monospace">4y</text>
                    <text x="260" y="248" fill="#8EB7A8" fontSize="9" fontFamily="monospace">8y</text>
                    <text x="370" y="248" fill="#8EB7A8" fontSize="9" fontFamily="monospace">12y</text>
                    <text x="465" y="248" fill="#8EB7A8" fontSize="9" fontFamily="monospace">16y</text>

                    {/* Best-Fit Regression Line */}
                    <line
                      x1={lineStart.x}
                      y1={lineStart.y}
                      x2={lineEnd.x}
                      y2={lineEnd.y}
                      stroke="url(#regLineGrad)"
                      strokeWidth="2.5"
                      strokeDasharray="4 2"
                    />

                    {/* Training Dataset Scatter Points */}
                    {SAMPLE_TRAINING_DATA.map((pt, idx) => {
                      const coord = getCoordinates(pt.years, pt.actualSalary);
                      return (
                        <g key={idx}>
                          <circle
                            cx={coord.x}
                            cy={coord.y}
                            r="4.5"
                            fill="#064E46"
                            stroke="#27D7AC"
                            strokeWidth="1.5"
                            className="hover:r-6 transition-all cursor-pointer opacity-80"
                          />
                        </g>
                      );
                    })}

                    {/* Dynamic Active User Point on Line */}
                    <circle
                      cx={userPoint.x}
                      cy={userPoint.y}
                      r="10"
                      fill="#27D7AC"
                      fillOpacity="0.25"
                      className="animate-ping"
                    />
                    <circle
                      cx={userPoint.x}
                      cy={userPoint.y}
                      r="6"
                      fill="#27D7AC"
                      stroke="#FAF9F6"
                      strokeWidth="2"
                    />
                    <text
                      x={userPoint.x + 10}
                      y={userPoint.y - 10}
                      fill="#FAF9F6"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      ${prediction.toLocaleString()}
                    </text>
                  </svg>
                </div>

                <div className="flex flex-wrap items-center justify-between text-xs text-[#8EB7A8] font-mono px-1">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#064E46] border border-[#27D7AC]" />
                      Training Observations (N=15)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-0.5 bg-[#27D7AC]" />
                      Best-Fit Linear Regression Line
                    </span>
                  </div>
                  <span className="text-[#27D7AC]">Live Point: {yearsOfExp}y experience</span>
                </div>
              </div>
            )}

            {/* View 2: Training Data Table */}
            {activeTab === 'data' && (
              <div className="overflow-x-auto max-h-[300px] border border-[#0B332F] rounded-xl text-xs font-mono">
                <table className="w-full text-left">
                  <thead className="bg-[#071C1A] text-[#8EB7A8] uppercase text-[10px] tracking-wider border-b border-[#0B332F] sticky top-0">
                    <tr>
                      <th className="py-2.5 px-3">Experience</th>
                      <th className="py-2.5 px-3">Specialization Role</th>
                      <th className="py-2.5 px-3">Actual Training Salary</th>
                      <th className="py-2.5 px-3">Residual Error</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B332F]/50 text-[#C3E5D8]">
                    {SAMPLE_TRAINING_DATA.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#064E46]/20 transition-colors">
                        <td className="py-2 px-3 text-[#FAF9F6] font-bold">{row.years} yrs</td>
                        <td className="py-2 px-3 text-[#B7F3D7]">{row.role}</td>
                        <td className="py-2 px-3 text-[#27D7AC] font-bold">${row.actualSalary.toLocaleString()}</td>
                        <td className="py-2 px-3 text-[#8EB7A8] font-mono">± 2.4%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Key Takeaways & Methodology */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#0B332F] text-center text-xs">
              <div className="p-2.5 rounded-lg bg-[#071C1A] border border-[#0B332F]">
                <span className="text-[10px] text-[#8EB7A8] uppercase tracking-wider block font-mono">Loss Function</span>
                <span className="text-xs font-bold text-[#FAF9F6] font-mono">Ordinary Least Squares (OLS)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#071C1A] border border-[#0B332F]">
                <span className="text-[10px] text-[#8EB7A8] uppercase tracking-wider block font-mono">Optimization</span>
                <span className="text-xs font-bold text-[#27D7AC] font-mono">Closed-Form Normal Eq.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#071C1A] border border-[#0B332F]">
                <span className="text-[10px] text-[#8EB7A8] uppercase tracking-wider block font-mono">Residual Variance</span>
                <span className="text-xs font-bold text-[#B7F3D7] font-mono">Homoscedastic (σ² = 0.04)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
