import { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Film, 
  Video, 
  Sliders, 
  Maximize2, 
  Volume2, 
  VolumeX, 
  Download, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { useAcademy } from '../../context/AcademyContext.tsx';

interface VideoShowcaseItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  model: string;
  prompt: string;
  metrics: { fps: number; resolution: string; bitrate: string };
  gradient: string;
  animationType: 'agents' | 'attention' | 'vector' | 'analytics';
}

const CURATED_AI_VIDEOS: VideoShowcaseItem[] = [
  {
    id: 'vid-agent-loop',
    title: 'Autonomous Multi-Agent Loop In Realtime',
    category: 'Agentic AI & Orchestration',
    duration: '00:08',
    model: 'Veo 2.0 / Omni-Flash Diffusion',
    prompt: 'Cinematic laboratory render of autonomous LangGraph agents dispatching MCP tools, validating SQL schemas, and resolving distributed workflows.',
    metrics: { fps: 60, resolution: '4K UHD (3840x2160)', bitrate: '24.2 Mbps' },
    gradient: 'from-[#071C1A] via-[#064E46] to-[#04100F]',
    animationType: 'agents'
  },
  {
    id: 'vid-attention-matrix',
    title: 'Neural Transformer Attention Flow Matrix',
    category: 'Deep Learning & NLP',
    duration: '00:06',
    model: 'Omni-Flash Temporal Diffusion',
    prompt: 'Volumetric holographic visualization of multi-head self-attention mechanisms with token tensors flowing through transformer encoder-decoder layers.',
    metrics: { fps: 60, resolution: '4K UHD (3840x2160)', bitrate: '28.5 Mbps' },
    gradient: 'from-[#04100F] via-[#0B332F] to-[#071C1A]',
    animationType: 'attention'
  },
  {
    id: 'vid-rag-vector',
    title: 'Enterprise RAG 3D Vector Retrieval',
    category: 'Knowledge Systems',
    duration: '00:07',
    model: 'Veo 2.0 Generative Video',
    prompt: 'Dynamic 3D geometric cluster traversal through 100,000 document vector embeddings with hybrid reciprocal rank fusion and sub-millisecond retrieval.',
    metrics: { fps: 60, resolution: '4K UHD (3840x2160)', bitrate: '22.0 Mbps' },
    gradient: 'from-[#0A2421] via-[#064E46] to-[#030F0E]',
    animationType: 'vector'
  },
  {
    id: 'vid-analytics-stream',
    title: 'Executive AI Live Analytics Dashboard',
    category: 'Data & Analytics',
    duration: '00:09',
    model: 'Omni-Flash Video Synthesis',
    prompt: 'Real-time telemetry stream synthesizing corporate revenue projections, automated SQL CTE execution, and dynamic cohort churn predictions.',
    metrics: { fps: 60, resolution: '4K UHD (3840x2160)', bitrate: '21.4 Mbps' },
    gradient: 'from-[#071C1A] via-[#0A2421] to-[#064E46]',
    animationType: 'analytics'
  }
];

