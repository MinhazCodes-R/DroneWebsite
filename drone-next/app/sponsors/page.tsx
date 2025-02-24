import React from "react";
import logo from "../assets/logo.png";
export default function Sponsors() {
  return (
    <div className="w-[1280px] h-[1158px] relative bg-[#fcf8ee] overflow-hidden">
      {/* Top Header Section */}
      <div className="w-full h-[142px] absolute top-0 left-0 bg-[#88dae7] opacity-50 shadow-md" />
      <img
        className="w-[126px] h-[115px] absolute top-[13px] left-[28px]"
        src={logo.src}
        alt="Club Logo"
      />


      {/* Club Name */}
      <div className="w-[865px] h-[81px] absolute top-[53px] left-[207px] text-center text-black text-4xl font-bold">
        McMaster Aerial Robotics & Drones Club
      </div>

      {/* Sponsors Title */}
      <div className="left-[585px] top-[195px] absolute text-[#2364aa] text-3xl font-bold font-['Inria Sans'] underline">
        Sponsors
      </div>

      {/* Divider Line */}
      <div className="w-[1280px] h-[0px] left-0 top-[142px] absolute border border-black"></div>

      {/* Sponsorship Information */}
      <div className="w-[963px] h-[71px] left-[158px] top-[284px] absolute text-center text-black text-2xl font-normal font-['Inria Sans']">
        We are always looking for and welcoming sponsors to support our mission of innovation and
        hands-on learning in aerial robotics! Sponsorship helps us design and build advanced drones,
        compete in high-level competitions, and provide valuable opportunities for students. In
        return, we offer exposure, collaboration, and a chance to support the next generation of
        engineers. If you're interested in partnering with us, we'd love to connect!
      </div>
    </div>
  );
}