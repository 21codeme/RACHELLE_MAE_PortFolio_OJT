export function TitlePage() {
  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-muted-foreground mb-8'>
          <span className='text-primary'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Title Page</span>
        </div>

        {/* TITLE PAGE SECTION */}
        <div className='mb-16'>
          {/* Hero Section */}
          <div className='relative mb-12 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-sidebar via-sidebar/80 to-sidebar-accent/40'>
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl'></div>
              <div className='absolute bottom-0 left-0 w-96 h-96 bg-sidebar-accent rounded-full mix-blend-multiply filter blur-3xl'></div>
            </div>
            <div className='relative p-8 sm:p-12 md:p-20 text-center'>
              <div className='mb-6'>
                <p className='text-white font-semibold uppercase tracking-widest text-xs sm:text-sm bg-primary/20 backdrop-blur-lg px-4 py-2.5 rounded-full inline-block shadow-lg border border-primary/30'>
                  College of Arts, Science, and Technology
                </p>
              </div>
              <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg text-balance'>
                ON-THE-JOB-TRAINING
              </h1>
              <p className='text-lg sm:text-xl md:text-2xl text-gray-200 drop-shadow-md max-w-2xl mx-auto'>
                A complete documentation of the student&apos;s internship experience.
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6'>
            <div className='group'>
              <div className='h-full bg-gradient-to-br from-secondary to-secondary/60 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 sm:p-5 md:p-7 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1'>
                <p className='text-xs font-semibold text-primary uppercase mb-2 sm:mb-3 tracking-wider'>
                  Student Name
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground break-words'>Rachelle Mae B. Tan</p>
              </div>
            </div>

            <div className='group'>
              <div className='h-full bg-gradient-to-br from-secondary to-secondary/60 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 sm:p-5 md:p-7 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1'>
                <p className='text-xs font-semibold text-primary uppercase mb-2 sm:mb-3 tracking-wider'>
                  Student ID
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground break-words'>MA22-IT-02681</p>
              </div>
            </div>

            <div className='group'>
              <div className='h-full bg-gradient-to-br from-secondary to-secondary/60 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 sm:p-5 md:p-7 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1'>
                <p className='text-xs font-semibold text-primary uppercase mb-2 sm:mb-3 tracking-wider'>
                  Course & Year
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground break-words'>
                  Bachelor of Science in Information Technology, 4th Year
                </p>
              </div>
            </div>

            <div className='group'>
              <div className='h-full bg-gradient-to-br from-secondary to-secondary/60 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 sm:p-5 md:p-7 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1'>
                <p className='text-xs font-semibold text-primary uppercase mb-2 sm:mb-3 tracking-wider'>
                  Institution
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground break-words'>
                  Occidental Mindoro State College
                </p>
              </div>
            </div>

            <div className='group md:col-span-2'>
              <div className='h-full bg-gradient-to-br from-secondary to-secondary/60 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 sm:p-5 md:p-7 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1'>
                <p className='text-xs font-semibold text-primary uppercase mb-2 sm:mb-3 tracking-wider'>
                  Host Company
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground break-words'>
                  Occidental Mindoro State College (BSIT Faculty)
                </p>
              </div>
            </div>

            <div className='group md:col-span-2'>
              <div className='h-full bg-gradient-to-br from-secondary to-secondary/60 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 sm:p-5 md:p-7 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1'>
                <p className='text-xs font-semibold text-primary uppercase mb-2 sm:mb-3 tracking-wider'>
                  OJT Coordinator
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground break-words'>Marites D. Escultor, MSIT</p>
              </div>
            </div>
          </div>
        </div>

        {/* E-PORTFOLIO CONTENTS SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>E-Portfolio Contents</h2>
            <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>Navigate through the comprehensive documentation of your internship experience</p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6'>
            {/* Chapter I */}
            <div className='group cursor-pointer'>
              <div className='bg-gradient-to-br from-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-5 sm:p-6 hover:border-primary/60 transition-all duration-300 h-full relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2'>
                <div className='absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-sidebar-primary to-sidebar-accent'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-primary' stroke='currentColor' strokeWidth='2' fill='none' viewBox='0 0 24 24'>
                      <path d='M4 6h16V4H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-foreground mb-1'>Chapter I: Introduction</h3>
                    <p className='text-xs sm:text-sm text-muted-foreground'>Overview of internship importance, objectives, and setting</p>
                  </div>
                  <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chapter II */}
            <div className='group cursor-pointer'>
              <div className='bg-gradient-to-br from-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-5 sm:p-6 hover:border-primary/60 transition-all duration-300 h-full relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2'>
                <div className='absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-sidebar-primary to-sidebar-accent'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-primary' stroke='currentColor' strokeWidth='2' fill='none' viewBox='0 0 24 24'>
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-foreground mb-1'>Chapter II: Company Profile</h3>
                    <p className='text-xs sm:text-sm text-muted-foreground'>Details about the host company, its mission, and structure</p>
                  </div>
                  <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chapter III */}
            <div className='group cursor-pointer'>
              <div className='bg-gradient-to-br from-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-5 sm:p-6 hover:border-primary/60 transition-all duration-300 h-full relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2'>
                <div className='absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-sidebar-primary to-sidebar-accent'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-primary' stroke='currentColor' strokeWidth='2' fill='none' viewBox='0 0 24 24'>
                      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-foreground mb-1'>Chapter III: Work Experiences</h3>
                    <p className='text-xs sm:text-sm text-muted-foreground'>Weekly reports, time records, and project documentation</p>
                  </div>
                  <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chapter IV */}
            <div className='group cursor-pointer'>
              <div className='bg-gradient-to-br from-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-5 sm:p-6 hover:border-primary/60 transition-all duration-300 h-full relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2'>
                <div className='absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-sidebar-primary to-sidebar-accent'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-primary' stroke='currentColor' strokeWidth='2' fill='none' viewBox='0 0 24 24'>
                      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9h-4v4h4v-4z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-foreground mb-1'>Chapter IV: Assessment</h3>
                    <p className='text-xs sm:text-sm text-muted-foreground'>Evaluation forms and internship performance assessment</p>
                  </div>
                  <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Appendices */}
            <div className='group cursor-pointer col-span-1 md:col-span-1'>
              <div className='bg-gradient-to-br from-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-5 sm:p-6 hover:border-primary/60 transition-all duration-300 h-full relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2'>
                <div className='absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-sidebar-primary to-sidebar-accent'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-primary' stroke='currentColor' strokeWidth='2' fill='none' viewBox='0 0 24 24'>
                      <path d='M19 2H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V8h10v4z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-foreground mb-1'>Appendices</h3>
                    <p className='text-xs sm:text-sm text-muted-foreground'>Additional documentation, certificates, and attachments</p>
                  </div>
                  <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE OF CONTENTS SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl'>
            <div className='flex items-start gap-4 sm:gap-5 mb-8 sm:mb-10'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                <svg className='w-6 h-6 sm:w-7 sm:h-7 text-primary' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider'>NAVIGATION</p>
                <h3 className='text-2xl sm:text-3xl font-bold text-foreground'>Table of Contents</h3>
              </div>
            </div>
            
            <div className='space-y-2.5'>
              <div className='flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-transparent hover:from-primary/20 transition-all duration-200 cursor-pointer'>
                <div className='flex items-center gap-4'>
                  <span className='text-primary font-bold text-sm w-6'>01</span>
                  <span className='text-foreground font-semibold hover:text-primary transition-colors text-sm sm:text-base'>Acknowledgement</span>
                </div>
                <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-primary font-bold text-sm'>02</span>
                  <span className='text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base'>Student Trainee Prayer</span>
                </div>
                <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-primary font-bold text-sm'>03</span>
                  <span className='text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base'>Personal Philosophy</span>
                </div>
                <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-primary font-bold text-sm'>04</span>
                  <span className='text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base'>Career Plan</span>
                </div>
                <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-primary font-bold text-sm'>05</span>
                  <span className='text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base'>Chapter I — Introduction</span>
                </div>
                <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-primary font-bold text-sm'>06</span>
                  <span className='text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base'>Chapter II — Company Profile</span>
                </div>
                <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-primary font-bold text-sm'>07</span>
                  <span className='text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base'>Chapter III — Work Experiences</span>
                </div>
                <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-primary font-bold text-sm'>08</span>
                  <span className='text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base'>Chapter IV — Assessment</span>
                </div>
                <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-primary font-bold text-sm'>09</span>
                  <span className='text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base'>Appendices</span>
                </div>
                <svg className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ACKNOWLEDGEMENT SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl'>
            <div className='flex items-start gap-4 sm:gap-5 mb-8 sm:mb-10'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                <svg className='w-6 h-6 sm:w-7 sm:h-7 text-primary' stroke='currentColor' strokeWidth='2' fill='none' viewBox='0 0 24 24'>
                  <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider'>SECTION 01</p>
                <h3 className='text-2xl sm:text-3xl font-bold text-foreground'>Acknowledgement</h3>
              </div>
            </div>
            
            <div className='space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed'>
              <p>The completion of this Student Internship Portfolio would not have been possible without the guidance, support, and encouragement of the people who have been part of my on-the-job training journey. I would like to express my sincere gratitude to all those who contributed to my learning, growth, and development during my internship.</p>
              
              <p>First and foremost, I offer my deepest thanks to Almighty God for granting me wisdom, strength, and perseverance throughout my internship. His guidance helped me overcome challenges, remain patient in difficult situations, and fulfill my responsibilities with dedication and faith.</p>
              
              <p>I would like to extend my heartfelt gratitude to the institution for giving me the opportunity to undergo my on-the-job training. This experience allowed me to enhance my knowledge, develop my skills, and gain a deeper understanding of real-world work environments.</p>
              
              <p>I am especially grateful to my supervisor, <span className='font-semibold text-foreground'>MARITES D. ESCULTOR, MSIT</span>, Laboratory Custodian of the Multimedia and Speech Laboratory, for his guidance, support, and supervision throughout my internship. His willingness to share his knowledge and provide assistance greatly contributed to my learning and helped me become more responsible, attentive, and confident in performing my assigned tasks.</p>
              
              <p>I would also like to express my sincere appreciation to the staff and personnel of the Multimedia and Speech Laboratory for their patience, cooperation, and support. Their guidance helped me understand proper laboratory procedures, equipment handling, and maintaining an organized and efficient workspace.</p>
              
              <p>Furthermore, I would like to thank my OJT Coordinator and instructors for their continuous guidance, encouragement, and valuable feedback. Their support played a significant role in helping me complete my training successfully.</p>
              
              <p>My heartfelt gratitude also goes to my beloved parents for their unconditional love, support, and sacrifices. Their encouragement inspired me to stay motivated and determined in achieving my goals.</p>
              
              <p>In addition, I would like to thank my classmates and fellow trainees for their support, cooperation, and shared experiences throughout our internship journey. Their presence made the experience more meaningful and enjoyable.</p>
              
              <p>Lastly, I am deeply thankful to my family and friends for their unwavering support, understanding, and motivation. Their encouragement helped me stay focused and committed in completing my internship successfully.</p>
            </div>
          </div>
        </div>

        {/* STUDENT TRAINEE PRAYER SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl'>
            <div className='flex items-start gap-4 sm:gap-5 mb-8 sm:mb-10'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                <svg className='w-6 h-6 sm:w-7 sm:h-7 text-primary' stroke='currentColor' strokeWidth='2' fill='none' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider'>SECTION 02</p>
                <h3 className='text-2xl sm:text-3xl font-bold text-foreground'>Student Trainee Prayer</h3>
              </div>
            </div>
            
            <div className='space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed'>
              <p><span className='font-semibold text-foreground'>Dear God,</span></p>
              
              <p>Thank You for the opportunity to learn, grow, and experience real-world work through this training. Guide me as I take each step in my journey as a student trainee. Grant me wisdom to understand my tasks, patience to face challenges, and strength to overcome difficulties.</p>
              
              <p>Help me to be responsible, respectful, and dedicated in all that I do. May I learn not only skills but also values that will shape me into a better person. Bless my supervisors, co-trainees, and everyone I work with.</p>
              
              <p>May this experience prepare me for my future career and help me become a productive and compassionate individual.</p>
              
              <p className='pt-2'><span className='font-semibold text-foreground'>All these I pray,</span></p>
              
              <p className='text-center pt-2'>
                <span className='font-semibold text-primary text-lg'>Amen.</span>
              </p>
            </div>
          </div>
        </div>

        {/* PERSONAL PHILOSOPHY SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl'>
            <div className='flex items-start gap-4 sm:gap-5 mb-8 sm:mb-10'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                <svg className='w-6 h-6 sm:w-7 sm:h-7 text-primary' stroke='currentColor' strokeWidth='2' fill='none' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider'>SECTION 03</p>
                <h3 className='text-2xl sm:text-3xl font-bold text-foreground'>Personal Philosophy</h3>
              </div>
            </div>
            
            <div className='space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed'>
              <p>I believe that learning is a continuous process that goes beyond the classroom. As a student trainee, I see every task and responsibility as an opportunity to grow, improve, and discover my strengths and weaknesses. I believe that real learning happens through experience, dedication, and a willingness to step out of my comfort zone.</p>
              
              <p>I value hard work, discipline, and responsibility in everything I do. I believe that success is not achieved overnight, but through consistent effort and determination. During my on-the-job training, I aim to perform my duties with honesty and commitment, while maintaining a positive attitude even when faced with challenges.</p>
              
              <p>I also believe in the importance of respect, teamwork, and communication. Working with different people allows me to learn new perspectives and develop strong interpersonal skills. I strive to build good relationships with my supervisors and co-trainees by being cooperative, open-minded, and respectful at all times.</p>
              
              <p>Lastly, I believe that this training is a stepping stone toward my future career. The knowledge, skills, and values I gain from this experience will help shape me into a competent and responsible professional. I am committed to continuous improvement and to becoming the best version of myself in both my personal and professional life.</p>
              
              <p>Furthermore, I believe that patience and perseverance are essential in achieving my goals. There may be moments of difficulty and uncertainty, but I understand that these are part of the learning process. Instead of giving up, I choose to stay motivated and focused, knowing that every challenge helps me grow stronger and wiser.</p>
              
              <p>As Albert Einstein once said, &quot;Anyone who has never made a mistake has never tried anything new.&quot; This reminds me to not be afraid of failure, but instead use it as a lesson for improvement. With this mindset, I will continue to strive, learn, and work hard to achieve my dreams and become a successful professional in the future.</p>
            </div>
          </div>
        </div>

        {/* CAREER PLAN SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl'>
            <div className='flex items-start gap-4 sm:gap-5 mb-8 sm:mb-10'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0'>
                <svg className='w-6 h-6 sm:w-7 sm:h-7 text-primary' stroke='currentColor' strokeWidth='2' fill='none' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider'>SECTION 04</p>
                <h3 className='text-2xl sm:text-3xl font-bold text-foreground'>Career Plan</h3>
              </div>
            </div>
            
            <div className='space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed'>
              <p>My career plan begins with building a strong foundation through my on-the-job training experience. I aim to gain practical knowledge and develop essential skills that will help me become competent in my chosen field. This training serves as my first step in understanding the real work environment and preparing myself for future responsibilities.</p>
              
              <p>After completing my OJT, I plan to continue improving my skills and knowledge by finishing my studies successfully. I will strive to perform well academically while also seeking opportunities to enhance my abilities, such as attending trainings, seminars, or workshops related to my field. I believe that continuous learning is important in achieving long-term success.</p>
              
              <p>In the next few years, my goal is to secure a stable job where I can apply what I have learned and gain more experience. I want to work in an environment that will challenge me and help me grow professionally. I also aim to build good relationships with colleagues and supervisors, as teamwork and communication are important in any workplace.</p>
              
              <p>As I gain more experience, I plan to advance in my career by taking on greater responsibilities and possibly pursuing higher positions. I am determined to improve my performance, expand my skills, and become more confident in handling complex tasks. I also consider pursuing further education or certifications if needed to support my career growth.</p>
              
              <p>Ultimately, my long-term goal is to become a successful, responsible, and respected professional in my field. I want to contribute positively to my workplace and to society by using my knowledge and skills effectively. Through hard work, dedication, and perseverance, I am committed to achieving my dreams and building a fulfilling career.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
