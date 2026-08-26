/**
 * Copy aligned to live founderbeinglaunchpad.com (Aug 2026).
 * Local V3 shell only — visual system stays Elon-mode; facts match live.
 * Snapshot: not wired to Supabase; update when live cohort facts change.
 */

export const SITE = {
  name: "Founder-Being LaunchPad",
  short: "LaunchPad",
  tagline: "16 Weeks. 16 Modules. One Venture.",
  supportEmail: "hello@founderbeinglaunchpad.com",
  liveApplyUrl: "https://www.founderbeinglaunchpad.com/apply",
} as const;

export const COHORT = {
  label: "Cohort 1",
  status: "Applications open",
  deadline: "13 September 2026",
  start: "4 October 2026",
  duration: "16 weeks",
  weeklySessionHours: 4,
  mode: "In person",
  city: "Kochi, Kerala, India",
  venue: "KSUM, Kalamassery, Kochi, Kerala, India",
  seats: "20 participants",
  fee: "₹30,000",
  commitment: "Weekly learning, assignments, and mentor touchpoints across 16 weeks.",
  age: "Primarily ages 15–25",
  scheduleNote:
    "Weekly session timing is published in cohort facts when confirmed. Unconfirmed details are clearly marked and updated once approved.",
} as const;

export const HOME = {
  heroEyebrow: "Applications open",
  heroTitle: "Don't study startups. Build one.",
  heroSupport:
    "A 16-week venture-building programme where young builders test an idea, talk to customers, build an MVP and discover what is worth building next.",
  heroLead:
    "A 16-week, execution-led programme for young builders ready to test a real problem, idea or proposed solution—and turn evidence into a credible venture direction.",
  heroPoints: [
    "Practical building",
    "Mentor feedback",
    "Customer evidence",
    "MVP development",
    "Demo Day",
  ],
  ctaPrimary: "Express interest →",
  ctaSecondary: "Explore the programme →",
  freeLine: "Free to submit · No payment now · Admission is not guaranteed",
  whoTitle: "Who this is for and entry readiness",
  whoLead: `${SITE.name} is a practical, execution-led, 16-week venture-building programme for ${COHORT.age}, including school students, college students and young founders. It is not a general idea-discovery course for someone starting completely from zero, not a classroom-only entrepreneurship course, and not a generic accelerator or motivational bootcamp.`,
  whoCards: [
    {
      title: "You have a problem, idea or proposed solution to test",
      body: "You are not starting from zero curiosity alone — you have at least one direction worth validating with evidence and execution.",
    },
    {
      title: "You are already experimenting",
      body: "You may have a side project, campus initiative or early venture and want mentor feedback, founder discipline and structured progress.",
    },
    {
      title: "You are ready for real founder work",
      body: "You can commit to customer conversations, fieldwork, build assignments and peer accountability — not passive watching.",
    },
    {
      title: "You can commit for 16 weeks",
      body: "You can show up consistently for sessions, assignments and mentor touchpoints through Demo Day.",
    },
  ],
  whoNote:
    "An existing company or technical background is not required. You do need at least one problem, idea, proposed solution or credible alternative you want to test. LaunchPad does not guarantee venture success, launch, fundraising, investor access or admission.",
  buildTitle: "What you will build",
  buildLead:
    "LaunchPad is about evidence and founder artefacts — not classroom-only learning. Depending on your starting point and how you execute, you may produce some or all of the following across the 16 weeks:",
  outputs: [
    "Founder thesis and problem statement",
    "Customer interview evidence",
    "Validation report and go/modify/pivot decision",
    "Market and competitor map",
    "Business model and value proposition",
    "User journey and wireframes",
    "MVP or structured proof of concept",
    "Brand positioning and founder story",
    "Marketing experiment",
    "Sales process and early pipeline",
    "Unit-economics and cash-flow model",
    "Demo Day presentation",
    "Post-programme 90-day action plan",
  ],
  outputsNote:
    "Not every participant reaches the same venture stage by Demo Day. Outputs depend on your starting point, the evidence you gather and how consistently you execute.",
  journeyTitle: "The 16-week journey",
  journeyLead:
    "Four connected phases — from possibility to venture readiness. Each module centres on a founder question, practical work and an artefact you can show mentors and peers. Professional communication, research discipline, founder wellbeing and responsible AI use run across the programme.",
  journeyCrossCuts: [
    "Professional communication and email discipline",
    "Research discipline and evidence standards",
    "Founder wellbeing and reflection",
    "Responsible AI use across modules",
  ],
  phases: [
    { name: "Discover", blurb: "Find a problem worth solving and evidence that matters." },
    { name: "Design and Build", blurb: "Shape a solution, MVP and early brand." },
    { name: "Find the Market", blurb: "Go-to-market, customers, retention and growth loops." },
    { name: "Become Venture-Ready", blurb: "Finance, legal, pitch and Demo Day." },
  ],
  rhythmTitle: "How each week works",
  rhythmLead: `One focused ${COHORT.weeklySessionHours}-hour working session each week — built around practical workshops, fieldwork and mentor feedback. The programme is digitally supported through progress tracking and mentor feedback; live delivery format comes from published cohort data. This is execution-led venture building, distinct from the wider Founder-Being community.`,
  rhythmItems: [
    "One focused working session",
    "Practical workshop",
    "Customer or market fieldwork",
    "Build assignment",
    "Mentor review",
    "Peer feedback and accountability",
    "Progress tracking",
    "Founder reflection and wellbeing check-in",
    "Next-week commitment",
  ],
  mentorsTitle: "Mentor and support model",
  mentorsLead:
    "You are not building alone — but we are honest about what support includes. This is structured programme facilitation and feedback, not unlimited private mentoring.",
  mentors: [
    {
      title: "Programme facilitator",
      body: "Keeps the cohort on rhythm, connects themes across modules and holds the venture-building arc together.",
    },
    {
      title: "Module specialists and mentors",
      body: "Subject-matter guidance on discovery, product, market, finance and pitch — structured, not unlimited one-to-one.",
    },
    {
      title: "Structured assignment feedback",
      body: "Assignments and milestones reviewed against clear expectations so you know what to improve next.",
    },
    {
      title: "Peer cohort",
      body: "Young founders learning alongside you — sharing progress, questions and accountability.",
    },
    {
      title: "Progress reviews",
      body: "Periodic check-ins on evidence, artefacts and momentum so you stay oriented toward Demo Day.",
    },
    {
      title: "Demo Day preparation",
      body: "Structured rehearsal and feedback on your evidence-backed story and presentation.",
    },
    {
      title: "Founder-Being community connection",
      body: "Connection to the wider Founder-Being ecosystem only where approved and relevant for your stage — distinct from LaunchPad itself.",
    },
  ],
  feeTitle: "Fee and inclusions",
  feeLead:
    "Submitting an Expression of Interest and taking the preliminary assessment are free. Payment is requested only after you receive and accept a formal selection offer.",
  feeAmount: "₹30,000 per participant",
  feeIncludes:
    "Weekly learning sessions, assignments, mentor support, progress tracking, and Demo Day preparation.",
  feeTax: "Applicable taxes, if any, will be disclosed before payment.",
  feePayment: "Payment is requested only after a candidate is selected and accepts an offer.",
  feeTermsNote:
    "Complete payment terms, including any refund policy, will be supplied before payment is requested.",
  admissionTitle: "Complete admission journey",
  admissionLead:
    "Submitting an Expression of Interest is free — no payment is collected at this stage. An EOI is not a completed programme application and does not guarantee admission.",
  admissionStages: [
    "Expression of Interest",
    "Programme Review",
    "Starter Kit + Founder Assessment",
    "Founder Conversation + Decision",
    "Offer + Join the Cohort",
  ],
  admissionSteps: [
    "Submit the free Expression of Interest",
    "Programme team reviews the EOI",
    "Invited candidates receive the Starter Kit and assessment instructions",
    "Complete the preliminary founder-readiness assessment",
    "Programme team reviews the assessment",
    "Shortlisted candidates attend a founder conversation or interview",
    "Receive selection, waitlist or non-selection communication",
    "Selected candidates receive the formal offer",
    "Complete consent, guardian requirements where applicable, and payment",
    "Complete onboarding and baseline assessment",
    "Begin the 16-week programme",
    "Present at Demo Day and leave with a 90-day action plan",
  ],
  deadlineNotice: `DEADLINE EXTENDED · Applications now close ${COHORT.deadline}`,
  placeTitle: "Kochi is where we begin.",
  placeLead: `In person · ~20 founders · Ages 15–25 · Venue: ${COHORT.venue.split(",")[0]} when published.`,
  finalCtaEyebrow: "NEXT ACTION",
  finalCtaTitle: "Free EOI. ~5 minutes. No payment.",
  finalCtaButton: "Express interest →",
} as const;

