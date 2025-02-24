import React from "react";
import logo from "../assets/logo.png";
export default function Recruitment() {
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

      <div className="left-[556px] top-[195px] absolute text-[#2364aa] text-3xl font-bold font-['Inria Sans'] underline">
        Recruitment
      </div>

      <div className="w-[1280px] h-[0px] left-0 top-[142px] absolute border border-black"></div>

      {/*info*/}
      <div className="w-[1030px] h-[71px] left-[125px] top-[284px] absolute text-center">
        <span className="text-black text-2xl font-normal font-['Inria Sans']">
          Our team is currently full, and applications are closed.
          <br />
        </span>
        <span className="text-black text-xl font-normal font-['Inria Sans']">
          <br />
          We open applications annually at the beginning of the academic year (September) to expand
          our team and welcome passionate, skilled students who are eager to contribute. If you're
          interested in joining or learning more about our work, feel free to reach out – we’d love
          to connect and share more about our club's mission and opportunities!
          <br />
        </span>
      </div>
    </div>
  );
}