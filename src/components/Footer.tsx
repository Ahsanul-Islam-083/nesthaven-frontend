import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">NestHaven</h3>
          <p className="text-sm text-slate-400">
            Find verified rental properties across the city — apartments, houses,
            and studios, all in one place.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/properties" className="hover:text-white transition">Browse Properties</Link></li>
            <li><Link href="/items/add" className="hover:text-white transition">List a Property</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/login" className="hover:text-white transition">Log In</Link></li>
            <li><Link href="/register" className="hover:text-white transition">Register</Link></li>
            <li><Link href="/items/manage" className="hover:text-white transition">Manage Listings</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Dhaka, Bangladesh</li>
            <li>support@nesthaven.com</li>
            <li>+880 1234 567890</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-sm">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-sm">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NestHaven. All rights reserved.
      </div>
    </footer>
  );
}