import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';

export function TermsPage() {
  const { settings } = useAcademy();

  return (
    <div className="py-12 bg-[#0B1020] text-[#F5F6FF]">
      <SeoHead
        title="Terms of Engagement – MindWash AI Academy"
        description="Terms of engagement and enquiry guidelines for MindWash AI Academy training programmes."
        canonicalPath="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms of Engagement' }]} />

        {/* Notice for Owner Review */}
        <div className="p-4 mb-8 bg-[#202D50] border border-[#7757FF]/40 rounded-xl text-xs text-[#BAC7E5] leading-relaxed shadow-[0_0_20px_rgba(119,87,255,0.15)]">
          <strong className="text-[#42D9C8]">Notice for Academy Ownership:</strong> These terms govern website enquiries and proposal requests. Formal commercial engagement contracts, master service agreements (MSAs), and statement of work (SOW) documents will be executed separately between the parties upon training procurement.
        </div>

        <article className="max-w-none text-[#BAC7E5] space-y-6">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F6FF]">
            Terms of Engagement & Website Usage
          </h1>

          <p className="text-xs text-[#94A3B8]">
            Effective Date: March 2026 · Last Updated: October 2026
          </p>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            1. Nature of Website Content
          </h2>
          <p className="text-sm leading-relaxed">
            The programmes, workshop outlines, syllabi, sample projects, and learning pathways presented on this website represent proposed educational offerings of MindWash AI Academy. Published course details serve as curriculum specifications; specific schedules, durations, pricing, and batch availability are confirmed through formal proposals upon enquiry.
          </p>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            2. Intellectual Property
          </h2>
          <p className="text-sm leading-relaxed">
            All curriculum syllabi, exercises, course materials, brand assets, and original resource articles published on https://mindwash.ai are the proprietary intellectual property of MindWash AI Academy and its parent entity Agentic AI.
          </p>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            3. Certification & Academic Disclosures
          </h2>
          <p className="text-sm leading-relaxed">
            MindWash AI Academy provides industry-focused professional training and skills development. Unless explicitly stated in a bilateral institutional agreement, our programmes do not grant accredited university degree credits or civil service qualifications. Certificate availability and completion requirements are formally specified within individual programme proposals.
          </p>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            4. Inquiries & Proposals
          </h2>
          <p className="text-sm leading-relaxed">
            Submitting a form or registering workshop interest creates no binding financial obligation on either party until a customized proposal or service agreement is signed by authorized representatives.
          </p>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            5. Contact for Legal Notices
          </h2>
          <p className="text-sm leading-relaxed">
            For inquiries regarding terms, licensing, or commercial contracts, contact: <a href={`mailto:${settings.contactEmail}`} className="text-[#42D9C8] underline">{settings.contactEmail}</a>.
          </p>
        </article>
      </div>
    </div>
  );
}
