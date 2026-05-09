'use client';

import { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { TitlePage } from '@/components/pages/TitlePage';
import { FrontPage } from '@/components/pages/FrontPage';
import { TableOfContents } from '@/components/pages/TableOfContents';
import { Acknowledgement } from '@/components/pages/Acknowledgement';
import { StudentPrayer } from '@/components/pages/StudentPrayer';
import { PersonalPhilosophy } from '@/components/pages/PersonalPhilosophy';
import { CareerPlan } from '@/components/pages/CareerPlan';
import { Introduction } from '@/components/pages/Introduction';
import { CompanyProfile } from '@/components/pages/CompanyProfile';
import { WorkExperience } from '@/components/pages/WorkExperience';
import { Assessment } from '@/components/pages/Assessment';
import { Appendices } from '@/components/pages/Appendices';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('title-page');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (currentPage === 'assessment') {
      setTimeout(() => {
        const element = document.getElementById('assessment-top');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'title-page':
        return <TitlePage setCurrentPage={setCurrentPage} />;
      case 'front-page':
        return <FrontPage />;
      case 'table-of-contents':
        return <TableOfContents />;
      case 'acknowledgement':
        return <Acknowledgement />;
      case 'prayer':
        return <StudentPrayer />;
      case 'philosophy':
        return <PersonalPhilosophy />;
      case 'career-plan':
        return <CareerPlan />;
      case 'introduction':
      case 'intro-importance':
      case 'intro-objectives':
      case 'intro-time-place':
        return <Introduction section={currentPage} />;
      case 'company-profile':
      case 'company-overview':
      case 'company-nature':
      case 'company-mission':
      case 'company-history':
      case 'company-structure':
        return <CompanyProfile section={currentPage} />;
      case 'work-experience':
      case 'work-weekly':
      case 'work-timerecord':
      case 'work-progress':
      case 'work-analysis':
        return <WorkExperience section={currentPage} />;
      case 'assessment':
        return <Assessment />;
      case 'appendices':
        return <Appendices />;
      default:
        return <TitlePage setCurrentPage={setCurrentPage} />;
    }
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const getPageTitle = () => {
    const pageTitles = {
      'title-page': 'Title Page',
      'front-page': 'Front Page',
      'table-of-contents': 'Table of Contents',
      'acknowledgement': 'Acknowledgement',
      'prayer': 'Student Prayer',
      'philosophy': 'Personal Philosophy',
      'career-plan': 'Career Plan',
      'introduction': 'Introduction',
      'intro-importance': 'Importance of Internship',
      'intro-objectives': 'Objectives',
      'intro-time-place': 'Time & Place',
      'company-overview': 'Company Overview',
      'company-nature': 'Nature of Business',
      'company-mission': 'Mission & Vision',
      'company-history': 'Company History',
      'company-structure': 'Organizational Structure',
      'company-profile': 'Company Profile',
      'work-weekly': 'Weekly Reports',
      'work-timerecord': 'Time Record',
      'work-progress': 'Progress Report',
      'work-analysis': 'Analysis',
      'work-experience': 'Work Experience',
      'assessment': 'Assessment',
      'appendices': 'Appendices',
    };
    return pageTitles[currentPage] || 'E-Portfolio';
  };

  return (
    <div className='flex h-screen bg-background'>
      {/* Desktop Sidebar - hidden on mobile */}
      <div className='hidden md:block'>
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isMobile={false}
          onClose={handleCloseSidebar}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className='fixed inset-0 bg-primary/50 z-40 md:hidden'
          onClick={handleCloseSidebar}
        />
      )}

      <div 
        className={`fixed left-0 top-0 h-screen z-50 md:hidden transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isMobile={true}
          onClose={handleCloseSidebar}
        />
      </div>

      <main className='flex-1 flex flex-col h-screen bg-background md:overflow-auto'>
        {/* Header for mobile */}
        <div className='md:hidden flex items-center justify-between p-4 border-b border-border bg-secondary/50 backdrop-blur'>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className='p-2 hover:bg-muted rounded-lg transition-colors'
          >
            <Menu className='w-6 h-6 text-foreground' />
          </button>
          <h1 className='text-lg font-semibold text-foreground'>{getPageTitle()}</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className='p-2 hover:bg-muted rounded-lg transition-colors'
          >
            {isDarkMode ? (
              <Sun className='w-6 h-6 text-foreground' />
            ) : (
              <Moon className='w-6 h-6 text-foreground' />
            )}
          </button>
        </div>

        {/* Desktop Header */}
        <div className='hidden md:flex items-center justify-between p-4 border-b border-border bg-secondary/50 backdrop-blur'>
          <h1 className='text-xl font-semibold text-foreground'>E-Portfolio</h1>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className='p-2 hover:bg-muted rounded-lg transition-colors'
            >
              {isDarkMode ? (
                <Sun className='w-6 h-6 text-foreground' />
              ) : (
                <Moon className='w-6 h-6 text-foreground' />
              )}
            </button>
            <div className='flex items-center gap-3 pl-4 border-l border-border'>
              <div className='text-right'>
                <p className='text-sm font-semibold text-foreground'>Rachelle Mae B. Tan</p>
                <p className='text-xs text-muted-foreground'>BSIT - 4th Year</p>
              </div>
              <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm'>
                JA
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-auto'>
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
