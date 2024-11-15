"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

interface ImageType {
  id: string;
  srcImage: string;
}

interface SliderProps {
  images: ImageType[];
}

const Slider = ({ images }: SliderProps) => {
   
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} 
           className='flex items-center justify-center m-auto smooth'
          >
            <Image
              src={image.srcImage}
              alt="image"
              width={800}
              height={300}
              className='w-[80%]  flex m-auto'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
