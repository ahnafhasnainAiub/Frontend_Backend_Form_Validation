import React, { Component } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
  {
    image: `./Images/Client.png`,
  },
  {
    image: `./Images/Client.png`,
  },
  {
    image: `./Images/Client.png`,
  },
  {
    image: `./Images/Client.png`,
  },
  {
    image: `./Images/Client.png`,
  },
  {
    image: `./Images/Client.png`,
  },
];


function Working() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "330px",
        slidesToShow: 1,
        speed: 500,
        
      };

      

    return (
        <div className='bg-[#F3F7FB]'>
          <div className=''>
            <div className='text-center md:pt-[96px]'>
              <div className='md:mb-6 md:text-[48px] md:leading-[60px] font-bold'>
                <p >Our Clients Love <span className='text-[#00A88E]'>Working With Us</span></p>
              </div>
              <div className='text-2xl font-[450] md:px-[336px] md:mb-[56px] '>
                <p>Explore success stories from clients across a range of industries, spanning from techpreneurs and start-ups to established enterprises.</p>
              </div>
            </div>
            <Slider {...settings}>
              {data.map((d, index) => (
                
                  <div className="">
                    <img src={d.image} alt="" />
                  </div>
              
              ))}
            </Slider>
          </div> 
        </div>
      );
}

export default Working







// import React from 'react';
// import { Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const data = [
//   {
//     image: `./Images/Client.png`,
//   },
//   {
//     image: `./Images/Client.png`,
//   },
//   {
//     image: `./Images/Client.png`,
//   },
//   {
//     image: `./Images/Client.png`,
//   },
// ];

// function Working() {
//   return (
//     <div className='bg-[#F3F7FB]'>
//       <div className=''>
//         <div className='text-center md:pt-[96px]'>
//           <div className='md:mb-6 md:text-[48px] md:leading-[60px] font-bold'>
//             <p >Our Clients Love <span className='text-[#00A88E]'>Working With Us</span></p>
//           </div>
//           <div className='text-2xl font-[450] md:px-[336px] md:mb-[56px] '>
//             <p>Explore success stories from clients across a range of industries, spanning from techpreneurs and start-ups to established enterprises.</p>
//           </div>
//         </div>
//     <Swiper
//         pagination={{
//           type: '',
//         }}
//         slidesPerView={2}
//         spaceBetween={40}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper "
//       >
//           {data.map((d, index) => (
//             <SwiperSlide key={index}>
//               <div className="">
//                 <img src={d.image} alt="" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div> 
//     </div>
//   );
// }

// export default Working;



















