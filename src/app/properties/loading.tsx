import PropertyCardSkeleton from "@/components/PropertyCardSkeleton";

export default function PropertiesLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="h-9 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-64 mb-2 animate-pulse" />
      <div className="h-5 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-48 mb-6 animate-pulse" />

      <div className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 rounded-2xl p-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>

      <div className="h-5 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-44 mb-6 animate-pulse" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <PropertyCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
