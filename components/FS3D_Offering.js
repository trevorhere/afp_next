import Image from 'next/image'

export default function FS3D_Offering({title, description, images, bullets }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-gray-500">{description}</p>
            <button
            type="button"
            className=" my-5 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-fire hover:bg-fire focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           > Learn More
          </button>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {bullets.map((bullet) => (
              <div key={bullet?.title} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{bullet?.title}</dt>
                <dd className="mt-2 text-sm text-gray-500">{bullet?.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image) => (
            <img
              key={image?.src}
              src={image.src}
              alt={image.alt}
              className="bg-gray-100 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
