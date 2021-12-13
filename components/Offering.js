import Image from 'next/image'

export default function Offering2({imageRight, imageSrc, title, description, bullets}){
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative  my-24">
        <div className={`w- aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full  ${imageRight ? 'right-0 lg:pl-4 xl:pl-16 ' : 'lg:pr-4 xl:pr-16'}`}>
          <img
            src={imageSrc}
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-center object-cover lg:h-full lg:w-full"
          />
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className={`lg:col-start-${imageRight ? '1' : '2'}`}>
            {/* <h2 id="features-heading" className="font-medium text-gray-500">
              Leatherbound Daily Journal
            </h2> */}
            <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">{title}</p>
            <p className="mt-4 text-gray-500">{description}</p>
            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
              {bullets.length && bullets.map((bullet) => (
                <div key={bullet.title}>
                  <dt className="font-medium text-gray-900">{bullet?.title}</dt>
                  <dd className="mt-2 text-gray-500">{bullet?.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
