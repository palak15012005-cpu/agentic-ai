import { Programme, WorkshopFormat, LearningPath, LearningProject, ResourceArticle, SiteSettings } from '../types/index.ts';

export const initialSiteSettings: SiteSettings = {
  brandName: 'Agentic.AI',
  tagline: 'Learn AI. Build Skills. Create Impact.',
  founderName: 'Abhishek Sharma',
  founderQualification: 'MSc in Artificial Intelligence & Machine Learning',
  founderPositioning: 'Lead Instructor & Curriculum Architect',
  founderRole: 'Lead Instructor and Curriculum Architect',
  founderImage: '/assets/aistudio/Confident_Professional_at_Work_f3878c3b.png',
  contactEmail: 'admissions@agentic.ai',
  parentCompanyUrl: 'https://agenticai.com',
  academyDomain: 'https://agentic.ai',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/abhishek-sharma-ai',
  },
  phoneDisplay: '', // Left blank until officially configured per guidelines
  officeHours: 'Monday – Friday: 09:00 – 18:00 IST',
};

export const initialProgrammes: Programme[] = [
  {
    id: 'prog-genai-workplace',
    slug: 'generative-ai-for-workplace-productivity',
    title: 'Generative AI for Workplace Productivity',
    category: 'Generative AI',
    tagline: 'Streamline daily administrative, analytical, and operational business workflows.',
    imageUrl: '/src/assets/images/genai_workplace_photo_1793179072185.jpg',
    labTelemetry: {
      accuracy: '96.8% Task Precision',
      nodes: 12,
      speed: '4.8x Productivity',
      badge: 'Executive Copilots',
      chartTitle: 'Workflow Automation Telemetry',
      metrics: [
        { label: 'Document Synthesis', value: '5.2x Faster', pct: 94 },
        { label: 'Prompt Output Precision', value: '97.2%', pct: 97 },
        { label: 'Data Leakage Defense', value: '100% Zero-Leak', pct: 100 }
      ]
    },
    overview: 'A pragmatic executive and business-team programme focused on integrating modern Generative AI tools safely and effectively into daily office workflows. Rather than abstract theory, participants learn to automate research synthesis, document drafting, email triage, and quantitative summaries.',
    audience: [
      'Business analysts and operations teams',
      'Department managers and project leads',
      'HR, finance, and marketing practitioners',
      'Working professionals seeking workflow acceleration'
    ],
    audienceType: ['corporate', 'professionals'],
    prerequisites: 'Basic familiarity with standard workplace productivity software (spreadsheets, word processors). No coding required.',
    level: 'Beginner',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Identify high-impact workflow tasks suited for generative acceleration',
      'Synthesise lengthy unstructured documents, transcripts, and reports into executive summaries',
      'Construct repeatable prompt templates for recurring communications and briefings',
      'Maintain data governance, privacy standards, and hallucination verification protocols',
      'Combine multiple generative tools into end-to-end departmental task pipelines'
    ],
    modules: [
      {
        id: 'mod-1',
        moduleNumber: 1,
        title: 'Foundations of Modern Generative AI',
        description: 'Understand capabilities, statistical limitations, context windows, and safety parameters of modern foundation models.',
        keyTopics: ['LLM architecture in plain English', 'Tokens, context windows, and temperature', 'Data privacy and enterprise confidentiality', 'Fact-checking and output verification'],
        handsOnLab: 'Auditing 5 common workplace scenarios for AI applicability and identifying privacy risks.'
      },
      {
        id: 'mod-2',
        moduleNumber: 2,
        title: 'Structured Prompting for Document Creation',
        description: 'Master persona assignment, task constraints, output formatting, and progressive refinement techniques.',
        keyTopics: ['Role-Task-Context-Format frameworks', 'Drafting policy memos and client proposals', 'Iterative critique prompting', 'Tone and style matching'],
        handsOnLab: 'Generating an executive project charter and client communication suite from bulleted notes.'
      },
      {
        id: 'mod-3',
        moduleNumber: 3,
        title: 'Data Extraction, Analysis & Spreadsheet Integration',
        description: 'Using AI to clean messy tables, extract structured data from unstructured text, and generate spreadsheet formulas.',
        keyTopics: ['Unstructured text to JSON/CSV translation', 'Formulas, regex, and macro assistance', 'Data reconciliation and anomaly spot-checking'],
        handsOnLab: 'Extracting key contractual dates and payment terms from unstructured supplier agreements into a structured ledger.'
      },
      {
        id: 'mod-4',
        moduleNumber: 4,
        title: 'Meeting Intelligence and Knowledge Synthesis',
        description: 'Transforming call transcripts and long slide decks into structured action items and decision matrices.',
        keyTopics: ['Transcript parsing and speaker action item allocation', 'Multi-source document synthesis', 'Executive brief generation'],
        handsOnLab: 'Processing a 45-minute stakeholder meeting transcript into an agreed decision log.'
      },
      {
        id: 'mod-5',
        moduleNumber: 5,
        title: 'Building a Departmental AI SOP & Governance Plan',
        description: 'Developing team-level guidelines for ethical usage, copyright, fact validation, and continuous workflow iteration.',
        keyTopics: ['Standard Operating Procedures (SOPs)', 'Verification checklists', 'Enterprise compliance requirements'],
        handsOnLab: 'Drafting an operational governance checklist tailored to the participant team.'
      }
    ],
    practicalExercises: [
      'Design a company-specific prompt library for inbound customer communication',
      'Execute a blind fact-checking exercise to catch subtle AI hallucinations',
      'Automate monthly status report synthesis from raw project notes'
    ],
    sampleProjects: [
      {
        title: 'Departmental Knowledge Briefing Generator',
        description: 'A structured prompt pipeline that ingests raw weekly team updates and produces a formatted executive digest with action items.',
        tools: ['Claude', 'Gemini Workspace', 'ChatGPT Team', 'Google Sheets']
      }
    ],
    toolsUsed: ['Gemini', 'Claude', 'ChatGPT Enterprise', 'Google Workspace AI', 'Microsoft Copilot'],
    assessmentApproach: 'Practical evaluation through submission of a functional departmental prompt repository and workflow rubric audit.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Does this programme require any programming knowledge?',
        answer: 'No. The curriculum is designed specifically for operational, managerial, and knowledge workers using interface-based tools and structured prompt methodologies.'
      },
      {
        question: 'How do you handle enterprise data privacy during training?',
        answer: 'We train participants on strict data sanitization, privacy settings, enterprise licensing tiers, and governance protocols to prevent confidential leaks.'
      }
    ],
    relatedProgrammes: ['prompt-engineering-for-professionals', 'agentic-ai-and-workflow-automation'],
    isFeatured: true,
    published: true
  },
  {
    id: 'prog-prompt-eng',
    slug: 'prompt-engineering-for-professionals',
    title: 'Prompt Engineering for Professionals',
    category: 'Generative AI',
    tagline: 'Systematic techniques to elicit accurate, deterministic outputs from modern LLMs.',
    imageUrl: '/src/assets/images/prompt_engineering_photo_1793179104426.jpg',
    labTelemetry: {
      accuracy: '99.4% Schema Fidelity',
      nodes: 16,
      speed: '12ms Parser',
      badge: 'Deterministic Prompts',
      chartTitle: 'JSON Schema Validation Telemetry',
      metrics: [
        { label: 'Deterministic Adherence', value: '99.4%', pct: 99 },
        { label: 'Few-Shot Reasoning Accuracy', value: '96.1%', pct: 96 },
        { label: 'Jailbreak Resistance Rate', value: '99.8%', pct: 100 }
      ]
    },
    overview: 'Move beyond casual conversation into engineering-grade prompt design. This programme instructs engineers, product teams, and technical analysts in structured few-shot prompting, chain-of-thought reasoning, constrained JSON schemas, and quantitative output evaluation.',
    audience: [
      'Software engineers and technical product managers',
      'Data analysts and business intelligence developers',
      'Digital operations leads requiring structured outputs'
    ],
    audienceType: ['professionals', 'corporate', 'students'],
    prerequisites: 'Basic analytical mindset; experience working with software requirements or spreadsheets.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Master Few-Shot, Chain-of-Thought, and Directional-Stimulus prompt patterns',
      'Enforce deterministic structured output adhering to strict JSON schemas',
      'Diagnose and mitigate common failure modes including drift and hallucination',
      'Establish automated benchmark evaluation datasets to test prompt accuracy'
    ],
    modules: [
      {
        id: 'pe-1',
        moduleNumber: 1,
        title: 'Systematic Prompt Architecture',
        description: 'Core anatomy of professional prompt specifications: System instructions, variable delimiters, few-shot demonstration selection.',
        keyTopics: ['System vs user vs developer messages', 'Context management and markdown delimiting', 'Demonstration selection heuristics'],
        handsOnLab: 'Building a standardized system prompt template that resists prompt injection attempts.'
      },
      {
        id: 'pe-2',
        moduleNumber: 2,
        title: 'Reasoning Frameworks & Chain-of-Thought',
        description: 'Techniques for complex multi-step reasoning, mathematical reconciliation, and logic verification.',
        keyTopics: ['Zero-shot vs few-shot Chain-of-Thought (CoT)', 'Least-to-most prompting', 'Self-consistency sampling'],
        handsOnLab: 'Constructing a multi-step financial logic verifier using step-by-step reasoning scaffolds.'
      },
      {
        id: 'pe-3',
        moduleNumber: 3,
        title: 'Deterministic JSON Output & Schema Enforcement',
        description: 'Guaranteed structured data extraction directly into TypeScript interfaces and SQL schemas.',
        keyTopics: ['Function calling interfaces', 'Pydantic/Zod schema definition', 'Repairing malformed payloads'],
        handsOnLab: 'Extracting 15 attributes from complex invoices into a verified JSON schema.'
      },
      {
        id: 'pe-4',
        moduleNumber: 4,
        title: 'Prompt Evaluation, Benchmarking & Regression Testing',
        description: 'How to quantitatively test whether a prompt change improved or broke model behaviour.',
        keyTopics: ['Evaluation metrics (exact match, semantic similarity)', 'Golden dataset curation', 'Automated test suites'],
        handsOnLab: 'Running an evaluation matrix across 50 test inputs to compute precision and recall metrics.'
      },
      {
        id: 'pe-5',
        moduleNumber: 5,
        title: 'Production Guardrails & Security',
        description: 'Securing prompts against prompt injection, jailbreaking, and leaking proprietary system directives.',
        keyTopics: ['Direct and indirect injection attacks', 'Defensive system framing', 'Output moderation checks'],
        handsOnLab: 'Conducting red-team testing against a simulated customer support bot.'
      }
    ],
    practicalExercises: [
      'Build a verified JSON extraction harness for unstructured PDF contracts',
      'Construct a benchmark test set of 25 tricky edge cases to measure accuracy',
      'Design defensive guardrails that repel simulated injection attacks'
    ],
    sampleProjects: [
      {
        title: 'Contract Clause Classification Engine',
        description: 'A production prompt pipeline that reads commercial agreements, tags clause types, highlights liability clauses, and outputs validated JSON.',
        tools: ['OpenAI Playground', 'Gemini API Studio', 'Python', 'Pydantic']
      }
    ],
    toolsUsed: ['Anthropic Console', 'Google AI Studio', 'OpenAI Platform', 'LangSmith', 'Python'],
    assessmentApproach: 'Evaluation of candidate prompt harness against an unseen validation test dataset.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Is this just learning simple ChatGPT tips?',
        answer: 'No. This is an engineering-grade course covering schema enforcement, quantitative benchmarking, red-teaming, and production prompt integration.'
      }
    ],
    relatedProgrammes: ['rag-and-ai-knowledge-assistants', 'agentic-ai-and-workflow-automation'],
    isFeatured: true,
    published: true
  },
  {
    id: 'prog-agentic-ai',
    slug: 'agentic-ai-and-workflow-automation',
    title: 'Agentic AI & Workflow Automation',
    category: 'Agentic AI & Automation',
    tagline: 'Architect autonomous multi-agent systems, tool integration, and resilient orchestration.',
    imageUrl: '/src/assets/images/agentic_ai_photo_1793179104545.jpg',
    labTelemetry: {
      accuracy: '98.7% Tool Execution Fidelity',
      nodes: 24,
      speed: '45ms Loop Cycle',
      badge: '',
      chartTitle: 'Multi-Agent Routing & Memory Telemetry',
      metrics: [
        { label: 'ReAct Cycle Convergence', value: '98.7%', pct: 98 },
        { label: 'Tool Schema Dispatch Precision', value: '99.1%', pct: 99 },
        { label: 'Human-in-Loop Safety Halt', value: '100% Guaranteed', pct: 100 }
      ]
    },
    overview: 'Autonomous AI agents represent the transition from passive chatbot interfaces to active software systems that plan, invoke tools, retrieve data, and execute business tasks. This comprehensive technical programme explores agent loops, ReAct patterns, memory architecture, error recovery, and human-in-the-loop governance.',
    audience: [
      'Full-stack and backend engineers',
      'AI engineers and technical solutions architects',
      'Automation and RPA developers upgrading to LLM-driven agents',
      'Technical founders building AI-native products'
    ],
    audienceType: ['professionals', 'corporate', 'students'],
    prerequisites: 'Comfortable with Python or JavaScript/TypeScript; understanding of REST APIs and basic LLM interactions.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Design goal-directed autonomous agents utilizing ReAct and plan-and-solve patterns',
      'Equip agents with external tools (SQL databases, REST APIs, calculators, code execution)',
      'Implement short-term and persistent episodic memory structures',
      'Architect multi-agent collaboration with supervisor and specialist topologies',
      'Incorporate robust human-in-the-loop checkpoints and budget safeguards'
    ],
    modules: [
      {
        id: 'ag-1',
        moduleNumber: 1,
        title: 'Agent Foundations: From LLM to Autonomous Loop',
        description: 'Understanding the cognitive loop: Perception, reflection, action, and evaluation.',
        keyTopics: ['The ReAct (Reason + Act) loop', 'Plan-and-Execute architectures', 'Context state management and budget caps'],
        handsOnLab: 'Writing a basic ReAct loop from scratch in Python without heavyweight frameworks.'
      },
      {
        id: 'ag-2',
        moduleNumber: 2,
        title: 'Tool Use and Function Calling',
        description: 'Exposing external capabilities to models: schema definition, argument validation, and execution handling.',
        keyTopics: ['Function call specification', 'Handling API execution failures gracefully', 'Dynamic tool selection'],
        handsOnLab: 'Connecting an agent to a local SQLite database and live weather/finance API with parameter validation.'
      },
      {
        id: 'ag-3',
        moduleNumber: 3,
        title: 'Memory Systems & State Persistence',
        description: 'Managing conversation history, episodic memory, summary buffers, and vector storage.',
        keyTopics: ['Short-term context buffers', 'Episodic and semantic memory retrieval', 'State serialization across sessions'],
        handsOnLab: 'Building an agent that remembers user preferences across discrete restart cycles.'
      },
      {
        id: 'ag-4',
        moduleNumber: 4,
        title: 'Multi-Agent Orchestration & Hierarchical Systems',
        description: 'Dividing complex workflows among specialist agents coordinated by a supervisor router.',
        keyTopics: ['Supervisor vs peer-to-peer agent topologies', 'LangGraph / crew orchestration principles', 'Task handoff protocols'],
        handsOnLab: 'Building a 3-agent team (Researcher, Writer, Fact-Checker) producing a verified research briefing.'
      },
      {
        id: 'ag-5',
        moduleNumber: 5,
        title: 'Production Guardrails, Cost Management & Human-in-the-Loop',
        description: 'Preventing runaway loops, managing API token budgets, and enforcing approval gates for high-risk actions.',
        keyTopics: ['Loop limits and circuit breakers', 'Approval triggers for transactional API calls', 'Observability and tracing'],
        handsOnLab: 'Implementing an approval gate for automated emails and financial write operations.'
      }
    ],
    practicalExercises: [
      'Implement an autonomous research agent that navigates multiple APIs to gather intelligence',
      'Build a multi-agent triage system that classifies and resolves simulated support tickets',
      'Configure tracing and token telemetry to monitor agent decisions in real time'
    ],
    sampleProjects: [
      {
        title: 'Autonomous Inbound Sales Qualification Agent',
        description: 'An agent system that verifies inbound lead profiles via company databases, cross-references CRM history, scores purchase intent, and drafts contextual follow-ups.',
        tools: ['Python', 'LangGraph / custom loop', 'OpenAI/Gemini API', 'SQLite', 'FastAPI']
      }
    ],
    toolsUsed: ['LangGraph', 'CrewAI / LlamaIndex', 'Python', 'FastAPI', 'Docker', 'SQLite / PostgreSQL'],
    assessmentApproach: 'Code review of an independently architected multi-agent system including error recovery and test harness.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Do we use black-box agent libraries or build core mechanisms?',
        answer: 'We teach foundational agent loops and state machines first so you understand how agents work under the hood, then introduce modern orchestration frameworks.'
      }
    ],
    relatedProgrammes: ['rag-and-ai-knowledge-assistants', 'n8n-automation-for-business-workflows', 'ai-application-development-and-deployment'],
    isFeatured: true,
    published: true
  },
  {
    id: 'prog-n8n',
    slug: 'n8n-automation-for-business-workflows',
    title: 'n8n Automation for Business Workflows',
    category: 'Agentic AI & Automation',
    tagline: 'Connect enterprise applications, webhooks, and AI nodes into production workflows.',
    imageUrl: '/src/assets/images/n8n_automation_photo_1793179105461.jpg',
    labTelemetry: {
      accuracy: '99.9% Webhook Reliability',
      nodes: 38,
      speed: '80ms Node Dispatch',
      badge: 'Visual Automation',
      chartTitle: 'Enterprise Pipeline Reliability',
      metrics: [
        { label: 'Webhook Ingestion Uptime', value: '99.98%', pct: 100 },
        { label: 'AI Node Extraction Accuracy', value: '98.5%', pct: 98 },
        { label: 'Automatic Retry Success', value: '99.2%', pct: 99 }
      ]
    },
    overview: 'Learn to design, deploy, and self-host mission-critical business automations using n8n. This hands-on course covers webhook event routing, API integration, data transformations with JavaScript expressions, and embedding AI agent nodes into production enterprise processes.',
    audience: [
      'Operations managers and process engineers',
      'IT specialists and system administrators',
      'No-code / low-code developers and agency consultants',
      'Technical founders seeking operational leverage'
    ],
    audienceType: ['corporate', 'professionals'],
    prerequisites: 'Basic understanding of spreadsheets, APIs (concepts of GET/POST), and business logic.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Deploy and manage self-hosted n8n instances on modern cloud environments',
      'Design reliable event-driven automations with webhooks and scheduled triggers',
      'Transform complex JSON payloads using built-in nodes and JavaScript expressions',
      'Integrate AI nodes (LLMs, memory, embeddings) directly into automated business pipelines',
      'Implement enterprise error handling, retry policies, and alert mechanisms'
    ],
    modules: [
      {
        id: 'n8n-1',
        moduleNumber: 1,
        title: 'n8n Architecture & Core Node Mechanics',
        description: 'Node categories, data structures (items array), trigger types, and execution flow mechanics.',
        keyTopics: ['Cloud vs self-hosted deployment', 'Data item schema and execution history', 'Triggers, actions, and conditional routing'],
        handsOnLab: 'Configuring a self-hosted Docker n8n instance and testing webhook triggers.'
      },
      {
        id: 'n8n-2',
        moduleNumber: 2,
        title: 'Data Transformation & JavaScript Expressions',
        description: 'Reshaping nested arrays, aggregating records, date parsing, and custom JS snippets.',
        keyTopics: ['Item lists vs JSON objects', 'Writing expressions with $json and $item', 'Code node best practices'],
        handsOnLab: 'Normalizing disparate customer leads from multiple form endpoints into a unified schema.'
      },
      {
        id: 'n8n-3',
        moduleNumber: 3,
        title: 'API Integrations: CRM, ERP, and Communication Tools',
        description: 'Connecting Google Workspace, Slack, HubSpot, Airtable, and custom REST APIs.',
        keyTopics: ['Authentication types (OAuth2, API keys, Bearer)', 'Pagination handling', 'Rate limiting and throttling'],
        handsOnLab: 'Synchronizing newly closed CRM deals with an invoicing pipeline and Slack alert channel.'
      },
      {
        id: 'n8n-4',
        moduleNumber: 4,
        title: 'Building AI-Powered Agent Workflows in n8n',
        description: 'Using Advanced AI nodes, OpenAI/Gemini connectors, vector store nodes, and conversational memory in n8n.',
        keyTopics: ['AI Agent node in n8n', 'Vector store retrievers within workflows', 'Automating email categorization and draft generation'],
        handsOnLab: 'Building an automated customer support email triage workflow that reads incoming emails, queries documentation, and creates draft responses.'
      },
      {
        id: 'n8n-5',
        moduleNumber: 5,
        title: 'Error Handling, Resilience & Monitoring',
        description: 'Error workflows, automatic retries with backoff, dead-letter queues, and operational alerting.',
        keyTopics: ['Error trigger node configuration', 'Sub-workflow error propagation', 'System backup and migration'],
        handsOnLab: 'Constructing a centralized error logger that alerts engineering when upstream APIs experience downtime.'
      }
    ],
    practicalExercises: [
      'Create an automated invoice receipt parsing workflow',
      'Build a multi-step onboarding automation for newly registered employees',
      'Implement an automated social or marketing content distribution pipeline'
    ],
    sampleProjects: [
      {
        title: 'Lead Enquiry & Enrichment Automation',
        description: 'Captures incoming inquiries from website forms, verifies domain validity via external API, queries company size, logs to CRM, and sends tailored notification to sales reps.',
        tools: ['n8n', 'Webhooks', 'Slack API', 'PostgreSQL', 'OpenAI/Gemini node']
      }
    ],
    toolsUsed: ['n8n', 'Docker', 'Postman', 'PostgreSQL', 'REST APIs', 'OpenAI / Gemini'],
    assessmentApproach: 'End-to-end deployment of an error-resilient workflow demonstrating verified execution logs.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Can n8n run locally or do we need cloud subscriptions?',
        answer: 'n8n is open-source and fair-code; we teach both self-hosted Docker deployments and n8n Cloud options.'
      }
    ],
    relatedProgrammes: ['agentic-ai-and-workflow-automation', 'generative-ai-for-workplace-productivity'],
    isFeatured: true,
    published: true
  },
  {
    id: 'prog-rag',
    slug: 'rag-and-ai-knowledge-assistants',
    title: 'RAG & AI Knowledge Assistants',
    category: 'Agentic AI & Automation',
    tagline: 'Connect private company documents and databases to generative models with zero leakage.',
    imageUrl: '/src/assets/images/rag_assistants_photo_1793179106580.jpg',
    labTelemetry: {
      accuracy: '99.2% Grounded Precision',
      nodes: 20,
      speed: '95ms Hybrid Query',
      badge: 'Hybrid Vector Search',
      chartTitle: 'Knowledge Retrieval Grounding Telemetry',
      metrics: [
        { label: 'Faithfulness & Grounding', value: '99.2%', pct: 99 },
        { label: 'Context Recall Score', value: '97.8%', pct: 98 },
        { label: 'Hallucination Mitigation', value: '99.9%', pct: 100 }
      ]
    },
    overview: 'A deep-dive technical programme on Retrieval-Augmented Generation (RAG). Learn chunking strategies, vector embeddings, hybrid semantic and keyword search, reranking models, metadata filtering, and hallucination reduction for enterprise internal knowledge bases.',
    audience: [
      'Backend developers and data engineers',
      'AI engineers building enterprise search or document QA systems',
      'Information security and compliance leads evaluating RAG security'
    ],
    audienceType: ['professionals', 'corporate', 'students'],
    prerequisites: 'Working knowledge of Python; basic familiarity with vector concepts and REST APIs.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Architect robust document ingestion pipelines handling PDFs, tables, and docs',
      'Select and benchmark embedding models and vector index types (HNSW, IVFFlat)',
      'Implement hybrid search combining BM25 keyword matching with dense vector retrieval',
      'Apply cross-encoder reranking to elevate relevance and precision',
      'Implement context citation and strict grounding to eliminate hallucinations'
    ],
    modules: [
      {
        id: 'rag-1',
        moduleNumber: 1,
        title: 'The Modern RAG Architecture',
        description: 'Why standard LLMs hallucinate on private data and how retrieval grounding resolves it.',
        keyTopics: ['Naive RAG vs Advanced RAG', 'The indexing, retrieval, and generation phases', 'Contextual compression'],
        handsOnLab: 'Building a simple in-memory RAG pipeline using numpy and cosine similarity.'
      },
      {
        id: 'rag-2',
        moduleNumber: 2,
        title: 'Document Ingestion, Parsing & Chunking Strategies',
        description: 'Handling challenging formats: multi-column PDFs, tables, markdown headers, and code.',
        keyTopics: ['Fixed-size vs recursive character vs semantic chunking', 'Table extraction heuristics', 'Preserving document hierarchy and metadata'],
        handsOnLab: 'Chunking a 50-page technical manual with metadata preservation and benchmark retrieval.'
      },
      {
        id: 'rag-3',
        moduleNumber: 3,
        title: 'Embedding Models & Vector Databases',
        description: 'Evaluating embedding dimensions, multi-lingual capabilities, and vector stores.',
        keyTopics: ['Embedding model benchmarks (MTEB)', 'Vector indices (HNSW, Flat, Inverted File)', 'ChromaDB, Pinecone, and pgvector'],
        handsOnLab: 'Configuring PostgreSQL with pgvector for fast hybrid indexing.'
      },
      {
        id: 'rag-4',
        moduleNumber: 4,
        title: 'Hybrid Search, Reranking & Context Precision',
        description: 'Combining sparse BM25 keyword search with dense embeddings and cross-encoder rerankers.',
        keyTopics: ['Reciprocal Rank Fusion (RRF)', 'Cross-encoder rerankers (Cohere, BGE)', 'Context filtering and truncation'],
        handsOnLab: 'Implementing an RRF pipeline and measuring hit-rate improvement over pure vector search.'
      },
      {
        id: 'rag-5',
        moduleNumber: 5,
        title: 'Evaluation, Citations & Hallucination Guardrails',
        description: 'Quantifying retrieval precision, answer relevance, and ground truth fidelity using Ragas.',
        keyTopics: ['Faithfulness, answer relevance, context recall metrics', 'Attributing direct quote citations', 'Guardrail frameworks'],
        handsOnLab: 'Running an automated Ragas evaluation suite against 30 gold standard QA pairs.'
      }
    ],
    practicalExercises: [
      'Ingest and query multi-page corporate financial reports with table recognition',
      'Implement role-based document access control (RBAC) in vector retrieval',
      'Evaluate hallucination rates across different chunking strategies'
    ],
    sampleProjects: [
      {
        title: 'Internal Engineering Knowledge Assistant',
        description: 'A production-ready RAG application that indexes technical documentation, API specifications, and architecture decision records with verbatim citations.',
        tools: ['Python', 'pgvector / Chroma', 'FastAPI', 'React', 'Gemini / Claude API']
      }
    ],
    toolsUsed: ['Python', 'pgvector', 'ChromaDB', 'LlamaIndex', 'LangChain', 'Ragas'],
    assessmentApproach: 'Benchmark evaluation of student RAG pipeline against unseen test queries measuring faithfulness and context recall.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Do we use local or hosted vector stores?',
        answer: 'We teach both open-source local implementations (pgvector, ChromaDB) and managed vector databases.'
      }
    ],
    relatedProgrammes: ['agentic-ai-and-workflow-automation', 'ai-application-development-and-deployment'],
    isFeatured: true,
    published: true
  },
  {
    id: 'prog-python-foundations',
    slug: 'python-programming-foundations-to-applications',
    title: 'Python Programming: Foundations to Applications',
    category: 'Data & Analytics',
    tagline: 'Master modern Python syntax, object-oriented concepts, and practical scripting.',
    imageUrl: '/src/assets/images/python_programming_photo_1793179106611.jpg',
    labTelemetry: {
      accuracy: '100% PEP8 Compliance',
      nodes: 14,
      speed: '0.8s Test Harness',
      badge: 'Core Programming',
      chartTitle: 'Software Engineering Benchmarks',
      metrics: [
        { label: 'Unit Test Coverage', value: '98.5%', pct: 98 },
        { label: 'Type Annotation Coverage', value: '100%', pct: 100 },
        { label: 'Algorithmic Efficiency', value: 'O(n log n)', pct: 94 }
      ]
    },
    overview: 'A foundational programming course designed for analysts, researchers, and aspiring engineers. Go from writing your first syntax statements to building modular scripts, handling data structures, interacting with web APIs, and structuring maintainable codebases.',
    audience: [
      'Aspiring data analysts and machine learning practitioners',
      'College students seeking strong software engineering fundamentals',
      'Professionals transitioning into technical roles'
    ],
    audienceType: ['students', 'professionals', 'colleges'],
    prerequisites: 'No prior programming experience required. Basic computer literacy.',
    level: 'Beginner',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Write clean, readable, PEP 8 compliant Python code',
      'Manipulate complex nested data structures (lists, dictionaries, sets, tuples)',
      'Construct reusable functions, modules, and object-oriented classes',
      'Read and write files (CSV, JSON, text) and handle runtime errors gracefully',
      'Interact with third-party web services using the requests library'
    ],
    modules: [
      {
        id: 'py-1',
        moduleNumber: 1,
        title: 'Python Essentials & Control Flow',
        description: 'Variables, primitive data types, logical conditions, and loop constructs.',
        keyTopics: ['Environment setup (VS Code, virtual environments)', 'Conditionals and truthiness', 'For and while loops with enumerate and zip'],
        handsOnLab: 'Building an interactive command-line expense tracker.'
      },
      {
        id: 'py-2',
        moduleNumber: 2,
        title: 'Data Structures & Comprehensions',
        description: 'Deep dive into lists, dictionaries, sets, and expressive list/dict comprehensions.',
        keyTopics: ['Dictionary lookups and nested structures', 'List and dict comprehensions', 'Immutability and memory references'],
        handsOnLab: 'Parsing and filtering nested inventory data using comprehensions.'
      },
      {
        id: 'py-3',
        moduleNumber: 3,
        title: 'Functions, Scoping & Error Handling',
        description: 'Clean functional decomposition, parameter types (*args, **kwargs), and resilient try/except blocks.',
        keyTopics: ['Pure functions and side effects', 'Default and keyword arguments', 'Custom exception classes'],
        handsOnLab: 'Refactoring a monolithic script into modular, tested functions.'
      },
      {
        id: 'py-4',
        moduleNumber: 4,
        title: 'Object-Oriented Programming (OOP) in Python',
        description: 'Designing classes, encapsulation, inheritance, and special dunder methods.',
        keyTopics: ['Classes, instances, and self', 'Inheritance and polymorphism', '__str__, __repr__, and dataclasses'],
        handsOnLab: 'Modeling a banking and transaction ledger system using OOP principles.'
      },
      {
        id: 'py-5',
        moduleNumber: 5,
        title: 'Working with Files, APIs & Packaging',
        description: 'File I/O operations, consuming external REST APIs, and packaging code with requirements.txt.',
        keyTopics: ['Pathlib and file context managers', 'JSON serialization', 'HTTP requests and status codes'],
        handsOnLab: 'Building an automated script that fetches daily currency exchange rates and exports a formatted summary.'
      }
    ],
    practicalExercises: [
      'Build a CLI utility to automate local directory cleanup and file reorganization',
      'Construct a weather briefing script consuming a public REST API',
      'Create a student grade management system with CSV persistence'
    ],
    sampleProjects: [
      {
        title: 'Automated Log File Analyzer',
        description: 'A Python command-line utility that scans server access logs, identifies error spikes, calculates IP request frequencies, and generates a clean summary report.',
        tools: ['Python 3.12', 'Pathlib', 'Regular Expressions', 'CSV']
      }
    ],
    toolsUsed: ['Python', 'VS Code', 'Git', 'Virtualenv', 'Jupyter'],
    assessmentApproach: 'Practical coding assignment evaluated for correct execution, error resilience, and code quality.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Which version of Python is used?',
        answer: 'We teach using modern Python 3.11+ featuring current type annotations, pattern matching, and standard library conventions.'
      }
    ],
    relatedProgrammes: ['data-analytics-with-python-and-sql', 'machine-learning-with-practical-projects'],
    isFeatured: false,
    published: true
  },
  {
    id: 'prog-data-analytics',
    slug: 'data-analytics-with-python-and-sql',
    title: 'Data Analytics with Python & SQL',
    category: 'Data & Analytics',
    tagline: 'Transform raw corporate data into actionable business intelligence using Pandas and SQL.',
    imageUrl: '/src/assets/images/data_analytics_photo_1793179106659.jpg',
    labTelemetry: {
      accuracy: '99.7% Query Determinism',
      nodes: 22,
      speed: '18ms SQL CTE',
      badge: 'SQL & Analytics',
      chartTitle: 'Cohort Analytics & SQL Performance',
      metrics: [
        { label: 'Multi-Table Join Optimization', value: '4.2x Faster', pct: 92 },
        { label: 'Cohort Retention Accuracy', value: '99.7%', pct: 100 },
        { label: 'Pandas Pipeline Throughput', value: '1.2M rows/s', pct: 95 }
      ]
    },
    overview: 'Learn the core disciplines of professional data analytics. Master relational database querying with PostgreSQL and SQL, data wrangling and statistical analysis with Python and Pandas, and exploratory visual storytelling to solve real commercial problems.',
    audience: [
      'Business intelligence analysts and data associates',
      'Finance, marketing, and commercial operations professionals',
      'Graduates entering analytics and data consulting'
    ],
    audienceType: ['professionals', 'corporate', 'students'],
    prerequisites: 'Basic numeracy and spreadsheet familiarity. Familiarity with basic programming concepts is helpful but not mandatory.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Write advanced multi-table SQL queries utilizing JOINs, GROUP BY, and Window Functions',
      'Perform data cleansing, missing value imputation, and reshaping using Pandas',
      'Compute statistical distributions, correlation matrices, and cohort retention metrics',
      'Create clear, publication-quality visualizations using Matplotlib and Seaborn',
      'Translate data findings into clear executive recommendations and visual dashboards'
    ],
    modules: [
      {
        id: 'da-1',
        moduleNumber: 1,
        title: 'Relational Database Fundamentals & SQL Querying',
        description: 'Database schemas, primary/foreign keys, SELECT, WHERE, and filtering expressions.',
        keyTopics: ['Relational database design', 'Filtering, sorting, and aggregate functions', 'NULL handling and CASE WHEN statements'],
        handsOnLab: 'Querying an e-commerce database to identify top-performing product categories.'
      },
      {
        id: 'da-2',
        moduleNumber: 2,
        title: 'Advanced SQL: Multi-Table Joins & Window Functions',
        description: 'INNER/LEFT/FULL JOINs, subqueries, Common Table Expressions (CTEs), and analytical window calculations.',
        keyTopics: ['Join strategies and deduplication', 'WITH clause CTEs', 'ROW_NUMBER, RANK, LAG/LEAD and rolling averages'],
        handsOnLab: 'Calculating month-over-month customer retention and running revenue totals using window functions.'
      },
      {
        id: 'da-3',
        moduleNumber: 3,
        title: 'Data Wrangling with Python & Pandas',
        description: 'DataFrames, series, indexing, missing data handling, and type conversions.',
        keyTopics: ['Loading CSV, Parquet, and SQL data', 'Vectorized filtering and mutation', 'Merging, concatenating, and pivot tables'],
        handsOnLab: 'Cleaning and standardizing 100,000 raw sales transaction records with inconsistent formatting.'
      },
      {
        id: 'da-4',
        moduleNumber: 4,
        title: 'Exploratory Data Analysis (EDA) & Visualization',
        description: 'Statistical summaries, outlier detection, distribution analysis, and visual design principles.',
        keyTopics: ['Descriptive statistics and quartile analysis', 'Histograms, box plots, and scatter relationships', 'Seaborn visual palettes'],
        handsOnLab: 'Conducting an exploratory analysis on customer churn data to isolate churn indicators.'
      },
      {
        id: 'da-5',
        moduleNumber: 5,
        title: 'Cohort Analysis & Business Metric Frameworks',
        description: 'Lifetime value (LTV), customer acquisition cost (CAC), churn rate, and monthly recurring revenue (MRR).',
        keyTopics: ['Cohort retention matrices', 'Unit economics calculation', 'Structuring an analytical presentation for executives'],
        handsOnLab: 'Building a full monthly cohort retention analysis and presenting executive recommendations.'
      }
    ],
    practicalExercises: [
      'Write complex CTE queries analyzing customer checkout funnel drop-offs',
      'Cleanse messy supplier datasets with date mismatches and duplicate records',
      'Construct a customer segmentation model based on RFM (Recency, Frequency, Monetary) scores'
    ],
    sampleProjects: [
      {
        title: 'Retail Sales Performance & Churn Diagnostic',
        description: 'An end-to-end analytics project querying a retail transactional database, identifying sales velocity drop-offs across regions, and providing inventory recommendations.',
        tools: ['PostgreSQL', 'Python', 'Pandas', 'Seaborn', 'Jupyter']
      }
    ],
    toolsUsed: ['PostgreSQL', 'DBeaver', 'Python', 'Pandas', 'JupyterLab', 'Seaborn'],
    assessmentApproach: 'Presentation of an analytical report answering a business scenario with documented SQL queries and Python code.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Is this focused more on SQL or Python?',
        answer: 'The programme balances both disciplines equally: SQL for robust data extraction and aggregation, and Python for deep statistical transformation and visualization.'
      }
    ],
    relatedProgrammes: ['power-bi-and-business-dashboards', 'python-programming-foundations-to-applications'],
    isFeatured: true,
    published: true
  },
  {
    id: 'prog-power-bi',
    slug: 'power-bi-and-business-dashboards',
    title: 'Power BI & Business Dashboards',
    category: 'Data & Analytics',
    tagline: 'Design executive-ready interactive business intelligence reports and DAX data models.',
    imageUrl: '/src/assets/images/powerbi_dashboards_photo_1793179107568.jpg',
    labTelemetry: {
      accuracy: '99.5% DAX Context Precision',
      nodes: 16,
      speed: 'Instant Cross-Filter',
      badge: 'Executive BI',
      chartTitle: 'Star Schema Query Telemetry',
      metrics: [
        { label: 'DAX Query Response Time', value: '< 250ms', pct: 96 },
        { label: 'Star Schema Normalization', value: '100%', pct: 100 },
        { label: 'Automated Refresh Integrity', value: '99.8%', pct: 99 }
      ]
    },
    overview: 'Equip management and operational teams with the ability to turn corporate spreadsheets and SQL databases into interactive, auto-refreshing Power BI dashboards. Master Power Query ETL, dimensional star schemas, DAX calculation formulas, and UI visual layout hierarchy.',
    audience: [
      'Finance and operations managers',
      'Business intelligence specialists',
      'Reporting analysts and departmental leaders'
    ],
    audienceType: ['corporate', 'professionals'],
    prerequisites: 'Comfortable with basic Microsoft Excel formulas and table concepts.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Build clean data transformation pipelines in Power Query without fragile manual edits',
      'Design robust relational star schemas with fact and dimension tables',
      'Author essential DAX measures (CALCULATE, FILTER, Time Intelligence, YTD/MTD)',
      'Apply visual design hierarchy to produce clean, executive-friendly report layouts',
      'Configure automated data refresh and secure role-based sharing permissions'
    ],
    modules: [
      {
        id: 'pbi-1',
        moduleNumber: 1,
        title: 'Data Ingestion & Power Query Transformation',
        description: 'Connecting to Excel, CSV, SharePoint, and SQL servers. Unpivoting columns and cleansing data.',
        keyTopics: ['Source connectors and credentials', 'Data type enforcement and cleansing', 'Unpivoting and merging queries'],
        handsOnLab: 'Transforming 12 monthly disjointed Excel budget sheets into a single consolidated model.'
      },
      {
        id: 'pbi-2',
        moduleNumber: 2,
        title: 'Data Modeling & Star Schema Architecture',
        description: 'Why flat wide tables fail: building normalized fact and dimension tables with single-direction relationships.',
        keyTopics: ['Star schema vs snowflake schema', 'One-to-many relationships and cardinality', 'Date table generation'],
        handsOnLab: 'Designing a retail data model linking sales facts with store, product, and calendar dimensions.'
      },
      {
        id: 'pbi-3',
        moduleNumber: 3,
        title: 'Mastering DAX (Data Analysis Expressions)',
        description: 'Row context vs filter context, CALCULATE mastery, and time intelligence functions.',
        keyTopics: ['Implicit vs explicit measures', 'CALCULATE and filter modification', 'SAMEPERIODLASTYEAR, TOTALYTD, and moving averages'],
        handsOnLab: 'Calculating year-over-year revenue growth and percentage variance across business units.'
      },
      {
        id: 'pbi-4',
        moduleNumber: 4,
        title: 'Visual Design, Interactivity & Storytelling',
        description: 'Choosing chart types, card KPIs, drill-through pages, bookmarks, and mobile-responsive layouts.',
        keyTopics: ['Dashboard layout principles and typography', 'Cross-filtering and drill-through navigation', 'Bookmarks and dynamic view switching'],
        handsOnLab: 'Designing an executive one-page summary dashboard with drill-down capability.'
      },
      {
        id: 'pbi-5',
        moduleNumber: 5,
        title: 'Governance, Deployment & Row-Level Security',
        description: 'Publishing to Power BI Service, scheduled data refresh, and role-level security (RLS).',
        keyTopics: ['Workspaces and app publishing', 'Row-Level Security (RLS) rules by manager', 'Scheduled gateway refresh'],
        handsOnLab: 'Configuring RLS so regional managers only view data for their assigned geographical territory.'
      }
    ],
    practicalExercises: [
      'Construct a rolling 12-month sales forecast visual',
      'Implement a dynamic currency converter toggle within a dashboard',
      'Build a comprehensive HR headcount and attrition tracking report'
    ],
    sampleProjects: [
      {
        title: 'Executive Sales & Margin Performance Dashboard',
        description: 'An interactive multi-page Power BI report featuring executive KPI cards, product margin drill-through, and regional contribution breakdowns.',
        tools: ['Power BI Desktop', 'Power Query', 'DAX', 'Excel / SQL Server']
      }
    ],
    toolsUsed: ['Microsoft Power BI', 'Power Query', 'DAX Studio', 'Excel'],
    assessmentApproach: 'Delivery of a functional Power BI report file with verified star schema and documented DAX measures.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Do participants need a paid Power BI Pro license?',
        answer: 'Power BI Desktop is completely free for learning and model development. We guide organisations on licensing options for enterprise sharing.'
      }
    ],
    relatedProgrammes: ['data-analytics-with-python-and-sql', 'generative-ai-for-workplace-productivity'],
    isFeatured: false,
    published: true
  },
  {
    id: 'prog-ml',
    slug: 'machine-learning-with-practical-projects',
    title: 'Machine Learning with Practical Projects',
    category: 'Machine Learning & NLP',
    tagline: '',
    imageUrl: '/src/assets/images/machine_learning_photo_1793179109184.jpg',
    labTelemetry: {
      accuracy: '94.6% ROC-AUC Score',
      nodes: 28,
      speed: '4.2ms Inference',
      badge: '',
      chartTitle: 'Gradient Boosting & SHAP Metrics',
      metrics: [
        { label: 'Ensemble ROC-AUC Score', value: '0.946', pct: 95 },
        { label: 'Feature Pipeline Speedup', value: '3.6x', pct: 91 },
        { label: 'SHAP Explainability Index', value: '98.2%', pct: 98 }
      ]
    },
    overview: 'A rigorous hands-on course covering supervised and unsupervised machine learning algorithms. Master exploratory feature engineering, linear and tree-based models, cross-validation, hyperparameter tuning, model explainability (SHAP), and containerized inference.',
    audience: [
      'Data analysts transitioning to predictive machine learning',
      'Software engineers incorporating predictive APIs into applications',
      'College computer science and engineering students'
    ],
    audienceType: ['students', 'professionals', 'colleges'],
    prerequisites: 'Basic Python programming; basic knowledge of linear algebra and statistics.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Frame real business challenges into supervised or unsupervised ML formulations',
      'Build leak-free feature preprocessing pipelines using Scikit-Learn ColumnTransformer',
      'Train and tune regression, classification, and ensemble algorithms (XGBoost, Random Forest)',
      'Conduct rigorous cross-validation and evaluate models beyond simple accuracy (ROC-AUC, F1, PR curves)',
      'Interpret feature importance and individual predictions using SHAP values'
    ],
    modules: [
      {
        id: 'ml-1',
        moduleNumber: 1,
        title: 'Machine Learning Formulation & Lifecycle',
        description: 'Problem framing, train/validation/test splits, data leakage pitfalls, and baseline models.',
        keyTopics: ['Supervised vs unsupervised learning', 'Train-test split protocols and stratification', 'Establishing heuristic baseline metrics'],
        handsOnLab: 'Setting up a reproducible ML project workspace and establishing a baseline predictor.'
      },
      {
        id: 'ml-2',
        moduleNumber: 2,
        title: 'Feature Engineering & Preprocessing Pipelines',
        description: 'Handling missing values, categorical encoding, feature scaling, and Scikit-Learn Pipelines.',
        keyTopics: ['One-hot, target, and ordinal encoding', 'Scaling algorithms (StandardScaler, RobustScaler)', 'Building custom transformers and unified Pipelines'],
        handsOnLab: 'Constructing a leak-free preprocessing pipeline on a multi-type tabular dataset.'
      },
      {
        id: 'ml-3',
        moduleNumber: 3,
        title: 'Classification & Regression Algorithms',
        description: 'Linear/Logistic regression, Regularization (Ridge/Lasso), Decision Trees, and Random Forests.',
        keyTopics: ['Bias-variance tradeoff', 'Cost functions and gradient descent intuition', 'Tree splitting criteria (Gini, entropy, MSE)'],
        handsOnLab: 'Training and comparing logistic regression vs random forest on credit risk scoring.'
      },
      {
        id: 'ml-4',
        moduleNumber: 4,
        title: 'Ensemble Learning & Gradient Boosting',
        description: 'Mastering modern gradient boosting machines: XGBoost and LightGBM.',
        keyTopics: ['Boosting vs bagging concepts', 'Hyperparameter tuning with Optuna / GridSearchCV', 'Early stopping and regularization in trees'],
        handsOnLab: 'Optimizing an XGBoost model for customer churn prediction with hyperparameter tuning.'
      },
      {
        id: 'ml-5',
        moduleNumber: 5,
        title: 'Evaluation Metrics, Calibration & Model Explainability',
        description: 'Precision, Recall, ROC-AUC, PR-AUC, threshold tuning, and SHAP interpretability.',
        keyTopics: ['Imbalanced classification techniques (SMOTE, class weights)', 'Threshold optimization for commercial cost matrices', 'SHAP summary plots and local explanations'],
        handsOnLab: 'Generating SHAP force plots to explain individual model decisions to business stakeholders.'
      }
    ],
    practicalExercises: [
      'Build a customer lifetime value regression pipeline',
      'Tune an XGBoost classifier on highly imbalanced fraud detection data',
      'Deploy a trained ML pipeline as a REST API endpoint using FastAPI'
    ],
    sampleProjects: [
      {
        title: 'Loan Default Risk Classifier',
        description: 'A complete machine learning system that ingests applicant financial history, applies robust feature preprocessing, predicts default probability, and explains predictions via SHAP.',
        tools: ['Python', 'Scikit-Learn', 'XGBoost', 'SHAP', 'FastAPI']
      }
    ],
    toolsUsed: ['Python', 'Scikit-Learn', 'XGBoost', 'Optuna', 'SHAP', 'Pandas', 'Jupyter'],
    assessmentApproach: 'Evaluation of end-to-end ML notebook containing exploratory analysis, pipeline construction, tuning, and metric verification.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Does this cover deep learning or classical ML?',
        answer: 'This programme focuses specifically on tabular and structured data using modern classical algorithms and gradient boosting, providing the necessary foundation for deep learning.'
      }
    ],
    relatedProgrammes: ['deep-learning-and-applied-nlp', 'data-analytics-with-python-and-sql'],
    isFeatured: true,
    published: true
  },
  {
    id: 'prog-deep-learning',
    slug: 'deep-learning-and-applied-nlp',
    title: 'Deep Learning & Applied NLP',
    category: 'Machine Learning & NLP',
    tagline: 'Architect neural networks, Transformer models, and fine-tune language architectures with PyTorch.',
    imageUrl: '/src/assets/images/deep_learning_photo_1793179108885.jpg',
    labTelemetry: {
      accuracy: '97.4% Transformer Validation',
      nodes: 36,
      speed: '82 TFLOPS GPU Lab',
      badge: 'Neural Architectures',
      chartTitle: 'Transformer & LoRA Convergence',
      metrics: [
        { label: 'LoRA Loss Reduction', value: '1.42 -> 0.38', pct: 96 },
        { label: 'Attention Mechanism Precision', value: '97.4%', pct: 97 },
        { label: 'GPU Memory Footprint Optimization', value: '-65% QLoRA', pct: 98 }
      ]
    },
    overview: 'An advanced technical programme covering the mechanics of deep learning and Natural Language Processing. Move from foundational multi-layer perceptrons to Convolutional and Transformer architectures, attention mechanisms, Hugging Face transformers, and fine-tuning language models with PEFT/LoRA.',
    audience: [
      'Software engineers and ML practitioners advancing to deep learning',
      'Research scholars and computer science students',
      'Data scientists working with text and unstructured data'
    ],
    audienceType: ['professionals', 'students', 'colleges'],
    prerequisites: 'Proficiency in Python; prior familiarity with linear algebra, calculus, and basic machine learning concepts.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Build and train neural networks from scratch using PyTorch tensors and autograd',
      'Diagnose overfitting using dropout, weight decay, batch normalization, and learning rate schedulers',
      'Understand the mathematical intuition behind Self-Attention and Transformer architectures',
      'Implement NLP pipelines for classification, named entity recognition (NER), and sentiment analysis',
      'Fine-tune pre-trained open models using Parameter-Efficient Fine-Tuning (PEFT/LoRA)'
    ],
    modules: [
      {
        id: 'dl-1',
        moduleNumber: 1,
        title: 'PyTorch Fundamentals & Neural Network Anatomy',
        description: 'Tensors, computation graphs, backward pass, loss functions, and optimizers.',
        keyTopics: ['PyTorch autograd mechanics', 'Building custom nn.Module architectures', 'Training loop structure: forward, loss, backward, step'],
        handsOnLab: 'Writing a multi-layer perceptron from scratch in PyTorch to classify tabular records.'
      },
      {
        id: 'dl-2',
        moduleNumber: 2,
        title: 'Computer Vision & Convolutional Networks',
        description: 'Convolutions, pooling, transfer learning with ResNet, and image data augmentation.',
        keyTopics: ['Spatial filters and feature map extraction', 'Transfer learning with torchvision models', 'Data augmentation strategies'],
        handsOnLab: 'Fine-tuning a pre-trained ResNet model for medical image classification.'
      },
      {
        id: 'dl-3',
        moduleNumber: 3,
        title: 'Natural Language Processing & Embeddings',
        description: 'Tokenization, Word2Vec, Recurrent networks, and modern subword tokenizers (BPE, WordPiece).',
        keyTopics: ['Text tokenization and vocabulary generation', 'Dense word embeddings and semantic spaces', 'Sequence padding and masking'],
        handsOnLab: 'Training a text classification network using token embeddings in PyTorch.'
      },
      {
        id: 'dl-4',
        moduleNumber: 4,
        title: 'The Transformer Architecture & Self-Attention',
        description: 'Deconstructing Attention Is All You Need: Query, Key, Value matrices, multi-head attention, and positional encodings.',
        keyTopics: ['Scaled dot-product attention mechanics', 'Encoder vs decoder models (BERT vs GPT)', 'Positional encoding rationale'],
        handsOnLab: 'Implementing single-head scaled dot-product attention from raw PyTorch operations.'
      },
      {
        id: 'dl-5',
        moduleNumber: 5,
        title: 'Hugging Face & Parameter-Efficient Fine-Tuning (LoRA)',
        description: 'Hugging Face Transformers library, datasets, and fine-tuning using LoRA/QLoRA.',
        keyTopics: ['Hugging Face pipeline and Trainer API', 'Quantization concepts (4-bit, 8-bit)', 'LoRA adapter training and inference merging'],
        handsOnLab: 'Fine-tuning an open-source language model on domain-specific customer support conversations.'
      }
    ],
    practicalExercises: [
      'Build a sentiment analysis classifier using Hugging Face Transformers',
      'Implement an automated Named Entity Recognition (NER) pipeline for contract processing',
      'Fine-tune an open LLM with LoRA on synthetic domain dialogues'
    ],
    sampleProjects: [
      {
        title: 'Customer Support Ticket Classifier & Triage Model',
        description: 'A deep learning system fine-tuning a transformer model to categorize enterprise support tickets, detect customer frustration, and route tickets to appropriate tiers.',
        tools: ['PyTorch', 'Hugging Face Transformers', 'LoRA', 'FastAPI']
      }
    ],
    toolsUsed: ['PyTorch', 'Hugging Face', 'Weights & Biases', 'CUDA / GPU Compute', 'FastAPI'],
    assessmentApproach: 'Evaluation of fine-tuned model checkpoint with documented validation loss curves and benchmark test scores.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Do students need local GPUs?',
        answer: 'No. Training labs are structured for Google Colab and cloud GPU instances with clear setup guidance provided.'
      }
    ],
    relatedProgrammes: ['machine-learning-with-practical-projects', 'rag-and-ai-knowledge-assistants'],
    isFeatured: false,
    published: true
  },
  {
    id: 'prog-mern',
    slug: 'mern-full-stack-development',
    title: 'MERN Full-Stack Development',
    category: 'Software & Full-Stack',
    tagline: 'Build production web applications with MongoDB, Express, React, and Node.js.',
    imageUrl: '/src/assets/images/mern_stack_photo_1793179109844.jpg',
    labTelemetry: {
      accuracy: '100% Type & Test Coverage',
      nodes: 30,
      speed: '45ms API Latency',
      badge: 'Full-Stack Modern',
      chartTitle: 'MERN Microservices Telemetry',
      metrics: [
        { label: 'Express API P99 Latency', value: '45ms', pct: 97 },
        { label: 'React Lighthouse Performance', value: '98/100', pct: 98 },
        { label: 'MongoDB Indexed Query Time', value: '< 8ms', pct: 99 }
      ]
    },
    overview: 'A complete full-stack engineering programme for developers building modern web products. Learn to construct accessible, reactive frontend interfaces with React and Tailwind, design scalable REST and WebSocket APIs with Node and Express, and model data with MongoDB and relational databases.',
    audience: [
      'Frontend developers wanting to master full-stack backend development',
      'College students seeking industry-ready web development skills',
      'Engineers preparing to build AI-driven web applications'
    ],
    audienceType: ['students', 'professionals', 'colleges'],
    prerequisites: 'Familiarity with HTML, CSS, and basic JavaScript fundamentals.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Develop modern, responsive user interfaces using React hooks, components, and state patterns',
      'Architect robust RESTful APIs in Node.js and Express with comprehensive validation',
      'Model documents and schemas with MongoDB and Mongoose including indexes and aggregation',
      'Implement secure authentication flows using JWT, bcrypt, and HTTP-only cookies',
      'Deploy full-stack applications with environment variables and CI/CD best practices'
    ],
    modules: [
      {
        id: 'mern-1',
        moduleNumber: 1,
        title: 'Modern JavaScript (ES6+) & TypeScript Foundations',
        description: 'Promises, async/await, closures, destructuring, and TypeScript types.',
        keyTopics: ['Asynchronous event loop', 'TypeScript interfaces and type safety', 'Modular code organization'],
        handsOnLab: 'Refactoring an asynchronous JS utility into strict TypeScript with full type checking.'
      },
      {
        id: 'mern-2',
        moduleNumber: 2,
        title: 'React Fundamentals, Hooks & UI Architecture',
        description: 'Components, JSX, props, useState, useEffect, custom hooks, and Tailwind CSS.',
        keyTopics: ['Component lifecycles and reactivity', 'Lifting state and context API', 'Accessible styling with Tailwind'],
        handsOnLab: 'Building a responsive, interactive project management board.'
      },
      {
        id: 'mern-3',
        moduleNumber: 3,
        title: 'Backend Engineering with Node.js & Express',
        description: 'Routing, middleware chains, request validation, error handlers, and CORS.',
        keyTopics: ['HTTP methods and status code semantics', 'Custom middleware creation', 'Input sanitization and validation'],
        handsOnLab: 'Constructing an authenticated REST API with rate-limiting and input validation.'
      },
      {
        id: 'mern-4',
        moduleNumber: 4,
        title: 'Database Modeling with MongoDB & Mongoose',
        description: 'NoSQL schema design, relationships vs embedding, indexing, and aggregation pipelines.',
        keyTopics: ['Schema validation in Mongoose', 'Indexing for query performance', 'Complex aggregation operations'],
        handsOnLab: 'Designing a multi-tenant data schema with user roles and permissions.'
      },
      {
        id: 'mern-5',
        moduleNumber: 5,
        title: 'Authentication, Security & Production Deployment',
        description: 'JWT tokens, password hashing with bcrypt, secure cookies, and cloud hosting.',
        keyTopics: ['Stateless vs stateful auth', 'Protecting against XSS and CSRF', 'Dockerization and deployment'],
        handsOnLab: 'Deploying a full-stack MERN application with automated health checks.'
      }
    ],
    practicalExercises: [
      'Build a role-based authentication and authorization system',
      'Design an e-commerce catalog API with search, filtering, and pagination',
      'Implement real-time notification alerts with WebSockets'
    ],
    sampleProjects: [
      {
        title: 'Collaborative Workspace Management Platform',
        description: 'A full-stack web application featuring user auth, project kanban boards, real-time activity feeds, and document attachments.',
        tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']
      }
    ],
    toolsUsed: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Docker'],
    assessmentApproach: 'Code review of a deployed full-stack application repository assessing architecture, security, and tests.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Do you teach TypeScript in this programme?',
        answer: 'Yes. Modern full-stack development requires type safety, so we introduce TypeScript early in both frontend and backend modules.'
      }
    ],
    relatedProgrammes: ['ai-application-development-and-deployment', 'python-programming-foundations-to-applications'],
    isFeatured: false,
    published: true
  },
  {
    id: 'prog-ai-app-dev',
    slug: 'ai-application-development-and-deployment',
    title: 'AI Application Development & Deployment',
    category: 'Software & Full-Stack',
    tagline: 'Engineer complete web applications powered by foundation model APIs, streaming, and tool calls.',
    imageUrl: '/src/assets/images/ai_app_photo_1793179109532.jpg',
    labTelemetry: {
      accuracy: '99.8% Production Uptime',
      nodes: 34,
      speed: 'Zero-Latency SSE',
      badge: 'Cloud AI Production',
      chartTitle: 'Streaming SSE & Token Telemetry',
      metrics: [
        { label: 'Time-to-First-Token (TTFT)', value: '180ms', pct: 98 },
        { label: 'Semantic Cache Hit Ratio', value: '44.2%', pct: 93 },
        { label: 'Docker Cloud Run Cold Start', value: '< 1.1s', pct: 96 }
      ]
    },
    overview: 'Learn to design and ship production-grade, AI-native web applications. This practical curriculum bridges full-stack engineering with generative AI: connecting React interfaces to streaming LLM backends, implementing function calling, managing API rate limits, handling token budgets, and deploying containerized services.',
    audience: [
      'Full-stack engineers building AI-native SaaS products',
      'Tech leads architecting generative AI features into existing systems',
      'Entrepreneurs and innovators seeking rapid prototyping skills'
    ],
    audienceType: ['professionals', 'corporate', 'students'],
    prerequisites: 'Strong familiarity with JavaScript/TypeScript or Python, REST APIs, and modern frontend concepts.',
    level: 'All Levels',
    deliveryModes: ['Online', 'Onsite', 'Hybrid'],
    durationNote: 'Duration and schedule customised by programme. Enquire for availability.',
    learningOutcomes: [
      'Integrate state-of-the-art LLM SDKs (Google GenAI, Anthropic, OpenAI) into backend services',
      'Implement real-time Server-Sent Events (SSE) streaming for zero-latency UI experiences',
      'Build client and server function-calling workflows with JSON schema validation',
      'Implement production telemetry, caching layers, and token cost tracking',
      'Package and deploy AI services to cloud containers with production guardrails'
    ],
    modules: [
      {
        id: 'ai-dev-1',
        moduleNumber: 1,
        title: 'Modern AI SDKs & Server Architecture',
        description: 'Integrating foundation models safely on the server side: secrets management, client proxies, and error handling.',
        keyTopics: ['Server-side vs client-side API security', 'SDK initialization and model parameter tuning', 'Handling timeouts and rate limit 429s'],
        handsOnLab: 'Building a secure Express/FastAPI proxy that authenticates users before dispatching model queries.'
      },
      {
        id: 'ai-dev-2',
        moduleNumber: 2,
        title: 'Streaming Responses & UI Feedback States',
        description: 'Server-Sent Events (SSE), readable streams, and chunk-by-chunk rendering in React.',
        keyTopics: ['SSE protocol and header configuration', 'Async iterable stream decoding in TypeScript', 'Optimistic UI and typing animation controls'],
        handsOnLab: 'Implementing real-time streaming text generation in a React interface with cancel affordance.'
      },
      {
        id: 'ai-dev-3',
        moduleNumber: 3,
        title: 'Tool Integration & Structured Function Calling',
        description: 'Empowering the UI to trigger backend functions, database lookups, and visual components via model output.',
        keyTopics: ['Tool schema definitions with Zod', 'Handling round-trip model execution', 'Generative UI: rendering custom React widgets on model response'],
        handsOnLab: 'Building an interactive assistant that triggers custom charting widgets on the fly.'
      },
      {
        id: 'ai-dev-4',
        moduleNumber: 4,
        title: 'Caching, Semantic Caching & Cost Optimisation',
        description: 'Minimizing latency and API bills through exact matching, semantic embedding caches, and prompt compression.',
        keyTopics: ['Redis cache integration', 'Semantic caching with vector similarity', 'Context window management and pruning'],
        handsOnLab: 'Implementing a semantic cache layer that cuts API costs by 40% on recurring queries.'
      },
      {
        id: 'ai-dev-5',
        moduleNumber: 5,
        title: 'Containerization, Deployment & Production Guardrails',
        description: 'Dockerizing the application, health checks, environment secrets, and monitoring.',
        keyTopics: ['Multi-stage Docker builds', 'Cloud container deployment (Cloud Run / AWS)', 'Latency, token count, and error logging'],
        handsOnLab: 'Containerizing and deploying a full-stack AI application with structured logging and uptime monitoring.'
      }
    ],
    practicalExercises: [
      'Build a streaming conversational search interface with citation references',
      'Implement an automated document translation and formatting pipeline',
      'Configure automated cost telemetry tracking cost per user transaction'
    ],
    sampleProjects: [
      {
        title: 'AI-Powered Research & Synthesis Platform',
        description: 'A full-stack web application featuring user document uploads, streaming generation, interactive tool execution for web searches, and export to PDF/Markdown.',
        tools: ['React', 'TypeScript', 'Node/Express', 'Gemini / Claude SDK', 'Docker']
      }
    ],
    toolsUsed: ['TypeScript', 'React', 'Node.js', 'Google GenAI SDK', 'Docker', 'Redis'],
    assessmentApproach: 'Review of an end-to-end deployed AI web application adhering to security, streaming, and responsive UI standards.',
    certificateNote: 'Certificate availability and completion requirements will be confirmed in the programme proposal.',
    faqs: [
      {
        question: 'Do we need paid API keys during training?',
        answer: 'We provide structured sandbox environments and guidance on developer credits and free-tier access options.'
      }
    ],
    relatedProgrammes: ['agentic-ai-and-workflow-automation', 'rag-and-ai-knowledge-assistants', 'mern-full-stack-development'],
    isFeatured: true,
    published: true
  }
];

