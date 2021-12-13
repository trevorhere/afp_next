import Image from 'next/image'

export default function LogoCloud({logos}){
  return (
<>
<div className="bg-gray-800 items-center flex items-center justify-center container mx-auto sm:px-6 lg:px-8">{/* Content goes here */}
      <div className='flex flex-column flex-wrap space-between  my-14'>
        <div className=' sm:basis-1/2 flex items-center'>
          <h2 className="max-w-lg mx-auto text-5xl font-medium text-white text-center  lg:text-left">
            Trusted by firefighting professionals everywhere.
          </h2>
        </div>
        <div className=" sm:basis-1/2 mt-8 lg:mt-0 ">
          <div className="flex flex-wrap justify-between w-full ">
            {logos.map(logo => (
              <div key={logo.src} className="m-4 w-24 h-auto lg:w-auto lg:h-auto flex flex-grow  justify-center align-center items-center ">
                <img
                  className='h-20 lg:h-24'
                  src={logo.src}
                  alt={logo.alt} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

</div>
</> 

  )
}
