import { coreFeatures } from "../app/data";

const CoreFeatures = () => {
  return (
    <section className="py-20 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Core Features
          </h2>
          <p className="mt-2 text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-3xl bg-gray-100 rounded-full">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;