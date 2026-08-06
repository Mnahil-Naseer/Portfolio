import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Pill from "../components/ui/Pill";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";
import zabgoVideo from "../assets/Zabgo.mp4";
import { applySeo } from "../seo";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  useEffect(() => {
    if (!project) return;

    applySeo(`/projects/${project.slug}`, {
      title: `${project.title} — Case Study | Mnahil Naseer`,
      description: project.description,
      canonical: `https://mnahilnaseer.vercel.app/projects/${project.slug}`,
    });
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16 min-h-screen">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-3 sm:px-5 md:px-6">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
            <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
              <Link
                to="/projects"
                className="text-xs sm:text-sm font-medium text-ink-300 hover:text-ink-100"
              >
                ← Back to projects
              </Link>
              <Pill className="text-xs">{project.tag}</Pill>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg sm:rounded-xl bg-[linear-gradient(135deg,#010F55_0%,#0654B0_45%,#00022A_100%)] px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(6,84,176,0.45)] transition hover:bg-cyan-400"
                >
                  Live demo
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-ink-100 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Source code
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </a>
              )}
            </div>
          </div>

          <SectionHeading
            eyebrow="Case study"
            heading={project.title}
            subtext={project.description}
          />
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="space-y-4 sm:space-y-5">
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-glow sm:space-y-4 sm:p-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-cyan-400">The problem</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400 sm:text-[15px]">{project.caseStudy.problem}</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-cyan-400">The solution</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400 sm:text-[15px]">{project.caseStudy.solution}</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-cyan-400">My role</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400 sm:text-[15px]">{project.caseStudy.role}</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-cyan-400">Impact</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400 sm:text-[15px]">{project.caseStudy.impact}</p>
              </div>
            </div>

            {project.caseStudy.highlights?.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-glow sm:p-6">
                <h3 className="text-base font-semibold text-cyan-400 sm:text-lg">Highlights</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-400 sm:text-[15px]">
                  {project.caseStudy.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          <aside className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-glow backdrop-blur-xl sm:space-y-5 sm:p-6">
            <div>
              <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-cyan-400">Tech stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Pill key={item} className="text-[10px] sm:text-[11px] border-white/10 bg-white/[0.04] text-ink-300">
                    {item}
                  </Pill>
                ))}
              </div>
            </div>

            {project.slug === "smart-ride-sharing-system" && (
              <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-white/15 bg-black/80 p-2 shadow-[0_0_35px_rgba(6,84,176,0.18)]">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                  <video
                    className="aspect-[9/16] w-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src={zabgoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            {project.caseStudy.results && (
              <div className="rounded-2xl border border-white/10 bg-base-950/70 p-3 sm:p-4">
                <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-cyan-400">Results</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.caseStudy.results}</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
