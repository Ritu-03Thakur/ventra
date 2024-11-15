import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExploreSection = () => {
  return (
    <div className='py-4'>
       <div>
       <div className='flex justify-between  '>
        {/* section 1 */}
        <div>
            <h3>FOR YOU</h3>
            <p> This is your space. Get access to curated content, handpicked offers and personalised products just for you </p>
            <Link href={"/product"}>
            <button>Explore Now</button>
            </Link>
        </div>
   {/* gif */}
        <div>
       <Image
       src="/images/exploreSection.gif"
       alt='gif'
       width={500}
       height={300}
       layout='responsive'
       />
        </div>
       </div>
       </div>
    </div>
  )
}

export default ExploreSection
