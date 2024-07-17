import React from 'react';

const data = [
    {
      image: `./Images/bank.png`,
      text: `Bank`
    },
    {
      image: `./Images/realstate.png`,
      text: `Real estate`
     
    },
    {
      image: `./Images/transport.png`,
      text: `Transport`
    },
    {
      image: `./Images/media.png`,
      text: `Media`
    },

    {   
        image: `./Images/education.png`,
        text: `Education`
      },
      {
        image: `./Images/govt.png`,
        text: `Government`
      },
      {
        image: `./Images/construction.png`,
        text: `Construction`
      },
      {
        image: `./Images/medical.png`,
        text: `Medical`
      },
      {
        image: `./Images/bank.png`,
        text: `Bank`
      },
      {
        image: `./Images/realstate.png`,
        text: `Real estate`
       
      },
      {
        image: `./Images/transport.png`,
        text: `Transport`
      },
      {
        image: `./Images/media.png`,
        text: `Media`
      },
  ];




function Expertise() {
  return (
    <>
       <div className='container md:mt-[96px]'>
             <div className='text-center'>
                 <div className='md:mb-6 md:text-[48px] md:leading-[60px] font-bold'>
                    <p >Industry <span className='text-[#00A88E]'>Expertise</span></p>
                 </div>
                 <div className='text-2xl font-[450] md:px-[336px] md:mb-[56px]'>
                    <p>Explore our expertise in crafting innovative solutions across various domains—discover the perfect fit for yours!</p>
                 </div>
             </div>
        <div className="flex flex-wrap gap-8 md:pb-[96px]">
         
         {data.map((d)=> (
           <div className="flex flex-col md:w-[400px] md:h-[400px] bg-[#FCFCFD] rounded-lg">
              <div className=" md:px-[150px] md:pt-[112px]">
                  <img src={d.image} alt="" />
              </div>
              <div className="text-center">
               <p className="font-bold text-5xl leading-[60px] md:mt-4  md:pb-[112px]">{d.text}</p>  
              </div>
              
              
           </div>
   
          ))}
   
         </div>


       </div>
    
    </>
  )
}

export default Expertise