import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        className="p-2 bg-gray-300 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰ Menu
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border p-2">
          <Link href="/" className="block py-1">Home</Link>
          <Link href="/competition" className="block py-1">Competition</Link>
          <Link href="/meet-our-team" className="block py-1">Meet Our Team</Link>
          <Link href="/our-drone" className="block py-1">Our Drone</Link>
          <Link href="/recruitment" className="block py-1">Recruitment</Link>
          <Link href="/sponsors" className="block py-1">Sponsors</Link>
          <Link href="/contact-us" className="block py-1">Contact Us</Link>
        </div>
      )}
    </div>
  );
}
