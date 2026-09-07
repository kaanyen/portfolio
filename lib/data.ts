export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
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

export type Role = {
  org: string;
  title: string;
  dates: string;
  location: string;
  points: string[];
};

export type Org = {
  name: string;
  aliases?: string[];
  logo?: string;
  logoWidth?: string;
  logoHeight?: string;
  mark?: string;
  markWidth?: string;
};

export const orgs: Org[] = [
  {
    name: "SyneroLabs",
    logo: "/orgs/synerolabs.png",
    logoWidth: "8rem",
    mark: "/orgs/synerolabs-mark.svg",
    markWidth: "1.35rem",
  },
  {
    name: "Ashesi",
    aliases: ["Ashesi University"],
    logo: "/orgs/ashesi.png",
    logoWidth: "8.5rem",
    mark: "/orgs/ashesi-mark.png",
    markWidth: "1.45rem",
  },
  { name: "CVPR", logo: "/orgs/cvpr.svg", logoWidth: "6.9rem" },
  {
    name: "iSpace Ghana",
    aliases: ["iSpace", "iSpace Foundation"],
    logo: "/orgs/ispace.png",
    logoWidth: "7rem",
  },
  { name: "Wode Maya", logo: "/orgs/wodemaya.png", logoWidth: "8.2rem" },
  {
    name: "Afrique Créative",
    aliases: ["Afrique Creative"],
    logo: "/orgs/afrique.png",
    logoWidth: "9.9rem",
  },
  {
    name: "AFD",
    aliases: ["Agence Française de Développement"],
    logo: "/orgs/afd.png",
    logoWidth: "3.4rem",
  },
  {
    name: "Crossroads International",
    aliases: ["Crossroad Internationals", "Crossroads"],
    logo: "/orgs/crossroads.png",
    logoWidth: "8.1rem",
  },
  { name: "RISA", logo: "/orgs/risa.png", logoWidth: "4.4rem" },
  {
    name: "GIZ",
    aliases: ["Giz", "Deutsche Gesellschaft für Internationale Zusammenarbeit"],
    logo: "/orgs/giz.svg",
    logoWidth: "6.5rem",
  },
  {
    name: "German Cooperation",
    aliases: ["German Coorepation", "Deutsche Zusammenarbeit"],
    logo: "/orgs/german-cooperation.png",
    logoWidth: "4.2rem",
    logoHeight: "2.45rem",
  },
  { name: "Ostec", aliases: ["ostec"], logo: "/orgs/ostec.png", logoWidth: "7.4rem" },
  { name: "Auorae", aliases: ["Auoráe"], logo: "/orgs/auorae.png", logoWidth: "5.9rem" },
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
    description:
      "At SyneroLabs I work across Boafo Runtime and Boafo App. The runtime is a Python / FastAPI / LangGraph engine: tenant-scoped secrets, at-rest Fernet encryption, and post-generation guardrails wired into the live loop so hallucination, scope, and unconfirmed-action failures halt or escalate a turn. The app is a Next.js 16 / React 19 insurance case workspace — case list, six-panel workspace, docked chat, inbox, approval and reversal — with industry verticals as config so Insurance and OMC share one component set. The case domain moved off fixtures onto PostgreSQL, Prisma, NestJS, and tRPC, with a platform-staff grant that does not weaken Membership-scoped access.",
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
    description:
      "G-Money Fraud Operations is an investigator workspace for a fraud-investigation decision-support pilot. The engine ranks mobile-money alerts and explains why they ranked. Every enforcement decision stays with a human — the prototype cannot freeze wallets, block transactions, suspend agents, or file reports. The cohort is eight de-identified Ghana MoMo alerts across structuring, mule fan-out, and P2P layering. A four-eyes path, audit trail, and shadow-pilot dashboard measure explanation coverage and triage time.",
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
    description:
      "Built for the Opus 4.7 Hackathon. Crescendo’s Board-State Awareness Engine injects team workloads, skill profiles, blocked tasks, sprint health, and dependency chains into every AI call. Five read tools retrieve detail the snapshot cannot carry. Fifteen write tools may only propose a change; nothing is written until a person confirms it. Assigning work to a member at burnout risk returns HTTP 409 until Overdrive is acknowledged and recorded.",
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
    description:
      "First controlled base-vs-aligned evaluation of vision-language models under the ImageNet-C corruption suite, across four matched model pairs and three alignment paradigms (MPO, instruction tuning, SFT+RLHF). We identified and corrected a verbosity-scoring mismatch that biases standard VQA exact-match metrics against aligned models, and showed that alignment paradigm is a stronger predictor of robustness change than model scale — with a severity-dependent reversal under defocus blur. MPO alignment reduced corruption errors by 17% (Relative mCE: 0.830).",
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
    description:
      "A Turborepo with a NestJS public API, Next.js organizer dashboard, and embeddable Next.js checkout on Prisma, PostgreSQL, Redis, and BullMQ. Correctness is enforced in code: single-writer capacity, server-side price computation, integer-pesewa money, and a mandatory Idempotency-Key on writes — architectural tests fail CI when the rules break. Paystack for card and mobile money, HMAC-signed QR tickets, an offline-capable phone scanner, refunds, transfers, and a sold-out waitlist. Load-tested an on-sale (800 concurrent buyers, 100 tickets, zero oversell) and caught a reverse-proxy rate-limit that would have rejected real buyers after ~8 requests.",
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
    description:
      "A clean PyTorch replication of U-Net for biomedical image segmentation, evaluated on ISBI electron microscopy, BUSI ultrasound, MSD Spleen CT, and MSD Hippocampus MRI. Dice scores: 0.864 (ISBI), 0.864 (BUSI), 0.971 (Spleen), 0.909 (Hippocampus). An ablation showed skip connections are critical for small structures — tumor Dice dropped 15.9% without them.",
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
    description:
      "MediVoice is a healthcare application for clinical consultation transcription. An ASR pipeline captures doctor-patient conversation in real time. A NER layer extracts medical entities — symptoms, diagnoses, medications — with domain adaptation for specialized vocabulary.",
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
    description:
      "Pillr is a multi-tenant church partnership management system. Hierarchical permissions, invitation workflows, and domain configuration sit on Flutter and Firebase. The app ships English and French. Test suite: 124 app tests plus Cloud Functions tests on the money path against emulators.",
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
    description:
      "Automatic speech recognition pipelines in PyTorch and Torchaudio. Models include vanilla RNNs, attention-based RNNs, GRUs, and bidirectional LSTMs. Audio preprocessing uses MFCC and spectrogram features. One track trains on AfriSpeech-200 (Twi) with CTC loss; another benchmarks on LibriSpeech.",
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
    description:
      "Collaborative drone system for aerial environmental data collection. Autonomous flight logic on the Parrot Olympe SDK, temperature and CO₂ sensors on a Raspberry Pi companion computer, Pixhawk 6C controllers, QGroundControl, and real-time telemetry.",
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
    title: "Software Engineering Intern — Full-Stack & Platform",
    dates: "Jun 2026 — Present",
    location: "Accra",
    points: [
      "Boafo Runtime: encryption, tenant secrets, LangGraph guardrails, hardened model adapters",
      "Boafo App: insurance workspace in Next.js 16 / React 19, Prisma / NestJS / tRPC case domain",
      "Boafo Commerce: RBAC, tenancy, encrypted backups, internal support console",
      "Led UI/UX direction for the config-driven Project Workspace across Insurance, Logistics, OMC",
    ],
  },
  {
    org: "iSpace Foundation",
    title: "Video and Visual Department Lead",
    dates: "Jan 2025 — Aug 2025",
    location: "Accra",
    points: [
      "Led social video, graphics, and photography for programs and campaigns",
      "Shot and edited event documentaries in Adobe Creative Suite",
      "Reported campaign impact across the African tech ecosystem",
    ],
  },
  {
    org: "Wode Maya",
    title: "Video Editor, Documentarian & Videographer",
    dates: "Feb 2025 — Aug 2025",
    location: "Remote",
    points: [
      "Edited for Africa’s most-watched travel and documentary YouTube channel",
      "Color, sound, and motion design for platform-native formats",
    ],
  },
  {
    org: "iSpace Foundation",
    title: "Media Assistant",
    dates: "Mar 2021 — Dec 2024",
    location: "Accra",
    points: [
      "Content, photography, and video for foundation programs over four years",
    ],
  },
  {
    org: "Brothers in Hue",
    title: "Co-Founder & Media Specialist",
    dates: "Aug 2019 — Present",
    location: "Ghana",
    points: [
      "Co-founded a creative studio: photo, video, drone, motion, then web, 3D, VFX, and AR",
      "Ran client relationships, timelines, and creative direction",
    ],
  },
  {
    org: "AirtelTigo",
    title: "Tech Support",
    dates: "Jun 2018 — Aug 2018",
    location: "Ghana",
    points: [
      "Account provisioning, deactivation, and security monitoring on the operator platform",
    ],
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
    href: "https://generative-vision.github.io/workshop-CVPR-26/papers/21.pdf",
  },
];

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
