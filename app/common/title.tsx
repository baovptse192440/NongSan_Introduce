"use client";

import { motion } from "framer-motion";
import { GiWheat } from "react-icons/gi";

const headingText = "Sustainable Farming For Better Harvests!";

export default function FarmingProjectsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* GRID RESP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-left">

            {/* Subheading */}
            <h4
              className="
                flex items-center gap-2 
                text-green-700 
                text-base sm:text-lg md:text-xl 
                font-semibold 
                mb-3 md:mb-4
              "
            >
              Farming Projects!
              <GiWheat size={26} className="text-yellow-500" />
            </h4>

            {/* Heading */}
            <h2
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-5xl 
                font-bold 
                text-gray-900 
                leading-snug 
                mb-4 sm:mb-5
              "
            >
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
              >
                {headingText}
              </motion.span>
            </h2>

            {/* Paragraph */}
            <p
              className="
                text-gray-600 
                text-sm sm:text-base md:text-lg 
                leading-relaxed 
                max-w-xl 
                mt-2
              "
            >
              Agriculture is the backbone of our society, providing food,
              raw materials, and economic stability.
            </p>
          </div>

         {/* RIGHT BUTTON */}
<div className="flex  justify-start md:justify-end w-full">
  <motion.a
    href="/projects"
    className="
      bg-[#f8c32c] 
      text-white 
      font-semibold 
      px-6 py-3        /* padding nhỏ hơn cho mobile */
      md:px-8 md:py-4  /* lớn lại cho tablet/desktop */
      rounded-lg 
      shadow-xl
      hover:text-gray-700 
      transition 
      text-center
      w-auto  md:mx-0   /* FIX RESPONSIVE */
    "
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
