export default function RootLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-[3px] border-emerald-600/30 border-t-emerald-600 rounded-full animate-spin" />
        <p className="text-sm text-slate-500 dark:text-slate-400 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
