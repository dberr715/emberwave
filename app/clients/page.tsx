"use client";

import Link from "next/link";
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
      text: `David goes above and beyond in customer service, making sure you are completely satisfied with the results. His design was above what I even expected and I am well pleased with our new website. He left no stone unturned in presenting our business in it's best light and making sure it had all of the information we asked for in a well laid out manner that is attractive and informative. He took the time we needed at every stage to make sure we were happy and satisfied. Always friendly and patient. Will definitely do work with him again!`,
      author: "Debbie Lockhart",
      position: "Director, The Children's Center of Asheboro",
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
        "The Children's Center of Asheboro lacked an online presence and wanted a website to boost community awareness and help new families easily find and learn about their services. The site was built to be user-friendly, scalable, and effective in showcasing their offerings and engaging with the local community.",
      buttonText: "Visit Website",
      image: "/images/Tree.jpg",
      link: "https://thechildrenscenterofasheboro.com/",
    },
    {
      title: "Quad AI Lead Generator",
      description:
        "Quad AI, built for a supply chain logistics company, uses AI and knowledge files to identify warehouse issues and suggest solutions. Administrators can access chat data and user emails for lead generation.",
      buttonText: "Visit Website",
      image: "/images/leads.jpg",
      link: "https://quadspace.us/",
    },
    {
      title: "FootyMatch",
      description:
        "Leveraging artificial intelligence, FootyMatch aligns users' preferred football, basketball, baseball, and other sports teams with a corresponding soccer team. This enables users to seamlessly immerse themselves in the realm of soccer.",
      buttonText: "Watch Video",
      image: "/images/soccerball.jpg",
      link: "https://www.loom.com/share/0356d9e637d64032a94a557658b4d114?sid=a84f35cd-b059-4dc2-a34c-02cb80d94012",
    },
    {
      title: "Custom AI Chatbots",
      description:
        "Created custom AI chatbots for local business owners to expand customer reach and improve interactions, including BizFinder, SalesPathFinder, and Sortation, available on the GPT store and Chipp.ai marketplace.",
      buttonText: "Visit Website",
      image: "/images/chatbubble.jpg",
      link: "https://www.sterlingsales.co/",
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
          <div className="text-center">
            <h2 className="text-lg font-semibold text-highlight pb-2">
              Active Clients
            </h2>
            <Link
              href="https://projectstatustracker-26044.chipp.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-highlight-dark transition"
            >
              Track your Project
            </Link>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-highlight">Contact Us</h2>
            <p className="text-white text-md">emberwavedevelopment@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
        {/* Testimonials Image */}
        <div className="relative h-[300px] lg:h-[500px]">
          <Image
            src="/images/sparkcircle.jpg"
            alt="Client success"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
          {/* Overlay Section */}
          <div className="absolute inset-0 bg-black/40 rounded-lg">
            <div className="absolute top-0 left-0 right-0 flex items-center justify-start bg-gradient-to-b from-black/70 to-transparent py-2 px-4 lg:py-4 lg:px-6 rounded-t-lg">
              <p className="text-white text-lg lg:text-4xl font-large text-left">
                We value your feedback.
              </p>
            </div>
            <div className="absolute bottom-4 lg:bottom-6 right-0 flex flex-col items-end space-y-2 bg-gradient-to-t from-black/70 to-transparent py-2 px-4 lg:py-4 lg:px-6 rounded-b-lg">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfdo9PCKXn7DQYjLUhTCQcWd-5ZPQK02-kEZFq1O65_in3esA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-highlight text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-highlight-dark transition"
              >
                Write a Review
              </Link>
            </div>
          </div>
        </div>

        {/* Scrollable Testimonials */}
        <div className="space-y-6 h-[300px] lg:h-[500px] overflow-y-auto">
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
      <div className="flex justify-center py-6">
        <button
          className="text-highlight animate-bounce"
          onClick={scrollToProjects}
        >
          <FaChevronDown className="text-4xl" />
        </button>
      </div>

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
              <figure className="lg:w-1/2 w-full relative h-56 lg:h-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </figure>
              <div className="card-body flex-1 p-6">
                <h2 className="card-title text-2xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-white-600 text-md">{project.description}</p>
                <div className="card-actions justify-end mt-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {project.buttonText}
                  </Link>
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
