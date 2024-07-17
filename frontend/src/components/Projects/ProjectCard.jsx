import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./Project";

function ProjectCard() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
<div className="container">
    <div>
      
      <div>
       <div className='font-medium text-2xl leading-8 md:font-bold text-[48px] text-center md:line-height-[2.5rem]  md:mb-[60px] md:pt-[96px]'>
           <p className=''>Our Highlight  <span className='text-[#00A88E]'> Projects</span></p>
          </div>
          <div className='text-2xl font-[450] md:px-[336px] md:mb-[56px] text-center'>
            <p>Explore success stories from clients across a range of industries, spanning from techpreneurs and start-ups to established enterprises.</p>
           </div>
      </div>

      <div className="">
          <Slider {...settings}>
            <Project/>
            <Project/>
            <Project/>
          </Slider>
      </div>
    
     </div>    
</div>
  )
} 

export default ProjectCard