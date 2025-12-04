"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Green Farming",
    category: "Farming",
    description:
      "Explore sustainable agriculture with innovative organic methods.",
    image: "/san_pham.jpg",
  },
  {
    title: "Organic Vegetables",
    category: "Vegetables",
    description: "High-quality organic vegetables for healthy living.",
    image: "/san_pham1.jpg",
  },
  {
    title: "Fresh Fruits",
    category: "Fruits",
    description: "Seasonal fruits with natural sweetness and flavor.",
    image: "/san_pham2.jpg",
  },
  {
    title: "Dairy Products",
    category: "Dairy",
    description: "Fresh and organic milk, cheese, and yogurt products.",
    image: "/san_pham3.jpg",
  },
  {
    title: "Grain Production",
    category: "Grains",
    description: "High yield and premium quality grains for consumption.",
    image: "/san_pham4.jpg",
  },
  {
    title: "Herbs & Spices",
    category: "Herbs",
    description: "Natural herbs and spices to enhance your meals.",
    image: "/san_pham5.jpg",
  },
   {
    title: "Green Farming",
    category: "Farming",
    description:
      "Explore sustainable agriculture with innovative organic methods.",
    image: "/san_pham.jpg",
  },
  {
    title: "Organic Vegetables",
    category: "Vegetables",
    description: "High-quality organic vegetables for healthy living.",
    image: "/san_pham1.jpg",
  },
  {
    title: "Fresh Fruits",
    category: "Fruits",
    description: "Seasonal fruits with natural sweetness and flavor.",
    image: "/san_pham2.jpg",
  },
  {
    title: "Dairy Products",
    category: "Dairy",
    description: "Fresh and organic milk, cheese, and yogurt products.",
    image: "/san_pham3.jpg",
  },
  {
    title: "Grain Production",
    category: "Grains",
    description: "High yield and premium quality grains for consumption.",
    image: "/san_pham4.jpg",
  },
  {
    title: "Herbs & Spices",
    category: "Herbs",
    description: "Natural herbs and spices to enhance your meals.",
    image: "/san_pham5.jpg",
  },
];

export default function ProductSlider() {
  return (
    <div className="relative w-full">
     <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={15}                // khoảng cách giữa các card
  slidesPerView="auto"             // lấy width của slide trong class
  centeredSlides={true}            // căn giữa
  centeredSlidesBounds={true}       // giúp swiper không bị lệch
  loop={true}
  autoplay={{ delay: 4000 }}
  navigation={{
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  }}

  // padding để hiện nửa card hai bên
  style={{
    paddingLeft: "120px",
    paddingRight: "120px",
  }}
>
        {products.map((product, index) => (
          <SwiperSlide key={index} className="!w-[410px]">
            <motion.div
              className="relative w-[410px] h-[480px] overflow-hidden rounded-xl cursor-pointer group"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Span + H3 */}
              <motion.div
                className="absolute bottom-0 left-0 w-full px-6 py-6 bg-gradient-to-t from-[#1f4e3d] via-[#1f4e3d]/85 to-transparent z-20"
              
              >
                <motion.span
                  className="text-md text-yellow-300 block"
                  variants={{ rest: { y: 0 }, hover: { y: -65 } }}
                  transition={{ duration: 0.5 }}
                >
                  {product.category}
                </motion.span>
                <motion.h3
                  className="text-2xl text-white font-semibold"
                  variants={{ rest: { y: 0 }, hover: { y: -65 } }}
                  transition={{ duration: 0.5 }}
                >
                  {product.title}
                </motion.h3>
              </motion.div>

              {/* Description */}
              <motion.p
                className="absolute left-0 bottom-[30px] w-[calc(100%-48px)] mx-[24px] z-100 text-[#ddd] text-[16px] leading-relaxed opacity-0"
                variants={{
                  rest: { opacity: 0, y: 20 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                {product.description}
              </motion.p>

              {/* Arrow icon */}
              <motion.div
                className="absolute right-5 top-5 p-4 rounded-full bg-amber-300 opacity-0 scale-75"
                variants={{
                  rest: { opacity: 0, scale: 0.75, y: -10 },
                  hover: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ArrowRight color="white" size={26} />
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-25 z-50">
      
        <div className="swiper-button-prev-custom p-3 rounded-full bg-green-600 hover:bg-green-700 transition-colors cursor-pointer">
          <ArrowLeft color="white" size={24} />
        </div>
       
      </div>
      <div className="hidden  md:block absolute top-1/2 -translate-y-1/2 right-25 z-50">
        <div className="swiper-button-next-custom p-3 rounded-full bg-green-600 hover:bg-green-700 transition-colors cursor-pointer">
          <ArrowRight color="white" size={24} />
        </div>
      </div>
    </div>
  );
}
