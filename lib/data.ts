export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  // Case study structure: problem → role → what I built → outcome.
  problem: string;
  // Omitted where the CV doesn't state the role.
  role?: string;
  highlights: string[];
  outcome: string;
  // Headline number shown at the top of the case study.
  metric?: { value: string; label: string };
  stack: string[];
  image: string;
  images?: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
  tone: CardTone;
  privateNote?: string;
};

export type CardTone =
  | "purple"
  | "orange"
  | "red"
  | "yellow"
  | "ink"
  | "teal"
  | "olive"
  | "clay"
  | "wine"
  | "forest";

// Mirrors the `[data-tone]` rules in globals.css, for places CSS can't reach
// (generated Open Graph images).
export const toneColors: Record<CardTone, { bg: string; ink: string }> = {
  purple: { bg: "#6b1d32", ink: "#f4ede3" },
  orange: { bg: "#ff7722", ink: "#171412" },
  red: { bg: "#ff3c34", ink: "#fbf9ef" },
  yellow: { bg: "#ffc765", ink: "#171412" },
  ink: { bg: "#171412", ink: "#fbf9ef" },
  teal: { bg: "#1f6b63", ink: "#fbf9ef" },
  olive: { bg: "#5c6b3a", ink: "#fbf9ef" },
  clay: { bg: "#c45c3e", ink: "#fbf9ef" },
  wine: { bg: "#7a2e4a", ink: "#fbf9ef" },
  forest: { bg: "#2d4a3e", ink: "#fbf9ef" },
};

// Every still in public/work: intrinsic pixel size (so next/image can reserve
// space and build a srcset) and a caption, used as alt text and shown under
// the image. Add an entry when adding a still.
export const stills: Record<
  string,
  { width: number; height: number; caption: string }
> = {
  "/work/crescendo-01-my-work.png": { width: 1440, height: 1453, caption: "My Work: each person's tasks across projects" },
  "/work/crescendo-02-board.png": { width: 1440, height: 2428, caption: "Kanban board with sprint health and blocked tasks" },
  "/work/crescendo-07-timeline.png": { width: 1440, height: 900, caption: "Gantt timeline with dependency chains" },
  "/work/crescendo-15-charts.png": { width: 1440, height: 1926, caption: "Workload and progress charts" },
  "/work/crescendo-20-task-modal.png": { width: 1440, height: 2428, caption: "Task detail: assignment, skills and history" },
  "/work/crescendo-22-agent-pane.png": { width: 1440, height: 2428, caption: "Agent pane: proposed changes waiting for confirmation" },
  "/work/gmoney-01-login.png": { width: 2880, height: 2436, caption: "Investigator sign-in" },
  "/work/gmoney-02-queue.png": { width: 2880, height: 3168, caption: "Rank-first alert queue with SLA, typology and assignment" },
  "/work/gmoney-03-case-reasons.png": { width: 2880, height: 4418, caption: "Case view: why the alert ranked where it did" },
  "/work/gmoney-04-case-evidence.png": { width: 2880, height: 4690, caption: "Case view: supporting transaction evidence" },
  "/work/gmoney-05-case-graph.png": { width: 2880, height: 4332, caption: "Case view: neighbourhood graph of linked wallets" },
  "/work/gmoney-06-pilot.png": { width: 2880, height: 4606, caption: "Shadow-pilot dashboard: explanation coverage and triage time" },
  "/work/gmoney-07-audit.png": { width: 2880, height: 3364, caption: "Audit trail of scores, assignments and decisions" },
  "/work/medivoice-live.png": { width: 1280, height: 720, caption: "MediVoice, live consultation view" },
};

export type ShipItem = {
  id: string;
  index: string;
  title: string;
  body: string;
  metric: string;
  pull: string;
  pullMeta: string;
  related: string[];
};

export type Position = {
  title: string;
  dates: string;
  points: string[];
};

// One entry per organisation. Positions run newest first, so a promotion
// reads as one continuous stint rather than two separate jobs.
export type Role = {
  org: string;
  location: string;
  positions: Position[];
  // Tools and disciplines shown as tags, so the points can say what was built.
  stack?: string[];
  // Slug of a case study that covers this role's work.
  caseStudy?: string;
};

