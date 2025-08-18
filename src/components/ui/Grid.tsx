"use client";
import React from "react";

const Grid = () => {
  return (
    <div className="min-h-screen w-full  opacity-50 fixed">
      {/* Purple Gradient Grid Right Background */}
      <div
        className="absolute inset-0 z-0 opacity-70 dark:opacity-15"
        style={{
          backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #00ff73, transparent)
      `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />
      {/* Your Content/Components */}
    </div>
  );
};

export default Grid;
