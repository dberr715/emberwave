"use client";

import { FaChevronDown, FaStar } from "react-icons/fa";
import Image from "next/image";

const Clients = () => {
  const testimonials = [
    {
      text: `If you need an AI project done quickly and well by a 'no muss no fuss' guy, talk to David Berry. David listened to my ideas for a SalesGPT product that I had been wanting done for over a year, and in a weekend we had a functioning product.`,
      author: "John Sterling",
      position: "CEO/Owner/Author, Foxfire Software, and Sterling Sales",
    },
    {
      text: `I'm thrilled to recommend David and EmberWave, who brings a unique blend of teaching experience and technical expertise to his work in software development. David's work ethic is truly commendable—he embraces hard work, isn't hesitant to seek clarification, and readily extends a helping hand.`,
      author: "Sean Reid",
      position: "Owner/Teacher, TorchCodeLab",
    },
    {
      text: `During David's time working with us, I was impressed with his rapid learning, strong analytical skills, and effective communication.`,
      author: "Patisela Alegria",
      position: "Program Coordinator, Carolina Code School",
    },
  ];

  const projects = [
    {
      title: "The Children's Center of Asheboro",
      description:
        "The Children's Center of Asheboro never previously had an online presence. They wanted to establish a website to increase community awareness and ensure that new families moving into the area would easily find and learn about their services. Built using WordPress to provide a user-friendly, scalable solution that allowed them to effectively showcase their offerings and engage with the local community.",
      buttonText: "Website",
      image: "images/Tree.jpg",
    },
    {
      title: "Quad AI Lead Generator",
      description:
        "Built for a supply chain logistics company, Quad AI is an expert of warehouse logistics for the customer to use. Quad uses AI, uploaded knowledge files, and directives to discover the user's warehouse issues and offer potential solutions. On the business side, administrators have access to chat data and user emails for potential warm lead generation.",
      buttonText: "Website",
      image: "images/quadspaceai.png",
    },
    {
      title: "FootyMatch",
      description:
        "Leveraging artificial intelligence, FootyMatch aligns users' preferred football, basketball, baseball, and other sports teams with a corresponding soccer team. This enables users to seamlessly immerse themselves in the realm of soccer.",
      buttonText: "Video Tour",
      image: "images/footymatch.jpeg",
    },
    {
      title: "Custom AI GPTs",
      description:
        "Crafted numerous custom GPTs tailored to the needs of local business owners, with the goal of expanding their customer reach and enhancing user interactions. Examples include BizFinder, SalesPathFinder, and Sortation, all of which can be found on the GPT store or Chipp.ai marketplace.",
      buttonText: "Website",
      image: "images/pathfinder.png",
    },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-10 space-y-6 pt-16">
      <h2 className="text-4xl font-bold text-highlight mb-8 text-center">
        Clients
      </h2>
      {/* Horizontal Bar Section */}
      <div className="bg-dark/50 rounded-lg py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Check Project Status */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-highlight">
              Active Clients
            </h2>
            <button className="bg-highlight text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-highlight-dark transition">
              Track your Project
            </button>
          </div>

          {/* Contact Us Section */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-highlight">Contact Us</h2>
            <p className="text-white text-md">dberry3755@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Existing Content */}
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
                We value your feedback.
              </p>
            </div>

            {/* Become a Satisfied Customer Section */}
            <div className="absolute bottom-0 right-0 flex flex-col items-end space-y-2 bg-gradient-to-t from-black/70 to-transparent py-4 px-6 rounded-b-lg">
              <button className="bg-highlight text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-highlight-dark transition">
                Write a Review
              </button>
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
                <div className="flex mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, starIndex) => (
                      <FaStar key={starIndex} className="text-highlight mr-1" />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center py-6 ">
        <button
          className="text-highlight animate-bounce"
          onClick={scrollToProjects}
        >
          <FaChevronDown className="text-4xl" />
        </button>
      </div>

      {/* Example Projects Section */}
      {/* Example Projects Section */}
      <div id="projects" className="pb-8">
        <h2 className="text-4xl font-bold text-highlight mb-8 text-center">
          Example Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl flex flex-col lg:flex-row items-stretch"
            >
              <figure className="lg:w-2/5 w-full">
              <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto lg:h-full object-cover"
                />
              </figure>
              <div className="card-body flex-1 p-6">
                <h2 className="card-title text-2xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-white-600 text-md">{project.description}</p>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {project.buttonText}
                  </a>
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
