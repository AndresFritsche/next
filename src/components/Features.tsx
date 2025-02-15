import { features } from "../app/data";

const Features = () => {
  return (
    <section className="py-10 bg-slate-800 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.id}>
              <div className="relative flex items-center justify-center mx-auto">
                {feature.backgroundSvg}
                {feature.iconSvg}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;