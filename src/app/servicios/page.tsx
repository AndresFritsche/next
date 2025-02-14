import { services } from "../data";

export default function Servicios() {
  return (
    <section className="bg-[--primary] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-[--secondary] mt-4 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios para ayudarte a alcanzar tus
              objetivos.
            </p>
          </div>
      
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service) => {
              const { id, icon, title, text } = service;
              return (
                <div
                  key={id}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 ease-in-out"
                >
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-white/10 flex justify-center items-center rounded-full mb-6">
                    <span className="text-3xl text-white">{icon}</span>
                  </div>
    
                  <div className="text-start">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-lg text-[--secondary] mt-4 text-white/80">
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
}
