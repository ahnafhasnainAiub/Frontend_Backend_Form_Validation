import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../../redux/slice/employeeSlice';



import Photo from './Photo.png'
import Gphoto from './Gphoto.png'
import Frame from './Frame.png'


function Strategy() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    
    useEffect(() => {
      dispatch(fetchEmployees());
    }, [dispatch]);

    const totalEmployees = state?.employee?.data?.employees?.length;

  return (
    <div className=''>
        <div className='grid grid-cols-12 container'>
           <div className='col-span-5 md:pt-[96px] mr-6'>
               <div>
                     <div>
                        <p className='text-blue-600 text-base font-[450]'>Why Choose Mediusware</p>
                     </div>
                     <div className='md:mt-3'>
                        <p className='font-bold text-5xl leading-[60px]'>Build A Strategy That Puts An Your <span className='text-[#00A88E]'>Money To Work</span></p>
                     </div>
                     <div className='md:mt-6'>
                        <p className='text-base font-[500]'>This is the main factor that sets us apart from our and allows us deliver a 
                        Specialist business consul Our team applies its ranging experience strategies us deliver a specialist business consul Our team.
                        </p>
                     </div>
               </div>
               
               <div className='my-12'>
                   
                    <button className='flex  gap-2 bg-[#C2D9EC] rounded-lg px-4 '>
                     <div className='py-2'> <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="44" rx="8" fill="#0060AF"/>
<path d="M28.1016 20.3687C25.8375 18.1046 22.1672 18.1046 19.9031 20.3687C17.6391 22.6327 17.6391 26.303 19.9031 28.5671C22.1672 30.8312 25.8375 30.8312 28.1016 28.5671C30.361 26.303 30.361 22.6327 28.1016 20.3687ZM21.4547 30.4609C20.5547 30.0765 19.7531 29.4952 19.1156 28.7687L17.6485 31.3093L19.1391 31.0749C19.2656 31.0515 19.3969 31.0937 19.4813 31.2015L20.3906 32.3171L21.4547 30.4609ZM28.8891 28.7687C28.2469 29.4952 27.45 30.0765 26.5453 30.4609L27.6141 32.3124L28.5235 31.1968C28.6078 31.0937 28.7391 31.0468 28.8656 31.0702L30.3563 31.3046L28.8891 28.7687ZM26.311 22.1593C25.036 20.8843 22.9688 20.8843 21.6938 22.1593C20.4188 23.4343 20.4188 25.5015 21.6938 26.7765C22.9688 28.0515 25.036 28.0515 26.311 26.7765C27.586 25.5015 27.586 23.4343 26.311 22.1593ZM24 20.4859C26.1985 20.4859 27.9844 22.2671 27.9844 24.4702C27.9844 26.6687 26.2031 28.4546 24 28.4546C21.8016 28.4546 20.0156 26.6734 20.0156 24.4702C20.0203 22.2671 21.8016 20.4859 24 20.4859ZM22.1438 24.7327C22.0453 24.5593 22.1016 24.3437 22.275 24.2452C22.4485 24.1468 22.6641 24.203 22.7625 24.3765L23.3344 25.3655L25.2938 23.4062C25.4344 23.2655 25.6641 23.2655 25.8 23.4062C25.9406 23.5468 25.9406 23.7718 25.8 23.9124L23.5125 26.1999C23.3485 26.364 23.0672 26.3312 22.95 26.1249L22.1438 24.7327ZM32.2735 15.2687L32.9813 16.7359L34.5938 16.9562C34.8703 16.9937 34.9688 17.3312 34.7766 17.5187L33.6 18.6437L33.8906 20.2468C33.9375 20.5187 33.6516 20.7202 33.4125 20.5937L31.9781 19.8249L30.5438 20.5937C30.3094 20.7202 30.0047 20.5234 30.0703 20.228L30.3563 18.6437L29.1797 17.5187C28.9828 17.3312 29.0906 16.9937 29.3672 16.9562L30.975 16.7359L31.6828 15.2687C31.8 15.0202 32.1516 15.0249 32.2735 15.2687ZM16.3172 15.2687L17.025 16.7359L18.6375 16.9562C18.9094 16.9937 19.0125 17.3312 18.8203 17.5187L17.6438 18.6437L17.9344 20.2468C17.9813 20.5187 17.6953 20.7202 17.461 20.5937L16.0266 19.8249L14.5922 20.5937C14.3578 20.7202 14.0578 20.5234 14.1188 20.228L14.4047 18.6437L13.2281 17.5187C13.0313 17.3312 13.1391 16.9937 13.4156 16.9562L15.0235 16.7359L15.7313 15.2687C15.8485 15.0202 16.2 15.0249 16.3172 15.2687ZM24.2953 11.8702L25.0031 13.3374L26.6156 13.5577C26.8875 13.5952 26.9906 13.9327 26.7985 14.1202L25.6219 15.2452L25.9125 16.8484C25.9594 17.1202 25.6735 17.3218 25.4344 17.1952L24 16.4218L22.5656 17.1905C22.3313 17.3171 22.0313 17.1202 22.0922 16.8249L22.3781 15.2405L21.2016 14.1155C21.0047 13.928 21.1125 13.5905 21.3891 13.553L22.9969 13.3327L23.7047 11.8655C23.8266 11.6218 24.1781 11.6265 24.2953 11.8702Z" fill="white"/>
                     </svg>
                      </div>

                       <div className='py-[17px]'>
                         <p className=''>10 Years of Experience</p>
                       </div>
                    </button>
                       
                     
                  
               </div>
               
          <div className='text-lg font-medium gap-y-3'>
                
              <div className='flex gap-4'>
                 <div className=''>
                   <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.7 15.2998C9.3 14.8998 8.7 14.8998 8.3 15.2998C7.9 15.6998 7.9 16.2998 8.3 16.6998L11.3 19.6998C11.5 19.8998 11.7 19.9998 12 19.9998C12.3 19.9998 12.5 19.8998 12.7 19.6998L19.7 11.6998C20 11.1998 20 10.5998 19.5 10.2998C19.1 9.99978 18.5 9.99978 18.2 10.3998L12 17.4998L9.7 15.2998Z" fill="#00A88E"/>
<path d="M21 15C20.4 15 20 15.4 20 16C20 20.4 16.4 24 12 24C7.6 24 4 20.4 4 16C4 13.9 4.8 11.9 6.3 10.4C7.8 8.8 9.8 8 12 8C12.6 8 13.3 8.1 13.9 8.2C14.4 8.4 15 8.1 15.2 7.5C15.4 6.9 15 6.5 14.5 6.3H14.4C13.6 6.1 12.8 6 12 6C6.5 6 2 10.5 2 16.1C2 18.7 3.1 21.3 4.9 23.1C6.8 25 9.3 26 11.9 26C17.4 26 21.9 21.5 21.9 16C22 15.4 21.5 15 21 15Z" fill="#00A88E"/>
                   </svg>
                 </div>
                 <div className=''>
                     <p>This is the main factor that sets us apart from our and allows us deliver a Special.</p>
                 </div>
              </div>

              <div className='flex gap-4'>
                <div className=''>
                   <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.7 15.2998C9.3 14.8998 8.7 14.8998 8.3 15.2998C7.9 15.6998 7.9 16.2998 8.3 16.6998L11.3 19.6998C11.5 19.8998 11.7 19.9998 12 19.9998C12.3 19.9998 12.5 19.8998 12.7 19.6998L19.7 11.6998C20 11.1998 20 10.5998 19.5 10.2998C19.1 9.99978 18.5 9.99978 18.2 10.3998L12 17.4998L9.7 15.2998Z" fill="#00A88E"/>
<path d="M21 15C20.4 15 20 15.4 20 16C20 20.4 16.4 24 12 24C7.6 24 4 20.4 4 16C4 13.9 4.8 11.9 6.3 10.4C7.8 8.8 9.8 8 12 8C12.6 8 13.3 8.1 13.9 8.2C14.4 8.4 15 8.1 15.2 7.5C15.4 6.9 15 6.5 14.5 6.3H14.4C13.6 6.1 12.8 6 12 6C6.5 6 2 10.5 2 16.1C2 18.7 3.1 21.3 4.9 23.1C6.8 25 9.3 26 11.9 26C17.4 26 21.9 21.5 21.9 16C22 15.4 21.5 15 21 15Z" fill="#00A88E"/>
                   </svg>
                </div>
                <div className=''>
                     <p>This is the main factor that sets us apart from our and allows us deliver a Special.</p>
                </div>
              </div>

              

             <div className='flex gap-4'>
                 <div className=''>
                   <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.7 15.2998C9.3 14.8998 8.7 14.8998 8.3 15.2998C7.9 15.6998 7.9 16.2998 8.3 16.6998L11.3 19.6998C11.5 19.8998 11.7 19.9998 12 19.9998C12.3 19.9998 12.5 19.8998 12.7 19.6998L19.7 11.6998C20 11.1998 20 10.5998 19.5 10.2998C19.1 9.99978 18.5 9.99978 18.2 10.3998L12 17.4998L9.7 15.2998Z" fill="#00A88E"/>
<path d="M21 15C20.4 15 20 15.4 20 16C20 20.4 16.4 24 12 24C7.6 24 4 20.4 4 16C4 13.9 4.8 11.9 6.3 10.4C7.8 8.8 9.8 8 12 8C12.6 8 13.3 8.1 13.9 8.2C14.4 8.4 15 8.1 15.2 7.5C15.4 6.9 15 6.5 14.5 6.3H14.4C13.6 6.1 12.8 6 12 6C6.5 6 2 10.5 2 16.1C2 18.7 3.1 21.3 4.9 23.1C6.8 25 9.3 26 11.9 26C17.4 26 21.9 21.5 21.9 16C22 15.4 21.5 15 21 15Z" fill="#00A88E"/>
                   </svg>
                 </div>
                 <div className=''>
                     <p>This is the main factor that sets us apart from our and allows us deliver a Special.</p>
                 </div>
             </div> 

          </div>
      
      <div className='flex gap-4 md:mt-[48px]'>
           <div className='rounded-lg bg-[#E6EFF7] text-blue-800 md:pl-[32px]'>
               <div className='font-bold md:text-[66px] md:leading-[72px] md:pt-[43px] md:pb-[16px] md:pr-[72px]'>
                  <p className=''> {totalEmployees}+</p> 
               </div>
               <div className='md:text-[18px] md:leading-[26px] font-medium '>
                  <p className=' md:pb-[54px] md:pr-[43px]'>Team Members</p>
               </div>
           </div> 
            
           <div className='rounded-lg bg-[#E6F6F4] text-blue-800 md:pl-[32px]'>
               <div className='font-bold md:text-[66px] md:leading-[72px] md:pt-[43px] md:pb-[16px] md:pr-[72px]'>
                  <p className=''>20+</p> 
               </div>
               <div className='md:text-[18px] md:leading-[26px] font-medium '>
                  <p className=' md:pb-[54px] md:pr-[5px]'>Countries Worlwide</p>
               </div>
           </div> 

           <div className='rounded-lg bg-[#F5E9F4] text-blue-800 md:pl-[32px]'>
               <div className='font-bold md:text-[66px] md:leading-[72px] md:pt-[43px] md:pb-[16px] md:pr-[23px]'>
                  <p className=''>100%</p> 
               </div>
               <div className='md:text-[18px] md:leading-[26px] font-medium '>
                  <p className=' md:pb-[54px] md:pr-[43px]'>Success Rate</p>
               </div>
           </div> 
      </div>        
           
               




           </div>
           <div className='col-span-7  ml-6'>
             
              <div className='grid grid-cols-12 md:pt-[96px] relative'>
                 <div className='col-span-9'>
                    <img src={Photo} alt="" className=''/>
                 </div>
             <div className='col-span-3 '>
                  <div className='md:ml-8'>
                    <img src={Gphoto} alt="" className=''/>
                  </div>
                 <div className='absolute md:bottom-[56px] right-0'>
                   <img src={Frame} alt="" className=''/>
                 </div>
                   
               </div>
            </div>
            
           </div>
           
        </div>

    </div>
  )
}

export default Strategy