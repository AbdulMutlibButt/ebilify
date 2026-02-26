"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Users,
  Stethoscope,
  Scale,
  BookOpen,
  Gamepad2,
  Film,
  Utensils,
  Building2,
  Music,
  Wallet,
  GraduationCap,
  Zap,
} from "lucide-react";
import Link from "next/link";

const niches = [
  { title: "Travel & Lifestyle", icon: Plane, color: "#6366f1", bg: "#eef2ff" },
  {
    title: "Government & Non-Profits",
    icon: Users,
    color: "#0ea5e9",
    bg: "#e0f2fe",
  },
  {
    title: "Medical & Healthcare",
    icon: Stethoscope,
    color: "#10b981",
    bg: "#d1fae5",
  },
  { title: "Legal & Attorney", icon: Scale, color: "#f59e0b", bg: "#fef3c7" },
  {
    title: "Fiction & Romance",
    icon: BookOpen,
    color: "#ec4899",
    bg: "#fce7f3",
  },
  {
    title: "Gaming & Fitness",
    icon: Gamepad2,
    color: "#8b5cf6",
    bg: "#ede9fe",
  },
  {
    title: "Fashion & Entertainment",
    icon: Film,
    color: "#f43f5e",
    bg: "#ffe4e6",
  },
  { title: "Food & Beverage", icon: Utensils, color: "#f97316", bg: "#ffedd5" },
  {
    title: "Business & Real Estate",
    icon: Building2,
    color: "#0891b2",
    bg: "#cffafe",
  },
  { title: "Sports & Music", icon: Music, color: "#7c3aed", bg: "#ede9fe" },
  { title: "Finance & HR", icon: Wallet, color: "#059669", bg: "#d1fae5" },
  {
    title: "Education & Day Care",
    icon: GraduationCap,
    color: "#d97706",
    bg: "#fef9c3",
  },
  
];

// ─── Niche Card ───────────────────────────────────────────────────────────────

const NicheCard = ({ title, icon: Icon, color, bg, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.45, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative h-48 flex flex-col items-center justify-center rounded-2xl cursor-pointer overflow-hidden"
      style={{
        /* Light mode: tinted card bg instead of harsh white */
        background: hovered ? color : bg,
        border: `1.5px solid ${hovered ? color : "transparent"}`,
        boxShadow: hovered
          ? `0 8px 32px ${color}33, 0 2px 8px ${color}22`
          : "0 2px 12px rgba(0,0,0,0.06)",
        transition:
          "background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* Dark mode override via Tailwind — overrides inline style */}
      <div className="absolute inset-0 dark:bg-slate-800/80 dark:group-hover:bg-slate-700/90 rounded-2xl transition-colors duration-300" />

      {/* Subtle radial glow on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1.4 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle at 50% 60%, ${color}44 0%, transparent 70%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3 px-4">
        {/* Icon bubble */}
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? -6 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background: hovered ? "rgba(255,255,255,0.22)" : `${color}18`,
            color: hovered ? "#fff" : color,
            backdropFilter: "blur(4px)",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          <Icon className="w-7 h-7 dark:text-indigo-300" />
        </motion.div>

        {/* Title */}
        <h3
          className="font-bold text-center text-xs md:text-sm uppercase tracking-wide leading-snug transition-colors duration-300 dark:text-slate-200"
          style={{ color: hovered ? "#fff" : "#334155" }}
        >
          {title}
        </h3>
      </div>

      {/* Bottom accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl origin-left"
        style={{ background: hovered ? "rgba(255,255,255,0.5)" : color }}
      />
    </motion.div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

const WritingNiches = () => {
  return (
    <section
      className="
        py-24 px-6
        bg-slate-50 dark:bg-slate-950
        transition-colors duration-300
        relative overflow-hidden
      "
    >
      {/* Soft ambient background blob — light mode only */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px]
          rounded-full opacity-30 dark:opacity-0
          bg-[radial-gradient(circle,#c7d2fe_0%,transparent_70%)]
          blur-3xl
        "
      />
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px]
          rounded-full opacity-20 dark:opacity-0
          bg-[radial-gradient(circle,#ddd6fe_0%,transparent_70%)]
          blur-3xl
        "
      />

      <div className="container mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="mb-16 max-w-5xl">
          {/* Label chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
              bg-indigo-100 dark:bg-indigo-900/40
              text-indigo-600 dark:text-indigo-300
              text-xs font-semibold uppercase tracking-widest
              border border-indigo-200 dark:border-indigo-700"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Our Writing Niches
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="
              text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8
              text-slate-800 dark:text-slate-100
            "
          >
            Unlock a World of{" "}
            <span
              className="
                bg-gradient-to-r from-indigo-500 to-violet-500
                bg-clip-text text-transparent
              "
            >
              Writing Possibilities
            </span>{" "}
            <br className="hidden md:block" />
            with Our Versatile Niches
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-500 dark:text-slate-400">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="text-base md:text-lg leading-relaxed"
            >
              <span className="text-5xl font-black text-indigo-400 dark:text-indigo-500 leading-none mr-2 float-left">
                At
              </span>
              Ebilify, we thrive on the endless possibilities of our writing
              expertise. Our team of skilled ghostwriters fearlessly dives into
              a wide range of captivating niches without limitations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed pt-2 md:pt-0"
            >
              Immerse yourself in our versatile range of niches, where we
              transform your visions into captivating literary masterpieces —
              whether an epic adventure, a thought-provoking memoir, or
              authoritative industry content.
            </motion.p>
          </div>
        </div>

        {/* ── Niches Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {niches.map((niche, index) => (
            <NicheCard key={index} {...niche} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            Don&apos;t see your niche?
          </p>

          <motion.button
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 overflow-hidden rounded-full border-2 border-indigo-600 dark:border-indigo-400 font-bold transition-all duration-300 bg-white dark:bg-indigo-600"
          >
            {/* Yeh layer niche se upar slide hokar fill hogi */}
            <motion.span
              variants={{
                initial: { x: "105%" },
                hover: { x: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 z-0 bg-indigo-600 dark:bg-white"
            />

            {/* Text color transition logic */}
            <Link href={"/#contact-us"}>
            <span
              className="relative z-10 transition-colors duration-300 
      text-indigo-600 dark:text-white 
      group-hover:text-white dark:group-hover:text-indigo-600"
            >
              Let&apos;s Talk About Your Project
            </span>
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WritingNiches;
