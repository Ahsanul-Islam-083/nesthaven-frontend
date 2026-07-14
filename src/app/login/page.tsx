"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient, signIn } from "@/lib/auth-client";
import PasswordInput from "@/components/PasswordInput";
import toast from "react-hot-toast";

const DEMO_USER = { email: "demo@nesthaven.com", password: "demo123456" };

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const doLogin = async (email: string, password: string) => {
    setLoading(true);
    const { error: signInError } = await signIn.email({ email, password });
    setLoading(false);

    if (signInError) {
      toast.error(signInError.message || "Login failed.");
      return;
    }
    toast.success("Logged in successfully");
    router.push("/properties");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    doLogin(form.email, form.password);
  };

  const handleDemoLogin = () => {
    setForm(DEMO_USER);
    toast.success("Logged in with demo account");
    doLogin(DEMO_USER.email, DEMO_USER.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/30 dark:border-white/10 p-8">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
          Welcome back
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
          Log in to manage or browse listings.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm dark:text-slate-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Password
            </label>
            <PasswordInput
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600/80 hover:bg-emerald-700 disabled:opacity-60 backdrop-blur-sm text-white rounded-xl py-2 text-sm font-medium transition"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <div className="relative my-5 text-center text-xs text-slate-400 dark:text-slate-500">
          <span className="bg-white/70 dark:bg-slate-900/50 px-2 relative z-10 backdrop-blur-sm">or</span>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20 dark:bg-white/10 -z-0" />
        </div>

        <button
          onClick={handleDemoLogin}
          disabled={loading}
          className="w-full border border-amber-500/50 text-amber-700 dark:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 backdrop-blur-sm rounded-xl py-2 text-sm font-medium transition"
        >
          Use demo account
        </button>

        <button
          onClick={() =>
            authClient.signIn.social({
              provider: "google",
              callbackURL: "/properties",
            })
          }
          className="w-full flex items-center justify-center gap-2 border border-white/30 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/10 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-xl py-2 text-sm font-medium transition mt-3"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-6 text-center">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-emerald-600 font-medium hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