export const APPLY = {
  eyebrow: `COHORT 1 · Kochi · ${COHORT.status.toUpperCase()}`,
  title: "Take the first step.",
  lead: "Tell us who you are, what you care about, and what you hope to build.",
  deadlineLine: `Applications close ${COHORT.deadline}`,
  chips: ["Free to submit", "No payment at this stage", "Admission is not guaranteed"],
  liveCta: "Start EOI on live site →",
  liveNote: "If approved, you’ll receive secure Starter Kit access. The detailed assessment follows separately when invited.",
  stats: [
    { k: "16 Weeks", v: "Build consistently" },
    { k: "16 Modules", v: "From problem to pitch" },
    { k: "20 Seats", v: "Focused cohort" },
    { k: "Kochi", v: "In-person programme" },
  ],
  jimmyTitle: "Built by someone who has actually built.",
  jimmyName: "Jimmy James",
  jimmyRole: "Founder & Programme Lead",
  jimmyHook: "Founder of Plantshop.ae — backed by 500 Global",
  jimmyBio: [
    "Jimmy is a startup founder and e-commerce operator with more than a decade of hands-on experience building companies in the UAE. He founded Plantshop.ae, which received investment from 500 Global — then 500 Startups — in 2018.",
    "His founder journey has included fundraising, product building, customer acquisition, operations, growth, pivots and the realities of sustaining a startup over the long term.",
    "His founder education has also included Y Combinator's Startup School, alongside accelerator and ecosystem programmes.",
    "Founder-Being LaunchPad was created to compress those hard-earned lessons into a practical 16-week journey for younger founders — helping them learn by building instead of waiting years to learn everything the expensive way.",
  ],
  proof: [
    "Founder experience",
    "Plantshop backed by 500 Global",
    "YC Startup School",
    "Sheraa Accelerator Alumni",
    "Deloitte Technology Fast 50 Middle East",
  ],
  proofNote:
    "Founder experience and education. These organisations are not sponsors or partners of Founder-Being LaunchPad unless separately stated.",
  applyingForTitle: "What you're actually applying for",
  applyingForLead:
    "This is not another entrepreneurship certificate. You will work on your own venture through customer discovery, validation, product, market, sales, finance and Demo Day.",
  needNot: [
    "a registered company",
    "a technical background",
    "a polished pitch deck",
    "all the answers",
  ],
  needYes: [
    "something you want to test",
    "curiosity",
    "willingness to talk to customers",
  ],
} as const;

