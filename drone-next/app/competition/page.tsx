import Image from "next/image";


export default function Competition() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-white-100" >
      {/* Header */}

      {/* Competition Title */}
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">Competition</h2>

      <div>

      <p className="max-w-[987px] text-center text-black text-xl font-normal mt-6">
        Our team will be working year-round to compete at a high level, starting with the SUAS Canada 
        competition and eventually advancing to the prestigious International SUAS Competition in the U.S.
      </p>

      </div>



      {/* Competition Details */}
      <div className=" mt-20">
        {/* AEAC Competition */}
        <div className="max-w-[1121px] mx-auto space-y-12 p-10 rounded-3xl"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <h3 className="text-black text-3xl font-bold">AEAC Student UAS Competition</h3>
          <p className="text-black text-lg mt-2">
            The Student UAS Competition 2026 is an annual event where student teams design and test 
            unmanned aerial systems (UAS). Teams compete in missions requiring autonomous flight, 
            obstacle avoidance, and object detection. This competition provides an opportunity to 
            showcase UAS innovation and engineering skills.
          </p>
          <a
            href="https://www.aerialevolution.ca/annual-student-competition/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-lg font-bold underline hover:text-blue-800 transition-all"
          >
            AEAC Student UAS Competition Details
          </a>
        </div>
        <div className="h-[10vh]"></div>

        {/* International SUAS Competition */}
        <div className="max-w-[1121px] mx-auto space-y-12 p-20 rounded-3xl"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <h3 className="text-black text-3xl font-bold">International SUAS Competition</h3>
          <p className="text-black text-lg mt-2">
            The International SUAS Competition is a global event where student teams worldwide 
            compete to develop advanced autonomous UAS. The competition challenges teams with 
            complex tasks such as autonomous flight and obstacle navigation, providing valuable 
            experience in unmanned systems technology.
          </p>
          <a
            href="https://suas-competition.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-lg font-bold underline hover:text-blue-800 transition-all"
          >
            International SUAS Competition Details
          </a>
        </div>
      </div>
    </div>
  );
}