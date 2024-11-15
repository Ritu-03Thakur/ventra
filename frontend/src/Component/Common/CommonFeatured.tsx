import { policyText } from '@/Data'
import Image from 'next/image'



const ExploreFeatured = () => {
 
  return (
    <>
    <div className='flex flex-col justify-center md:flex-row md:justify-between p-5 items-center'>
     <div>
      <h1>Discover Your Perfect Style</h1>
      <p className='max-w-[300px] '>Dive into our curated collections and find your perfect fit.
         From casual wear to glamorous evening outfits, we have something for every occasion.
          Explore and revamp your wardrobe with our handpicked pieces.</p>
      <button> Explore More </button>
     </div>
     <div>
      <Image 
      src={"/images/explore.gif"}
      alt="Explore Featured Image"
      width={500} 
      height={300}
      className='h-[600px]'
      />
     </div>
    </div>
    </>
  )
}



const PolicyFeatured  = () => {
 
  return (
    <div>
     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      {
        policyText.map((item)=> (

      <div key={item.id}>
        <item.icon className='m-auto mb-5' size={44} />
        <p className=' font-semibold'>{item.title}</p>
        <p className=' text-gray-400'>{item.description}</p>
      </div>
        ))
      }
     

    </div>
    </div>
  )
}

export { ExploreFeatured , PolicyFeatured }
