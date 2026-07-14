export default function PropertyDetailsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">
      {/* Breadcrumb */}
      <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-48 mb-6" />

      {/* Image gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
        <div className="md:col-span-3 relative h-96 rounded-2xl bg-slate-200/50 dark:bg-slate-700/50" />
        <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
          <div className="relative h-[186px] rounded-2xl bg-slate-200/50 dark:bg-slate-700/50" />
          <div className="relative h-[186px] rounded-2xl bg-slate-200/50 dark:bg-slate-700/50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content skeletons */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="h-5 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-20 mb-3" />
            <div className="h-8 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-3/4 mb-2" />
            <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-1/3" />
          </div>

          <section>
            <div className="h-6 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-24 mb-3" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-full" />
              <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-full" />
              <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-2/3" />
            </div>
          </section>

          <section>
            <div className="h-6 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-32 mb-3" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-20 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl" />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar skeleton */}
        <div>
          <div className="h-64 bg-slate-200/50 dark:bg-slate-700/50 rounded-2xl sticky top-24" />
        </div>
      </div>
    </div>
  );
}
