import React from "react";

export default function ContactUs() {
  return (
    <div className="w-[1280px] h-[1158px] relative bg-[#fcf8ee] overflow-hidden">
      
      <div className="w-full h-[142px] absolute top-0 left-0 bg-[#88dae7] opacity-50 shadow-md" />
      <img
        className="w-[126px] h-[115px] absolute top-[13px] left-[28px]"
        src="https://placehold.co/126x115"
        alt="Club Logo"
      />
      <img
        className="w-[72px] h-[72px] absolute top-[42px] left-[1164px]"
        src="https://placehold.co/72x72"
        alt="Menu Icon"
      />

      <div className="w-[865px] h-[81px] absolute top-[53px] left-[207px] text-center text-black text-4xl font-bold">
        McMaster Aerial Robotics & Drones Club
      </div>

      
      <div className="left-[569px] top-[195px] absolute text-[#2364aa] text-3xl font-bold font-['Inria Sans'] underline">
        Contact Us
      </div>

      <div className="w-[1280px] h-[0px] left-0 top-[142px] absolute border border-black"></div>

      {/*fields*/}
      <div className="absolute left-[153px] top-[284px] w-[474px] h-[62px] bg-[#d9d9d9] opacity-50 rounded-[30px]" />
      <div className="absolute left-[153px] top-[360px] w-[474px] h-[62px] bg-[#d9d9d9] opacity-50 rounded-[30px]" />
      <div className="absolute left-[153px] top-[436px] w-[474px] h-[62px] bg-[#d9d9d9] opacity-50 rounded-[30px]" />
      <div className="absolute left-[652px] top-[284px] w-[474px] h-[214px] bg-[#d9d9d9] opacity-50 rounded-[30px]" />

      {/*button*/}
      <div className="absolute left-[153px] top-[517px] w-[973px] h-[62px] bg-[#2364aa] opacity-50 rounded-[30px]" />
      <div className="absolute left-[347px] top-[531px] w-[585px] h-[34px] text-center text-[#fcf8ee] text-3xl font-bold font-['Inria Sans']">
        Send Message
      </div>

      {/*form labels*/}
      <div className="absolute left-[179px] top-[301px] text-[#343131] text-[22px] font-light font-['Inria Sans']">
        First Name
      </div>
      <div className="absolute left-[179px] top-[374px] text-[#343131] text-[22px] font-light font-['Inria Sans']">
        Last Name
      </div>
      <div className="absolute left-[179px] top-[450px] text-[#343131] text-[22px] font-light font-['Inria Sans']">
        Email
      </div>
      <div className="absolute left-[678px] top-[305px] text-[#343131] text-[22px] font-light font-['Inria Sans']">
        Enter your message...
      </div>

      {/*icons for social media (placeholders for now but need to be updated*/}
      <div className="absolute left-[531px] top-[1001px]">
        <img src="https://placehold.co/75x75" alt="Social Icon 1" />
      </div>
      <div className="absolute left-[961px] top-[983px]">
        <img src="https://placehold.co/114x114" alt="Social Icon 2" />
      </div>
      <div className="absolute left-[746px] top-[1001px]">
        <img src="https://placehold.co/75x75" alt="Social Icon 3" />
      </div>
      <div className="absolute left-[316px] top-[1009px]">
        <img src="https://placehold.co/75x57" alt="Social Icon 4" />
      </div>
    </div>
    
  );
}