"use client";
import { Copyright, Facebook, Github, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex  py-10 bg-gray-950 justify-between px-10">
      <div className="flex gap-2">
        <p>mudasir</p>
        <Copyright />
      </div>
      <div className="flex gap-2">
        <Facebook />
        <Instagram />
        <Github />
      </div>
    </div>
  );
};

export default Footer;
