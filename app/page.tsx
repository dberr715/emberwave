export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Logo Section */}
      <header className="bg-black py-8 flex items-center justify-center">
        <img
          src="/images/noBG.png"
          alt="Emberwave Logo"
          className="h-40 w-auto"
        />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center space-y-6">
          {/* Hero Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Dream. <span className="text-highlight">Design.</span> Develop.
          </h1>

          {/* Hero Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Developing your business dreams through innovative technology &
            creative design.
          </p>
        </div>

        {/* Vision and Mission Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 space-y-8 md:space-y-0">
          {/* Vision */}
          <div className="bg-gradient-to-br from-highlight to-highlight-dark p-6 rounded-lg shadow-lg text-center md:text-left">
            <p className="text-xl font-semibold">
              "We aim to... Design & develop dynamic web and technological
              solutions that help businesses and individuals make their dreams a
              reality."
            </p>
          </div>

          {/* Mission */}
          <div className="bg-highlight-light p-6 rounded-lg shadow-lg text-center md:text-left">
            <p className="text-lg font-light text-dark">
              "By... AI Integration, Web Development, and Consulting"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
