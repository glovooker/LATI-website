export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-blue-400/40">
      {/* Background diagonal lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-1 bg-blue-500 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-1 bg-blue-600 transform -rotate-30"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-1 bg-blue-400 transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-1 bg-blue-500 transform -rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-36 h-1 bg-blue-600 transform rotate-60"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-4 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          {/* Columna izquierda - Contenido */}
          <div className="flex-1 text-center lg:text-left space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Welcome to the </span>
                <span className="text-[#006AEA]">SpatialLab</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Where research and immersive experiences{" "}
                <span className="text-[#006AEA] font-semibold">collide!</span>
              </p>
            </div>
            
            <button className="bg-[#0A2E6E] hover:bg-[#0A2E6E]/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Dive in!
            </button>
          </div>

          {/* Columna derecha - Formas geométricas 3D */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md h-96">
              {/* Cubo 3D */}
              <div className="absolute top-8 left-8 w-24 h-24 transform rotate-45 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] shadow-2xl animate-float rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[#006AEA]/80 to-[#0A2E6E]/80 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
              </div>
              
              {/* Cono 3D */}
              <div className="absolute top-16 right-16 w-20 h-20 transform rotate-12 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-10 border-r-10 border-b-20 border-transparent border-b-[#006AEA]"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-[#0A2E6E]"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent border-b-white/20"></div>
              </div>
              
              {/* Toroide (anillo) */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-32 animate-float" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] rounded-full shadow-2xl"></div>
                <div className="absolute inset-4 bg-white rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#006AEA]/80 to-[#0A2E6E]/80 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              </div>
              
              {/* Semiesferas */}
              <div className="absolute bottom-8 right-8 w-16 h-16 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] rounded-full shadow-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              </div>
              
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-12 h-12 animate-float" style={{ animationDelay: '2s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] rounded-full shadow-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              </div>
              
              {/* Icosaedro wireframe */}
              <div className="absolute bottom-32 right-1/4 w-20 h-20 border-2 border-[#006AEA]/60 transform rotate-45 animate-float" style={{ animationDelay: '2.5s' }}>
                <div className="absolute inset-0 border-2 border-[#006AEA]/40 transform rotate-90"></div>
                <div className="absolute inset-0 border-2 border-[#006AEA]/30 transform rotate-180"></div>
                <div className="absolute inset-0 border-2 border-[#006AEA]/20 transform rotate-45"></div>
              </div>
              
              {/* Cono wireframe */}
              <div className="absolute top-1/2 right-8 w-16 h-16 border-2 border-[#006AEA]/50 transform rotate-12 animate-float" style={{ animationDelay: '3s' }}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-[#006AEA]/30"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent border-b-[#006AEA]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
