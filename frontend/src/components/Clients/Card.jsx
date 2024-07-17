import React from 'react'

const myCard = [
    {
      id: 1,
      image: './Images/Group1.png',
      text: "Years experience",
      year: "7+"
    },
    {
      id: 2,
      image: './Images/Group2.png',
      text: "Happy Clients",
      year: "500+"
    },
    {
      id: 3,
      image: './Images/Group3.png',
      text: "Countries Served",
      year: "20+"
    },
    {
      id: 4,
      image: './Images/Group4.png',
      text: "Projects Completed",
      year: "700+"
    }
  ];
  
  const Card = ({ image, text, year }) => (
    <div className="md:w-80 md:h-37 md:flex items-center justify-center bg-white p-4 shadow-lg rounded-lg">
      <img src={image} alt={text} className="max-w-full max-h-full object-contain py-[35px] px-[75px]" />
      <div className="text-center">
        <p className="font-bold">{text}</p>
        <p>{year}</p>
      </div>
    </div>
  );

export default Card