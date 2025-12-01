export default function SongsLoading() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="h-6 w-40 mb-4 rounded bg-zinc-800 animate-pulse" />
      <div className="h-4 w-64 mb-6 rounded bg-zinc-800 animate-pulse" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl bg-zinc-800 border border-zinc-700 p-4 animate-pulse space-y-3"
          >
            <div className="h-4 w-3/4 rounded bg-zinc-700" />
            <div className="h-3 w-1/2 rounded bg-zinc-700" />
            <div className="h-8 w-full rounded bg-zinc-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
