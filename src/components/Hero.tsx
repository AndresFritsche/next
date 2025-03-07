"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 , once:true}}
      className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-48"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-[--primary] uppercase">
              Eleva. Innova. Lidera.
            </p>
            <h1 className="mt-4 text-4xl font-bold text-[--primary] lg:mt-8 sm:text-6xl xl:text-8xl">
              Diseños modernos para el mundo digital
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Grow your career fast with right mentor.
            </p>

            <a
              href="#"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
              role="button"
            >
              Escríbenos
              <FaWhatsapp className="w-6 h-6 ml-4" />
            </a>
          </div>

          <div>
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Hero;
