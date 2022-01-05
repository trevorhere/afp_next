/* This example requires Tailwind CSS v2.0+ */

import {AdjustmentsIcon, MapIcon, SearchCircleIcon} from '@heroicons/react/outline'
import FS3D_Offering from '../components/FS3D_Offering'
import Divider from '../components/Divider'

const communicationFeatures = [
  {
    id: 1,
    name: 'High fidelity virtural environment',
    description:
      'Fire, smoke, weather, structures and aircraft are rendered in precise detail using advanced visual simulation software.',
    icon: MapIcon,
  },
  {
    id: 2,
    name: 'Accurate aircraft physical models with firefighting modifications',
    description: `All currently active aircraft types used in wildland firefighting are available, with gross weights, CG, and performance tuned to match firefighting specifications.`,
    icon: SearchCircleIcon,
  },
  {
    id: 3,
    name: 'Fine-tuned incident simulations',
    description: `Weather, fuels and natural or man-made barriers are initialized from real-world data and adjustable during a simulation, with immediate recalculation of fire progression after every change.`,
    icon: AdjustmentsIcon,
  },
]

const simulatedEnvironmentFeatures = [
  {
    name: 'Controls & Immersion',
    description: `Realistic flight controls with advanced, multi-channel radio emulation incorporating real background noise are combined with the latest high-performance Virtual Reality equipment to produce a level of student immersion that is closer than ever to real life.`,
    imageSrc: '/images/FS3D/pilot_1.png',
    imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
  },
  {
    name: 'Fire Behavior & Characteristics',
    description: `FS3D provides the most realistic wildfire simulations by using the latest scientific fire behavior modeling, coupled with real-world suppression performance and effectiveness data.`,
    imageSrc: '/images/gifs/fire_wind_change_1.gif',
    imageAlt: 'Green cardstock box open with 50 cards inside.',
  },
  {
    name: 'Online or offline multiplayer support',
    description: 'Bring FS3D to in-person training wherever you are or bring your trainees together, virtually, in FS3D from anywhere in the world.',
    imageSrc: '/images/gifs/fs3d_7gif.gif',
    imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
  },
]

export default function fs3d() {
  return (
    <>
    <div className="bg-gray-800 ">
    <div className="max-w-7xl  mx-auto py-24  px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-center">
      <div className="max-w-xl">
        <h2 className="text-4xl text-center font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          FS3D VR Simulations  
        </h2>
        <p className="mt-5 text-xl text-gray-400 text-center">
          Immersive, realistic wildfire training using state of the art Virtual Reality hardware and software. 
        </p>
      </div>
    </div>
  </div>
    <div className="container mx-auto sm:px-6 lg:px-8">
 <div className="pb-16 overflow-hidden lg:pb-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
       

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">The FS3D Platform</h3>
              <p className="mt-3 text-lg text-gray-500">
              FS3D combines lightweight VR headsets, Windows desktops or laptops, and physical flight controls to provide an immersive wildland firefighting experience.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-fire text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10  relative lg:mt-0 lg:col-start-1">
              <div className="aspect-w-16 aspect-h-12">
                <iframe 
                src="https://www.youtube.com/embed/2t806A2GGns"
                 frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Divider></Divider>

    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl">
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Simulated Environment</p>
          <p className="mt-4 text-gray-500">
            Ground-based role player perspectives with realistic mobility and visibility, as well as non-flying aerial perspectives, offer the ability to create more integrated multidisciplinary simulations than ever before.
          </p>
        </div>

        <div className="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {simulatedEnvironmentFeatures.map((feature) => (
            <div key={feature.name} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
              </div>
            </div>
          ))}
        </div>
        <FS3D_Offering 
          preTitle='Case Study'
          bgLight={false}
          title='USAF MAFFS Training'
          description={`The United States Air Force selected FS3D for development and delivery of immersive simulation-based training for the MAFFS program, an Air Force capability that provides surge support to the civilian aerial firefighting fleet in times of high demand.`}
          showButton={false} 
          images={null} 
          video={{src: '', alt: ''}}
          bullets={[
            {title: 'Training On Demand', description: 'Demonstrated mobile, modular, small-footprint, high-throughput immersive training stations to all four MAFFS wings during two preseason training events in May 2021.'},
            {title: 'Equipment Innovation', description: 'Delivered an enhanced prototype system with advanced flight controls, improved VR performance, and a more compact, powerful laptop in a lightweight, durable shipping case.' },
            {title: 'Ultimate Customization', description: 'MAFFS-modified cockpit recreated from photos and descriptions of instrument/flight computer operation with full PFD, flight director and autopilot functionality.' },
            {title: 'Unprecedented Preparation', description: 'Using FS3D, MAFFS pilots experience the complications, errors and omissions of the real fire environment before facing life-and-death decisions while dealing with them.' },
          ]}
        ></FS3D_Offering>
      </div>
    </div>
    </div>
    </>
)}
