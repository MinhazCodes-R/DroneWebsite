import React from "react";

export default function Recruitment() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-12">

      {/* Info Section */}
      <div className="max-w-[1030px] w-full text-center bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
        <p className="text-black text-lg sm:text-2xl font-normal font-['Inria Sans'] leading-relaxed">
          Our team is currently full, and applications are closed.
        </p>
        <br />
        <p className="text-black text-base sm:text-xl font-normal font-['Inria Sans'] leading-relaxed">
          We open applications annually at the beginning of the academic year (September) to expand
          our team and welcome passionate, skilled students who are eager to contribute. If you're
          interested in joining or learning more about our work, feel free to reach out – we'd love
          to connect and share more about our club's mission and opportunities!
        </p>

        <button
          disabled
          className="mt-8 px-8 py-3 bg-gray-300 text-gray-500 font-medium rounded-2xl cursor-not-allowed"
        >
          Applications open soon
        </button>
      </div>

    </div>
  );
}
