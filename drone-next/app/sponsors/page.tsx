// app/sponsors/page.tsx
import React from 'react';

export default function SponsorsPage() {
  return (
    <div
      className="min-h-screen min-w-[100vw] bg-[radial-gradient(circle,_rgba(80,80,80,1)_10%,_rgba(30,30,30,1)_90%)] 
                  flex flex-col items-center px-6 py-16"
    >
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white mb-8">
        Our Sponsors
      </h1>

      <div className="max-w-3xl text-center text-white text-xl font-normal mb-12">
        We are proud to be supported by generous sponsors who believe in our mission of innovation
        and hands-on learning in aerial robotics.
      </div>

      {/* PDF Embed */}
      <div className="w-full max-w-4xl h-[800px] bg-white rounded-xl shadow-md overflow-hidden">
        <iframe
          src="/sponsorship_package/SponsorPackage.pdf"
          title="Sponsorship Package"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
