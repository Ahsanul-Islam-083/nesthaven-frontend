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
      <h1 className="text-4xl font-semibold text-slate-900 mb-2">Contact Us</h1>
      <p className="text-slate-500 mb-10">Have a question or need help? Reach out below.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          {submitted ? (
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-teal-800">
              Thanks for reaching out — we&apos;ll get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <button
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white rounded-md px-6 py-2.5 text-sm font-medium transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
            <p className="text-slate-500 text-sm">Gulshan Avenue, Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
            <p className="text-slate-500 text-sm">support@nesthaven.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
            <p className="text-slate-500 text-sm">+880 1234 567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}