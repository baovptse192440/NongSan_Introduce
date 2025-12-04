"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Fresh Organic Farming",
    img: "/service_1.jpg",
  },
  {
    title: "Modern Dairy Production",
    img: "/service_2.jpg",
  },
  {
    title: "Sustainable Agriculture",
    img: "/service_3.jpg",
  },
];

export default function ServiceCardSection() {
  return (
    <section className="relative py-24 bg-gray-50">
        <div className="absolute top-0 ">
            <img src="dust-bg.png" alt="" />
        </div>

        <div className="absolute bottom-0 right-0 ">
        <img src="bg_2.png" alt="" />
        </div>
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-green-600 text-lg font-semibold mb-3 text-center"
        >
          Our Services!
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center leading-tight"
        >
          Delivering Top-Quality
          <br />
          <span className="text-green-600">Agricultural Services!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-2xl mx-auto mt-6 text-lg"
        >
          Agriculture is the backbone of our society, providing food, raw materials, and economic stability.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Card with Mask */}
              <div
                className="w-full h-[420px] bg-[#61CE70] shadow-xl flex flex-col items-center justify-start pt-5 relative"
                style={{
                  WebkitMaskImage: "url('/service-bg-mask.svg')",
                  maskImage: "url('/service-bg-mask.svg')",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              >
                {/* Image */}
                <div className="w-[85%] h-[220px] overflow-hidden mt-4">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform scale-[1.05] transition-all duration-[800ms] ease-[cubic-bezier(.5,1,.89,1)] hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white mt-6 text-2xl font-semibold drop-shadow-md">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
