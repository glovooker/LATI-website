export default function Hero () {
    return (
        <section className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
            {/* Background Elements */ }
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="hero-content text-center relative z-10">
                <div className="max-w-4xl">
                    {/* Main Heading */ }
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            LATI Lab
                        </span>
                    </h1>

                    {/* Subtitle */ }
                    <p className="text-xl md:text-2xl text-base-content/70 mb-8 max-w-3xl mx-auto">
                        Advancing the future of Augmented Reality, Virtual Reality, and Interactive Experiences
                    </p>

                    {/* Description */ }
                    <p className="text-lg text-base-content/60 mb-12 max-w-2xl mx-auto">
                        We research and develop cutting-edge technologies that bridge the gap between digital and physical worlds,
                        creating immersive experiences that transform how we interact with technology.
                    </p>

                    {/* CTA Buttons */ }
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#research"
                            className="btn btn-primary btn-lg"
                        >
                            Explore Our Research
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-outline btn-lg"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */ }
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
} 
