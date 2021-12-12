const features = [
  {
    name: 'Live simulation fire exercises',
    description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
  },
  {
    name: 'Performance review and evaluation',
    description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
  },
  {
    name: 'Integration with current wildland firefighters',
    description:
      'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
  },
  { name: 'Ground tactics and strategy', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
]

export default function Offering2({imageRight, imageSrc, title, description, bullets}) {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative  my-24">
        <div className={`aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full  ${imageRight ? 'right-0 lg:pl-4 xl:pl-16 ' : 'lg:pr-4 xl:pr-16'}`}>
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


// /*
//   This example requires Tailwind CSS v2.0+ 
  
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }
//   ```
// */
// const features = [
//   {
//     name: 'Live simulation fire exercises',
//     description: 'Today, Next, and Someday cards allow you to defer your dreams into the future.',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-01.jpg',
//     imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
//   },
//   {
//     name: 'Performance review and evaluation',
//     description: 'Each refill pack contains plenty of cards to last you a month of procrastination.',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-02.jpg',
//     imageAlt: 'Green cardstock box open with 50 cards inside.',
//   },
//   {
//     name: 'Integration with current wildland firefighters',
//     description: 'Integration with current wildland firefighters',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-03.jpg',
//     imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
//   },
//   {
//     name: 'Ground tactics and strategy',
//     description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-04.jpg',
//     imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
//   },
// ]

// export default function Offering({title, description}) {
//   return (
//     <div className="bg-white">
//       <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
//         <div className="max-w-3xl">
//           {/* <h2 id="features-heading" className="font-medium text-gray-500">
//             Focus
//           </h2> */}
//           <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             {title} 
//           </p>
//           <p className="mt-4 text-2xl text-gray-500">
//             {description}
//           </p>
//         </div>

//         <div className="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
//           {features.map((feature) => (
//             <div key={feature.name} className="flex flex-col-reverse">
//               <div className="mt-6">
//                 <h3 className="text-2xl font-medium text-gray-900">{feature.name}</h3>
//                 {/* <p className="mt-2 text-sm text-gray-500">{feature.description}</p> */}
//               </div>
//               <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
//                 <img src={'/images/TankerDrop.png'} alt={feature.imageAlt} className="object-center object-cover" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// /*
//   This example requires Tailwind CSS v2.0+ 
  
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }
//   ```
// */
// // const features = [
// //   {
// //     name: 'Durable',
// //     description: 'Live simulation fire exercises',
// //   },
// //   {
// //     name: 'Refillable',
// //     description: 'Performance review and evaluation',
// //   },
// //   {
// //     name: 'Thoughtfully designed',
// //     description:'Integration with current wildland firefighters',
// //   },
// //   { name: 'Locally made', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
// // ]

// // export default function Offering() {
// //   return (
// //     <div className="bg-white">
// //       <section aria-labelledby="features-heading" className="relative">
// //         <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
// //           <img
// //             src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
// //             alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
// //             className="h-full w-full object-center object-cover lg:h-full lg:w-full"
// //           />
// //         </div>

// //         <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
// //           <div className="lg:col-start-2">
// //             {/* <h2 id="features-heading" className="font-medium text-gray-500">
// //               Leatherbound Daily Journal
// //             </h2> */}
// //             <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">Field Exercises</p>
// //             <p className="mt-4 text-gray-500">
// //               In-field training exercises developed specifically for your team, based on real world scenarios.
// //             </p>

// //             <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
// //               {features.map((feature) => (
// //                 <div key={feature.name}>
// //                   <dt className="font-medium text-gray-900">{feature.name}</dt>
// //                   <dd className="mt-2 text-gray-500">{feature.description}</dd>
// //                 </div>
// //               ))}
// //             </dl>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }