import React, { FC } from 'react'
import { Heading, SubHeading } from './Common'
import Link from 'next/link'
import FeaturedCard from './FeaturedCard'

interface SectionProps{
  heading : string , 
  subHeading : string , 
  bgcolor : string , 
  productItems : any[] 
}
const FeaturedSection:FC<SectionProps> = ({heading , subHeading ,bgcolor, productItems}) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-2 " 
    style={{backgroundColor:bgcolor}}>
      <Heading heading={heading} />
      <SubHeading subheading={subHeading}/>
      <div className="flex gap-8 flex-wrap items-center justify-center">
       {
           productItems.slice(0, 3).map((item) => (
              <Link 
              href={`/product/${item.id}`}
              key={item.id}
              style = {{
                boxShadow: "1px 2px 11px 8px '#c8c0d3'"
              }}
              className='rounded-md bg-[#bcaac5]'
              >
            <FeaturedCard  {...item}/>
      </Link> 
  ))}
    </div>

    </div>
  )
}

export default FeaturedSection
