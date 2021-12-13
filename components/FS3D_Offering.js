import Image from 'next/image'
import { useRouter } from 'next/router'

export default function FS3D_Offering({title, description, images, bullets, video, showButton, preTitle, bgLight}) {
  const router = useRouter();
  return (
    <div className={bgLight ? ' bg-white ' : ' bg-gray-800 rounded-xl'}>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-10 sm:my-14 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          {preTitle && <h2 className="py-5 font-semibold text-xl text-fire">{preTitle}</h2> }
          <h2 className={`text-3xl font-extrabold tracking-tight ${bgLight ? 'text-gray-900' : 'text-white'} sm:text-4xl`}>{title}</h2>
          <p className={`mt-4  ${bgLight ? 'text-gray-900' : 'text-white'}`}>{description}</p>
            {showButton && <button
            onClick={(e) => {
              e.preventDefault()
              router.push('/fs3d')
            }}
            type="button"
            className=" my-5 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-fire hover:bg-fire focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
           > Learn More
          </button>}
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {bullets.map((bullet) => (
              <div key={bullet?.title} className="border-t border-gray-100 pt-4">
                <dt className={`font-medium ${bgLight ? 'text-gray-900' : 'text-white'}`}>{bullet?.title}</dt>
                <dd className="mt-2 text-sm text-gray-500">{bullet?.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        { !!video 
          ? (<div className="aspect-w-16 aspect-h-12">
              <iframe 
              src="https://www.youtube.com/embed/2t806A2GGns"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>)
          : (<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {images && images.map((image) => (
            <img
              key={image?.src}
              src={image.src}
              alt={image.alt}
              className="bg-gray-100 rounded-lg"
            />
          ))}
        </div>)
        }
      </div>
    </div>
  )
}
