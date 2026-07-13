"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-teal-700">
          NestHaven
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-teal-700 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isPending ? null : session ? (
            <>
              <span className="text-sm text-slate-500">{session.user.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md px-4 py-2 transition"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-slate-600 hover:text-teal-700 transition"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="text-sm bg-teal-700 hover:bg-teal-800 text-white rounded-md px-4 py-2 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 px-4 py-3 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-slate-600 py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100">
            {session ? (
              <button onClick={handleLogout} className="text-sm text-slate-700 py-1">
                Log out
              </button>
            ) : (
              <>
                <Link href="/login" className="block text-sm text-slate-600 py-1">
                  Log in
                </Link>
                <Link href="/register" className="block text-sm text-teal-700 font-medium py-1">
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