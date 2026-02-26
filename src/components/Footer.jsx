"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const QuickLinks = [
  { name: "About Us", path: "/#about-us", isExternal: false },
  { name: "FAQs", path: "/#faqs", isExternal: false },
  { name: "Contact Us", path: "/#contact-us", isExternal: false },
  { name: "Privacy Policy", path: "/privacy-policy", isExternal: true },
  { name: "Terms & Conditions", path: "/terms-conditions", isExternal: true },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] text-white pt-20 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-indigo-400">
              Ebilify
            </h3>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              Ebilify: Unleashing the Magic of Storytelling to Fulfill Your
              Literary Dreams! Embark on this remarkable journey with us and let
              us make your literary dreams a reality.
            </p>
            {/* <div className="flex gap-4">
              <Image
                src="/Logo.jpeg"
                alt="ebilify"
                width={200}
                height={100}
                loading="lazy"
                className="h-25 opacity-80"
              />
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-indigo-500/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {QuickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-white hover:text-indigo-400 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-indigo-500/30 pb-2">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "Book Writing Services USA",
                "E-Book Writing & Publishing",
                "Book Cover Design",
                "Book Proof Reading and Editing",
                "Book Publishing Services",
                "Book Marketing",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white hover:text-indigo-400 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-indigo-500/30 pb-2">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-indigo-600/10 rounded-lg group-hover:bg-indigo-600 transition-colors">
                  <Phone className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-white uppercase font-bold tracking-wider">
                    Call Us
                  </p>
                  <p className="text-white">+1 (307) 269-9430</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-indigo-600/10 rounded-lg group-hover:bg-indigo-600 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-white uppercase font-bold tracking-wider">
                    Email
                  </p>
                  <p className="text-white">info@ebilify.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-indigo-600/10 rounded-lg group-hover:bg-indigo-600 transition-colors">
                  <MapPin className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                    Address
                  </p>
                  <p className="text-white">
                    30 N Gould St 54224, Sheridan, WY 82801, USA
                    <br />
                    Wyoming, United States
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Ebilify LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
