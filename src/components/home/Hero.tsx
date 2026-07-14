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
    <section className="relative h-[65vh] min-h-[500px] flex items-center bg-gradient-to-br from-emerald-600 to-emerald-900 text-white overflow-hidden">
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
        <div className="flex items-center gap-12">
          <div className="max-w-2xl flex-1">
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
              className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20"
              variants={item}
            >
              <input
                type="text"
                name="q"
                placeholder="Search by city, area, or property name..."
                className="flex-1 bg-white dark:bg-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-6 py-3 text-sm transition"
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

          <motion.div
            className="hidden lg:block relative w-96 h-[480px] rounded-xl overflow-hidden shrink-0"
            variants={item}
          >
            <Image
              src="https://i.ibb.co.com/sJ2Zpgy0/hero2.jpg"
              alt="Modern apartment interior"
              fill
              className="object-cover"
              sizes="384px"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
