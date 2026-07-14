"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-provider";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  const loggedOutLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Explore" },
    { href: "/about", label: "About" },
  ];

  const loggedInLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Explore" },
    { href: "/items/add", label: "Add Listing" },
    { href: "/items/manage", label: "Manage Listings" },
    { href: "/about", label: "About" },
  ];

  const links = session ? loggedInLinks : loggedOutLinks;

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-emerald-600">
          NestHaven
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition"
            aria-label="Toggle theme"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="dark:hidden">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="hidden dark:block">
              <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {isPending ? null : session ? (
            <>
              <span className="text-sm text-slate-500 dark:text-slate-400">{session.user.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-md px-4 py-2 transition"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="text-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-md px-4 py-2 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition"
            aria-label="Toggle theme"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="dark:hidden">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="hidden dark:block">
              <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="text-slate-700 dark:text-slate-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 px-4 py-3 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-slate-600 dark:text-slate-400 py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            {session ? (
              <button onClick={handleLogout} className="text-sm text-slate-700 dark:text-slate-200 py-1">
                Log out
              </button>
            ) : (
              <>
                <Link href="/login" className="block text-sm text-slate-600 dark:text-slate-400 py-1">
                  Log in
                </Link>
                <Link href="/register" className="block text-sm text-emerald-600 dark:text-emerald-400 font-medium py-1">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}