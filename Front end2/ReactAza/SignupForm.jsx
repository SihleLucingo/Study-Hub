import { useState, FormEvent } from 'react';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-8 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        JOIN THE FAMILY
      </h1>

      <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 w-full max-w-xs">
        <form className="flex flex-col space-y-0" onSubmit={handleSubmit}>
          <div>
            <input
              id="name"
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/10 border-none rounded text-white placeholder-white outline-none focus:bg-white/20 transition-all"
            />
          </div>

          <div>
            <input
              id="surname"
              type="text"
              placeholder="Surname"
              required
              value={formData.surname}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/10 border-none rounded text-white placeholder-white outline-none focus:bg-white/20 transition-all"
            />
          </div>

          <div>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/10 border-none rounded text-white placeholder-white outline-none focus:bg-white/20 transition-all"
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/10 border-none rounded text-white placeholder-white outline-none focus:bg-white/20 transition-all"
            />
          </div>

          <div>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/10 border-none rounded text-white placeholder-white outline-none focus:bg-white/20 transition-all"
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[#2f56f6] rounded font-bold hover:bg-gray-100 transition-colors cursor-pointer w-auto"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
