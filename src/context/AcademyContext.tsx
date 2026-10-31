import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Programme, 
  WorkshopFormat, 
  LearningPath, 
  LearningProject, 
  ResourceArticle, 
  SiteSettings, 
  EnquiryType 
} from '../types/index.ts';
import { 
  initialProgrammes, 
  initialWorkshopFormats, 
  initialLearningPaths, 
  initialLearningProjects, 
  initialResourceArticles, 
  initialSiteSettings 
} from '../data/initialData.ts';

interface ModalOptions {
  type?: EnquiryType;
  programmeSlug?: string;
  programmeTitle?: string;
  workshopSlug?: string;
  workshopTitle?: string;
}

interface AcademyContextType {
  settings: SiteSettings;
  programmes: Programme[];
  workshops: WorkshopFormat[];
  learningPaths: LearningPath[];
  learningProjects: LearningProject[];
  articles: ResourceArticle[];
  isLoading: boolean;
  refreshData: () => Promise<void>;
  
  // Enquiry Modal state
  isModalOpen: boolean;
  modalOptions: ModalOptions;
  openEnquiryModal: (options?: ModalOptions) => void;
  closeEnquiryModal: () => void;

  // Active Route
  currentPath: string;
  navigate: (path: string) => void;
}

const AcademyContext = createContext<AcademyContextType | undefined>(undefined);

export function AcademyProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(initialSiteSettings);
  const [programmes, setProgrammes] = useState<Programme[]>(initialProgrammes);
  const [workshops, setWorkshops] = useState<WorkshopFormat[]>(initialWorkshopFormats);
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>(initialLearningPaths);
  const [learningProjects, setLearningProjects] = useState<LearningProject[]>(initialLearningProjects);
  const [articles, setArticles] = useState<ResourceArticle[]>(initialResourceArticles);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<ModalOptions>({});

  // Routing state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname + window.location.search;
    }
    return '/';
  });

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      if (path !== currentPath) {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname + window.location.search);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const refreshData = async () => {
    try {
      const res = await fetch('/api/public/data');
      if (res.ok) {
        const data = await res.json();
        if (data.settings) setSettings(data.settings);
        if (data.programmes && data.programmes.length > 0) setProgrammes(data.programmes);
        if (data.workshops && data.workshops.length > 0) setWorkshops(data.workshops);
        if (data.learningPaths && data.learningPaths.length > 0) setLearningPaths(data.learningPaths);
        if (data.learningProjects && data.learningProjects.length > 0) setLearningProjects(data.learningProjects);
        if (data.articles && data.articles.length > 0) setArticles(data.articles);
      }
    } catch (err) {
      console.warn('API fetch failed, utilizing pre-seeded local data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const openEnquiryModal = (options: ModalOptions = {}) => {
    setModalOptions(options);
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
    setModalOptions({});
  };

  return (
    <AcademyContext.Provider
      value={{
        settings,
        programmes,
        workshops,
        learningPaths,
        learningProjects,
        articles,
        isLoading,
        refreshData,
        isModalOpen,
        modalOptions,
        openEnquiryModal,
        closeEnquiryModal,
        currentPath,
        navigate,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
}

export function useAcademy() {
  const context = useContext(AcademyContext);
  if (!context) {
    throw new Error('useAcademy must be used within an AcademyProvider');
  }
  return context;
}
