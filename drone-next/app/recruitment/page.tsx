import React from "react";
import logo from "../assets/logo.png";
export default function Recruitment() {
  return (
    <div className="w-[1280px] h-[90vh] relative bg-white overflow-hidden">


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