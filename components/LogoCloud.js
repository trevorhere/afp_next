import Image from 'next/image'

export default function LogoCloud({logos}){
  return (
    <div className="bg-gray-800 ">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <h2 className="max-w-md mx-auto text-3xl font-medium text-white text-center lg:max-w-xl lg:text-left">
          Trusted by firefighting professionals everywhere.
        </h2>
        <div className="flow-root self-center mt-8 lg:mt-0">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            {logos.map(logo => (
              <div key={logo.src} className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <Image className="h-12" 
                  src={logo.src}
                  alt={logo.alt} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
