"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PropertiesFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [q, setQ] = useState(searchParams.get("q") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (type) params.set("type", type);
    if (location) params.set("location", location);
    if (sort) params.set("sort", sort);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 rounded-2xl p-4 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      <input
        type="text"
        placeholder="Search title..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="rounded-xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm dark:text-slate-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-500"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="rounded-xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm dark:text-slate-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Studio">Studio</option>
        <option value="Shared Room">Shared Room</option>
      </select>

      <input
        type="text"
        placeholder="Location (e.g. Gulshan)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="rounded-xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm dark:text-slate-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-500"
      />

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm dark:text-slate-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
      >
        <option value="">Sort by</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
      </select>

      <button
        onClick={applyFilters}
        className="bg-emerald-600/80 hover:bg-emerald-700 backdrop-blur-sm text-white rounded-xl px-4 py-2 text-sm font-medium transition"
      >
        Apply Filters
      </button>
    </div>
  );
}