"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/30 dark:border-white/10 p-8 text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-500/20 text-amber-500 text-2xl font-semibold">
          !
        </div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
          Something went wrong
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          An unexpected error occurred. Please try again or return home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="w-full sm:w-auto bg-emerald-600/80 hover:bg-emerald-700 backdrop-blur-sm text-white rounded-xl px-6 py-2.5 text-sm font-medium transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-xl px-6 py-2.5 text-sm font-medium transition text-center"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
