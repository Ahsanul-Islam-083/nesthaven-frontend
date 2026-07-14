"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Contact Us</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-10">Have a question or need help? Reach out below.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          {submitted ? (
            <div className="bg-emerald-100/50 dark:bg-emerald-900/20 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/30 rounded-2xl p-6 text-emerald-700 dark:text-emerald-300">
              Thanks for reaching out — we&apos;ll get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 rounded-2xl p-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm dark:text-slate-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm dark:text-slate-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm dark:text-slate-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-600/80 hover:bg-emerald-700 backdrop-blur-sm text-white rounded-xl px-6 py-2.5 text-sm font-medium transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 dark:border-white/5 rounded-2xl p-6">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Office</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Gulshan Avenue, Dhaka, Bangladesh</p>
          </div>
          <div className="bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 dark:border-white/5 rounded-2xl p-6">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Email</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">support@nesthaven.com</p>
          </div>
          <div className="bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 dark:border-white/5 rounded-2xl p-6">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Phone</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">+880 1234 567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}