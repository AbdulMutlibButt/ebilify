import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "Payment Canceled | Ebilify",
  description: "Your checkout was canceled. No payment was processed. Feel free to try again whenever you're ready.",
  openGraph: {
    title: "Payment Canceled | Ebilify",
    description: "Your checkout was canceled. No payment was processed.",
    type: "website",
  },
};

export default function CheckoutCanceledPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-slate-50 dark:bg-slate-950">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-xl w-full rounded-3xl border border-slate-200 bg-white p-10 md:p-14 text-center shadow-xl dark:border-slate-800 dark:bg-slate-900"
      >
        {/* Subtle Alert Icon */}
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-900/20"
        >
          <svg 
            className="h-10 w-10 text-amber-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </motion.div>

        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Payment Canceled
        </h1>
        
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          No worries! Your payment hasn&apos;t been processed.
        </p>

        <div className="mt-8 space-y-4 rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Maybe you weren&apos;t ready, or you want to pick a different plan? 
            You can head back to the pricing page to review your options whenever you&apos;re ready.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-800 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            Back to Pricing
          </Link>
          
          <Link
            href="/support"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-transparent dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Need Help?
          </Link>
        </div>
      </motion.div>
    </main>
  );
}