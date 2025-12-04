"use client";

import { motion } from "framer-motion";
import { Star,ArrowLeft, ArrowRight , Quote } from "lucide-react";
import { GiWheat } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // import CSS pagination
const subHeading = " Phản Hồi";
const headingText = "Từ Khách Hàng Úc!";
const testimonials = [
  {
    name: "Scott Gonzalez",
    position: "Corporate .INC",
    avatar: "avatar_1.jpg",
    image: "chili.png",
    quote: "This weeder is lightweight and easy to handle. Works best in soft, moist soil. It helps reduce manual labor and is a great addition for kitchen organic plots.",
    rating: 5,
  },
   {
    name: "Scott Gonzalez",
    position: "Corporate .INC",
    avatar: "avatar_1.jpg",
    image: "chili.png",
    quote: "This weeder is lightweight and easy to handle. Works best in soft, moist soil. It helps reduce manual labor and is a great addition for kitchen organic plots.",
    rating: 5,
  },
   {
    name: "Scott Gonzalez",
    position: "Corporate .INC",
    avatar: "avatar_1.jpg",
    image: "chili.png",
    quote: "This weeder is lightweight and easy to handle. Works best in soft, moist soil. It helps reduce manual labor and is a great addition for kitchen organic plots.",
    rating: 5,
  },
   {
    name: "Scott Gonzalez",
    position: "Corporate .INC",
    avatar: "avatar_1.jpg",
    image: "chili.png",
    quote: "This weeder is lightweight and easy to handle. Works best in soft, moist soil. It helps reduce manual labor and is a great addition for kitchen organic plots.",
    rating: 5,
  },
   {
    name: "Scott Gonzalez",
    position: "Corporate .INC",
    avatar: "avatar_1.jpg",
    image: "chili.png",
    quote: "This weeder is lightweight and easy to handle. Works best in soft, moist soil. It helps reduce manual labor and is a great addition for kitchen organic plots.",
    rating: 5,
  },
   {
    name: "Scott Gonzalez",
    position: "Corporate .INC",
    avatar: "avatar_1.jpg",
    image: "chili.png",
    quote: "This weeder is lightweight and easy to handle. Works best in soft, moist soil. It helps reduce manual labor and is a great addition for kitchen organic plots.",
    rating: 5,
  },
];

export default function TestimonialsHeading() {
  // Split text thành array các ký tự
  const splitText = headingText.split("");

  return (
    <section className="relative bg-[#F8F7F0]  py-20 ">
        <div className="absolute">
            <img src="dust-bg.png" alt="" />
        </div>
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Subheading */}
        <div className="flex flex-col justify-center items-center">

        
        <h4 className="flex items-center justify-center md:justify-start gap-2 text-green-700 text-lg font-semibold mb-4 relative">
          
          <span className="relative overflow-hidden">
            
            {subHeading}
          </span>
          <GiWheat size={28} color="yellow" />
        </h4>

        {/* Main heading */}
        <h2 className="text-[#164333] font-[DM_Sans] text-[46px] font-bold leading-[54px] tracking-[-1px]">
            Feedback From
        </h2>
        <h2 className="text-[#164333] font-[DM_Sans] text-[46px] font-bold leading-[54px] tracking-[-1px] mb-[20px] ">
            our Community!
        </h2>
        {/* Paragraph */}
        <motion.p
          className="font-dm-sans text-[17px] font-normal text-center leading-[28px] tracking-[-0.2px] text-[#797F7D]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
           Khách hàng tại Úc rất hài lòng với các sản phẩm cà phê và đặc sản của AusGlobal Connection. 
           Phản hồi của họ nhấn mạnh chất lượng,
            hương vị thơm ngon và sự ổn định trong từng lô hàng.
          
        </motion.p>
      </div>
       <div className="relative w-full py-10 group">
      <Swiper
  modules={[Navigation, Autoplay, Pagination]}
  slidesPerView={3}             // Luôn hiển thị 3 card
  spaceBetween={20}             // Khoảng cách giữa các card
  centeredSlides={false}        // Không căn giữa, chia đều
  loop={true}                   // Vô hạn
  loopFillGroupWithBlank={true} // Nếu không đủ slide, fill để không mất card
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  navigation={{
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  }}
 pagination={{
  el: ".swiper-pagination",
  clickable: true,
}} // Hiển thị dots và có thể click
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 15 },
    768: { slidesPerView: 2, spaceBetween: 15 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  }}
  
>

        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="py-4">
  <div className="relative rounded-xl bg-white py-10 px-7 cursor-pointer shadow-xs overflow-hidden">
    <div className="absolute h-full">
      <img src="chili.png" alt="" />
    </div>

    {/* Background Image */}
    <img
      src={item.image}
      alt=""
      className="absolute h-full w-full object-cover top-0 left-0 opacity-10"
    />

    {/* Quote Icon */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl text-yellow-500">
      <Quote className="w-7 h-7" />
    </div>

    {/* Avatar + Name + Position */}
    <div className="flex gap-5 mb-6 relative z-10">
      <div className="w-[80px] h-[80px]">
        <img
          className="h-full w-full rounded-full object-cover"
          src={item.avatar}
          alt={item.name}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-[22px] font-semibold text-[#164333] mb-1">
          {item.name}
        </h3>
        <h4 className="text-[20px] font-medium text-[#F8C32C] m-0">
          {item.position}
        </h4>
      </div>
    </div>

    {/* Quote Text */}
    <p className="text-[18px] leading-8 text-[#164333] mb-15 relative z-10">
      "{item.quote}"
    </p>

    {/* Stars */}
    <ul className="flex mt-4 relative z-10">
      {Array.from({ length: item.rating }).map((_, i) => (
        <li key={i}>
          <Star color="#FF9529" fill="#FF9529" size={20} strokeWidth={1.5} />
        </li>
      ))}
    </ul>
  </div>
</SwiperSlide>

        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[-25px] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="swiper-button-prev-custom p-3 rounded-full bg-green-600 hover:bg-green-700 transition-colors cursor-pointer">
          <ArrowLeft color="white" size={24} />
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[-25px] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="swiper-button-next-custom p-3 rounded-full bg-green-600 hover:bg-green-700 transition-colors cursor-pointer">
          <ArrowRight color="white" size={24} />
        </div>
      </div>
    </div>
    <div className="swiper-pagination mt-6"></div>
      </div>
      

    </section>
  );
}
