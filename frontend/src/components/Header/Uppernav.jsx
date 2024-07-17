
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
function Uppernav() {
  return (
    <>
        <div className="bg-[#002B4F] ">
              <div className="container mx-auto">
  
                  <div className="text-white flex flex-wrap justify-between align-middle p-1">
                      <div className="flex gap-2">
                      
                          <a href="" className=" text-xs lg:text-sm">
                          <FontAwesomeIcon icon={faPhone} />
                              +880 1750 02040</a>
  
                          <a href="" className=" text-xs lg:text-sm">
                          <FontAwesomeIcon icon={faEnvelope} />
                              contact@mediusware.com</a>
        
                      </div>
                      
                      <ul className="flex justify-end gap-3 ">
                          <li>
                            <FontAwesomeIcon icon={faWhatsapp} />
                          </li>
                           <li>
                             <FontAwesomeIcon icon={faFacebook} />
                          </li>
                          <li>
                             <FontAwesomeIcon icon={faLinkedin} />
                          </li> 
                      </ul>
                  </div>
              </div>
        </div>
    
    </>
  )
}

export default Uppernav