export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-transparent relative isolate overflow-hidden">
      
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
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Get in </span>
              <span className="text-[#006AEA]">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interested in our research or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-blue-100/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">spatiallab@ucenfotec.ac.cr</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-blue-100/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600"> Universidad Cenfotec, Av Central, San José, Costa Rica</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-blue-100/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#006AEA] to-[#0A2E6E] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Hours</h4>
                      <p className="text-gray-600">Monday - Friday, 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-900">Follow Our Research</h4>
                <div className="flex space-x-4">
                  {/* <a href="#" className="btn btn-circle bg-gradient-to-r from-[#006AEA] to-[#0A2E6E] text-white border-0 hover:from-[#0A2E6E] hover:to-[#006AEA] transition-all duration-300 transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a> */}
                  <a href="https://www.linkedin.com/in/briammora/" target="_blank" className="btn btn-circle bg-gradient-to-r from-[#006AEA] to-[#0A2E6E] text-white border-0 hover:from-[#0A2E6E] hover:to-[#006AEA] transition-all duration-300 transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* <a href="#" className="btn btn-circle bg-gradient-to-r from-[#006AEA] to-[#0A2E6E] text-white border-0 hover:from-[#0A2E6E] hover:to-[#006AEA] transition-all duration-300 transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl border border-blue-100/50 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered w-full mt-2 border-blue-200 focus:border-[#006AEA] focus:ring-[#006AEA]/20"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input input-bordered w-full mt-2 border-blue-200 focus:border-[#006AEA] focus:ring-[#006AEA]/20"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Subject</span>
                    </label>
                    <select className="select select-bordered w-full mt-2 border-blue-200 focus:border-[#006AEA] focus:ring-[#006AEA]/20">
                      <option value="">Select a subject</option>
                      <option value="collaboration">Research Collaboration</option>
                      <option value="visit">Lab Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Message</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="textarea textarea-bordered w-full mt-2 border-blue-200 focus:border-[#006AEA] focus:ring-[#006AEA]/20"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn bg-gradient-to-r from-[#006AEA] to-[#0A2E6E] text-white border-0 w-full hover:from-[#0A2E6E] hover:to-[#006AEA] transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
