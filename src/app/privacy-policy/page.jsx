"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Our privacy policy and refund terms are important for your understanding. Click below to view our complete policy.
        </p>
        <Link
          href="/#terms-conditions"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
        >
          View Refund Policy
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
