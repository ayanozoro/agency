"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = [
  "Acme Corp",
  "GlobalTech",
  "Nexus Industries",
  "Apex Systems",
  "Quantum Logic",
  "Stark Industries",
  "Wayne Enterprises",
  "Cyberdyne",
  "Umbrella Corp",
  "InGen",
];

// Duplicate the array twice to ensure the marquee can cover large screens seamlessly
const duplicatedCompanies = [...companies, ...companies];

export default function ClientMarquee() {
  return (
    <div className="w-full bg-[#fdf0f8] py-24 overflow-hidden flex flex-col items-center">
      <div className="mb-12 text-center px-4">
        <p className="text-[13px] font-semibold tracking-widest uppercase text-[#993556] mb-3">
          Trusted Worldwide
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2a0a1a] tracking-tight mb-4">
          Loved by <span style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400, color: "#993556" }}>top brands</span>
        </h2>
        <p className="text-[#72243e] font-medium">
          Join hundreds of agencies powering their growth with Convix.
        </p>
      </div>
      
      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right Fade Gradients for visual polish */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fdf0f8] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fdf0f8] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 whitespace-nowrap px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40, // Controls the speed of the marquee
            repeat: Infinity,
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-10 min-w-[220px] h-24 bg-white shadow-sm border border-[#f0c0d8] rounded-2xl text-xl font-bold text-[#993556]/35 hover:text-[#993556] hover:border-[#993556]/25 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
