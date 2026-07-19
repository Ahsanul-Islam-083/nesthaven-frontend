"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/types/property";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      className="flex flex-col rounded-2xl border border-white/30 dark:border-white/10 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800">
        <Image
          src={property.images[0] || "https://loremflickr.com/800/600/house"}
          alt={property.title}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-emerald-600/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-lg">
          {property.type}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">{property.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{property.shortDescription}</p>

        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-3">
          <span>{property.bedrooms} bd</span>
          <span>•</span>
          <span>{property.bathrooms} ba</span>
          <span>•</span>
          <span>★ {property.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20 dark:border-white/5">
          <div>
            <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">৳{property.price.toLocaleString()}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">/mo</span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="text-sm bg-emerald-600/80 hover:bg-emerald-700 backdrop-blur-sm text-white rounded-xl px-3 py-2 transition"
          >
            View asdf
          </Link>
        </div>
      </div>
    </motion.div>
  );
}