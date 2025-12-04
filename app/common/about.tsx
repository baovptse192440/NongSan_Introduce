"use client";

import { motion } from "framer-motion";
import { Phone, Tractor, Wheat } from "lucide-react";

const featureData = [
  {
    title: "Chất lượng vượt trội",
    desc: "Sản phẩm được lựa chọn kỹ lưỡng, đạt chuẩn xuất khẩu Úc."
  },
  {
    title: "Nguồn gốc minh bạch",
    desc: "Kiểm soát chặt chẽ quy trình sản xuất, truy xuất nguồn gốc rõ ràng."
  },

];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative pt-24 bg-gray-50 overflow-hidden"
    >
      {/* Background decorative */}
      <div className="absolute bottom-0 right-0 w-[40%] opacity-60 pointer-events-none">
        <img src="/bg-web.png" alt="" className="w-full h-auto" />
      </div>

      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ------- IMAGE SECTION ------- */}
          <motion.div
            className="relative  w-full h-[420px] md:h-[500px] lg:h-[550px] flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Main image */}
            <motion.img
              src="/about_01.jpg"
              className="absolute md:w-[400px] md:h-[450px] w-[250px] h-[300px] border-8 border-white rounded-2xl shadow-2xl top-0 left-0 z-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />

          
           

            {/* Left bottom image */}
            <motion.img
              src="/about_02.jpg"
              className="absolute w-[250px] md:w-[310px]  border-8 border-white rounded-2xl shadow-xl z-3 bottom-0 right-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-linear-to-t  duration-500 rounded-3xl"></div>
          </motion.div>

          {/* ------- CONTENT SECTION ------- */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="inline-flex text-lg md:text-xl font-semibold text-green-700 tracking-wide mb-4 font-['Glittery_Snowfall']">
              Hơn 10 năm kinh nghiệm trong xuất khẩu nông sản
            </h4>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight  mb-6 text-[#164333] font-[DM_Sans] tracking-tight">
  Về Chúng Tôi – <span className="text-green-700">AusGlobal Connection</span>
</h1>


            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
              AusGlobal Connection là công ty tiên phong trong việc nhập khẩu và phân phối nông sản, thực phẩm sạch, chất lượng cao từ Việt Nam sang thị trường Úc. Chúng tôi cam kết mang lại sản phẩm uy tín, minh bạch, đồng thời đảm bảo trách nhiệm với khách hàng và đối tác.
            </p>

            {/* FEATURE LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {featureData.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <Wheat size={40} className="text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {f.title}
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LIST WITH ICON */}
            {["Xuất khẩu nông sản sạch", "Đối tác uy tín tại Úc", "Cam kết chất lượng"] .map((text, i) => (
  <motion.span 
    key={i} 
    className="flex gap-3 items-center pb-3 text-gray-700 text-lg" 
    initial={{ opacity: 0, x: -20 }} 
    whileInView={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.8, delay: i * 0.15 }}
  >
    <Tractor className="text-orange-500" />
    {text}
  </motion.span>
))}


            {/* ACTION BUTTON + CONTACT */}
            <div className="flex flex-wrap items-center gap-8">
              {/* CTA button */}
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="py-3 px-7 bg-[#F8C32C] text-white font-semibold rounded-xl shadow-md cursor-pointer"
              >
                Tìm hiểu thêm về AusGlobal
              </motion.span>

              {/* Phone contact */}
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center items-center rounded-full bg-[#F8C32C] w-14 h-14">
                  <Phone className="text-white" />
                </div>

                <div>
                  <span className="font-bold text-xl block">+61415616789</span>
                  <div className="text-sm text-gray-500">Liên hệ đặt hàng</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
