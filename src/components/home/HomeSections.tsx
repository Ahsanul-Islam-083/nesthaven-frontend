import Link from "next/link";

const featureItems = [
  { title: "Verified Listings", desc: "Every property is checked by our team before it goes live.", icon: "✓" },
  { title: "Transparent Pricing", desc: "No hidden fees — the price you see is the price you pay.", icon: "$" },
  { title: "Direct Owner Contact", desc: "Message property owners directly, no middlemen.", icon: "💬" },
  { title: "Flexible Filters", desc: "Search by location, price, bedrooms, and property type.", icon: "⚙" },
];

const categories = [
  { name: "Apartments", count: "480 listings" },
  { name: "Houses", count: "310 listings" },
  { name: "Studios", count: "190 listings" },
  { name: "Shared Rooms", count: "220 listings" },
];

const steps = [
  { step: "1", title: "Search", desc: "Enter your city and set your filters." },
  { step: "2", title: "Compare", desc: "Browse verified listings side by side." },
  { step: "3", title: "Connect", desc: "Message the owner and schedule a visit." },
  { step: "4", title: "Move in", desc: "Finalize details and get your keys." },
];

const testimonials = [
  { name: "Tania Rahman", role: "Tenant, Dhaka", quote: "Found a place within a week. The filters saved me so much time." },
  { name: "Kamal Hossain", role: "Property Owner", quote: "Listing my apartment took five minutes and I got serious inquiries fast." },
  { name: "Farhana Akter", role: "Tenant, Chattogram", quote: "The details page had everything I needed before even visiting." },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">Why NestHaven</h2>
        <p className="text-slate-500 mb-10">Built to make renting simpler on both sides.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-50 text-teal-700 font-semibold mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoriesSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">Browse by category</h2>
        <p className="text-slate-500 mb-10">Find the property type that fits your lifestyle.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <Link
              key={c.name}
              href={`/properties?type=${encodeURIComponent(c.name)}`}
              className="rounded-xl bg-white border border-slate-200 p-6 hover:border-teal-600 transition text-center"
            >
              <h3 className="font-semibold text-slate-900">{c.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{c.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">How it works</h2>
        <p className="text-slate-500 mb-10">From search to move-in, in four steps.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-semibold mb-4">
                {s.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{s.title}</h3>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold">1,200+</p>
          <p className="text-teal-100 text-sm mt-1">Active Listings</p>
        </div>
        <div>
          <p className="text-4xl font-bold">8,500+</p>
          <p className="text-teal-100 text-sm mt-1">Happy Tenants</p>
        </div>
        <div>
          <p className="text-4xl font-bold">45</p>
          <p className="text-teal-100 text-sm mt-1">Cities Covered</p>
        </div>
        <div>
          <p className="text-4xl font-bold">4.8/5</p>
          <p className="text-teal-100 text-sm mt-1">Average Rating</p>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">What people say</h2>
        <p className="text-slate-500 mb-10">Real feedback from tenants and owners.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl border border-slate-200 p-6">
              <p className="text-slate-700 text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
              <p className="text-slate-500 text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">Stay in the loop</h2>
        <p className="text-slate-500 mb-8">Get new listings in your area delivered to your inbox weekly.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <button
            type="submit"
            className="bg-teal-700 hover:bg-teal-800 text-white rounded-lg px-6 py-3 text-sm font-medium transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="py-16 bg-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Have a property to rent out?</h2>
          <p className="text-amber-50 text-sm mt-1">List it on NestHaven and reach thousands of renters.</p>
        </div>
        <Link
          href="/items/add"
          className="bg-white text-amber-700 font-medium rounded-lg px-6 py-3 text-sm hover:bg-amber-50 transition whitespace-nowrap"
        >
          List your property
        </Link>
      </div>
    </section>
  );
}