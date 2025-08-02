import Image from "next/image";
import { FaMapMarkedAlt, FaGlobeAmericas } from 'react-icons/fa';


export default function Competition() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-white-100">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 mb-10 underline text-center">
        Competitions
      </h1>
      <p className="max-w-2xl text-center text-black text-xl font-normal mb-16">
        Our team will be working year-round to compete at a high level, starting with the SUAS Canada
        competition and eventually advancing to the prestigious International SUAS Competition in the U.S.
      </p>

      {/* Competition Cards Side by Side */}
      <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-stretch">
        {/* AEAC Competition */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-10 flex flex-col items-start hover:scale-105 transition-transform duration-300 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gray-100 rounded-2xl">
              <FaMapMarkedAlt className="text-2xl text-gray-600" />
            </div>
            <h3 className="text-black text-2xl font-bold">
              AEAC Student UAS Competition
            </h3>
          </div>

          <p className="text-black text-base mb-6">
            The Student UAS Competition 2026 is an annual event where student teams design and test
            unmanned aerial systems (UAS). Teams compete in missions requiring autonomous flight,
            obstacle avoidance, and object detection. This competition provides an opportunity to
            showcase UAS innovation and engineering skills.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="bg-gray-50 px-3 py-2 rounded-2xl text-sm text-gray-700 border border-gray-200">
              🇨🇦 Canada
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded-2xl text-sm text-gray-700 border border-gray-200">
              📅 2026
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded-2xl text-sm text-gray-700 border border-gray-200">
              🎯 Autonomous Flight & Object Detection
            </div>
          </div>

          <a
            href="https://www.aerialevolution.ca/annual-student-competition/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-semibold underline hover:text-gray-900 transition-all"
          >
            AEAC Competition Details &rarr;
          </a>
        </div>

        {/* International SUAS Competition */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-10 flex flex-col items-start hover:scale-105 transition-transform duration-300 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gray-100 rounded-2xl">
              <FaGlobeAmericas className="text-2xl text-gray-600" />
            </div>
            <h3 className="text-black text-2xl font-bold">
              International SUAS Competition
            </h3>
          </div>

          <p className="text-black text-base mb-6">
            The International SUAS Competition is a global event where student teams worldwide
            compete to develop advanced autonomous UAS. The competition challenges teams with
            complex tasks such as autonomous flight and obstacle navigation, providing valuable
            experience in unmanned systems technology.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="bg-gray-50 px-3 py-2 rounded-2xl text-sm text-gray-700 border border-gray-200">
              🇺🇸 United States
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded-2xl text-sm text-gray-700 border border-gray-200">
              📅 Annual Event
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded-2xl text-sm text-gray-700 border border-gray-200">
              🚁 Advanced Autonomous Systems
            </div>
          </div>

          <a
            href="https://suas-competition.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-semibold underline hover:text-gray-900 transition-all"
          >
            International SUAS Details &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
