"use client";
import React from "react";
import { ComicText } from "./magicui/comic-text";
import CardSwap, { Card } from "./ui/CardSwamp";
import Image from "next/image";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: ["500"] });

const Services = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 w-full relative">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <ComicText fontSize={3}>My Services</ComicText>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6 lg:pr-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Building Digital Solutions That Matter
              </h2>
              <p
                className={`text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 ${lora.className}`}
              >
                I offer a range of services that bring together full-stack web
                development and modern AI solutions. My goal is to build
                applications that are fast, secure, and easy to scale. I focus
                on creating AI agents that can automate tasks, improve
                workflows, and support real business needs. Every project is
                deployed with reliable cloud infrastructure and optimized for
                performance and growth.
              </p>
            </div>

            {/* Service List for Mobile */}
            <div className="block lg:hidden space-y-4 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Full-Stack Web Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I build scalable web apps with modern stacks (Next.js, React,
                  Node.js, MongoDB/Supabase) including authentication,
                  dashboards, and APIs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  AI Agents
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I design and build intelligent AI agents that can think, plan,
                  and act autonomously to solve complex problems.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  DevOps & Cloud Infrastructure
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I streamline app deployment with CI/CD pipelines and Docker on
                  cloud platforms like Google Cloud and Vercel to ensure
                  scalability, security, and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Card Swap for Desktop */}
          <div className="hidden lg:block relative min-h-[500px]">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
              width={400}
              height={500}
            >
              <Card className="p-6 overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="absolute inset-0">
                  <Image
                    src="/comp.jpg"
                    alt="Full-stack web development workspace with multiple screens showing code and applications"
                    fill
                    className="object-cover opacity-20 dark:opacity-10"
                    sizes="400px"
                    priority
                  />
                </div>
                <div className="h-full flex flex-col justify-between relative z-10">
                  <h3 className="font-extrabold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4">
                    Full-Stack Web Development
                  </h3>
                  <p className="font-medium text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I build scalable web apps with modern stacks (Next.js,
                    React, Node.js, MongoDB/Supabase) including authentication,
                    dashboards, and APIs.
                  </p>
                </div>
              </Card>
              <Card className="p-6 overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="absolute inset-0">
                  <Image
                    src="/ai.jpg"
                    alt="Artificial intelligence and machine learning workspace with neural network visualizations"
                    fill
                    className="object-cover opacity-20 dark:opacity-10"
                    sizes="400px"
                  />
                </div>
                <div className="h-full flex flex-col justify-between relative z-10">
                  <h3 className="font-extrabold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4">
                    AI Agents
                  </h3>
                  <p className="font-medium text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I design and build intelligent AI agents that can think,
                    plan, and act autonomously to solve complex problems.
                  </p>
                </div>
              </Card>
              <Card className="p-6 overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="absolute inset-0">
                  <Image
                    src="/devop.jpg"
                    alt="DevOps and cloud infrastructure dashboard showing deployment pipelines and monitoring"
                    fill
                    className="object-cover opacity-20 dark:opacity-10"
                    sizes="400px"
                  />
                </div>
                <div className="h-full flex flex-col justify-between relative z-10">
                  <h3 className="font-extrabold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4">
                    DevOps & Cloud Infrastructure
                  </h3>
                  <p className="font-medium text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I streamline app deployment with CI/CD pipelines and Docker
                    on cloud platforms like Google Cloud and Vercel to ensure
                    scalability, security, and reliability.
                  </p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
