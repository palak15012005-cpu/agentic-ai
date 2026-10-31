import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  const { navigate } = useAcademy();

  return (
    <div className="py-24 text-center px-4 max-w-xl mx-auto space-y-6">
      <SeoHead
        title="Page Not Found (404) – Agentic AI Academy"
        description="The requested page could not be found."
        canonicalPath="/404"
      />

      <div className="w-16 h-16 rounded-xl bg-[#141C33] border border-[#202D50] text-[#42D9C8] flex items-center justify-center font-display font-extrabold text-2xl mx-auto shadow-[0_0_25px_rgba(66,217,200,0.2)]">
        404
      </div>

      <h1 className="font-display text-3xl font-bold text-[#F5F6FF]">
        Page Not Found
      </h1>

      <p className="text-sm text-[#BAC7E5] leading-relaxed">
        The URL you requested does not exist or may have been moved. You can return to our academy homepage or explore our hands-on AI programmes catalogue.
      </p>

      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7757FF] hover:bg-[#6845f5] rounded-lg transition-colors cursor-pointer shadow-[0_0_20px_rgba(119,87,255,0.3)] flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Return Home
        </button>
        <button
          onClick={() => navigate('/programmes')}
          className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#BAC7E5] hover:text-[#42D9C8] border border-[#202D50] hover:border-[#42D9C8]/40 bg-[#141C33]/60 rounded-lg transition-colors cursor-pointer"
        >
          Explore Programmes
        </button>
      </div>
    </div>
  );
}
