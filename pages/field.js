import { useRouter } from 'next/router'

const images = [
  {
    imageSrc: "https://www.youtube.com/embed/4_pA0FMOuiw?rel=0",
    imageAlt: 'Tanker drop',
    image: false,
    name: 'Tanker Drop'

  },
  {
    imageSrc:"https://www.youtube.com/embed/QJotviQ89kE?rel=0",
    imageAlt: 'Tanker drop',
    image: false,
    name: 'Scooper Drop'

  },
  {
    imageSrc: '/images/field/field_1.jpg',
    imageAlt: 'Tanker drop',
    image: true
  },
  {
    imageSrc: "https://www.youtube.com/embed/NtCdDSHl8no?rel=0",
    imageAlt: 'Smoke generator',
    image: false 
  },
  {
    imageSrc: '/images/field/field_2.jpg',
    imageAlt: 'Tanker drop',
    image: true
  },
  {
    imageSrc: "https://www.youtube.com/embed/BrMad263Bgw?rel=0",
    imageAlt: 'Tanker drop 2',
    image: false 
  },


  {
    imageSrc: '/images/field/field_3.JPG',
    imageAlt: 'Tanker drop',
    image: true
  },
  {
    imageSrc: "https://www.youtube.com/embed/xo1D_JH-Ub0?rel=0",
    imageAlt: 'hot line ',
    image: false 
  },
  {
   imageSrc: "https://www.youtube.com/embed/A1AXqpPg4v4?rel=0",
    imageAlt: 'Tanker drop',
    image: false 
  },

]

export default function Field() {
  const router = useRouter();

  return (
    <>
    <div className="bg-gray-800 ">
    <button
      onClick={(e) => {
        e.preventDefault()
        router.push('/')
      }}
          type="button"
          className="mx-8 mt-8 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-fire hover:bg-fire focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
     >Back</button>

    <div className="max-w-7xl  mx-auto py-12  px-4 sm:py-12 sm:px-6 lg:px-8 lg:flex lg:justify-center">
      <div className="max-w-xl">
        <h2 className="text-4xl text-center font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Field Exercises
        </h2>
        <p className="mt-5 text-xl text-gray-400 text-center">
        In-field training exercises developed specifically for your team, based on real world scenarios.
        </p>
      </div>
    </div>
  </div>
    <div className="container mx-auto sm:px-6 lg:px-8">
 {/* <div className="pb-16 overflow-hidden lg:pb-24"> */}
      {/* <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
       

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
      </div> */}
    {/* </div> */}
    {/* <Divider></Divider> */}

    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <div className="max-w-3xl">
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Simulated Environment</p>
          <p className="mt-4 text-gray-500">
            Ground-based role player perspectives with realistic mobility and visibility, as well as non-flying aerial perspectives, offer the ability to create more integrated multidisciplinary simulations than ever before.
          </p>
        </div> */}

        <div className="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {images.map((image, i) => (
            <div key={i} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-md text-center font-medium px-2 text-gray-900">{image?.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{image?.description}</p>
              </div>
              { !image?.image 
          ? (<div className="aspect-w-16 aspect-h-12">
              <iframe 
              src={image.imageSrc}
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>)
          :
              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <img src={image.imageSrc} alt={image.imageAlt} className="object-center object-cover" />
              </div>


              }
            </div>
          ))}
        </div>
        {/* <FS3D_Offering 
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
        ></FS3D_Offering> */}
      </div>
    </div>
    </div>
    </>
)}
