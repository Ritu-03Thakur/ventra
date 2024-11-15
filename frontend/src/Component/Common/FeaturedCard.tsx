import React, { FC } from 'react'
import { DirectionAwareHover } from '../ui/direction-aware-hover'

interface Cardprops {
   srcImage : string , 
   title : string ,
   description : string ,
}
const FeaturedCard:FC<Cardprops> = ({srcImage , title , description}) => {
    return(
        <>
     <DirectionAwareHover imageUrl={srcImage} 
     className='hover:opacity-50 '
     >
        <p className="font-bold text-xl text-[#26022d]">{title}</p>
        <p className="font-normal text-sm text-[#26022d] line-clamp-4 truncate">{description}</p>
      </DirectionAwareHover>
        </>
    )
}

export default FeaturedCard
