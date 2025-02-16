"use client";
import { services } from "@/app/data";
import { motion } from "framer-motion";

const Servicios = () => {
  return (
    <section className="bg-[--primary] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ margin: "-200px", once: true }}
                key={id}
                className="relative bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                  backgroundImage: `url(/images/card-bg.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>

                {/* Content */}
                <div className="relative z-20">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-white/10 flex justify-center items-center rounded-full mb-6">
                    <span className="text-3xl text-white">{icon}</span>
                  </div>

                  <div className="text-start">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-lg mt-4 text-white/80">{text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;