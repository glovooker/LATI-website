export default function About () {
    return (
        <section id="about" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */ }
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            About LATI Lab
                        </h2>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            We are a research laboratory dedicated to exploring the frontiers of immersive technology
                            and human-computer interaction.
                        </p>
                    </div>

                    {/* Content Grid */ }
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text */ }
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">
                                Our Mission
                            </h3>
                            <p className="text-lg text-base-content/70 leading-relaxed">
                                At LATI Lab, we push the boundaries of what's possible in augmented reality, virtual reality,
                                and interactive experiences. Our research spans from fundamental human-computer interaction
                                principles to cutting-edge applications in education, healthcare, and entertainment.
                            </p>

                            <h3 className="text-2xl font-semibold mt-8">
                                Our Approach
                            </h3>
                            <p className="text-lg text-base-content/70 leading-relaxed">
                                We believe in interdisciplinary collaboration, combining expertise in computer science,
                                psychology, design, and engineering to create technologies that are not only innovative
                                but also meaningful and accessible to everyone.
                            </p>

                            {/* Key Areas */ }
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold mb-4">Research Areas</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-base-content/80">AR/VR Development</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                        <span className="text-base-content/80">Human-Computer Interaction</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        <span className="text-base-content/80">Immersive Experiences</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-success rounded-full"></div>
                                        <span className="text-base-content/80">Interactive Systems</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Visual */ }
                        <div className="relative">
                            <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
                                <div className="card-body items-center text-center h-80">
                                    <div className="avatar placeholder">
                                        <div className="bg-gradient-to-r from-primary to-secondary text-primary-content rounded-full w-24">
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className="card-title text-xl mb-2">Innovation Hub</h4>
                                    <p className="text-base-content/70">Where technology meets creativity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
