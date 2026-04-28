export interface Project {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  result: string;
  year: string;
  tags: string[];
  image: string;
  color: string;
  slug?: string;
}

export const projects: Project[] = [
  {
    id: "orbis-nft",
    client: "orbis.nft",
    title: "Orbis.Nft",
    category: "web design & development",
    description:
      "a cinematic nft landing page with liquid-glass ui, video backgrounds, and deep-space theming. built to feel like you're drifting through orbit.",
    result: "2.4m impressions",
    year: "2025",
    tags: ["Next.js", "Tailwind", "Motion", "Liquid Glass"],
    image:
      "https://images.unsplash.com/photo-1614728853975-69c960c72aeb?auto=format&fit=crop&w=800&q=80",
    color: "from-indigo-950/60",
    slug: "orbis-nft",
  },
  {
    id: "stackflow",
    client: "stackflow",
    title: "Stackflow",
    category: "web design & development",
    description:
      "a full rebrand and custom saas dashboard built from scratch. went from zero to 4k users in 3 months post-launch.",
    result: "+140% conversion",
    year: "2024",
    tags: ["Next.js", "Figma", "Branding"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-950/60",
  },
  {
    id: "novara-ventures",
    client: "novara ventures",
    title: "Novara Ventures",
    category: "branding & identity",
    description:
      "complete brand identity overhaul for a vc firm. new positioning, visual system, and investor-facing collateral.",
    result: "3x inbound leads",
    year: "2024",
    tags: ["Brand Identity", "Strategy", "Print"],
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    color: "from-stone-900/80",
  },
  {
    id: "loopbase",
    client: "loopbase",
    title: "Loopbase",
    category: "web app development",
    description:
      "end-to-end web app for a project management startup. designed, built, and shipped in 6 weeks flat.",
    result: "launched in 6 weeks",
    year: "2023",
    tags: ["React", "TypeScript", "Motion"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-950/70",
  },
  {
    id: "astral-market",
    client: "astral market",
    title: "Astral Market",
    category: "e-commerce",
    description:
      "headless shopify storefront with custom 3d product viewers and real-time inventory sync across 12 regions.",
    result: "+210% aov",
    year: "2024",
    tags: ["Shopify", "Three.js", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    color: "from-purple-950/70",
  },
  {
    id: "pulse-health",
    client: "pulse health",
    title: "Pulse Health",
    category: "mobile & web app",
    description:
      "patient portal and clinician dashboard for a telehealth startup. hipaa-compliant, real-time video, and ai-assisted intake.",
    result: "50k patients",
    year: "2023",
    tags: ["React Native", "WebRTC", "AI"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    color: "from-rose-950/60",
  },
];

