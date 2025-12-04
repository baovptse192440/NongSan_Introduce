"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative  text-white bg-cover  bg-center py-16 mt-20"
    style={{ backgroundImage: "url('/footer-background.jpg')" }}
    >
        <div className="w-full h-full absolute bg-[#164333]/90 bottom-0 z-1"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 z-20 relative">
    
        {/* BRAND + ABOUT */}
        <div>
          <Image
            src="/logo_AU_White.png"
            alt="Logo"
            width={150}
            height={60}
            className="mb-5"
          />
          <p className="text-gray-200 leading-relaxed text-sm">
            Dedicated to sustainable and innovative farming practices,
            producing high-quality crops while protecting the environment.
          </p>

          {/* Social Icons */}
          <div className="flex gap-2 mt-6">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-xs bg-[#43aa5c] hover:bg-[#f8c32c] transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Information</h3>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li><a href="#" className="hover:text-[#f8c32c] transition">Company</a></li>
            <li><a href="#" className="hover:text-[#f8c32c] transition">Our Farmers</a></li>
            <li><a href="#" className="hover:text-[#f8c32c] transition">Farming Services</a></li>
            <li><a href="#" className="hover:text-[#f8c32c] transition">Help & FAQs</a></li>
            <li><a href="#" className="hover:text-[#f8c32c] transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Get In Touch</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="text-[#f8c32c] font-semibold">Address:</p>
              <p className="text-gray-200">785 15h Street, Office 478 Berlin, DE 81566</p>
            </li>
            <li>
              <p className="text-[#f8c32c] font-semibold">Phone:</p>
              <p className="text-gray-200">(704) 555-0127</p>
            </li>
            <li>
              <p className="text-[#f8c32c] font-semibold">Mail Us:</p>
              <a href="mailto:agrox@example.com" className="text-gray-200 hover:text-[#f8c32c]">
                agrox@example.com
              </a>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Subscribe Newsletter</h3>

          <form className="flex relative flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md bg-white text-[#164333] outline-none"
            />

            <button
              type="submit"
              className="absolute right-0 px-4 py-3 rounded-md bg-[#f8c32c] text-[#164333] font-semibold hover:cursor-pointer transition"
            >
              <Send />
            </button>
          </form>

          <p className="text-gray-200 text-sm mt-4">
            Get the latest updates and offers for business services yearly.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center z-20 relative text-gray-300 text-sm mt-16 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Agrox. All Rights Reserved.
      </div>
    </footer>
  );
}
