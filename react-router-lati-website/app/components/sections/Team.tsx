import type { SanityDocument } from "@sanity/client";

interface TeamProps {
    teamMembers: SanityDocument[];
}

export default function Team ({ teamMembers }: TeamProps) {
    return (
        <section id="team" className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */ }
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Team
                        </h2>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            Meet the researchers and developers behind our innovative AR/VR and interactive experiences
                        </p>
                    </div>

                    {/* Team Grid */ }
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        { teamMembers.map((item) => (
                            <div key={ item._id } className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
                                <div className="card-body">
                                    { item.image && (
                                        <div className="avatar mb-4">
                                            <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img
                                                    src={ `https://cdn.sanity.io/images/gulqkrg1/production/${ item.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png') }` }
                                                    alt={ item.name }
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    ) }
                                    <h3 className="card-title justify-center">
                                        { item.name }
                                    </h3>
                                    <p className="text-base-content/70 mb-4">
                                        { item.role }
                                    </p>
                                    { item.linkedinUrl && (
                                        <div className="card-actions justify-center">
                                            <a
                                                href={ item.linkedinUrl }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary btn-sm"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                LinkedIn
                                            </a>
                                        </div>
                                    ) }
                                </div>
                            </div>
                        )) }
                    </div>

                    {/* Empty State */ }
                    { teamMembers.length === 0 && (
                        <div className="text-center py-12">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24 flex items-center justify-center">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No Team Members Yet</h3>
                            <p className="text-base-content/70">Team members will appear here once added to the CMS.</p>
                        </div>
                    ) }
                </div>
            </div>
        </section>
    );
} 
