"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerWrapper, StaggerItem } from "@/components/Animated";

const featureItems = [
  { title: "Verified Listings", desc: "Every property is checked by our team before it goes live.", icon: "✓" },
  { title: "Transparent Pricing", desc: "No hidden fees — the price you see is the price you pay.", icon: "$" },
  { title: "Direct Owner Contact", desc: "Message property owners directly, no middlemen.", icon: "💬" },
  { title: "Flexible Filters", desc: "Search by location, price, bedrooms, and property type.", icon: "⚙" },
];


const categories = [
  { name: "Apartments", type: "Apartment", count: "480 listings", img: "https://i.ibb.co.com/LhJzSktY/Apartment.webp" },
  { name: "Houses", type: "House", count: "310 listings", img: "https://i.ibb.co.com/XfdTsrJ2/house.webp" },
  { name: "Studios", type: "Studio", count: "190 listings", img: "https://i.ibb.co.com/spLqkqzZ/studio.webp" },
  { name: "Shared Rooms", type: "Shared Room", count: "220 listings", img: "https://i.ibb.co.com/bRCHpN6w/shared.webp" },
];

const steps = [
  { step: "1", title: "Search", desc: "Enter your city and set your filters." },
  { step: "2", title: "Compare", desc: "Browse verified listings side by side." },
  { step: "3", title: "Connect", desc: "Message the owner and schedule a visit." },
  { step: "4", title: "Move in", desc: "Finalize details and get your keys." },
];

const testimonials = [
  { name: "Tania Rahman", role: "Tenant, Dhaka", quote: "Found a place within a week. The filters saved me so much time.", avatar: "face,portrait,women" },
  { name: "Kamal Hossain", role: "Property Owner", quote: "Listing my apartment took five minutes and I got serious inquiries fast.", avatar: "face,portrait,men" },
  { name: "Farhana Akter", role: "Tenant, Chattogram", quote: "The details page had everything I needed before even visiting.", avatar: "face,portrait,women" },
];

export function FeaturesSection() {
  return (
    <FadeIn as="section" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Why NestHaven</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10">Built to make renting simpler on both sides.</p>
        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-2xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-100/50 dark:bg-emerald-900/30 backdrop-blur-sm text-emerald-600 dark:text-emerald-300 font-semibold mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </FadeIn>
  );
}

export function CategoriesSection() {
  return (
    <FadeIn as="section" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Browse by category</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10">Find the property type that fits your lifestyle.</p>
        <StaggerWrapper className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <StaggerItem key={c.name}>
              <Link
                href={`/properties?type=${encodeURIComponent(c.type)}`}
                className="block rounded-2xl bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 hover:border-emerald-600/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 text-center bg-white/40 dark:bg-black/20 backdrop-blur-sm">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{c.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{c.count}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </FadeIn>
  );
}

export function HowItWorksSection() {
  return (
    <FadeIn as="section" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-2">How it works</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10">From search to move-in, in four steps.</p>
        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="rounded-2xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500/80 backdrop-blur-sm text-white font-semibold mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </FadeIn>
  );
}

export function StatsSection() {
  return (
    <FadeIn as="section" className="py-16 bg-emerald-600/80 backdrop-blur-xl text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerWrapper className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <StaggerItem>
            <p className="text-4xl font-bold"><span data-count-to="1200" data-count-suffix="+" data-count-commas="true">0</span></p>
            <p className="text-emerald-100 text-sm mt-1">Active Listings</p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-4xl font-bold"><span data-count-to="8500" data-count-suffix="+" data-count-commas="true">0</span></p>
            <p className="text-emerald-100 text-sm mt-1">Happy Tenants</p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-4xl font-bold"><span data-count-to="45" data-count-suffix="">0</span></p>
            <p className="text-emerald-100 text-sm mt-1">Cities Covered</p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-4xl font-bold"><span data-count-to="4.8" data-count-suffix="/5">0</span></p>
            <p className="text-emerald-100 text-sm mt-1">Average Rating</p>
          </StaggerItem>
        </StaggerWrapper>
      </div>
    </FadeIn>
  );
}

export function TestimonialsSection() {
  return (
    <FadeIn as="section" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-2">What people say</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10">Real feedback from tenants and owners.</p>
        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full">
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={`https://loremflickr.com/100/100/${t.avatar}`}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10 shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{t.name}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </FadeIn>
  );
}

export function NewsletterSection() {
  return (
    <FadeIn as="section" className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Stay in the loop</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">Get new listings in your area delivered to your inbox weekly.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-2 shadow-lg shadow-black/5 dark:shadow-black/20">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm dark:text-slate-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="bg-emerald-600/80 hover:bg-emerald-700 backdrop-blur-sm text-white rounded-xl px-6 py-3 text-sm font-medium transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </FadeIn>
  );
}

export function CtaSection() {
  return (
    <FadeIn as="section" className="py-16 bg-orange-500/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Have a property to rent out?</h2>
          <p className="text-orange-50 text-sm mt-1">List it on NestHaven and reach thousands of renters.</p>
        </div>
        <Link
          href="/items/add"
          className="bg-white/80 backdrop-blur-sm text-orange-700 font-medium rounded-xl px-6 py-3 text-sm hover:bg-white transition whitespace-nowrap"
        >
          List your property
        </Link>
      </div>
    </FadeIn>
  );
}