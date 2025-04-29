import React, { useEffect } from 'react'
import workflow from '../assets/flow/workflow.png'
import back from '../assets/back.png'  // <-- import your background image
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <main className="relative z-[3] h-auto w-auto text-white">
        <div className="w-screen h-screen flex flex-col justify-center items-center" id="welcome">
          <div data-aos="fade-left" data-aos-delay="0" className="text-center font-[700] text-black text-[64px] font-[Inter]">
            Welcome To <span className="bg-gradient-to-r from-[#FFFF00] to-[#FF0000] bg-clip-text text-transparent">Medica</span>
          </div>
          <p data-aos="fade-right" data-aos-delay="0" className="font-[Inter] text-black text-center text-[24px] font-[400] my-15">
            Medica is a virtual medical assistant designed to help users understand their<br /> symptoms and receive preliminary health guidance. Our AI-powered chatbot provides<br /> informative, user-friendly, and empathetic responses based on verified medical<br /> knowledge.
          </p>
        </div>
        <div className="w-screen h-screen flex flex-col justify-center items-center" id="working">
          <div data-aos="fade-down" data-aos-delay="100" className="text-center font-[700] text-black text-[36px] font-[Inter] mb-28">
            How does it works?
          </div>
          <img data-aos="fade-up-left" data-aos-delay="500" className="h-[300px] w-[70%]" src={workflow} />
        </div>
        
      </main>
    </div>
  )
}
