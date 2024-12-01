"use client";

import { useEffect } from "react";
import {
  FaLaptopCode,
  FaBrain,
  FaCloud,
  FaChartBar,
  FaChalkboardTeacher,
  FaPencilRuler,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Trigger animations only once
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      description:
        "Building modern, responsive, and user-friendly websites to enhance your online presence and engagement.",
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
        "Optimizing your infrastructure and deployment processes with tailored cloud and DevOps strategies.",
      icon: <FaCloud size={48} className="text-highlight" />,
    },
    {
      title: "Dashboard Creation",
      description:
        "Designing and implementing data-driven dashboards to provide actionable insights and support decision-making.",
      icon: <FaChartBar size={48} className="text-highlight" />,
    },
    {
      title: "Technical Training",
      description:
        "Providing expert-led training sessions to equip your team with the skills they need to succeed in a tech-driven world.",
      icon: <FaChalkboardTeacher size={48} className="text-highlight" />,
    },
  ];

  return (
    <div
      className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 space-y-16"
      data-aos="fade-up"
    >
      {/* Hero Section */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
        data-aos="fade-up"
      >
        {/* Text Content */}
        <div className="space-y-6" data-aos="fade-right">
          <h1 className="text-5xl font-bold text-highlight">
            Empowering Your Vision
          </h1>
          <p className="text-lg text-gray-300">
            We bring your business ideas to life with innovative solutions that
            connect, engage, and inspire. From strategy to execution, we deliver
            exceptional results tailored to your unique goals.
          </p>
          <div className="flex space-x-4">
            <button className="bg-highlight text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-highlight-dark transition">
              Let’s Talk!
            </button>
          </div>
        </div>

        {/* Image */}
        <div data-aos="fade-left">
          <img
            src="/images/multiscreens.jpg"
            alt="Multiscreens"
            className="rounded-lg shadow-lg h-96 object-cover"
          />
        </div>
      </div>

      {/* Services Section */}
      <div data-aos="fade-up">
        <h2
          className="text-4xl font-bold text-highlight mb-8 text-center"
          data-aos="fade-down"
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card glass shadow-lg p-6 flex flex-col justify-between"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="flex items-center mb-4 space-x-4">
                {service.icon}
                <h2 className="card-title text-highlight">{service.title}</h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
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
