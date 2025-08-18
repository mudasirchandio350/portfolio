"use client";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import { ComicText } from "./magicui/comic-text";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-10">
      <h1 className="text-4xl lg:text-6xl  text-center font-extrabold capitalize">
        Building seamless{" "}
        <span className="bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-indigo-600 dark:to-green-500 bg-gradient-to-r from-cyan-500 to-green-500">
          Digital experiences
        </span>{" "}
        and intelligent agents that work as hard as you do.
      </h1>
      <p className="py-6 text-center text-gray-500 dark:text-gray-200 capitalize">
        <Typewriter
          options={{
            strings: [
              "I create seamless high-impact digital experiences that merge design with intelligence",
              "Every interaction is crafted to engage inspire and deliver real results",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
      <div className="flex items-center gap-5">
        <Button
          variant={"outline"}
          className="backdrop-blur-2xl cursor-pointer  transition-all duration-300 hover:scale-105"
        >
          <Link href={"#projects"}>View Project</Link>
        </Button>
        <Button className="cursor-pointer bg-gradient-to-br from-indigo-600 to-green-400 transition-all duration-300 hover:scale-105">
          <Link href={"#contact"}>Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
