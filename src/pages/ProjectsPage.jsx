import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section className="relative py-16 sm:py-28 md:py-36 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-14">
        <div className="flex flex-col gap-6 sm:gap-8 items-center text-center">
          <SectionHeading
            eyebrow="Projects"
            heading="All projects with full case studies."
            subtext="Browse every shipped project with live demos, source code, and detailed outcomes."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Button as={Link} to="/" variant="secondary">
              Back to home
            </Button>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-white/5 px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium text-ink-100 transition-all duration-300 hover:bg-white/10"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
