import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Offering from '../components/Offering'
import FS3D_Offering from '../components/FS3D_Offering' 
import AFP_Offering from '../components/AFP_Offering'
import Offering1 from '../components/Offering1'
import Offering2 from '../components/Offering2'
import Offering3 from '../components/Offering3'
import Divider from '../components/Divider'
import LogoCloud from '../components/LogoCloud'
import OurTeam from '../components/OurTeam'

export default function Home() {
  return (
    <div >
      <Head>
        <title>AFP</title>
        <meta name="Anchor Flank & Pinch" content="Leaders in wildland firefighting training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero className="w-full"></Hero>
      <main className={styles.main}>
        <p className="my-24 text-5xl font-extrabold text-gray-900 tracking-tight">What We Do</p>
        <Divider></Divider>

        {/* <AFP_Offering></AFP_Offering> */}
        <Offering
          imageRight={true}
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
              description: 'We maintain active relationships with active wildland firefights who are available and ready to train.' 
            },
            {
              title: 'Performance review and evaluation',
              description: 'We provide a comprehensive performance review and evaluation process that complements current industry standards.'
            },
            {
              title: 'Ground tactics and strategy',
              description: 'In addition to aerial training, we train best practices for crew working on the ground.'
            },
          ]}
        ></Offering>
        <Divider></Divider>
        <Offering
          imageRight={false}
          imageSrc={'/images/classroom.png'}
          title='Classroom Training'
          description='An engaging course curriculum and discussion led by a cadre with decades of aerial and ground firefighting training and education experience. Topics include, but are not limited to:'
          bullets={[
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
              title: 'Mission CRM/Human Factors',
              description: `Classroom discussion and exercises that will enhance tactical CRM between flight crew members and ground forces in order to achieve mission objectives with a safe, efficient, and effective goal.`
            },
            {
              title: 'Fire Traffic Area (FTA)',
              description: `History, structural dimensions, and rules of engagement for operations within Incident Airspace.`
            },

            // {title: 'Initial attack & size up', description: '' },
          ]}
        ></Offering>
        <Divider></Divider>
        <FS3D_Offering 
          video={null}
          bgLight={true}
          showButton={true}
          title='FS3D Virtual Reality Simulations '
          description='Immersive digital wildfire training using state of the art Virtual Reality hardware and software. '
          images={[
            {
              src: '/images/gifs/fs3d_1gif.gif',
              alt: 'pilot view'
            },
            {
              src: '/images/gifs/fs3d_6gif.gif',
              alt: 'pilot view'
            },
            {
              src: '/images/gifs/fs3d_3gif.gif',
              alt: 'pilot view'
            },
            {
              src: '/images/gifs/fs3d_5gif.gif',
              alt: 'pilot view'
            }
          ]}
          bullets={[
            {title: 'Real-time multi-user interaction', description: 'Run incident simulations with full teams including air attacks, pilots, ground crew, etc.' },
            {title: 'Over 20 flight platforms and configurations', description: 'Train on widely used fixed wing and rotary wing platforms with accurate tank and drop controller configurations.' },
            {title: '360 degree field-of-view simulations', description: 'Use immersive Virtual Reality head sets that allow a comlete view of the aircraft and environment.' },
            {title: 'Control fire and environment characteristics', description: 'Fine tune fire behaivor and suppresion, smoke dispersion and other environment characteristics.' },
          ]}
        ></FS3D_Offering>
        {/* <Offering
          title="Field Exercises"
          description="In-field training exercises developed specifically for your team, based on real world scenarios."
        />
        <Divider></Divider>
        <Offering
          title="Classroom"
          description="An engaging course curriculum taught by experts with decades of firefighter training and education experience. "
        />
        <Divider/>
        <Offering
          title="FS3D VR Training"
          description="Immersive digital wildfire training using state of the art Virtual Reality hardware and software."
        /> */}
        <LogoCloud
          logos={[
            {
              "src": "/images/orgs/usfs.png",
              "alt": "USFS",
            },
            {
              "src": "/images/orgs/NAFRI_1.png",
              "alt": "NAFRI",
            },
            {
              "src": "/images/orgs/calfire.png",
              "alt": "CALFIRE",
            },
            {
              "src": "/images/orgs/OCFA_logo.png",
              "alt": "OCFA",
            },

            {
              "src": "/images/orgs/nwcg_1.png",
              "alt": "NWCG",
            },
            {
              "src": "/images/orgs/AFRL.png",
              "alt": "AFRL",
            },
        ]}
        ></LogoCloud>
        <OurTeam
        people={[{
          name: 'Joel Lane',
          role: 'Director, AFP',
          imageUrl: '/images/joel/joel.png',
          bio: `
          Joel has served over 40 years as a firefighter for the USFS. He worked on the ground for 20  years as a hotshot, squad boss, Captain and Superintendent. Joel spent the last 20 years of his career in the air as an Air Attack, Air Attack Trainer, and Forest Aviation Officer. He is currently working with OCFA's Quick Reaction Force where they are pioneering in the aerial fire fighting space. `,
          twitterUrl: 'https://twitter.com/zunibirdjoel',
          linkedinUrl: 'https://www.linkedin.com/in/joel-lane-21204656',
        },
     {
          name: 'Ken Perry',
          role: 'Director, AFP',
          imageUrl: '/images/ken/ken.png',
          bio: `

          Ken has over 35 years of firefighting experience. He worked as a hotshot before transitioning to the air as a Smoke Jumper. After jumping for 8 years, Ken became a Division Supervisor, Incident III Commander, & FAA Senior Parachute Rigger/Test Jumper. Ken then served as an Air Tactical Group Supervisor. He currently serves as an aerial firefighting instructor across multiple organizations. 
          `

        },
        {
          name: 'Gus Johnson',
          role: 'Director, AFP',
          imageUrl: '/images/gus/gus_1.png',
          bio: `

            Gus has served over 30 years as firefighter as a Battalion Chief, Chief Officer, Logistics Section Chief, & Air Operations Branch Director. He has fought fire as an Air Attack for over 20 years, and has served as an Air Tactis Group Supervisor. Gus continues to work with OFCA's Quick Reaction Force in addition to instructing aerial fire fighters in various organizations.
          `,
        } 
      ]}

        ></OurTeam>
      </main>
      <footer>
      </footer>
    </div>
  )
}
