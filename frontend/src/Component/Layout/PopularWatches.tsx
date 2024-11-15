import Image from "next/image"

const PopularWatches = () => {

    

  return (
    <>
   
       <div className="grid  grid-cols-1 md:grid-cols-3 grid-rows-2 ">
        <div className="bg-[#a98be7] grid-rows-2 ">
          <div>
            <Image 
             src={"/images/wp1.jpeg"}
             width={200}
             height={200}
             objectFit="cover"
             alt="img"
            />
          </div>
          <div>
          <Image 
             src={"/images/wp2.jpeg"}
             width={200}
             height={200}
             objectFit="cover"
             alt="img"
            />
          </div>
        </div>
        <div className="bg-white grid-rows-1">
        <Image 
             src={"/images/wp3.jpeg"}
             width={200}
             height={200}
             objectFit="cover"
             alt="img"
            />
        </div>
        <div className="bg-slate-600 grid-rows-2">
          <div>
          <Image 
             src={"/images/wp4.jpeg"}
             width={200}
             height={200}
             objectFit="cover"
             alt="img"
            />
          </div>
          <div>
          <Image 
             src={"/images/wp5.jpeg"}
             width={200}
             height={200}
             objectFit="cover"
             alt="img"
            />
          </div>
        </div>
        

       </div>
    </>
  )
}

export default PopularWatches
