"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-md bg-white/90 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-white/10 p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-emerald-100/50 dark:bg-emerald-900/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
          </svg>
        </motion.div>

        <motion.p
          className="text-6xl font-bold text-slate-900 dark:text-slate-100 mb-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          404
        </motion.p>

        <motion.h1
          className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-sm text-slate-500 dark:text-slate-400 mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25 }}
        >
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.3 }}
        >
          <Link
            href="/"
            className="w-full sm:w-auto bg-emerald-600/80 hover:bg-emerald-700 backdrop-blur-sm text-white rounded-xl px-6 py-2.5 text-sm font-medium transition text-center"
          >
            Back to Home
          </Link>
          <Link
            href="/properties"
            className="w-full sm:w-auto bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-xl px-6 py-2.5 text-sm font-medium transition text-center border border-slate-200 dark:border-white/10"
          >
            Explore Properties
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
