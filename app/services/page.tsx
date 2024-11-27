"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaCloud,
  FaChartBar,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  const services = [
    {
      title: "Web Development/Design",
      description:
        "Specialization in creating visually striking, user-friendly websites to elevate your online presence.",
      icon: <FaLaptopCode size={48} className="text-highlight" />,
    },
    {
      title: "Application Development",
      description:
        "Development of applications to make your business or idea accessible on mobile platforms.",
      icon: <FaMobileAlt size={48} className="text-highlight" />,
    },
    {
      title: "AI Integration",
      description:
        "Generation of tailor-made solutions for artificial intelligence chat automation to enhance your business processes.",
      icon: <FaBrain size={48} className="text-highlight" />,
    },
    {
      title: "Cloud/DevOps Consulting",
      description:
        "Offering expertise in cloud services and DevOps practices to streamline deployment, improve scalability, and automate workflows.",
      icon: <FaCloud size={48} className="text-highlight" />,
    },
    {
      title: "Power BI Creation",
      description:
        "Specializing in the creation of Power BI dashboards and reports to help you visualize data, gain insights, and make data-driven decisions effectively.",
      icon: <FaChartBar size={48} className="text-highlight" />,
    },
    {
      title: "Staff Training",
      description:
        "With my education background, I provide training for staff on technical products, including those I create, making complex concepts easy to understand.",
      icon: <FaChalkboardTeacher size={48} className="text-highlight" />,
    },
  ];

  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16">
      <h1
        className="text-5xl font-bold text-center text-highlight mb-12"
        data-aos="fade-up"
      >
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="card glass bg-dark/70 shadow-lg hover:shadow-xl transition-all"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <figure className="flex items-center justify-center p-6">
              {service.icon}
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title text-highlight">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
