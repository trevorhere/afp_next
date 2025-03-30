import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Offering from '../components/Offering'
import FS3D_Offering from '../components/FS3D_Offering'
import Divider from '../components/Divider'
import LogoCloud from '../components/LogoCloud'
import OurTeam from '../components/OurTeam'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  return (
    <div >
      <Nav />
      <Head>
        <title>AFP</title>
        <meta name="Anchor Flank & Pinch" content="Leaders in wildland firefighting training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero className="w-full"></Hero>

      <main id="what_we_do" className={styles.main}>
        {/* <p className="my-24 text-5xl font-extrabold text-gray-900 tracking-tight">What We Do</p>
        <Divider></Divider> */}


        <Offering
          component_id='field_exercises'
          imageRight={true}
          showButton={true}
          buttonLink='/field'
          buttonText='View Gallery'
          imageSrc={'/images/TankerDrop.png'}
          title='Field Exercises'
          description='In-field training exercises developed specifically for your team, based on real world scenarios.'
          // description='We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily use.'
          bullets={[
            {
              title: 'Live simulation fire exercises',
              // description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.' 
              description: 'Apply lessons learned in the classroom on live fire simulation exercises. '
            },
            {
              title: 'Integration with current wildland firefighters',
              description: 'We maintain active relationships with active wildland firefighters who are available and ready to train.'
            },
            {
              title: 'Performance review and evaluation',
              description: 'We provide a comprehensive performance review and evaluation process that complements current industry standards.'
            },
            {
              title: 'Ground tactics and strategy',
              description: 'In addition to aerial training, we instruct on best practices for crews working on the ground.'
            },
          ]}
        ></Offering>
        <Divider></Divider>
        <Offering
          id="classroom_training"
          component_id='classroom_training'
          imageRight={false}
          showButton={true}
          buttonLink='/classroom'
          buttonText='View Gallery'
          imageSrc={'/images/classroom.png'}
          title='Classroom Training'
          description='An engaging course curriculum and discussion led by a cadre with decades of aerial and ground firefighting training and education experience. Topics include, but are not limited to:'
          bullets={[
            {
              title: 'Mission CRM/Human Factors',
              description: `Classroom discussion and exercises that will enhance tactical CRM between flight crew members and ground forces in order to achieve mission objectives with a safe, efficient, and effective goal.`
            },
            {
              title: 'Incident Command System (ICS)',
              description: 'Basic information on the concept and implementation of the ICS, with emphasis on air and ground operations.'
            },
            {
              title: 'Sand Table Exercises (STEX)',
              description: `Used as a time compressed tactical exercise for group settings. Sand Tables also serve as tools for After Action Review (AAR) discussions, as well as creative, and visual environments for sharing creative strategy/ tactics, lessons learned, and best practices.`
            },
            {
              title: 'Fire Anatomy/Terminology/Fire Behavior & Fuels',
              description: `Identify and discuss key visual indicators of fire behavior, emphasizing Incident size-up, and communicating, indicators to incident commanders, chief officers, aviators, ground forces and coordinators.`
            },
            {
              title: 'Fire Traffic Area (FTA)',
              description: `History, structural dimensions, and rules of engagement for operations within Incident Airspace.`
            },

            // {title: 'Initial attack & size up', description: '' },
          ]}
        ></Offering>
        <LogoCloud
          logos={[
            {
              "src": "/images/orgs/usfs.png",
              "alt": "USFS",
              "className": "h-20 lg:h-24",
              "width": 100,
              "height": 100
            },
            {
              "src": "/images/orgs/NAFRI_1.png",
              "alt": "NAFRI",
              "className": "h-20 lg:h-24",
              "width": 140,
              "height": 100,
            },
            {
              "src": "/images/orgs/OCFA_logo.png",
              "alt": "OCFA",
              "className": "h-20 lg:h-24",
              "width": 100,
              "height": 100,
            },
            {
              "src": "/images/orgs/conair.png",
              "alt": "CONAIR",
              "className": "h-20 lg:h-24",
              "width": 200,
              "height": 100,
            },
            {
              "src": "/images/orgs/perimeter.png",
              "alt": "PERIMETER",
              "className": "h-20 lg:h-24",
              "width": 450,
              "height": 100,
            },
            {
              "src": "/images/orgs/neptune.png",
              "alt": "NEPTUNE",
              "className": "h-20 lg:h-24",
              "width": 300,
              "height": 100,
            },
            {
              "src": "/images/orgs/aeroflite.png",
              "alt": "AEROFLITE",
              "className": "h-20 lg:h-24",
              "width": 300,
              "height": 100,
            },
            {
              "src": "/images/orgs/rutledge.png",
              "alt": "RUTLEDGE",
              "className": "h-20 lg:h-24",
              "width": 300,
              "height": 100,
            },
            {
              "src": "/images/orgs/cyga.png",
              "alt": "CYGA",
              "className": "h-20 lg:h-24",
              "width": 300,
              "height": 150,
            },
            {
              "src": "/images/orgs/quebec.png",
              "alt": "QUEBEC",
              "className": "h-20 lg:h-24",
              "width": 300,
              "height": 200,
            }
          ]}
        ></LogoCloud>
        <OurTeam
          id="our_team"
          title='Meet Our Leadership'
          subtitle='Over a century of combined wildland firefighting experience.'
          type='leaders'
          people={[{
            name: 'Joel Lane',
            role: 'CEO, Co-Founder',
            email: 'zunibird13@gmail.com',
            phone: '559 310 9430',
            imageUrl: '/images/joel/joel_bio.jpg',
            bio: `
          Joel has served over 45 years as a firefighter for the USFS. He worked on the ground for 20  years as a hotshot, squad boss, Captain and Superintendent. Joel spent the last 20 years of his career in the air as an Air Attack, Air Attack Trainer, and Forest Aviation Officer. He is currently working with OCFA's Quick Reaction Force where they are pioneering in the aerial fire fighting space. `,
            twitterUrl: 'https://twitter.com/zunibirdjoel',
            linkedinUrl: 'https://www.linkedin.com/in/joel-lane-21204656',
          },
          {
            name: 'Gus Johnson',
            role: 'Co-Founder',
            email: 'pvjhnson@gmail.com',
            phone: '559 708 3570',
            imageUrl: '/images/gus/gus_bio.jpg',
            bio: `

            Gus has served over 50 years as firefighter, Battalion Chief, Chief Officer, Logistics Section Chief, & Air Operations Branch Director. Gus has over 25 years of experience as an Air Tactical Group Supervisor. Gus is currently the lead program manager for the South Fire Integrated Real-Time Intelligence System (FIRIS).
          `,
          }
          ]}

        ></OurTeam>
        <Divider></Divider>
        <OurTeam
          id="our_team"
          title='Meet Our Instructors'
          type='instructors'
          subtitle='Our instructors bring real-world expertise and hands-on experience to provide you with the most effective wildland firefighting training.'
          people={[{
            name: 'Ira Peshkin',
            role: 'Instructor',
            imageUrl: '/images/ira_peshkin/ira_peshkin.JPEG',
            bio: `Retired Deputy Chief, Kern County F.D., Ira has over 35 years of experience with both Federal and Local government agencies.`,

          },
          {
            name: 'Ken Craw',
            role: 'Instructor',
            imageUrl: '/images/craw/ken_craw.jpg',
            bio: `Retired Division Chief, Cal-Fire, Ken jas over 40 years of experience and is currently active as a Helicopter Coordinator and Air Attack Group Supervisor.`
          ,
          },
          {
            name: 'Jarran Flinders ',
            role: 'Instructor',
            imageUrl: '/images/jarran_flinders/jarran_flinders.JPEG',
            bio: `Retired Deputy Chief U.S. Forest Service, Jarran has over 40 of years experience and is currently active and qualified as Helicopter Coordinator and Air Attach Group Supervisor.`
          ,
          },
          {
            name: 'Mark Winkelman',
            role: 'Instructor',
            imageUrl: '/images/mark_winkelman/mark_winkelman.JPEG',
            bio: `Retired Division Chief, Reno City F.D., Mark has over 40 years of experience and is currently active and qualified as Helicopter Coordinator and Air Tactical Group Supervisor.`
          ,
          },
          {
            name: 'Mike Lynn',
            role: 'Instructor',
            imageUrl: '/images/mike_lynn/mike_lynn.JPEG',
            bio: `Retired Lead Plane Pilot, Bureau of Land Management, Retired Director of Safety, Aero-Flite, Mike has over 50 years of experience. `
          ,
          }
          ]}
        ></OurTeam>
      </main>
      <footer>
      </footer>
    </div>
  )
}
