export function TableOfContents() {
  const contents = [
    { title: 'Title Page', page: '1' },
    { title: 'Front Page', page: '2' },
    { title: 'Table of Contents', page: '3' },
    { title: 'Acknowledgement', page: '4' },
    { title: 'Student Trainee Prayer', page: '5' },
    { title: 'Personal Philosophy', page: '6' },
    { title: 'Career Plan', page: '7' },
    {
      title: 'I. Introduction',
      children: [
        { title: 'A. Importance of Internship', page: '8' },
        { title: 'B. Objective of Internship', page: '8' },
        { title: 'C. Time and Place', page: '9' },
      ],
    },
    {
      title: 'II. Company Profile',
      children: [
        { title: 'Company Overview', page: '10' },
        { title: 'Nature of Agency', page: '10' },
        { title: 'Mission/Vision/Goal', page: '11' },
        { title: 'History/Background', page: '11' },
        { title: 'Organizational Structure', page: '12' },
      ],
    },
    {
      title: 'III. Work Experience',
      children: [
        { title: 'Weekly Reports', page: '13' },
        { title: 'Daily Time Record', page: '14' },
        { title: 'Progress Report', page: '15' },
        { title: 'Analysis Report', page: '16' },
      ],
    },
    {
      title: 'IV. Assessment',
      children: [
        { title: 'Assessment Details', page: '17' },
        { title: 'Appendices', page: '18' },
      ],
    },
  ];

  return (
    <div className='min-h-screen p-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-sm text-muted-foreground mb-8'>
          <span className='text-primary'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Table of Contents</span>
        </div>

        <h1 className='text-4xl font-bold text-foreground mb-8'>Table of Contents</h1>

        <div className='bg-secondary/40 backdrop-blur border border-primary/20 rounded-2xl p-8'>
          <div className='space-y-3'>
            {contents.map((item, idx) => (
              <div key={idx}>
                <div className='flex items-center justify-between py-3 px-4 hover:bg-rose-800/5 rounded transition-colors'>
                  <span className='text-slate-200 font-medium'>{item.title}</span>
                  <span className='text-primary'>{item.page}</span>
                </div>
                {item.children && (
                  <div className='ml-6 space-y-2'>
                    {item.children.map((child, cidx) => (
                      <div
                        key={cidx}
                        className='flex items-center justify-between py-2 px-4 text-muted-foreground hover:bg-rose-800/5 rounded transition-colors'
                      >
                        <span className='text-sm'>{child.title}</span>
                        <span className='text-primary/70'>{child.page}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
