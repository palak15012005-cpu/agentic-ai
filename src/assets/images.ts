/**
 * Centralized Image Asset References
 * Generated specifically for MindWash AI Academy / Agentic AI Academy
 */

export const ACADEMY_IMAGES = {
  logo: '/assets/aistudio/Futuristic_Agentic_AI_Emblem_20fd47ad.png',
  agenticAiLogo: '/assets/aistudio/Futuristic_Agentic_AI_Emblem_20fd47ad.png',
  hero: '/src/assets/images/hero_academic_learning_1792941498891.jpg',
  emeraldLabHero: '/src/assets/images/emerald_glass_lab_hero_1792945264852.jpg',
  corporate: '/src/assets/images/corporate_workshop_session_1792941499710.jpg',
  college: '/src/assets/images/college_technical_lab_1792941501091.jpg',
  projectArchitecture: '/src/assets/images/sample_project_architecture_1792941501419.jpg',
  
  // Leadership & High-Tech Assets
  founder: '/assets/aistudio/Confident_Professional_at_Work_f3878c3b.png',
  leadInstructor: '/assets/aistudio/Confident_Professional_at_Work_f3878c3b.png',
  agenticWorkflow: '/src/assets/images/agentic_workflow_illustration_1792943014195.jpg',
  corporateBriefing: '/src/assets/images/corporate_leadership_briefing_1792943015224.jpg',
  handsOnLab: '/src/assets/images/hands_on_coding_workshop_1792943015050.jpg',

  // Master All Programmes Section Banner: AI Innovation Hub Team Collaborative Session
  allProgrammesHub: '/assets/aistudio/Gemini_Generated_Image_syhetisyhetisyhe_8dcf47b0.png',

  // Structured Learning Pathways Photos
  pathwayCorporate: '/src/assets/images/pathway_corporate_teams_1792943412481.jpg',
  pathwayColleges: '/src/assets/images/pathway_college_universities_1792943413868.jpg',
  pathwayProfessionals: '/src/assets/images/pathway_students_professionals_1792943414379.jpg',

  // Newly Generated High-Fidelity Laboratory & Pathway Assets
  aiDataEngineeringLab: '/assets/images/ai_data_engineering_lab_1793001240338.jpg',
  agentWorkflowLab: '/assets/images/agent_workflow_lab_1793001256101.jpg',
  careerPathwaysMilestones: '/assets/images/career_pathways_milestones_1793001270885.jpg',
  systematicPromptArchitecture: '/src/assets/images/prompt_engineering_photo_1793179104426.jpg',
  reasoningFrameworks: '/src/assets/images/agentic_ai_photo_1793179104545.jpg',

  // Tailored Corporate Training Track Images
  corpAiLiteracy: '/assets/images/corp_ai_literacy_1793003155595.jpg',
  corpGenAiTeams: '/assets/aistudio/Gemini_Generated_Image_qxwuu2qxwuu2qxwu__1__6bc71c59.png',
  corpAiHrSales: '/assets/images/corp_ai_hr_sales_1793003186590.jpg',
  genAiWorkflow: '/assets/aistudio/Gemini_Generated_Image_qxwuu2qxwuu2qxwu__1__6bc71c59.png',

  // Collegiate Workshops & Bootcamps Images
  introGenAiWorkshop: '/assets/images/intro_genai_workshop_1793005051165.jpg',
  collegeBootcampLab: '/assets/images/college_bootcamp_lab_1793005067087.jpg',

  // Dedicated Separate Photos for Applied Curricula Programmes (Regenerated High-Fidelity Lab Assets)
  programmes: {
    genAiWorkplace: '/src/assets/images/genai_workplace_photo_1793179072185.jpg',
    promptEngineering: '/src/assets/images/prompt_engineering_photo_1793179104426.jpg',
    agenticAi: '/src/assets/images/agentic_ai_photo_1793179104545.jpg',
    n8nAutomation: '/src/assets/images/n8n_automation_photo_1793179105461.jpg',
    ragAssistants: '/src/assets/images/rag_assistants_photo_1793179106580.jpg',
    pythonFoundations: '/src/assets/images/python_programming_photo_1793179106611.jpg',
    dataAnalyticsSql: '/src/assets/images/data_analytics_photo_1793179106659.jpg',
    powerBiDashboards: '/src/assets/images/powerbi_dashboards_photo_1793179107568.jpg',
    machineLearning: '/src/assets/images/machine_learning_photo_1793179109184.jpg',
    deepLearningNlp: '/src/assets/images/deep_learning_photo_1793179108885.jpg',
    mernStack: '/src/assets/images/mern_stack_photo_1793179109844.jpg',
    aiAppDeployment: '/src/assets/images/ai_app_photo_1793179109532.jpg',
  },

  // 5-Step Practical Lifecycle Infographic Chart
  lifecycleChart: '/src/assets/images/lifecycle_practical_framework_1792943414099.jpg',

  // Structured Progression from Theory to Production Impact (5 Stages)
  progression: {
    stage1Theory: '/src/assets/images/progression_stage1_theory_1792945087016.jpg',
    stage2Practice: '/src/assets/images/progression_stage2_practice_1792945087960.jpg',
    stage3Build: '/src/assets/images/progression_stage3_build_1792945087730.jpg',
    stage4Review: '/src/assets/images/progression_stage4_review_1792945088732.jpg',
    stage5Impact: '/src/assets/images/progression_stage5_impact_1792945088026.jpg',
  },
};

