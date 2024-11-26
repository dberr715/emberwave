const VisionMission = () => {
  return (
    <div className="container mx-auto px-4 sm:px-12 lg:px-20 py-16 space-y-12">
      {/* Vision and Mission Card */}
      <div className="bg-black/50 rounded-lg p-6 sm:p-8 shadow-lg text-center">
        {/* Vision Statement */}
        <div className="mb-8">
          <h2 className="text-highlight text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            We aim to...
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Design & Develop dynamic web & technological solutions that help
            businesses and individuals make their dreams a reality.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-6" />

        {/* Mission Statement */}
        <div>
          <h2 className="text-highlight text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Through...
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            AI Integration, Web Development, and Consulting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