export function AIVideoStudio() {
  const { navigate, openEnquiryModal } = useAcademy();
  const [selectedVideo, setSelectedVideo] = useState<VideoShowcaseItem>(CURATED_AI_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genProgress, setGenProgress] = useState(0);
  const [genPhase, setGenPhase] = useState('');
  
  // Custom video generator prompt controls
  const [userPrompt, setUserPrompt] = useState(
    'Autonomous Multi-Agent Loop resolving distributed database queries in translucent emerald laboratory'
  );
  const [selectedRatio, setSelectedRatio] = useState<'16:9' | '9:16' | '1:1'>('16:9');
  const [selectedStyle, setSelectedStyle] = useState('Cinematic Lab');
  const [motionSpeed, setMotionSpeed] = useState('Dynamic');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Animate playback progress bar when playing
  useEffect(() => {
    let interval: any = null;
    if (isPlaying && !isGenerating) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1.25));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isGenerating]);

  // Canvas visualizer simulation matching the video theme
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let tick = 0;
    const render = () => {
      tick++;
      const w = canvas.width;
      const h = canvas.height;

      // Dark background with subtle gradient
      ctx.fillStyle = '#071C1A';
      ctx.fillRect(0, 0, w, h);

      // Grid backdrop
      ctx.strokeStyle = 'rgba(11, 51, 47, 0.4)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const time = tick * 0.03;

      if (selectedVideo.animationType === 'agents') {
        // Multi-Agent network simulation
        const nodes = [
          { x: w * 0.25 + Math.sin(time) * 20, y: h * 0.4 + Math.cos(time) * 15, label: 'Supervisor Agent', color: '#27D7AC' },
          { x: w * 0.5 + Math.cos(time * 0.8) * 25, y: h * 0.3 + Math.sin(time * 0.8) * 15, label: 'MCP SQL Tool', color: '#B7F3D7' },
          { x: w * 0.75 + Math.sin(time * 1.2) * 20, y: h * 0.45 + Math.cos(time * 1.2) * 20, label: 'Validator Agent', color: '#27D7AC' },
          { x: w * 0.38 + Math.cos(time * 0.5) * 30, y: h * 0.7 + Math.sin(time * 0.5) * 20, label: 'Vector Reranker', color: '#38EFBF' },
          { x: w * 0.65 + Math.sin(time * 0.7) * 25, y: h * 0.75 + Math.cos(time * 0.7) * 15, label: 'FastAPI Dispatcher', color: '#27D7AC' },
        ];

        // Draw connecting laser beams
        ctx.lineWidth = 2;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            ctx.strokeStyle = `rgba(39, 215, 172, ${0.15 + 0.15 * Math.sin(time + i + j)})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Draw nodes
        nodes.forEach((node, idx) => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 14 + Math.sin(time * 2 + idx) * 3, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.shadowColor = '#27D7AC';
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Inner ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#04100F';
          ctx.fill();

          // Label
          ctx.font = '10px monospace';
          ctx.fillStyle = '#F3FAF7';
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x, node.y - 20);
        });
      } else if (selectedVideo.animationType === 'attention') {
        // Attention heatmap visualizer
        const cols = 8;
        const rows = 8;
        const cellW = (w * 0.5) / cols;
        const cellH = (h * 0.6) / rows;
        const startX = w * 0.25;
        const startY = h * 0.2;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const intensity = Math.abs(Math.sin(time + r * 0.4 + c * 0.3));
            ctx.fillStyle = `rgba(39, 215, 172, ${intensity * 0.85 + 0.1})`;
            ctx.fillRect(startX + c * cellW, startY + r * cellH, cellW - 3, cellH - 3);

            if (intensity > 0.7) {
              ctx.strokeStyle = '#FAF9F6';
              ctx.lineWidth = 1;
              ctx.strokeRect(startX + c * cellW, startY + r * cellH, cellW - 3, cellH - 3);
            }
          }
        }
        ctx.font = '11px monospace';
        ctx.fillStyle = '#27D7AC';
        ctx.textAlign = 'center';
        ctx.fillText('MULTI-HEAD ATTENTION TENSOR WEIGHT MATRIX [8x8 HEADS]', w * 0.5, h * 0.88);
      } else if (selectedVideo.animationType === 'vector') {
        // 3D vector space traversal
        const count = 45;
        const cx = w * 0.5;
        const cy = h * 0.5;

        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2 + time * 0.4;
          const radius = 60 + (i % 5) * 35 + Math.sin(time + i) * 20;
          const px = cx + Math.cos(angle) * radius * 1.5;
          const py = cy + Math.sin(angle) * radius * 0.8;
          const size = 3 + (i % 4) * 2;

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = i % 3 === 0 ? '#B7F3D7' : '#27D7AC';
          ctx.shadowColor = '#27D7AC';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;

          if (i % 2 === 0) {
            ctx.strokeStyle = 'rgba(39, 215, 172, 0.2)';
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(px, py);
            ctx.stroke();
          }
        }

        ctx.font = '11px monospace';
        ctx.fillStyle = '#27D7AC';
        ctx.textAlign = 'center';
        ctx.fillText('HNSW VECTOR SIMILARITY EMBEDDINGS (k=10 NEIGHBORS)', cx, h * 0.9);
      } else {
        // Analytics wave & live telemetry
        ctx.beginPath();
        ctx.moveTo(w * 0.15, h * 0.5);
        for (let x = w * 0.15; x < w * 0.85; x += 10) {
          const y = h * 0.5 + Math.sin((x * 0.02) + time) * 45 + Math.cos((x * 0.05) - time) * 20;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = '#27D7AC';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#27D7AC';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.font = '11px monospace';
        ctx.fillStyle = '#B7F3D7';
        ctx.textAlign = 'center';
        ctx.fillText('DYNAMIC P99 LATENCY & REVENUE STREAM TELEMETRY', w * 0.5, h * 0.85);
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [selectedVideo]);

  // Handle synthetic video generation click
  const handleGenerateVideo = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setGenProgress(0);
    setGenPhase('Analyzing text prompt and injecting domain tokens...');

    const phases = [
      { pct: 22, text: 'Phase 1: Token embedding & spatial layout conditioning...' },
      { pct: 48, text: 'Phase 2: Temporal diffusion & multi-frame latent motion sampling...' },
      { pct: 76, text: 'Phase 3: Transformer optical flow interpolation (60 FPS)...' },
      { pct: 94, text: 'Phase 4: 4K neural super-resolution upscale & color grading...' },
      { pct: 100, text: 'Synthesis complete! AI Video ready for playback.' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < phases.length) {
        setGenProgress(phases[currentStep].pct);
        setGenPhase(phases[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          setProgress(0);
          setIsPlaying(true);
        }, 500);
      }
    }, 900);
  };

  const handleDownloadClip = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <section className="py-22 bg-[#071C1A] border-b border-[#0B332F] relative overflow-hidden">
      {/* Ambient Radial Lights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-[#27D7AC]/15 via-[#064E46]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-[#064E46]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064E46]/50 border border-[#27D7AC]/40 text-xs font-semibold text-[#27D7AC] uppercase tracking-wider backdrop-blur-md">
              <Film className="w-3.5 h-3.5 text-[#27D7AC]" />
              <span>Next-Gen Generative Media</span>
              <span aria-hidden="true" className="text-[#0B332F]">/</span>
              <span className="text-[#B7F3D7]">Veo & Omni-Flash Studio</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF9F6]">
              AI Video Synthesis <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#B7F3D7] to-[#27D7AC]">& Simulation Lab</span>
            </h2>
            
            <p className="text-base text-[#C3E5D8] max-w-2xl leading-relaxed">
              Experience the power of generative AI video models. Synthesize photorealistic laboratory simulations, dynamic agent loops, and volumetric attention matrices in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openEnquiryModal({ type: 'corporate' })}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] hover:text-[#27D7AC] bg-[#0A2421] border border-[#27D7AC]/35 rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.2)]"
            >
              Enterprise Video AI Briefing
            </button>
          </div>
        </div>

        {/* Studio Grid: Left Main Video Player / Canvas, Right Generation Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main AI Video Player (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            <div className="relative rounded-2xl overflow-hidden border border-[#27D7AC]/35 bg-[#04100F] shadow-[0_16px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(39,215,172,0.2)]">
              
              {/* Dynamic Canvas Video Simulation */}
              <canvas
                ref={canvasRef}
                width={800}
                height={450}
                className="w-full h-[260px] sm:h-[380px] md:h-[430px] object-cover block"
              />

              {/* Generating Overlay State */}
              {isGenerating && (
                <div className="absolute inset-0 bg-[#071C1A]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#064E46]/60 border border-[#27D7AC]/50 flex items-center justify-center text-[#27D7AC] shadow-[0_0_25px_rgba(39,215,172,0.5)] animate-pulse">
                    <Sparkles className="w-8 h-8 animate-spin" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-lg font-bold text-[#FAF9F6]">
                      Generating AI Video Stream...
                    </h4>
                    <p className="text-xs text-[#27D7AC] font-mono">
                      {genPhase}
                    </p>
                  </div>
                  <div className="w-72 max-w-full h-2.5 bg-[#04100F] rounded-full overflow-hidden border border-[#0B332F]">
                    <div 
                      className="h-full bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7] rounded-full transition-all duration-300 shadow-[0_0_10px_#27D7AC]"
                      style={{ width: `${genProgress}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-[#B7F3D7]">{genProgress}% Complete</span>
                </div>
              )}

              {/* Top Glass Telemetry Bar */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between text-xs text-[#FAF9F6] bg-[#071C1A]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#27D7AC]/25 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                  <span className="font-mono text-[11px] text-[#27D7AC] font-bold uppercase tracking-wider">
                    {selectedVideo.model}
                  </span>
                  <span className="text-[#8EB7A8] hidden sm:inline">• {selectedVideo.metrics.resolution}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#B7F3D7]">
                  <span className="bg-[#064E46]/60 px-2 py-0.5 rounded border border-[#27D7AC]/30">
                    {selectedVideo.metrics.fps} FPS
                  </span>
                  <span className="bg-[#064E46]/60 px-2 py-0.5 rounded border border-[#27D7AC]/30 hidden sm:inline">
                    {selectedVideo.metrics.bitrate}
                  </span>
                </div>
              </div>

              {/* Bottom Video Controls & Scrub Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#04100F] via-[#071C1A]/90 to-transparent p-4 pt-8 z-10 space-y-2.5">
                
                {/* Scrub Progress Bar */}
                <div 
                  className="w-full h-1.5 bg-[#0B332F] rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setProgress((clickX / rect.width) * 100);
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#27D7AC] to-[#B7F3D7] rounded-full relative shadow-[0_0_10px_#27D7AC]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between text-xs text-[#FAF9F6]">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-8 h-8 rounded-lg bg-[#27D7AC] hover:bg-[#38EFBF] text-[#04100F] flex items-center justify-center cursor-pointer transition-all shadow-[0_0_12px_rgba(39,215,172,0.4)]"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>

                    <button
                      onClick={() => setProgress(0)}
                      className="p-1.5 rounded text-[#C3E5D8] hover:text-[#27D7AC] cursor-pointer"
                      title="Replay"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded text-[#C3E5D8] hover:text-[#27D7AC] cursor-pointer"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <span className="font-mono text-[11px] text-[#C3E5D8]">
                      00:0{Math.floor((progress / 100) * 8)} / {selectedVideo.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDownloadClip}
                      className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A2421] hover:bg-[#064E46] border border-[#27D7AC]/30 text-[11px] text-[#B7F3D7] transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{downloadSuccess ? 'Clip Saved!' : 'Export Clip'}</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Video Prompt & Model Metadata */}
            <div className="p-4 rounded-xl bg-[#0A2421]/80 border border-[#0B332F] backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#27D7AC] font-semibold">
                  Synthesized Text-to-Video Prompt:
                </span>
                <p className="text-[#FAF9F6] italic font-serif">
                  "{selectedVideo.prompt}"
                </p>
              </div>
              <span className="px-3 py-1 rounded bg-[#071C1A] border border-[#27D7AC]/30 font-mono text-[11px] text-[#27D7AC] shrink-0">
                {selectedVideo.category}
              </span>
            </div>

            {/* Curated Showcase Reels Carousel/Tabs */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8EB7A8] block">
                Select Pre-Synthesized Video Simulation:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CURATED_AI_VIDEOS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedVideo(item);
                      setProgress(0);
                      setIsPlaying(true);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer backdrop-blur-md ${
                      selectedVideo.id === item.id
                        ? 'bg-[#064E46]/60 border-[#27D7AC] shadow-[0_0_15px_rgba(39,215,172,0.3)]'
                        : 'bg-[#0A2421]/60 border-[#0B332F] hover:border-[#27D7AC]/50'
                    }`}
                  >
                    <span className="block text-xs font-bold text-[#FAF9F6] truncate">
                      {item.title}
                    </span>
                    <span className="block text-[10px] font-mono text-[#27D7AC] truncate mt-0.5">
                      {item.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Generation Panel & Interactive Studio Controls (4 cols) */}
          <div className="lg:col-span-4 bg-[#0A2421]/90 border border-[#27D7AC]/30 rounded-2xl p-6 space-y-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#0B332F]">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#27D7AC]" />
                <h3 className="font-display text-base font-bold text-[#FAF9F6]">
                  AI Video Generator
                </h3>
              </div>
            </div>

            {/* Prompt Text Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#FAF9F6] block">
                Prompt Description
              </label>
              <textarea
                rows={3}
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Describe scene, camera movements, and lighting..."
                className="w-full px-3.5 py-2.5 text-xs bg-[#071C1A] border border-[#0B332F] text-[#FAF9F6] rounded-xl placeholder-[#64748B] focus:border-[#27D7AC] outline-none transition-colors resize-none"
              />
            </div>

            {/* Aspect Ratio Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#FAF9F6] block">
                Aspect Ratio
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['16:9', '9:16', '1:1'] as const).map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setSelectedRatio(ratio)}
                    className={`py-2 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                      selectedRatio === ratio
                        ? 'bg-[#27D7AC] text-[#04100F] font-bold border-[#27D7AC] shadow-[0_0_10px_rgba(39,215,172,0.4)]'
                        : 'bg-[#071C1A] text-[#C3E5D8] border-[#0B332F] hover:border-[#27D7AC]/40'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Style Preset */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#FAF9F6] block">
                Visual Style Preset
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Cinematic Lab', 'Holographic Matrix', 'Cyberpunk Flow', 'Minimal Macro'].map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`py-2 px-2 text-[11px] rounded-lg border transition-all cursor-pointer truncate ${
                      selectedStyle === style
                        ? 'bg-[#064E46] text-[#FAF9F6] font-semibold border-[#27D7AC]'
                        : 'bg-[#071C1A] text-[#8EB7A8] border-[#0B332F] hover:border-[#27D7AC]/40'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Camera Motion */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#FAF9F6] block">
                Motion Intensity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Subtle', 'Dynamic', 'Fast-Paced'].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setMotionSpeed(speed)}
                    className={`py-1.5 text-[11px] rounded-lg border transition-all cursor-pointer ${
                      motionSpeed === speed
                        ? 'bg-[#064E46] text-[#27D7AC] font-bold border-[#27D7AC]'
                        : 'bg-[#071C1A] text-[#8EB7A8] border-[#0B332F]'
                    }`}
                  >
                    {speed}
                  </button>
                ))}
              </div>
            </div>

            {/* Synthesize Button */}
            <button
              onClick={handleGenerateVideo}
              disabled={isGenerating}
              className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] disabled:opacity-50 rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.5)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#04100F]" />
              <span>{isGenerating ? 'Synthesizing...' : 'Generate AI Video'}</span>
            </button>

            {/* Capability Spec */}
            <div className="pt-3 border-t border-[#0B332F] space-y-2 text-[11px] text-[#8EB7A8]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27D7AC]" />
                <span>Zero-latency temporal diffusion sampling</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27D7AC]" />
                <span>60 FPS cinematic motion coherence</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27D7AC]" />
                <span>Multi-modal audio-visual synchronization</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
