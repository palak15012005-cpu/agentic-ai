import { useState } from 'react';
import { useAcademy } from '../../context/AcademyContext.tsx';
import { Menu, X, Terminal } from 'lucide-react';

export function Navbar() {
  const { currentPath, navigate, openEnquiryModal } = useAcademy();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Agent Builder', path: '/programmes/agentic-ai-and-workflow-automation' },
    { label: 'ML Lab', path: '/programmes/machine-learning-with-practical-projects' },
    { label: 'Projects', path: '/projects' },
    { label: 'Learn AI', path: '/programmes' },
    { label: 'Training', path: '/corporate-training' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      {/* Skip Link for WCAG Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-[#27D7AC] focus:text-[#04100F] focus:font-bold focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 bg-[#071C1A]/90 backdrop-blur-xl border-b border-[#0B332F] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            
            {/* Brand Monogram & Wordmark */}
            <button 
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
              aria-label="Agentic.AI Home"
            >
              {/* Official Agentic AI Logo Emblem */}
              <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#064E46] via-[#27D7AC] to-[#B7F3D7] shadow-[0_0_16px_rgba(39,215,172,0.35)] group-hover:shadow-[0_0_24px_rgba(39,215,172,0.65)] group-hover:scale-105 transition-all shrink-0">
                <img
                  src="/assets/aistudio/Futuristic_Agentic_AI_Emblem_20fd47ad.png"
                  alt="Agentic.AI Official Emblem Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="text-left">
                <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-[#F3FAF7] whitespace-nowrap block leading-tight">
                  Agentic<span className="text-[#27D7AC] drop-shadow-[0_0_12px_rgba(39,215,172,0.65)]">.AI</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#B7F3D7] block font-mono">
                  Emerald Glass Lab // AI Academy
                </span>
              </div>
            </button>

            {/* Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-sm font-medium whitespace-nowrap transition-colors relative py-1.5 cursor-pointer focus:outline-none ${
                      active 
                        ? 'text-[#27D7AC] font-semibold' 
                        : 'text-[#C3E5D8] hover:text-[#F3FAF7]'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#064E46] via-[#27D7AC] to-[#B7F3D7] rounded-full shadow-[0_0_8px_rgba(39,215,172,0.6)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Primary Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => navigate('/programmes')}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-md transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(39,215,172,0.45)] hover:shadow-[0_0_28px_rgba(39,215,172,0.7)]"
              >
                Start Learning
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#C3E5D8] hover:text-[#27D7AC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D7AC] rounded cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071C1A]/95 border-b border-[#064E46] backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? 'bg-[#064E46]/60 text-[#27D7AC] font-semibold'
                        : 'text-[#C3E5D8] hover:bg-[#064E46]/30 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
            <div className="pt-3 border-t border-[#064E46]">
              <button
                onClick={() => {
                  navigate('/programmes');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] rounded-md shadow-[0_0_18px_rgba(39,215,172,0.4)]"
              >
                Start Learning
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
