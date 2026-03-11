"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface SessionInfo {
  planName?: string;
  amount?: string;
  customerEmail?: string;
}

interface CheckoutSuccessClientProps {
  sessionInfo: SessionInfo;
}

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const CONFETTI_DURATION_MS = 3000;
const CONFETTI_COLORS = ["#22c55e", "#166534", "#4ade80"];

export default function CheckoutSuccessClient({ sessionInfo }: CheckoutSuccessClientProps) {
  const router = useRouter();
  
  useEffect(() => {
    // Confetti animation
    const endTime = Date.now() + CONFETTI_DURATION_MS;

    const animateConfetti = () => {
      if (Date.now() < endTime) {
        // Left side confetti
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: CONFETTI_COLORS,
        });

        // Right side confetti
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: CONFETTI_COLORS,
        });

        requestAnimationFrame(animateConfetti);
      }
    };

    animateConfetti();
  }, []);
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-slate-50 dark:bg-slate-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl w-full rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-xl dark:border-slate-800 dark:bg-slate-900"
      >
        {/* Success Icon with Pulse */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
        >
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Payment Successful!
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-4 text-slate-600 dark:text-slate-400">
          Thanks for your order. We&apos;ve received your payment and our team is already getting to work.
        </motion.p>

        {sessionInfo?.planName && (
          <motion.div
            variants={itemVariants}
            className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-left dark:border-slate-800 dark:bg-slate-800/50"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Order Details
            </p>
            <dl className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex justify-between">
                <dt className="opacity-70">Plan</dt>
                <dd className="font-bold text-slate-900 dark:text-white">
                  {sessionInfo.planName}
                </dd>
              </div>
              {sessionInfo.amount && (
                <div className="flex justify-between border-t border-slate-200 dark:border-slate-700 pt-3">
                  <dt className="opacity-70">Amount Paid</dt>
                  <dd className="font-bold text-green-600 dark:text-green-400">
                    {sessionInfo.amount}
                  </dd>
                </div>
              )}
              {sessionInfo.customerEmail && (
                <div className="flex justify-between border-t border-slate-200 dark:border-slate-700 pt-3">
                  <dt className="opacity-70">Email</dt>
                  <dd className="font-medium">{sessionInfo.customerEmail}</dd>
                </div>
              )}
            </dl>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="mt-10">
          <button
            type="button"
            onClick={() => router.replace("/")}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition-all hover:bg-indigo-700 active:scale-95"
            aria-label="Return to Dashboard"
          >
            <span>Return to Dashboard</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
