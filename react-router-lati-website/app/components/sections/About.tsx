export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">About </span>
              <span className="text-[#006AEA]">LATI Lab</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a research laboratory dedicated to exploring the frontiers of immersive technology
              and human-computer interaction.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At LATI Lab, we push the boundaries of what's possible in augmented reality, virtual reality,
                and interactive experiences. Our research spans from fundamental human-computer interaction
                principles to cutting-edge applications in education, healthcare, and entertainment.
              </p>

              <h3 className="text-2xl font-semibold mt-8 text-gray-900">
                Our Approach
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in interdisciplinary collaboration, combining expertise in computer science,
                psychology, design, and engineering to create technologies that are not only innovative
                but also meaningful and accessible to everyone.
              </p>

              {/* Key Areas */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Research Areas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#006AEA] rounded-full"></div>
                    <span className="text-gray-700">AR/VR Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A2E6E] rounded-full"></div>
                    <span className="text-gray-700">Human-Computer Interaction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#006AEA] rounded-full"></div>
                    <span className="text-gray-700">Immersive Experiences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A2E6E] rounded-full"></div>
                    <span className="text-gray-700">Interactive Systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#006AEA]/10 to-[#0A2E6E]/10 rounded-2xl shadow-2xl p-8 border border-[#006AEA]/20">
                <div className="text-center h-80 flex flex-col justify-center items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] rounded-full flex items-center justify-center shadow-lg mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">Innovation Hub</h4>
                  <p className="text-gray-600">Where technology meets creativity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
