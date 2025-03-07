"use client";
import { coreFeatures } from "../app/data";
import { motion } from "framer-motion";

const CoreFeatures = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ margin: "-200px", once: true }}
      className=" bg-[#6366F1] sm:py-16 lg:py-42 "
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-3xl bg-gray-100 rounded-full">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreFeatures;
