/**
 * Types for Agentic AI Academy
 */

export type AudienceType = 
  | 'corporate' 
  | 'colleges' 
  | 'professionals' 
  | 'students' 
  | 'leadership';

export type SubjectCategory = 
  | 'Generative AI' 
  | 'Agentic AI & Automation' 
  | 'Data & Analytics' 
  | 'Machine Learning & NLP' 
  | 'Software & Full-Stack';

export type ProgrammeLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | 'Beginner to Intermediate';

export type DeliveryMode = 'Online' | 'Onsite' | 'Hybrid';

export interface CurriculumModule {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  keyTopics: string[];
  handsOnLab: string;
}

export interface Programme {
  id: string;
  slug: string;
  title: string;
  category: SubjectCategory;
  tagline: string;
  overview: string;
  audience: string[];
  audienceType: AudienceType[];
  prerequisites: string;
  level: ProgrammeLevel;
  deliveryModes: DeliveryMode[];
  durationNote: string;
  learningOutcomes: string[];
  modules: CurriculumModule[];
  practicalExercises: string[];
  sampleProjects: {
    title: string;
    description: string;
    tools: string[];
  }[];
  toolsUsed: string[];
  assessmentApproach: string;
  certificateNote: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedProgrammes: string[];
  isFeatured?: boolean;
  published: boolean;
  imageUrl?: string;
  labTelemetry?: {
    accuracy?: string;
    speed?: string;
    throughput?: string;
    nodes?: number;
    badge?: string;
    chartTitle?: string;
    metrics?: { label: string; value: string; pct: number }[];
  };
}

export interface WorkshopFormat {
  id: string;
  slug: string;
  title: string;
  formatType: 'Introductory Session' | 'One-Day Workshop' | 'Multi-Day Bootcamp' | 'Custom Executive Briefing';
  duration: string;
  audience: string;
  audienceType: AudienceType;
  category: SubjectCategory;
  overview: string;
  prerequisites: string;
  agenda: {
    timeSlot: string;
    title: string;
    detail: string;
  }[];
  learningOutcomes: string[];
  tools: string[];
  trainer: string;
  deliveryMode: DeliveryMode[];
  isConfirmedEvent: boolean;
  confirmedDate?: string;
  capacity?: number;
  location?: string;
  published: boolean;
  imageUrl?: string;
  badge?: string;
  labTelemetry?: {
    accuracy?: string;
    speed?: string;
    badge?: string;
    chartTitle?: string;
    metrics?: { label: string; value: string; pct: number }[];
  };
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  targetAudience: string;
  durationEstimate: string;
  summary: string;
  prerequisites: string;
  imageUrl?: string;
  badge?: string;
  milestones: {
    step: number;
    title: string;
    description: string;
    programmeSlug?: string;
    deliverable: string;
  }[];
  practicalOutcomes: string[];
}

export interface LearningProject {
  id: string;
  slug: string;
  title: string;
  category: SubjectCategory;
  problemStatement: string;
  toolsUsed: string[];
  learningObjectives: string[];
  expectedDemonstration: string;
  architectureNotes: string;
  deliverables: string[];
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  publishedDate: string;
  authorName: string;
  authorRole: string;
  readingTimeMinutes: number;
  category: string;
  excerpt: string;
  contentMarkdown: string;
  relatedArticleSlugs: string[];
  published: boolean;
}

export type EnquiryType = 'general' | 'corporate' | 'college' | 'programme' | 'workshop_registration';

export type EnquiryStatus = 'New' | 'Contacted' | 'Proposal Sent' | 'Closed';

export interface InternalNote {
  id: string;
  timestamp: string;
  author: string;
  note: string;
}

export interface EnquiryRecord {
  id: string;
  referenceNumber: string; // e.g. ENQ-2026-X839
  type: EnquiryType;
  fullName: string;
  email: string;
  phone?: string;
  organisation?: string;
  role?: string;
  teamSize?: string;
  institutionName?: string;
  department?: string;
  programmeSlug?: string;
  programmeTitle?: string;
  workshopSlug?: string;
  workshopTitle?: string;
  currentSkillLevel?: string;
  preferredDeliveryMode?: DeliveryMode | 'Flexible';
  preferredTimeframe?: string;
  location?: string;
  goalsAndRequirements: string;
  budgetRange?: string;
  consentTimestamp: string;
  marketingConsent: boolean;
  status: EnquiryStatus;
  notes: InternalNote[];
  createdAt: string;
  updatedAt: string;
  notificationStatus: 'stored_pending_smtp_config' | 'sent' | 'failed';
}

export interface SiteSettings {
  brandName: string;
  tagline: string;
  founderName: string;
  founderQualification: string;
  founderPositioning: string;
  founderRole?: string;
  founderImage?: string;
  contactEmail: string;
  parentCompanyUrl: string;
  academyDomain: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    x?: string;
  };
  phoneDisplay?: string;
  officeHours?: string;
}
