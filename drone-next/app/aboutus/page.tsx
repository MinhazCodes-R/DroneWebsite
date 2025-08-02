export default function Page() {
  return (
    <>
      {/* About Us Title */}
      <div className="w-full text-center py-10 bg-gray-100">
        {/* <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">About Us</h1> */}
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 flex-col justify-center underline text-center">
          About Us
        </h1>
      </div>

      {/* Vision Section */}
      <div className="bg-gradient-to-b from-gray-200 to-white w-full relative overflow-hidden">

        <div className="max-w-[1280px] w-full mx-auto relative p-6 md:p-10">
          <div className="relative w-full flex flex-col md:flex-row items-center md:items-start">
            <br />
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-[32px] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <img
                className="relative w-full max-w-[196px] md:w-[196px] rounded-[30px] mb-6 md:mb-0 shadow-xl transform hover:scale-105 transition duration-300"
                src="/sitePictures/fady_workshop.jpeg"
                alt="Vision Image"
              />
            </div>

            {/* Vision Text with neutral styling */}
            <div className="md:ml-10 text-center md:text-left">
              <div className="text-[#23272f] mt-6 text-2xl font-bold flex items-center justify-center md:justify-start">
                <span className="w-2 h-8 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full mr-3"></span>
                OUR VISION:
              </div>
              <div className="mt-4 text-gray-800 text-lg font-normal leading-relaxed">
                We are a team of passionate students dedicated to designing and building innovative drones.
                Our team provides a hands-on environment where members can apply the technical skills we
                learn in class while exploring their passion for aerial robotics. Through collaboration,
                creativity, and problem-solving, we tackle real-world engineering challenges and push the
                boundaries of drone technology.
              </div>

              {/* Feature highlights */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-gray-200 hover:shadow-md transition duration-300">
                  <div className="font-semibold text-gray-700">Innovation</div>
                  <div className="text-gray-600">Cutting-edge designs</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-gray-200 hover:shadow-md transition duration-300">
                  <div className="font-semibold text-gray-700">Collaboration</div>
                  <div className="text-gray-600">Team-driven approach</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-gray-200 hover:shadow-md transition duration-300">
                  <div className="font-semibold text-gray-700">Education</div>
                  <div className="text-gray-600">Hands-on learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="w-full bg-gradient-to-b from-gray-800 to-black relative overflow-hidden">

        <div className="max-w-[1280px] w-full flex flex-col md:flex-row mx-auto p-6 md:p-10 relative z-10">
          <div className="w-full md:w-[70%] text-center md:text-left flex flex-col justify-center">
            <div className="mt-10 flex items-center justify-center md:justify-start gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></span>
              <span className="text-[#F8F8F8] text-2xl font-bold tracking-wide decoration-gray-500 underline-offset-4">
                OUR GOALS:
              </span>
            </div>
            <div className="mt-4 text-[#F8F8F8] text-lg font-normal leading-relaxed drop-shadow">
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

          <div className="w-full md:w-[30%] flex justify-center md:justify-end my-10 md:my-16 relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-gray-500/30 to-gray-900/10 rounded-[32px] blur opacity-30 pointer-events-none"></div>
            <img
              className="h-auto md:h-72 rounded-[30px] shadow-2xl border-2 border-gray-700 object-cover relative z-10 transition-transform duration-300 hover:scale-105"
              src="/sitePictures/firstTeamMeet.jpeg"
              alt="Goals Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
