import { FaArrowUp } from "react-icons/fa";

const VisionMission = () => {
  const handleScrollToTop = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      window.scrollTo({
        top: heroSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      {/* Scroll to Top Button */}
      <div className="absolute top-2">
        <button
          onClick={handleScrollToTop}
          className="flex items-center justify-center text-highlight/50 hover:text-highlight transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      </div>

      {/* Vision Statement */}
      <div className="bg-dark/70 text-white text-center py-8 px-6 sm:px-12 lg:px-20 rounded-lg shadow-lg max-w-4xl">
        <h2 className="text-highlight text-5xl md:text-6xl font-bold mb-6">
          We aim to...
        </h2>
        <p className="text-lg md:text-3xl text-gray-300">
          Design & develop dynamic web & technological solutions that help
          businesses and individuals make their dreams a reality.
        </p>
      </div>

      {/* Hexagonal Icons with Labels */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap md:flex-nowrap">
        {/* AI Integration */}
        <div className="flex flex-col items-center">
          <h3 className="text-highlight text-xs md:text-lg font-bold mb-2 md:mb-4">
            <span className="hidden md:inline">AI Integration</span>
            <span className="inline md:hidden">AI</span>
          </h3>
          <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight/60 p-3 flex items-center justify-center shadow-lg">
            <img
              className="w-3/4 h-3/4 object-contain"
              src="/images/ai-integration-icon.png"
              alt="AI Integration"
            />
          </div>
        </div>

        {/* Web Development */}
        <div className="flex flex-col items-center">
          <h3 className="text-highlight text-xs md:text-lg font-bold mb-2 md:mb-4">
            <span className="hidden md:inline">Web Development</span>
            <span className="inline md:hidden">Web</span>
          </h3>
          <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight/60 p-3 flex items-center justify-center shadow-lg">
            <img
              className="w-3/4 h-3/4 object-contain"
              src="/images/web-development-icon.png"
              alt="Web Development"
            />
          </div>
        </div>

        {/* Consulting */}
        <div className="flex flex-col items-center">
          <h3 className="text-highlight text-xs md:text-lg font-bold mb-2 md:mb-4">
            <span className="hidden md:inline">Consulting</span>
            <span className="inline md:hidden">Consulting</span>
          </h3>
          <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight/60 p-3 flex items-center justify-center shadow-lg">
            <img
              className="w-3/4 h-3/4 object-contain"
              src="/images/consulting-icon.png"
              alt="Consulting"
            />
          </div>
        </div>
      </div>

      {/* "See Our Services" Button */}
      <div className="mt-8">
        <a
          href="/services"
          className="bg-highlight text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-highlight-dark transition"
        >
          See Our Services
        </a>
      </div>
    </div>
  );
};

export default VisionMission;
