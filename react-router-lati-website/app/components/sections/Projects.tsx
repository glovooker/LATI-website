import type { SanityDocument } from "@sanity/client";

interface ProjectsProps {
    projects: SanityDocument[];
}

export default function Projects ({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */ }
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            Discover our innovative projects that showcase the potential of AR/VR and interactive technologies
                        </p>
                    </div>

                    {/* Projects Grid */ }
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        { projects.map((item) => (
                            <div key={ item._id } className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                { item.image && (
                                    <figure className="h-48 overflow-hidden">
                                        <img
                                            src={ `https://cdn.sanity.io/images/gulqkrg1/production/${ item.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png') }` }
                                            alt={ item.title }
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </figure>
                                ) }
                                <div className="card-body">
                                    <h3 className="card-title hover:text-primary transition-colors">
                                        { item.title }
                                    </h3>
                                    <p className="text-base-content/70 leading-relaxed">
                                        { item.description }
                                    </p>
                                    <div className="card-actions justify-between items-center">
                                        <div className="badge badge-secondary">AR/VR Project</div>
                                        <button className="btn btn-ghost btn-sm">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>

                    {/* Empty State */ }
                    { projects.length === 0 && (
                        <div className="text-center py-12">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24 flex items-center justify-center">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No Projects Yet</h3>
                            <p className="text-base-content/70">Projects will appear here once added to the CMS.</p>
                        </div>
                    ) }
                </div>
            </div>
        </section>
    );
} 
