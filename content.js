/* =====================================================================
   SITE CONTENT — the only file that needs editing for routine updates.
   index.html reads window.SITE and renders everything from it.
   Keep the shape of each entry the same when adding or changing items.
   ===================================================================== */
window.SITE = {
  updated: "2026-11-23",

  name: "Sardor Abduraupov",
  initials: "SR",
  location: "Tashkent, Uzbekistan",
  timezone: "Asia/Tashkent",
  roles: ["Systems developer", "Product designer", "AI builder", "Student founder"],

  headline: "I build calm, intelligent software — and the systems behind it.",

  education: {
    school: "American International School of Tashkent",
    short: "AIST",
    grade: "Grade 8",
    focus: "Mathematics, computer science and English"
  },

  /* Short line under the hero — keep it to one or two sentences. */
  intro:
    "Grade 8 student at the American International School of Tashkent, building real products in AI, communication and learning. I care about reducing complexity and designing technology that feels calm, intentional and useful.",

  /* Each string becomes one paragraph in the About section. */
  about: [
    "I'm a systems-oriented developer and designer interested in product architecture, interface clarity and long-term technological systems.",
    "I'm in Grade 8 at the American International School of Tashkent, with a focus on mathematics, computer science and English. Alongside school, I build real software — not prototypes, but systems designed to evolve.",
    "I'm interested in how complex systems behave over time: how architecture decisions compound, how interfaces influence thinking, and how tools can amplify people instead of distracting them."
  ],

  /* Small facts shown as counters / chips in the About section. */
  facts: [
    { value: "4", label: "products built or in progress" },
    { value: "8", label: "grade, American International School of Tashkent" },
    { value: "3", label: "positions I'm running for in the 2026 AIST elections" }
  ],

  skills: [
    "TypeScript", "React", "JavaScript", "HTML & CSS", "Cloudflare Workers", "Supabase",
    "Gemini API", "AI systems", "UI / UX design", "Product architecture", "Vite", "Tailwind"
  ],

  /* PROJECTS — newest / most important first.
     status: short label, e.g. "Live", "In development", "Active build", "Archived".
     hue: 0–360, sets the colour of the generated cover art.
     art: "grid" | "orbits" | "layers" | "bubbles" — style of the generated cover art.
     links: [{ label, url }] — leave empty if nothing public yet. */
  projects: [
    {
      id: "foodflow",
      art: "grid",
      title: "FoodFlow",
      year: "2026",
      status: "Active build",
      hue: 145,
      tagline: "An AI kitchen that knows what's in your fridge.",
      description:
        "A shared household food inventory. Scan a receipt or just say what you bought, and FoodFlow tracks it, sorts it into categories and suggests recipes from what you already have.",
      details: [
        "Receipt scanning and voice input powered by Gemini, with automatic fallback to HuggingFace models",
        "Shared “houses” so a whole family syncs one inventory",
        "React + TypeScript frontend on a Cloudflare Worker backend with D1 and Supabase storage"
      ],
      stack: ["React", "TypeScript", "Cloudflare Workers", "D1", "Supabase", "Gemini"],
      links: [{ label: "GitHub", url: "https://github.com/sardor-abduraupov/foodflow" }]
    },
    {
      id: "aist-elections",
      art: "orbits",
      title: "What should we fix at AIST?",
      year: "2026",
      status: "Live",
      hue: 222,
      tagline: "An anonymous idea board for my student council campaign.",
      description:
        "I'm running in the AIST Student Elections, so I built a site where any student can suggest what the school should fix — anonymously, in about 20 seconds. Only totals are public; the ideas feed my proposal, the AIST Project Lab.",
      details: [
        "Anonymous submissions with no login, and clear rules against naming people",
        "Live public counter, while individual messages stay private",
        "Introduces AIST Project Lab: monthly mixed-grade teams turning ideas into real projects"
      ],
      stack: ["HTML", "CSS", "JavaScript", "Cloudflare Pages"],
      links: [{ label: "Visit site", url: "https://suggestions-list.pages.dev" }]
    },
    {
      id: "axis",
      art: "layers",
      title: "Axis",
      year: "2026",
      status: "In development",
      hue: 252,
      tagline: "AI-assisted learning, designed around clarity.",
      description:
        "An AI-powered learning platform that helps students study faster and more effectively, combining summaries, guidance and structured learning support in one place.",
      details: [
        "AI-assisted explanations that adapt to the student",
        "Learning organisation that reduces cognitive load",
        "Built as a long-term system, not a one-off app"
      ],
      stack: ["AI", "Product design", "Web"],
      links: []
    },
    {
      id: "srgram",
      art: "bubbles",
      title: "SRGram",
      year: "2026",
      status: "In development",
      hue: 178,
      tagline: "A privacy-first messenger with AI built in.",
      description:
        "A messenger that explores how intelligent assistance can live inside a communication tool without compromising privacy, with Gemini chat integrated directly.",
      details: [
        "Privacy-first messaging architecture",
        "Integrated Gemini assistant inside conversations",
        "Minimal interface with as little friction as possible"
      ],
      stack: ["Messaging", "Gemini", "Privacy"],
      links: []
    }
  ],

  /* Lines shown one by one in the Vision section. */
  vision: [
    "Software should feel calm, coherent and intentional.",
    "Interfaces should reduce friction, not compete for attention.",
    "Good systems compound. Poor systems accumulate hidden cost."
  ],

  contacts: [
    { label: "Email", handle: "abduraupov.s.r@gmail.com", url: "mailto:abduraupov.s.r@gmail.com" },
    { label: "Telegram", handle: "@sardorabduraupov", url: "https://t.me/sardorabduraupov" },
    { label: "Instagram", handle: "@sardorabduraupov_", url: "https://instagram.com/sardorabduraupov_" },
    { label: "X", handle: "@s_abduraupov", url: "https://x.com/s_abduraupov" },
    { label: "GitHub", handle: "@sardor-abduraupov", url: "https://github.com/sardor-abduraupov" }
  ]
};
