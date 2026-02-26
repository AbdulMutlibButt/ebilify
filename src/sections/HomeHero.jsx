"use client";
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function HomeHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <WavyBackground
      backgroundFill={isDark ? "black" : "white"}
      className="max-w-4xl mx-auto  px-4 lg:px-0 pt-30"
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-black dark:text-white font-bold inter-var text-center">
        Professional Ghostwriting & Publishing Services
      </p>
      <p className="text-sm md:text-lg mt-4  text-black dark:text-white font-normal inter-var text-center">
        Ebilify LLC provides structured ghostwriting, editing, and publishing
        support services for authors and entrepreneurs. All projects are
        delivered under written agreement with defined timelines and milestones.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-16 pt-5"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
         
       >
        <Link href={"/#contact-us"} className="flex gap-4 justify-center items-center">
          Get Started <ArrowRight size={20} />
        </Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-white/70 dark:hover:bg-slate-900 transition-colors"
        >
          Learn More
        </motion.button>
      </motion.div>
    </WavyBackground>
  );
}
