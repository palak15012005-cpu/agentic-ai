import { useAcademy } from '../../context/AcademyContext.tsx';
import { ExternalLink, Mail, Clock } from 'lucide-react';

export function Footer() {
  const { settings, navigate, openEnquiryModal } = useAcademy();

  const handleLink = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-[#04100F] text-[#8EB7A8] border-t border-[#0B332F] pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#0B332F]">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => handleLink('/')} 
              className="text-left cursor-pointer focus:outline-none flex items-center gap-3.5 group"
            >
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#064E46] via-[#27D7AC] to-[#B7F3D7] shadow-[0_0_16px_rgba(39,215,172,0.35)] group-hover:scale-105 transition-all shrink-0">
                <img
                  src="/assets/aistudio/Futuristic_Agentic_AI_Emblem_20fd47ad.png"
                  alt="Agentic.AI Official Emblem Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-[#F3FAF7] block">
                  Agentic<span className="text-[#27D7AC] drop-shadow-[0_0_12px_rgba(39,215,172,0.6)]">.AI</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-[#27D7AC] font-semibold block mt-0.5 font-mono">
                  Emerald Glass Lab · Applied AI Academy
                </span>
              </div>
            </button>
            <p className="text-sm text-[#8EB7A8] leading-relaxed max-w-sm">
              The training and education division of Agentic AI. We design and deliver rigorous, hands-on AI and engineering programmes for enterprise teams, college faculties, students, and working professionals.
            </p>
            <div className="pt-2">
              <a
                href={settings.parentCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#27D7AC] hover:text-[#F3FAF7] transition-colors underline underline-offset-4"
              >
                Explore Agentic AI Parent Company
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Programmes */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-[#F3FAF7]">
              Programmes
            </h3>
            <ul className="space-y-2 text-sm text-[#8EB7A8]">
              <li>
                <button onClick={() => handleLink('/programmes/agentic-ai-and-workflow-automation')} className="hover:text-[#27D7AC] text-left transition-colors cursor-pointer">
                  Agentic AI & Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/programmes/generative-ai-for-workplace-productivity')} className="hover:text-[#27D7AC] text-left transition-colors cursor-pointer">
                  GenAI for Workplace
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/programmes/rag-and-ai-knowledge-assistants')} className="hover:text-[#27D7AC] text-left transition-colors cursor-pointer">
                  RAG & Knowledge Bases
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/programmes/data-analytics-with-python-and-sql')} className="hover:text-[#27D7AC] text-left transition-colors cursor-pointer">
                  Data Analytics & SQL
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/programmes')} className="text-xs text-[#27D7AC] hover:text-[#B7F3D7] font-medium flex items-center gap-1 mt-1 cursor-pointer">
                  View all applied programmes →
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional & Workshops */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-[#F3FAF7]">
              Training Solutions
            </h3>
            <ul className="space-y-2 text-sm text-[#8EB7A8]">
              <li>
                <button onClick={() => handleLink('/corporate-training')} className="hover:text-[#27D7AC] text-left transition-colors cursor-pointer">
                  Corporate Upskilling
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/college-training')} className="hover:text-[#27D7AC] text-left transition-colors cursor-pointer">
                  Colleges & Bootcamps
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/workshops')} className="hover:text-[#27D7AC] text-left transition-colors cursor-pointer">
                  Workshop Formats
                </button>
              </li>

              <li>
                <button onClick={() => handleLink('/projects')} className="hover:text-[#27D7AC] text-left transition-colors cursor-pointer">
                  Sample Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Transparency */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-[#F3FAF7]">
              Admissions & Enquiries
            </h3>
            <div className="space-y-2 text-sm text-[#8EB7A8]">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#27D7AC] shrink-0 mt-0.5" />
                <a href={`mailto:${settings.contactEmail}`} className="hover:text-[#F3FAF7] break-all transition-colors">
                  {settings.contactEmail}
                </a>
              </div>
              {settings.officeHours && (
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#27D7AC] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#8EB7A8]">
                    {settings.officeHours}
                  </span>
                </div>
              )}
              <div className="pt-2">
                <button
                  onClick={() => openEnquiryModal({ type: 'general' })}
                  className="w-full text-center py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-[#04100F] bg-[#27D7AC] hover:bg-[#38EFBF] rounded-md transition-all cursor-pointer shadow-[0_0_18px_rgba(39,215,172,0.4)]"
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Admin Link */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8EB7A8] gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} MindWash AI Academy. All rights reserved.</span>
            <span>Founder: <strong className="text-[#F3FAF7]">Abhishek Sharma</strong>, MSc in AI & ML</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => handleLink('/privacy')} className="hover:text-[#27D7AC] transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleLink('/terms')} className="hover:text-[#27D7AC] transition-colors cursor-pointer">
              Terms of Engagement
            </button>
            <button onClick={() => handleLink('/admin/login')} className="hover:text-[#F3FAF7] transition-colors text-[#8EB7A8] cursor-pointer">
              Admin Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
