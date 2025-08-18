"use client";
import React from "react";
import { ModeToggle } from "./ui/ModeToggle";

const Header = () => {
  return (
    <div className="flex px-6 py-4 w-full justify-between fixed z-20">
      <div>
        <h1 className="text-xl font-extrabold">Mudasir</h1>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
