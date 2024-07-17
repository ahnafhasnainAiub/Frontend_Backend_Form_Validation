import React, { useState } from 'react';
import '../../index.css'; // Ensure this file includes the Tailwind imports

const services = [
  { name: 'Bank', logo: './Images/bank.svg' },
  { name: 'Education', logo: './Images/transport.svg' },
  { name: 'Realstate', logo: './Images/state.svg' }
];

const ServiceCard = ({ service, onHover, onLeave, isHovered }) => (
  <div
    className={`w-96 h-96 p-6 m-4 group flex flex-col items-center  hover:bg-black relative justify-center text-center border-2  rounded-lg   text-black ${isHovered ? 'bg-cover' : 'bg-white '}`}
    // style={{ backgroundImage: isHovered ? `url('./Images/industry.png')` : 'none' }}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <img src={service.logo} alt={`${service.name} logo`} className="h-24 mb-4 text-white  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:left-20 group-hover:top-20 transition-all duration-500 ease-linear" />
    <h2 className="text-2xl font-bold text-white">{service.name}</h2>
     
    <div className="mt-4 text-white absolute bottom-10 hidden group-hover:block">
         
        <p className="mb-2">PHP, Python, Laravel</p>
        <div className='flex gap-2'>
        <button className="bg-black text-white py-[6px] px-2 rounded-lg border-solid border-2 border-white">Python</button>
        <button className="bg-black text-white py-[6px] px-2 rounded-lg border-solid border-2 border-white">C++</button>
        <button className="bg-black text-white py-[6px] px-2 rounded-lg border-solid border-2 border-white">MySql</button>
        <button className="bg-black text-white py-[6px] px-2 rounded-lg border-solid border-2 border-white">Many more</button>
        </div>
        
      </div>
  </div>
);

const Hover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-wrap justify-center">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}

          isHovered={hoveredIndex === index}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

export default Hover;
