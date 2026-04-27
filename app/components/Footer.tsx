import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Share2,
  Camera,
  Video
} from "lucide-react";
import FooterBackgroundGradient from "@/components/nurui/footer-background-gradient";
import { TextHoverEffect } from "@/components/nurui/text-hover-effect";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] relative h-fit overflow-hidden w-full">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        {/* Main grid for the footer content */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Section 1: Pollen brand and description */}

          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#0f6e56] text-3xl font-extrabold">
                &hearts;
              </span>

              <span className="text-white text-3xl font-bold">Convix</span>
            </div>

            <p className="text-sm leading-relaxed text-neutral-400">
              Convix is a modern PR-agency SaaS powering the future.
            </p>
          </div>

          {/* Section 2: About Us links */}

          <div>
            <h4 className="text-white text-lg font-semibold mb-6">About Us</h4>

            <ul className="space-y-3 text-neutral-400">
              <li>
                <a href="#" className="hover:text-[#0f6e56] transition-colors">
                  Company History
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#0f6e56] transition-colors">
                  Meet the Team
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#0f6e56] transition-colors">
                  Employee Handbook
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#0f6e56] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Helpful Links */}

          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Helpful Links
            </h4>

            <ul className="space-y-3 text-neutral-400">
              <li>
                <a href="#" className="hover:text-[#0f6e56] transition-colors">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#0f6e56] transition-colors">
                  Support
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#0f6e56] transition-colors relative"
                >
                  Live Chat
                  <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#0f6e56] animate-pulse"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact Us */}

          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>

            <ul className="space-y-4 text-neutral-400">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#0f6e56]" />

                <a
                  href="mailto:hello@convix.com"
                  className="hover:text-[#0f6e56] transition-colors"
                >
                  hello@convix.com
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#0f6e56]" />

                <a
                  href="tel:+1234567890"
                  className="hover:text-[#0f6e56] transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-[#0f6e56]" />

                <span className="hover:text-[#0f6e56] transition-colors">
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}

        <hr className="border-t border-gray-700 my-8" />

        {/* Bottom section: social media and copyright */}

        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-neutral-400">
          {/* Social Media Icons */}

          <div className="flex space-x-6 text-gray-400">
            <a
              href="#"
              aria-label="Social 1"
              className="hover:text-[#0f6e56] transition-colors relative"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="#"
              aria-label="Social 2"
              className="hover:text-[#0f6e56] transition-colors"
            >
              <Camera size={20} />
            </a>

            <a
              href="#"
              aria-label="Social 3"
              className="hover:text-[#0f6e56] transition-colors"
            >
              <Share2 size={20} />
            </a>

            <a
              href="#"
              aria-label="Social 4"
              className="hover:text-[#0f6e56] transition-colors"
            >
              <Video size={20} />
            </a>

            <a
              href="#"
              aria-label="Globe"
              className="hover:text-[#0f6e56] transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>

          {/* Copyright text */}

          <div className="text-center md:text-left">
            <p>&copy; 2025 Convix Software. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Convix" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
