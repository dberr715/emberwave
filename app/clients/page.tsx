"use client";

import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const Clients = () => {
  const testimonials = [
    {
      text: `If you need an AI project done quickly and well by a 'no muss no fuss' guy, talk to David Berry. David listened to my ideas for a SalesGPT product that I had been wanting done for over a year, and in a weekend we had a functioning product.`,
      author: "John Sterling",
      position: "CEO/Owner/Author, Foxfire Software and Sterling Sales",
    },
    {
      text: `I'm thrilled to recommend David and EmberWave, who brings a unique blend of teaching experience and technical expertise to his work in software development. David's work ethic is truly commendable—he embraces hard work, isn't hesitant to seek clarification, and readily extends a helping hand. In the face of progressively more demanding challenges, he consistently rises to the occasion, showcasing a remarkable ability to break down complex problems into manageable chunks.`,
      author: "Sean Reid",
      position: "Owner/Teacher, TorchCodeLab",
    },
    {
      text: `During David's time working with us, I was impressed with his rapid learning, strong analytical skills, and effective communication. His ability to draw from his teaching background to foster collaborative and positive learning environments was particularly notable. David's dedication to thoroughly understanding projects and supporting those around him was evident throughout.`,
      author: "Patisela Alegria",
      position: "Program Coordinator, Carolina Code School",
    },
  ];

  const projects = [
    {
      title: "Project A",
      description: "Description of Project A.",
      buttonText: "Learn More",
      image:
        "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
      title: "Project B",
      description: "Description of Project B.",
      buttonText: "Learn More",
      image:
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    },
    {
      title: "Project C",
      description: "Description of Project C.",
      buttonText: "Learn More",
      image:
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    },
    {
      title: "Project D",
      description: "Description of Project D.",
      buttonText: "Learn More",
      image:
        "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 space-y-16">
      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative h-[500px]">
          <Image
            src="/images/sparkcircle.jpg"
            alt="Client success"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
          {/* Overlay Section */}
          <div className="absolute inset-0 bg-black/40 rounded-lg">
            {/* Overlay Text at the Top */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-start bg-gradient-to-b from-black/70 to-transparent py-4 px-6 rounded-t-lg">
              <p className="text-white text-lg lg:text-4xl font-large text-left">
                Real stories of success and innovation from the businesses and
                people we've worked with.
              </p>
            </div>

            {/* Become a Satisfied Customer Section */}
            <div className="absolute bottom-0 right-0 flex flex-col items-end space-y-2 bg-gradient-to-t from-black/70 to-transparent py-4 px-6 rounded-b-lg">
              <h3 className="text-white text-lg lg:text-2xl font-bold text-right">
                Become a satisfied customer
              </h3>
              <button className="bg-highlight text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-highlight-dark transition">
                Join Now
              </button>
              <a
                href="#"
                className="text-white text-sm underline hover:text-highlight-dark mt-2 text-right"
              >
                Write a review
              </a>
            </div>
          </div>
        </div>

        {/* Scrollable Testimonials Section */}
        <div className="space-y-6 h-[500px] overflow-y-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-lg ${
                index === 0 ? "bg-highlight/10" : "bg-dark/70"
              }`}
            >
              <p className="text-gray-300 leading-relaxed mb-4">
                {testimonial.text}
              </p>
              <div>
                <h3 className="font-bold text-highlight">
                  {testimonial.author}
                </h3>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center ">
        <button
          className="text-highlight animate-bounce"
          onClick={scrollToProjects}
        >
          <FaChevronDown className="text-4xl" />
        </button>
      </div>

      {/* Completed Projects Section */}
      <div id="projects">
        <h2 className="text-4xl font-bold text-highlight mb-8 text-center">
          Completed Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card lg:card-side bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-56 lg:h-auto"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    {project.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
