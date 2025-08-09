import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 min-h-screen bg-gradient-to-br from-white to-blue-400/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Columna izquierda - Contenido */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to the SpatialLab
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-2xl">
              Explorando el futuro de la tecnología espacial y la innovación digital
            </p>
            <button className="bg-[#0A2E6E] hover:bg-[#0A2E6E]/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Dive in!
            </button>
          </div>

          {/* Columna derecha - SVG decorativo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              className="w-full max-w-md h-auto"
            >
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#006AEA" />
                  <stop offset="100%" stopColor="#0A2E6E" />
                </linearGradient>
              </defs>
              
              {/* Círculo */}
              <circle
                cx="120"
                cy="120"
                r="60"
                fill="url(#blueGradient)"
                opacity="0.8"
                className="animate-pulse"
              />
              
              {/* Rectángulo redondeado */}
              <rect
                x="200"
                y="80"
                width="120"
                height="80"
                rx="20"
                fill="url(#blueGradient)"
                opacity="0.7"
                className="animate-bounce"
                style={{ animationDelay: '0.5s' }}
              />
              
              {/* Triángulo */}
              <polygon
                points="300,280 350,200 250,200"
                fill="url(#blueGradient)"
                opacity="0.9"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
