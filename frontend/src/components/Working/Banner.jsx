import React from 'react'
import Client from './Assets/Client.png'
import Colon from './Assets/colon.svg';

import '../../index.css';


function Banner({name, designation}) {
  return (
   <div className=' '>
        <div className='bg-cover bg-center h-[324px] w-[350px] md:h-[628px] md:w-[1200px]' style={{ backgroundImage: `url(${Client})` }}>
      <div>
      
      <div className='md:pt-[54px] md:pl-[96px]'>
      <svg  width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10V20L4.95637 15.0067L9.91274 10.0133V5.00666V0H4.95637H0V10ZM14.0873 10V20L19.0436 15.0067L24 10.0133V5.00666V0H19.0436H14.0873V10Z" fill="white"/>
      </svg>
    </div>
        <p className='md:pt-[34px] md:pl-[96px] md:pr-[772px] text-xl font-[450]'> Carrofina is an American company behind an e-commerce platform that transports overseas orders from the USA to Poland by booking free space on container ships. <span className='font-bold'> Carrofina and The Software </span> House partnered up to create a highly customized e-commerce platform for people who want to buy <span className='font-bold'> goods in the US</span>  but are overwhelmed with paperwork, taxes, etc. 
        </p>
      </div>
      <div className='md:pl-[96px]'>
        <h1 className='font-bold basic-text md:mt-[52px] text-[#002B4F]'>{name}</h1>
        <p className='text-[#0060AF] font-[450]'>{designation}</p>
        <div className="w-[120px] h-[2px] bg-white mt-3"></div>
      </div>
    </div>
   </div>
    
  )
}

export default Banner