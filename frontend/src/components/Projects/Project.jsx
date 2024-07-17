import React from 'react';
import '../../index.css';
import GIF from './Assets/GIF.gif';
import Java from './Assets/Java.svg';
import Laravel from './Assets/Laravel.svg';
import Ruby from './Assets/Ruby.svg';
import Django from './Assets/Django.svg';
import Php from './Assets/php.svg';

function Project() {
  return (
    <div>
     <div className=' md:mb-[156px]'>
      <div>
        
        <div className='grid grid-cols-12 border-dashed border-2 border-blue-400 md:rounded-2xl'>
            <div className='col-span-7 md:py-[48px] md:pl-[48px]'>
              <div>
                <div className='flex font-bold bg-gradient-to-r from-[#0072BC] to-[#009FA9] gap-2  text-white max-w-[220px] pl-7 py-2 rounded-full'>
                    <p>Industry</p> <span>|</span> <p>Contruction</p>
                </div>
                <div className='md:text-[48px] md:leading-[60px] md:font-bold md:my-4 '>
                   <p>VidaDynamics</p>
                </div>
                 <div className='md:text-2xl md:font-[450] md:mb-[48px]'>
                    <p>At Vida Projects, our goal goes beyond just offering tools, it's about creating a world where construction project management is intuitive,</p>
                </div>
              </div>
               
                <div className='flex'>
                   <div className='border-r border-solid border-black'>
                        <div className='text-center md:pr-6 md:h-[132px] md:w-[245px] '>
                           <p className='font-bold basic-text gradient-text text-center'>40%</p>
                           <p className='text-center mod-text text-[#004C40] md:pr-6'>We increased sales by</p>
                        </div>
                   </div>
                   <div className='border-r border-solid border-black'>
                       <div className='md:h-[132px] md:w-[245px] md:pr-6'>
                           <p className='font-bold basic-text gradient-text text-center'>9.10 x</p>
                           <p className='text-[#004C40] mod-text text-center md:pr-6'>Return on investment</p>
                       </div>
                   </div>
                   <div className='border-r-indigo-500'>
                      <div className='md:h-[132px] md:w-[245px]'>
                          <p className='font-bold basic-text gradient-text text-center'>45%</p>
                           <p className='text-[#004C40] mod-text text-center'>Increse in placed order rate</p>
                      </div>
                   </div>
                </div>

                <div className='md:mt-[48px]'>
                  <p className='font-medium text-2xl mb-2'>Tools</p>
                  <div className='flex gap-6'>
                     <div className='flex gap-3 text-center'>
                       <img src={Php} alt="" />
                       <p className='mod-text py-4'>Php</p>
                     </div>
                     <div className='flex gap-3 text-center'>
                        <img src={Java} alt="" />
                        <p className='mod-text py-4'>Java</p>
                     </div>
                     <div className='flex gap-3 text-center'>
                       <img src={Laravel} alt="" />
                       <p className='mod-text py-4'>Laravel</p>
                     </div>
                     <div className='flex gap-3 text-center'>
                       <img src={Ruby} alt="" />  
                       <p className='mod-text py-4'>Ruby</p>
                     </div>
                     <div className='flex gap-3 text-center'>
                       <img src={Django} alt="" />
                       <p className='mod-text py-4'>Django</p>
                     </div>
                  </div>

                </div>
               

            </div>


            <div className='col-span-5 md:py-[126px] md:ml-8 md:mr-[113px]'>
                <img src={GIF} alt="" />
            </div>

        </div>
     
     </div>
     </div>
   </div>
  )
}

export default Project