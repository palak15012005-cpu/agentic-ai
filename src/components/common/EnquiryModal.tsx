import React, { useState, useEffect } from 'react';
import { useAcademy } from '../../context/AcademyContext.tsx';
import { X, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { DeliveryMode, EnquiryType } from '../../types/index.ts';

export function EnquiryModal() {
  const { isModalOpen, modalOptions, closeEnquiryModal, programmes } = useAcademy();

  const [type, setType] = useState<EnquiryType>('general');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [role, setRole] = useState('');
  const [teamSize, setTeamSize] = useState('1–5 team members');
  const [selectedProgrammeSlug, setSelectedProgrammeSlug] = useState('');
  const [currentSkillLevel, setCurrentSkillLevel] = useState('Beginner / Introductory');
  const [preferredDeliveryMode, setPreferredDeliveryMode] = useState<DeliveryMode | 'Flexible'>('Flexible');
  const [preferredTimeframe, setPreferredTimeframe] = useState('Within the next 4–6 weeks');
  const [location, setLocation] = useState('');
  const [goalsAndRequirements, setGoalsAndRequirements] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [contactConsent, setContactConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceNumber: string;
    message: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync state when modalOptions change
  useEffect(() => {
    if (modalOptions.type) {
      setType(modalOptions.type);
    } else {
      setType('general');
    }

    if (modalOptions.programmeSlug) {
      setSelectedProgrammeSlug(modalOptions.programmeSlug);
    } else {
      setSelectedProgrammeSlug('');
    }

    setSubmissionSuccess(null);
    setErrorMessage('');
    setContactConsent(false);
    setMarketingConsent(false);
  }, [modalOptions, isModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!contactConsent) {
      setErrorMessage('Please confirm consent to be contacted regarding this enquiry.');
      return;
    }

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid business or institutional email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedProg = programmes.find(p => p.slug === selectedProgrammeSlug);

      const payload = {
        type,
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || undefined,
        organisation: organisation.trim() || undefined,
        role: role.trim() || undefined,
        teamSize: ['corporate', 'college'].includes(type) ? teamSize : undefined,
        institutionName: type === 'college' ? organisation.trim() : undefined,
        department: type === 'college' ? role.trim() : undefined,
        programmeSlug: selectedProgrammeSlug || undefined,
        programmeTitle: selectedProg ? selectedProg.title : modalOptions.programmeTitle,
        workshopSlug: modalOptions.workshopSlug,
        workshopTitle: modalOptions.workshopTitle,
        currentSkillLevel,
        preferredDeliveryMode,
        preferredTimeframe,
        location: location.trim() || undefined,
        goalsAndRequirements: goalsAndRequirements.trim() || 'No additional custom requirements specified.',
        budgetRange: budgetRange.trim() || undefined,
        marketingConsent,
        website_url_check: honeypot // Honeypot
      };

      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry. Please try again.');
      }

      setSubmissionSuccess({
        referenceNumber: data.referenceNumber,
        message: data.message
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Submission error. Please verify your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyReference = () => {
    if (submissionSuccess?.referenceNumber) {
      navigator.clipboard.writeText(submissionSuccess.referenceNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#0A2421]/95 backdrop-blur-xl border border-[#064E46]/90 rounded-2xl shadow-[0_0_60px_rgba(39,215,172,0.2)] overflow-hidden text-[#F3FAF7]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#071C1A]/90 border-b border-[#064E46]/60 flex items-center justify-between">
          <div>
            <h2 id="modal-title" className="font-display text-lg font-bold text-[#F3FAF7] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#27D7AC] animate-pulse" />
              {modalOptions.programmeTitle 
                ? `Enquire: ${modalOptions.programmeTitle}`
                : modalOptions.workshopTitle
                ? `Register Interest: ${modalOptions.workshopTitle}`
                : type === 'corporate'
                ? 'Request Corporate Training Proposal'
                : type === 'college'
                ? 'Organise a College Workshop'
                : 'Enquire with Admissions Lab'}
            </h2>
            <p className="text-xs text-[#B7F3D7]/70 mt-0.5">
              Practical learning programmes custom-shaped for your requirements at Agentic.AI.
            </p>
          </div>
          <button
            onClick={closeEnquiryModal}
            className="p-1.5 text-[#B7F3D7]/70 hover:text-[#27D7AC] transition-colors rounded-lg cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submissionSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#27D7AC]/15 border border-[#27D7AC]/40 text-[#27D7AC] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(39,215,172,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#F3FAF7]">
                Enquiry Received Successfully
              </h3>
              <p className="text-sm text-[#B7F3D7]/80 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Your enquiry has been persisted securely in our admissions registry. Abhishek Sharma or our programme advisors will review your specifications and contact you directly.
              </p>

              <div className="bg-[#071C1A] border border-[#064E46] rounded-xl p-4 max-w-sm mx-auto flex items-center justify-between">
                <div className="text-left">
                  <span className="text-xs text-[#27D7AC]/70 uppercase tracking-wider block font-mono">Reference Code</span>
                  <span className="font-mono text-base font-bold text-[#27D7AC] tracking-wider">
                    {submissionSuccess.referenceNumber}
                  </span>
                </div>
                <button
                  onClick={copyReference}
                  className="px-3 py-1.5 text-xs font-medium text-[#F3FAF7] hover:text-[#27D7AC] border border-[#064E46] bg-[#0A2421] rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#27D7AC]" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="pt-4">
                <button
                  onClick={closeEnquiryModal}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#071C1A] bg-gradient-to-r from-[#27D7AC] to-[#B7F3D7] hover:brightness-110 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.35)]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 rounded text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Enquiry Type Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#B7F3D7] mb-1.5">
                  Training Scope / Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'corporate', label: 'Corporate Team' },
                    { id: 'college', label: 'College / Institute' },
                    { id: 'programme', label: 'Specific Course' },
                    { id: 'general', label: 'General Enquiry' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setType(item.id as EnquiryType)}
                      className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                        type === item.id
                          ? 'bg-[#27D7AC] text-[#071C1A] border-[#27D7AC] font-bold shadow-[0_0_12px_rgba(39,215,172,0.4)]'
                          : 'bg-[#071C1A]/90 text-[#B7F3D7] border-[#064E46] hover:border-[#27D7AC]/60 hover:text-[#F3FAF7]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_url_check">Leave this field blank</label>
                <input
                  type="text"
                  id="website_url_check"
                  name="website_url_check"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Full Name <span className="text-[#27D7AC]">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    maxLength={120}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Priyanshu Verma"
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none placeholder-[#27D7AC]/40"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Email Address <span className="text-[#27D7AC]">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    maxLength={150}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none placeholder-[#27D7AC]/40"
                  />
                </div>
              </div>

              {/* Organisation & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-org" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    {type === 'college' ? 'Institution / University Name' : 'Organisation / Company'}
                  </label>
                  <input
                    id="modal-org"
                    type="text"
                    maxLength={150}
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder={type === 'college' ? 'e.g. National Institute of Technology' : 'e.g. Apex Global Logistics'}
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none placeholder-[#27D7AC]/40"
                  />
                </div>

                <div>
                  <label htmlFor="modal-role" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    {type === 'college' ? 'Department / Designation' : 'Job Role / Designation'}
                  </label>
                  <input
                    id="modal-role"
                    type="text"
                    maxLength={100}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder={type === 'college' ? 'e.g. HOD Computer Science' : 'e.g. L&D Lead / Head of Engineering'}
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none placeholder-[#27D7AC]/40"
                  />
                </div>
              </div>

              {/* Optional Phone & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Contact Phone (Optional)
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    maxLength={40}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 / +1 ..."
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none placeholder-[#27D7AC]/40"
                  />
                </div>

                <div>
                  <label htmlFor="modal-location" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    City / Location (If Onsite Training)
                  </label>
                  <input
                    id="modal-location"
                    type="text"
                    maxLength={150}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Bangalore, London, Online"
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none placeholder-[#27D7AC]/40"
                  />
                </div>
              </div>

              {/* Programme Select (if applicable) */}
              {(type === 'programme' || selectedProgrammeSlug) && (
                <div>
                  <label htmlFor="modal-prog-select" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Programme of Interest
                  </label>
                  <select
                    id="modal-prog-select"
                    value={selectedProgrammeSlug}
                    onChange={(e) => setSelectedProgrammeSlug(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none"
                  >
                    <option value="" className="bg-[#071C1A] text-[#B7F3D7]">Select a programme...</option>
                    {programmes.map((p) => (
                      <option key={p.slug} value={p.slug} className="bg-[#071C1A] text-[#F3FAF7]">
                        {p.title} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Team Size & Delivery Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-team-size" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Cohort / Participant Count
                  </label>
                  <select
                    id="modal-team-size"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none"
                  >
                    <option value="1–5 team members" className="bg-[#071C1A]">Small Group (1–5 participants)</option>
                    <option value="6–15 team members" className="bg-[#071C1A]">Department Cohort (6–15 participants)</option>
                    <option value="16–40 team members" className="bg-[#071C1A]">Large Team / Class (16–40 participants)</option>
                    <option value="50+ institution-wide" className="bg-[#071C1A]">Enterprise / Institutional (50+ participants)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-delivery-mode" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Preferred Delivery Format
                  </label>
                  <select
                    id="modal-delivery-mode"
                    value={preferredDeliveryMode}
                    onChange={(e) => setPreferredDeliveryMode(e.target.value as any)}
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none"
                  >
                    <option value="Flexible" className="bg-[#071C1A]">Flexible / Open to Recommendation</option>
                    <option value="Online" className="bg-[#071C1A]">Live Interactive Online (Zoom/Teams)</option>
                    <option value="Onsite" className="bg-[#071C1A]">Onsite at Our Office or Campus</option>
                    <option value="Hybrid" className="bg-[#071C1A]">Hybrid (Online + Intensive Onsite Days)</option>
                  </select>
                </div>
              </div>

              {/* Timeframe & Skill Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-timeframe" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Preferred Timeframe
                  </label>
                  <select
                    id="modal-timeframe"
                    value={preferredTimeframe}
                    onChange={(e) => setPreferredTimeframe(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none"
                  >
                    <option value="Within 2 weeks (Immediate)" className="bg-[#071C1A]">Immediate (Next 1–2 weeks)</option>
                    <option value="Within the next 4–6 weeks" className="bg-[#071C1A]">Within 4–6 weeks</option>
                    <option value="Next academic semester / quarter" className="bg-[#071C1A]">Next Quarter / Semester</option>
                    <option value="Exploratory / Planning stage" className="bg-[#071C1A]">Exploratory / Planning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-skill" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                    Current Cohort Skill Level
                  </label>
                  <select
                    id="modal-skill"
                    value={currentSkillLevel}
                    onChange={(e) => setCurrentSkillLevel(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none"
                  >
                    <option value="Beginner / Introductory" className="bg-[#071C1A]">Beginner / Non-technical</option>
                    <option value="Intermediate / Power Users" className="bg-[#071C1A]">Intermediate (Spreadsheets / Low-code)</option>
                    <option value="Technical / Developers" className="bg-[#071C1A]">Technical (Software Developers / Engineers)</option>
                    <option value="Mixed Cohort" className="bg-[#071C1A]">Mixed Skill Levels</option>
                  </select>
                </div>
              </div>

              {/* Requirements & Specific Goals */}
              <div>
                <label htmlFor="modal-requirements" className="block text-xs font-medium text-[#B7F3D7] mb-1">
                  Learning Objectives or Specific Business Challenges
                </label>
                <textarea
                  id="modal-requirements"
                  rows={3}
                  maxLength={3000}
                  value={goalsAndRequirements}
                  onChange={(e) => setGoalsAndRequirements(e.target.value)}
                  placeholder="Tell us what you want to achieve (e.g. automating customer response workflows, teaching Python & SQL to second-year students, or building internal RAG knowledge bases)..."
                  className="w-full px-3 py-2 text-sm bg-[#071C1A]/90 border border-[#064E46] text-[#F3FAF7] rounded-xl focus:border-[#27D7AC] outline-none resize-none placeholder-[#27D7AC]/40"
                />
              </div>

              {/* Consent Checkboxes */}
              <div className="space-y-2 pt-2 border-t border-[#064E46]/60">
                <label className="flex items-start gap-2.5 text-xs text-[#B7F3D7]/80 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={contactConsent}
                    onChange={(e) => setContactConsent(e.target.checked)}
                    className="mt-0.5 rounded text-[#27D7AC] focus:ring-[#27D7AC] border-[#064E46] bg-[#071C1A] accent-[#27D7AC]"
                  />
                  <span>
                    I consent to being contacted by Agentic.AI regarding this training enquiry. <span className="text-[#27D7AC]">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-2.5 text-xs text-[#B7F3D7]/60 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    className="mt-0.5 rounded text-[#27D7AC] focus:ring-[#27D7AC] border-[#064E46] bg-[#071C1A] accent-[#27D7AC]"
                  />
                  <span>
                    (Optional) Keep me informed of future curriculum additions and practical engineering research dispatches.
                  </span>
                </label>
              </div>

              {/* Form Actions */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#B7F3D7]/70 hover:text-[#F3FAF7] rounded-lg cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#071C1A] bg-gradient-to-r from-[#27D7AC] to-[#B7F3D7] hover:brightness-110 disabled:opacity-50 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(39,215,172,0.35)]"
                >
                  {isSubmitting ? 'Transmitting to Registry...' : 'Submit Training Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
