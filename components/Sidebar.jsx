import { useState } from 'react';
import {
  ChevronDown,
  Home,
  BookOpen,
  Building2,
  Briefcase,
  BarChart3,
  FileText,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Sidebar({ currentPage, setCurrentPage, isMobile = false, onClose }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: false,
    company: false,
    workExp: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const topItems = [
    { id: 'title-page', label: 'Title Page', icon: Home },
  ];

  const sections = [
    {
      id: 'introduction',
      label: 'I. Introduction',
      icon: BookOpen,
      subsections: [
        { id: 'intro-importance', label: 'A. Importance of Internship' },
        { id: 'intro-objectives', label: 'B. Objectives of Internship' },
        { id: 'intro-time-place', label: 'C. Time and Place' },
      ],
    },
    {
      id: 'company',
      label: 'II. Company Profile',
      icon: Building2,
      subsections: [
        { id: 'company-overview', label: 'Company Overview' },
        { id: 'company-nature', label: '1. Nature of Agency' },
        { id: 'company-mission', label: '2. Mission / Vision / Goal' },
        { id: 'company-history', label: '3. History / Background' },
        { id: 'company-structure', label: '4. Organizational Structure' },
      ],
    },
    {
      id: 'workExp',
      label: 'III. Work Experiences',
      icon: Briefcase,
      subsections: [
        { id: 'work-weekly', label: '1. Weekly Reports' },
        { id: 'work-timerecord', label: '2. Daily Time Record' },
        { id: 'work-progress', label: '3. Progress Report' },
        { id: 'work-analysis', label: '4. Analysis Report' },
      ],
    },
    {
      id: 'assessment',
      label: 'IV. Assessment',
      icon: BarChart3,
      subsections: [],
    },
    {
      id: 'appendices',
      label: 'V. Appendices',
      icon: FileText,
      subsections: [],
    },
  ];

  return (
    <aside className={`${isMobile ? 'w-64' : 'w-80'} h-screen bg-gradient-to-b from-sidebar via-sidebar to-[#3d2563] border-r border-sidebar-border flex flex-col shadow-xl`}>
      {/* Header */}
      <div className='p-4 sm:p-6 border-b border-sidebar-border flex items-center justify-between flex-shrink-0 bg-gradient-to-r from-sidebar to-[#5a3081]'>
        <div className='flex items-center gap-3'>
          <div className='w-11 h-11 rounded-xl bg-gradient-to-br from-sidebar-primary to-sidebar-accent flex items-center justify-center shadow-lg'>
            <FileText className='w-6 h-6 text-white' />
          </div>
          <div>
            <h1 className='text-lg font-bold text-sidebar-foreground'>E-Portfolio</h1>
            <p className='text-xs text-sidebar-accent/80'>OJT Journey</p>
          </div>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            className='p-2 hover:bg-sidebar-accent/20 rounded-lg transition-colors'
          >
            <X className='w-5 h-5 text-sidebar-foreground' />
          </button>
        )}
      </div>

      {/* Student Profile */}
      <div className='p-4 mx-4 my-4 rounded-xl bg-gradient-to-br from-sidebar-accent/30 to-sidebar-primary/20 border border-sidebar-accent/40 flex-shrink-0 backdrop-blur-sm'>
        <div className='flex flex-col items-center text-center gap-3 sm:gap-3'>
          <img 
            src="/PROF.jpg" 
            alt="Rachelle Mae B. Tan"
            className='w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-3 border-sidebar-primary shadow-lg'
          />
          <div>
            <p className='text-xs sm:text-sm font-semibold text-sidebar-foreground'>Rachelle Mae B. Tan</p>
            <p className='text-xs text-sidebar-accent/90'>OJT Student</p>
          </div>
        </div>
      </div>

      {/* Navigation - Scrollable */}
      <div className='flex-1 px-3 space-y-1 overflow-y-auto min-h-0'>
        <p className='text-xs font-semibold text-sidebar-accent/80 px-2 py-2 uppercase tracking-wider'>
          E-PORTFOLIO CONTENTS
        </p>

        {/* Top Level Items */}
        {topItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-sidebar-primary to-sidebar-accent text-white shadow-lg'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/20 hover:text-sidebar-foreground'
              }`}
            >
              <Icon className='w-4 h-4 flex-shrink-0 stroke-2 fill-none' strokeWidth={2} />
              <span className='text-sm font-medium'>{item.label}</span>
            </button>
          );
        })}

        <p className='text-xs font-semibold text-sidebar-accent/80 px-2 py-3 uppercase tracking-wider mt-4'>
          MAIN SECTIONS
        </p>

        {/* Sectioned Items */}
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => {
                setCurrentPage(section.id);
                if (section.subsections.length > 0) {
                  toggleSection(section.id);
                }
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
                currentPage === section.id
                  ? 'bg-gradient-to-r from-sidebar-primary to-sidebar-accent text-white shadow-lg'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/20 hover:text-sidebar-foreground'
              }`}
            >
              <div className='flex items-center gap-3'>
                <section.icon className='w-4 h-4 flex-shrink-0 stroke-2 fill-none' strokeWidth={2} />
                <span className='text-sm font-medium'>{section.label}</span>
              </div>
              {section.subsections.length > 0 && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform flex-shrink-0 ${
                    expandedSections[section.id] ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>

            {/* Subsections */}
            {section.subsections.length > 0 && expandedSections[section.id] && (
              <div className='ml-6 mt-1 space-y-1 border-l border-sidebar-accent/30 pl-2'>
                {section.subsections.map((subsection) => (
                  <button
                    key={subsection.id}
                    onClick={() => setCurrentPage(subsection.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                      currentPage === subsection.id
                        ? 'bg-sidebar-primary/30 text-sidebar-foreground font-medium'
                        : 'text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/20'
                    }`}
                  >
                    {subsection.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className='p-4 border-t border-sidebar-border flex-shrink-0 bg-gradient-to-r from-sidebar/50 to-[#3d2563]/50'>
        <p className='text-xs text-sidebar-foreground/80 text-center font-medium'>
          E-Portfolio | Rachelle Mae B. Tan
        </p>
      </div>
    </aside>
  );
}
