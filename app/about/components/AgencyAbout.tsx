"use client";

import React, { memo, useCallback, useState } from "react";

// ── Icons ────────────────────────────────────────────────────────────────────

const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const BrushIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
    <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.48 1 3.5 1 1.66 0 3-1.34 3-3s-1.34-3.04-1.5-3.04z" />
  </svg>
);

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);

const StrategyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// ── Badge ────────────────────────────────────────────────────────────────────

const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline" | "ghost";
}) => {
  const variants = {
    default: "bg-white/10 text-white/80 border border-white/10",
    secondary: "bg-white/5 text-white/60 border border-white/10",
    outline: "border border-white/20 text-white/50 bg-transparent",
    ghost: "bg-transparent text-white/40 border-none",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-0.5 text-[11px] font-normal tracking-wide transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// ── Types ────────────────────────────────────────────────────────────────────

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface TimelineItemData {
  id: string;
  title: string;
  category: string;
  since: string;
  icon: IconType;
  description: string;
  deliverables: string[];
  tags: string[];
}

// ── Agency Data ──────────────────────────────────────────────────────────────

const agencyData: TimelineItemData[] = [
  {
    id: "svc-1",
    title: "branding & identity",
    category: "creative",
    since: "est. 2018",
    icon: BrushIcon,
    description:
      "we craft brand identities that stick. from naming and strategy to logo systems, color language, and typography — we build the visual foundation your company stands on.",
    deliverables: [
      "brand strategy and positioning workshops",
      "logo design and full visual identity system",
      "color palette, type scale, and iconography",
      "brand guidelines and asset handoff",
    ],
    tags: ["Figma", "brand strategy", "logo design", "typography", "style guide"],
  },
  {
    id: "svc-2",
    title: "web design & development",
    category: "build",
    since: "est. 2018",
    icon: CodeIcon,
    description:
      "we design and build websites that are fast, responsive, and conversion-ready. every project starts with strategy and ends with a product that genuinely performs — not just looks good in a mockup.",
    deliverables: [
      "ui/ux design and interactive prototyping",
      "frontend development with react, next.js, and tailwind",
      "cms integration (sanity, contentful, wordpress)",
      "performance optimisation and seo setup",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Figma", "SEO", "CMS"],
  },
  {
    id: "svc-3",
    title: "digital strategy",
    category: "strategy",
    since: "est. 2020",
    icon: StrategyIcon,
    description:
      "before a single pixel is designed, we map the territory. market research, competitor analysis, user journeys — we build a clear strategy so every creative decision has a reason behind it.",
    deliverables: [
      "market and competitor analysis",
      "user persona development and journey mapping",
      "content architecture and sitemap planning",
      "go-to-market strategy and launch roadmap",
    ],
    tags: ["UX research", "content strategy", "analytics", "roadmapping"],
  },
  {
    id: "svc-4",
    title: "digital marketing & growth",
    category: "growth",
    since: "est. 2021",
    icon: GlobeIcon,
    description:
      "we help you reach the right people and keep them. from paid campaigns to organic content, we build growth systems that compound — so your online presence grows month over month.",
    deliverables: [
      "paid social and search campaign management",
      "seo and content marketing strategy",
      "email marketing and automation setup",
      "monthly analytics reporting and optimisation",
    ],
    tags: ["Google Ads", "Meta Ads", "SEO", "email marketing", "analytics"],
  },
];

// ── Timeline Item Content ────────────────────────────────────────────────────

const TimelineItemContent = memo(function TimelineItemContent({
  item,
}: {
  item: TimelineItemData;
}) {
  return (
    <div className="mt-5 space-y-5 animate-in slide-in-from-top-1 duration-200">
      <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>

      <div className="space-y-2.5">
        {item.deliverables.map((d, i) => (
          <div key={i} className="flex items-start gap-3 group">
            <div className="w-1 h-1 rounded-full bg-white/25 mt-2 flex-shrink-0 group-hover:bg-white/60 transition-colors duration-200" />
            <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-200">
              {d}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {item.tags.map((tag, i) => (
          <Badge key={i} variant="secondary">{tag}</Badge>
        ))}
      </div>
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

// ── Timeline Item ────────────────────────────────────────────────────────────

const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle,
  index,
}: {
  item: TimelineItemData;
  expanded: boolean;
  onToggle: (id: string) => void;
  index: number;
}) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;

  return (
    <div className="relative group">
      {/* Connecting line */}
      <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

      {/* Node */}
      <div className="absolute left-[21px] top-6 w-[18px] h-[18px] rounded-full border border-white/20 bg-[#0a0a0a] flex items-center justify-center z-10 transition-all duration-300 group-hover:border-white/40">
        <div className="w-1.5 h-1.5 rounded-full bg-white/0 group-hover:bg-white/60 transition-all duration-300" />
      </div>

      {/* Card */}
      <div className="ml-12 mb-6">
        <div
          className={`rounded-xl border transition-all duration-300 ${
            expanded
              ? "border-white/10 bg-white/[0.04]"
              : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03]"
          }`}
        >
          {/* Header button */}
          <button
            id={headerId}
            onClick={() => onToggle(item.id)}
            aria-expanded={expanded}
            aria-controls={contentId}
            className="w-full text-left p-5 rounded-t-xl transition-colors duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/8">
                    <Icon className="w-4 h-4 text-white/50" />
                  </div>
                  <h3 className="text-base font-normal text-white/90 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 ml-11">
                  <Badge variant="outline">{item.category}</Badge>
                  <span className="text-[11px] text-white/25 tracking-widest">{item.since}</span>
                </div>
              </div>
              <div className={`text-white/25 transition-transform duration-300 mt-1 ${expanded ? "rotate-180" : ""}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Expandable */}
          {expanded && (
            <div
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              className="px-5 pb-5 border-t border-white/5"
            >
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
TimelineItem.displayName = "TimelineItem";

// ── Main Timeline ────────────────────────────────────────────────────────────

function AgencyTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi",
}: {
  data: TimelineItemData[];
  defaultExpandedIds?: string[];
  expandMode?: "multi" | "single";
}) {
  const initial = defaultExpandedIds ?? [];
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(initial));

  const onToggle = useCallback(
    (id: string) => {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (expandMode === "single") {
          return prev.has(id) ? new Set() : new Set([id]);
        }
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    },
    [expandMode]
  );

  return (
    <div className="relative">
      {data.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          expanded={expanded.has(item.id)}
          onToggle={onToggle}
          index={index}
        />
      ))}
    </div>
  );
}

// ── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "+320", label: "projects delivered" },
  { value: "+180", label: "total clients" },
  { value: "98%", label: "satisfaction rate" },
  { value: "7yrs", label: "in the industry" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AgencyAboutSection() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-readex)] antialiased">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">

        {/* Heading */}
        <header className="mb-14">
          <h1
            className="text-4xl sm:text-5xl font-medium text-white/90 mb-6 leading-[0.95] tracking-[-0.04em]"
          >
            we help ambitious<br />
            companies build their<br />
            <span className="text-white/30">digital presence.</span>
          </h1>
          <p className="text-sm text-white/40 leading-relaxed max-w-md">
            born from a belief that great design changes businesses. we partner with
            founders, product teams, and marketing leads to craft digital identities
            that feel alive — from the first pixel to the last interaction.
          </p>
        </header>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden mb-16">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#0a0a0a] px-5 py-5">
              <div className="text-2xl font-medium text-white/90 tracking-tight mb-1">
                {s.value}
              </div>
              <div className="text-[11px] text-white/30 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/25">
            what we do
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Timeline */}
        <AgencyTimeline data={agencyData} expandMode="single" />

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
          <p className="text-[11px] text-white/20 leading-relaxed max-w-xs">
            one team, end-to-end — no handoffs, no gaps, no agency nonsense.
          </p>
          <span className="text-[10px] tracking-[0.15em] uppercase text-white/15">
            securify™
          </span>
        </div>

      </div>
    </div>
  );
}

