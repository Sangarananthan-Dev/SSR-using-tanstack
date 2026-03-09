export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 px-6 py-16 text-stone-950">
      <main className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-5xl flex-col justify-center rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_24px_80px_rgba(120,53,15,0.12)] backdrop-blur md:p-14">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-700">
            Server rendering + React Query
          </p>
          <h1 className="text-4xl font-black tracking-tight text-balance md:text-6xl">
            Browse meals from TheMealDB instead of placeholder posts.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-stone-700">
            The `/posts` route now prefetches real recipe data on the server and
            hydrates it on the client, including meal images, cuisine details,
            and cooking instructions.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 text-base font-semibold sm:flex-row">
          <a
            className="inline-flex h-12 items-center justify-center rounded-full bg-stone-950 px-6 text-white transition hover:bg-stone-800"
            href="/posts"
          >
            View meal gallery
          </a>
          <a
            className="inline-flex h-12 items-center justify-center rounded-full border border-stone-300 px-6 text-stone-800 transition hover:border-stone-950 hover:bg-white"
            href="https://www.themealdb.com/api.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            MealDB API
          </a>
        </div>
      </main>
    </div>
  );
}
