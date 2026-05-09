import { useEffect } from 'react';
import { Eye, CheckCircle, Network, Shield, Database, Wrench, Monitor } from 'lucide-react';

const SECTION_ANCHORS = {
  'company-profile': 'section-overview',
  'company-overview': 'section-overview',
  'company-nature': 'section-nature',
  'company-mission': 'section-mission',
  'company-history': 'section-history',
  'company-structure': 'section-structure',
};

export function CompanyProfile({ section }) {
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
    <div className='min-h-screen p-4 sm:p-6 md:p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-muted-foreground mb-8'>
          <span className='text-primary'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>II. Company Profile</span>
        </div>

        <h1 className='text-4xl sm:text-5xl font-bold text-foreground mb-10'>Company Profile</h1>

        <div className='space-y-16'>
          
          {/* Section 1: Company Overview */}
          <section id='section-overview'>
            <div className='mb-8'>
              <h2 className='text-2xl sm:text-3xl font-bold text-foreground mb-2'>Company Overview</h2>
              <p className='text-sm text-muted-foreground'>Overview of Occidental Mindoro State College</p>
            </div>
            
            <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-10 mb-8 shadow-xl'>
              <p className='text-muted-foreground leading-relaxed mb-6'>
                Occidental Mindoro State College is the only state college in the province of Occidental Mindoro located in the heart of the municipality of San Jose, which is a stone&apos;s throw away from the Municipal Hall and the St. Joseph, The Worker Cathedral. The town is located 130 kilometers southeast of the Provincial Capital and approximately 230 nautical miles from the National Capital Region.
              </p>
              
              <p className='text-muted-foreground leading-relaxed mb-8'>
                OMSC is a premier higher education institution dedicated to developing globally competitive, locally responsive, and innovative professionals while fostering life-long learners. The college provides a comprehensive range of academic programs and support services, including the BSIT Faculty which provides technology-based learning facilities and services for students and faculty members pursuing IT education and professional development.
              </p>
              
              <div className='mt-8 pt-8 border-t border-primary/20'>
                <h3 className='text-lg font-semibold text-foreground mb-6'>Primary Functions</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='flex gap-4 p-6 bg-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all'>
                    <div className='flex-shrink-0'>
                      <Database className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-foreground mb-2'>Computer Laboratory Management</h3>
                      <p className='text-muted-foreground text-sm leading-relaxed'>Maintains and organizes computer units and laboratory equipment to ensure proper functionality and efficient use.</p>
                    </div>
                  </div>

                  <div className='flex gap-4 p-6 bg-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all'>
                    <div className='flex-shrink-0'>
                      <Monitor className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-foreground mb-2'>Multimedia and Technology Support</h3>
                      <p className='text-muted-foreground text-sm leading-relaxed'>Provides multimedia resources, internet access, and technology-assisted learning services for students and faculty.</p>
                    </div>
                  </div>

                  <div className='flex gap-4 p-6 bg-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all'>
                    <div className='flex-shrink-0'>
                      <Wrench className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-foreground mb-2'>System Development and Implementation</h3>
                      <p className='text-muted-foreground text-sm leading-relaxed'>Develops and implements simple laboratory systems such as inventory and attendance management systems to improve laboratory operations.</p>
                    </div>
                  </div>

                  <div className='flex gap-4 p-6 bg-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all'>
                    <div className='flex-shrink-0'>
                      <Shield className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-foreground mb-2'>Technical and User Assistance</h3>
                      <p className='text-muted-foreground text-sm leading-relaxed'>Assists students, faculty, and laboratory users in operating computer systems, applications, and other laboratory resources.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Nature of Agency */}
          <section id='section-nature'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-1'>Nature of the Agency</h2>
            <p className='text-sm text-muted-foreground mb-6'>Functions and responsibilities of the BSIT Faculty</p>
            
            <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-10 shadow-xl'>
              <p className='text-muted-foreground leading-relaxed mb-8'>
                The Bachelor of Science in Information Technology (BSIT) Faculty at Occidental Mindoro State College is an academic department dedicated to developing competent and responsible IT professionals. The BSIT Faculty operates a state-of-the-art computer laboratory that serves as the primary learning environment for students pursuing technology and information systems education. This facility provides comprehensive support for academic activities, practical training, and hands-on learning experiences in software development, networking, system administration, and database management.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-8'>
                The faculty is supervised and maintained by assigned personnel, including the Laboratory Custodian, who ensures that all computer systems, applications, equipment, and facilities are properly configured, organized, and maintained. The BSIT Faculty supports various operational functions including laboratory management, equipment maintenance and inventory, system administration, academic documentation, facility cleanliness and organization, student assistance, and technical support to promote a safe and conducive learning environment.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-8'>
                The laboratory is supervised and maintained by assigned personnel, including the Laboratory Custodian, who ensures that all equipment, systems, and facilities are functional, organized, and properly utilized. It also supports system development, inventory management, database integration, and other technical tasks that contribute to efficient laboratory operations and quality educational services.
              </p>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='flex flex-col items-center'>
                  <div className='w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-4 border-2 border-primary/30 shadow-lg hover:shadow-xl transition-shadow'>
                    <img 
                      src='/1.png' 
                      alt='Computer Laboratory Management' 
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-4 border-2 border-primary/30 shadow-lg hover:shadow-xl transition-shadow'>
                    <img 
                      src='/2.png' 
                      alt='Multimedia and Technology Support' 
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-4 border-2 border-primary/30 shadow-lg hover:shadow-xl transition-shadow'>
                    <img 
                      src='/3.png' 
                      alt='System Development and Implementation' 
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-4 border-2 border-primary/30 shadow-lg hover:shadow-xl transition-shadow'>
                    <img 
                      src='/2.png' 
                      alt='Technical and User Assistance' 
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Section 3: Vision & Mission */}
          <section id='section-mission'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-1'>Vision, Mission, Goals & Objectives</h2>
            <p className='text-sm text-muted-foreground mb-6'>The guiding principles of Occidental Mindoro State College</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
              <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 shadow-xl'>
                <div className='flex items-center gap-3 mb-6'>
                  <Eye className='w-6 h-6 text-primary' />
                  <h3 className='text-lg font-semibold text-foreground'>Vision</h3>
                </div>
                <p className='text-muted-foreground leading-relaxed text-base'>
                  A premier higher education institution that develops globally competitive, locally responsive, innovative professionals, and life-long learners.
                </p>
              </div>

              <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 shadow-xl'>
                <div className='flex items-center gap-3 mb-6'>
                  <CheckCircle className='w-6 h-6 text-primary' />
                  <h3 className='text-lg font-semibold text-foreground'>Mission</h3>
                </div>
                <p className='text-muted-foreground leading-relaxed text-base'>
                  OMSC is committed to produce intellectual and human capital by developing excellent graduates through outcomes-based instruction, relevant research, responsive technical advisory services, community engagement, and sustainable production.
                </p>
              </div>
            </div>

            <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 shadow-xl'>
              <h3 className='text-lg font-semibold text-foreground mb-6'>Goals & Objectives</h3>
              <div className='space-y-3'>
                <div className='flex gap-4 items-start'>
                  <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-semibold text-primary'>1</span>
                  <p className='text-muted-foreground leading-relaxed'>To continually increase access to quality education</p>
                </div>
                <div className='flex gap-4 items-start'>
                  <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-semibold text-primary'>2</span>
                  <p className='text-muted-foreground leading-relaxed'>To ensure a high completion rate of students admitted in respective programs</p>
                </div>
                <div className='flex gap-4 items-start'>
                  <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-semibold text-primary'>3</span>
                  <p className='text-muted-foreground leading-relaxed'>To improve the adequacy of facilities and infrastructure that is in line with specified regulations and requirements</p>
                </div>
                <div className='flex gap-4 items-start'>
                  <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-semibold text-primary'>4</span>
                  <p className='text-muted-foreground leading-relaxed'>To progressively increase internal research funding and dissemination of research findings that positively impact communities</p>
                </div>
                <div className='flex gap-4 items-start'>
                  <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-semibold text-primary'>5</span>
                  <p className='text-muted-foreground leading-relaxed'>To improve recruitment of qualified staff and continuously enhance their skills, expertise, and competency</p>
                </div>
                <div className='flex gap-4 items-start'>
                  <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-semibold text-primary'>6</span>
                  <p className='text-muted-foreground leading-relaxed'>To attain student satisfaction</p>
                </div>
                <div className='flex gap-4 items-start'>
                  <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-semibold text-primary'>7</span>
                  <p className='text-muted-foreground leading-relaxed'>To achieve set of performance targets</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: History & Background */}
          <section id='section-history'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-1'>History & Background</h2>
            <p className='text-sm text-muted-foreground mb-6'>The development and growth of Occidental Mindoro State College</p>
            
            <div className='bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 sm:p-10 shadow-xl'>
              <div className='space-y-6 text-muted-foreground leading-relaxed'>
                <p>
                  Occidental Mindoro State College had its humble beginning as a Barrio High School in 1966, patterned after Dr. Pedro Orata&apos;s Barangay High School. This idea was conceived by San Jose Pilot Elementary School PTA President and town Mayor Juan G. Santos, Sr. and worked out by the Schools Division Superintendent, Mr. Sofronio Fadre and East District Supervisor, Mr. Mariano Ramirez. Mayor Tirso Abeleda in 1967 approved Resolution No. 23, adopting and constituting the self-supporting public secondary school as the San Jose Municipal High School.
                </p>

                <p>
                  The late Congressman Pedro C. Medalla, Sr. authored R.A. No. 6568, which elevated San Jose Municipal High School into San Jose National High School (SJNHS). Mr. Bernabe Macaraig I was appointed Principal, and enrollment grew significantly during that time, reaching up to 3,000 students.
                </p>

                <p>
                  On June 24, 1986, by virtue of Batas Pambansa Blg. 531, sponsored by the late Congressman Pedro T. Mendiola, Sr., SJNHS was elevated into Occidental Mindoro State College with Mr. Bernabe Macaraig as its first Superintendent. On April 1, 1986, the Ministry of Educational Culture and Sports (MECS) Minister, Lourdes R. Quisumbing, appointed Mrs. Virginia A. Sicat, then Assistant Principal, as Officer-In-Charge of OMSC. Dr. Ofelia A. Rebong was installed as the first President of the College that same year.
                </p>

                <p>
                  During Dr. Rebong&apos;s seven-year term as College President, staff development was given due consideration. In the school year 1991-1992, the College absorbed the Occidental Mindoro Community College in Mamburao as a satellite campus offering baccalaureate and non-degree courses. The college also acquired a 98.8725-hectare lot from the Organization for the International Scientific and Cultural Advancement Council (OISCA) through the Provincial Board and Provincial Development Council, which became known as the OMSC-Mamburao Campus.
                </p>

                <p>
                  After Dr. Rebong&apos;s retirement, Dr. Sofronio S. Sanqui, the then Vice President for Academic Affairs and Dean of the Graduate School, was appointed College President on December 19, 1994 and sworn into office on December 29, 1994 by DECS Secretary Ricardo T. Gloria. Focusing on human resource development and student welfare, Dr. Sanqui&apos;s management priorities brought about significant shifts in the social, cultural, and economic structure of the College.
                </p>

                <p>
                  OMSC has grown tremendously and has opened up four service areas: the Damayan Center constructed in a 2-hectare land donated by Mr. Romeo Lumbo in San Isidro, San Jose; OMSC-Mamburao; the Experimental Forestry 28.4974-hectare land adjacent to the Damayan Center; the Caminawit Extension Program in Caminawit, San Jose; and the Agro-Forestry Center fully developed on an 8.7-hectare land at Brgy. Labangan, San Jose.
                </p>

                <p>
                  In the year 2000, R.A. 8760, otherwise known as the General Appropriations Act, brought about significant reforms in the educational system, especially to OMSC. It became the host CHED-supervised institution in the province for the Occidental Mindoro Polytechnic College (OMPC) in Murtha, San Jose and the Pedro T. Mendiola, Sr. Memorial Technological and Polytechnic College in Brgy. Bagong Sikat. With the integration, OMPC became known as OMSC-OMPC Campus while the PTMSMTPC was renamed to OMSC-PTMSMTPC and now situated at the Labangan Campus.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Organizational Structure */}
          <section id='section-structure'>
            <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-1'>Organizational Structure</h2>
            <p className='text-sm text-muted-foreground mb-6'>The organizational hierarchy of the Records Office</p>
            
            <div className='bg-secondary/50 backdrop-blur border border-border/50 rounded-2xl p-6 sm:p-10'>
              <div className='flex items-center justify-center'>
                <img 
                  src='/organizational.png' 
                  alt='Records Office Organizational Structure' 
                  className='max-w-full h-auto rounded-lg border border-border/50'
                />
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
