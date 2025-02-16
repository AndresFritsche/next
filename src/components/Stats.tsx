"use client";
import { statsData } from "@/app/data";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1}}
      viewport={{ margin:"-200px", once:true }}
      className="bg-white sm:py-16 lg:py-40"
    >
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Journey in Numbers
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-6 px-6 my-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="overflow-hidden bg-white border border-gray-200 rounded-lg"
            >
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d={stat.icon}
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">
                      {stat.value}
                    </h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Stats;
