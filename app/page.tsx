"use client";

import { useState } from "react";
import Header from "./common/header";
import AboutSection from "./common/about";
import ServicesSection from "./common/service";
import ScrollSection from "./common/scroll";
import TitleSection from "./common/title";
import Slider from "./common/slider";
import Feedback from "./common/feedback";
import Contact from "./common/contact";
import FaqSection from "./common/fasection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CoSection from "./common/CoSection";
import QC from "./common/QC";
import New from "./common/newSection";
import Footer from "./common/footer";
const slides = [
  {
    src: "hero_banner.jpg",
    title: "Xuất khẩu nông sản Việt Nam chất lượng cao",
    src_sub: "hero1_banner.jpg",
  },
  {
    src: "hero1_banner.webp",
    title: "Nông sản tươi ngon – Giao hàng toàn cầu",
  },
  {
    src: "hero2_banner.jpg",
    title: "Chúng tôi cam kết an toàn và bền vững",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="relative">
      <Header />

      {/* Hero Slider */}
<div className="relative h-[100vh] w-full overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="absolute inset-0"
    >
      {/* Background Image */}
      <img
        src={slides[current].src}
        alt={`Hero ${current}`}
        className="w-full h-full object-cover"
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center select-none">
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            text-white 
            font-bold 
            leading-tight 
            drop-shadow-2xl
            max-w-4xl
            text-3xl
            sm:text-4xl 
            md:text-5xl
            lg:text-6xl 
          "
        >
          {slides[current].title}
        </motion.h1>

        {/* Subtitle nếu muốn thêm */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/90 mt-4 text-base md:text-lg max-w-xl"
        >
          Hãy khám phá các sản phẩm chất lượng cao của chúng tôi
        </motion.p> */}
      </div>
    </motion.div>
  </AnimatePresence>

  {/* Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="
      absolute left-4 md:left-8 top-1/2 
      -translate-y-1/2 
      bg-white/20 hover:bg-white/40 
      backdrop-blur-xl 
      shadow-lg
      transition 
      p-2 md:p-3 
      rounded-full 
    "
  >
    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
  </button>

  <button
    onClick={nextSlide}
    className="
      absolute right-4 md:right-8 top-1/2 
      -translate-y-1/2 
      bg-white/20 hover:bg-white/40 
      backdrop-blur-xl 
      shadow-lg
      transition 
      p-2 md:p-3 
      rounded-full 
    "
  >
    <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
  </button>

  {/* Dot Indicators */}
  <div className="absolute bottom-8 md:bottom-12 w-full flex justify-center gap-4">
    {slides.map((_, idx) => (
      <motion.div
        key={idx}
        onClick={() => setCurrent(idx)}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        className={`
          w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition 
          ${idx === current ? "bg-white" : "bg-white/40"}
        `}
      />
    ))}
  </div>
</div>

     <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <ScrollSection></ScrollSection>
      <TitleSection></TitleSection>
      <Slider></Slider>
      <Feedback></Feedback>
      <Contact></Contact>
      <FaqSection></FaqSection>
      <QC></QC>
      <CoSection></CoSection>
      <New></New>
      <Footer></Footer>
    </main>
  );
}
