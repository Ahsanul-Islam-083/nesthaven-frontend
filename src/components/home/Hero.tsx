

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="relative h-[65vh] min-h-[500px] flex items-center text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://i.ibb.co.com/sJ2Zpgy0/hero2.jpg"
          alt="Modern apartment interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/50 via-emerald-900/40 to-emerald-900/30" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-400 blur-3xl" data-parallax="0.15" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-white blur-3xl" data-parallax="-0.2" />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
            variants={item}
          >
            Find your next home, without the guesswork
          </motion.h1>
          <motion.p
            className="text-lg text-emerald-100 mb-8"
            variants={item}
          >
            Browse verified rental listings across the city — filtered by budget,
            location, and the details that actually matter to you.
          </motion.p>

          <motion.form
            action="/properties"
            className="flex flex-col sm:flex-row gap-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-2 rounded-2xl border border-white/20 shadow-lg shadow-black/10"
            variants={item}
          >
            <input
              type="text"
              name="q"
              placeholder="Search by city, area, or property name..."
              className="flex-1 bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            <button
              type="submit"
              className="bg-orange-500/90 hover:bg-orange-600 backdrop-blur-sm text-white font-medium rounded-xl px-6 py-3 text-sm transition"
            >
              Search
            </button>
          </motion.form>

          <motion.div
            className="flex gap-8 mt-8 text-sm text-emerald-100"
            variants={item}
          >
            <div>
              <span className="text-2xl font-bold text-white block">1,200+</span>
              Active listings
            </div>
            <div>
              <span className="text-2xl font-bold text-white block">45</span>
              Cities covered
            </div>
            <div>
              <span className="text-2xl font-bold text-white block">98%</span>
              Verified owners
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}