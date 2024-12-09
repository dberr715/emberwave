"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation triggers only once
    });
  }, []);

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
            <p className="mt-4 lg:text-xl text-md leading-relaxed">
              With a strong foundation in AI, cloud technologies, and modern
              frameworks, I specialize in crafting innovative software solutions
              to enhance workflows. When I&apos;m not coding, you&apos;ll find
              me running with my wife, fly fishing, or playing pickleball.
            </p>
            {/* Talk With Me Button */}
            <div
              className="flex justify-center mt-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link
                href="https://cal.com/david-berry7"
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

        {/* Logos Section */}
        <div className="pt-12 bg-black text-white">
          <h3
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Commonly Used Tools & Technologies
          </h3>
          <div
            className="flex flex-wrap justify-center gap-10 items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/images/nextjswhite.png"
                alt="Next.js"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="mt-2 text-sm text-gray-300">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/react.png"
                alt="React"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="mt-2 text-sm text-gray-300">React</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/wordpress.png"
                alt="WordPress"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="mt-2 text-sm text-gray-300">WordPress</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/azure.png"
                alt="Azure"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="mt-2 text-sm text-gray-300">Azure</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/djangowhite.png"
                alt="Django"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="mt-2 text-sm text-gray-300">Django</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/powerbi.png"
                alt="Power BI"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="mt-2 text-sm text-gray-300">Power BI</span>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-32">
          <h3
            className="text-4xl font-bold text-center mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            The EmberWave Story
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="text-lg leading-relaxed">
                I began my journey as a high school science teacher, where I
                developed the ability to simplify complex concepts and
                communicate them clearly. This skill laid the foundation for my
                transition into software development, driven by a passion for
                using technology to solve real-world problems. Starting
                EmberWave was a natural progression, allowing me to combine my
                creativity and technical expertise to build innovative
                solutions. Today, I bring this unique blend of experience and
                dedication to every project, ensuring that each one reflects my
                commitment to excellence.
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Image
                src="/images/Whitenobg.png"
                alt="My Story"
                width={320}
                height={320}
                className="rounded-lg shadow-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
