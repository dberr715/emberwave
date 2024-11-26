import VisionMission from "@/components/VisionMission";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* Fixed Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src="/compressed-waterfire.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Gradient Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-dark to-dark/10 z-5"></div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center h-screen px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Dream. Design. Develop.
          </h1>
          <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl">
            Developing your business dreams through innovative technology and
            creative design.
          </p>
          <div className="mt-8 flex space-x-4">
            <a
              href="#vision-mission"
              className="bg-highlight text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-highlight-dark transition"
            >
              Get Started
            </a>
            <a
              href="#vision-mission"
              className="text-highlight hover:text-highlight-dark font-medium flex items-center transition"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div
          id="vision-mission"
          className="relative bg-transparent py-16 px-6 sm:px-12 lg:px-20"
        >
          <VisionMission />
        </div>
      </div>
    </div>
  );
}
