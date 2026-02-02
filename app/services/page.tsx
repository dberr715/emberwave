"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLaptopCode, FaChalkboardTeacher, FaRobot } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isAutoScrollingRef = useRef(true);
  const [, setForceUpdate] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTime = 0;

    const autoScroll = (currentTime: number) => {
      if (!isAutoScrollingRef.current) return;

      // Throttle to ~60fps
      if (currentTime - lastTime > 16) {
        scrollContainer.scrollLeft += 0.5;
        // Reset to start when reaching the end
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth - 1
        ) {
          scrollContainer.scrollLeft = 0;
        }
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const stopAutoScroll = () => {
    isAutoScrollingRef.current = false;
    setForceUpdate((n) => n + 1);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    stopAutoScroll();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    stopAutoScroll();
  };

  const aiTools = [
    {
      name: "Claude/Anthropic",
      description: "Advanced AI assistant",
      logo: "/images/ai-logos/Claude_AI_symbol.svg",
    },
    {
      name: "OpenAI/ChatGPT",
      description: "GPT & DALL-E models",
      logo: "/images/ai-logos/openai.png",
    },
    {
      name: "Gemini",
      description: "Google's AI platform, NanoBanana Imaging",
      logo: "/images/ai-logos/gemini-google-icon-symbol-logo-free-png.webp",
    },
    {
      name: "Grok",
      description: "xAI assistant",
      logo: "/images/ai-logos/grok2.svg",
    },
    {
      name: "GitHub Copilot",
      description: "AI coding assistant",
      logo: "/images/ai-logos/github-copilot.jpg",
    },
    {
      name: "Microsoft Copilot",
      description: "Microsoft AI",
      logo: "/images/ai-logos/Microsoft-Copilot-Logo.png",
    },
    {
      name: "Clawdbot/Moltbot",
      description: "Full AI assistant",
      logo: "/images/ai-logos/clawdbot-logo.png",
    },
    {
      name: "Sintra.AI",
      description: "AI business automation",
      logo: "/images/ai-logos/sintra.ai.svg",
    },
    {
      name: "Chipp.AI",
      description: "No-code AI chatbots",
      logo: "/images/ai-logos/chippai.jpeg",
    },
    {
      name: "HeyGen",
      description: "AI video avatars",
      logo: "/images/ai-logos/heygen.jpeg",
    },
    {
      name: "GoHighLevel",
      description: "Marketing automation",
      logo: "/images/ai-logos/highlevel.webp",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-highlight">
            AI-Powered Solutions
          </h1>
          <p className="text-xl lg:text-2xl text-white/90">
            We integrate cutting-edge AI tools into your business workflows,
            build modern web experiences, and train your team to leverage
            technology for maximum impact.
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Let&apos;s discuss how we can integrate AI solutions and modern
            technology into your business.
          </p>
          <Link
            href="https://cal.com/emberwave"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-highlight text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-highlight-dark hover:scale-105 transition-all text-lg"
          >
            Let's Talk!
          </Link>
        </div>
      </div>

      {/* AI Integration Section */}
      <div className="bg-dark/50 py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <FaRobot size={40} className="text-highlight" />
            <h2 className="text-4xl font-bold text-highlight">
              AI Integration
            </h2>
          </div>
          <p className="text-center text-white/80 text-lg max-w-3xl mx-auto mb-12">
            We work with the leading AI platforms to bring intelligent
            automation, conversational interfaces, and smart workflows to your
            business.
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative py-8">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 px-6 pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 sm:w-48 text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all h-full">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 relative bg-white rounded-lg p-2 flex items-center justify-center">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={64}
                      height={64}
                      className="object-contain"
                      draggable={false}
                    />
                  </div>
                  <h3 className="text-highlight font-semibold text-sm sm:text-lg">
                    {tool.name}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-4">
            <p className="text-white/50 text-sm">
              ← Swipe or drag to explore →
            </p>
          </div>
        </div>
      </div>

      {/* Core Services Grid */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16">
        <h2 className="text-4xl font-bold text-highlight mb-12 text-center">
          Core Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Web Development */}
          <div className="bg-gradient-to-br from-dark/80 to-dark/40 rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-highlight/20 p-4 rounded-xl">
                <FaLaptopCode size={40} className="text-highlight" />
              </div>
              <h3 className="text-3xl font-bold text-highlight">
                Web Development
              </h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Building modern, responsive, and high-performance websites and web
              applications. From landing pages to full-stack platforms, we
              create digital experiences that engage users and drive results.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <span className="text-highlight">•</span> Next.js & React
                Applications
              </li>
              <li className="flex items-center gap-2">
                <span className="text-highlight">•</span> E-commerce Solutions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-highlight">•</span> Custom Web
                Applications
              </li>
              <li className="flex items-center gap-2">
                <span className="text-highlight">•</span> API Development &
                Integration
              </li>
            </ul>
          </div>

          {/* Technical Training */}
          <div className="bg-gradient-to-br from-dark/80 to-dark/40 rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-highlight/20 p-4 rounded-xl">
                <FaChalkboardTeacher size={40} className="text-highlight" />
              </div>
              <h3 className="text-3xl font-bold text-highlight">
                Technical Training
              </h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Empowering teams with the knowledge and skills to leverage modern
              technology. From AI tools to web development fundamentals, we
              provide hands-on training tailored to your needs.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <span className="text-highlight">•</span> AI Tools & Prompt
                Engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="text-highlight">•</span> Web Development
                Bootcamps
              </li>
              <li className="flex items-center gap-2">
                <span className="text-highlight">•</span> Team Workshops &
                Seminars
              </li>
              <li className="flex items-center gap-2">
                <span className="text-highlight">•</span> 1-on-1 Mentorship
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-highlight/10 py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            From custom AI chatbots to full-stack web applications, we have the
            expertise to bring your vision to life.
          </p>
          <Link
            href="https://cal.com/emberwave"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-highlight text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-highlight-dark hover:scale-105 transition-all text-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Services;
