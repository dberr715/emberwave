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
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 space-y-16 pt-36">
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
      <div id="projects" className="py-16">
        <h2 className="text-4xl font-bold text-highlight mb-8 text-center">
          Completed Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Children's Center of Asheboro */}
          <div className="card bg-base-100 shadow-xl flex flex-row items-stretch">
            <figure className="w-2/5">
              <img
                src="images/Tree.jpg"
                alt="The Children's Center of Asheboro"
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="card-body flex-1 p-6">
              <h2 className="card-title text-2xl font-semibold">
                The Children's Center of Asheboro
              </h2>
              <p className="text-white-600 text-md">
                The Children's Center of Asheboro never previously had an online
                presence. They wanted to establish a website to increase
                community awareness and ensure that new families moving into the
                area would easily find and learn about their services. Built
                using WordPress to provide a user-friendly, scalable solution
                that allowed them to effectively showcase their offerings and
                engage with the local community.
              </p>
              <div className="card-actions justify-end mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Website
                </a>
              </div>
            </div>
          </div>

          {/* Quad AI Lead Generator */}
          <div className="card bg-base-100 shadow-xl flex flex-row items-stretch">
            <figure className="w-2/5">
              <img
                src="images/quadspaceai.png"
                alt="Quad AI Lead Generator"
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="card-body flex-1 p-6">
              <h2 className="card-title text-2xl font-semibold">
                Quad AI Lead Generator
              </h2>
              <p className="text-white-600 text-md">
                Built for a supply chain logistics company, Quad AI is an expert
                of warehouse logistics for the customer to use. Quad uses AI,
                uploaded knowledge files, and directives to discover the user's
                warehouse issues and offer potential solutions. On the business
                side, administrators have access to chat data and user emails
                for potential warm lead generation.
              </p>
              <div className="card-actions justify-end mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Website
                </a>
              </div>
            </div>
          </div>

          {/* FootyMatch */}
          <div className="card bg-base-100 shadow-xl flex flex-row items-stretch">
            <figure className="w-2/5">
              <img
                src="images/footymatch.jpeg"
                alt="FootyMatch"
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="card-body flex-1 p-6">
              <h2 className="card-title text-2xl font-semibold">FootyMatch</h2>
              <p className="text-white-600 text-md">
                Leveraging artificial intelligence, FootyMatch aligns users'
                preferred football, basketball, baseball, and other sports teams
                with a corresponding soccer team, drawing parallels in terms of
                historical performance, playing style, and various other
                criteria. This enables users to seamlessly immerse themselves in
                the realm of soccer.
              </p>
              <div className="card-actions justify-end mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Video Tour
                </a>
              </div>
            </div>
          </div>

          {/* Custom AI GPTs */}
          <div className="card bg-base-100 shadow-xl flex flex-row items-stretch">
            <figure className="w-2/5">
              <img
                src="images/pathfinder.png"
                alt="Custom AI GPTs"
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="card-body flex-1 p-6">
              <h2 className="card-title text-2xl font-semibold">
                Custom AI GPTs
              </h2>
              <p className="text-white-600 text-md">
                Crafted numerous custom GPTs tailored to the needs of local
                business owners, with the goal of expanding their customer reach
                and enhancing user interactions. Examples include BizFinder,
                SalesPathFinder, and Sortation, all of which can be found on the
                GPT store or Chipp.ai marketplace.
              </p>
              <div className="card-actions justify-end mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
