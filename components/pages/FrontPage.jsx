export function FrontPage() {
  return (
    <div className='min-h-screen p-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-sm text-muted-foreground mb-8'>
          <span className='text-primary'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Front Page</span>
        </div>

        <div className='bg-secondary/40 backdrop-blur border border-primary/20 rounded-2xl p-12'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-foreground mb-4'>
              ON-THE-JOB-TRAINING
            </h1>
            <p className='text-lg text-primary'>E-Portfolio Documentation</p>
          </div>

          <div className='space-y-8 text-muted-foreground'>
            <div>
              <h2 className='text-xl font-semibold text-foreground mb-2'>Student Information</h2>
              <p className='text-muted-foreground'>Name: Jonathan S. Bartolome Jr.</p>
              <p className='text-muted-foreground'>ID: MA22-IT-06261</p>
              <p className='text-muted-foreground'>Course: Bachelor of Science in Information Technology</p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-foreground mb-2'>Institution</h2>
              <p className='text-muted-foreground'>Occidental Mindoro State College</p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-foreground mb-2'>Training Period</h2>
              <p className='text-muted-foreground'>Duration: [Training Period]</p>
              <p className='text-muted-foreground'>Location: [Training Location]</p>
            </div>

            <div className='pt-8 border-t border-primary/20 text-center'>
              <p className='text-primary font-semibold'>Academic Year 2024-2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
