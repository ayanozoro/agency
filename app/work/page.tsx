import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "./data";

export default function WorkPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-[1831px] mx-auto w-full">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#EFF4FF]/25">
              selected work
            </span>
            <div className="flex-1 h-px bg-[#EFF4FF]/5" />
            <span className="text-[10px] text-[#EFF4FF]/15">
              {projects.length} projects
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.92] tracking-[-0.04em] text-[#EFF4FF]/90 mb-6"
            style={{ fontFamily: "var(--font-anton), Impact, sans-serif" }}
          >
            beyond earth
            <br />
            <span className="text-[#EFF4FF]/25">&amp; boundaries.</span>
          </h1>

          <p className="text-sm text-[#EFF4FF]/40 leading-relaxed max-w-md mb-12">
            a curated collection of projects we have shipped for ambitious
            brands, startups, and creators. each one built with precision,
            purpose, and a touch of obsession.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] tracking-widest uppercase text-[#EFF4FF]/20">
              filter
            </span>
            {["all", "branding", "web design", "web app", "motion"].map(
              (f, i) => (
                <button
                  key={f}
                  className={`text-[11px] tracking-wide uppercase rounded-full px-4 py-1.5 border transition-all duration-200 ${
                    i === 0
                      ? "bg-[#EFF4FF] text-[#010828] border-[#EFF4FF]"
                      : "text-[#EFF4FF]/40 border-[#EFF4FF]/10 hover:border-[#EFF4FF]/30 hover:text-[#EFF4FF]/60"
                  }`}
                >
                  {f}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Featured: Orbis.NFT (hero card) ─────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-12 pb-6">
        <div className="max-w-[1831px] mx-auto w-full">
          <Link href="/work/orbis-nft">
            <div className="group relative overflow-hidden rounded-3xl border border-[#EFF4FF]/[0.06] cursor-pointer">
              {/* Background video */}
              <div className="absolute inset-0">
                <video
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010828] via-[#010828]/60 to-transparent" />
              </div>

              <div className="relative p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-end justify-between gap-8 min-h-[420px] md:min-h-[520px]">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#EFF4FF]/25">
                      2025
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#EFF4FF]/10" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#EFF4FF]/25">
                      nft landing page
                    </span>
                  </div>
                  <h2
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.92] tracking-[-0.04em] text-[#EFF4FF]/90 mb-4"
                    style={{
                      fontFamily: "var(--font-anton), Impact, sans-serif",
                    }}
                  >
                    orbis.nft
                  </h2>
                  <p className="text-sm text-[#EFF4FF]/40 leading-relaxed max-w-lg">
                    a cinematic nft collection landing page built with liquid-glass
                    ui, looping video backgrounds, and a deep-space aesthetic.
                    designed to immerse collectors before they even connect their
                    wallet.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Next.js", "Tailwind", "Motion", "Liquid Glass"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-[#EFF4FF]/30 border border-[#EFF4FF]/8 rounded-full px-3 py-1 bg-[#EFF4FF]/[0.03]"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-right">
                    <div
                      className="text-3xl md:text-4xl uppercase tracking-tight text-[#EFF4FF]/80"
                      style={{
                        fontFamily: "var(--font-anton), Impact, sans-serif",
                      }}
                    >
                      full case study
                    </div>
                    <div className="text-[10px] text-[#EFF4FF]/25 mt-0.5 tracking-wide text-right">
                      4 sections
                    </div>
                  </div>
                  <div className="p-3 rounded-full border border-[#EFF4FF]/10 group-hover:border-[#EFF4FF]/30 group-hover:bg-[#EFF4FF]/5 transition-all duration-300">
                    <ArrowUpRight
                      size={18}
                      className="text-[#EFF4FF]/30 group-hover:text-[#EFF4FF]/60 transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Project Grid ─────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-[1831px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1).map((p) => (
              <div
                key={p.id}
                className="group relative overflow-hidden rounded-2xl border border-[#EFF4FF]/[0.06] cursor-pointer hover:border-[#EFF4FF]/[0.12] transition-colors duration-300"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${p.color} to-[#010828]/80`}
                  />
                </div>

                <div className="relative p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#EFF4FF]/25">
                        {p.year}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#EFF4FF]/10" />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#EFF4FF]/25">
                        {p.category}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl uppercase text-[#EFF4FF]/85 tracking-tight mb-2"
                      style={{
                        fontFamily: "var(--font-anton), Impact, sans-serif",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#EFF4FF]/35 leading-relaxed max-w-md">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-[#EFF4FF]/30 border border-[#EFF4FF]/8 rounded-full px-3 py-1 bg-[#EFF4FF]/[0.03]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#EFF4FF]/[0.04]">
                    <div className="text-2xl md:text-3xl font-medium tracking-tight text-[#EFF4FF]/80">
                      {p.result}
                    </div>
                    <div className="p-2.5 rounded-full border border-[#EFF4FF]/10 group-hover:border-[#EFF4FF]/30 group-hover:bg-[#EFF4FF]/5 transition-all duration-300">
                      <ArrowUpRight
                        size={15}
                        className="text-[#EFF4FF]/30 group-hover:text-[#EFF4FF]/60 transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-12 py-24">
        <div className="max-w-[1831px] mx-auto w-full">
          <div className="relative overflow-hidden rounded-3xl border border-[#EFF4FF]/[0.06]">
            <div className="absolute inset-0 bg-[#EFF4FF]/[0.02]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                  radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#EFF4FF]/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="relative px-8 sm:px-16 py-20 md:py-24 text-center">
              <div className="inline-flex items-center gap-2 bg-[#EFF4FF]/5 border border-[#EFF4FF]/10 rounded-full px-4 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EFF4FF]/40 animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#EFF4FF]/40">
                  available for new projects
                </span>
              </div>

              <h2
                className="text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-[-0.04em] text-[#EFF4FF]/90 mb-6"
                style={{
                  fontFamily: "var(--font-anton), Impact, sans-serif",
                }}
              >
                ready to build
                <br />
                <span className="text-[#EFF4FF]/25">something?</span>
              </h2>

              <p className="text-sm text-[#EFF4FF]/35 leading-relaxed max-w-sm mx-auto mb-12">
                tell us what you are working on. we will get back to you within
                24 hours with honest thoughts and a rough sense of fit.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 bg-[#EFF4FF] text-[#010828] text-sm font-medium rounded-full px-7 py-3.5 hover:bg-[#EFF4FF]/90 transition-colors duration-200"
                >
                  start a project
                  <MoveRight size={15} />
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-[#EFF4FF]/40 border border-[#EFF4FF]/10 rounded-full px-7 py-3.5 hover:border-[#EFF4FF]/25 hover:text-[#EFF4FF]/60 transition-all duration-200"
                >
                  meet the team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

