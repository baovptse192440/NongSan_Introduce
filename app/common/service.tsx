"use client";

import { motion } from "framer-motion";
import { Coffee, Sprout, UtensilsCrossed } from "lucide-react";

const services = [
  {
    title: "Vietnamese Coffee",
    desc: "Premium roasted beans and ground coffee, delivering the authentic taste of Vietnam.",
    img: "/service_1.jpg",
    icon: Coffee,
  },
  {
    title: "Fresh Agricultural Products",
    desc: "Selected vegetables, herbs, and crops sourced directly from trusted farmers.",
    img: "/service_2.jpg",
    icon: Sprout,
  },
  {
    title: "Asian Specialty Foods",
    desc: "Authentic ingredients and packaged goods from across Asia for diverse culinary needs.",
    img: "/service_3.jpg",
    icon: UtensilsCrossed,
  },
];


export default function ServiceCardSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        {/* Background decorative - hidden on mobile */}
        <div className="absolute top-0 hidden md:block">
            <img src="dust-bg.png" alt="" className="opacity-60" />
        </div>

        <div className="absolute bottom-0 right-0 hidden md:block">
          <img src="bg_2.png" alt="" className="opacity-60" />
        </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-green-600 text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center"
        >
          Our Services
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#164333] tracking-tight font-bold text-center leading-tight sm:leading-snug"
        >
          Delivering Premium
          <br />
          <span className="text-[#164333] inline-block">
            Agricultural Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base md:text-lg px-4"
        >
          At AusGlobal Connection, we provide comprehensive import and distribution services, bringing premium Vietnamese agricultural products and authentic Asian foods to the Australian market.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center h-full bg-[#43aa5c] w-full"
              style={{
                maskImage: "url('/service-bg-mask.svg')",
                textAlign: "center",
                WebkitMaskSize: "100%",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            >
              {/* Card with Mask */}
              <div
                className="w-full h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px] bg-[#e6e7e8] shadow-xl flex flex-col items-center justify-start relative"
                style={{
                  WebkitMaskImage: "url('/service-bg-mask.svg')",
                  maskImage: "url('/service-bg-mask.svg')",
                  WebkitMaskSize: "calc(100% - 20px)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              >
              <div className="bg-white h-full w-full"
                style={{
                  WebkitMaskImage: "url('/service-bg-mask.svg')",
                  maskImage: "url('/service-bg-mask.svg')",
                  WebkitMaskSize: "calc(100% - 30px)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              >
                  {/* Image */}
                <div className="w-full h-[200px] md:h-[200px] lg:h-[265px] overflow-hidden"
                style={{
                  WebkitMaskImage: "url('/service-img-mask.png')",
                  maskImage: "url('/service-img-mask.png')",
                  WebkitMaskSize: "100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "top center",
                  maskPosition: "top center",
                }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform scale-[1.05] transition-all duration-700 ease-[cubic-bezier(.5,1,.89,1)] hover:scale-110"
                  />
                </div>

                {/* Icon */}
                <div 
                  className="absolute md:block hidden left-1/2 -translate-x-1/2 md:flex items-center justify-center z-10
                    h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px]
                    top-[150px] sm:top-[170px] md:top-[190px] lg:top-[200px]"
                >
                  <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
                    {service.icon && (
                      <service.icon 
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-600" 
                        strokeWidth={2}
                      />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#164333] mt-4 text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-md px-3 sm:px-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                {service.desc && (
                  <p className="text-gray-700 mt-2 sm:mt-3 text-xs sm:text-sm px-4 sm:px-6 leading-relaxed hidden md:block">
                    {service.desc}
                  </p>
                )}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
