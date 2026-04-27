"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const LogoSVG = () => (
    <svg viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-[#ef4d23]" fill="currentColor">
      {/* Center circle */}
      <circle cx="16" cy="16" r="3.5" />
      {/* 8 petals at radius 10 */}
      <circle cx="26" cy="16" r="3.5" />
      <circle cx="6" cy="16" r="3.5" />
      <circle cx="16" cy="26" r="3.5" />
      <circle cx="16" cy="6" r="3.5" />
      <circle cx="23.07" cy="23.07" r="3.5" />
      <circle cx="8.93" cy="8.93" r="3.5" />
      <circle cx="23.07" cy="8.93" r="3.5" />
      <circle cx="8.93" cy="23.07" r="3.5" />
    </svg>
  );

  return (
    <div className="sticky top-0 z-50 flex justify-center pt-4 sm:pt-6 px-3 sm:px-4 w-full">
      <nav className="bg-white rounded-full shadow-sm border border-neutral-200 pl-2 pr-2 py-2 w-full max-w-[760px] relative">
        <div className="flex items-center">
          <Link href="/" className="ml-1 flex items-center">
            <LogoSVG />
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-[14px] font-medium text-[#111f18] ml-8">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              Home
            </Link>
            
            {/* Services Dropdown (Desktop) */}
            <div className="relative group">
              <Link href="#services" className="flex items-center gap-1 hover:text-black transition-colors py-2">
                Services <ChevronDown className="w-3.5 h-3.5 text-[#ef4d23] transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2">
                <Link href="#web-dev" className="px-4 py-2 hover:bg-neutral-50 hover:text-black transition-colors">Web Dev</Link>
                <Link href="#ui-ux" className="px-4 py-2 hover:bg-neutral-50 hover:text-black transition-colors">UI/UX</Link>
                <Link href="#digital-marketing" className="px-4 py-2 hover:bg-neutral-50 hover:text-black transition-colors">Digital Marketing</Link>
                <Link href="#branding" className="px-4 py-2 hover:bg-neutral-50 hover:text-black transition-colors">Branding</Link>
                <Link href="#seo" className="px-4 py-2 hover:bg-neutral-50 hover:text-black transition-colors">SEO</Link>
              </div>
            </div>

            <Link href="#work" className="hover:text-black transition-colors">Work</Link>
<Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button className="hidden md:flex text-neutral-600 hover:text-black">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <Link href="#access" className="flex items-center gap-2 bg-[#ef4d23] text-white rounded-full pl-4 pr-1 py-1.5 text-sm font-medium hover:bg-[#d9421c] transition-colors">
              <span className="hidden sm:inline">Get early access</span>
              <span className="sm:hidden">Early access</span>
              <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
            <button 
              className="md:hidden ml-1 p-1 text-neutral-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl shadow-lg border border-neutral-200 p-3 z-20 md:hidden flex flex-col gap-3 font-medium max-h-[80vh] overflow-y-auto">
            <Link href="/" className="flex items-center gap-2 px-2 py-1">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Home
            </Link>
            
            <div className="px-2 py-1 flex flex-col gap-2 border-b border-neutral-100 pb-3">
              <div className="flex items-center justify-between text-black">
                Services <ChevronDown className="w-4 h-4 text-[#ef4d23]" />
              </div>
              <div className="pl-2 flex flex-col gap-3 text-neutral-600 text-sm mt-1">
                <Link href="#web-dev">Web Dev</Link>
                <Link href="#ui-ux">UI/UX</Link>
                <Link href="#digital-marketing">Digital Marketing</Link>
                <Link href="#branding">Branding</Link>
                <Link href="#seo">SEO</Link>
              </div>
            </div>
            
            <Link href="#work" className="px-2 py-1 pt-2">Work</Link>
<Link href="/about" className="px-2 py-1">About</Link>
            <Link href="/contact" className="px-2 py-1">Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
