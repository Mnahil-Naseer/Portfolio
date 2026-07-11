import { Link } from "react-router-dom";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Projects"
          heading="Shipped like products, not assignments."
          subtext="Selected work spanning ride-sharing, e-commerce, brand platforms, and reading experiences."
        />

        <FeaturedProject />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button as={Link} href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
}
