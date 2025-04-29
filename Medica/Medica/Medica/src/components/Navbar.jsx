import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/chatbot-logo.png"

export default function Navbar() {
  return (
    <div>
      <div
        id="navbar"
        className="fixed z-[4] flex w-screen h-auto box-border pt-[10px] justify-between items-center backdrop-blur-lg text-white font-roboto font-[400]"
      >
        <img
          src={logo}
          alt="Logo"
          className="h-[72px] w-[177px] relative cursor-pointer left-[30px]"
        />
        <ul id="navbar-buttons" className="flex space-x-12 text-[18px] text-black cursor-pointer pr-[40px]">
          <li className="py-[10px] border-solid border-transparent hover:border-yellow-300 focus:border-yellow-500 border-b-[3px]">
            <Link to="/">Home</Link>
          </li>
          <li className="py-[10px] border-solid border-transparent hover:border-yellow-300 focus:border-yellow-500 border-b-[3px]">
            <Link to="/About">About</Link>
          </li>
          <li className="py-[10px] border-solid border-transparent hover:border-yellow-300 focus:border-yellow-500 border-b-[3px]">
            <Link to="/Chatbot">ChatBot</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
