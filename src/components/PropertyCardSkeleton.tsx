export default function PropertyCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden h-full animate-pulse">
      <div className="w-full h-48 bg-slate-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-slate-200 rounded w-3/4" />
        <div className="h-3 bg-slate-200 rounded w-full" />
        <div className="h-3 bg-slate-200 rounded w-2/3" />
        <div className="h-8 bg-slate-200 rounded w-full mt-4" />
      </div>
    </div>
  );
}