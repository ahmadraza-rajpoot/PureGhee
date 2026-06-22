import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { INSTAGRAM, WHATS_APP_NUMBER } from "../utils/constants";
import logo from '../assets/puregheelogo.png'
//bg-[#0F172A]
const Footer = () => {
  return (
    <footer className=" bg-[#0F172A] text-gray-300 pt-14 pb-6">

      <div className="max-w-6xl  mx-auto px-6">

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

     
          <div className="text-center flex flex-col items-center md:items-start md:text-start">
            
            <img src={logo} className="size-30  -ml-4 -mt-5" alt="" />
            
            <p className=" text-sm text-gray-300 leading-relaxed">
              Pure dairy products made with care using traditional methods. 
              Bringing natural taste and healthy nourishment to every home.
            </p>
          </div>

          <div className="text-center md:text-start">
            <h3 className="text-yellow-300 font-medium mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
              <li className="hover:text-green-300 w-fit cursor-pointer transition"> <a href="/#hero">Home</a></li>
              <li className="hover:text-green-300 w-fit cursor-pointer transition"> <a href="#products">Products</a> </li>
              <li className="hover:text-green-300 w-fit cursor-pointer transition"> <a href="#process">Our Process</a></li>
            </ul>
          </div>

      
          <div className="text-center flex flex-col items-center md:items-start md:text-start">
            <h3 className="text-yellow-300 font-medium mb-4">Contact</h3>

            <p className="text-sm text-gray-400">
              Available for orders via WhatsApp
            </p>

            <a
              href={`https://wa.me/${WHATS_APP_NUMBER}`}
              target="_blank"
              className="inline-flex items-center gap-2 mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

            <a href={INSTAGRAM} target="_blank" className="flex gap-3 mt-5  justify-center md:justify-start w-fit">
              <FaInstagram className="text-lg hover:text-white cursor-pointer transition" />
            </a>
          </div>

        </div>

        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} PureGhee. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;