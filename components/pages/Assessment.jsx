export function Assessment() {
  return (
    <div id='assessment-top' className='min-h-screen p-4 sm:p-6 md:p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-muted-foreground mb-8'>
          <span className='text-primary'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>IV. Assessment</span>
        </div>

        <h1 className='text-4xl sm:text-5xl font-bold text-foreground mb-10'>IV. Assessment</h1>

        <div className='space-y-10'>
          {/* APPENDIX A Header */}
          <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-10 shadow-xl'>
            <p className='text-primary text-sm font-semibold mb-2'>APPENDIX A</p>
            <h2 className='text-2xl sm:text-3xl font-bold text-foreground mb-2'>Student Internship Evaluation Form</h2>
            <p className='text-muted-foreground mb-8'>Occidental Mindoro State College × Records Office</p>

            {/* Student Details Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='border border-primary/30 rounded-2xl p-6 bg-gradient-to-br from-secondary/50 to-transparent shadow-lg'>
                <p className='text-muted-foreground text-sm mb-2 uppercase tracking-wider font-semibold'>Student Name</p>
                <p className='text-foreground text-lg font-bold'>Rachelle Mae B. Tan</p>
              </div>
              <div className='border border-primary/30 rounded-2xl p-6 bg-gradient-to-br from-secondary/50 to-transparent shadow-lg'>
                <p className='text-muted-foreground text-sm mb-2 uppercase tracking-wider font-semibold'>Program</p>
                <p className='text-foreground text-lg font-bold'>BS Information Technology</p>
              </div>
              <div className='border border-primary/30 rounded-2xl p-6 bg-gradient-to-br from-secondary/50 to-transparent shadow-lg'>
                <p className='text-muted-foreground text-sm mb-2 uppercase tracking-wider font-semibold'>Company</p>
                <p className='text-foreground text-lg font-bold'>BSIT Faculty</p>
              </div>
              <div className='border border-primary/30 rounded-2xl p-6 bg-gradient-to-br from-secondary/50 to-transparent shadow-lg'>
                <p className='text-muted-foreground text-sm mb-2 uppercase tracking-wider font-semibold'>Supervisor</p>
                <p className='text-foreground text-lg font-bold'>Joylyn C. Vergara</p>
              </div>
              <div className='md:col-span-2 border border-primary/30 rounded-2xl p-6 bg-gradient-to-br from-secondary/50 to-transparent shadow-lg'>
                <p className='text-muted-foreground text-sm mb-2 uppercase tracking-wider font-semibold'>Internship Period</p>
                <p className='text-foreground text-lg font-bold'>January 2026 – April 2026</p>
              </div>
            </div>
          </div>

          {/* Evaluation Form Pages */}
          <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-10 shadow-xl'>
            <h3 className='text-xl font-bold text-foreground mb-6'>Evaluation Form Pages</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Page 1 */}
              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors'>
                <div className='relative bg-background aspect-[8.5/11]'>
                  <img
                    src='/evaluation-1.png'
                    alt='Evaluation Form Page 1'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-3'>
                    <p className='text-foreground text-xs font-semibold'>Page 1: Criteria & Overview</p>
                  </div>
                </div>
              </div>

              {/* Page 2 */}
              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors'>
                <div className='relative bg-background aspect-[8.5/11]'>
                  <img
                    src='/evaluation-2.png'
                    alt='Evaluation Form Page 2'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-3'>
                    <p className='text-foreground text-xs font-semibold'>Page 2: Detailed Assessment</p>
                  </div>
                </div>
              </div>

              {/* Page 3 */}
              <div className='rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors'>
                <div className='relative bg-background aspect-[8.5/11]'>
                  <img
                    src='/evaluation-3.png'
                    alt='Evaluation Form Page 3'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-3'>
                    <p className='text-foreground text-xs font-semibold'>Page 3: Signatures & Summary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-2xl p-6 sm:p-10'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-8'>Performance Summary</h2>
            
            {/* Rating Cards */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
              <div className='bg-muted/30 rounded-xl p-6 border border-border/50 text-center'>
                <p className='text-muted-foreground text-sm mb-2'>SR</p>
                <p className='text-3xl font-bold text-primary'>5</p>
              </div>
              <div className='bg-muted/30 rounded-xl p-6 border border-border/50 text-center'>
                <p className='text-muted-foreground text-sm mb-2'>PR</p>
                <p className='text-3xl font-bold text-primary'>5</p>
              </div>
              <div className='bg-muted/30 rounded-xl p-6 border border-border/50 text-center'>
                <p className='text-muted-foreground text-sm mb-2'>SICR</p>
                <p className='text-3xl font-bold text-primary'>5</p>
              </div>
              <div className='bg-muted/30 rounded-xl p-6 border border-border/50 text-center'>
                <p className='text-muted-foreground text-sm mb-2'>ASR</p>
                <p className='text-3xl font-bold text-foreground'>4</p>
              </div>
            </div>

            {/* Overall Rating */}
            <div className='border-t border-border/50 pt-6'>
              <p className='text-muted-foreground text-center mb-2'>Overall Rating</p>
              <p className='text-center text-4xl font-bold text-primary'>4.75</p>
            </div>
          </div>

          {/* General Comments */}
          <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-2xl p-6 sm:p-10'>
            <h3 className='text-lg font-bold text-foreground mb-4'>General Comments</h3>
            <p className='text-muted-foreground leading-relaxed'>
              The intern demonstrated strong work ethic, responsibility, and attention to detail. He was able to complete assigned tasks efficiently and showed good communication skills in dealing with students and staff.
            </p>
          </div>

          {/* Evaluators */}
          <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-2xl p-6 sm:p-10'>
            <h3 className='text-lg font-bold text-foreground mb-6'>Evaluators</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <p className='text-foreground font-bold mb-1'>Student Intern</p>
                <p className='text-muted-foreground'>Rachelle Mae B. Tan</p>
              </div>
              <div>
                <p className='text-foreground font-bold mb-1'>Supervisor</p>
                <p className='text-muted-foreground'>Joylyn C. Vergara</p>
              </div>
              <div>
                <p className='text-foreground font-bold mb-1'>Student Internship Coordinator</p>
                <p className='text-muted-foreground'>Marites D. Escultor, MSIT</p>
              </div>
              <div>
                <p className='text-foreground font-bold mb-1'>Peer</p>
                <p className='text-muted-foreground'>[Peer Name]</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className='text-center pt-4 pb-8 border-t border-border/50'>
            <p className='text-xs text-muted-foreground'>
              © 2026 OJT E-Portfolio &nbsp;·&nbsp;{' '}
              <span className='text-primary'>Student Internship Documentation</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
