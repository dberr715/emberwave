"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaLaptopCode,
  FaBrain,
  FaCloud,
  FaChartBar,
  FaChalkboardTeacher,
  FaPencilRuler,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building modern, responsive, and user-friendly websites to enhance your online presence.",
      icon: <FaLaptopCode size={48} className="text-highlight" />,
    },
    {
      title: "Web Design",
      description:
        "Creating visually stunning and intuitive designs using tools like Figma to bring your vision to life.",
      icon: <FaPencilRuler size={48} className="text-highlight" />,
    },
    {
      title: "AI Integration",
      description:
        "Leveraging artificial intelligence to streamline workflows and improve business efficiency.",
      icon: <FaBrain size={48} className="text-highlight" />,
    },
    {
      title: "Cloud/DevOps Consulting",
      description:
        "Optimizing your infrastructure with tailored cloud and DevOps strategies.",
      icon: <FaCloud size={48} className="text-highlight" />,
    },
    {
      title: "Dashboard Creation",
      description:
        "Designing data-driven dashboards to provide actionable insights and support decision-making.",
      icon: <FaChartBar size={48} className="text-highlight" />,
    },
    {
      title: "Technical Training",
      description:
        "Providing expert-led training sessions to equip your team with the skills they need to succeed.",
      icon: <FaChalkboardTeacher size={48} className="text-highlight" />,
    },
  ];

  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 space-y-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-highlight">
            Empowering Your Vision
          </h1>
          <p className="text-2xl text-white">
            We bring your business ideas to life with innovative solutions that
            connect, engage, and inspire. From strategy to execution, we deliver
            exceptional results tailored to your unique goals.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://cal.com/david-berry7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-highlight-dark transition"
            >
              Let’s Talk!
            </Link>
          </div>
        </div>

        {/* Image */}
        <div>
          <Image
            src="/images/multiscreens.jpg"
            alt="Multiscreens"
            width={800}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-4xl font-bold text-highlight mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card glass shadow-lg p-6 flex flex-col justify-between"
            >
              <div className="flex items-center mb-4 space-x-4">
                {service.icon}
                <h2 className="card-title text-2xl text-highlight">
                  {service.title}
                </h2>
              </div>
              <p className="text-white text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
