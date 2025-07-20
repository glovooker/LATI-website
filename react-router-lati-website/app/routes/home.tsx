import type { SanityDocument } from "@sanity/client";
import { Link } from "react-router";
import { client } from "~/sanity/client";
import type { Route } from "./+types/home";

const RESEARCH_LINES_QUERY = `*[_type == "researchLine"]{_id, title, description, image}`;
const PROJECTS_QUERY = `*[_type == "project"]{_id, title, description, image}`;
const TEAM_MEMBERS_QUERY = `*[_type == "teamMember"]{_id, name, role, image, linkedinUrl}`;

export async function loader() {
  const [researchLines, projects, teamMembers] = await Promise.all([
    client.fetch<SanityDocument[]>(RESEARCH_LINES_QUERY),
    client.fetch<SanityDocument[]>(PROJECTS_QUERY),
    client.fetch<SanityDocument[]>(TEAM_MEMBERS_QUERY),
  ]);
  
  return { researchLines, projects, teamMembers };
}

export default function IndexPage({ loaderData }: Route.ComponentProps) {
  const { researchLines, projects, teamMembers } = loaderData;

  return (
    <main className="container mx-auto min-h-screen max-w-6xl p-8">
      {/* Research Lines Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-8">Research Lines</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchLines.map((item) => (
            <div key={item._id} className="border rounded-lg p-4 shadow-sm">
              {item.image && (
                <img 
                  src={`https://cdn.sanity.io/images/gulqkrg1/production/${item.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div key={item._id} className="border rounded-lg p-4 shadow-sm">
              {item.image && (
                <img 
                  src={`https://cdn.sanity.io/images/gulqkrg1/production/${item.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-8">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((item) => (
            <div key={item._id} className="border rounded-lg p-4 shadow-sm text-center">
              {item.image && (
                <img 
                  src={`https://cdn.sanity.io/images/gulqkrg1/production/${item.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.role}</p>
              {item.linkedinUrl && (
                <a 
                  href={item.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
