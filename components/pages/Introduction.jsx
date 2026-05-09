import { useEffect } from 'react';

const SECTION_ANCHORS = {
  'intro-importance': 'section-importance',
  'intro-objectives': 'section-objectives',
  'intro-time-place': 'section-time-place',
};

export function Introduction({ section }) {
  useEffect(() => {
    const anchorId = SECTION_ANCHORS[section];
    if (anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8'>
      <div className='max-w-4xl mx-auto'>

        {/* Breadcrumb */}
        <div className='text-sm text-muted-foreground mb-2'>
          <span className='text-primary'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Introduction</span>
        </div>
        <h1 className='text-4xl sm:text-5xl font-bold text-foreground mb-10'>Introduction</h1>

        <div className='space-y-14'>

          {/* ── A. IMPORTANCE OF INTERNSHIP ── */}
          <section id='section-importance'>
            <div className='mb-6'>
              <h2 className='text-2xl sm:text-3xl font-bold text-foreground mb-2'>Importance of Internship</h2>
              <p className='text-sm text-muted-foreground'>Why on-the-job training matters for student development.</p>
            </div>

            <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 space-y-4 shadow-xl'>
              <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                Internship plays an important role in a student&apos;s academic and professional development because it provides real-world experience beyond the classroom. It allows students to apply the knowledge and skills they have learned in school to actual work situations. This experience helps them better understand their chosen field and prepares them for future careers.
              </p>

              <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                One of the main benefits of an internship is the opportunity to gain practical skills. Students learn how to perform tasks related to their field, follow workplace rules, and work with different types of people. These skills are essential because they cannot always be fully developed through textbooks and lectures alone.
              </p>

              <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                Internships are also very important in building a strong portfolio. A portfolio is a collection of a student&apos;s work, achievements, and experiences that show their abilities. Through internship projects, certificates, and completed tasks, students can present real evidence of their skills and accomplishments, making their portfolio more impressive and credible.
              </p>

              <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                Another importance of internship is that it improves communication and teamwork skills. In a workplace setting, students must interact with supervisors, colleagues, and clients. This helps them learn how to communicate professionally, work effectively in a team, and solve problems collaboratively.
              </p>

              <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                Internships also help students gain confidence and independence. As they are exposed to real job responsibilities, they become more confident in their abilities and decisions. They also learn how to manage their time, handle pressure, and become more responsible in completing their tasks.
              </p>

              <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                Furthermore, internship is a valuable experience that greatly contributes to a student&apos;s personal and professional growth. It strengthens their skills, builds a strong portfolio, and prepares them for future employment. Through internship, students become more equipped, confident, and ready to face the challenges of their chosen careers.
              </p>
            </div>
          </section>

          {/* ── B. OBJECTIVES OF INTERNSHIP ── */}
          <section id='section-objectives'>
            <div className='mb-6'>
              <h2 className='text-2xl sm:text-3xl font-bold text-foreground mb-2'>Objectives of the OJT Program</h2>
              <p className='text-sm text-muted-foreground'>The objective of On-the-Job Training is directly related to the teaching-learning experiences and helps students achieve the following goals.</p>
            </div>

            <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl'>
              <div className='space-y-4'>
                <div>
                  <p className='text-foreground font-semibold text-sm sm:text-base mb-2'>1. Build Career Awareness and Explore Career Paths</p>
                  <p className='text-muted-foreground text-sm leading-relaxed'>Build their career awareness and explore possible career paths. It allows them to experience their chosen profession firsthand, helping them decide if it truly fits their interests and abilities.</p>
                </div>

                <div>
                  <p className='text-foreground font-semibold text-sm sm:text-base mb-2'>2. Develop Technical and Practical Skills</p>
                  <p className='text-muted-foreground text-sm leading-relaxed'>Develop the technical and practical skills of students. Through hands-on tasks, trainees become more competent and confident in performing job-related responsibilities. This prepares them for future employment and improves their work readiness.</p>
                </div>

                <div>
                  <p className='text-foreground font-semibold text-sm sm:text-base mb-2'>3. Enhance Professional Behavior</p>
                  <p className='text-muted-foreground text-sm leading-relaxed'>Enhance students&apos; professional behavior, including communication, teamwork, discipline, and time management. By working in an actual company or organization, students learn how to adapt to workplace standards and expectations.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── C. TIME AND PLACE OF INTERNSHIP ── */}
          <section id='section-time-place'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-1'>Time and Place of the Internship</h2>
            <p className='text-sm text-muted-foreground mb-4'>Official schedule, location, and training details.</p>

            <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 shadow-xl'>
              {/* Place of Practicum */}
              <div>
                <h3 className='text-foreground font-semibold text-base mb-3'>Place of the Practicum</h3>
                <p className='text-foreground text-sm font-medium'>Occidental Mindoro State College (BSIT Faculty)</p>
              </div>

              {/* Morning Schedule */}
              <div>
                <h3 className='text-foreground font-semibold text-base mb-3'>Morning Time</h3>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center py-2 border-b border-primary/20'>
                    <span className='text-muted-foreground text-sm'>Official Time of Arrival:</span>
                    <span className='text-foreground font-medium text-sm'>7:30 AM Monday to Friday</span>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <span className='text-muted-foreground text-sm'>Time of Departure:</span>
                    <span className='text-foreground font-medium text-sm'>12:00 PM Monday to Friday</span>
                  </div>
                </div>
              </div>

              {/* Afternoon Schedule */}
              <div>
                <h3 className='text-foreground font-semibold text-base mb-3'>Afternoon Time</h3>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center py-2 border-b border-primary/20'>
                    <span className='text-muted-foreground text-sm'>Official Time of Arrival:</span>
                    <span className='text-foreground font-medium text-sm'>1:00 PM Monday to Friday</span>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <span className='text-muted-foreground text-sm'>Time of Departure:</span>
                    <span className='text-foreground font-medium text-sm'>8:30 PM Monday to Friday</span>
                  </div>
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
    </div>
  );
}
