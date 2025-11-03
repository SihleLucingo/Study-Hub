import { Bell, Briefcase, Building, User, GraduationCap, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CareerConnect</h1>
                <p className="text-sm text-gray-500">For Students</p>
              </div>
            </div>

            <nav className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <Briefcase className="w-5 h-5" />
                Jobs
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <Building className="w-5 h-5" />
                Companies
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <User className="w-5 h-5" />
                Profile
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-semibold text-gray-900">Azasakhe Nkwenkwana</p>
                <p className="text-sm text-gray-500">DIT 3rd Yr Student</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                AN
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Find Your Next Great Opportunity</h2>
          <p className="text-lg text-gray-600">Discover WIL, internships, graduate programs, and entry-level opportunities</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search jobs, companies, or keywords..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Location"
              className="md:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Search Jobs
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-gray-800 font-semibold rounded-full hover:bg-blue-200 transition-colors">
            <Briefcase className="w-5 h-5" />
            All Jobs
            <span className="ml-1 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">1247</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-gray-800 font-semibold rounded-full hover:bg-blue-200 transition-colors">
            <GraduationCap className="w-5 h-5" />
            Internships
            <span className="ml-1 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">342</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-gray-800 font-semibold rounded-full hover:bg-blue-200 transition-colors">
            <User className="w-5 h-5" />
            Entry Level
            <span className="ml-1 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">589</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-gray-800 font-semibold rounded-full hover:bg-blue-200 transition-colors">
            <TrendingUp className="w-5 h-5" />
            Graduate Programs
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
