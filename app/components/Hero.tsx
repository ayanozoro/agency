"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
    <div className="min-h-screen w-full bg-[#ededed] font-[family-name:var(--font-inter)]">
      {/* Hero Container (clips everything inside) */}
      <div className="relative w-full h-screen overflow-hidden bg-[#d9d9d9]">
        
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
          poster="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=60"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4" type="video/mp4" />
        </motion.video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10"></div>
        
        {/* Foreground Content */}
        <div className="relative z-10 w-full h-full flex flex-col">
          <Navbar />
          
          <motion.div 
            className="flex-1 flex flex-col items-center justify-center px-4 pb-8 sm:pb-12 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-[13px] font-medium text-neutral-800"
              variants={itemVariants}
            >
              <span className="w-1.5 h-1.5 bg-[#ef4d23] rounded-full"></span>
              Convix Software
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              className="mt-5 sm:mt-6 max-w-4xl text-neutral-900"
              style={{
                fontSize: "clamp(36px, 8vw, 72px)",
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: "-0.02em"
              }}
              variants={itemVariants}
            >
              Shaping <span style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400 }}>Agencies</span><br/>of tomorrow
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="mt-4 sm:mt-6 text-neutral-700 px-2"
              style={{ fontSize: "clamp(13px, 3.5vw, 16px)" }}
              variants={itemVariants}
            >
              The All-In-One Software Powering the Future of PR Agencies
            </motion.p>
            
            {/* CTA Button */}
            <motion.button 
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-[#0b0f1a] text-white rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 text-[14px] font-medium hover:bg-black transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </motion.button>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}

