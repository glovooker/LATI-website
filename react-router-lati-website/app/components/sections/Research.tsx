import type { SanityDocument } from "@sanity/client";

interface ResearchProps {
    researchLines: SanityDocument[];
}

export default function Research ({ researchLines }: ResearchProps) {
    return (
        <section id="research" className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */ }
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Research Lines
                        </h2>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            Explore our cutting-edge research areas in AR/VR and interactive experiences
                        </p>
                    </div>

                    {/* Research Grid */ }
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        { researchLines.map((item) => (
                            <div key={ item._id } className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                { item.image && (
                                    <figure className="h-48 overflow-hidden">
                                        <img
                                            src={ `https://cdn.sanity.io/images/gulqkrg1/production/${ item.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png') }` }
                                            alt={ item.title }
                                            className="w-full h-full object-cover"
                                        />
                                    </figure>
                                ) }
                                <div className="card-body">
                                    <h3 className="card-title">
                                        { item.title }
                                    </h3>
                                    <p className="text-base-content/70 leading-relaxed">
                                        { item.description }
                                    </p>
                                    <div className="card-actions justify-start mt-4">
                                        <div className="badge badge-primary">Research Area</div>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>

                    {/* Empty State */ }
                    { researchLines.length === 0 && (
                        <div className="text-center py-12">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24 flex items-center justify-center">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No Research Lines Yet</h3>
                            <p className="text-base-content/70">Research areas will appear here once added to the CMS.</p>
                        </div>
                    ) }
                </div>
            </div>
        </section>
    );
} 
