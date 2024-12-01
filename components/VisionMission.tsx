import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      {/* Vision Statement and Hexagons */}
      <div
        className="relative bg-dark/70 text-white text-center py-8 px-6 sm:px-12 lg:px-20 rounded-lg shadow-lg max-w-4xl"
        data-aos="fade-up"
      >
        <h2 className="text-highlight text-5xl md:text-6xl font-bold mb-6">
          We aim to...
        </h2>
        <p className="text-lg md:text-3xl text-gray-300 mb-8">
          Design & develop dynamic web & technological solutions that help
          businesses and individuals make their dreams a reality.
        </p>

        {/* Hexagonal Icons with Labels */}
        <div
          className="flex justify-center gap-4 mt-4 flex-wrap md:flex-nowrap"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* AI Integration */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight/60 p-3 flex items-center justify-center shadow-lg">
              <Image
                width={48}
                height={48}
                className="object-contain"
                src="/images/ai-integration-icon.png"
                alt="AI Integration"
              />
            </div>
            <h3 className="text-highlight text-xs md:text-lg font-bold mt-2 md:mt-4">
              AI Integration
            </h3>
          </div>

          {/* Web Development */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight/60 p-3 flex items-center justify-center shadow-lg">
              <Image
                width={48}
                height={48}
                className="object-contain"
                src="/images/web-development-icon.png"
                alt="Web Development"
              />
            </div>
            <h3 className="text-highlight text-xs md:text-lg font-bold mt-2 md:mt-4">
              Web Development
            </h3>
          </div>

          {/* Consulting */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight/60 p-3 flex items-center justify-center shadow-lg">
              <Image
                width={48}
                height={48}
                className="object-contain"
                src="/images/consulting-icon.png"
                alt="Consulting"
              />
            </div>
            <h3 className="text-highlight text-xs md:text-lg font-bold mt-2 md:mt-4">
              Consulting
            </h3>
          </div>
        </div>

        <div className="mt-6" data-aos="zoom-in" data-aos-delay="400">
          <Link
            href="/services"
            className="bg-highlight text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-highlight-dark transition"
          >
            See Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
