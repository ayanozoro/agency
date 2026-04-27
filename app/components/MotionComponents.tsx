"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

// ── Shared animation presets ────────────────────────────────────────────────

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// ── Reusable wrapper components ─────────────────────────────────────────────

interface MotionWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.2,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideInLeft({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInLeft}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideInRight({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInRight}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.2,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleIn}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0.05,
  once = true,
  amount = 0.15,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

// ── Count-up number animation ───────────────────────────────────────────────

import { useMotionValue, useTransform, animate, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 1.5,
  className = "",
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(`${prefix}${decimals > 0 ? "0.00" : "0"}${suffix}`);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => {
        setDisplay(`${prefix}${value.toFixed(decimals)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, target, duration, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

