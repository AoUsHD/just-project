export function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#1f1f47] via-[#6f1d64] to-[#c84b31] text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          just project
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Your tools for InfoSec queries. Simple, fast, and free.
        </p>
        <div className="text-sm text-gray-400">
          <p>Start by choosing one of our tools from the top menu.</p>
        </div>
      </div>
    </div>
  );
}
