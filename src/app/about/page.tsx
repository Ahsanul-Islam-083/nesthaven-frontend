export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-semibold text-slate-900 mb-4">About NestHaven</h1>
      <p className="text-slate-600 leading-relaxed mb-6">
        NestHaven was built to make finding and listing rental properties simpler for
        everyone in Dhaka. Whether you&apos;re a tenant searching for your next home or
        a property owner looking to reach serious renters, our platform connects both
        sides directly, without unnecessary middlemen or hidden fees.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        We started NestHaven after noticing how fragmented and unreliable most rental
        listings were — outdated posts, unclear pricing, and no easy way to filter by
        what actually mattered. Our goal is a platform where every listing is clear,
        searchable, and genuinely useful.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        <div className="bg-slate-50 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-1">Our Mission</h3>
          <p className="text-sm text-slate-500">Make renting transparent and stress-free for tenants and owners alike.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-1">Our Reach</h3>
          <p className="text-sm text-slate-500">Serving renters and owners across Dhaka, with more cities coming soon.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-1">Our Promise</h3>
          <p className="text-sm text-slate-500">No hidden fees, no fake listings — just verified, useful information.</p>
        </div>
      </div>
    </div>
  );
}