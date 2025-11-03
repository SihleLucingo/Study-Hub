export default function landingPg() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-100 blur-sm"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://cdn.pixabay.com/video/2016/06/02/3590-169607639_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 h-screen bg-white/60 flex flex-col justify-center items-center text-center px-8">
        <h1 className="text-4xl md:text-5xl tracking-[0.7rem] mb-4 text-gray-900 font-normal">
          TITLE
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-4 text-gray-900">
          Welcome to Our Platform
        </h2>
        
        <p className="max-w-2xl mb-8 text-gray-900 text-base md:text-lg">
          Discover amazing features and experiences that will transform the way you work and play. Join thousands of satisfied users today.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 rounded-full font-bold text-base bg-blue-600 text-white transition-colors duration-300 hover:bg-blue-700 inline-block"
          >
            Get Started
          </a>
          
          <a
            href="#"
            className="px-6 py-3 rounded-full font-bold text-base border-2 border-blue-600 text-blue-600 bg-transparent transition-colors duration-300 hover:bg-blue-50 inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}