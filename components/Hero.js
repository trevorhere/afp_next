import {ArrowDownIcon} from '@heroicons/react/outline'

export default function Hero(){
  return (
    <div className="bg-white">
      <header>
      </header>
      <main className="flex items-center justify-center content-center">
        <section className="flex w-full py-64 h-screen items-center justify-center bg-[url('/images/Header_1.png')] bg-cover">
            <div className=' self-center text-center justify-center items-center text-white '>
              <h1 className="font-serif text-2xl md:text-4xl">Anchor Flank & Pinch</h1>
              <h1 className="pt-4 italic text-md md:text-xl font-serif">
                The best in aerial firefighting training.<br/>
              </h1>
          </div>
        </section>
        <div>
        </div>
      </main>
    </div>
  )
}