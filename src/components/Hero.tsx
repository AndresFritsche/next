import Image from "next/image";

const Hero = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-6 container mx-auto">
        {/* Logo */}
        <a href="/" className="relative text-2xl font-extrabold">
          <span className="absolute w-10 h-2 bg-indigo-400 bottom-1 right-0"></span>
          <span className="relative z-10">Agencia</span>
        </a>

        <div className="text-base text-gray-900 hidden lg:flex">
          <a
            href="#"
            className="block font-bold mt-4 lg:inline-block text-indigo-600 lg:mt-0 mr-10"
          >
            Home
          </a>
          <a
            href="#"
            className="block font-bold mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
          >
            Services
          </a>
          <a
            href="#"
            className="block font-bold mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="block font-bold hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10"
          >
            Company
          </a>
          <a
            href="/index_dark.html"
            className="block font-bold hover:text-gray-700 mt-4 lg:inline-block lg:mt-0"
          >
            Dark version
          </a>
        </div>

        
        <div className="flex items-center">
          <div className="mr-5 lg:mr-0">
            <button
              className="font-bold py-2 px-6 text-gray-600 hover:text-gray-700 text-base hidden lg:inline-flex"
            >
              Sign in
            </button>
            <button
              className="hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-5 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-500"
            >
              Sign up
            </button>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-4 py-3 border focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-indigo-500 transition duration-500 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View Case Studies
                </button>
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
