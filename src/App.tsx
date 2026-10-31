/**
 * Agentic AI Academy – Main Application Entry
 * Built for mindwash.ai
 */

import { AcademyProvider, useAcademy } from './context/AcademyContext.tsx';
import { Navbar } from './components/common/Navbar.tsx';
import { Footer } from './components/common/Footer.tsx';
import { EnquiryModal } from './components/common/EnquiryModal.tsx';

// Public & Detail Pages
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ProgrammesPage } from './pages/ProgrammesPage.tsx';
import { ProgrammeDetailPage } from './pages/ProgrammeDetailPage.tsx';
import { CorporateTrainingPage } from './pages/CorporateTrainingPage.tsx';
import { CollegeTrainingPage } from './pages/CollegeTrainingPage.tsx';
import { WorkshopsPage } from './pages/WorkshopsPage.tsx';
import { WorkshopDetailPage } from './pages/WorkshopDetailPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { PrivacyPage } from './pages/PrivacyPage.tsx';
import { TermsPage } from './pages/TermsPage.tsx';
import { AdminLoginPage } from './pages/AdminLoginPage.tsx';
import { AdminDashboardPage } from './pages/AdminDashboardPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

function MainRouter() {
  const { currentPath } = useAcademy();

  // Strip query parameters for route matching
  const pathname = currentPath.split('?')[0];

  const renderCurrentView = () => {
    // 1. Root & Static Pages
    if (pathname === '/') return <HomePage />;
    if (pathname === '/about') return <AboutPage />;
    if (pathname === '/programmes') return <ProgrammesPage />;
    if (pathname === '/corporate-training') return <CorporateTrainingPage />;
    if (pathname === '/college-training') return <CollegeTrainingPage />;
    if (pathname === '/workshops') return <WorkshopsPage />;
    if (pathname === '/projects') return <ProjectsPage />;
    if (pathname === '/contact') return <ContactPage />;
    if (pathname === '/privacy') return <PrivacyPage />;
    if (pathname === '/terms') return <TermsPage />;
    if (pathname === '/admin/login') return <AdminLoginPage />;
    if (pathname === '/admin') return <AdminDashboardPage />;

    // 2. Dynamic Detail Pages
    if (pathname.startsWith('/programmes/')) {
      const slug = pathname.replace('/programmes/', '');
      return <ProgrammeDetailPage slug={slug} />;
    }

    if (pathname.startsWith('/workshops/')) {
      const slug = pathname.replace('/workshops/', '');
      return <WorkshopDetailPage slug={slug} />;
    }

    return <NotFoundPage />;
  };

  const isAdminDashboard = pathname === '/admin';

  return (
    <div className="min-h-screen flex flex-col bg-[#071C1A] text-[#F3FAF7] selection:bg-[#27D7AC]/30 selection:text-[#F3FAF7]">
      {!isAdminDashboard && <Navbar />}

      <main id="main-content" className="flex-1">
        {renderCurrentView()}
      </main>

      {!isAdminDashboard && <Footer />}

      {/* Global Interactive Modal */}
      <EnquiryModal />
    </div>
  );
}

export default function App() {
  return (
    <AcademyProvider>
      <MainRouter />
    </AcademyProvider>
  );
}
