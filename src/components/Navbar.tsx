
"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "@/lib/theme-provider";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border-b border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="h-16 flex items-center justify-between w-full">
          <Link href="/" className="text-xl font-semibold text-emerald-600 shrink-0">
            NestHaven
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition whitespace-nowrap ${
                  isActive(link.href)
                    ? "text-emerald-600 dark:text-emerald-400 font-medium"
                    : "text-slate-600 dark:text-slate-400 hover:text-emerald-600"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
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
                <span className="hidden xl:inline text-sm text-slate-500 dark:text-slate-400 max-w-[120px] truncate">
                  {session.user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-xl px-4 py-2 transition whitespace-nowrap"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition whitespace-nowrap"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="text-sm bg-emerald-600/90 hover:bg-emerald-700 backdrop-blur-sm text-white rounded-xl px-4 py-2 transition whitespace-nowrap"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-2">
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
          <div className="lg:hidden mb-3 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg rounded-2xl px-4 py-3 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-sm py-1 ${
                  isActive(link.href)
                    ? "text-emerald-600 dark:text-emerald-400 font-medium"
                    : "text-slate-600 dark:text-slate-400"
                }`}
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
      </div>
    </header>
  );
}