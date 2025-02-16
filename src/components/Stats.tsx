import { statsData } from "@/app/data";

const Stats = () => {
  return (
    <section className="py-24 bg-white sm:py-16 lg:py-20">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Journey in Numbers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            With over 4 years of experience, a dedicated team of 37+
            professionals, and 3,274 successful projects delivered, we pride
            ourselves on achieving a 98% customer success rate. Our commitment
            to excellence drives us to deliver exceptional results for every
            client.
          </p>
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
    </section>
  );
};
export default Stats;
