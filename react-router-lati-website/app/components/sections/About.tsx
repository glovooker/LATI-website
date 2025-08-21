export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent relative isolate overflow-hidden">
      
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
              <span className="text-gray-900">About </span>
              <span className="text-[#006AEA]">SpatialLab</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where Humans and Technology Meet the Future
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Spatial Lab</strong> is a Research &amp; Development Lab at <strong>CENFOTEC</strong> University in Costa Rica. We explore new ways for people to interact with technology through <strong>Extended Reality (XR)</strong>, <strong>Artificial Intelligence (AI)</strong>, and emerging technologies.
              </p>

              <h3 className="text-2xl font-semibold mt-8 text-gray-900">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To push the limits of XR, AI, and interactive experiences — building solutions that are innovative, inclusive, and centered on human needs.
              </p>

              <h3 className="text-2xl font-semibold mt-8 text-gray-900">
                Our Approach
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work through interdisciplinary collaboration, bringing together computer science, psychology, design, and engineering to ensure that our technologies are both advanced and accessible.
              </p>

              {/* Key Areas */}
              {/* <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Research Areas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#006AEA] rounded-full"></div>
                    <span className="text-gray-700">Extended Reality (XR)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A2E6E] rounded-full"></div>
                    <span className="text-gray-700">Artificial Intelligence (AI)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#006AEA] rounded-full"></div>
                    <span className="text-gray-700">Human-Computer Interaction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A2E6E] rounded-full"></div>
                    <span className="text-gray-700">Emerging Technologies</span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Column - Image */}
            <div className="relative">
                              <img 
                  src="/images/lab-photo.png" 
                  alt="SpatialLab" 
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
