"use client";

import React from "react";
import { motion } from "framer-motion";

const ProcessCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group p-8 rounded-2xl border border-indigo-400 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const OurProcess = ({ processes }) => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 ">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6"
          >
            Our Process
          </motion.h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            How we transform your vision into a literary masterpiece, step by
            step.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <ProcessCard key={index} {...process} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
