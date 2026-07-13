"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";

const DEMO_USER = { email: "demo@nesthaven.com", password: "demo123456" };

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const doLogin = async (email: string, password: string) => {
    setError("");
    setLoading(true);
    const { error: signInError } = await signIn.email({ email, password });
    setLoading(false);

    if (signInError) {
      setError(signInError.message || "Login failed.");
      return;
    }
    router.push("/properties");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    doLogin(form.email, form.password);
  };

  const handleDemoLogin = () => {
    setForm(DEMO_USER);
    doLogin(DEMO_USER.email, DEMO_USER.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-2xl font-semibold text-slate-900 mb-1">Welcome back</h1>
        <p className="text-slate-500 text-sm mb-6">Log in to manage or browse listings.</p>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white rounded-md py-2 text-sm font-medium transition"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <div className="relative my-5 text-center text-xs text-slate-400">
          <span className="bg-white px-2 relative z-10">or</span>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -z-0" />
        </div>

        <button
          onClick={handleDemoLogin}
          disabled={loading}
          className="w-full border border-amber-500 text-amber-700 hover:bg-amber-50 rounded-md py-2 text-sm font-medium transition"
        >
          Use demo account
        </button>

        <p className="text-sm text-slate-500 mt-6 text-center">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-teal-700 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}