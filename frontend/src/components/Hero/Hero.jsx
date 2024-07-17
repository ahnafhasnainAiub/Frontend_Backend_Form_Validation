import HeroImage from './Assets/Group.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import Hero1 from './Assets/Hero1.png';
import Hero2 from './Assets/Hero2.png';
import Hero3 from './Assets/Hero3.png';
import Hero4 from './Assets/Hero4.png';
import Hero5 from './Assets/Hero5.png';


import Arrow from './Assets/arrow.svg'

function Hero() {

  const [typeEffect] = useTypewriter({
    words: ['ERP SOLUTION', 'SOFTWARE SOLUTION'],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 30
  });

  return (

     <div className='bg-cover bg-center  h-[60vh] lg:h-[90vh]' style={{ backgroundImage: `url(${HeroImage})` }}>
       <div  className="container">
        
         <div className='md:ml-[200px] text-center'>
         <p className='text-white font-bold md:text-[80px] md:leading-[90px]  md:pt-[96px]'>WE SHAPE THE ART OF TECHNOLOGY
           <div><span className='hero-text'>{typeEffect} </span><span><Cursor/></span></div></p>
         </div>


         <div className='text-white text-center text-2xl mt-8'>
           <p>Generative-Driven Development with the affordability and scale of Nearshore outsourcing 
                  all in your time zone.</p>
         </div>

         {/* <div className='text-center gap-3'>
           <button className='py-[18px] rounded-lg border-black'>REQUEST  A QUOTE</button>
           <button className='py-[18px] rounded-lg border-black'>HIRE DEVELOPERS</button>
         </div> */}
         
      <div className="flex items-center justify-center md:mt-[48px]">
        <div className="flex gap-8 items-center">
            <button className="flex gap-3 text-lg md:text-[20px] md:leading-[36px] bg-[#0060AF] hover:bg-white hover:text-black text-white font-bold py-[18px] px-8 border border-blue-500 hover:border-transparent rounded-lg">
                REQUEST A QUOTE 
                <svg className='text-[20px] mt-[6px]' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1725 5.68006L2.85255 20L0.5 17.6475L14.8183 3.32751H2.19869V0H20.5V18.3013H17.1725V5.68006Z" fill="white"/>
</svg>

            </button>
            <button className="flex gap-3 bg-transparent text-lg md:text-[20px] md:leading-[36px] hover:bg-white hover:text-black text-white font-bold py-[18px] px-8 border border-white rounded-lg">
                HIRE DEVELOPERS
                <svg className='text-[20px] mt-[6px]' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1725 5.68006L2.85255 20L0.5 17.6475L14.8183 3.32751H2.19869V0H20.5V18.3013H17.1725V5.68006Z" fill="white"/>
</svg>

            </button>
        </div>
      </div>
         
        <div className='flex md:justify-between md:mt-[150px] '>
            <div className='flex gap-11'>
                <div><img src={Hero1} alt="" /></div>
               <div className='md:mt-4'>
                  <div className='align-middle md:mb-2 md:px-[20px]'><img src={Hero2} alt="" /></div>
                  <div><img src={Hero5} alt="" /></div>
               </div>
                
            </div>
            <div className='flex md:gap-[48px]'>
                 
                 <div><img src={Hero4} alt="" /></div>
                 <div><img src={Hero3} alt="" /></div>
            </div>
         </div>
          
       </div>
    </div>
    
  )
}

export default Hero