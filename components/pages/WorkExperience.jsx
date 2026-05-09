'use client';

import { useEffect } from 'react';
import { Calendar, Clock, TrendingUp, BarChart3 } from 'lucide-react';

const SECTION_ANCHORS = {
  'work-experience': 'section-weekly',
  'work-weekly': 'section-weekly',
  'work-timerecord': 'section-timerecord',
  'work-progress': 'section-progress',
  'work-analysis': 'section-analysis',
};

export function WorkExperience({ section }) {
  useEffect(() => {
    const anchorId = SECTION_ANCHORS[section];
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div className='min-h-screen bg-background'>
      <div className='p-4 sm:p-8 max-w-6xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-muted-foreground mb-8'>
          <span className='text-primary'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>III. Work Experiences</span>
        </div>

        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2'>Work Experiences</h1>
        <p className='text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-12'>Record of internship activities and professional development</p>

        <div className='space-y-12 sm:space-y-16'>

          {/* Section 1: Weekly Reports */}
          <section id='section-weekly'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center gap-3'>
              <Calendar className='w-5 sm:w-6 h-5 sm:h-6 text-primary' />
              Weekly Reports
            </h2>
            <p className='text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8'>Summary of weekly internship activities and learnings</p>
            
            <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-lg sm:rounded-2xl p-4 sm:p-8'>
              <p className='text-muted-foreground leading-relaxed mb-6 sm:mb-8'>
                This section presents a comprehensive summary of weekly accomplishments during the internship at Occidental Mindoro State College, documenting all activities performed, responsibilities undertaken, and progress made throughout the training period.
              </p>

              <div className='space-y-4 sm:space-y-6'>
                {/* January 27-30 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>January 27 – 30, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Scanned rubrics and syllabus, then collected students&apos; certificates of attendance from CB office</li>
                        <li>Cleaned the area and delivered college grading sheet</li>
                        <li>Cleaned restroom, washed office rags, and cut out number labels for PCs</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* February 2-6 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>February 2 – 6, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Designed the bulletin board and delivered papers to CD office</li>
                        <li>Printed designs for bulletin board and cleaned the hallway</li>
                        <li>Cleaned the area, printed papers, and cut out designs for bulletin board</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* February 9-13 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>February 9 – 13, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Maintained cleanliness and order inside the faculty office</li>
                        <li>Helped in making props for SIGLAKAS Week event</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* February 16-20 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>February 16 – 20, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Maintained cleanliness and order inside the faculty office</li>
                        <li>Scanned syllabus, terms of service, and letters</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* February 23-28 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>February 23 – 28, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Maintained cleanliness and order inside the computer laboratory</li>
                        <li>Laid out the design for the bulletin board and cut out decorative designs</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* March 2-6 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>March 2 – 6, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Continued improving the design for bulletin board</li>
                        <li>Assisted students and users in the laboratory</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* March 9-13 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>March 9 – 13, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Continued developing the other design for bulletin</li>
                        <li>Was instructed to go to the CD office to give the documents</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* March 16-19 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>March 16 – 19, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Performed inventory of laboratory equipment</li>
                        <li>Maintained cleanliness and order inside the faculty office</li>
                        <li>Scanned syllabus, terms of service, and letters</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* March 23-27 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>March 23 – 27, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Organized and cleaned files in the computer systems</li>
                        <li>Cleaned the area and delivered the college grading sheet</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* March 30-31 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>March 30 – 31, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Ensured proper organization inside the computer laboratory</li>
                        <li>Cleaned the overall laboratory environment</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* April 6-10 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>April 6 – 10, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Installed applications in laboratory computers</li>
                        <li>Promoted a safe and comfortable learning environment</li>
                        <li>Cleaned the area, printed papers, and went to CD office</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* April 13-17 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>April 13 – 17, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Was instructed to go to the CD office, and then did some cleaning</li>
                        <li>Cleaned the area and delivered the grading sheet</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>

                {/* April 20-22 */}
                <div className='border-l-4 border-primary pl-3 sm:pl-6 py-3 sm:py-4 bg-muted/30 rounded-lg'>
                  <h3 className='text-foreground font-bold mb-2 text-sm sm:text-base'>April 20 – 22, 2026</h3>
                  <div className='space-y-2'>
                    <div>
                      <p className='text-primary font-semibold mb-1 text-xs sm:text-sm'>Accomplishments</p>
                      <ul className='text-muted-foreground text-xs sm:text-sm space-y-1 list-disc list-inside'>
                        <li>Utilized the system for inventory management</li>
                        <li>Assisted trainees in using the system</li>
                        <li>Cleaned and removed unnecessary files from computers</li>
                      </ul>
                    </div>
                    <p className='text-primary font-semibold text-xs sm:text-sm'>Status: Accomplished</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Daily Time Record */}
          <section id='section-timerecord'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center gap-3'>
              <Clock className='w-5 sm:w-6 h-5 sm:h-6 text-primary' />
              Daily Time Record (DTR)
            </h2>
            <p className='text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8'>Internship Duration: January 27, 2026 – April 28, 2026</p>
            
            <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-lg sm:rounded-2xl p-4 sm:p-8'>
              <div className='mb-6 sm:mb-8'>
                <p className='text-lg sm:text-2xl font-bold text-primary mb-4 sm:mb-6'>489 total hours completed</p>
                <p className='text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6'>
                  This section presents the daily attendance record of the internship, including time in, time out, and total hours rendered.
                </p>
              </div>

              {/* Monthly Summary Cards */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4 mb-8 sm:mb-12'>
                <div className='bg-muted/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border'>
                  <p className='text-muted-foreground text-xs sm:text-sm mb-2'>January</p>
                  <p className='text-lg sm:text-2xl font-bold text-foreground'>39:30</p>
                </div>
                <div className='bg-muted/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border'>
                  <p className='text-muted-foreground text-xs sm:text-sm mb-2'>February</p>
                  <p className='text-lg sm:text-2xl font-bold text-foreground'>168:00</p>
                </div>
                <div className='bg-muted/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border'>
                  <p className='text-muted-foreground text-xs sm:text-sm mb-2'>March</p>
                  <p className='text-lg sm:text-2xl font-bold text-foreground'>150:00</p>
                </div>
                <div className='bg-muted/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border'>
                  <p className='text-muted-foreground text-xs sm:text-sm mb-2'>April</p>
                  <p className='text-lg sm:text-2xl font-bold text-foreground'>131:30</p>
                </div>
                <div className='bg-muted/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border sm:col-span-2 lg:col-span-1'>
                  <p className='text-muted-foreground text-xs sm:text-sm mb-2'>Total</p>
                  <p className='text-lg sm:text-2xl font-bold text-primary'>489:00</p>
                </div>
              </div>

              {/* January Detailed Table */}
              <div className='mb-8 sm:mb-12'>
                <h3 className='text-base sm:text-xl font-bold text-foreground mb-3 sm:mb-4'>January 2026 — Total: 39:30</h3>
                
                {/* Mobile Cards View */}
                <div className='sm:hidden space-y-3'>
                  {[
                    { date: 'Jan 27', amIn: '8:00 AM', amOut: '12:30 PM', pmIn: '1:00 PM', pmOut: '5:00 PM', total: '8:00' },
                    { date: 'Jan 28', amIn: '8:00 AM', amOut: '12:30 PM', pmIn: '1:00 PM', pmOut: '5:00 PM', total: '8:00' },
                    { date: 'Jan 29', amIn: '8:00 AM', amOut: '12:30 PM', pmIn: '1:00 PM', pmOut: '5:00 PM', total: '8:00' },
                    { date: 'Jan 30', amIn: '8:00 AM', amOut: '12:30 PM', pmIn: '1:00 PM', pmOut: '5:00 PM', total: '8:00' },
                    { date: 'Jan 31', amIn: '8:00 AM', amOut: '12:00 PM', pmIn: '1:00 PM', pmOut: '4:30 PM', total: '7:30' },
                  ].map((row) => (
                    <div key={row.date} className='bg-muted/30 rounded-lg p-3 border border-border/50'>
                      <div className='font-semibold text-foreground mb-2'>{row.date}</div>
                      <div className='grid grid-cols-2 gap-2 text-xs'>
                        <div><span className='text-muted-foreground'>AM In:</span> <span className='text-foreground'>{row.amIn}</span></div>
                        <div><span className='text-muted-foreground'>AM Out:</span> <span className='text-foreground'>{row.amOut}</span></div>
                        <div><span className='text-muted-foreground'>PM In:</span> <span className='text-foreground'>{row.pmIn}</span></div>
                        <div><span className='text-muted-foreground'>PM Out:</span> <span className='text-foreground'>{row.pmOut}</span></div>
                      </div>
                      <div className='mt-2 pt-2 border-t border-border/30 font-semibold text-primary text-right'>{row.total}</div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table View */}
                <div className='hidden sm:block overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm'>
                    <thead>
                      <tr className='bg-muted/50 border-b border-border'>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>Date</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>AM In</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>AM Out</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>PM In</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>PM Out</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-primary font-semibold whitespace-nowrap'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-b border-border hover:bg-muted/30'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>Jan 27</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>8:00 AM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>12:30 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>1:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>5:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-primary font-semibold'>8:00</td>
                      </tr>
                      <tr className='border-b border-border hover:bg-muted/30'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>Jan 28</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>8:00 AM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>12:30 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>1:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>5:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-primary font-semibold'>8:00</td>
                      </tr>
                      <tr className='border-b border-border hover:bg-muted/30'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>Jan 29</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>8:00 AM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>12:30 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>1:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>5:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-primary font-semibold'>8:00</td>
                      </tr>
                      <tr className='border-b border-border hover:bg-muted/30'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>Jan 30</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>8:00 AM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>12:30 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>1:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>5:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-primary font-semibold'>8:00</td>
                      </tr>
                      <tr className='border-b border-border hover:bg-muted/30'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>Jan 31</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>8:00 AM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>12:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>1:00 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>4:30 PM</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-primary font-semibold'>7:30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* February Detailed Table */}
              <div className='mb-8 sm:mb-12'>
                <h3 className='text-base sm:text-xl font-bold text-foreground mb-3 sm:mb-4'>February 2026 — Total: 168:00</h3>
                
                {/* Mobile Cards View */}
                <div className='sm:hidden space-y-3'>
                  {[2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27].map((day) => (
                    <div key={`feb-${day}`} className='bg-muted/30 rounded-lg p-3 border border-border/50'>
                      <div className='font-semibold text-foreground mb-2'>Feb {day}</div>
                      <div className='grid grid-cols-2 gap-2 text-xs'>
                        <div><span className='text-muted-foreground'>AM In:</span> <span className='text-foreground'>8:00 AM</span></div>
                        <div><span className='text-muted-foreground'>AM Out:</span> <span className='text-foreground'>12:30 PM</span></div>
                        <div><span className='text-muted-foreground'>PM In:</span> <span className='text-foreground'>1:00 PM</span></div>
                        <div><span className='text-muted-foreground'>PM Out:</span> <span className='text-foreground'>5:00 PM</span></div>
                      </div>
                      <div className='mt-2 pt-2 border-t border-border/30 font-semibold text-primary text-right'>8:00</div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table View */}
                <div className='hidden sm:block overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm'>
                    <thead>
                      <tr className='bg-muted/50 border-b border-border'>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>Date</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>AM In</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>AM Out</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>PM In</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>PM Out</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-primary font-semibold whitespace-nowrap'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27].map((day) => (
                        <tr key={`feb-${day}`} className='border-b border-border hover:bg-muted/30'>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>Feb {day}</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>8:00 AM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>12:30 PM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>1:00 PM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>5:00 PM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-primary font-semibold'>8:00</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* March Detailed Table */}
              <div className='mb-8 sm:mb-12'>
                <h3 className='text-base sm:text-xl font-bold text-foreground mb-3 sm:mb-4'>March 2026 — Total: 150:00</h3>
                
                {/* Mobile Cards View */}
                <div className='sm:hidden space-y-3'>
                  {[2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31].map((day) => (
                    <div key={`mar-${day}`} className='bg-muted/30 rounded-lg p-3 border border-border/50'>
                      <div className='font-semibold text-foreground mb-2'>Mar {day}</div>
                      <div className='grid grid-cols-2 gap-2 text-xs'>
                        <div><span className='text-muted-foreground'>AM In:</span> <span className='text-foreground'>8:00 AM</span></div>
                        <div><span className='text-muted-foreground'>AM Out:</span> <span className='text-foreground'>12:30 PM</span></div>
                        <div><span className='text-muted-foreground'>PM In:</span> <span className='text-foreground'>1:00 PM</span></div>
                        <div><span className='text-muted-foreground'>PM Out:</span> <span className='text-foreground'>5:00 PM</span></div>
                      </div>
                      <div className='mt-2 pt-2 border-t border-border/30 font-semibold text-primary text-right'>8:00</div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table View */}
                <div className='hidden sm:block overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm'>
                    <thead>
                      <tr className='bg-muted/50 border-b border-border'>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>Date</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>AM In</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>AM Out</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>PM In</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>PM Out</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-primary font-semibold whitespace-nowrap'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31].map((day) => (
                        <tr key={`mar-${day}`} className='border-b border-border hover:bg-muted/30'>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>Mar {day}</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>8:00 AM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>12:30 PM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>1:00 PM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>5:00 PM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-primary font-semibold'>8:00</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* April Detailed Table */}
              <div className='mb-8 sm:mb-12'>
                <h3 className='text-base sm:text-xl font-bold text-foreground mb-3 sm:mb-4'>April 2026 — Total: 131:30</h3>
                
                {/* Mobile Cards View */}
                <div className='sm:hidden space-y-3'>
                  {[1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29, 30].map((day) => (
                    <div key={`apr-${day}`} className='bg-muted/30 rounded-lg p-3 border border-border/50'>
                      <div className='font-semibold text-foreground mb-2'>Apr {day}</div>
                      <div className='grid grid-cols-2 gap-2 text-xs'>
                        <div><span className='text-muted-foreground'>AM In:</span> <span className='text-foreground'>8:00 AM</span></div>
                        <div><span className='text-muted-foreground'>AM Out:</span> <span className='text-foreground'>12:30 PM</span></div>
                        <div><span className='text-muted-foreground'>PM In:</span> <span className='text-foreground'>1:00 PM</span></div>
                        <div><span className='text-muted-foreground'>PM Out:</span> <span className='text-foreground'>{day === 28 ? '4:30 PM' : '5:00 PM'}</span></div>
                      </div>
                      <div className='mt-2 pt-2 border-t border-border/30 font-semibold text-primary text-right'>{day === 28 ? '7:30' : '8:00'}</div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table View */}
                <div className='hidden sm:block overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm'>
                    <thead>
                      <tr className='bg-muted/50 border-b border-border'>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>Date</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>AM In</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>AM Out</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>PM In</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-muted-foreground font-semibold whitespace-nowrap'>PM Out</th>
                        <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-primary font-semibold whitespace-nowrap'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29, 30].map((day) => (
                        <tr key={`apr-${day}`} className='border-b border-border hover:bg-muted/30'>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>Apr {day}</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>8:00 AM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>12:30 PM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>1:00 PM</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground'>{day === 28 ? '4:30 PM' : '5:00 PM'}</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-primary font-semibold'>{day === 28 ? '7:30' : '8:00'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Internship Progress Report */}
          <section id='section-progress'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center gap-3'>
              <TrendingUp className='w-5 sm:w-6 h-5 sm:h-6 text-primary' />
              Internship Progress Report
            </h2>
            <p className='text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8'>Weekly Summary of High-Level Tasks, Completed Work, and Identified Areas for Improvement</p>

            <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-lg sm:rounded-2xl p-4 sm:p-8'>
              {/* Week 1 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>January 26 – 30, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Assist in maintaining and organizing computer units</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Successfully assisted in arranging and maintaining computer units inside the laboratory</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Initial unfamiliarity with laboratory setup and equipment arrangement</td>
                      </tr>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Support laboratory activities and assist students during computer use</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Assisted students during laboratory activities and computer usage</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Difficulty handling multiple users simultaneously during busy hours</td>
                      </tr>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Learn basic encoding and laboratory procedures</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Learned basic encoding tasks and became familiar with laboratory operations</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Needed additional guidance in understanding technical procedures</td>
                      </tr>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Support laboratory activities and assist students during computer use</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Assisted students during laboratory activities and computer usage</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Difficulty handling multiple users simultaneously during busy hours</td>
                      </tr>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Learn basic encoding and laboratory procedures</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Learned basic encoding tasks and became familiar with laboratory operations</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Needed additional guidance in understanding technical procedures</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 2 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>February 2 – 6, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Maintain cleanliness and order inside the computer laboratory</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Successfully maintained cleanliness and proper organization of the laboratory</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Balancing maintenance and technical tasks required better time management</td>
                      </tr>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Support maintenance of computer equipment</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Assisted in checking and maintaining computer units and peripherals</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Some computer units required troubleshooting beyond basic maintenance</td>
                      </tr>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Gain experience in clerical and technical tasks</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Performed assigned clerical and technical activities efficiently</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground hidden sm:table-cell'>Limited technical knowledge required supervision and guidance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 3 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>February 9 – 13, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Improve skills in file management and organization</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Organized laboratory files and documents systematically</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Inconsistent file formats made organization more difficult</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Maintain cleanliness and order inside the laboratory</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Continued ensuring a clean and organized environment</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Simultaneous tasks affected maintenance schedules</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Start developing an inventory system for the laboratory</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Began planning and developing a simple inventory system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Limited experience in system planning and database organization</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 4 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>February 16 – 20, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Begin developing a simple system for the computer laboratory</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Successfully created the initial system structure</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Encountered minor programming and technical errors</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Continue improving system interface design</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Enhanced the system interface for better usability</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some interface features required redesign and adjustments</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Strengthen technical and problem-solving skills</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Applied technical knowledge during system development</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Needed additional practice in debugging and troubleshooting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 5 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>February 23 – 27, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Ensure proper internet connection and secure browsing</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Monitored internet connectivity and promoted safe browsing practices</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Internet interruptions occasionally affected laboratory activities</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Test and improve the developed system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Conducted testing procedures and improved system performance</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some system functions required repeated debugging</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Maintain cleanliness inside the laboratory</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Continued organizing and cleaning laboratory facilities</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Technical tasks affected maintenance schedules</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 6 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>March 2 – 6, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Continue system development and improve interface design</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Successfully enhanced system functions and interface layout</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some functions required revisions for better usability</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Assist students and laboratory users</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Provided technical assistance and guidance to laboratory users</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Managing user concerns while performing technical tasks was challenging</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Improve communication and technical support skills</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Developed better interaction and technical assistance skills</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some users required repeated instructions during assistance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 7 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>March 9 – 13, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Continue developing the main functions of the system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Improved major system functions and operations</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some functions experienced compatibility issues during testing</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Integrate database functionality into the system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Connected and organized database features for inventory management</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Database connection errors occasionally interrupted development</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Improve understanding of data management</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Learned proper data storage and organization procedures</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Required repeated testing to ensure accurate database performance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 8 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>March 16 – 19, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Perform inventory using the developed system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Successfully conducted inventory of laboratory equipment using the system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some inventory data required verification and correction</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Improve system performance based on feedback</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Enhanced system performance after testing and evaluation</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Additional adjustments were needed to improve efficiency</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Strengthen troubleshooting and system optimization skills</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Applied troubleshooting techniques to improve system usability</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>System optimization required repeated testing procedures</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 9 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>March 23 – 27, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Organize and clean computer files</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Successfully removed unnecessary files and organized computer systems</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some files consumed excessive storage and slowed computer performance</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Add attendance functionality to the system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Added attendance monitoring features to improve system usability</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Attendance feature integration required several modifications</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Improve overall system efficiency</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Continued enhancing the developed system based on laboratory needs</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Balancing additional features with system performance became challenging</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 10 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>March 30 – 31, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Ensure proper organization inside the laboratory</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Successfully organized laboratory equipment and facilities</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Limited time affected completion of some organizational tasks</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Clean the overall laboratory environment</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Maintained cleanliness and safety of the laboratory area</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Heavy workload reduced time available for detailed maintenance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 11 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>April 6 – 10, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Install quiz applications on laboratory computers</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Successfully installed and configured quiz applications</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some applications experienced compatibility issues</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Promote a safe and comfortable learning environment</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Maintained cleanliness and ensured proper laboratory usage</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Monitoring all users simultaneously became difficult during busy periods</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Present the developed system for supervisor evaluation</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Submitted the developed system for checking and evaluation</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Minor revisions were recommended by the supervisor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 12 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>April 13 – 17, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Finalize the assigned laboratory system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Successfully completed final revisions and improvements</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Minor technical issues were identified during final testing</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Implement the system for actual laboratory use</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Implemented the system for daily laboratory operations</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some users required orientation and guidance in using the system</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 13 Progress */}
              <div className='mb-6 sm:mb-8'>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>April 20 – 23, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Utilize the system for inventory management</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Successfully used the developed system for inventory monitoring</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some inventory records required updating and verification</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Assist trainees and users in operating the system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Provided technical assistance and user guidance effectively</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Some users required repeated instructions for system usage</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Clean and remove unnecessary files from computers</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Removed unnecessary files and improved computer performance</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Cleaning and organizing files from multiple computers required additional time</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Week 14 Progress */}
              <div>
                <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                  <h3 className='text-foreground font-bold'>April 27 – 30, 2026</h3>
                </div>
                <div className='space-y-3 sm:overflow-x-auto'>
                  <table className='w-full text-xs sm:text-sm block sm:table'>
                    <thead className='hidden sm:table-header-group'>
                      <tr className='border-b border-border bg-muted/50'>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold w-full sm:w-auto'>Objectives</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Work Status</th>
                        <th className='px-2 sm:px-4 py-3 text-left text-primary font-semibold hidden sm:table-cell'>Problems Met</th>
                      </tr>
                    </thead>
                    <tbody className='block sm:table-row-group space-y-3 sm:space-y-0'>
                      <tr className='border-b sm:border-b border-border bg-muted/30 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none block sm:table-row mb-3 sm:mb-0'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Monitor the implemented laboratory system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Observed and monitored the effectiveness of the implemented system</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Minor adjustments were still needed for smoother operation</td>
                      </tr>
                      <tr className='border-b border-border'>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Continue assisting users and maintaining laboratory operations</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Assisted laboratory users and maintained organized operations</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Simultaneous technical concerns occasionally delayed assistance</td>
                      </tr>
                      <tr>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Ensure overall cleanliness and proper organization of the laboratory</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Continued maintaining cleanliness and proper arrangement of equipment</td>
                        <td className='px-2 sm:px-4 py-2 sm:py-3 text-muted-foreground block sm:table-cell'>Maintaining all laboratory areas consistently required continuous monitoring</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Internship Analysis Report */}
          <section id='section-analysis'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center gap-3'>
              <BarChart3 className='w-5 sm:w-6 h-5 sm:h-6 text-primary' />
              Internship Analysis Report
            </h2>
            <p className='text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8'>Reflection on the Multimedia and Speech Laboratory internship experience</p>
            
            <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-lg sm:rounded-2xl p-4 sm:p-8 space-y-6 sm:space-y-8'>
              {/* 1. Setting */}
              <div className='border-l-4 border-primary pl-6 py-4'>
                <h3 className='text-foreground font-bold text-lg mb-4'>1. Setting</h3>
                
                <div className='space-y-4'>
                  <div>
                    <p className='text-primary font-semibold mb-2'>Why the setting was good:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      The setting was good because it provided a supportive and well-organized environment that allowed me to apply my academic knowledge to real-world tasks during my internship.
                    </p>
                  </div>
                  <div>
                    <p className='text-primary font-semibold mb-2'>Initial analysis of the agency:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      My initial analysis of the agency or organization during my internship was that it operates with a structured system and clear division of responsibilities, which helps ensure that tasks are completed efficiently. I observed that the organization values teamwork, communication, and proper coordination among staff, which contributes to a smooth workflow.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Site Supervisor */}
              <div className='border-l-4 border-primary pl-6 py-4'>
                <h3 className='text-foreground font-bold text-lg mb-4'>2. Site Supervisor</h3>
                
                <div className='space-y-4'>
                  <div>
                    <p className='text-primary font-semibold mb-2'>Greatest contribution of the site supervisor:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      The greatest contribution made by the site supervisor during my internship was the consistent guidance and support that helped me understand my tasks and responsibilities more clearly.
                    </p>
                  </div>
                  <div>
                    <p className='text-primary font-semibold mb-2'>What could have been improved:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      I needed more from the supervisor in the way of more frequent feedback and closer guidance during the early part of my internship, especially when I was still adjusting to the workflow and tasks.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Environmental conditions or events */}
              <div className='border-l-4 border-primary pl-6 py-4'>
                <h3 className='text-foreground font-bold text-lg mb-4'>3. Environmental conditions or events</h3>
                
                <div className='space-y-4'>
                  <div>
                    <p className='text-primary font-semibold mb-2'>Event that influenced the internship:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      The one event/characteristic that really influenced my internship was the hands-on exposure to real workplace tasks and responsibilities.
                    </p>
                  </div>
                  <div>
                    <p className='text-primary font-semibold mb-2'>Significant negative instances:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      During my internship I came across no instance which affected me significantly.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Self-Assessment */}
              <div className='border-l-4 border-primary pl-6 py-4'>
                <h3 className='text-foreground font-bold text-lg mb-4'>4. Self-Assessment</h3>
                
                <div className='space-y-4'>
                  <div>
                    <p className='text-primary font-semibold mb-2'>Most important learning:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      The most important thing I learned during my internship is how to apply theoretical knowledge in real-world situations while also developing professionalism in the workplace. I learned that tasks require not only technical skills but also patience, effective communication, and proper time management to be completed successfully.
                    </p>
                  </div>
                  <div>
                    <p className='text-primary font-semibold mb-2'>Contribution to the organization:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      I spent my time at the organization by sharing my class knowledge and skills with others.
                    </p>
                  </div>
                  <div>
                    <p className='text-primary font-semibold mb-2'>If repeating this internship:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      If I were to repeat this internship experience, I would focus more on being proactive and fully engaging in every assigned task, from the start. I would take more initiative in asking questions and seeking clarification whenever I am unsure, so I could learn faster and avoid repeating mistakes.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. General */}
              <div className='border-l-4 border-primary pl-6 py-4'>
                <h3 className='text-foreground font-bold text-lg mb-4'>5. General</h3>
                
                <div className='space-y-4'>
                  <div>
                    <p className='text-primary font-semibold mb-2'>Ways to strengthen the internship:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      The internship experience can be strengthened by providing more structured orientation and clearer guidelines at the beginning of the program so that interns can easily understand their roles and responsibilities.
                    </p>
                  </div>
                  <div>
                    <p className='text-primary font-semibold mb-2'>Recommendations for future interns:</p>
                    <p className='text-muted-foreground text-sm leading-relaxed italic'>
                      Future interns should be prepared to actively engage in learning by being observant, responsible, and open to feedback throughout their internship.
                    </p>
                  </div>
                  <div className='bg-muted/50 p-3 rounded border border-amber-500/30'>
                    <p className='text-xs text-muted-foreground italic'>
                      Note: This analysis need not to be shared with the site supervisor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className='text-center pt-8 pb-4 border-t border-border/50 mt-16'>
          <p className='text-xs text-muted-foreground'>
            E-Portfolio | Rachelle Mae B. Tan
          </p>
        </div>
      </div>
    </div>
  );
}
