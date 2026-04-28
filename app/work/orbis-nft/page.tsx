"use client";

import Link from "next/link";
import { Mail, ChevronRight } from "lucide-react";

// ── Inline SVG Icons (lucide-react v1.11 doesn't export Twitter/Github) ───────

function TwitterIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// ── Social Icon Buttons ───────────────────────────────────────────────────────

function SocialButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="liquid-glass w-14 h-14 flex items-center justify-center rounded-[1rem] hover:bg-white/10 transition duration-200 text-[#EFF4FF]">
      {children}
    </button>
  );
}

// ── Section 1: Hero ───────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden rounded-b-[32px]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#010828]/30" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-4 sm:px-6 lg:px-8 pt-6">
          <div className="max-w-[1831px] mx-auto w-full flex items-center justify-between">
            {/* Logo */}
            <span
              className="text-[16px] uppercase text-[#EFF4FF] tracking-wide"
              style={{ fontFamily: "var(--font-anton), Impact, sans-serif" }}
            >
              Orbis.Nft
            </span>

            {/* Nav (liquid glass, hidden mobile) */}
            <nav className="hidden lg:flex items-center gap-8 liquid-glass rounded-[28px] px-[52px] py-[24px]">
              {["Homepage", "Gallery", "Buy NFT", "FAQ", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[13px] uppercase text-[#EFF4FF] hover:text-[#6FFF00] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-anton), Impact, sans-serif",
                    }}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* Spacer for balance */}
            <div className="w-20 hidden lg:block" />
          </div>
        </header>

        {/* Hero Body */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-[1831px] mx-auto w-full relative">
            {/* Heading */}
            <h1
              className="uppercase text-[#EFF4FF] leading-[1.05] sm:leading-[1] max-w-[780px] lg:ml-32"
              style={{
                fontFamily: "var(--font-anton), Impact, sans-serif",
                fontSize: "clamp(40px, 8vw, 90px)",
              }}
            >
              Beyond earth
              <br />
              and ( its ) familiar boundaries
            </h1>

            {/* Cursive accent */}
            <span
              className="absolute right-0 lg:right-[15%] top-1/2 -translate-y-1/2 text-[#6FFF00] mix-blend-exclusion opacity-90 -rotate-1 normal-case hidden md:block"
              style={{
                fontFamily: "var(--font-condiment), cursive",
                fontSize: "clamp(24px, 4vw, 48px)",
              }}
            >
              Nft collection
            </span>

            {/* Desktop Social Icons — top right */}
            <div className="hidden lg:flex flex-col gap-3 absolute right-0 top-0">
              <SocialButton>
                <Mail size={20} />
              </SocialButton>
              <SocialButton>
                <TwitterIcon size={20} />
              </SocialButton>
              <SocialButton>
                <GithubIcon size={20} />
              </SocialButton>
            </div>

            {/* Mobile Social Icons — centered below heading */}
            <div className="flex lg:hidden items-center justify-center gap-3 mt-10">
              <SocialButton>
                <Mail size={20} />
              </SocialButton>
              <SocialButton>
                <TwitterIcon size={20} />
              </SocialButton>
              <SocialButton>
                <GithubIcon size={20} />
              </SocialButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 2: About / Intro ──────────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
      />

      <div className="absolute inset-0 bg-[#010828]/40" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-[1831px] mx-auto w-full">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20 mb-16 lg:mb-24">
            {/* Left: Heading */}
            <div className="relative">
              <h2
                className="uppercase text-[#EFF4FF] leading-[0.95]"
                style={{
                  fontFamily: "var(--font-anton), Impact, sans-serif",
                  fontSize: "clamp(32px, 5vw, 60px)",
                }}
              >
                Hello!
                <br />
                I&apos;m orbis
              </h2>
              <span
                className="absolute -bottom-4 right-0 lg:-right-16 text-[#6FFF00] mix-blend-exclusion normal-case -rotate-2"
                style={{
                  fontFamily: "var(--font-condiment), cursive",
                  fontSize: "clamp(36px, 5vw, 68px)",
                }}
              >
                Orbis
              </span>
            </div>

            {/* Right: Paragraph */}
            <p
              className="uppercase text-[#EFF4FF] max-w-[266px] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "monospace" }}
            >
              A digital object fixed beyond time and place. An exploration of
              distance, form, and silence in space
            </p>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col gap-6 max-w-md">
              <p
                className="uppercase text-[#EFF4FF] text-sm md:text-base leading-relaxed opacity-10"
                style={{ fontFamily: "monospace" }}
              >
                A digital object fixed beyond time and place. An exploration of
                distance, form, and silence in space
              </p>
              <p className="uppercase text-[#010828] lg:text-[#EFF4FF]/10 text-sm md:text-base leading-relaxed lg:hidden" style={{ fontFamily: "monospace" }}>
                A digital object fixed beyond time and place. An exploration of
                distance, form, and silence in space
              </p>
            </div>

            {/* Right Column (hidden below lg) */}
            <div className="hidden lg:flex flex-col gap-6 max-w-md">
              <p
                className="uppercase text-[#EFF4FF] text-sm md:text-base leading-relaxed opacity-10"
                style={{ fontFamily: "monospace" }}
              >
                A digital object fixed beyond time and place. An exploration of
                distance, form, and silence in space
              </p>
              <p
                className="uppercase text-[#EFF4FF] text-sm md:text-base leading-relaxed opacity-10"
                style={{ fontFamily: "monospace" }}
              >
                A digital object fixed beyond time and place. An exploration of
                distance, form, and silence in space
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 3: NFT Collection Grid ────────────────────────────────────────────

const nftVideos = [
  {
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    score: "8.7/10",
  },
  {
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    score: "9/10",
  },
  {
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    score: "8.2/10",
  },
];

function NftCard({ video, score }: { video: string; score: string }) {
  return (
    <div className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition duration-300">
      {/* Video Container */}
      <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={video}
        />
      </div>

      {/* Overlay Bar */}
      <div className="liquid-glass rounded-[20px] px-5 py-4 mt-4 flex items-center justify-between">
        <div>
          <div className="text-[11px] text-[#EFF4FF]/70 uppercase tracking-wider">
            RARITY SCORE:
          </div>
          <div className="text-base text-[#EFF4FF] mt-0.5">{score}</div>
        </div>

        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-200">
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}

function CollectionSection() {
  return (
    <section className="relative w-full bg-[#010828] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1831px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          {/* Left: Heading */}
          <h2
            className="uppercase text-[#EFF4FF] leading-[0.95]"
            style={{
              fontFamily: "var(--font-anton), Impact, sans-serif",
              fontSize: "clamp(32px, 5vw, 60px)",
            }}
          >
            Collection of
            <br />
            <span className="ml-12 sm:ml-16 md:ml-24 lg:ml-32">
              <span
                className="normal-case text-[#6FFF00]"
                style={{
                  fontFamily: "var(--font-condiment), cursive",
                }}
              >
                Space
              </span>{" "}
              <span
                style={{
                  fontFamily: "var(--font-anton), Impact, sans-serif",
                }}
              >
                objects
              </span>
            </span>
          </h2>

          {/* Right: See All Button */}
          <div className="flex items-end gap-3 group cursor-pointer">
            <div>
              <div
                className="uppercase text-[#EFF4FF] leading-none"
                style={{
                  fontFamily: "var(--font-anton), Impact, sans-serif",
                  fontSize: "clamp(32px, 4vw, 60px)",
                }}
              >
                SEE
              </div>
              <div className="h-2 md:h-3 bg-[#6FFF00] w-full mt-2" />
            </div>
            <div className="flex flex-col justify-end pb-[10px]">
              <span
                className="uppercase text-[#EFF4FF] leading-none block"
                style={{
                  fontFamily: "var(--font-anton), Impact, sans-serif",
                  fontSize: "clamp(20px, 2.5vw, 36px)",
                }}
              >
                ALL
              </span>
              <span
                className="uppercase text-[#EFF4FF] leading-none block"
                style={{
                  fontFamily: "var(--font-anton), Impact, sans-serif",
                  fontSize: "clamp(20px, 2.5vw, 36px)",
                }}
              >
                CREATORS
              </span>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftVideos.map((nft, i) => (
            <NftCard key={i} video={nft.url} score={nft.score} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 4: CTA / Final ────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Video (native aspect ratio) */}
      <video
        className="w-full h-auto block"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#010828]/50" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-6 lg:px-8">
        <div className="relative lg:pr-[20%] lg:pl-[15%] text-right">
          {/* Cursive accent */}
          <span
            className="absolute -top-8 left-0 text-[#6FFF00] mix-blend-exclusion normal-case hidden md:block"
            style={{
              fontFamily: "var(--font-condiment), cursive",
              fontSize: "clamp(17px, 4vw, 68px)",
            }}
          >
            Go beyond
          </span>

          <h2
            className="uppercase text-[#EFF4FF] leading-[1.1]"
            style={{
              fontFamily: "var(--font-anton), Impact, sans-serif",
              fontSize: "clamp(16px, 4vw, 60px)",
            }}
          >
            <span className="block mb-4 md:mb-8 lg:mb-12">JOIN US.</span>
            <span className="block">REVEAL WHAT&apos;S HIDDEN.</span>
            <span className="block">DEFINE WHAT&apos;S NEXT.</span>
            <span className="block">FOLLOW THE SIGNAL.</span>
          </h2>
        </div>
      </div>

      {/* Bottom-left Social Icons */}
      <div className="absolute left-[8%] bottom-[12%] sm:bottom-[15%] md:bottom-[20%]">
        <div className="liquid-glass rounded-[0.5rem] sm:rounded-[1rem] lg:rounded-[1.25rem] overflow-hidden flex flex-col">
          {[
            { icon: <Mail size={20} />, label: "Mail" },
            { icon: <TwitterIcon size={20} />, label: "Twitter" },
            { icon: <GithubIcon size={20} />, label: "Github" },
          ].map(({ icon, label }, i, arr) => (
            <button
              key={label}
              className={`flex items-center justify-center text-[#EFF4FF] hover:bg-white/10 transition duration-200
                w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
                h-[12vw] sm:h-[3.5rem] md:h-[2.8rem] lg:h-[4rem]
                ${i < arr.length - 1 ? "border-b border-white/10" : ""}
              `}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Texture Overlay ───────────────────────────────────────────────────────────

function TextureOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none opacity-60"
      style={{
        backgroundImage: "url(/texture.png)",
        backgroundSize: "cover",
        mixBlendMode: "lighten",
      }}
    />
  );
}

// ── Page Export ───────────────────────────────────────────────────────────────

export default function OrbisNftPage() {
  return (
    <main className="bg-[#010828] text-[#EFF4FF]">
      <TextureOverlay />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <CTASection />

      {/* Back to Work Link */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1831px] mx-auto w-full flex justify-between items-center">
          <Link
            href="/work"
            className="text-sm text-[#EFF4FF]/40 hover:text-[#EFF4FF]/70 transition-colors duration-200 flex items-center gap-2"
          >
            <ChevronRight size={14} className="rotate-180" />
            Back to all work
          </Link>
          <span className="text-[10px] tracking-widest uppercase text-[#EFF4FF]/20">
            Orbis.Nft &copy; 2025
          </span>
        </div>
      </div>
    </main>
  );
}
