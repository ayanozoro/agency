import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Work | Convix Software",
  description: "Our portfolio of work for ambitious companies.",
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#010828] text-[#EFF4FF]">
      {children}
    </div>
  );
}

