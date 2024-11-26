const VisionMission = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Statement */}
        <div className="bg-black/30 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vision</h2>
          <p className="text-lg md:text-xl text-gray-300">
            We aim to...{" "}
            <span className="text-highlight font-semibold">
              Design & Develop
            </span>{" "}
            dynamic web and technological solutions that help businesses and
            individuals make their dreams a reality.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-black/30 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Mission</h2>
          <p className="text-lg md:text-xl text-gray-300">
            By...{" "}
            <span className="text-highlight font-semibold">AI Integration</span>
            ,{" "}
            <span className="text-highlight font-semibold">
              Web Development
            </span>
            , and{" "}
            <span className="text-highlight font-semibold">Consulting</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
