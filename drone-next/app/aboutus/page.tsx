

export default function Page() {
    return (
    <>

    <div className="bg-gradient-to-b from-gray-200 to-white w-full">
      <div className="w-[1200px] mx-auto relative p-10">
        {/* Parent container with width */}
        <div className="relative w-full flex">
          {/* Our Vision */}
          <img
            className="w-[196px] h-[195px] mt-6 rounded-[30px]"
            src="https://picsum.photos/196/195"
            alt="Vision Image"
            />


          <div className="ml-10">

          <div className="text-[#12152b] mt-6 text-2xl font-bold">
            OUR VISION:
          </div>
          <div className="mt-4 text-black text-lg font-normal">
            We are a team of passionate students dedicated to designing and building innovative drones. Our team provides a hands-on environment where members can apply the technical skills we learn in class, while exploring their passion for aerial robotics. Through collaboration, creativity, and problem-solving, we tackle real-world engineering challenges and push the boundaries of drone technology.
          </div>
          </div>
        </div>

      </div>

    </div>

      <div className="w-full bg-gradient-to-b from-gray-800 to-black">

        {/* Goals */}

        <div className="w-[1200px] flex mx-auto p-10">
            <div className="w-[80%]">
                        <div className="mt-10 text-[#F8F8F8] text-2xl font-bold">
                    OUR GOALS:
                    </div>
                    <div className="mt-4 text-[#F8F8F8] text-lg font-normal">
                    Our club is dedicated to designing and developing cutting-edge drones, pushing the boundaries of aerial robotics through innovation. We aim to enhance engineering education by providing students with hands-on opportunities such as workshops and technical training. We will equip members with the skills and experience with software needed for drone design, programming, and flight operations.
                    <br />
                    <br />
                    Our team will compete in a drone competition yearly and will dedicate the entire year to designing, building, and refining our drone, starting from scratch. Additionally, we hope to host drone events and showcases at McMaster University, engaging students and faculty while inspiring interest in drone technology.
                    </div>
            </div>

            <div className="my-16">


            <img
            className="w-[400px] h-60 mt-6 rounded-[30px]"
            src="https://picsum.photos/400/300"
            alt="Goals Image"
            />

            </div>






        </div>

        {/* Divider */}
        </div>

    </>
    );
  }
  