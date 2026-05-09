'use client';

import { useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

export function Appendices() {
  const [selectedAppendix, setSelectedAppendix] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(100);
  
  const appendices = [
    { id: 'A', title: 'Evaluation Form', uploadDate: 'April 2026', icon: '📄', imagePaths: ['/eval-grades-1.jpg', '/eval-grades-2.jpg'] },
    { id: 'B', title: 'Photocopy Registration Form', uploadDate: 'April 2026', icon: '📋', imagePaths: ['/cor.jpg'] },
    { id: 'C', title: 'Photocopy Validated ID', uploadDate: 'April 2026', icon: '🆔', imagePaths: ['/validated-id-1.jpg'] },
    { id: 'D', title: "Parent's Consent", uploadDate: 'April 2026', icon: '📝', imagePaths: ['/parent-consent.jpg'] },
    { id: 'E', title: 'Medical Certificate', uploadDate: 'April 2026', icon: '⚕️', imagePaths: ['/medical-certificate.jpg'] },
    { id: 'F', title: 'Certificate of Good Moral Character', uploadDate: 'April 2026', icon: '✅', imagePaths: ['/good-moral.jpg'] },
    { id: 'G', title: 'Application Letter', uploadDate: 'April 2026', icon: '💌', imagePaths: ['/application-letter.jpg'] },
    { id: 'H', title: 'Endorsement Letter', uploadDate: 'April 2026', icon: '📮', imagePaths: ['/endorsement-letter.jpg'] },
    { id: 'I', title: 'Memorandum of Agreement', uploadDate: 'April 2026', icon: '📑', imagePaths: ['/moa.jpg'] },
    { id: 'J', title: 'Daily Time Record (Time Card)', uploadDate: 'April 2026', icon: '⏰', imagePaths: ['/dtr-1.jpg', '/dtr-2.jpg'] },
    { id: 'K', title: 'Certificate of Completion', uploadDate: 'April 2026', icon: '🎓', imagePaths: ['/cert-completion.jpg'] },
    { id: 'L', title: 'Certificate of Clearance', uploadDate: 'April 2026', icon: '✔️', imagePaths: ['/cert-clearance.jpg'] },
    { id: 'M', title: 'Performance/Proficiency Rating Sheet', uploadDate: 'April 2026', icon: '📊', imagePaths: ['/rating-sheet.jpg'] },
  ];

  const handleOpenAppendix = (appendix) => {
    setSelectedAppendix(appendix);
    setCurrentImageIndex(0);
    setZoom(100);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedAppendix.imagePaths.length - 1 : prev - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedAppendix.imagePaths.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-muted-foreground mb-8'>
          <span className='text-primary'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>V. Appendices</span>
        </div>

        <h1 className='text-4xl sm:text-5xl font-bold text-foreground mb-3'>Appendices</h1>
        <p className='text-muted-foreground mb-10 text-lg'>Supporting documents, attachments, and visual evidence of internship completion.</p>

        <div className='space-y-16'>
          {/* Section 1: Appendices Grid */}
          <section id='section-appendices-grid'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {appendices.map((appendix) => (
                <div
                  key={appendix.id}
                  className='bg-gradient-to-br from-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 hover:border-primary/60 hover:shadow-xl transition-all duration-300 group shadow-lg hover:-translate-y-2'
                >
                  <div className='text-muted-foreground text-xs font-semibold mb-3 tracking-wide'>
                    Appendix {appendix.id}
                  </div>
                  <div className='mb-4'>
                    <div className='text-4xl mb-3 group-hover:scale-110 transition-transform'>{appendix.icon}</div>
                  </div>
                  <h3 className='text-foreground font-semibold mb-2 text-sm'>{appendix.title}</h3>
                  <p className='text-muted-foreground text-xs mb-4'>Uploaded · {appendix.uploadDate}</p>
                  <button 
                    onClick={() => handleOpenAppendix(appendix)}
                    className='text-primary text-xs font-semibold hover:text-muted-foreground transition-colors'
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Pre-Service Seminar Pictures */}
          <section id='section-preservice-pictures'>
            <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-2xl p-6 sm:p-10 mb-6'>
              <h2 className='text-primary text-sm font-semibold tracking-wider mb-3'>APPENDIX N</h2>
              <h3 className='text-2xl sm:text-3xl font-bold text-foreground mb-3'>Pre-Service Seminar Pictures</h3>
              <p className='text-muted-foreground'>
                This section presents documentation photos taken during the Pre-Service Seminar. The seminar provided essential orientation, guidelines, and expectations for interns before deployment to their respective training offices.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group'>
                <div className='relative aspect-square bg-background overflow-hidden'>
                  <img
                    src='/pre-seminar-1.jpg'
                    alt='Pre-Service Seminar - Certificate of Attendance'
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                    <p className='text-foreground text-sm font-semibold'>Seminar Activities & Materials</p>
                  </div>
                </div>
              </div>

              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group'>
                <div className='relative aspect-square bg-background overflow-hidden'>
                  <img
                    src='/pre-seminar-2.jpg'
                    alt='Pre-Service Seminar - Student Portrait'
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                    <p className='text-foreground text-sm font-semibold'>Intern Participant</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Office Works Pictures */}
          <section id='section-office-works-pictures'>
            <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-2xl p-6 sm:p-10 mb-6'>
              <h2 className='text-primary text-sm font-semibold tracking-wider mb-3'>APPENDIX O</h2>
              <h3 className='text-2xl sm:text-3xl font-bold text-foreground mb-3'>Office Works Pictures</h3>
              <p className='text-muted-foreground'>
                This section showcases photos documenting the intern's work and daily activities at the training office. These images provide visual evidence of the intern's engagement, responsibilities, and contributions during the on-the-job training period.
              </p>
            </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group'>
                <div className='relative aspect-square bg-background overflow-hidden'>
                  <img
                    src='/ow1.jpg'
                    alt='Office Works - Activity 1'
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                    <p className='text-foreground text-sm font-semibold'>Office Activity 1</p>
                  </div>
                </div>
              </div>

              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group'>
                <div className='relative aspect-square bg-background overflow-hidden'>
                  <img
                    src='/ow2.jpg'
                    alt='Office Works - Activity 2'
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                    <p className='text-foreground text-sm font-semibold'>Office Activity 2</p>
                  </div>
                </div>
              </div>

              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group'>
                <div className='relative aspect-square bg-background overflow-hidden'>
                  <img
                    src='/ow3.jpg'
                    alt='Office Works - Activity 3'
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                    <p className='text-foreground text-sm font-semibold'>Office Activity 3</p>
                  </div>
                </div>
              </div>

              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group'>
                <div className='relative aspect-square bg-background overflow-hidden'>
                  <img
                    src='/ow4.jpg'
                    alt='Office Works - Activity 4'
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                    <p className='text-foreground text-sm font-semibold'>Office Activity 4</p>
                  </div>
                </div>
              </div>

              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group'>
                <div className='relative aspect-square bg-background overflow-hidden'>
                  <img
                    src='/ow5.jpg'
                    alt='Office Works - Activity 5'
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                    <p className='text-foreground text-sm font-semibold'>Office Activity 5</p>
                  </div>
                </div>
              </div>

              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group'>
                <div className='relative aspect-square bg-background overflow-hidden'>
                  <img
                    src='/ow6.jpg'
                    alt='Office Works - Activity 6'
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                    <p className='text-foreground text-sm font-semibold'>Office Activity 6</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Code of Ethics */}
          <section id='section-code-of-ethics'>
            <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-2xl p-6 sm:p-10 mb-6'>
              <div className='flex justify-between items-start gap-4 mb-6'>
                <div>
                  <h2 className='text-primary text-sm font-semibold tracking-wider mb-3'>APPENDIX P</h2>
                  <h3 className='text-2xl sm:text-3xl font-bold text-foreground mb-2'>Code of Ethics for CAST Student Internship</h3>
                  <p className='text-muted-foreground'>College of Arts, Sciences, and Technology</p>
                </div>
                <span className='text-xs text-muted-foreground bg-muted/30 px-3 py-1 rounded-full whitespace-nowrap'>
                  Official Document
                </span>
              </div>

              <p className='text-muted-foreground mb-6 leading-relaxed'>
                This section presents the official Code of Ethics that governed student conduct during the internship.
              </p>

              <div className='bg-muted/30 border-l-4 border-primary rounded-lg p-6 mb-6'>
                <h4 className='text-primary font-semibold mb-3'>Preamble</h4>
                <p className='text-muted-foreground leading-relaxed'>
                  I will use my public knowledge for the benefit of the public. I will serve employees and clients with integrity, subject to an overriding responsibility to the public interest, and I will strive to enhance the competence and prestige of the profession.
                </p>
              </div>

              <div>
                <h4 className='text-foreground font-semibold mb-4'>Principles and Responsibilities</h4>
                <ul className='space-y-3'>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Promote public knowledge, understanding, and appreciation of information technology.</span>
                  </li>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Consider the general welfare and public good in all professional work.</span>
                  </li>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Advertise services in a clear, honest, and truthful manner.</span>
                  </li>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Comply with intellectual property laws, patent laws, and related regulations.</span>
                  </li>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Accept full responsibility and perform duties with competence and professionalism.</span>
                  </li>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Provide truthful statements about skills, services, and capabilities.</span>
                  </li>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Respect confidentiality unless disclosure is required by law.</span>
                  </li>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Strive for the highest quality in products and services.</span>
                  </li>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Avoid involvement in unlawful or unethical system development.</span>
                  </li>
                  <li className='flex gap-3 text-muted-foreground'>
                    <span className='text-primary font-bold'>•</span>
                    <span>Continuously improve professional knowledge and uphold IT standards.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: OJT Portfolio Evaluation Form */}
          <section id='section-ojt-evaluation'>
            <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-2xl p-6 sm:p-10 mb-6'>
              <h2 className='text-primary text-sm font-semibold tracking-wider mb-3'>APPENDIX R</h2>
              <h3 className='text-2xl sm:text-3xl font-bold text-foreground mb-3'>OJT Portfolio Evaluation Form</h3>
              <p className='text-muted-foreground mb-6'>
                This section contains the official evaluation form used to assess the intern's overall performance during the On-the-Job Training. It includes ratings, comments, and final assessment from the supervisor and evaluators.
              </p>

              <div className='flex justify-center'>
                <div className='rounded-lg overflow-hidden border border-border/50 bg-background max-w-xl w-full aspect-[8.5/11]'>
                  <img
                    src='/evaluation-form-page1.jpg'
                    alt='OJT Evaluation Form'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className='text-center pt-4 pb-8 border-t border-border/50'>
            <p className='text-xs text-muted-foreground'>
              © 2026 OJT E-Portfolio &nbsp;·&nbsp;{' '}
              <span className='text-primary'>Student Internship Documentation</span>
            </p>
          </div>
        </div>
      </div>

      {/* Modal Preview */}
      {selectedAppendix && (
        <div 
          className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
          onClick={() => setSelectedAppendix(null)}
        >
          <div 
            className='bg-background border border-border rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className='flex items-center justify-between p-4 border-b border-border sticky top-0 bg-background z-10'>
              <div>
                <h2 className='text-foreground font-semibold'>{selectedAppendix.title} preview</h2>
                <p className='text-muted-foreground text-xs mt-1'>Zoom in for details, scroll out to fit more on screen, and scroll to pan when enlarged.</p>
              </div>
              <button
                onClick={() => setSelectedAppendix(null)}
                className='text-muted-foreground hover:text-foreground transition-colors p-2'
              >
                <X size={20} />
              </button>
            </div>

            {/* Controls */}
            <div className='flex items-center justify-center gap-3 p-3 border-b border-border bg-secondary/50'>
              <button
                onClick={() => setZoom(Math.max(50, zoom - 10))}
                className='text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-muted'
              >
                <ZoomOut size={18} />
              </button>
              <span className='text-foreground text-sm font-semibold min-w-[60px] text-center'>{zoom}%</span>
              <button
                onClick={() => setZoom(Math.min(200, zoom + 10))}
                className='text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-muted'
              >
                <ZoomIn size={18} />
              </button>
              <div className='w-px h-6 bg-muted mx-2'></div>
              <button
                onClick={() => setZoom(100)}
                className='text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded text-xs font-semibold hover:bg-muted'
              >
                Fit
              </button>
            </div>

            {/* Image Navigation */}
            {selectedAppendix.imagePaths.length > 1 && (
              <div className='flex items-center justify-center gap-4 p-3 border-b border-border bg-secondary/50'>
                <button
                  onClick={goToPreviousImage}
                  className='text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-muted'
                >
                  <ChevronLeft size={20} />
                </button>
                <span className='text-foreground text-sm font-semibold'>
                  {currentImageIndex + 1} / {selectedAppendix.imagePaths.length}
                </span>
                <button
                  onClick={goToNextImage}
                  className='text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-muted'
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Image Viewer */}
            <div className='flex-1 overflow-auto bg-primary flex items-center justify-center'>
              <div 
                className='transition-transform duration-200 ease-out overflow-auto'
                style={{ transform: `scale(${zoom / 100})` }}
              >
                <img
                  src={selectedAppendix.imagePaths[currentImageIndex]}
                  alt={selectedAppendix.title}
                  className='max-w-full h-auto'
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
