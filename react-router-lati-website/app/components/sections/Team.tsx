import type { SanityDocument } from "@sanity/client";

interface TeamProps {
  teamMembers: SanityDocument[];
}

export default function Team({ teamMembers }: TeamProps) {
  return (
    <section id="team" className="py-20 bg-transparent relative isolate overflow-hidden">
      
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
              <span className="text-gray-900">Our </span>
              <span className="text-[#006AEA]">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the researchers and developers behind our innovative AR/VR and interactive experiences
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((item) => (
              <div key={item._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100/50 text-center overflow-hidden">
                <div className="p-6">
                  {item.image && (
                    <div className="mb-6">
                      <div className="w-32 h-32 rounded-full ring-4 ring-[#006AEA]/20 ring-offset-4 ring-offset-white mx-auto group-hover:ring-[#006AEA]/40 transition-all duration-300">
                        <img
                          src={`https://cdn.sanity.io/images/gulqkrg1/production/${item.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#006AEA] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.role}
                  </p>
                  {item.linkedinUrl && (
                    <div className="flex justify-center">
                      <a
                        href={item.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-gradient-to-r from-[#006AEA] to-[#0A2E6E] text-white border-0 hover:from-[#0A2E6E] hover:to-[#006AEA] transition-all duration-300 transform hover:scale-105"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {teamMembers.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">No Team Members Yet</h3>
              <p className="text-gray-600">Team members will appear here once added to the CMS.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 
