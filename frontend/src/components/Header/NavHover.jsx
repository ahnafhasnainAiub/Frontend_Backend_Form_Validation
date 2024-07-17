import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Children, useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavHover = ({ isMenuOpen }) => {
  const data = [
    { id: 1, title: 'Software Development', description: 'With state-of-the-art technology, we build useful software for any business. Bring your business objectives to life with our custom software development.' },
    { id: 2, title: 'Website Development', description: 'We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is dedicated to letting you' },
    { id: 3, title: 'Mobile App Development', description: 'We provide you with smart and practical Android & iOS apps to ensure the best outcome for your business.' },
    { id: 4, title: 'E-commerce Solution', description: 'E-commerce websites need to be user-friendly, but attractive at the same'},
    { id: 5, title: 'Enterprise Solution', description: 'An effective ERP software can integrate all your business operations into a single platform. To make your business'},  
    { id: 6, title: 'UI/UX Design', description: 'Good UI/UX design is not just about an aesthetically appealing interface, it’s also about crafting simple, intuitive customer' },
    { id: 7, title: 'SQA Solution', description: 'We perform end-to-end testing to offer you a flawless software experience. Our highly competent SQA engineers are' },
    { id: 8, title: 'Digital Marketing', description: 'From building a brand identity to designing a complete digital marketing solution, Mediusware knows how to take your business to the next level. Generating exceptional content and optimizing the latest digital marketing tools, we cover all your digital marketing needs.' },
    { id: 9, title: 'API Integration', description: 'API integration helps to get all your apps and systems work together. With an aim to fulfill your business requirements'}
  ];

  const [currentId, setCurrentId] = useState(1);

  const handleMouseEnter = (id) => {
    setCurrentId(id);
  };

  const currentItem = data.find(item => item.id === currentId);

  return (
    <ul
      className={`dropdown-menu bg-white shadow-lg  transform -translate-x-1/3  transition-opacity duration-300 ${
        isMenuOpen
          ? 'opacity-100 visible w-screen lg:max-w-[1200px] grid grid-cols-12 p-8  overflow-hidden'
          : 'opacity-0 invisible'
      }`}
    >
      <div className="col-span-full md:col-start-1 md:col-end-4">
        {data.map(item => (
          <li key={item.id}>
            <div className="relative group">

            
              <NavLink
                className=" text-base text-gray-700 hover:bg-gray-100 hover:text-blue-800  font-[700]"
                onMouseEnter={() => handleMouseEnter(item.id)}
              >
               <div className='flex items-center py-2 gap-2'>
                 {item.title}
                 <FontAwesomeIcon icon={faArrowRight} className="text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-400  text-sm leading-6" />
               </div>
                
              </NavLink>
            </div>
          </li>
        ))}
      </div>

      <div className="col-span-full md:col-start-4 md:col-end-12 text-black">
        <div className="">
          <div className="text-4xl font-bold ">{currentItem.title}</div>
          <div className="text-base mt-2 border-b pb-7">
            {currentItem.description}
          </div>
          <div className="grid grid-cols-2 mt-7 gap-y-3">
            <a className='hover:text-blue-500'>Hire IoT Solution Architect </a>
            <a className='hover:text-blue-500'>Hire VisionOS Developers</a>
            <a className='hover:text-blue-500'>UI/UX Designers</a>
            <a className='hover:text-blue-500'>Hire Software Developers</a>
            <a className='hover:text-blue-500'>Hire Solidity Developers</a>
            <a className='hover:text-blue-500'>Hire Blockchain Developers</a>
            <a className='hover:text-blue-500'>Hire Salesforce Developers</a>
            <a className='hover:text-blue-500'>Hire NFT Developers</a>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default NavHover;
