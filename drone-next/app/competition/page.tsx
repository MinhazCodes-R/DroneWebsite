import logo from "../assets/logo.png";
export default function Competition() {
  return (
    <div className="w-[1280px] h-[1038px] relative bg-[#fcf8ee] overflow-hidden">
      {/*header*/}
      <div className="w-[1280px] h-[142px] left-0 top-0 absolute opacity-50 bg-[#88dae7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <img
        className="w-[126.41px] h-[115px] left-[28px] top-[13px] absolute"
        src={logo.src}
        alt="Club Logo"
      />

      {/* Competition Title */}
      <div className="left-[540px] top-[195px] absolute text-[#2364aa] text-3xl font-bold font-['Inria Sans'] underline">
        Competition
      </div>

      
      <div className="w-[1280px] h-[0px] left-0 top-[142px] absolute border border-black"></div>

    
      <div className="w-[865px] h-[81px] left-[207px] top-[53px] absolute text-center text-black text-4xl font-bold font-['Inria Sans']">
        McMaster Aerial Robotics & Drones Club
      </div>

      {/*description*/}
      <div className="w-[1121px] h-[445px] left-[79px] top-[378px] absolute">
        <span className="text-black text-[32px] font-bold font-['Inria Sans']">AEAC Student UAS Competition<br /><br /></span>
        <span className="text-black text-xl font-normal font-['Inria Sans']">
          Student UAS Competition 2026 is an annual event where student teams design and test unmanned aerial systems (UAS). Teams compete in missions that require autonomous flight, obstacle avoidance, and object detection. The competition offers students a chance to showcase their UAS innovation and engineering skills.<br />
        </span>
        <span className="text-black text-xl font-bold font-['Inria Sans'] underline">
          <a href="https://www.aerialevolution.ca/annual-student-competition/" target="_blank" rel="noopener noreferrer">
          AEAC Student UAS Competition Details
          </a>
        </span>
        <br /><br /><br/><br/><br/>
        <span className="text-black text-[32px] font-bold font-['Inria Sans']">International SUAS Competition<br /><br /></span>
        <span className="text-black text-xl font-normal font-['Inria Sans']">
          The International SUAS Competition is a global event that happens annually, where student teams from around the world compete to develop advanced autonomous UAS. The competition challenges teams to complete complex tasks, including autonomous flight and obstacle navigation, providing valuable experience in unmanned systems technology.<br />
        </span>
        <span className="text-black text-xl font-bold font-['Inria Sans'] underline">
          <a href="https://suas-competition.org/" target="_blank" rel="noopener noreferrer">
            International SUAS Competition Details
          </a>
        </span>
      </div>

      <div className="w-[987px] h-[71px] left-[146px] top-[245px] absolute text-center text-black text-xl font-normal font-['Inria Sans']">
        Our team will be working year round on preparing to compete at a high level, starting with the SUAS Canada competition and eventually advancing to the prestigious International SUAS Competition in the U.S.
      </div>
    </div>
  );
}