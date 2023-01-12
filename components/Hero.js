import {ArrowDownIcon} from '@heroicons/react/outline'

export default function Hero(){
  return (
    <div className="bg-white">
      <header>
      </header>
      <main className="flex items-center justify-center content-center">
        <section className="flex w-full py-32 h-5/6 items-center justify-center bg-[url('/images/Header_1.png')] bg-cover">
            <div className=' self-center text-center justify-center items-center text-white '>
              <h1 className="font-serif text-2xl md:text-4xl">Anchor Flank & Pinch</h1>
              <h1 className="font-serif pt-2 text-lg md:text-2xl">is joining forces with</h1>
              <h1 className="font-serif text-2xl md:text-4xl">Becker Support Services,</h1>
              <h1 className="font-serif pt-2 text-lg md:text-2xl">developers of FS3D, to form </h1>
              <div className="m-4  lg:h-auto flex justify-center align-center items-center ">
                <img
                  className='h-56'
                  src="./images/Intellic_logo.gif"
                />
              </div>
              <h1 className="pt-4 italic text-md md:text-xl font-serif">
                The best in aerial firefighting training programs<br/>
                combined with leading real-world simulation software<br/>
                to support our wildland firefighting heros.<br/>
              </h1>
              <h1 className="pt-4 italic text-md md:text-xl font-serif">
                Official site coming soon.
              </h1>
          </div>
        </section>
        <div>
        </div>
      </main>
    </div>
  )
}