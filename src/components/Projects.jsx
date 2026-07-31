import { Link } from "react-router-dom";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Projects"
          heading="Shipped like products, not assignments."
          subtext="Selected work spanning ride-sharing, e-commerce, brand platforms, and reading experiences."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.slice(0, 3).map((project, i) => (
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
