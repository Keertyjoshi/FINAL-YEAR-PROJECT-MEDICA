import React, { useEffect } from 'react';
import logo from '../assets/chatbot-logo.png';
import background from '../assets/landing_background/background.png'; // Your uploaded image
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Mainlanding() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div>
      <div 
        className="absolute z-[3] w-screen h-screen flex flex-col justify-center items-center"
        id="mainlanding"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
        }}
      >
        <img data-aos="fade-down" data-aos-delay="0" src={logo} className="w-[302px] h-[123px] mb-5" />
        <div data-aos="fade-up" data-aos-delay="500" className="text-center font-[600] text-white text-[48px] font-[Inter]">
          Medica -
          Wellness At Your FingerTips.
        </div>
        <div className="flex space-x-20 font-[700] font-[Inter] text-[20px] mt-15">
          <Link to="/Chatbot">
            <button 
  data-aos="flip-right" 
  data-aos-delay="1500" 
  className="w-[200px] h-[60px] rounded-[50px] bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-[3px_3px_25px_rgb(0,0,0)]
    transition-all duration-900 ease-in-out 
    hover:bg-gradient-to-br hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500
    hover:text-white">
  Your Medica
</button>

          </Link>
          <Link to="/About">
          <button 
  data-aos="flip-left" 
  data-aos-delay="1500" 
  className="w-[200px] h-[60px] rounded-[50px] shadow-[3px_3px_25px_rgb(0,0,0)] 
  transition-all duration-900 ease-in-out 
  bg-[#ADD8E6] 
  hover:bg-[#006400] 
  hover:text-white"
>
  Know More
</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
