import { projects } from "./data/projects";

const siteUrl = "https://mnahilnaseer.vercel.app";
const defaultImage = `${siteUrl}/og-image.svg`;

const seoConfig = {
  "/": {
    title: "Mnahil Naseer — Full Stack & Mobile Developer",
    description:
      "Mnahil Naseer builds polished full-stack web and mobile products with React, React Native, Node.js, and Supabase. Explore featured projects, case studies, and experience.",
    canonical: `${siteUrl}/`,
  },
  "/projects": {
    title: "Projects — Mnahil Naseer",
    description:
      "Browse Mnahil Naseer’s featured web and mobile projects, including e-commerce apps, developer platforms, and case studies.",
    canonical: `${siteUrl}/projects`,
  },
};

function setMeta(tagName, attributes, content) {
  let element = document.querySelector(tagName);

  if (!element) {
    element = document.createElement(tagName.startsWith("link") ? "link" : "meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      element.setAttribute(key, value);
    }
  });

  if (content !== undefined) {
    element.setAttribute("content", content);
  }
}

function setJsonLd(data) {
  let script = document.getElementById("portfolio-jsonld");

  if (!script) {
    script = document.createElement("script");
    script.id = "portfolio-jsonld";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function buildProjectSeo(pathname) {
  const slug = pathname.split("/").filter(Boolean).pop();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return null;
  }

  return {
    title: `${project.title} — Case Study | Mnahil Naseer`,
    description: project.description,
    canonical: `${siteUrl}/projects/${project.slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      author: {
        "@type": "Person",
        name: "Mnahil Naseer",
        url: siteUrl,
      },
      keywords: project.tech.join(", "),
      url: `${siteUrl}/projects/${project.slug}`,
    },
  };
}

export function applySeo(pathname, overrides = {}) {
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const route = Object.keys(seoConfig).find((key) => normalizedPath === key || normalizedPath.startsWith(`${key}`));
  const projectSeo = buildProjectSeo(pathname);
  const baseConfig = seoConfig[route] || seoConfig["/"];
  const config = projectSeo || (Object.keys(overrides).length > 0 ? { ...baseConfig, ...overrides } : baseConfig);

  const title = config.title;
  const description = config.description;
  const canonical = config.canonical || `${siteUrl}/`;

  document.title = title;
  setMeta("meta[name='description']", {}, description);
  setMeta("meta[property='og:title']", {}, title);
  setMeta("meta[property='og:description']", {}, description);
  setMeta("meta[property='og:url']", { property: "og:url" }, canonical);
  setMeta("meta[name='twitter:title']", {}, title);
  setMeta("meta[name='twitter:description']", {}, description);
  setMeta("link[rel='canonical']", { rel: "canonical", href: canonical }, undefined);
  setMeta("meta[property='og:image']", {}, defaultImage);
  setMeta("meta[name='twitter:image']", {}, defaultImage);
  setMeta("meta[property='og:site_name']", {}, "Mnahil Naseer Portfolio");

  setJsonLd({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mnahil Naseer",
    jobTitle: "Full Stack & Mobile Developer",
    url: siteUrl,
    sameAs: ["https://github.com/Mnahil-Naseer", "https://www.linkedin.com/in/mnahil-naseer/"],
    description,
  });

  if (projectSeo?.jsonLd) {
    setJsonLd(projectSeo.jsonLd);
  }
}
