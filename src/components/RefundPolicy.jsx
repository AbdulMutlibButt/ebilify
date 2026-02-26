"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, AlertCircle, RefreshCw, XCircle, Info } from "lucide-react";

const refundPoints = [
  {
    icon: <RefreshCw className="w-6 h-6 text-indigo-500" />,
    title: "Pre-Work Refund",
    text: "Payments are fully refundable only if project work has not yet officially commenced.",
  },
  {
    icon: <XCircle className="w-6 h-6 text-rose-500" />,
    title: "In-Progress Policy",
    text: "Once the outline is approved or drafting begins, payments become non-refundable due to the custom nature of our work.",
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-amber-500" />,
    title: "Partial Completion",
    text: "If a project is cancelled mid-way, refund eligibility is evaluated based on the percentage of work already delivered.",
  },
];

const RefundPolicy = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Centered Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 mb-4"
          >
            <ShieldCheck className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4"
          >
            Refund <span className="text-indigo-600">Policy</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            We believe in fair business. Our policy is designed to protect both your investment and our creative dedication.
          </p>
        </div>

        {/* Vertical Points Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 gap-8">
                {refundPoints.map((point, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {point.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chargeback Warning Box */}
              <div className="mt-10 p-6 bg-rose-500/5 border border-rose-500/20 rounded-2xl flex gap-4 items-center">
                <Info className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  <strong className="text-rose-600 dark:text-rose-400 uppercase tracking-wide mr-1">Note:</strong> 
                  Chargebacks without prior communication may result in permanent service suspension. We encourage open dialogue to resolve any concerns.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default RefundPolicy;