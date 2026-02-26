"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const introTwo = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-white dark:bg-slate-950 px-6 py-12 lg:px-20 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Replace src with your actual image path */}

          <div className="absolute inset-0 dark:bg-indigo-900/30 z-10" />
          <Image
            src="/writing2.jpg"
            alt="Woman reading in library"
            className="object-cover w-full h-full"
            loading="lazy"
            width={800}
            height={1000}
          />
        </motion.div>
        {/* Right Image Column */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="z-10"
        >
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black-700 dark:text-white text-left"
          >
            Unlock the convenience of having all your writing needs met in one
            place!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
          >
            Experience the relief of overcoming writing challenges and accessing
            top-notch ghostwriting and related services from a single, unmatched
            source. Say goodbye to the daunting task of starting your writing
            project and embrace the opportunity to unwind while receiving the
            finest assistance. At Ebilify.com, we offer unparalleled quality and
            a comprehensive range of services to meet all your writing needs
            effortlessly.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mb-16 pt-5">
            <motion.button
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-3 overflow-hidden rounded-full border-2 border-indigo-600 dark:border-indigo-400 font-semibold transition-all duration-300 bg-white dark:bg-indigo-600"
            >
              {/* The Animated Fill Layer */}
              <motion.span
                variants={{
                  initial: { x: "105%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 z-0 bg-indigo-600 dark:bg-white"
              />

              {/* Button Text */}
              <span
                className="relative z-10 transition-colors duration-300 
                              text-indigo-600 dark:text-white 
                              group-hover:text-white dark:group-hover:text-indigo-600"
              >
                Get a Quote
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -z-0 opacity-10 dark:opacity-20 translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 dark:bg-indigo-500 rounded-full blur-[100px]" />
      </div>
    </section>
  );
};

export default introTwo;
