import type { SanityDocument } from "@sanity/client";

interface ResearchProps {
  researchLines: SanityDocument[];
}

export default function Research({ researchLines }: ResearchProps) {
  return (
    <section id="research" className="py-20 bg-white relative isolate overflow-hidden">
      {/* Gradiente celeste en esquina superior derecha */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-sky-300/60 via-sky-200/40 via-sky-100/20 to-white"></div>
      
      {/* Líneas del fondo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-1 bg-blue-700 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-1 bg-blue-800 transform -rotate-30"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-1 bg-blue-700 transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-1 bg-blue-800 transform -rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-36 h-1 bg-blue-700 transform rotate-60"></div>
        
        {/* Líneas adicionales azules */}
        <div className="absolute top-16 right-32 w-28 h-1 bg-blue-800 transform rotate-60"></div>
        <div className="absolute top-24 left-1/3 w-36 h-1 bg-blue-700 transform -rotate-15"></div>
        <div className="absolute top-60 right-16 w-20 h-1 bg-blue-800 transform rotate-75"></div>
        <div className="absolute top-80 left-16 w-44 h-1 bg-blue-700 transform -rotate-20"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-blue-800 transform rotate-30"></div>
        <div className="absolute bottom-40 right-32 w-24 h-1 bg-blue-700 transform -rotate-50"></div>
        <div className="absolute bottom-16 left-1/3 w-40 h-1 bg-blue-800 transform rotate-25"></div>
        <div className="absolute top-2/3 right-1/2 w-28 h-1 bg-blue-700 transform -rotate-35"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Research </span>
              <span className="text-[#006AEA]">Lines</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our cutting-edge research areas in AR/VR and interactive experiences
            </p>
          </div>

          {/* Research Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchLines.map((item) => (
              <div key={item._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100/50 overflow-hidden">
                {item.image && (
                  <figure className="h-48 overflow-hidden relative">
                    <img
                      src={`https://cdn.sanity.io/images/gulqkrg1/production/${item.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#006AEA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </figure>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#006AEA] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-start">
                    <div className="badge bg-gradient-to-r from-[#006AEA] to-[#0A2E6E] text-white border-0 px-4 py-2 rounded-full">
                      Research Area
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {researchLines.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">No Research Lines Yet</h3>
              <p className="text-gray-600">Research areas will appear here once added to the CMS.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 
