export default function Page() {
  return (
    <>
      {/* About Us Title */}
      <div className="w-full text-center py-10 bg-gray-100">
      {/* <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">About Us</h1> */}
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 mb-6 sm:mb-8 underline text-center">
      About Us
        </h1>
      </div>

      {/* Vision Section */}
      <div className="bg-gradient-to-b from-gray-200 to-white w-full">
        <div className="max-w-[1280px] w-full mx-auto relative p-6 md:p-10">
          <div className="relative w-full flex flex-col md:flex-row items-center md:items-start">
            {/* Vision Image */}
            <br />
            <img
              className="w-full max-w-[196px] md:w-[196px] rounded-[30px] mb-6 md:mb-0"
              src="/sitePictures/fady_workshop.jpeg"
              alt="Vision Image"
            />

            {/* Vision Text */}
            <div className="md:ml-10 text-center md:text-left">
              <div className="text-[#12152b] mt-6 text-2xl font-bold">OUR VISION:</div>
              <div className="mt-4 text-black text-lg font-normal">
                We are a team of passionate students dedicated to designing and building innovative drones.
                Our team provides a hands-on environment where members can apply the technical skills we
                learn in class while exploring their passion for aerial robotics. Through collaboration,
                creativity, and problem-solving, we tackle real-world engineering challenges and push the
                boundaries of drone technology.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="w-full bg-gradient-to-b from-gray-800 to-black">
        <div className="max-w-[1280px] w-full flex flex-col md:flex-row mx-auto p-6 md:p-10">
          
          {/* Goals Text */}
          <div className="w-full md:w-[70%] text-center md:text-left">
            <div className="mt-10 text-[#F8F8F8] text-2xl font-bold">OUR GOALS:</div>
            <div className="mt-4 text-[#F8F8F8] text-lg font-normal">
              Our club is dedicated to designing and developing cutting-edge drones, pushing the boundaries
              of aerial robotics through innovation. We aim to enhance engineering education by providing
              students with hands-on opportunities such as workshops and technical training. We will equip
              members with the skills and experience with software needed for drone design, programming, and
              flight operations.
              <br />
              <br />
              Our team will compete in a drone competition yearly and will dedicate the entire year to
              designing, building, and refining our drone, starting from scratch. Additionally, we hope to
              host drone events and showcases at McMaster University, engaging students and faculty while
              inspiring interest in drone technology.
            </div>
          </div>

          {/* Goals Image */}
          <div className="w-full md:w-[30%] flex justify-center md:justify-end my-10 md:my-16">
            <img
              className="h-auto md:h-72 rounded-[30px]"
              src="/sitePictures/firstTeamMeet.jpeg"
              alt="Goals Image"
            />
          </div>
          
        </div>
      </div>
    </>
  );
}
