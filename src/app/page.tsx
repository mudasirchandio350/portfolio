"use client";
import React from "react";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gleft from "@/components/ui/Gleft";
import Grid from "@/components/ui/Grid";
import Projects from "@/components/Projects";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Companies from "@/components/Companies";
import Testimonials from "@/components/Testimonials";
import Glb from "@/components/Glb";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <div className="">
        <SmoothCursor />
        <Grid />
        <Gleft />
        <div className="relative z-10 px-10 overflow-hidden">
          <Hero />
          <Companies />
          <Services />
          <Projects />
          <Testimonials />
          <Glb />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
