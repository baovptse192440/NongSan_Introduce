"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Nhập khẩu nông sản chất lượng cao",
    img: "/service_1.jpg",
  },
  {
    title: "Phân phối thực phẩm sạch",
    img: "/service_2.jpg",
  },
  {
    title: "Tư vấn và giải pháp nông nghiệp bền vững",
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
          Dịch vụ của chúng tôi!
        </motion.h4>

        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-3xl font-[DM_Sans] text-[#164333] tracking-tight md:text-5xl font-bold text-center leading-snug"
>
  Mang Đến Giải Pháp
  <br />
  <span className="text-[#164333]  font-[DM_Sans] tracking-tight mt-2 inline-block drop-shadow-md">
    Nông Sản Chất Lượng Cao!
  </span>
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-2xl mx-auto mt-6 text-lg"
        >
          AusGlobal Connection cung cấp các dịch vụ nhập khẩu và phân phối nông sản sạch, thực phẩm chất lượng cao từ Việt Nam đến thị trường Úc, đảm bảo minh bạch, uy tín và bền vững.
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
