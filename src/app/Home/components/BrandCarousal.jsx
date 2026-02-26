"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/brands/barnes.png",
  "/brands/bookmate.png",
  "/brands/kobo.png",
  "/brands/scribd.png",
  "/brands/apple.png",
  "/brands/amazon.png",
  "/brands/barnes.png",
  "/brands/bookmate.png",
  "/brands/kobo.png",
  "/brands/scribd.png",
  "/brands/apple.png",
  "/brands/amazon.png",
];

const LogoCarousel = () => {
  return (
    <div className="w-full py-10 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="relative flex max-w-[100vw] overflow-hidden">
        {/* Masking effect for edges (Side se fade ho jaye) */}
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-white dark:from-slate-900 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white dark:from-slate-900 to-transparent"></div>

        <motion.div
          className="flex space-x-12 items-center"
          animate={{
            x: ["0%", "-50%"], // images ko adha slide karega kyunki humne data duplicate kiya hai
          }}
          transition={{
            ease: "linear",
            duration: 20, // Jitna zyada number, utni slow speed
            repeat: Infinity,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 md:w-48 h-16 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 dark:invert"
            >
              <Image
                src={src}
                alt={`Logo ${index}`}
                className="object-contain max-h-full"
                width={150}
                height={150}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;
