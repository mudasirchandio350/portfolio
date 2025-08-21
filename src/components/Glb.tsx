"use client";
import React from "react";
import { ComicText } from "./magicui/comic-text";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const images: any = [
  "/react.svg",
  "/javascript.svg",
  "/express.svg",
  "typescript.svg",
  "/mongodb.svg",
  "/redis.svg",
  "/nextjs.svg",
  "/docker.svg",
  "/langchain.svg",
  "/langgraph.svg",
  "/azure.png",
  "/Sanity.svg",
];

const Glb = () => {
  return (
    <div className="relative flex flex-col py-10 justify-center items-center w-full">
      <ComicText fontSize={2}>My Skills</ComicText>
      <div className="flex gap-10 py-5 flex-wrap justify-center items-center">
        {images.map((image: any, index: any) => (
          <Card
            className="flex justify-center items-center size-[100px] md:size-[150px]"
            key={index}
          >
            <CardContent className="flex justify-center items-center">
              <Image
                src={image}
                alt=""
                height={80}
                width={80}
                className="object-contain dark:filter dark:brightness-100 dark:invert-25 hover:invert-0 opacity-70 hover:opacity-100 transition-opacity duration-300 max-sm:h-[50px] max-sm:w-[50px] "
                sizes="(max-width: 768px) 128px, 128px"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Glb;
