"use client";

import { motion } from "framer-motion";
import { Wheat } from "lucide-react";

export default function CooperateSection() {
  return (
    <section className="relative w-full pb-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2  items-center">
        
        {/* LEFT IMAGE BLOCK – WITH OVERLAY BOX */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-full md:h-full overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/background-1.jpg')" }}
          />

          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Floating Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute  bg-[#1F4E3D] w-[55%] md:w-[55%] p-8 md:p-10  bottom-0 right-0  "
          >
            <img
              src="/line-pattern.png"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              alt=""
            />

            <h2 className="relative text-white font-dm-sans text-[26px] md:text-[32px] font-bold tracking-tight mb-4">
              100% Trusted!
            </h2>

            <ul className="relative space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-3 text-white text-[15px]">
                  <Wheat className="text-yellow-400" size={20} />
                  Tractor and harvester rentals farming
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-[#F8F7F0]/95 p-8 md:p-10 
                     bg-[url('/bg-rom.png')] bg-cover bg-center"
        >
          {/* Badges */}
          <motion.h4
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-green-700 font-semibold text-sm flex items-center gap-2"
          >
            Let’s Cooperate Together
            <Wheat className="w-5 h-5 text-yellow-400" />
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[46px] font-bold leading-tight text-[#164333] mt-2"
          >
            Get In Touch!
          </motion.h1>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Agriculture is the backbone of our society, providing food, raw
            materials, and economic stability.
          </p>

          {/* FORM */}
          <form className="mt-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Name", "Email", "Phone", "Subject"].map((ph, i) => (
                <motion.input
                  key={i}
                  type="text"
                  placeholder={ph}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full bg-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              ))}
            </div>

            <motion.textarea
              rows={4}
              placeholder="Message"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full bg-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#43aa5c] text-white py-3 px-8 rounded-md shadow-lg
                         hover:bg-[#f8c32c] hover:cursor-pointer hover:text-[#164333] transition font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
