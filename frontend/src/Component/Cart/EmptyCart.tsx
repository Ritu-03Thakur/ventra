import Image from 'next/image'
import React from 'react'

const EmptyCart = () => {
  return (
    <div className='mt-16 flex items-center m-auto'>
     <Image
     src="/images/emptyCart.jpg"
     alt='empty-cart-image'
     width={400}
     height={400}
     className='w-full h-auto rounded-lg '
     />
     
    </div>
  )
}

export default EmptyCart
