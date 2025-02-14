import { services } from "@/app/data";

const Services = () => {
  return (
    <section className="bg-[--primary] ">
      <div className="mt-24 max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white text-center mt-12">
          Nuestros Servicios
        </h2>
        <p className="text-xl text-[--secondary] text-center mt-4">
          Ofrecemos una amplia gama de servicios para ayudarte a alcanzar tus
          objetivos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <div
                key={id}
                className="flex justify-center items-center gap-6 mt-16  rounded-xl"
              >
                <div className="w-16 h-16 bg-white flex justify-center items-center rounded-full">
                  {icon}
                </div>
                <div className="text-start ">
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  <p className="text-lg text-[--secondary] mt-4 text-white">
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
