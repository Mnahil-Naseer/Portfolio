export const featuredProject = {
  tag: "Final Year Project",
  title: "Smart Ride Sharing System",
  description:
    "A cross-platform ride sharing app with real-time driver matching, live OSM-based route tracking, in-app feedback, an AI chatbot for support, multilingual translation, and an admin monitoring dashboard. Built to solve last-mile commute friction in dense urban areas.",
  features: [
    "Real-time driver matching",
    "OSM + Leaflet route tracking & ETA",
    "Rider feedback & rating system",
    "AI chatbot support",
    "Multilingual translation",
    "Admin monitoring dashboard",
  ],
  problem:
    "Urban commuters lack a reliable, affordable last-mile option and existing apps surface long ETAs with poor driver matching, weak rider support, and no inclusive language coverage.",
  solution:
    "A real-time matching engine pairs riders with the nearest available driver, OSM + Leaflet renders live routes and ETAs, an AI chatbot handles support, and an admin console monitors trips, users, and feedback in one place.",
  challenges: [
    "Designing a low-latency matching loop that scales with concurrent riders on Supabase realtime",
    "Synchronizing live trip state across rider, driver, and admin clients over OSM tiles",
  ],
  learnings: [
    "Architecting realtime mobile experiences with React Native, Expo, and Supabase",
    "Integrating open-source mapping (OSM, Leaflet) with custom routing and geocoding flows",
  ],
  tech: ["React Native", "Expo", "Supabase", "Node.js", "OpenStreetMap", "Leaflet"],
};

export const projects = [
  {
    slug: "emart",
    tag: "E-commerce",
    title: "eMart",
    description:
      "A full-featured e-commerce web application with seamless checkout, product discovery, cart management, and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    live: "https://emart112233.vercel.app/",
    code: "https://github.com/Mnahil-Naseer/E-Commerce",
    caseStudy: {
      problem:
        "Small online retailers needed a polished storefront with fast product discovery and a modern checkout experience.",
      solution:
        "Built a responsive e-commerce platform with curated product listings, cart state persistence, and a smooth checkout workflow.",
      role:
        "Full-stack developer responsible for the React UI, Express API, MongoDB schema design, and deployment.",
      impact:
        "Delivered an enjoyable shopping experience that reduced friction and supported responsive product browsing.",
      highlights: [
        "Custom product filters and search",
        "Responsive cart and checkout flows",
        "Backend order API with MongoDB persistence",
      ],
      results:
        "Successfully shipped a production-ready storefront that made browsing and purchasing seamless for shoppers.",
    },
  },
  {
    slug: "zencodez",
    tag: "Developer Platform",
    title: "ZenCodeZ",
    description:
      "A developer-focused platform offering clean tooling, code resources, and rapid shipping utilities for modern web development.",
    tech: ["Next.js", "JavaScript", "Tailwind", "Vercel"],
    live: "https://zencodez.vercel.app/",
    code: "https://github.com/Mnahil-Naseer/ZenCodeZ",
    caseStudy: {
      problem:
        "Developers needed a central hub for resources and utilities without the noise of bulky documentation sites.",
      solution:
        "Created a lightweight platform that surfaces curated tooling, code snippets, and fast shipping flows for modern web projects.",
      role:
        "Designed the UI, implemented Next.js pages, and optimized the platform for performance and accessibility.",
      impact:
        "Improved developer productivity by surfacing tools and resources with a clean, intuitive interface.",
      highlights: [
        "Minimal developer-first interface",
        "Fast static page generation",
        "Clear resource organization and navigation",
      ],
      results:
        "Delivered a developer-centric platform that feels fast, polished, and easy to explore.",
    },
  },
  {
    slug: "crafty-commerce",
    tag: "Marketplace",
    title: "Crafty Commerce",
    description:
      "An elegant e-commerce platform built for craft sellers with product showcases, cart functionality, and smooth user experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    live: "https://crafty-commerce-eight.vercel.app/",
    code: "https://github.com/Mnahil-Naseer/Crafty-Commerce",
    caseStudy: {
      problem:
        "Craft sellers needed an attractive marketplace that highlighted handmade goods while simplifying checkout.",
      solution:
        "Developed a marketplace experience with polished product pages, responsive storefront, and easy purchase flow.",
      role:
        "Built the front-end marketplace UI and integrated it with the backend catalog and order API.",
      impact:
        "Created a premium presentation for sellers and a shopping experience optimized for discovery.",
      highlights: [
        "Curated product showcase layout",
        "Responsive buyer journey",
        "Streamlined checkout and cart interaction",
      ],
      results:
        "Launched a marketplace that feels premium, easy to navigate, and buyer-friendly.",
    },
  },
  {
    slug: "al-itehad-graphics-center",
    tag: "Client Project",
    title: "Al Itehad Graphics Center",
    description:
      "A professional brand identity and graphics platform with a polished client portal for design services and portfolio showcase.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: null,
    code: "https://github.com/Mnahil-Naseer/Al-Itehad-Graphics-Center",
    caseStudy: {
      problem:
        "A design studio needed a professional online presence to highlight services and allow clients to request work easily.",
      solution:
        "Built a sleek portfolio website with service details, client engagement prompts, and a modern visual identity.",
      role:
        "Delivered the website design, front-end implementation, and backend portfolio content management.",
      impact:
        "Helped position the client as a polished and trustworthy design provider with a stronger digital presence.",
      highlights: [
        "Brand-focused portfolio layout",
        "Client-friendly contact flows",
        "Responsive visuals for design services",
      ],
      results:
        "Created a professional destination that elevated the brand and made service booking more approachable.",
    },
  },
];
