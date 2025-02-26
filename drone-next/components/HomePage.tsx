import logo from "../assets/logo.png";

export default function HomePage() {
  return (
    <div>
       <img
          className="w-[126px] h-[115px] absolute top-[13px] left-[28px]"
          src={logo.src}
          alt="Club Logo"
        />

        <div className="w-[100vw] h-[20px] bg-blue-300"></div>

    </div>
    );
  }
  




export function HomePage2() {
  return (
    <div className="w-[1280px] h-[1128px] relative bg-[#fcf8ee] overflow-hidden">
        
        <div className="w-full h-[142px] absolute top-0 left-0 bg-[#88dae7] opacity-50 shadow-md" />
        <img
          className="w-[126px] h-[115px] absolute top-[13px] left-[28px]"
          src={logo.src}
          alt="Club Logo"
        />
  
        <div className="w-[865px] h-[81px] absolute top-[53px] left-[207px] text-center text-black text-4xl font-bold">
          McMaster Aerial Robotics & Drones Club
        </div>
  
        <div className="absolute top-[447px] left-[310px] text-[#12152b] text-3xl font-bold">
          OUR VISION:
        </div>
        <div className="absolute top-[495px] left-[310px] w-[905px] text-black text-xl font-normal">
          We are a team of passionate students dedicated to designing and building innovative drones. Our team provides a hands-on environment where members can apply the technical skills we learn in class, while exploring their passion for aerial robotics. Through collaboration, creativity, and problem-solving, we tackle real-world engineering challenges and push the boundaries of drone technology.
        </div>
        <img
          className="w-[196px] h-[195px] absolute top-[447px] left-[53px] rounded-[30px]"
          src="https://placehold.co/196x195"
          alt="Vision Image"
        />
  
        {/*goals*/}
        <div className="absolute top-[704px] left-[53px] text-[#12152b] text-3xl font-bold">
          OUR GOALS:
        </div>
        <div className="absolute top-[756px] left-[53px] w-[788px] text-black text-xl font-normal">
          Our club is dedicated to designing and developing cutting-edge drones, pushing the boundaries of aerial robotics through innovation. We aim to enhance engineering education by providing students with hands-on opportunities such as workshops and technical training. We will equip members with the skills and experience with software needed for drone design, programming, and flight operations.
          <br />
          <br />
          Our team will compete in a drone competition yearly and will dedicate the entire year to designing, building, and refining our drone, starting from scratch. Additionally, we hope to host drone events and showcases at McMaster University, engaging students and faculty while inspiring interest in drone technology.
        </div>
        <img
          className="w-[336px] h-60 absolute top-[752px] left-[879px] rounded-[30px]"
          src="https://placehold.co/336x240"
          alt="Goals Image"
        />

        <div className="w-[1280px] h-[1px] absolute top-[142px] left-0 bg-black"></div>
  
        {/*update this with image or more text*/}
        <div className="absolute top-[276px] left-[555px] text-black text-xl font-bold">
          image or text here..
        </div>
      </div>
    );
  }
  