export function getProgrammePhoto(slugOrId: string, currentUrl?: string): string {
  if (currentUrl && !currentUrl.includes('unsplash') && !currentUrl.endsWith('.svg') && !currentUrl.includes('1793105531408') && !currentUrl.includes('1793105532289') && !currentUrl.includes('1793105533094') && !currentUrl.includes('1793105534117') && !currentUrl.includes('1793105535756')) {
    return currentUrl;
  }
  const mapping: Record<string, string> = {
    'generative-ai-for-workplace-productivity': ACADEMY_IMAGES.programmes.genAiWorkplace,
    'prog-genai-workplace': ACADEMY_IMAGES.programmes.genAiWorkplace,
    'prompt-engineering-for-professionals': ACADEMY_IMAGES.programmes.promptEngineering,
    'prog-prompt-eng': ACADEMY_IMAGES.programmes.promptEngineering,
    'agentic-ai-and-workflow-automation': ACADEMY_IMAGES.programmes.agenticAi,
    'prog-agentic-ai': ACADEMY_IMAGES.programmes.agenticAi,
    'n8n-automation-for-business-workflows': ACADEMY_IMAGES.programmes.n8nAutomation,
    'prog-n8n': ACADEMY_IMAGES.programmes.n8nAutomation,
    'rag-and-ai-knowledge-assistants': ACADEMY_IMAGES.programmes.ragAssistants,
    'prog-rag': ACADEMY_IMAGES.programmes.ragAssistants,
    'python-programming-foundations-to-applications': ACADEMY_IMAGES.programmes.pythonFoundations,
    'prog-python-foundations': ACADEMY_IMAGES.programmes.pythonFoundations,
    'data-analytics-with-python-and-sql': ACADEMY_IMAGES.programmes.dataAnalyticsSql,
    'prog-data-analytics': ACADEMY_IMAGES.programmes.dataAnalyticsSql,
    'power-bi-and-business-dashboards': ACADEMY_IMAGES.programmes.powerBiDashboards,
    'prog-power-bi': ACADEMY_IMAGES.programmes.powerBiDashboards,
    'machine-learning-with-practical-projects': ACADEMY_IMAGES.programmes.machineLearning,
    'prog-ml': ACADEMY_IMAGES.programmes.machineLearning,
    'deep-learning-and-applied-nlp': ACADEMY_IMAGES.programmes.deepLearningNlp,
    'prog-deep-learning': ACADEMY_IMAGES.programmes.deepLearningNlp,
    'mern-full-stack-development': ACADEMY_IMAGES.programmes.mernStack,
    'prog-mern': ACADEMY_IMAGES.programmes.mernStack,
    'ai-application-development-and-deployment': ACADEMY_IMAGES.programmes.aiAppDeployment,
    'prog-ai-app-dev': ACADEMY_IMAGES.programmes.aiAppDeployment,
  };
  return mapping[slugOrId] || ACADEMY_IMAGES.agentWorkflowLab || ACADEMY_IMAGES.emeraldLabHero;
}
