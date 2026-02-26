"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket, Clock, FileText } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter Package",
    price: "$199",
    description: "Perfect for authors who have their manuscript ready.",
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    features: [
      "Cover design (1 concept + 2 revs)",
      "Interior formatting (KDP ready)",
      "Proofreading (up to 10k words)",
    ],
    delivery: "7–10 business days",
    format: "PDF + DOCX",
    payment: "100% upfront",
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business Package",
    price: "$699",
    description: "Our most popular choice for professional entrepreneurs.",
    icon: <Rocket className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />,
    features: [
      "10k words ghostwriting",
      "2 revision rounds",
      "Cover design & Formatting",
      "SEO book description",
    ],
    delivery: "14–21 business days",
    format: "DOCX + Print Ready PDF",
    payment: "50% upfront / 50% post-draft",
    cta: "Best Value",
    popular: true,
  },
  {
    name: "Premium Authority",
    price: "$1,499",
    description: "End-to-end solution for high-impact authority books.",
    icon: <Crown className="w-6 h-6 text-amber-500" />,
    features: [
      "20k words ghostwriting",
      "Research & structured outline",
      "3 revision rounds + Editing",
      "Amazon publishing assistance",
    ],
    delivery: "21–30 business days",
    format: "DOCX + PDF",
    payment: "50% / 25% / 25% Milestones",
    cta: "Go Premium",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4"
          >
            Transparent <span className="text-indigo-600">Pricing</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Choose the perfect plan to bring your literary vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-7 rounded-[2rem] border transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "bg-white dark:bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-200 dark:shadow-indigo-500/20 scale-105 z-20"
                  : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black px-5 py-1.5 rounded-full tracking-[0.2em] uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 my-2">
                  <span className="text-3xl font-black text-indigo-600 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-xs font-medium uppercase tracking-tighter">USD</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed italic">
                  Payment: {plan.payment}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <Clock className="w-3 h-3" /> {plan.delivery}
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <FileText className="w-3 h-3" /> {plan.format}
                </div>
              </div>

              <button
                className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 active:scale-95 ${
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                }`}
              >
                <Link href={"/#contact-us"}>{plan.cta}</Link>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;