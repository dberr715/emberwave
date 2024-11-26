const VisionMission = () => {
  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 space-y-16">
      {/* Vision Statement in Full-Width Card */}
      <div className="text-white text-center py-12 px-6 sm:px-12 lg:px-20">
        <h2 className="text-highlight text-5xl md:text-6xl font-bold mb-6">
          We aim to...
        </h2>
        <p className="text-lg md:text-3xl text-gray-300 max-w-4xl mx-auto">
          Design & develop dynamic web & technological solutions that help
          businesses and individuals make their dreams a reality.
        </p>
      </div>

      {/* Mission Statement */}

      {/* Hexagonal Icons with Labels */}
      <div className="flex flex-wrap justify-center items-center gap-16">
        {/* AI Integration */}
        <div className="flex flex-col items-center">
          <h3 className="text-highlight text-2xl md:text-3xl font-bold mb-4">
            AI Integration
          </h3>
          {/* Icon Attribution: Machine learning icons created by Irvan Kurnianto - Flaticon */}
          <div className="w-72 h-72 mask mask-hexagon bg-highlight/60 p-8 flex items-center justify-center">
            <img
              className="w-4/5 h-4/5 object-contain"
              src="/images/ai-integration-icon.png"
              alt="AI Integration"
            />
          </div>
        </div>

        {/* Web Development */}
        <div className="flex flex-col items-center">
          <h3 className="text-highlight text-2xl md:text-3xl font-bold mb-4">
            Web Development
          </h3>
          {/* Icon Attribution: Web development icons created by ekays.dsgn - Flaticon */}
          <div className="w-72 h-72 mask mask-hexagon bg-highlight/60 p-8 flex items-center justify-center">
            <img
              className="w-4/5 h-4/5 object-contain"
              src="/images/web-development-icon.png"
              alt="Web Development"
            />
          </div>
        </div>

        {/* Consulting */}
        <div className="flex flex-col items-center">
          <h3 className="text-highlight text-2xl md:text-3xl font-bold mb-4">
            Consulting
          </h3>
          {/* Icon Attribution: Consult icons created by Parzival’ 1997 - Flaticon */}
          <div className="w-72 h-72 mask mask-hexagon bg-highlight/60 p-8 flex items-center justify-center">
            <img
              className="w-4/5 h-4/5 object-contain"
              src="/images/consulting-icon.png"
              alt="Consulting"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
