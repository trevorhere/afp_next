import {ArrowDownIcon} from '@heroicons/react/outline'
import Image from 'next/image'

export default function Hero(){
  return (
    <div className="bg-white">
      <header>
      </header>
      <main className="flex items-center justify-center content-center">
        <section className="flex w-full pb-64 h-screen items-center justify-center bg-[url('/images/Header_1.webp')] bg-cover">
            <div className='self-center text-center justify-center items-center text-white'>
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