"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const services = [
    {
      title: "Web Development",
      description: "Fast, secure, and scalable web applications built with modern frameworks like React and Next.js. We turn complex problems into elegant solutions.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description: "User-centric design that captivates and converts. We create intuitive, stunning interfaces that provide seamless digital experiences.",
      icon: "✨",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your audience. From SEO to social media campaigns, we help your brand reach its full potential.",
      icon: "📈",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative" style={{ background: "#fdf4fb" }}>
      {/* Soft rose radial glow behind heading */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(153, 53, 86, 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[13px] font-semibold tracking-widest uppercase text-[#993556] mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a0a1a] tracking-tight">
            Solutions Designed for{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#993556",
              }}
            >
              Growth
            </span>
          </h2>
          <p className="mt-4 text-[#72243e] font-medium max-w-2xl mx-auto">
            Everything your agency needs to scale, delivered with precision and care.
          </p>
        </motion.div>

        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#f0c0d8] rounded-[14px] p-8 flex flex-col gap-4 transition-all duration-300 hover:border-[rgba(153,53,86,0.25)] hover:shadow-lg"
              style={{ cursor: "pointer" }}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                style={{ background: "#fbeaf0" }}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-[#2a0a1a]">
                {service.title}
              </h3>
              <p className="text-[#72243e] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