export const FAQ = [
  {
    q: "Who is the programme for?",
    a: "Founder-Being LaunchPad is designed primarily for ambitious young builders aged 15–25 — including high-school students, college students, recent graduates and first-time founders. It is execution-led venture building, distinct from the wider Founder-Being community.",
  },
  {
    q: "Do I need a problem or startup idea already?",
    a: "Yes — at least one direction to test. You should have a problem, idea, proposed solution or credible alternative you want to validate. LaunchPad is not a general idea-discovery course for someone starting completely from zero.",
  },
  {
    q: "Do I need a company or technical background?",
    a: "No. An existing company, polished pitch deck or technical background is not required. You do need willingness to do customer conversations, fieldwork and weekly build assignments.",
  },
  {
    q: "What is the weekly commitment?",
    a: `The programme runs for ${COHORT.duration} with one focused ${COHORT.weeklySessionHours}-hour working session each week, plus assignments, fieldwork and mentor feedback. ${COHORT.commitment}`,
  },
  {
    q: "What is the delivery format?",
    a: "An execution-led venture-building cohort — workshops, build assignments, customer or market fieldwork, peer accountability and Demo Day preparation. Progress tracking and mentor feedback are digitally supported; live delivery format is published in cohort facts when confirmed.",
  },
  {
    q: "What does it cost and when do I pay?",
    a: "Expression of Interest and the preliminary assessment are free. The programme fee is ₹30,000 per participant, requested only after you are selected and accept a formal offer. Applicable taxes, if any, are disclosed before payment. Complete payment terms are supplied before payment is requested.",
  },
  {
    q: "What happens after I submit an Expression of Interest?",
    a: "The programme team reviews your EOI. If you are invited forward, you receive the Starter Kit and assessment instructions. After assessment review, shortlisted candidates may attend a founder conversation or interview before a final outcome.",
  },
  {
    q: "Is the preliminary assessment pass/fail?",
    a: "No. The assessment establishes your baseline across 16 modules. It supports curriculum planning and interview preparation — it is not the sole basis for rejection.",
  },
  {
    q: "What if I am under 18?",
    a: "Participants under 18 provide guardian contact details in the EOI. Guardian consent is required before assessment access and progression — separate from the candidate's application consent.",
  },
  {
    q: "Does expressing interest guarantee admission?",
    a: "No. LaunchPad uses a structured selection process. Your Expression of Interest starts the journey; admission depends on holistic review including motivation, fit and interview where applicable. The programme does not guarantee admission, venture success, launch, fundraising or investor access.",
  },
  {
    q: "What will participants build?",
    a: "Evidence and founder artefacts — interview notes, validation reports, wireframes or prototypes, marketing experiments, financial models, legal checklists and a Demo Day pitch. Final outputs depend on each participant's starting point and execution; not everyone reaches the same stage by week 16.",
  },
  {
    q: "What if cohort dates or venue are not confirmed yet?",
    a: "Unconfirmed details are clearly marked and updated once approved.",
  },
  {
    q: "How do I get support or request accessibility help?",
    a: `Email ${SITE.supportEmail} for programme questions, accessibility requests or EOI support. Quote your application reference after submitting an Expression of Interest.`,
  },
] as const;

