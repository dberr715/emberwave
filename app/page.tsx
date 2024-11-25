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
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        <h1 className="text-6xl font-bold">Dream. Design. Develop.</h1>
        <p className="mt-4 text-xl">
          Developing your business dreams through innovative technology &
          creative design.
        </p>

        {/* Vision and Mission */}
        <div className="mt-12 space-y-4">
          <p className="text-lg font-medium">
            "We aim to... Design & develop dynamic web and technological
            solutions that help businesses and individuals make their dreams a
            reality."
          </p>
          <p className="text-lg">
            "By... AI Integration, Web Development, and Consulting."
          </p>
        </div>
      </div>
    </div>
  );
}
