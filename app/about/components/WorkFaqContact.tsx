"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

// ── Recent Work Data ──────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    client: "stackflow",
    category: "web design & development",
    description: "a full rebrand and custom SaaS dashboard built from scratch. went from zero to 4k users in 3 months post-launch.",
    result: "+140% conversion",
    year: "2024",
    tags: ["Next.js", "Figma", "Branding"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-950/60",
  },
  {
    id: 2,
    client: "novara ventures",
    category: "branding & identity",
    description: "complete brand identity overhaul for a VC firm. new positioning, visual system, and investor-facing collateral.",
    result: "3x inbound leads",
    year: "2024",
    tags: ["Brand Identity", "Strategy", "Print"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    color: "from-stone-900/80",
  },
  {
    id: 3,
    client: "loopbase",
    category: "web app development",
    description: "end-to-end web app for a project management startup. designed, built, and shipped in 6 weeks flat.",
    result: "launched in 6 weeks",
    year: "2023",
    tags: ["React", "TypeScript", "Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-950/70",
  },
];

// ── FAQ Data ──────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "how long does a typical project take?",
    a: "it depends on scope. a brand identity takes 3–4 weeks. a full website design and build is typically 6–10 weeks. complex web apps can run 3–6 months. we always give you a clear timeline before we start — and we stick to it.",
  },
  {
    q: "what's your minimum project budget?",
    a: "we work with clients from £5k for focused projects like landing pages or brand refreshes, up to £100k+ for complex platforms. we'd rather be upfront about fit early than waste anyone's time.",
  },
  {
    q: "do you work with startups or only established companies?",
    a: "both. about half our clients are early-stage startups building their first serious digital presence. the other half are established businesses looking to level up. what matters is ambition, not size.",
  },
  {
    q: "what does the process actually look like?",
    a: "discovery → strategy → design → build → launch → support. we kick off every project with a deep-dive session to align on goals, then move through clearly defined phases with regular check-ins. you're never in the dark.",
  },
  {
    q: "can we hire you for just one part — design only or dev only?",
    a: "yes. some clients come to us just for design (we hand off figma files ready for dev). others bring us in just to build from existing designs. we're flexible, but we do our best work end-to-end.",
  },
  {
    q: "do you offer ongoing support after launch?",
    a: "yes. most of our clients stay on a monthly retainer for updates, new features, and performance work. we don't disappear after launch — we're built for long-term partnerships.",
  },
];

// ── Recent Work ───────────────────────────────────────────────────────────────

function RecentWork() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/25">recent work</span>
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-[10px] text-white/15">{projects.length} projects</span>
      </div>

      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-medium leading-[0.92] tracking-[-0.04em] text-white/85 mb-4">
          work that<br />
          <span className="text-white/25">speaks for itself.</span>
        </h2>
        <p className="text-sm text-white/35 leading-relaxed max-w-sm">
          a few recent projects we're proud of. each one started with a problem and ended
          with a result worth talking about.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-4">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            onHoverStart={() => setHovered(p.id)}
            onHoverEnd={() => setHovered(null)}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] cursor-pointer"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src={p.image}
                alt={p.client}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${p.color} to-black/80`} />
            </div>

            {/* Content */}
            <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/25">{p.year}</span>
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/25">{p.category}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-white/85 tracking-tight mb-2">
                  {p.client}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed max-w-md">
                  {p.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] text-white/30 border border-white/8 rounded-full px-3 py-1 bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — result + arrow */}
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:gap-3 flex-shrink-0">
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-medium text-white/80 tracking-tight">
                    {p.result}
                  </div>
                  <div className="text-[10px] text-white/25 mt-0.5 tracking-wide">outcome</div>
                </div>
                <div className="p-2.5 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                  <ArrowUpRight size={15} className="text-white/30 group-hover:text-white/60 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all */}
      <div className="mt-8 flex justify-end">
        <button className="flex items-center gap-2 text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200 group">
          view all work
          <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/25">faq</span>
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-[10px] text-white/15">{faqs.length} questions</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left — sticky heading */}
        <div className="lg:sticky lg:top-12">
          <h2 className="text-4xl sm:text-5xl font-medium leading-[0.92] tracking-[-0.04em] text-white/85 mb-5">
            things people<br />
            <span className="text-white/25">always ask.</span>
          </h2>
          <p className="text-sm text-white/35 leading-relaxed max-w-xs mb-8">
            everything you'd ask on a first call — answered honestly, upfront. still have
            questions? we're one message away.
          </p>
          <button className="flex items-center gap-2 text-[11px] text-white/40 border border-white/10 rounded-full px-5 py-2.5 hover:border-white/25 hover:text-white/60 transition-all duration-200">
            ask us anything
            <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Right — accordion */}
        <div className="divide-y divide-white/[0.04]">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer"
              >
                <span
                  className={`text-sm leading-snug transition-colors duration-200 ${
                    open === i ? "text-white/80" : "text-white/45 group-hover:text-white/65"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={14} className="text-white/25" />
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-white/30 leading-relaxed pb-5 pr-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Contact CTA ───────────────────────────────────────────────────────────────

function ContactCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.06]">
      {/* Background texture */}
      <div className="absolute inset-0 bg-white/[0.02]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative px-8 sm:px-16 py-20 md:py-24 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">available for new projects</span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium leading-[0.9] tracking-[-0.04em] text-white/90 mb-6">
          ready to build<br />
          <span className="text-white/25">something?</span>
        </h2>

        {/* Sub */}
        <p className="text-sm text-white/35 leading-relaxed max-w-sm mx-auto mb-12">
          tell us what you're working on. we'll get back to you within 24 hours with
          honest thoughts and a rough sense of fit.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="flex items-center gap-2 bg-white text-black text-sm font-normal rounded-full px-7 py-3.5 hover:bg-white/90 transition-colors duration-200">
            start a project
            <ArrowUpRight size={15} />
          </button>
          <button className="text-sm text-white/40 border border-white/10 rounded-full px-7 py-3.5 hover:border-white/25 hover:text-white/60 transition-all duration-200">
            see our work first
          </button>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14 pt-10 border-t border-white/[0.04]">
          {[
            { label: "email", value: "hello@securify.co" },
            { label: "response time", value: "within 24hrs" },
            { label: "based in", value: "london, uk" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-[10px] tracking-widest uppercase text-white/20 mb-1">{item.label}</div>
              <div className="text-sm text-white/45">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Page Export ───────────────────────────────────────────────────────────────

export default function WorkFaqContactSection() {
  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 space-y-28">
        <RecentWork />
        <div className="h-px bg-white/[0.04]" />
        <FAQ />
        <div className="h-px bg-white/[0.04]" />
        <ContactCTA />
      </div>
    </section>
  );
}

