export default function AgencyHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Word 1: "we" */}
      <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[12%]">
        we
      </h1>

      {/* Word 2: "build" */}
      <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[32%]">
        build
      </h1>

      {/* Word 3: "online" */}
      <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-[10%] md:left-[20%] top-[52%]">
        online
      </h1>

      {/* Agency Tagline */}
      <p className="absolute left-6 md:left-10 top-[44%] max-w-[260px] text-[15px] leading-snug text-white/90">
        we help ambitious companies build their digital presence — branding,
        design, and development under one roof.
      </p>

      {/* About Label */}
      

      {/* Year Label */}
      <div className="absolute top-8 right-6 md:right-10 text-xs text-white/40 tracking-widest uppercase">
        est. 2018
      </div>

      {/* Stat Block 1 — top-right */}
      <div className="absolute right-6 md:right-24 top-[16%]">
        <div className="flex items-center gap-3 justify-end">
          <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
          <span className="text-4xl md:text-5xl font-medium tracking-tight">
            +320
          </span>
        </div>
        <p className="text-xs md:text-sm text-white/70 mt-1 text-right">
          projects delivered
        </p>
      </div>

      {/* Stat Block 2 — mid-right */}
      <div className="absolute right-6 md:right-16 top-[36%]">
        <div className="flex items-center gap-3 justify-end">
          <div className="hidden md:block h-px w-16 bg-white/40 rotate-[20deg]" />
          <span className="text-4xl md:text-5xl font-medium tracking-tight">
            +180
          </span>
        </div>
        <p className="text-xs md:text-sm text-white/70 mt-1 text-right">
          total clients
        </p>
      </div>

      {/* Stat Block 3 — bottom-left */}
      <div className="absolute left-6 md:left-20 bottom-20 md:bottom-24">
        <div className="flex items-center gap-3">
          <span className="text-4xl md:text-5xl font-medium tracking-tight">
            +12k
          </span>
          <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
        </div>
        <p className="text-xs md:text-sm text-white/70 mt-1">
          daily active users
        </p>
      </div>

      {/* Stat Block 4 — bottom-right */}
      <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20">
        <div className="flex items-center gap-3 justify-end">
          <div className="hidden md:block h-px w-20 bg-white/40 rotate-[-20deg]" />
          <span className="text-4xl md:text-5xl font-medium tracking-tight">
            7yrs
          </span>
        </div>
        <p className="text-xs md:text-sm text-white/70 mt-1 text-right">
          in the industry
        </p>
      </div>

      {/* Stat Block 5 — bottom-center */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-28">
        <div className="flex items-center gap-3 justify-center">
          <span className="text-4xl md:text-5xl font-medium tracking-tight">
            98%
          </span>
        </div>
        <p className="text-xs md:text-sm text-white/70 mt-1 text-center">
          client satisfaction
        </p>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-[10px] text-white/30 tracking-widest uppercase">
          scroll
        </span>
        <div className="w-px h-6 bg-white/20" />
      </div>
    </section>
  );
}
