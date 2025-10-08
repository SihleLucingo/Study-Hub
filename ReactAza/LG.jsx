import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-blue-600 text-white">
      {/* Background Video */}
      <video 
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 blur-sm"
        autoPlay 
        loop 
        muted
        playsInline
      >
        <source src="https://example.com/your-video.mp4" type="video/mp4" />
      </video>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-white px-8 py-3">
        <div className="text-xl text-gray-500 font-bold">BRAND</div>
        
        <ul className="flex gap-8 list-none">
          <li><a href="#" className="text-black font-bold no-underline hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-blue-600 font-bold no-underline">Login</a></li>
          <li><a href="#" className="text-black font-bold no-underline hover:text-blue-600">About</a></li>
          <li><a href="#" className="text-black font-bold no-underline hover:text-blue-600">Contact</a></li>
        </ul>
        
        <button className="bg-transparent border border-blue-600 text-blue-600 px-4 py-1.5 rounded font-bold cursor-pointer hover:bg-blue-600 hover:text-white transition">
          Sign Up
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center pt-20 relative h-[calc(100vh-60px)]">
        <h1 className="text-4xl font-bold mb-10">Welcome Back</h1>
        
        {/* Login Box */}
        <div className="flex flex-col items-center gap-4 bg-white/5 p-5 rounded-lg backdrop-blur-sm">
          <label className="text-white font-bold self-start">Email</label>
          <input 
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2.5 w-64 border-none rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          
          <label className="text-white font-bold self-start mt-2">Password</label>
          <input 
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2.5 w-64 border-none rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          
          <button 
            onClick={handleLogin}
            className="px-5 py-2.5 bg-white text-blue-600 font-bold border-none rounded-md cursor-pointer hover:bg-gray-100 transition mt-2"
          >
            Login
          </button>
        </div>

        {/* Watermark Logo */}
        <div className="absolute bottom-5 right-5 w-30 opacity-90">
          <svg width="120" height="40" viewBox="0 0 120 40" className="text-white/80">
            <text x="10" y="25" fill="currentColor" fontSize="20" fontWeight="bold">LOGO</text>
          </svg>
        </div>
      </main>
    </div>
  );
}