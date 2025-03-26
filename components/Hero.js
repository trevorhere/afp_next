import {ArrowDownIcon} from '@heroicons/react/outline'
import Image from 'next/image'

export default function Hero(){
  return (
    <div className="bg-white">
      <header>
      </header>
      <main className="flex items-center justify-center content-center">
        <section className="flex w-full pb-64 h-screen items-center justify-center relative">
          {/* Next.js Image component with dark blue/gray/black blur */}
          <div className="absolute inset-0 z-0 bg-gray-900"> {/* Dark fallback color */}
            <Image
              src="/images/Header_1.webp"
              alt="Header background"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkcGi4BwAChgEwt5CQRAAAAABJRU5ErkJggg=="
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          
          {/* Content overlay */}
          <div className='self-center text-center justify-center items-center text-white relative z-10'>
            <div className="flex items-center justify-center space-x-4">
              <img
                className="h-28 w-auto"
                src="./images/penrose.png"
                alt="Anchor Flank & Pinch"
              />
              <h1 className="font-serif text-2xl md:text-4xl text-left">Anchor<br/>Flank &<br/>Pinch</h1>
            </div>
            <h1 className="pt-4 italic text-md md:text-xl font-serif">
              Providing what you need to succeed<br/>
            </h1>
          </div>
        </section>
        <div>
        </div>
      </main>
    </div>
  )
}