"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[65vh] min-h-[500px] flex items-center bg-gradient-to-br from-teal-700 to-teal-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Find your next home, without the guesswork
          </h1>
          <p className="text-lg text-teal-100 mb-8">
            Browse verified rental listings across the city — filtered by budget,
            location, and the details that actually matter to you.
          </p>

          <form
            action="/properties"
            className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20"
          >
            <input
              type="text"
              name="q"
              placeholder="Search by city, area, or property name..."
              className="flex-1 bg-white rounded-lg px-4 py-3 text-slate-900 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg px-6 py-3 text-sm transition"
            >
              Search
            </button>
          </form>

          <div className="flex gap-8 mt-8 text-sm text-teal-100">
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
          </div>
        </div>
      </div>
    </section>
  );
}