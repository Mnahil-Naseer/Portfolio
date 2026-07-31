export const projects = [
  {
    slug: "smart-ride-sharing-system",
    tag: "Final Year Project",
    title: "Smart Ride Sharing System",
    description:
      "A cross-platform ride sharing app with real-time driver matching, live OSM-based route tracking, in-app feedback, an AI chatbot for support, multilingual translation, and an admin monitoring dashboard. Built to solve last-mile commute friction in dense urban areas.",
    tech: ["React Native", "Expo", "Supabase", "Node.js", "OpenStreetMap", "Leaflet"],
    live: null,
    code: null,
    caseStudy: {
      problem:
        "University-scale commuters had no dependable last-mile option: existing ride apps in the area gave inaccurate ETAs, matched riders to drivers inefficiently, and offered no real support channel when something went wrong mid-trip.",
      solution:
        "I built three connected clients — a rider app, a driver app, and an admin web console — around a Node.js backend and Supabase Realtime. A matching engine pairs each ride request with the nearest available driver, live trip state (location, status, ETA) streams to all three clients simultaneously, and OpenStreetMap + Leaflet handle route rendering, geocoding, and ETA calculation without relying on a paid maps API.",
      challenges: [
        "Keeping the driver-matching loop fast and accurate as concurrent ride requests scaled, without over-fetching from Supabase Realtime channels",
        "Synchronizing the same trip state across three different clients (rider, driver, admin) in real time so no one was ever looking at stale data",
        "Building routing and geocoding on top of OSM instead of a commercial API, which meant handling edge cases Google Maps abstracts away for you",
      ],
      role:
        "Sole developer end-to-end — architected the real-time matching system, built all three client apps, designed the Supabase schema, and integrated the chatbot and translation layer.",
      impact:
        "Turned a common last-mile commuting gap into a working, demoable system with live coordination between riders, drivers, and admins — the kind of real-time architecture most student projects don't attempt.",
      learnings: [
        "How to architect a real-time, multi-client mobile system with React Native, Expo, and Supabase Realtime channels",
        "Working with open-source mapping (OSM + Leaflet) end-to-end: custom routing, geocoding, and ETA logic instead of relying on a black-box maps SDK",
      ],
      highlights: [
        "Real-time driver matching engine",
        "OSM + Leaflet live route tracking & ETA",
        "Rider feedback & rating system",
        "AI chatbot for rider support",
        "Multilingual translation layer",
        "Admin monitoring dashboard for trips, users & feedback",
      ],
      results:
        "A fully functional three-sided system (rider / driver / admin) with live trip sync — built solo as a final year project, from data modeling to real-time infrastructure to UI.",
    },
  },
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
        "Small online sellers often end up choosing between a bloated, plugin-heavy storefront builder or a bare-bones cart with no real product discovery — neither gives shoppers a fast, guided path from browsing to checkout.",
      solution:
        "I built a lightweight storefront from scratch: category and attribute-based product filtering, a persistent cart backed by React state and an Express order API, and a checkout flow that keeps the shopper oriented at every step instead of dumping them into a single long form.",
      challenges: [
        "Structuring the MongoDB product schema so filtering and search stayed fast without over-fetching on every keystroke",
        "Keeping cart state consistent across page reloads and route changes without a heavyweight state library",
      ],
      role:
        "Full-stack developer — built the React front end, the Express REST API, the MongoDB schema, and handled deployment.",
      impact:
        "Delivered a production-ready storefront that shows the full stack, not just a UI mockup: real product data, a real cart, and a real order API behind it.",
      highlights: [
        "Category + attribute-based product filtering and search",
        "Persistent, responsive cart and checkout flow",
        "Express + MongoDB order API with proper schema design",
      ],
      results:
        "A working end-to-end storefront — browse, filter, cart, checkout — deployed and demoable, with the backend order pipeline to back it up.",
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
        "Most developer resource hubs are either giant documentation sites that bury what you need under navigation, or scattered bookmarks with no structure — neither is built for someone who just wants to find a tool and get back to shipping.",
      solution:
        "I designed ZenCodeZ as a stripped-down, fast-loading hub: curated tools and snippets organized by category, built on Next.js for static generation so pages load instantly instead of round-tripping to a CMS.",
      role:
        "Designed the UI and information architecture, built the Next.js pages, and optimized for page-load performance and accessibility.",
      impact:
        "Replaced the instinct to reach for a bloated documentation template with something closer to a well-organized bookmark bar — fast, minimal, and easy to scan.",
      highlights: [
        "Minimal, developer-first interface with no unnecessary chrome",
        "Static page generation for fast load times",
        "Clear categorization so resources are easy to scan and find",
      ],
      results:
        "A deployed, functioning resource hub that prioritizes speed and clarity over feature bloat.",
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
        "Handmade and craft sellers don't just need a cart — they need product pages that make the work look intentional, since the visual presentation is a big part of what sells a handmade item.",
      solution:
        "I built a marketplace-style storefront that puts product photography and detail front and center, with a browsing layout organized around discovery rather than a flat product grid, wired up to a Node.js/Express/MongoDB catalog and order API on the backend.",
      role:
        "Built the front-end marketplace UI and integrated it end-to-end with the backend catalog and order API.",
      impact:
        "Gave craft sellers a storefront that presents their work the way a boutique would, rather than a generic cart-and-grid template.",
      highlights: [
        "Curated, showcase-style product layout",
        "Responsive buyer journey from browsing to checkout",
        "Full cart and checkout flow wired to a live catalog API",
      ],
      results:
        "A deployed marketplace experience that balances a premium look with a genuinely functional cart and checkout underneath it.",
    },
  },
  {
    slug: "psychotria",
    tag: "Client Project",
    title: "Psychotria",
    description:
      "A client website for a psychology, research, and professional development brand — covering counseling services, SPSS training, academic mentorship, and workshops — built to feel credible, modern, and easy to navigate.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    live: "https://psychotria.vercel.app/",
    code: null,
    caseStudy: {
      problem:
        "The client offers a mix of services that don't naturally fit one template — counseling, SPSS statistical training, academic mentorship, and workshops — and needed a site that could present all of them clearly without feeling like a generic agency template, while building enough trust for visitors to actually reach out.",
      solution:
        "I designed and built a Vite + React site with Framer Motion for subtle, purposeful motion rather than decoration — clear service sections for each offering, trust-building content (credentials, approach, focus areas), and a streamlined path to inquiry so visitors don't have to hunt for how to get in touch.",
      challenges: [
        "Structuring distinct services (counseling, SPSS training, mentorship, workshops) into one coherent site without it reading as four disconnected pages",
        "Balancing a professional, clinical tone with a modern, approachable visual style — this couldn't look either too corporate or too casual",
      ],
      role:
        "Led design implementation and front-end development for the client, translating their service offering into a structured, responsive site.",
      impact:
        "Gave the client a professional digital front door that clearly communicates what they offer and makes it easy for prospective clients or students to take the next step.",
      highlights: [
        "Dedicated sections for counseling, SPSS training, mentorship, and workshops",
        "Framer Motion used for restrained, purposeful interaction rather than decoration",
        "Fully responsive layout with a simplified inquiry path",
      ],
      results:
        "Delivered and deployed a live client site that reads as credible and modern rather than templated — direct client work, not a personal project.",
    },
  },
  {
    slug: "novelerio",
    tag: "Reading Platform",
    title: "Novelerio",
    description:
      "A role-based story and book publishing platform with separate reader, author, and admin experiences — built to support a structured, moderated digital reading ecosystem rather than just a static book list.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Node.js"],
    live: "https://yournovelerio.vercel.app/",
    code: "https://github.com/Mnahil-Naseer/Novelerio",
    caseStudy: {
      problem:
        "Most reading platforms are either read-only catalogs or open publishing tools with no moderation — Novelerio needed to support three different kinds of users (readers, authors, admins) with different permissions, without the experience feeling fragmented between them.",
      solution:
        "I built Novelerio around role-based dashboards: readers get an authentication-gated reading experience, prospective authors go through an onboarding flow that requires admin approval before they can publish, and approved authors manage books at the chapter level rather than uploading a single static file. Redux Toolkit handles state across these different views so the app stays responsive as users move between roles.",
      challenges: [
        "Designing an authorization model where reading access, author permissions, and admin approval all had to be enforced consistently, not just hidden in the UI",
        "Structuring chapter-level content management so authors could publish incrementally instead of needing a finished book before going live",
      ],
      role:
        "Designed and built the full front-end experience — UI, role-based routing, state management, and the author-approval and chapter-management flows.",
      impact:
        "Turned 'a place to read books' into a structured publishing ecosystem with real moderation, which is a meaningfully harder problem than a static content site.",
      highlights: [
        "Role-based dashboards for readers, authors, and admins",
        "Auth-gated reading experience",
        "Author onboarding flow with admin approval before publishing",
        "Chapter-level content management instead of single-file uploads",
        "Redux Toolkit for state management across roles",
      ],
      results:
        "A deployed, functioning platform where the reader, author, and admin experiences are genuinely distinct — not just the same view with a different label.",
    },
  },
  {
    slug: "photography-website",
    tag: "Portfolio",
    title: "Photography Website",
    description:
      "A cinematic photography portfolio built to let the images carry the site, with immersive galleries, curated project groupings, and a simple, unobtrusive contact path.",
    tech: ["React", "Vite", "Tailwind"],
    live: null,
    code: null,
    caseStudy: {
      problem:
        "Photography portfolios often undercut the work itself — cluttered layouts, competing UI elements, and navigation that gets in the way of just looking at the images.",
      solution:
        "I stripped the interface back deliberately: large-format image galleries with minimal chrome, projects grouped so a viewer can move through a body of work as a sequence rather than a random grid, and a contact section that's easy to find without interrupting the browsing experience.",
      role:
        "Handled the full front-end build — layout, gallery structure, and content organization — end to end.",
      impact:
        "Gave the work a presentation that gets out of its own way, letting the images do the talking instead of competing with UI decoration.",
      highlights: [
        "Large-format, immersive gallery layout",
        "Minimal interface with the imagery as the focal point",
        "Projects grouped for sequential, story-driven browsing",
      ],
      results:
        "A clean, gallery-first portfolio site where navigation stays out of the way of the work.",
    },
  },
];