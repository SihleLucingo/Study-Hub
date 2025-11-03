import { useState } from 'react';

export default function LearningSimplified() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeNav, setActiveNav] = useState('Home');

  const handleLogin = () => {
    console.log('Login attempted with:', { email, password });
    // Add your login logic here
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
    // Add your sign up logic here
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="block.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-6">
          <ul className="flex gap-8">
            {['Home', 'Hub', 'Features'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav(item);
                  }}
                  className={`text-lg font-medium transition-colors ${
                    activeNav === item
                      ? 'text-white border-b-2 border-white pb-1'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSignUp}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            SignUp
          </button>
        </nav>

        {/* Main Content */}
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-12 tracking-wider">
            LEARNING SIMPLIFIED
          </h1>

          {/* Login Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border border-white/20">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="📧 Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="🔒 Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleLogin}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6"
              >
                Log in
              </button>
            </div>
          </div>

          {/* Logo Watermark */}
          <img
            src="2.png"
            alt="Study Hub Logo"
            className="absolute bottom-8 right-8 w-24 h-24 opacity-30 object-contain"
          />
        </section>
      </div>
    </div>
  );
}