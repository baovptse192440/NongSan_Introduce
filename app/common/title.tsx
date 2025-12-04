"use client";

import { motion } from "framer-motion";
import { GiWheat } from "react-icons/gi";

const headingText = "Sustainable Farming For Better Harvests!";

export default function FarmingProjectsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Responsive grid: 1 cột trên mobile, 2 cột từ md trở lên */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT TEXT BLOCK */}
          <div>
            {/* Subheading */}
            <h4 className="flex items-center gap-2 text-green-700 text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Farming Projects!
              <GiWheat size={28} className="text-yellow-500" />
            </h4>

            {/* Main heading animated */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-4">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05 },
                  },
                }}
              >
                {headingText}
              </motion.span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Agriculture is the backbone of our society, providing food,
              raw materials, and economic stability.
            </p>
          </div>

          {/* RIGHT CTA BUTTON */}
          <div className="flex md:justify-end justify-start">
            <motion.a
              href="/projects"
              className="bg-[#f8c32c] text-white font-semibold px-8 py-4 rounded-lg shadow-lg 
                         hover:text-gray-700 transition text-center w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
