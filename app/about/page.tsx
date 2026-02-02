"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const technologies = [
    { name: "Next.js", logo: "/images/nextjs2.png" },
    { name: "React", logo: "/images/react.png" },
    { name: "C#", logo: "/images/csharp.png" },
    { name: ".NET", logo: "/images/dotnet.png" },
    { name: "Django", logo: "/images/django2.png" },
    { name: "Azure", logo: "/images/azure.png" },
    { name: "WordPress", logo: "/images/wordpress.png" },
    { name: "Power BI", logo: "/images/powerbi.png" },
  ];

  const aiTools = [
    { name: "Claude/Anthropic", logo: "/images/ai-logos/Claude_AI_symbol.svg" },
    { name: "OpenAI/ChatGPT", logo: "/images/ai-logos/openai.png" },
    {
      name: "Gemini",
      logo: "/images/ai-logos/gemini-google-icon-symbol-logo-free-png.webp",
    },
    { name: "Grok", logo: "/images/ai-logos/grok2.svg" },
    { name: "GitHub Copilot", logo: "/images/ai-logos/github-copilot.jpg" },
    {
      name: "Microsoft Copilot",
      logo: "/images/ai-logos/Microsoft-Copilot-Logo.png",
    },
    { name: "HeyGen", logo: "/images/ai-logos/heygen.jpeg" },
    { name: "Sintra.AI", logo: "/images/ai-logos/sintra.ai.svg" },
    { name: "GoHighLevel", logo: "/images/ai-logos/highlevel.webp" },
    { name: "Clawdbot/Moltbot", logo: "/images/ai-logos/clawdbot-logo.png" },
  ];

  return (
    <section className="bg-black text-gray-800 dark:text-gray-100 pt-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-16 pb-12">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1 className="text-5xl font-extrabold mb-4 text-highlight">
              about.
            </h1>
            <h2 className="lg:text-3xl text-lg font-bold">
              David Berry, Founder & Lead Developer
            </h2>
            <p className="mt-4 lg:text-lg text-md leading-relaxed">
              With a strong foundation in AI, cloud technologies, and modern
              frameworks, I specialize in crafting innovative software solutions
              and integrating cutting-edge AI tools to enhance business
              workflows and productivity.
            </p>
            {/* Talk With Me Button */}
            <div
              className="flex justify-center mt-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link
                href="https://cal.com/emberwave"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-highlight text-white lg:text-lg text-md font-semibold px-6 py-3 rounded-lg shadow hover:bg-highlight-dark transition"
              >
                Talk with me!
              </Link>
            </div>
          </div>
          <div
            className="relative"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <Image
              src="/images/dabnobg.png"
              alt="David Berry"
              width={400}
              height={400}
              className="mx-auto shadow-lg object-cover rounded-lg"
            />
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="pt-12 pb-8 bg-black text-white">
          <h3
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            AI Platforms & Integrations
          </h3>
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-6 justify-items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {aiTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-300 text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-12 bg-black text-white">
          <h3
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h3>
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Ready to get started?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can integrate AI solutions and modern
            technology into your business.
          </p>
          <Link
            href="https://cal.com/emberwave"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-highlight text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-highlight-dark transition text-lg"
            data-aos="zoom-in"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
