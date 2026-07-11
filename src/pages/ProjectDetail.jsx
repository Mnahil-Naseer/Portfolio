import { Link, Navigate, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Button from "../components/ui/Button";
import Pill from "../components/ui/Pill";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="relative py-24 sm:py-32 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                to="/projects"
                className="text-sm font-medium text-ink-300 hover:text-ink-100"
              >
                ← Back to projects
              </Link>
              <Pill>{project.tag}</Pill>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
                >
                  Live demo
                  <ExternalLink size={14} />
                </a>
              )}
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-ink-100 transition hover:border-violet-400 hover:text-violet-400"
              >
                Source code
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <SectionHeading
            eyebrow="Case study"
            heading={project.title}
            subtext={project.description}
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <article className="space-y-10">
            <div className="space-y-5 rounded-3xl glass p-8 border border-white/10 shadow-glow">
              <div>
                <h3 className="text-lg font-semibold text-ink-100">The problem</h3>
                <p className="mt-3 text-ink-400 leading-relaxed">{project.caseStudy.problem}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink-100">The solution</h3>
                <p className="mt-3 text-ink-400 leading-relaxed">{project.caseStudy.solution}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink-100">My role</h3>
                <p className="mt-3 text-ink-400 leading-relaxed">{project.caseStudy.role}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink-100">Impact</h3>
                <p className="mt-3 text-ink-400 leading-relaxed">{project.caseStudy.impact}</p>
              </div>
            </div>

            {project.caseStudy.highlights?.length > 0 && (
              <div className="rounded-3xl glass p-8 border border-white/10 shadow-glow">
                <h3 className="text-lg font-semibold text-ink-100">Highlights</h3>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-ink-400">
                  {project.caseStudy.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          <aside className="space-y-6 rounded-3xl glass border border-white/10 p-8 shadow-glow">
            <div>
              <h4 className="text-sm uppercase tracking-[0.24em] text-ink-500">Tech stack</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Pill key={item} className="text-[11px]">
                    {item}
                  </Pill>
                ))}
              </div>
            </div>

            {project.caseStudy.results && (
              <div>
                <h4 className="text-sm uppercase tracking-[0.24em] text-ink-500">Results</h4>
                <p className="mt-3 text-ink-400 leading-relaxed">{project.caseStudy.results}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-4">
              <Button as={Link} to="/projects" variant="secondary">
                Back to all projects
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
