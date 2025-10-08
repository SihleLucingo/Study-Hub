export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2f56f6] flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-[0.01] blur-[1px] pointer-events-none"
      >
        <source src="/block.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center text-white px-8 max-w-4xl">
        <h1 className="text-6xl font-bold tracking-[0.5em] mb-4">
          S T U D Y H U B
        </h1>
        <h2 className="text-3xl font-semibold mb-6">
          Your Smarter Study Future
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Integrate smart AI assistance into your learning workflow, unlocking top grades and internships
        </p>
        <div className="flex gap-6 justify-center">
          <a
            href="/login"
            className="px-8 py-3 bg-white text-[#2f56f6] rounded font-bold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-8 py-3 bg-transparent text-white border-2 border-white rounded font-bold hover:bg-white hover:text-[#2f56f6] transition-colors cursor-pointer"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
