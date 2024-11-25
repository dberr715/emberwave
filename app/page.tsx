export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/compressed-embersfire.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark to-dark/10 z-5"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Dream. Design. Develop.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl">
          Developing your business dreams through innovative technology and
          creative design.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <a
            href="#"
            className="bg-highlight text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-highlight-dark transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="text-highlight hover:text-highlight-dark font-medium flex items-center transition"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}