export type Org = {
  name: string;
  aliases?: string[];
  logo?: string;
  logoWidth?: string;
  logoHeight?: string;
  mark?: string;
  markWidth?: string;
  url?: string;
};

export const orgs: Org[] = [
  {
    name: "SyneroLabs",
    url: "https://www.synerolabs.io",
    logo: "/orgs/synerolabs.png",
    logoWidth: "8rem",
    mark: "/orgs/synerolabs-mark.svg",
    markWidth: "1.35rem",
  },
  {
    name: "Ashesi",
    url: "https://www.ashesi.edu.gh",
    aliases: ["Ashesi University"],
    logo: "/orgs/ashesi.png",
    logoWidth: "8.5rem",
    mark: "/orgs/ashesi-mark.png",
    markWidth: "1.45rem",
  },
  { name: "CVPR", url: "https://cvpr.thecvf.com", logo: "/orgs/cvpr.svg", logoWidth: "6.9rem" },
  {
    name: "iSpace Ghana",
    url: "https://www.ispacefoundation.com",
    aliases: ["iSpace", "iSpace Foundation"],
    logo: "/orgs/ispace.png",
    logoWidth: "7rem",
  },
  { name: "Wode Maya", url: "https://www.youtube.com/@WodeMaya", logo: "/orgs/wodemaya.png", logoWidth: "8.2rem" },
  {
    name: "Afrique Créative",
    url: "https://afriquecreative.fr/en/",
    aliases: ["Afrique Creative"],
    logo: "/orgs/afrique.png",
    logoWidth: "9.9rem",
  },
  {
    name: "AFD",
    url: "https://www.afd.fr/en",
    aliases: ["Agence Française de Développement"],
    logo: "/orgs/afd.png",
    logoWidth: "3.4rem",
  },
  {
    name: "Crossroads International",
    url: "https://cintl.org",
    aliases: ["Crossroad Internationals", "Crossroads"],
    logo: "/orgs/crossroads.png",
    logoWidth: "8.1rem",
  },
  { name: "RISA", url: "https://www.risa-fund.org", logo: "/orgs/risa.png", logoWidth: "4.4rem" },
  {
    name: "GIZ",
    url: "https://www.giz.de/en",
    aliases: ["Giz", "Deutsche Gesellschaft für Internationale Zusammenarbeit"],
    logo: "/orgs/giz.svg",
    logoWidth: "6.5rem",
  },
  {
    name: "German Cooperation",
    url: "https://www.bmz.de/en",
    aliases: ["German Coorepation", "Deutsche Zusammenarbeit"],
    logo: "/orgs/german-cooperation.png",
    logoWidth: "4.2rem",
    logoHeight: "2.45rem",
  },
  { name: "Ostec", url: "https://ostecit.com", aliases: ["ostec"], logo: "/orgs/ostec.png", logoWidth: "7.4rem" },
  { name: "Auorae", url: "https://www.auorae.com", aliases: ["Auoráe"], logo: "/orgs/auorae.png", logoWidth: "5.9rem" },
  {
    name: "Danoff Engineering",
    aliases: ["Danoff Engineering Company Ltd."],
    url: "https://danoffengineering.com",
    logo: "/orgs/danoff.png",
    logoWidth: "4.4rem",
  },
  { name: "G-Money" },
  { name: "Crescendo" },
  { name: "Brothers in Hue" },
];

function compactName(value: string) {
  return value.toLowerCase().replace(/[\s-]/g, "");
}

export function orgByName(name: string) {
  const compact = compactName(name);
  return orgs.find((org) => {
    const names = [org.name, ...(org.aliases ?? [])];
    return names.some((candidate) => {
      const orgCompact = compactName(candidate);
      return compact.includes(orgCompact) || orgCompact.includes(compact);
    });
  });
}

