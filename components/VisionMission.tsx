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
        className="relative bg-dark/90 text-white text-center py-8 px-6 sm:px-12 lg:px-20 rounded-lg shadow-lg max-w-4xl"
        data-aos="fade-up"
      >
        <h2 className="text-highlight text-5xl md:text-6xl font-bold mb-6">
          We bring AI to your business
        </h2>
        <p className="text-lg md:text-3xl text-white-300 mb-8">
          Integrate powerful AI tools, build intelligent chatbots, automate
          workflows, and create modern web experiences that drive results.
        </p>

        {/* Hexagonal Icons with Labels */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* AI Integration */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight p-3 flex items-center justify-center shadow-lg">
              <Image
                width={48}
                height={48}
                className="object-contain"
                src="/images/ai-integration-icon.png"
                alt="AI Integration"
              />
            </div>
            <h3 className="text-highlight text-xs md:text-lg font-bold mt-2 md:mt-4 whitespace-nowrap">
              AI Integration
            </h3>
          </div>

          {/* AI Chatbots */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight p-3 flex items-center justify-center shadow-lg">
              <Image
                width={48}
                height={48}
                className="object-contain"
                src="/images/consulting-icon.png"
                alt="AI Chatbots"
              />
            </div>
            <h3 className="text-highlight text-xs md:text-lg font-bold mt-2 md:mt-4 whitespace-nowrap">
              AI Chatbots
            </h3>
          </div>

          {/* Web Dev */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight p-3 flex items-center justify-center shadow-lg">
              <Image
                width={48}
                height={48}
                className="object-contain"
                src="/images/web-development-icon.png"
                alt="Web Dev"
              />
            </div>
            <h3 className="text-highlight text-xs md:text-lg font-bold mt-2 md:mt-4 whitespace-nowrap">
              Web Dev
            </h3>
          </div>

          {/* AI Training */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mask mask-hexagon bg-highlight p-3 flex items-center justify-center shadow-lg">
              <Image
                width={48}
                height={48}
                className="object-contain"
                src="/images/consulting-icon.png"
                alt="AI Training"
              />
            </div>
            <h3 className="text-highlight text-xs md:text-lg font-bold mt-2 md:mt-4 whitespace-nowrap">
              AI Training
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
