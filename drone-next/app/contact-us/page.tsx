import React from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import logo from "../assets/logo.png"; // Adjust the path if necessary

export default function ContactUs() {
  return (
    <div className="w-[1280px] h-[1158px] relative bg-[#fcf8ee] overflow-hidden">
      
      <div className="w-full h-[142px] absolute top-0 left-0 bg-[#88dae7] opacity-50 shadow-md" />
      <img
        className="w-[126px] h-[115px] absolute top-[13px] left-[28px]"
        src={logo.src}
        alt="Club Logo"
      />

      <div className="w-[865px] h-[81px] absolute top-[53px] left-[207px] text-center text-black text-4xl font-bold">
        McMaster Aerial Robotics & Drones Club
      </div>

      
      <div className="left-[569px] top-[195px] absolute text-[#2364aa] text-3xl font-bold font-['Inria Sans'] underline">
        Contact Us
      </div>

      <div className="w-[1280px] h-[0px] left-0 top-[142px] absolute border border-black"></div>

      <form className="absolute left-[153px] top-[284px] w-[973px] h-[auto] bg-[#d9d9d9] opacity-50 rounded-[30px] p-4">
        <div className="mb-4">
          <label htmlFor="firstName" className="text-[#343131] text-[22px] font-light font-['Inria Sans']">First Name</label>
          <input type="text" id="firstName" name="firstName" className="w-full mt-2 p-2 rounded-md border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="text-[#343131] text-[22px] font-light font-['Inria Sans']">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="w-full mt-2 p-2 rounded-md border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-[#343131] text-[22px] font-light font-['Inria Sans']">Email</label>
          <input type="email" id="email" name="email" className="w-full mt-2 p-2 rounded-md border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-[#343131] text-[22px] font-light font-['Inria Sans']">Enter your message...</label>
          <textarea id="message" name="message" className="w-full mt-2 p-2 rounded-md border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
        </div>
        <button type="submit" className="w-full mt-2 p-2 rounded-md bg-[#2364aa] opacity-50 text-[#fcf8ee] text-3xl font-bold font-['Inria Sans'] focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          Send Message
        </button>
      </form>

      {/*icons for social media (placeholders for now but need to be updated*/}
      <div className="absolute left-[50%] top-[1001px] w-[400px] h-[75px] bg-lightblue flex justify-between items-center rounded-lg transform -translate-x-1/2">
        <a href="https://www.instagram.com/mac_droneclub/" className="text-2xl text-black">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/mcmaster-aerial-drone-robotics-club" className="text-2xl text-black">
          <FaLinkedinIn />
        </a>
        <a href="https://linktr.ee/macdrone" className="text-2xl text-black">
          <SiLinktree />
        </a>
        <a href="mailto:example@example.ca" className="text-2xl text-black">
          <FaEnvelope />
        </a>
      </div>
    </div>
    
  );
}