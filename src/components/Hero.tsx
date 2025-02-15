import Image from "next/image";

const Hero = () => {
  return (
    <header>
      <div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
        <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
            <h1 className="text-gray-900 md:text-6xl lg:text-8xl mb-8 text-4xl font-extrabold leading-none tracking-tighter">
              Provide Solution to your Business.
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
              Themeptation helping enterprises to create great Templates websites
              perfectly.
            </p>
            <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
              <div className="sm:mt-0 mt-3">
                <button className="hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-500">
                  Let's Talk
                </button>
              </div>
              <div className="sm:mt-0 sm:ml-3 mt-3">
              </div>
            </div>
          </div>
          <div className="lg:w-5/6 lg:max-w-lg xl:mt-0 w-full mt-12">
            <div className="relative">
              <Image
                src="/microsoft-365-bWL-c09Ys80-unsplash.jpg"
                alt="Business Solution"
                width={600}
                height={400}
                className="relative z-10 transform rotate-6 shadow-2xl"
              />
              <div className="absolute -top-10 -left-24 w-full h-full bg-indigo-500 transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
