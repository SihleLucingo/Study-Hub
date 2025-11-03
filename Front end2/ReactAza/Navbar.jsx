export default function sign() {
  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4">
      <div className="flex gap-8">
        <a
          href="#"
          className="text-[#2f56f6] font-medium hover:text-[#1e3bb8] transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[#333] font-medium hover:text-[#2f56f6] transition-colors"
        >
          Hub
        </a>
        <a
          href="#"
          className="text-[#333] font-medium hover:text-[#2f56f6] transition-colors"
        >
          Features
        </a>
      </div>
      <button className="px-4 py-2 bg-[#2f56f6] text-white rounded font-bold hover:bg-[#1e3bb8] transition-colors cursor-pointer">
        Log In
      </button>
    </nav>
  );
}