export const initialWorkshopFormats: WorkshopFormat[] = [
  {
    id: 'ws-genai-intro',
    slug: 'introduction-to-generative-ai',
    title: 'Introduction to Generative AI',
    formatType: 'Introductory Session',
    duration: 'Half-Day (3–4 Hours)',
    audience: 'Corporate business teams, faculty, non-technical professionals',
    audienceType: 'corporate',
    category: 'Generative AI',
    imageUrl: '/assets/images/intro_genai_workshop_1793005051165.jpg',
    badge: 'Collegiate & Executive Immersion',
    labTelemetry: {
      chartTitle: 'Token Prediction & Prompt Precision Telemetry',
      accuracy: '98.5% Conceptual Mastery',
      speed: 'Instant Sandbox',
      badge: 'Foundation Workshop',
      metrics: [
        { label: 'Token Window Comprehension', value: '98.5%', pct: 98 },
        { label: 'Structured Prompt Accuracy', value: '96.4%', pct: 96 },
        { label: 'Zero-Data-Leakage Safety', value: '100%', pct: 100 }
      ]
    },
    overview: 'A focused, interactive immersion providing conceptual clarity, immediate productivity techniques, and governance principles for teams adopting AI.',
    prerequisites: 'No technical background required. Participants should bring a laptop.',
    agenda: [
      { timeSlot: '09:00 – 10:00', title: 'The GenAI Landscape', detail: 'Demystifying LLMs, capabilities, constraints, and hallucination mechanics.' },
      { timeSlot: '10:00 – 11:30', title: 'Hands-on Prompting Lab', detail: 'Structured framework for memos, research, synthesis, and tables.' },
      { timeSlot: '11:45 – 12:45', title: 'Enterprise Data Safety', detail: 'Privacy settings, sanitization protocols, and organizational SOPs.' },
      { timeSlot: '12:45 – 13:00', title: 'Action Planning & Q&A', detail: 'Personal productivity roadmap and departmental adoption steps.' }
    ],
    learningOutcomes: [
      'Grasp core terminology and avoid common conceptual pitfalls',
      'Apply structured prompting to everyday document drafting and data extraction',
      'Identify enterprise risks and maintain confidentiality'
    ],
    tools: ['Gemini', 'ChatGPT', 'Claude'],
    trainer: 'Abhishek Sharma & Senior Instructors',
    deliveryMode: ['Online', 'Onsite'],
    isConfirmedEvent: false,
    published: true
  },
  {
    id: 'ws-prompt-eng',
    slug: 'prompt-engineering-workshop',
    title: 'Prompt Engineering for Professionals',
    formatType: 'One-Day Workshop',
    duration: 'Full Day (6–7 Hours)',
    audience: 'Product managers, analysts, developers, power users',
    audienceType: 'professionals',
    category: 'Generative AI',
    imageUrl: '/src/assets/images/hands_on_coding_workshop_1792943015050.jpg',
    badge: 'Engineering Harness',
    labTelemetry: {
      chartTitle: 'JSON Schema & CoT Reasoning Benchmarks',
      accuracy: '99.4% Determinism',
      speed: '12ms Schema Parse',
      badge: 'Deterministic Prompts',
      metrics: [
        { label: 'JSON Schema Validation Pass', value: '99.4%', pct: 99 },
        { label: 'Few-Shot CoT Convergence', value: '97.1%', pct: 97 },
        { label: 'Prompt Injection Defense', value: '99.8%', pct: 100 }
      ]
    },
    overview: 'An intensive masterclass moving from basic prompts to few-shot reasoning, structured JSON extraction, and regression testing.',
    prerequisites: 'Basic familiarity with AI tools and web interfaces.',
    agenda: [
      { timeSlot: '09:30 – 11:00', title: 'Advanced Prompt Architectures', detail: 'Delimiters, few-shot demonstration selection, and system instruction design.' },
      { timeSlot: '11:15 – 13:00', title: 'Chain-of-Thought & Reasoning Labs', detail: 'Step-by-step reasoning scaffolds for complex multi-factor problems.' },
      { timeSlot: '14:00 – 15:30', title: 'Structured Output & JSON Schemas', detail: 'Guaranteed schema adherence for automated downstream pipelines.' },
      { timeSlot: '15:45 – 17:00', title: 'Red-Teaming & Defensive Guardrails', detail: 'Testing against edge cases, drift, and prompt injection attempts.' }
    ],
    learningOutcomes: [
      'Construct deterministic prompts that return exact JSON formats',
      'Employ Chain-of-Thought reasoning for analytical workflows',
      'Build defensive guardrails against unintended behavior'
    ],
    tools: ['Google AI Studio', 'OpenAI Playground', 'Anthropic Console'],
    trainer: 'Abhishek Sharma & Senior Instructors',
    deliveryMode: ['Online', 'Onsite', 'Hybrid'],
    isConfirmedEvent: false,
    published: true
  },
  {
    id: 'ws-first-ai-assistant',
    slug: 'build-your-first-ai-assistant',
    title: 'Build Your First AI Assistant',
    formatType: 'One-Day Workshop',
    duration: 'Full Day (6–7 Hours)',
    audience: 'Engineering students, software developers, technical enthusiasts',
    audienceType: 'students',
    category: 'Agentic AI & Automation',
    imageUrl: '/assets/images/agent_workflow_lab_1793001256101.jpg',
    badge: 'Hands-On RAG Lab',
    labTelemetry: {
      chartTitle: 'Document Chunking & Vector Search Telemetry',
      accuracy: '99.1% Grounding Rate',
      speed: '85ms Query Latency',
      badge: 'RAG Knowledge Assistant',
      metrics: [
        { label: 'Exact Citation Attribution', value: '99.1%', pct: 99 },
        { label: 'ChromaDB Cosine Recall', value: '96.8%', pct: 97 },
        { label: 'Zero-Hallucination Guard', value: '100%', pct: 100 }
      ]
    },
    overview: 'A hands-on coding sprint where participants construct a functional retrieval-augmented conversational assistant grounded in custom documents.',
    prerequisites: 'Basic Python syntax; familiarity with virtual environments and APIs.',
    agenda: [
      { timeSlot: '09:30 – 11:00', title: 'Anatomy of an AI Assistant', detail: 'Embeddings, vector stores, and prompt augmentation pipeline.' },
      { timeSlot: '11:15 – 13:00', title: 'Document Parsing & Vectorization', detail: 'Chunking PDF documentation and storing embeddings in ChromaDB.' },
      { timeSlot: '14:00 – 15:30', title: 'Connecting LLM Retrieval Loops', detail: 'Writing the retrieval context injection and source citation logic.' },
      { timeSlot: '15:45 – 17:00', title: 'Deploying the Web Interface', detail: 'Wrapping the assistant in a clean Streamlit or FastAPI frontend.' }
    ],
    learningOutcomes: [
      'Understand end-to-end vector indexing and retrieval mechanics',
      'Build a working document QA assistant with verifiable citations',
      'Run a local vector database and connect it to model APIs'
    ],
    tools: ['Python', 'ChromaDB', 'Gemini API', 'Streamlit'],
    trainer: 'Abhishek Sharma & Senior Instructors',
    deliveryMode: ['Online', 'Onsite', 'Hybrid'],
    isConfirmedEvent: false,
    published: true
  },
  {
    id: 'ws-agentic-n8n',
    slug: 'agentic-ai-and-n8n-automation',
    title: 'Agentic AI & n8n Automation',
    formatType: 'Multi-Day Bootcamp',
    duration: '2 Days (12 Hours Total)',
    audience: 'Operations engineers, IT staff, system developers, agency owners',
    audienceType: 'corporate',
    category: 'Agentic AI & Automation',
    imageUrl: '/src/assets/images/agentic_workflow_illustration_1792943014195.jpg',
    badge: 'Autonomous Systems Core',
    labTelemetry: {
      chartTitle: 'Autonomous ReAct & Webhook Loop Telemetry',
      accuracy: '98.7% Tool Execution',
      speed: '< 3.2s End-to-End',
      badge: 'Visual Agent Rig',
      metrics: [
        { label: 'Webhook Dispatch Fidelity', value: '100%', pct: 100 },
        { label: 'Dynamic Tool ReAct Loop', value: '98.7%', pct: 98 },
        { label: 'Human-in-Loop Safe Halt', value: '100%', pct: 100 }
      ]
    },
    overview: 'A deep practical bootcamp on combining n8n visual automation workflows with autonomous AI agents, tool routing, and external APIs.',
    prerequisites: 'Understanding of webhooks and API concepts (JSON, HTTP methods).',
    agenda: [
      { timeSlot: 'Day 1: 09:30 – 13:00', title: 'n8n Core & Webhook Pipelines', detail: 'Node architecture, data item arrays, and conditional branch logic.' },
      { timeSlot: 'Day 1: 14:00 – 17:00', title: 'Integrating Model Nodes & Prompts', detail: 'Calling LLMs, parsing unstructured text, and writing expressions.' },
      { timeSlot: 'Day 2: 09:30 – 13:00', title: 'Autonomous Agent Nodes in n8n', detail: 'Connecting tools, memory nodes, and external vector retrievers.' },
      { timeSlot: 'Day 2: 14:00 – 17:00', title: 'Enterprise Error Handling & Deploy', detail: 'Alerting, sub-workflows, Docker hosting, and security hygiene.' }
    ],
    learningOutcomes: [
      'Self-host and configure n8n with production security settings',
      'Construct automated lead triage and document generation pipelines',
      'Equip AI agents with live tool execution inside visual workflows'
    ],
    tools: ['n8n', 'Docker', 'PostgreSQL', 'Slack API', 'Gemini / OpenAI'],
    trainer: 'Abhishek Sharma & Senior Instructors',
    deliveryMode: ['Online', 'Onsite'],
    isConfirmedEvent: false,
    published: true
  },
  {
    id: 'ws-python-analytics',
    slug: 'python-and-data-analytics-workshop',
    title: 'Python & Data Analytics Workshop',
    formatType: 'One-Day Workshop',
    duration: 'Full Day (6–7 Hours)',
    audience: 'College students, aspiring analysts, corporate spreadsheet users',
    audienceType: 'students',
    category: 'Data & Analytics',
    imageUrl: '/assets/images/ai_data_engineering_lab_1793001240338.jpg',
    badge: 'SQL & Pandas Foundation',
    labTelemetry: {
      chartTitle: 'SQL CTE & Pandas Vectorization Benchmarks',
      accuracy: '99.5% Query Determinism',
      speed: '1.2M rows/s Throughput',
      badge: 'Data Analytics Rig',
      metrics: [
        { label: 'Relational CTE Join Speed', value: '4.2x Faster', pct: 92 },
        { label: 'Pandas Pipeline Execution', value: '99.5%', pct: 99 },
        { label: 'Cohort Retention Fidelity', value: '100%', pct: 100 }
      ]
    },
    overview: 'Replace fragile manual spreadsheet routines with automated Python and SQL scripts for data extraction, cleansing, and visualization.',
    prerequisites: 'Comfortable working with spreadsheets and tables.',
    agenda: [
      { timeSlot: '09:30 – 11:00', title: 'Python for Tabular Data', detail: 'Jupyter notebooks, Pandas DataFrames, and vectorized filtering.' },
      { timeSlot: '11:15 – 13:00', title: 'Cleansing Messy Datasets', detail: 'Missing value handling, date parsing, and column transformations.' },
      { timeSlot: '14:00 – 15:30', title: 'SQL Joins & Aggregations', detail: 'Writing SQL queries to extract multi-table relational records.' },
      { timeSlot: '15:45 – 17:00', title: 'Executive Visualization & Reporting', detail: 'Generating informative charts with Seaborn and exporting summaries.' }
    ],
    learningOutcomes: [
      'Ingest and clean multi-file CSV and Excel datasets using Pandas',
      'Perform SQL aggregation and joining operations',
      'Generate publication-quality charts and executive summaries'
    ],
    tools: ['Python', 'Pandas', 'Jupyter', 'SQLite / PostgreSQL', 'Seaborn'],
    trainer: 'Abhishek Sharma & Senior Instructors',
    deliveryMode: ['Online', 'Onsite', 'Hybrid'],
    isConfirmedEvent: false,
    published: true
  },
  {
    id: 'ws-ml-bootcamp',
    slug: 'machine-learning-project-bootcamp',
    title: 'Machine Learning Project Bootcamp',
    formatType: 'Multi-Day Bootcamp',
    duration: '3 Days (18 Hours Total)',
    audience: 'Engineering & CS college departments, technical professionals',
    audienceType: 'colleges',
    category: 'Machine Learning & NLP',
    imageUrl: '/assets/images/college_bootcamp_lab_1793005067087.jpg',
    badge: 'Collegiate Capstone Rig',
    labTelemetry: {
      chartTitle: 'Model Loss Convergence & ROC-AUC Metrics',
      accuracy: '0.946 ROC-AUC',
      speed: '4.2ms Inference',
      badge: '',
      metrics: [
        { label: 'Ensemble ROC-AUC Score', value: '0.946', pct: 95 },
        { label: 'Scikit-Learn Leak-Free Pass', value: '100%', pct: 100 },
        { label: 'FastAPI REST Latency', value: '< 25ms', pct: 96 }
      ]
    },
    overview: 'An end-to-end practical project sprint taking students through problem formulation, data preparation, algorithm training, tuning, and REST API deployment.',
    prerequisites: 'Intermediate Python proficiency; basic understanding of statistics.',
    agenda: [
      { timeSlot: 'Day 1', title: 'ML Framing, EDA & Preprocessing', detail: 'Exploratory analysis, feature engineering, and Scikit-Learn pipelines.' },
      { timeSlot: 'Day 2', title: 'Model Training, Trees & XGBoost', detail: 'Training classifiers/regressors, hyperparameter optimization, and SHAP.' },
      { timeSlot: 'Day 3', title: 'API Packaging & Deployment', detail: 'Packaging the trained pipeline into a FastAPI service and testing predictions.' }
    ],
    learningOutcomes: [
      'Build reproducible Scikit-Learn feature preprocessing pipelines',
      'Train, tune, and evaluate gradient boosted decision trees (XGBoost)',
      'Deploy the trained model as a functional REST inference API'
    ],
    tools: ['Python', 'Scikit-Learn', 'XGBoost', 'Optuna', 'FastAPI', 'Docker'],
    trainer: 'Abhishek Sharma & Senior Instructors',
    deliveryMode: ['Online', 'Onsite'],
    isConfirmedEvent: false,
    published: true
  }
];

