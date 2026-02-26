"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "A memoir by Barrie O Sullivan",
    author: "Barrie O Sullivan",
    image: "/projects/1.jpg",
    color: "bg-slate-800",
  },
  {
    id: 2,
    title: "From kabul to Los Angeles",
    author: "David harbouny",
    image: "/projects/2.jpg",
    color: "bg-indigo-900",
  },
  {
    id: 3,
    title: "Put Something on your feet",
    author: "Seven Hanksa",
    image: "/projects/3.jpg",
    color: "bg-slate-700",
  },
  {
    id: 4,
    title: "Troaell Bridges",
    author: "Edward Buckett",
    image: "/projects/4.jpg",
    color: "bg-slate-800",
  },
  {
    id: 5,
    title: "Spritual Synchronicities",
    author: "Fernando Rojas",
    image: "/projects/5.jpg",
    color: "bg-emerald-900",
  },
];

const RecentProjects = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16 ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col items-center justify-center"
          >
            <h2 className="text-5xl md:text-6xl text-center font-bold text-indigo-600 dark:text-indigo-400">
              Our Recent Projects
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-1.5 w-40 bg-indigo-600 rounded-full" />
              <div className="h-4 w-4 bg-indigo-500 rounded-full opacity-50" />
            </div>
            <p className="text-xl text-center text-slate-600 dark:text-slate-400 max-w-2xl">
              Check out our recent completed projects, we are sure you will be
              impressed.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="aspect-3/4 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-lg relative">
                {/* Placeholder for Image - Replace with <img> tag */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="object-cover"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs truncate">
                    {project.author}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button - Using your requested logic */}
        {/* <div className="mt-16 flex justify-center">
          <motion.button
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 overflow-hidden rounded-full border-2 border-indigo-600 dark:border-indigo-400 font-bold transition-all duration-300 bg-white dark:bg-indigo-600"
          >
            <motion.span
              variants={{
                initial: { y: "105%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 z-0 bg-indigo-600 dark:bg-white"
            />
            <span className="relative z-10 text-indigo-600 dark:text-white group-hover:text-white dark:group-hover:text-indigo-600 transition-colors duration-300">
              View All Projects
            </span>
          </motion.button>
        </div> */}
      </div>
    </section>
  );
};

export default RecentProjects;
