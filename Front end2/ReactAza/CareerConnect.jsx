import React, { useState } from 'react';

export default function CareerConnect() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery, 'in', location);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">CareerConnect</span>
                <div className="text-xs text-gray-500">For Students</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                <i className="fas fa-briefcase"></i>
                <span>Jobs</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                <i className="fas fa-building"></i>
                <span>Companies</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </a>
            </nav>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                <i className="fas fa-bell text-xl"></i>
              </a>
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900">Azasakhe Nkwenkwana</p>
                  <small className="text-xs text-gray-500">DIT 3rd Yr Student</small>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  AN
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Find Your Next Great Opportunity
          </h1>
          <p className="text-lg text-gray-600">
            Discover WIL, internships, graduate programs, and entry-level opportunities
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <button
              onClick={handleSearch}
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Search Jobs
            </button>
          </div>
        </div>

        {/* Job Tags */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
            <i className="fas fa-briefcase text-blue-600"></i>
            <span className="font-medium">All Jobs</span>
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              1247
            </span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
            <i className="fas fa-user-graduate text-blue-600"></i>
            <span className="font-medium">Internships</span>
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              342
            </span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
            <i className="fas fa-user text-blue-600"></i>
            <span className="font-medium">Entry Level</span>
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              589
            </span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
            <i className="fas fa-chart-line text-blue-600"></i>
            <span className="font-medium">Graduate Programs</span>
          </button>
        </div>
      </main>
    </div>
  );
}