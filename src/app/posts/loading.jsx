export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-orange-950 to-amber-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-green-800 p-8 backdrop-blur">
        <p className="text-lg font-semibold text-orange-100">
          Loading meals on the server...
        </p>
      </div>
    </div>
  );
}
