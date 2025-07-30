import type { SanityDocument } from "@sanity/client";
import { client } from "~/sanity/client";
import type { Route } from "./+types/home";

// Import components
import Header from "~/components/layout/Header";
import Hero from "~/components/sections/Hero";
import About from "~/components/sections/About";
import Research from "~/components/sections/Research";
import Projects from "~/components/sections/Projects";
import Team from "~/components/sections/Team";
import Contact from "~/components/sections/Contact";
import Footer from "~/components/layout/Footer";

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
      <>
          <Header />
          <main>
              <Hero />
              <About />
              <Research researchLines={ researchLines } />
              <Projects projects={ projects } />
              <Team teamMembers={ teamMembers } />
              <Contact />
          </main>
          <Footer />
      </>
  );
}