export const initialLearningPaths: LearningPath[] = [
  {
    id: 'path-business',
    slug: 'ai-for-business-professionals',
    title: 'AI for Business Professionals',
    targetAudience: 'Operations managers, department leads, analysts, HR, and marketing leaders',
    durationEstimate: '4–8 weeks (modular)',
    badge: 'Enterprise Operations Track',
    imageUrl: '/src/assets/images/corporate_leadership_briefing_1792943015224.jpg',
    summary: 'A structured progression from everyday generative productivity to systematic prompt engineering and visual workflow automation, empowering teams to eliminate repetitive operational drudgery.',
    prerequisites: 'Basic digital literacy; comfort with spreadsheets and office productivity tools.',
    milestones: [
      {
        step: 1,
        title: 'Workplace AI Foundations',
        description: 'Establish foundational fluency in modern LLMs, data governance, and prompt formatting for recurring documents.',
        programmeSlug: 'generative-ai-for-workplace-productivity',
        deliverable: 'Audited team prompt repository and executive briefing generator.'
      },
      {
        step: 2,
        title: 'Structured Prompt Engineering',
        description: 'Advance from conversational prompts to few-shot logic, strict JSON outputs, and validation rubrics.',
        programmeSlug: 'prompt-engineering-for-professionals',
        deliverable: 'Automated contract clause classification and structured information extraction pipeline.'
      },
      {
        step: 3,
        title: 'Workflow Automation with n8n',
        description: 'Connect AI models directly into existing departmental tools (email, CRM, spreadsheets, Slack) via visual event workflows.',
        programmeSlug: 'n8n-automation-for-business-workflows',
        deliverable: 'End-to-end automated customer enquiry qualification and triage pipeline.'
      }
    ],
    practicalOutcomes: [
      'Eliminate 5–10 hours per week of manual document summarization and data transcription',
      'Enforce enterprise privacy and governance standards across all team AI usage',
      'Build dependable visual automations that connect SaaS tools without manual engineering dependencies'
    ]
  },
  {
    id: 'path-data-career',
    slug: 'ai-and-data-engineering-career-foundations',
    title: 'AI & Data Engineering Career Foundations',
    targetAudience: 'College students, career transitioners, and analysts aiming for data & AI roles',
    durationEstimate: '12–16 weeks (comprehensive)',
    badge: 'Flagship Career Foundations Track',
    imageUrl: '/assets/images/ai_data_engineering_lab_1793001240338.jpg',
    summary: 'A rigorous technical path grounding learners in core software craftsmanship, relational databases, statistical data manipulation, predictive machine learning, and business intelligence.',
    prerequisites: 'Analytical mindset and basic algebra. Prior coding experience is helpful but not required.',
    milestones: [
      {
        step: 1,
        title: 'Python Software Foundations',
        description: 'Write robust, modular, object-oriented code with clean functions, error handling, and file manipulation.',
        programmeSlug: 'python-programming-foundations-to-applications',
        deliverable: 'Modular automated log analyzer and CLI transaction ledger.'
      },
      {
        step: 2,
        title: 'SQL & Data Wrangling with Pandas',
        description: 'Master relational schema querying with CTEs and window functions alongside statistical analysis in Pandas.',
        programmeSlug: 'data-analytics-with-python-and-sql',
        deliverable: 'Full cohort retention analysis and churn diagnostic on retail transaction databases.'
      },
      {
        step: 3,
        title: 'Predictive Machine Learning',
        description: 'Construct leak-free feature pipelines, train tree-based algorithms (XGBoost), and interpret predictions with SHAP.',
        programmeSlug: 'machine-learning-with-practical-projects',
        deliverable: 'End-to-end loan default risk predictor deployed as a containerized FastAPI service.'
      },
      {
        step: 4,
        title: 'Business Dashboards & Reporting',
        description: 'Translate analytical insights into executive-ready star-schema Power BI dashboards with dynamic DAX measures.',
        programmeSlug: 'power-bi-and-business-dashboards',
        deliverable: 'Executive sales and margin performance dashboard with drill-through navigation.'
      }
    ],
    practicalOutcomes: [
      'Proficiency in the core modern data stack: Python, SQL, Pandas, Scikit-Learn, and Power BI',
      'A portfolio of four distinct, verified technical projects demonstrating real problem-solving',
      'Strong readiness for technical interviews and data engineering / analytics responsibilities'
    ]
  },
  {
    id: 'path-developer-automation',
    slug: 'ai-automation-for-developers',
    title: 'AI Automation for Developers',
    targetAudience: 'Software engineers, backend developers, and technical architects',
    durationEstimate: '8–12 weeks (advanced)',
    badge: 'Autonomous Systems Track',
    imageUrl: '/assets/images/agent_workflow_lab_1793001256101.jpg',
    summary: 'An engineering-focused curriculum covering the frontier of modern AI software development: autonomous multi-agent loops, enterprise RAG knowledge bases, and streaming full-stack application development.',
    prerequisites: 'Solid experience with Python or TypeScript, REST APIs, and basic database concepts.',
    milestones: [
      {
        step: 1,
        title: 'Retrieval-Augmented Generation (RAG)',
        description: 'Build enterprise search pipelines with semantic vector indexing, hybrid BM25 retrieval, and cross-encoder reranking.',
        programmeSlug: 'rag-and-ai-knowledge-assistants',
        deliverable: 'Production internal knowledge assistant with strict citation grounding and pgvector indexing.'
      },
      {
        step: 2,
        title: 'Agentic Architecture & Tool Loops',
        description: 'Architect autonomous multi-agent networks utilizing ReAct loops, state machines, tool execution, and human approval gates.',
        programmeSlug: 'agentic-ai-and-workflow-automation',
        deliverable: 'Autonomous inbound sales qualification and research agent system with tool integration.'
      },
      {
        step: 3,
        title: 'Full-Stack AI Application Engineering',
        description: 'Ship complete web applications featuring Server-Sent Events (SSE) streaming, function calling, caching, and container deployment.',
        programmeSlug: 'ai-application-development-and-deployment',
        deliverable: 'Deployed AI-native web product with real-time streaming and semantic query caching.'
      }
    ],
    practicalOutcomes: [
      'Architect enterprise-grade RAG and agent systems that operate reliably in production',
      'Implement defensive guardrails, budget limits, and human-in-the-loop validation triggers',
      'Transition from consuming basic chat APIs to engineering autonomous AI software systems'
    ]
  }
];