export const nav = [
  { href: "/works", label: "Works", icon: "works" },
  { href: "/#experience", label: "Experience", icon: "experience" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/#writing", label: "Writing", icon: "writing" },
  { href: "/contact", label: "Contact", icon: "contact" },
] as const;

export const projects: Project[] = [
  {
    slug: "boafo",
    title: "Boafo",
    year: "2026",
    category: "Agent platform",
    summary:
      "Multi-tenant agent runtime and insurance workspace for SyneroLabs: encryption, fail-closed guardrails, and a config-driven product shell.",
    metric: { value: "~75", label: "tests on the guardrail routing chain" },
    problem:
      "SyneroLabs runs AI agents inside other companies' operations. One runtime serves many tenants, so a secret, a tool config or a bad model answer must never cross from one customer to another, or reach an operator as if it were fact.",
    role:
      "Software engineering intern at SyneroLabs since June 2026. I work across Boafo Runtime, Boafo App and Boafo Commerce, and led UI/UX direction for the config-driven Project Workspace.",
    outcome:
      "Cross-tenant secret resolution is rejected, failed guardrail checks halt or escalate a turn, and Insurance and OMC run on one shared component set.",
    highlights: [
      "At-rest Fernet encryption and a tenant-scoped secret store that rejects cross-tenant resolution",
      "Guardrail verdicts halt or escalate a turn instead of reaching the user — ~75 tests on the routing chain",
      "DeepSeek and Claude adapters hardened for OpenAI-compatible gateways, including 200-with-error payloads",
      "Insurance workspace plus a public marketing site that cannot import credential-bearing server code",
      "Led UI/UX discovery for Boafo ERP and the config-driven Project Workspace reused across verticals",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Next.js 16",
      "React 19",
      "NestJS",
      "tRPC",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/work/boafo-cover.svg",
    featured: true,
    tone: "purple",
    privateNote: "Employer work. Public detail is limited to the CV.",
  },
  {
    slug: "gmoney-fraud-ops",
    title: "G-Money",
    year: "2026",
    category: "Fintech",
    summary:
      "Advisory investigator workspace for a MoMo fraud pilot. Ranked alerts, explainable reasons, human-only enforcement.",
    metric: { value: "0", label: "enforcement actions the engine can take on its own" },
    problem:
      "Fraud investigators on a mobile-money pilot need to know which alerts to open first and why, without handing freeze or block decisions to a model.",
    outcome:
      "A working investigator workspace over eight de-identified Ghana MoMo alerts, with a shadow-pilot dashboard that measures explanation coverage and triage time.",
    highlights: [
      "Rank-first queue with SLA, typology, and assignment state on every card",
      "Case views for reasons, evidence, and neighbourhood graph before a disposition",
      "Four-eyes confirmation on high-score alerts; freeze/block actions blocked on purpose",
      "Reconstructable audit of scores, assignments, and decisions",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/work/gmoney-02-queue.png",
    images: [
      "/work/gmoney-01-login.png",
      "/work/gmoney-02-queue.png",
      "/work/gmoney-03-case-reasons.png",
      "/work/gmoney-04-case-evidence.png",
      "/work/gmoney-05-case-graph.png",
      "/work/gmoney-06-pilot.png",
      "/work/gmoney-07-audit.png",
    ],
    href: "https://gmoney-fraud-ops.vercel.app",
    featured: false,
    tone: "clay",
  },
  {
    slug: "crescendo",
    title: "Crescendo",
    year: "2026",
    category: "AI product",
    summary:
      "AI project management in which every model call receives the full board state, not an isolated card.",
    metric: { value: "20", label: "agent tools: 5 read, 15 that can only propose a change" },
    problem:
      "AI assistants in project tools answer about one card at a time. They don't see who is overloaded, what is blocked, or which dependency is about to slip.",
    role:
      "Built for the Opus 4.7 Hackathon in April 2026: the full-stack app and the Board-State Awareness Engine behind it.",
    outcome:
      "Every model call sees the whole board, nothing is written until a person confirms it, and assigning work to someone at burnout risk is refused until that risk is acknowledged.",
    highlights: [
      "Board-State Awareness Engine grounds every response in complete project context",
      "Propose-then-confirm write path enforced in code, not in a prompt",
      "RBAC with 5 roles, JWT sessions, and audit logging",
      "Kanban, Gantt timeline, list, files, activity, and an agent pane",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Claude",
    ],
    image: "/work/crescendo-02-board.png",
    images: [
      "/work/crescendo-02-board.png",
      "/work/crescendo-22-agent-pane.png",
      "/work/crescendo-20-task-modal.png",
      "/work/crescendo-07-timeline.png",
      "/work/crescendo-01-my-work.png",
      "/work/crescendo-15-charts.png",
    ],
    featured: true,
    tone: "orange",
  },
  {
    slug: "vlm-corruption",
    title: "VLM robustness",
    year: "2026",
    category: "Research",
    summary:
      "CVPR 2026 workshop paper: do safety-aligned vision-language models degrade differently under common image corruptions?",
    metric: { value: "0.830", label: "relative mCE with MPO alignment: 17% fewer corruption errors" },
    problem:
      "Safety alignment changes how vision-language models behave, but no one had checked whether aligned models fail differently from their base models when images are blurred, noisy or otherwise degraded.",
    role:
      "Second of five authors. I built a reproducible evaluation pipeline across GQA, VQAv2 and TextVQA, with four corruption types at three severities.",
    outcome:
      "Accepted at the CVPR 2026 Workshop on Generative Models for Computer Vision. Alignment paradigm predicted robustness change better than model scale did.",
    highlights: [
      "CVPR 2026 Workshop on Generative Models for Computer Vision",
      "Four matched pairs: InternVL, Qwen2-VL, Gemma — GQA, VQAv2, TextVQA",
      "Corrected verbosity bias in VQA exact-match scoring",
      "Alignment paradigm predicted robustness change more than scale",
    ],
    stack: ["PyTorch", "Vision-language models", "ImageNet-C", "VQA"],
    image: "/work/vlm-cover.svg",
    href: "https://generative-vision.github.io/workshop-CVPR-26/papers/21.pdf",
    featured: true,
    tone: "yellow",
  },
  {
    slug: "boafo-ticketing",
    title: "Boafo Ticketing",
    year: "2026",
    category: "Commerce",
    summary:
      "Sole-engineered event ticketing stack: public API, organizer dashboard, embeddable checkout. Zero oversell at 800 concurrent buyers.",
    metric: { value: "0", label: "tickets oversold with 800 concurrent buyers chasing 100" },
    problem:
      "Organizers want to sell from their own site, and on-sale spikes are where ticketing breaks: seats sold twice, prices changed in the browser, payments charged twice on retry.",
    role:
      "Sole engineer: public API, organizer dashboard, embeddable checkout, phone scanner and deployment.",
    outcome:
      "The load test sold 100 tickets to 800 concurrent buyers with zero oversell. It also caught a reverse-proxy rate limit that would have turned real buyers away after about 8 requests.",
    highlights: [
      "Zero oversell under 800 concurrent buyers for 100 tickets",
      "Idempotency-Key, integer money, and single-writer capacity enforced by architectural tests",
      "Paystack card + mobile money, HMAC QR tickets, offline scanner",
      "OpenAPI product surface with secret vs publishable keys and signed webhooks",
      "Docker Compose on a single droplet: Caddy TLS, three apps, Postgres, Redis, one-shot migrator",
    ],
    stack: [
      "NestJS",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Paystack",
      "Docker",
    ],
    image: "/work/ticketing-cover.svg",
    featured: true,
    tone: "ink",
  },
  {
    slug: "unet",
    title: "U-Net",
    year: "2026",
    category: "Computer vision",
    summary:
      "PyTorch replication of Ronneberger et al. across four medical datasets, plus a skip-connection ablation.",
    metric: { value: "0.971", label: "Dice score on MSD Spleen CT" },
    problem:
      "Does the original U-Net hold up beyond the electron-microscopy data it was published on, and which parts of the architecture actually matter?",
    role:
      "Reimplemented U-Net in PyTorch and ran the skip-connection ablation.",
    outcome:
      "Dice of 0.864 (ISBI), 0.864 (BUSI), 0.971 (Spleen) and 0.909 (Hippocampus). Removing skip connections cut tumour Dice by 15.9%.",
    highlights: [
      "One config switch across EM, ultrasound, CT, and MRI",
      "Dice 0.971 on MSD Spleen, 0.909 on Hippocampus",
      "Skip-connection ablation: −15.9% tumor Dice without skips",
    ],
    stack: ["PyTorch", "U-Net", "Medical imaging"],
    image: "/work/unet-cover.svg",
    repo: "https://github.com/kaanyen/U-Net-implementation",
    featured: true,
    tone: "teal",
  },
  {
    slug: "medivoice",
    title: "MediVoice",
    year: "2025",
    category: "Healthcare AI",
    summary:
      "Clinical consultation transcription with medical NER for symptoms, diagnoses, and medications.",
    metric: { value: "3", label: "clinical entity types extracted: symptoms, diagnoses, medications" },
    problem:
      "Doctors lose consultation time to note-taking, and general-purpose speech models stumble over clinical vocabulary.",
    role:
      "Designed and built the app, including the ASR pipeline and the medical NER layer.",
    outcome:
      "Consultations are transcribed in real time, with symptoms, diagnoses and medications pulled out automatically. The app is live.",
    highlights: [
      "Real-time consultation transcription",
      "Medical NER for symptoms, diagnoses, and medications",
      "Domain-adapted vocabulary handling",
    ],
    stack: ["TypeScript", "ASR", "NER", "Next.js"],
    image: "/work/medivoice-live.png",
    href: "https://medi-voice-rho.vercel.app",
    repo: "https://github.com/kaanyen/mediV",
    featured: true,
    tone: "red",
  },
  {
    slug: "pillr",
    title: "Pillr",
    year: "2025",
    category: "Multi-tenant",
    summary:
      "Flutter + Firebase partnership management with RBAC, invitations, and bilingual EN/FR surfaces.",
    metric: { value: "124", label: "Flutter tests, plus Cloud Functions tests that only run against emulators" },
    problem:
      "Churches running partnership programmes need each organisation's data kept apart, with admins, pastors and staff seeing only what their role allows, in English and French.",
    role:
      "Engineered the system: multi-tenant architecture, invitations and role-based access, and custom-domain setup.",
    outcome:
      "A bilingual multi-tenant Flutter and Firebase app whose money-path tests refuse to touch anything but the emulators.",
    highlights: [
      "Multi-tenant architecture with admin, pastor, and staff roles",
      "Invitation workflows and hierarchical permissions",
      "124 Flutter tests; functions tests refuse to touch non-emulator projects",
    ],
    stack: ["Flutter", "Firebase", "Cloud Functions", "Dart"],
    image: "/work/pillr-cover.svg",
    repo: "https://github.com/kaanyen/Pillr",
    featured: false,
    tone: "wine",
  },
  {
    slug: "asr",
    title: "ASR lab",
    year: "2025",
    category: "Speech",
    summary:
      "RNN, GRU, BiLSTM, and attention ASR on AfriSpeech-200 (Twi) and LibriSpeech, reported in WER and CER.",
    metric: { value: "4", label: "recurrent model families benchmarked" },
    problem:
      "Most speech models learn from English audiobooks. How do standard recurrent architectures cope with Twi?",
    role:
      "Built the training pipelines and ran the benchmarks.",
    outcome:
      "WER and CER compared across vanilla RNN, attention RNN, GRU and BiLSTM, on AfriSpeech-200 Twi and on LibriSpeech.",
    highlights: [
      "CTC training on AfriSpeech-200 Twi",
      "MFCC and spectrogram feature extraction",
      "WER and CER across recurrent families",
    ],
    stack: ["PyTorch", "Torchaudio", "CTC", "Hugging Face"],
    image: "/work/asr-cover.svg",
    repo: "https://github.com/kaanyen/RNN_asr",
    featured: false,
    tone: "olive",
  },
  {
    slug: "ecodrone",
    title: "EcoDrone",
    year: "2025",
    category: "Robotics",
    summary:
      "Drone-based environmental monitoring with autonomous flight, CO₂ and temperature sensing.",
    problem:
      "Collecting environmental readings across an area by hand is slow and patchy. A drone on a set route covers it faster and more evenly.",
    role:
      "Team project. I wrote the autonomous flight logic, wired the CO₂ and temperature sensors to the Raspberry Pi, and ran flight operations.",
    outcome:
      "Autonomous flights on Parrot Olympe with live telemetry through QGroundControl and CO₂ and temperature readings taken in the air.",
    highlights: [
      "Autonomous flight on Parrot Olympe",
      "CO₂ and temperature sensing on Raspberry Pi",
      "Pixhawk 6C + QGroundControl telemetry",
    ],
    stack: ["Python", "Parrot Olympe", "Raspberry Pi", "Pixhawk"],
    image: "/work/ecodrone-cover.svg",
    featured: false,
    tone: "forest",
  },
];

export const ship: ShipItem[] = [
  {
    id: "agents",
    index: "01",
    title: "Agent platforms that stay fail-closed.",
    body: "I start from tenancy and secrets, then wire the model loop. Tool configs hold opaque refs. Cross-tenant resolution is rejected. Guardrail verdicts halt a turn instead of reaching the user. Adapters for Claude and DeepSeek handle the ugly 200-with-error case so retry and fallback actually fire.",
    metric: "Boafo Runtime · ~75 routing tests",
    pull: "Hallucination, scope, and unconfirmed-action failures escalate. They do not ship to the operator as a confident answer.",
    pullMeta: "SyneroLabs · Boafo",
    related: ["boafo"],
  },
  {
    id: "products",
    index: "02",
    title: "Products operators adopt and keep using.",
    body: "Business goal first, then the journey that moves it. G-Money ranks and explains; a human still closes the case. Crescendo sees the whole board before it speaks. Ticketing computes price on the server and refuses to oversell. The UI is a workspace, not a demo.",
    metric: "800 concurrent buyers · 0 oversell",
    pull: "The engine ranks and explains. It cannot freeze a wallet, block a payment, or file a report. Enforcement stays with the investigator.",
    pullMeta: "G-Money Fraud Operations",
    related: ["gmoney-fraud-ops", "crescendo", "boafo-ticketing"],
  },
  {
    id: "research",
    index: "03",
    title: "Models that hold under corruption and load.",
    body: "I evaluate under the conditions that actually break systems. Aligned vision-language models were scored against matched bases on ImageNet-C. U-Net was replicated across four medical datasets and then ablated. Speech models were trained on Twi, not only LibriSpeech.",
    metric: "Relative mCE 0.830 · CVPR 2026",
    pull: "Alignment paradigm predicted robustness change more than model scale — with a severity-dependent reversal under defocus blur.",
    pullMeta: "CVPR Workshops 2026",
    related: ["vlm-corruption", "unet", "asr"],
  },
  {
    id: "security",
    index: "04",
    title: "Architecture that can fund its own security.",
    body: "SABSA across six layers. STRIDE on POS, e-commerce, inventory, and payments for an 850-pharmacy, 9-country platform. Risk work that puts numbers on ransomware, breach, and GDPR — then picks controls with a return: $280K in vs $793K ALE down.",
    metric: "283% ROI on selected controls",
    pull: "Correctness lives in the type system and the tests. Capacity is single-writer. Money is integer pesewas. Writes without an Idempotency-Key fail CI.",
    pullMeta: "Boafo Ticketing · architectural tests",
    related: ["boafo-ticketing"],
  },
];

export const roles: Role[] = [
  {
    org: "SyneroLabs",
    location: "Accra",
    positions: [
      {
        title: "Software Engineering Intern — Full-Stack & Platform",
        dates: "Jun 2026 — Present",
        points: [
          "Boafo Runtime: encryption, tenant secrets, LangGraph guardrails, hardened model adapters",
          "Boafo App: insurance workspace and its case domain, front end to API",
          "Boafo Commerce: RBAC, tenancy, encrypted backups, internal support console",
          "Led UI/UX direction for the config-driven Project Workspace across Insurance, Logistics, OMC",
        ],
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Next.js 16",
      "React 19",
      "NestJS",
      "tRPC",
      "Prisma",
      "PostgreSQL",
    ],
    caseStudy: "boafo",
  },
  {
    org: "iSpace Foundation",
    location: "Accra",
    positions: [
      {
        title: "Video and Visual Department Lead",
        dates: "Jan 2025 — Aug 2025",
        points: [
          "Led social video, graphics, and photography for programs and campaigns",
          "Shot and edited event documentaries in Adobe Creative Suite",
          "Reported campaign impact across the African tech ecosystem",
        ],
      },
      {
        title: "Media Assistant",
        dates: "Mar 2021 — Dec 2024",
        points: [
          "Content, photography, and video for foundation programs over four years",
        ],
      },
    ],
    stack: [
      "Adobe Creative Suite",
      "Video production",
      "Photography",
      "Graphic design",
      "Social media",
    ],
  },
  {
    org: "Wode Maya",
    location: "Remote",
    positions: [
      {
        title: "Video Editor, Documentarian & Videographer",
        dates: "Feb 2025 — Aug 2025",
        points: [
          "Edited for Africa’s most-watched travel and documentary YouTube channel",
          "Color, sound, and motion design for platform-native formats",
        ],
      },
    ],
    stack: [
      "Color correction",
      "Sound mixing",
      "Motion design",
      "Storyboarding",
      "YouTube",
    ],
  },
  {
    org: "Brothers in Hue",
    location: "Ghana",
    positions: [
      {
        title: "Co-Founder & Media Specialist",
        dates: "Aug 2019 — Present",
        points: [
          "Co-founded a creative studio: photo, video, drone, motion, then web, 3D, VFX, and AR",
          "Ran client relationships, timelines, and creative direction",
        ],
      },
    ],
    stack: [
      "Photography",
      "Videography",
      "Drone media",
      "Motion design",
      "Web development",
      "3D animation",
      "VFX",
      "AR",
    ],
  },
  {
    org: "AirtelTigo",
    location: "Ghana",
    positions: [
      {
        title: "Tech Support",
        dates: "Jun 2018 — Aug 2018",
        points: [
          "Account provisioning, deactivation, and security monitoring on the operator platform",
        ],
      },
    ],
    stack: ["Account management", "Security monitoring"],
  },
];

export const education = [
  {
    school: "Ashesi University",
    degree: "MPhil, Intelligent Computing Systems",
    dates: "Expected May 2027",
    note: "AI, computer vision, NLP, software architecture, secure software, Agile",
  },
  {
    school: "Ashesi University",
    degree: "BSc, Computer Science",
    dates: "May 2021",
    note: "Data structures, algorithms, web, mobile, software engineering",
  },
];

export const writing = [
  {
    title:
      "Do Safety-Aligned Vision-Language Models Degrade Differently Under Common Image Corruptions?",
    venue: "CVPR 2026 Workshops · Generative Models for Computer Vision",
    authors: "P. Mireku, K.-A. Attah-Anyen, A. Nartey, N. Nanka-Bruce, B. Blankson",
    // How my name appears in the author list, so it can be highlighted.
    you: "K.-A. Attah-Anyen",
    href: "https://generative-vision.github.io/workshop-CVPR-26/papers/21.pdf",
    finding: {
      value: "17%",
      label: "fewer corruption errors with MPO alignment (relative mCE 0.830)",
    },
    caseStudy: "vlm-corruption",
    bibtex: `@inproceedings{mireku2026safetyaligned,
  title     = {Do Safety-Aligned Vision-Language Models Degrade Differently Under Common Image Corruptions?},
  author    = {Mireku, P. and Attah-Anyen, K.-A. and Nartey, A. and Nanka-Bruce, N. and Blankson, B.},
  booktitle = {IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, Workshop on Generative Models for Computer Vision},
  year      = {2026},
  url       = {https://generative-vision.github.io/workshop-CVPR-26/papers/21.pdf}
}`,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
};

// Real quotes only, used with the person's permission. The homepage section
// stays hidden while this list is empty. Shape of an entry:
// { quote: "What they said.", name: "Their name", role: "Their title", org: "SyneroLabs" },
export const testimonials: Testimonial[] = [];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function featuredProjects() {
  return projects.filter((project) => project.featured);
}

export function isStill(src: string) {
  return /\.(png|jpe?g|webp|avif)$/i.test(src);
}

export function projectStills(project: Project) {
  const all = project.images?.length ? project.images : [project.image];
  return all.filter(isStill);
}
