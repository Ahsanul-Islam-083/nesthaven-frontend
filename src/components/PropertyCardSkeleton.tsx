export default function PropertyCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl overflow-hidden h-full animate-pulse shadow-lg shadow-black/5 dark:shadow-black/20">
      <div className="w-full h-48 bg-slate-200/50 dark:bg-slate-700/50" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-3/4" />
        <div className="h-3 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-full" />
        <div className="h-3 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-2/3" />
        <div className="h-8 bg-slate-200/50 dark:bg-slate-700/50 rounded-xl w-full mt-4" />
      </div>
    </div>
  );
}