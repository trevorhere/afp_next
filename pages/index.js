import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div >
      <Head>
        <title>AFP</title>
        <meta name="Anchor Flank & Pinch" content="Leaders in wildland firefighting training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero className="w-full"></Hero>
    <div  className={true ? ' bg-white ' : ' bg-gray-800 rounded-xl'}>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-10 sm:my-14 lg:max-w-7xl lg:px-8 ">
        {
           (<div className="aspect-w-16 aspect-h-12">
              <iframe 
                src="https://www.youtube.com/embed/c_k4oyou5A8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
          </div>)
        }
      </div>
    </div>
    </div>
  )
}
