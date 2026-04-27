"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <div className="min-h-screen w-full font-[family-name:var(--font-rubik)]">
      {/* Hero Container (clips everything inside) */}
      <div className="relative w-full min-h-screen overflow-hidden bg-[#21346e]">
        
        {/* Background Video */}
        <motion.video 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          disableRemotePlayback
          webkit-playsinline="true"
          x5-playsinline="true"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260206_044704_dd33cb15-c23f-4cfc-aa09-a0465d4dcb54.mp4" type="video/mp4" />
        </motion.video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Foreground Content */}
        <div className="relative z-10 w-full min-h-screen flex flex-col">
          <Navbar />
          
          <motion.div 
            className="flex-1 flex flex-col items-start justify-start px-4 sm:px-6 lg:px-8 pt-32 md:pt-48 pb-8 sm:pb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Headline */}
            <motion.h1 
              className="text-white font-bold uppercase"
              style={{
                fontFamily: "var(--font-rubik), sans-serif",
                lineHeight: 0.98,
                letterSpacing: "-2px",
              }}
              variants={itemVariants}
            >
              <span className="block text-6xl md:text-8xl lg:text-[100px]">NEW ERA</span>
              <span className="block text-6xl md:text-8xl lg:text-[100px]">OF DESIGN</span>
              <span className="block text-6xl md:text-8xl lg:text-[100px]" style={{ letterSpacing: "-4px" }}>STARTS NOW</span>
            </motion.h1>
            
            {/* CTA Button */}
            <motion.button 
              className="mt-8 sm:mt-10 relative flex items-center justify-center"
              style={{ width: 184, height: 65 }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* SVG Background */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 184 65" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0 8C0 3.58172 3.58172 0 8 0H176C180.418 0 184 3.58172 184 8V57C184 61.4183 180.418 65 176 65H8C3.58172 65 0 61.4183 0 57V8Z" 
                  fill="white"
                />
              </svg>
              
              {/* Button Text */}
              <span 
                className="relative z-10 font-bold uppercase"
                style={{
                  fontFamily: "var(--font-rubik), sans-serif",
                  fontSize: 20,
                  color: "#161a20",
                }}
              >
                GET STARTED
              </span>
            </motion.button>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}

