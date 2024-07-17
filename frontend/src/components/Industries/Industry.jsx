import React from 'react';
import '../../index.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Pagination } from 'swiper/modules';



function Industry() {

  const companyImages = [
    './Images/Brainbi.png',
    './Images/image1.png',
    './Images/image2.png',
    './Images/image3.png',
    './Images/image5.png',
    
  ];
 
 

  return (
    <div className=' bg-gray-100'>

        <div className='font-medium text-2xl leading-8 md:font-bold text-[48px] text-center md:line-height-[2.5rem]  md:mb-[60px] md:pt-[96px]'>
           <p className=''>We are Trusted by <span className='text-[#00A88E]'>industry <span classname='md:text-black'> Leaders</span></span></p>
        </div>
        
      <div>
     
        <div className=" flex flex-nowrap overflow-auto justify-center items-center gap-8 p-8 ">
         
        <Swiper
         slidesPerView={5}
         spaceBetween={10}
         freeMode={true}
         loop={true}
         modules={[FreeMode, Pagination]}
         className="mySwiper"
      >
         
         {[...companyImages,...companyImages].map((image, index) => (
        <SwiperSlide>
         <div key={index} className="border-background-left md:h-37 md:w-80 md:flex items-center justify-center bg-transparent p-4 border rounded-lg">
           <img src={image} alt={`Company ${index + 1}`} className="max-w-full  max-h-full object-contain Left-to-right" />
         </div>
         </SwiperSlide>
      ))}
         </Swiper>

        </div>



        <div className=" flex flex-nowrap overflow-auto justify-center items-center gap-8 p-8 md:pb-[96px]">
         
         <Swiper
          slidesPerView={5}
          spaceBetween={10}
          freeMode={true}
          loop={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
       >
          
          {[...companyImages,...companyImages].map((image, index) => (
         <SwiperSlide>
          <div key={index} className="border-background md:h-37 md:w-80 md:flex items-center justify-center bg-transparent p-4 border rounded-lg">
            <img src={image} alt={`Company ${index + 1}`} className="max-w-full  max-h-full object-contain Left-to-right" />
          </div>
          </SwiperSlide>
       ))}
          </Swiper>
 
         </div>
      

        

        {/* <div className=".logos-right flex flex-nowrap overflow-auto justify-center items-center gap-8 pb-[96px] bg-gray-100">
         {[...companyImages].map((image, index) => (
          <div key={index} className="border-background-left  md:w-80 md:h-37  flex items-center justify-center bg-transparent p-4 border rounded-lg">
           <img src={image} alt={`Company ${index + 1}`} className="max-w-full max-h-full object-contain " />
        </div>
      ))}
        </div> */}


      </div>
   
    </div>
  )
}

export default Industry