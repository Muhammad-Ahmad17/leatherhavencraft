export default function ProductLoading() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="border-b border-black/10 bg-white/40">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <div className="h-3 w-12 rounded bg-black/10" />
          <span className="text-black/20">/</span>
          <div className="h-3 w-20 rounded bg-black/10" />
          <span className="text-black/20">/</span>
          <div className="h-3 w-36 rounded bg-black/10" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Gallery Skeleton */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="aspect-[3/4] w-full rounded-lg bg-black/5 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-black/30">
                <svg className="animate-spin h-7 w-7 text-[#8a4d2b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-xs uppercase tracking-widest text-[#706456] font-medium">Opening Atelier Piece...</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-16 w-16 rounded bg-black/5" />
              <div className="h-16 w-16 rounded bg-black/5" />
              <div className="h-16 w-16 rounded bg-black/5" />
            </div>
          </div>

          {/* Details Skeleton */}
          <div className="lg:col-span-5 space-y-4">
            <div className="h-3 w-24 rounded bg-black/10" />
            <div className="h-8 w-3/4 rounded bg-black/10" />
            <div className="h-6 w-28 rounded bg-black/10" />
            <div className="space-y-2 pt-4">
              <div className="h-3.5 w-full rounded bg-black/5" />
              <div className="h-3.5 w-5/6 rounded bg-black/5" />
              <div className="h-3.5 w-4/6 rounded bg-black/5" />
            </div>
            <div className="pt-6 space-y-3">
              <div className="h-12 w-full rounded-lg bg-[#2a1810]/20" />
              <div className="h-10 w-full rounded-lg bg-black/5" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