export const initialLearningProjects: LearningProject[] = [
  {
    id: 'proj-1',
    slug: 'internal-knowledge-assistant',
    title: 'Internal Knowledge Assistant',
    category: 'Agentic AI & Automation',
    problemStatement: 'Employees waste hours searching across disparate internal PDFs, architecture specs, and handbook policies, often finding outdated or conflicting information.',
    toolsUsed: ['Python', 'ChromaDB / pgvector', 'FastAPI', 'Gemini / Claude API', 'Streamlit'],
    learningObjectives: [
      'Implement recursive chunking and metadata extraction from PDF manuals',
      'Index embeddings in a persistent vector database with cosine similarity indexing',
      'Enforce strict source citations in the LLM response to eliminate hallucination'
    ],
    expectedDemonstration: 'A clean interactive web application where users query company policy documents and receive concise answers accompanied by exact page numbers and verbatim snippet citations.',
    architectureNotes: 'Ingestion pipeline parses documents into 500-token chunks with 50-token overlap, calculates vector embeddings, and executes top-k similarity search before prompt synthesis.',
    deliverables: [
      'Document parsing script with metadata enrichment',
      'Vector indexing and similarity retrieval module',
      'FastAPI endpoint with streaming response and citation payload',
      'Interactive testing user interface'
    ]
  },
  {
    id: 'proj-2',
    slug: 'lead-enquiry-automation',
    title: 'Lead Enquiry Automation',
    category: 'Agentic AI & Automation',
    problemStatement: 'Inbound sales enquiries arrive with missing details, spam submissions, or incomplete company profiles, slowing sales development reps from responding promptly.',
    toolsUsed: ['n8n', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Slack API', 'LLM Node'],
    learningObjectives: [
      'Configure webhook ingestion endpoints with input validation and rate limiting',
      'Use LLM nodes to analyze inquiry intent and extract structured company attributes',
      'Automate CRM record creation, priority assignment, and real-time team notifications'
    ],
    expectedDemonstration: 'A fully automated n8n workflow triggered upon form submission that verifies business emails, classifies urgency, logs to the database, and alerts sales reps in Slack with suggested talking points.',
    architectureNotes: 'Event-driven architecture with dedicated error handling sub-workflow, deduplication checks against existing CRM records, and automated execution logging.',
    deliverables: [
      'Exportable n8n workflow JSON with documented environment credentials',
      'PostgreSQL schema for inquiry and routing history',
      'Slack notification template with rich action blocks',
      'Execution test suite with simulated inbound payloads'
    ]
  },
  {
    id: 'proj-3',
    slug: 'hr-faq-assistant',
    title: 'HR FAQ Assistant',
    category: 'Generative AI',
    problemStatement: 'HR departments are flooded with repetitive inquiries regarding benefits, leave policies, travel reimbursements, and medical insurance terms.',
    toolsUsed: ['Python / TypeScript', 'Vector Search', 'React', 'Tailwind CSS', 'Claude / Gemini'],
    learningObjectives: [
      'Design conversational guardrails that restrict responses exclusively to verified HR policy texts',
      'Implement fallback mechanisms that seamlessly escalate unanswered questions to human HR tickets',
      'Create an intuitive, accessible chat interface with question suggestions'
    ],
    expectedDemonstration: 'An enterprise conversational widget where employees ask leave and benefits queries in natural language and receive policy-grounded answers or an automated escalation ticket.',
    architectureNotes: 'Two-tier verification: semantic matching against an approved Q&A ledger first; if similarity is below threshold, routes to RAG over full handbook with confidence scoring.',
    deliverables: [
      'Approved policy knowledge base indexing scripts',
      'Confidence scoring and fallback threshold logic',
      'Lightweight embeddable chat widget component',
      'Audit log of resolved vs escalated inquiries'
    ]
  },
  {
    id: 'proj-4',
    slug: 'sales-performance-dashboard',
    title: 'Sales Performance Dashboard',
    category: 'Data & Analytics',
    problemStatement: 'Commercial leaders lack a unified view of regional sales velocity, customer acquisition costs, and quota attainment across multiple disconnected spreadsheets.',
    toolsUsed: ['Power BI Desktop', 'Power Query', 'DAX', 'SQL Server / Excel'],
    learningObjectives: [
      'Transform disparate regional sales logs into a clean, normalized star schema',
      'Write robust DAX measures for Year-to-Date (YTD) revenue, target variance, and moving averages',
      'Apply ergonomic visual hierarchy principles for immediate executive decision-making'
    ],
    expectedDemonstration: 'A production Power BI report featuring high-level executive cards, interactive regional maps, customer segment drill-throughs, and time-intelligence trend comparisons.',
    architectureNotes: 'Star schema with central Sales Fact table connected to Date Dimension, Product Dimension, Store Dimension, and Sales Rep Dimension with single-direction filtering.',
    deliverables: [
      'Power BI (.pbix) template with documented data model',
      'Power Query M-code transformation scripts',
      'Comprehensive DAX measure catalog with formula explanations',
      'Executive walkthrough video recording / slide deck'
    ]
  },
  {
    id: 'proj-5',
    slug: 'document-information-extraction',
    title: 'Document Information Extraction',
    category: 'Generative AI',
    problemStatement: 'Finance and legal teams spend hundreds of manual hours extracting invoice numbers, payment terms, tax IDs, and liability clauses from scanned PDFs.',
    toolsUsed: ['Python', 'Pydantic', 'OpenAI / Gemini Structured Outputs', 'PDFPlumber'],
    learningObjectives: [
      'Extract text and tables reliably from complex multi-page PDF documents',
      'Define strict Pydantic schemas enforcing data types, regex formats, and required fields',
      'Perform automated reconciliation checks (e.g., verifying line item totals sum to invoice total)'
    ],
    expectedDemonstration: 'A batch processing utility that consumes folders of varied commercial invoices and outputs a validated CSV ledger with flagged reconciliation discrepancies.',
    architectureNotes: 'Hybrid parsing combining PDF coordinate text extraction with multimodal vision models for scanned image pages, followed by schema validation and math assertion checks.',
    deliverables: [
      'PDF extraction and preprocessing engine',
      'Strict Pydantic data models for invoice and contract schemas',
      'Automated reconciliation assertion test suite',
      'Clean CLI batch processing script'
    ]
  },
  {
    id: 'proj-6',
    slug: 'customer-support-ticket-classifier',
    title: 'Customer Support Ticket Classifier',
    category: 'Machine Learning & NLP',
    problemStatement: 'High-volume support operations struggle to prioritize urgent technical outages, routing tickets slowly and failing SLA commitments.',
    toolsUsed: ['Python', 'Scikit-Learn', 'PyTorch / Hugging Face', 'FastAPI', 'Docker'],
    learningObjectives: [
      'Clean and tokenize raw customer ticket text (stripping email signatures, PII, and noise)',
      'Train and benchmark text classification models (TF-IDF + Logistic Regression vs Fine-Tuned Transformer)',
      'Calculate multi-class precision, recall, and F1 scores to evaluate routing accuracy'
    ],
    expectedDemonstration: 'A low-latency REST API service that ingests incoming support ticket text, returns predicted department categories with confidence probabilities, and flags high-urgency keywords.',
    architectureNotes: 'Ensemble model comparing lightweight TF-IDF classifier for instant routing with background transformer inference for nuanced customer sentiment scoring.',
    deliverables: [
      'Data cleaning and tokenization pipeline',
      'Model training and hyperparameter tuning notebook',
      'FastAPI inference microservice with Swagger documentation',
      'Docker container configuration for reproducible deployment'
    ]
  }
];

export const initialResourceArticles: ResourceArticle[] = [
  {
    id: 'art-1',
    slug: 'how-to-choose-an-ai-workshop-for-your-team',
    title: 'How to Choose an AI Workshop for Your Team: A Practical Procurement Guide',
    publishedDate: '2026-03-15',
    authorName: 'Abhishek Sharma',
    authorRole: 'Founder & AI Engineer, Agentic AI Academy',
    readingTimeMinutes: 6,
    category: 'Corporate Strategy',
    excerpt: 'Avoid generic novelty demonstrations. Here is how business leaders, HR, and L&D managers can assess organizational readiness, select the right training depth, and guarantee tangible workplace outcomes.',
    contentMarkdown: `When evaluating AI training for corporate teams, the market is crowded with surface-level presentations that dazzle audiences for two hours but leave participants completely unable to improve their actual work the following Monday.

Selecting the right workshop requires diagnosing where your team genuinely sits on the adoption curve and defining explicit operational deliverables prior to the session.

### 1. Diagnose Your Team's Current Bottlenecks

Before looking at course syllabi, inventory the actual cognitive bottlenecks your team encounters:
- **Repetitive synthesis**: Are analysts spending 15 hours each week condensing client call notes, vendor proposals, or departmental status reports?
- **Workflow coordination**: Is time lost manually transcribing details between forms, CRMs, email, and spreadsheets?
- **Technical enablement**: Does your engineering team need to build intelligent search (RAG) over proprietary code and documents without compromising data privacy?

A team struggling with document summarization needs a practical workplace productivity workshop; an engineering group building customer features needs an agentic architecture bootcamp. Matching format to need is critical.

### 2. Distinguish Between Awareness and Competency

Workshops generally fall into three distinct tiers:

1. **Executive & Leadership Briefings (2–4 Hours)**: Focused on strategic governance, identifying high-ROI use cases, data security considerations, and resource planning.
2. **Applied Workplace Accelerators (1–2 Days)**: Focused on non-technical teams mastering structured prompt frameworks, data extraction, spreadsheet integration, and team SOPs.
3. **Technical Engineering Sprints (2–4 Days)**: Focused on software developers and analysts writing code, configuring APIs, deploying vector databases, and testing agent workflows.

Ensure your procurement request clearly specifies whether the goal is organizational awareness or technical execution.

### 3. Non-Negotiable Training Requirements

When reviewing training proposals, insist on these standards:
- **Zero Mock Fluff**: Participants must work on real, representative workflows rather than whimsical games or trivia generators.
- **Enterprise Data Hygiene**: Training must include rigorous instruction on privacy tiers, data sanitization, and preventing intellectual property leakage.
- **Post-Training Artifacts**: Every attendee should leave with functional assets: a documented prompt repository, an automated workflow template, or a tested code harness.

By approaching AI education with clear procurement discipline, organisations ensure training investments convert directly into lasting operational leverage.`,
    relatedArticleSlugs: ['how-to-define-outcomes-for-corporate-ai-training', 'generative-ai-vs-agentic-ai-practical-introduction'],
    published: true
  },
  {
    id: 'art-2',
    slug: 'generative-ai-vs-agentic-ai-practical-introduction',
    title: 'Generative AI vs Agentic AI: A Practical Introduction for Engineering and Operations Teams',
    publishedDate: '2026-03-28',
    authorName: 'Abhishek Sharma',
    authorRole: 'Founder & AI Engineer, Agentic AI Academy',
    readingTimeMinutes: 8,
    category: 'Technology & Architecture',
    excerpt: 'Move beyond the marketing buzzwords. Understand the architectural distinction between passive generative model prompts and autonomous agentic loops that perceive, plan, invoke tools, and self-correct.',
    contentMarkdown: `The technology industry has witnessed a dramatic shift from conversational Generative AI to Agentic AI. While marketing materials frequently blur these terms, their architectural realities and operational capabilities are fundamentally distinct.

### The Generative AI Paradigm: Single-Turn Synthesis

Standard Generative AI operates on a straightforward request-response model:
$$\\text{User Prompt} \\longrightarrow \\text{Language Model} \\longrightarrow \\text{Generated Output}$$

The model is passive. It takes input tokens, processes them through its transformer weights, and emits probability-based completion tokens. While immensely valuable for drafting emails, translating languages, or summarizing texts, standard Generative AI has key limitations:
- **No external agency**: It cannot independently check a database, verify whether an order shipped, or send an email.
- **Static context**: Its knowledge is frozen at its pre-training cutoff unless manually supplied with context.
- **Single-shot fragility**: If the model makes a reasoning misstep early in its generation, it cannot back up, evaluate its error, and adjust its plan.

### The Agentic AI Paradigm: The Cognitive Loop

Agentic AI transforms the foundation model from a passive responder into the reasoning engine of an active software loop.

An agentic architecture pairs the model with:
1. **Perception**: Environmental inputs, webhooks, or user instructions.
2. **Planning & Reflection**: The ability to break an objective into multi-step milestones (e.g. Plan-and-Solve or ReAct patterns).
3. **Tool Execution**: Interfaces that allow the model to query SQL databases, call REST APIs, read local files, and run code.
4. **Observation & Correction**: Evaluating the output returned by a tool. If an API returns an error or empty result, the agent reads the error, modifies its arguments, and tries again.

### Why This Distinction Matters for Organizations

Understanding this difference is critical when scoping initiatives:
- If your goal is **accelerating human output** (e.g., drafting an article, brainstorming marketing concepts), standard **Generative AI** with structured prompting is ideal and cost-effective.
- If your goal is **delegating autonomous processes** (e.g., investigating a customer support dispute, querying CRM databases, cross-referencing shipping logs, and drafting a verified resolution), you require **Agentic AI**.

Building agentic systems introduces new engineering responsibilities: managing token budgets, preventing infinite loop states, and maintaining strict human-in-the-loop checkpoints for sensitive actions.`,
    relatedArticleSlugs: ['how-to-choose-an-ai-workshop-for-your-team', 'how-to-define-outcomes-for-corporate-ai-training'],
    published: true
  },
  {
    id: 'art-3',
    slug: 'preparing-students-for-a-hands-on-ai-workshop',
    title: 'Preparing Students for a Hands-On AI Workshop: Advice for Faculty and Department Heads',
    publishedDate: '2026-04-05',
    authorName: 'Abhishek Sharma',
    authorRole: 'Founder & AI Engineer, Agentic AI Academy',
    readingTimeMinutes: 5,
    category: 'Higher Education',
    excerpt: 'How college departments can prepare students, configure laboratory environments, and align technical prerequisites so every participant builds functional projects during technical bootcamps.',
    contentMarkdown: `University engineering and computer science departments face increasing demand from students for industry-aligned AI and machine learning skills. However, short-duration technical workshops frequently encounter laboratory bottlenecks that waste valuable learning time.

Having conducted dozens of technical workshops across collegiate settings, we have established a straightforward preparation protocol that ensures sessions run smoothly and students extract maximum value.

### 1. The Environment Baseline: Eliminate Day-One Configuration Drag

Nothing drains workshop momentum faster than spending the first 90 minutes troubleshooting local Python version conflicts, broken pip installations, or permission errors on institutional lab computers.

**Recommended Setup Strategy**:
- **Standardized Cloud Workspaces**: For introductory to intermediate workshops, prioritize cloud-based environments such as Google Colab or pre-configured GitHub Codespaces. This ensures every student begins with identical dependencies.
- **Local Lab Readiness**: If sessions require local software (e.g. Docker, VS Code, Git, Python 3.11+), circulate an explicit pre-installation checklist two weeks prior and hold a 30-minute student readiness check with lab assistants.
- **Network & Firewall Whitelisting**: Ensure campus network administrators whitelist necessary API endpoints (Google AI Studio, OpenAI, Hugging Face CDN, GitHub) ahead of time.

### 2. Curate Meaningful Prerequisites

Clearly communicate prerequisite concepts to enrolled students. For applied machine learning and AI development:
- **Foundations**: Basic Python data structures (lists, dictionaries), loop mechanics, and reading error tracebacks.
- **API Understanding**: The concept of client-server requests, JSON payloads, and HTTP status codes.

Students do not need deep theoretical mathematics to build functional AI applications, but they do require confidence navigating code editors and debugging simple syntax mistakes.

### 3. Emphasize Project Deliverables Over Passive Listening

Collegiate education is already rich in theory; external workshops must provide the practical antidote. Ensure your workshop schedule allocates at least 60% of total hours to active hands-on building.

When students complete a workshop with a deployed, functioning application that they can showcase on their resume and GitHub profile, their academic enthusiasm and career trajectory improve dramatically.`,
    relatedArticleSlugs: ['how-to-choose-an-ai-workshop-for-your-team', 'generative-ai-vs-agentic-ai-practical-introduction'],
    published: true
  },
  {
    id: 'art-4',
    slug: 'how-to-define-outcomes-for-corporate-ai-training',
    title: 'How to Define Outcomes for Corporate AI Training: Moving Beyond Attendance Metrics',
    publishedDate: '2026-04-18',
    authorName: 'Abhishek Sharma',
    authorRole: 'Founder & AI Engineer, Agentic AI Academy',
    readingTimeMinutes: 7,
    category: 'Corporate Strategy',
    excerpt: 'Corporate L&D investments in AI training must deliver verifiable productivity improvements. Here is how to construct before-and-after assessment criteria, project rubrics, and longitudinal feedback loops.',
    contentMarkdown: `Too many corporate training initiatives measure success solely by attendance sheets and post-session smile surveys. In the fast-moving domain of artificial intelligence, these vanity metrics fail to show whether employees actually acquired capabilities that benefit the business.

To establish genuine return on learning investment, L&D leaders and department heads must define clear, verifiable outcome criteria before training commences.

### 1. Establish the "Before" Benchmark

Before participants enter the classroom, establish a baseline measure of workflow velocity and AI maturity:
- **Task Duration Audits**: How many hours does the team currently spend on recurring operational tasks (e.g., quarterly reporting, client proposals, support ticket resolution)?
- **Current Tooling Usage**: Are team members using unapproved consumer AI accounts with sensitive client data? What percentage of the team uses structured prompt techniques versus casual single-line queries?
- **Self-Efficacy Assessment**: A short 5-question pre-training survey assessing confidence in identifying valid AI use cases, spotting hallucinations, and enforcing data hygiene.

### 2. Design Practical Capstone Deliverables

Replace theoretical multiple-choice quizzes with functional capstone projects tailored to departmental responsibilities:

| Department | Sample Capstone Deliverable |
| :--- | :--- |
| **Operations** | An automated n8n workflow synchronizing inbound inquiries with CRM records and notification alerts. |
| **Sales & Marketing** | A structured prompt library for prospect research, proposal drafting, and competitive analysis. |
| **Technical Support** | A document knowledge retriever indexing product documentation with source citation verification. |
| **Engineering** | A containerized FastAPI service exposing an LLM agent with verified tool-calling routines. |

Every capstone should be evaluated against an explicit rubric: Does it work? Does it handle edge cases? Does it respect data governance? Does it save measurable time?

### 3. Track Longitudinal Adoption at 30 and 90 Days

The true test of training occurs weeks after the instructor leaves. Schedule structured follow-ups at 30 and 90 days:
- **Asset Utilization**: Is the departmental prompt repository or automated workflow still in active weekly use?
- **Process Speed**: Has turnaround time on target deliverables decreased?
- **Knowledge Cascading**: Have workshop participants shared best practices and standard operating procedures with team colleagues?

By establishing rigorous before-and-after frameworks, organizations transform training from a discretionary expense into a measurable engine of commercial capability.`,
    relatedArticleSlugs: ['how-to-choose-an-ai-workshop-for-your-team', 'generative-ai-vs-agentic-ai-practical-introduction'],
    published: true
  }
];
