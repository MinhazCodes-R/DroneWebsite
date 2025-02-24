"use client";
import Link from "next/link";
import "./globals.css"; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#fcf8ee]">
        {/*navigation bar at top of pages*/}
        <nav className="w-full h-[80px] bg-[#121B2B] shadow-md flex justify-center items-center">
          <ul className="flex space-x-8 text-white text-lg font-nomral">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/meet-our-team" className="hover:underline">Meet Our Team</Link></li>
            <li><Link href="/competition" className="hover:underline">Competition</Link></li>
            <li><Link href="/our-drone" className="hover:underline">Our Drone</Link></li>
            <li><Link href="/recruitment" className="hover:underline">Recruitment</Link></li>
            <li><Link href="/sponsors" className="hover:underline">Sponsors</Link></li>
            <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </nav>

        {/* page content */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}