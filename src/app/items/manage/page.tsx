"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authFetch } from "@/lib/authFetch";
import { Property } from "@/types/property";
import toast from "react-hot-toast";
import ConfirmModal from "@/components/ConfirmModal";

export default function ManageItemsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const fetchMyProperties = async () => {
    setLoading(true);
    try {
      const res = await authFetch("/my-properties");
      if (!res.ok) throw new Error("Failed to load your properties");
      const data = await res.json();
      setProperties(data);
    } catch {
      toast.error("Could not load your listings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const handleDelete = async (id: string) => {
    setConfirmId(null);
    setDeletingId(id);
    try {
      const res = await authFetch(`/properties/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setProperties((prev) => prev.filter((p) => p._id !== id));
      toast.success("Listing deleted");
    } catch {
      toast.error("Could not delete this listing. Try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Manage Listings</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">View, and delete the properties you&apos;ve listed.</p>
        </div>
        <Link
          href="/items/add"
          className="bg-emerald-600/80 hover:bg-emerald-700 backdrop-blur-sm text-white rounded-xl px-4 py-2 text-sm font-medium transition whitespace-nowrap"
        >
          + Add New
        </Link>
      </div>

      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-20 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : properties.length === 0 ? (
        <div className="text-center py-20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 rounded-2xl">
          <p className="text-slate-500 dark:text-slate-400 mb-4">You haven&apos;t listed any properties yet.</p>
          <Link href="/items/add" className="text-emerald-600 font-medium hover:underline">
            List your first property
          </Link>
        </div>
      ) : (
        <div className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 rounded-2xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-white/40 dark:bg-white/5 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">
            <div className="col-span-5">Property</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-3 text-right">Actions</div>
          </div>

          {properties.map((property) => (
            <div
              key={property._id}
              className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center px-6 py-4 border-t border-white/20 dark:border-white/5"
            >
              <div className="sm:col-span-5 flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                  <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100 line-clamp-1">{property.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{property.location}</p>
                </div>
              </div>

              <div className="sm:col-span-2 text-sm text-slate-600 dark:text-slate-300">{property.type}</div>

              <div className="sm:col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                ৳{property.price.toLocaleString()}/mo
              </div>

              <div className="sm:col-span-3 flex justify-start sm:justify-end gap-2">
                <Link
                  href={`/properties/${property._id}`}
                  className="text-sm bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-xl px-3 py-1.5 transition"
                >
                  View
                </Link>
                <button
                  onClick={() => setConfirmId(property._id)}
                  disabled={deletingId === property._id}
                  className="text-sm bg-red-50/50 dark:bg-red-900/20 hover:bg-red-100/80 dark:hover:bg-red-900/30 backdrop-blur-sm text-red-600 dark:text-red-400 rounded-xl px-3 py-1.5 transition disabled:opacity-50"
                >
                  {deletingId === property._id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <ConfirmModal
        isOpen={confirmId !== null}
        title="Delete listing"
        description="Are you sure you want to delete this listing? This action cannot be undone."
        confirmLabel="Delete"
        onConfirm={() => confirmId && handleDelete(confirmId)}
        onCancel={() => setConfirmId(null)}
      />
    </div>
  );
}