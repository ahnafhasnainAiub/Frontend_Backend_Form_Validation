
const data = [
  {
    image: `./Images/Group1.png`,
    text: `Years experience`,
    year: `7+`
  },
  {
    image: `./Images/Group2.png`,
    text: `Happy Clients`,
    year: `500+`,
  },
  {
    image: `./Images/Group3.png`,
    text: `Countries Served`,
    year: `20+`,
  },
  {
    image: `./Images/Group4.png`,
    text: `Projects Completed`,
    year: `700+`,
  }
];


function ClientCount() {

  return (

    <div className="bg-[#F0F6FA]">
     <div className="container">
      
      <div className="flex gap-8 md:pb-[96px] ">
         
      {data.map((d)=> (
        <div className="md:w-[400px] md:h-[400px] bg-white rounded-lg">
           <div className="px-8 py-6">
               <img src={d.image} alt="" />
           </div>
           <div className="border-b border-[#D0D5DD]">
            <p className="py-[30px] font-bold text-[32px] leading-[44px] ml-8">{d.text}</p>  
           </div>
           <div className="font-bold text-[80px] leading-[90px] ml-8">
            <p>{d.year}</p>  
          </div>
           
        </div>

       ))}

      </div>
     
     </div>
        


    
  </div>
  )
}
export default ClientCount;