"use client";

import { FaArrowRight } from "react-icons/fa";
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

  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-highlight">
          Hear From Our Satisfied Clients
        </h1>
      </div>

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
          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-start bg-gradient-to-t from-black/60 to-transparent py-4 px-6 rounded-b-lg">
            <p className="text-white text-lg lg:text-4xl font-large ">
              Real stories of success and innovation from the businesses and
              people we've worked with.
            </p>
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

      {/* Sticky Row */}
      <div className="fixed bottom-0 left-0 right-0 bg-dark/90 py-4 px-6 flex justify-between items-center space-x-4">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-2">
          <h3 className="text-highlight text-lg font-semibold">
            Be one of these satisfied customers
          </h3>
          <button className="bg-highlight text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-highlight-dark transition">
            Join Now
          </button>
          <a
            href="#"
            className="text-highlight text-sm underline hover:text-highlight-dark"
          >
            Write a review
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-gray-300 text-sm">Current clients click here</p>
          <button className="bg-gray-800 text-highlight font-semibold px-6 py-3 rounded-lg shadow hover:bg-dark/70 transition">
            Check Project Tracking Status{" "}
            <FaArrowRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
