import heroImage from "../assets/banner-stack-1.png"

const Hero = () => {
  return (
    <header id="home" className="py-5 md:pt-12 pb-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <h1 className="text-[32px] sm:text-[38px] md:text-[60px] font-bold leading-[1.1em] text-[#0f172a]">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 text-[#475569] text-[15px] sm:text-[16px] md:text-[18px] leading-7 max-w-[78%] mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-7 px-4 md:flex md:justify-start md:px-0">

            <a href="#tech"><button className="brand-gradient-bg text-white rounded-lg py-3 px-4 md:px-6 text-sm md:text-base cursor-pointer hover:opacity-90 transition">
              Explore Technologies
            </button></a>

            <button className="border border-gray-300 text-[#0f172a] rounded-lg py-3 px-4 md:px-8 text-sm md:text-base cursor-pointer hover:bg-gray-50 transition hover:text-[#d91b7e]">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Side / Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0 md:justify-end">

          <img
            src={heroImage}
            alt="Development Stack"
            className="w-[65%] sm:w-[70%] md:w-[45%] max-w-full"
          />

        </div>

      </div>
    </header>
  );
};

export default Hero;