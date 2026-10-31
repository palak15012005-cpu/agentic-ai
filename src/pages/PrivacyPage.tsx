import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';

export function PrivacyPage() {
  const { settings } = useAcademy();

  return (
    <div className="py-12 bg-[#0B1020] text-[#F5F6FF]">
      <SeoHead
        title="Privacy Policy – MindWash AI Academy"
        description="Privacy policy and enquiry data processing practices for MindWash AI Academy."
        canonicalPath="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        {/* Notice for Owner Review */}
        <div className="p-4 mb-8 bg-[#202D50] border border-[#7757FF]/40 rounded-xl text-xs text-[#BAC7E5] leading-relaxed shadow-[0_0_20px_rgba(119,87,255,0.15)]">
          <strong className="text-[#42D9C8]">Notice for Academy Ownership:</strong> This starter policy accurately describes the current data collection practices of the enquiry-based academy website (https://mindwash.ai). It should be reviewed by legal counsel before executing commercial contracts.
        </div>

        <article className="max-w-none text-[#BAC7E5] space-y-6">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F6FF]">
            Privacy Policy
          </h1>

          <p className="text-xs text-[#94A3B8]">
            Effective Date: March 2026 · Last Updated: October 2026
          </p>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            1. Overview & Scope
          </h2>
          <p className="text-sm leading-relaxed">
            MindWash AI Academy ("we", "our", or "the Academy") is the training and education division of Agentic AI. This Privacy Policy explains how we collect, store, and process information when you interact with our website at https://mindwash.ai or submit training enquiries and workshop registrations.
          </p>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            2. Information We Collect
          </h2>
          <p className="text-sm leading-relaxed">
            We collect only the information you voluntarily supply when submitting an enquiry or registering interest:
          </p>
          <ul className="text-sm space-y-1.5 list-disc pl-5 marker:text-[#42D9C8]">
            <li><strong className="text-[#F5F6FF]">Contact Information</strong>: Full name, business or academic email address, optional contact phone number.</li>
            <li><strong className="text-[#F5F6FF]">Organizational Information</strong>: Company or university name, department, role, team size, and preferred delivery location.</li>
            <li><strong className="text-[#F5F6FF]">Enquiry Scope</strong>: Selected programmes of interest, current cohort skill level, preferred timeframe, and custom learning objectives.</li>
            <li><strong className="text-[#F5F6FF]">Audit Metadata</strong>: Submission timestamp and your explicit consent selection.</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            3. Purpose of Processing
          </h2>
          <p className="text-sm leading-relaxed">
            Data submitted through our enquiry forms is used solely to evaluate training requirements, prepare proposals, schedule workshops, and coordinate batch availability. We do not sell, rent, or share enquiry information with third-party marketing brokers.
          </p>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            4. Cookies & Analytics
          </h2>
          <p className="text-sm leading-relaxed">
            This website does not utilize invasive advertising trackers. Functional cookies are strictly restricted to administrative authentication sessions. Any optional marketing consent is explicitly opt-in and unchecked by default.
          </p>

          <h2 className="font-display text-xl font-bold text-[#F5F6FF] pt-4">
            5. Access & Data Erasure Requests
          </h2>
          <p className="text-sm leading-relaxed">
            You may request a copy of your submitted enquiry record or request its deletion from our registry at any time by contacting our admissions office at: <a href={`mailto:${settings.contactEmail}`} className="text-[#42D9C8] underline">{settings.contactEmail}</a>.
          </p>
        </article>
      </div>
    </div>
  );
}
