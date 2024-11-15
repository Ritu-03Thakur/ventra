
import Card from '@/Component/Common/Card'
import {Heading, SubHeading } from '@/Component/Common/Common'
import { productItems } from '@/Data'
import Image from 'next/image'



const Product = () => {
  const word = "Discover the latest trends and timeless classics at our online store, where fashion meets convenience. From chic dresses to stylish accessories, we have everything you need to elevate your wardrobe. Enjoy exclusive deals, new arrivals daily, and a seamless shopping experience tailored just for you."
 

  return (
    <>
     <div className='flex gap-5 flex-col'>
      <div className='flex items-center justify-center mt-16 smooth'>

       <Image
       src={"/images/collectionFront.png"}
       alt='img'
       width={1000}
       height={300}
         className='w-[80%]'
       />
      </div>
    <div className='flex flex-col gap-5 items-center justify-center'>
      <Heading heading='WOMEN'  />
        
        <SubHeading subheading={word} />
        
     {/* Products  items */}
    <div className="flex gap-8 flex-wrap items-center justify-center">
       {
            productItems.map((items)=>(
                <Card key={items.id} {...items}/>
     
  ))}
    </div>
             
      
        
      
    </div>
     </div>
    </>
  )
}

export default Product
