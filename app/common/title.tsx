"use client";

import { motion } from "framer-motion";
import { GiWheat } from "react-icons/gi";

const headingText = "Khám Phá Sản Phẩm Chất Lượng Cao Của Chúng Tôi!";

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
                text-[#164333]
                text-base sm:text-lg md:text-xl 
                font-semibold 
                 tracking-tight
                mb-3 md:mb-4
              "
            >
             Sản Phẩm Nổi Bật

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
                 tracking-tight
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
               text-[#164333]
                text-sm sm:text-base md:text-lg 
                leading-relaxed 
                max-w-xl 
                mt-2
              "
            >
             Chúng tôi tự hào giới thiệu các sản phẩm nông sản nổi bật, được tuyển chọn kỹ lưỡng, đảm bảo chất lượng và minh bạch từ nguồn gốc đến tay người tiêu dùng.

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
    Xem Tất Cả Sản Phẩm

  </motion.a>
</div>

        </div>
      </div>
    </section>
  );
}