export const NAV = [
  { href: "/programme", label: "Programme" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/programme/how-it-works", label: "How It Works" },
  { href: "/stories", label: "Stories" },
  { href: "/cohort", label: "Cohort" },
] as const;

export const NAV_MORE = [
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
  { href: "/faq", label: "FAQ" },
] as const;

export const WEEK_LOOP = [
  {
    name: "Learn",
    body: "One focused working session and a practical workshop.",
  },
  {
    name: "Test",
    body: "Customer or market fieldwork that produces evidence.",
  },
  {
    name: "Build",
    body: "A build assignment that moves your venture forward.",
  },
  {
    name: "Review",
    body: "Mentor review plus peer feedback and accountability.",
  },
  {
    name: "Decide",
    body: "Progress tracking, founder reflection, and a next-week commitment.",
  },
] as const;

export const MODULES = [
  {
    phase: "Discover",
    phaseBlurb: "Find a problem worth solving and evidence that matters.",
    items: [
      {
        n: "01",
        title: "Founder Mindset & Problem Selection",
        question: "What problem is worth your time — and how will you test that honestly?",
        do: "Frame assumptions, choose a problem space and define what evidence would change your mind.",
        artefact: "Founder thesis and problem statement",
        outcome: "Frame problems with evidence, challenge assumptions, and adopt a learning-first founder mindset.",
      },
      {
        n: "02",
        title: "Customer Discovery",
        question: "Who experiences this problem and how do you learn from them without leading the witness?",
        do: "Plan and run customer conversations; capture pains, behaviours and quotes.",
        artefact: "Customer interview evidence",
        outcome: "Design customer interviews and translate observations into actionable insights.",
      },
      {
        n: "03",
        title: "Idea Validation",
        question: "What is the smallest test that proves or disproves your core assumption?",
        do: "Design validation experiments, gather structured evidence and decide go, modify or pivot.",
        artefact: "Validation report and go/modify/pivot decision",
        outcome: "Design validation experiments and make evidence-based go, modify or pivot decisions.",
      },
      {
        n: "04",
        title: "Business Model & Value Proposition",
        question: "Who is this for, why you, and how might it create value?",
        do: "Define positioning, differentiation and a testable business model canvas.",
        artefact: "Business model and value proposition",
        outcome: "Define a clear value proposition and testable business model for an initial segment.",
      },
    ],
  },
  {
    phase: "Design and Build",
    phaseBlurb: "Turn insight into something people can react to.",
    items: [
      {
        n: "05",
        title: "Market Research & Competition",
        question: "How big is the opportunity and who else serves this need?",
        do: "Map alternatives, segment the market and choose where to start.",
        artefact: "Market and competitor map",
        outcome: "Segment markets and analyse competitors to choose a focused starting point.",
      },
      {
        n: "06",
        title: "Wireframing & User Experience",
        question: "How will someone experience your solution end to end?",
        do: "Prioritise features, map user journeys and produce wireframes others can react to.",
        artefact: "User journey and wireframes",
        outcome: "Map user journeys and prioritise features into testable wireframes.",
      },
      {
        n: "07",
        title: "MVP & Prototyping",
        question: "What is the smallest useful version you can put in front of users?",
        do: "Build, ship and gather structured feedback on your proof of concept.",
        artefact: "MVP or structured proof of concept",
        outcome: "Scope an MVP that tests the riskiest assumption with measurable learning.",
      },
      {
        n: "08",
        title: "AI for Founders",
        question: "How can responsible AI accelerate research, prototyping and iteration — without replacing judgment?",
        do: "Apply AI tools with clear prompts, verification and documentation across build assignments.",
        artefact: "Responsible AI workflow",
        outcome: "Apply AI tools with verification, documentation and ethical boundaries in venture work.",
      },
    ],
  },
  {
    phase: "Find the Market",
    phaseBlurb: "Reach people, learn from traction and keep them coming back.",
    items: [
      {
        n: "09",
        title: "Branding & Storytelling",
        question: "Why should your ideal customer care — and remember you?",
        do: "Define positioning, narrative and consistent brand signals.",
        artefact: "Brand positioning and founder story",
        outcome: "Define positioning and brand consistency for an ideal customer.",
      },
      {
        n: "10",
        title: "Marketing & Customer Acquisition",
        question: "Which channel and message will you test first?",
        do: "Plan and run a measurable acquisition experiment.",
        artefact: "Marketing experiment",
        outcome: "Plan channel-appropriate campaigns with clear objectives and measurement.",
      },
      {
        n: "11",
        title: "Sales & Negotiation",
        question: "How will you qualify, convert and learn from early customers?",
        do: "Build a simple sales motion with outreach, qualification and follow-up discipline.",
        artefact: "Sales process and early pipeline",
        outcome: "Design an early sales motion with outreach, qualification, and conversion steps.",
      },
      {
        n: "12",
        title: "CRM, Retention & Referrals",
        question: "How will you onboard users and earn recommendations?",
        do: "Structure lifecycle stages, retention habits and referral loops.",
        artefact: "CRM, retention and referral foundations",
        outcome: "Structure CRM stages and improve activation, retention, and lifecycle communication.",
      },
    ],
  },
  {
    phase: "Become Venture-Ready",
    phaseBlurb: "Finance, governance, funding narrative and Demo Day.",
    items: [
      {
        n: "13",
        title: "Startup Finance & Unit Economics",
        question: "Do the numbers work — and what would break them?",
        do: "Distinguish profit from cash, forecast runway and stress-test assumptions.",
        artefact: "Unit-economics and cash-flow model",
        outcome: "Distinguish P&L from cash flow and forecast runway with scenarios.",
      },
      {
        n: "14",
        title: "Legal Foundations & Intellectual Property",
        question: "What legal and IP questions must you answer before you scale?",
        do: "Identify entity, contract, privacy and IP steps; know when to seek counsel.",
        artefact: "Legal and IP readiness checklist",
        outcome: "Identify when to seek legal advice on entities, contracts, compliance, and IP.",
      },
      {
        n: "15",
        title: "Fundraising & Investor Relations",
        question: "What traction story would a thoughtful investor need to see?",
        do: "Prepare metrics, risks, updates and a clear fundraising narrative.",
        artefact: "Investor narrative",
        outcome: "Communicate traction, risks, and fundraising needs to investors.",
      },
      {
        n: "16",
        title: "Go-to-Market, Pitching & Demo Day",
        question: "What is your evidence-backed story and specific ask?",
        do: "Structure the pitch, rehearse the demo and present at Demo Day.",
        artefact: "Investor narrative and pitch deck; Demo Day presentation",
        outcome: "Structure a pitch narrative with evidence, demo, and a clear ask.",
      },
    ],
  },
] as const;

export const OUTPUT_PHASES = [
  {
    name: "Discover",
    items: [
      "Founder thesis and problem statement",
      "Customer interview evidence",
      "Validation report and go/modify/pivot decision",
      "Market and competitor map",
    ],
  },
  {
    name: "Design & Build",
    items: [
      "Business model and value proposition",
      "User journey and wireframes",
      "MVP or structured proof of concept",
      "Responsible AI workflow",
    ],
  },
  {
    name: "Find the Market",
    items: [
      "Brand positioning and founder story",
      "Marketing experiment",
      "Sales process and early pipeline",
      "CRM, retention and referral foundations",
    ],
  },
  {
    name: "Become Venture-Ready",
    items: [
      "Unit-economics and cash-flow model",
      "Legal and IP readiness checklist",
      "Investor narrative and pitch deck",
      "Demo Day presentation",
      "Post-programme 90-day action plan",
    ],
  },
] as const;

export const TOOLS = [
  { name: "ChatGPT", use: "AI thinking / reasoning" },
  { name: "Claude", use: "AI thinking / reasoning" },
  { name: "Perplexity", use: "Research" },
  { name: "Cursor", use: "AI-assisted building" },
  { name: "Figma", use: "Product / UX" },
  { name: "Canva", use: "Brand / content" },
  { name: "Google Sheets", use: "Modelling" },
] as const;

export const STORIES = [
  {
    kind: "Founder Story",
    title: "Jimmy’s founder journey",
    body: [
      "Jimmy James is a startup founder and e-commerce operator with more than a decade of hands-on experience building companies in the UAE.",
      "He founded Plantshop.ae, which received investment from 500 Global — then 500 Startups — in 2018. The path included fundraising, product building, customer acquisition, operations, growth, pivots and the realities of sustaining a company over the long term.",
      "Founder education along the way included Y Combinator’s Startup School and accelerator programmes. Those years are the source material for LaunchPad — not a theory of startups, but the work of actually building one.",
    ],
  },
  {
    kind: "Building Note",
    title: "What building Plantshop taught him",
    body: [
      "Plantshop was not a classroom case study. It was a live company: suppliers, customers, cash, delivery, and the gap between a plan and what people actually buy.",
      "The lasting lesson is practical. Talk to customers before you over-build. Treat evidence as the product of a week’s work. Keep moving when the first version is wrong.",
      "LaunchPad puts that operating rhythm around a founder’s own venture so younger builders do not have to wait a decade to learn it the expensive way.",
    ],
  },
  {
    kind: "Founder Story",
    title: "The cost of waiting",
    body: [
      "Most first-time founders do not fail from a lack of ambition. They stall — researching, polishing, waiting for a perfect idea or a safer moment.",
      "Waiting has a cost. You do not collect customer evidence. You do not learn what to kill. You do not find out whether you will actually do the work.",
      "LaunchPad is built for people who are ready to test something now: a problem, an idea, or a proposed solution. The Expression of Interest is free. Admission is selective.",
    ],
  },
  {
    kind: "Community Story",
    title: "Founder-Being meetup stories",
    body: [
      "Founder-Being meetups are where builders compare notes, share mistakes and stay in motion. They are community gatherings — not the LaunchPad curriculum.",
      "Those rooms made the gap obvious: young founders needed a structured way to test a real venture, not only a place to talk about one.",
      "LaunchPad is the programme that followed. The community remains distinct. Connection to it is offered only where it is approved and relevant.",
    ],
  },
  {
    kind: "Founder Story",
    title: "Why LaunchPad was created",
    body: [
      "LaunchPad exists because studying startups is not the same as building one. Young founders need a place to test an idea, talk to customers, build an MVP and decide what is worth doing next.",
      "The programme is execution-led: workshops, fieldwork, assignments, mentor feedback and founder accountability around your own venture.",
      "It is not a general idea-discovery course, not a classroom-only certificate, and not a promise that you will launch or raise. It is 16 weeks of founder work.",
    ],
  },
] as const;

export const PRESS = [
  {
    slug: "founder-being-launchpad-vision-building-founders",
    date: "23 Aug 2026",
    title: "Founder-Being LaunchPad Sets Out to Build Founders Who Learn by Building",
    dek: "Founder-Being LaunchPad is building a new model of entrepreneurship education for young founders aged 15–25: learn by building, testing and gathering real market evidence instead of spending months studying startup theory.",
    body: [
      "Traditional entrepreneurship education can teach terminology, frameworks, business models and case studies. Building something is different.",
      "A founder has to decide which problem is worth solving, talk to people who may not care about the solution, discover that an assumption was wrong, change direction, build something imperfect, put it in front of real users, and learn from what happens.",
      "Founder-Being LaunchPad is structured around execution rather than information consumption. Participants are expected to move through the programme by producing evidence — not “I learned customer discovery,” but “I spoke to potential customers and discovered what they actually struggle with.”",
      "The programme was created by Jimmy James, founder of Plantshop.ae. The most valuable lessons were rarely the ones somebody could have explained on a slide. They were understood after building something, making mistakes and dealing with the consequences.",
      "The objective is not that every participant leaves with a fully scaled startup after 16 weeks. The objective is evidence: that customers care, that they do not, that the solution needs to change, or that the founder should stop and pursue a better idea.",
      "A central philosophy: the founder is the real MVP. Products, markets, technology and models change. The founder has to develop the judgement and resilience to change with them.",
      "Kochi is the starting point — a focused first cohort of about 20 founders, not a mass-learning course. The question LaunchPad wants young builders asking is: “What can I build this week?”",
    ],
  },
  {
    slug: "cohort-1-applications-close-25-august-2026",
    date: "11 Aug 2026",
    title: "Founder-Being LaunchPad Cohort 1 applications close on 25 August 2026",
    dek: "Expression of Interest for Founder-Being LaunchPad Cohort 1 originally closed on 25 August 2026. The deadline has since been extended. Current close date is 13 September 2026.",
    body: [
      "Expression of Interest for Founder-Being LaunchPad Cohort 1 was originally announced to close on 25 August 2026. Applications have since been extended and now close 13 September 2026.",
      "The 16-week, execution-led programme for young founders aged 15–25 is in person in Kochi, Kerala, India. Fee is ₹30,000 — payable only after selection and offer acceptance.",
      "Visit /apply to submit a free Expression of Interest before the deadline.",
    ],
  },
] as const;

export const ABOUT = {
  title: "Build the founder, not just the startup.",
  whyExistsTitle: "Why Founder-Being exists",
  whyExists:
    "Founder-Being exists to help people become the kind of founder who can keep going: evidence over assumptions, customers over opinions, progress over polish.",
  communityNote:
    "The wider community — meetups, conversations, shared practice — is distinct from Founder-Being LaunchPad. LaunchPad is the structured 16-week programme.",
  whyLpTitle: "Why LaunchPad exists",
  whyLp:
    "Young builders should not have to wait years, or spend a decade of expensive mistakes, to learn how founder work actually feels. LaunchPad puts workshops, customer conversations, building, experiments, mentor feedback and accountability around your own venture.",
  philosophyTitle: "Philosophy",
  philosophy:
    "Don't study startups. Build one. The programme is execution-led: you test a real problem, idea or proposed solution and turn evidence into a credible venture direction. Admission is selective. An Expression of Interest is free and does not guarantee a place.",
  beliefs: [
    "Evidence over assumptions",
    "Progress over perfection",
    "Build before you over-study",
    "Customers before opinions",
    "The founder is the real MVP",
    "AI is leverage, not judgment",
    "Founder wellbeing matters",
  ],
  differsTitle: "How Founder-Being differs from LaunchPad",
  differs:
    "Founder-Being is the broader founder community and practice. LaunchPad is the 16-week venture-building programme with a published cohort, curriculum and admission process. Community connection is offered only where it is approved and relevant for your stage. It is not unlimited mentoring and it is not admission to LaunchPad.",
} as const;

export const JIMMY_LINKEDIN =
  "https://www.linkedin.com/in/planterjimmy/?skipRedirect=true";
