export const profile = {
  name: 'Azhar Iqbal',
  role: 'AI Engineer',
  tagline: 'LLMs · AI Agents · Voice AI · Adaptive Learning · Computer Vision',
  summary:
    '2.5+ years shipping production AI across LLM agents, voice, adaptive learning, and computer vision. Builds systems that decide how to teach, how to talk, and how to see, then measures whether they work.',
  location: 'Islamabad, Pakistan',
  phone: '+92 348 1892160',
  email: 'azhartula125@gmail.com',
  links: {
    github: 'https://github.com/Azhartula',
    linkedin: 'https://www.linkedin.com/in/azhar-iqbal-tula',
  },
}

export const skills = [
  {
    title: 'LLMs & AI Agents',
    items:
      'OpenAI, Anthropic & Gemini APIs, Prompt Engineering, LangChain, LangGraph, AutoGen, Tool Calling, Multi-Agent Orchestration, RAG, Ollama, Qwen 2.5, Human-in-the-Loop',
  },
  {
    title: 'Voice AI',
    items:
      'Retell AI, Twilio, Vapi, Telnyx, Whisper, Real-Time Function Calling, Call Webhooks, Multilingual Voice Agents',
  },
  {
    title: 'Evaluation & Monitoring',
    items:
      'Offline Holdout Evaluation, Simulation Ablations, Benchmark Evaluation, Regression Gating, Synthetic Agent Cohorts, Drift Monitoring, Call Logging, pytest',
  },
  {
    title: 'ML & Adaptive Learning',
    items:
      'PyTorch, TensorFlow, Scikit-learn, Hugging Face Transformers, LoRA/QLoRA, Quantization, Bayesian Knowledge Tracing, Contextual Bandits, Thompson Sampling, OpenCV, HOI-DETR, LLaVA-Med, BiomedCLIP',
  },
  {
    title: 'Cloud & MLOps',
    items:
      'AWS EC2, Docker, Kubernetes, Terraform, CI/CD, GitHub Actions, FastAPI, Flask, Django, Streamlit, Git',
  },
  {
    title: 'Languages & Data',
    items:
      'Python, SQL, JavaScript, Java, C#, NumPy, SciPy, pandas, SymPy, PostgreSQL, Supabase, MongoDB, Neo4j, Pinecone, FAISS, ChromaDB',
  },
]

export const experience = [
  {
    role: 'Machine Learning Engineer',
    company: 'NexPred Solutions',
    place: 'Remote',
    dates: 'Mar 2026 – Present',
    points: [
      'Integrated OpenAI, Anthropic, and Hugging Face LLM APIs into production services, with RAG over Pinecone and FAISS; built Claritas Navigator, a LangGraph multi-agent platform routing Claude, Gemini, and GPT, with 200+ automated tests.',
      'Built a retrieval-augmented chest X-ray report generator with LLaVA-Med and LLaVA-Rad and ChromaDB retrieval, lifting RadGraph-F1 from 0.07 to 0.55; reached 0.3075 on the 2,461-case MIMIC-CXR benchmark via medoid consensus decoding, beating the published 0.303 with no fine-tuning.',
      'Shipped ViaTouch, a dual-camera retail computer vision engine for pickup and putback detection on HOI-DETR, deployed on AWS EC2; built zero-regression evaluation gating across 117 primary and 132 secondary QA sessions. Recognized by NexPred leadership.',
      'Cut inference latency by up to 40% with quantization, batched inference, and caching; automated retraining and deployment through Docker and GitHub Actions CI/CD with production drift monitoring.',
    ],
  },
  {
    role: 'AI Engineer',
    company: 'BeeNeural.AI',
    place: 'Remote',
    dates: 'Feb 2024 – Feb 2026',
    points: [
      'Developed reinforcement learning and LLM agent solutions for clients, owning communication to turn requirements into deployable agents.',
      'Designed multi-agent systems with LangChain, LangGraph, and AutoGen, using tool calling, short and long-term memory, planning loops, and orchestration layers for task delegation and shared state.',
      'Implemented human-in-the-loop checkpoints, retry and fallback strategies, and agent lifecycle monitoring for production reliability.',
      'Architected a multi-tenant Asset Tracker with FastAPI, PostgreSQL, and React/TypeScript for 100,000+ devices, with SSO, JWT, RBAC, and audit logging.',
    ],
  },
]

export type Project = {
  name: string
  subtitle: string
  body: string
  links: { label: string; href: string }[]
  private?: boolean
}

export const fieldNotes = [
  {
    src: '/images/ml-desk-notes.jpg',
    alt: 'Notebook with a hand-drawn neural network and a printed training-loss chart on a cool lab desk',
    caption: 'Models and notes',
    span: 'wide' as const,
  },
  {
    src: '/images/ml-voice-desk.jpg',
    alt: 'Headset microphone and phone handset with a waveform strip for multilingual voice agents',
    caption: 'Voice systems',
    span: 'tall' as const,
  },
  {
    src: '/images/ml-vision-bench.jpg',
    alt: 'Dual-camera computer vision bench with detection overlay on a product shelf',
    caption: 'Computer vision',
    span: 'wide' as const,
  },
]

export const projects: Project[] = [
  {
    name: 'PerLearn',
    subtitle: 'Adaptive Learning Loop for AI Schools',
    body: 'Diagnoses each learner, detects misconceptions, and uses contextual Thompson Sampling across 4 teaching styles to generate short, gap-targeted lesson and video briefs. Fitted Bayesian Knowledge Tracing on ASSISTments data with offline holdout evaluation, ran ablations and a 16-agent Qwen 2.5 7B learner cohort, and verified answers with SymPy; estimated 2.5–3.5 min briefs versus ~11 min generic videos per skill.',
    links: [
      { label: 'GitHub', href: 'https://github.com/Azhartula/Per_learn' },
      { label: 'Live Demo', href: 'https://azhartula.github.io/Per_learn/' },
    ],
  },
  {
    name: 'SalonRuf',
    subtitle: 'Multilingual AI Voice Receptionist',
    body: '24/7 phone agent in English, German, Turkish, and Arabic that books, reschedules, and cancels appointments, answers FAQs, and hands off to staff. Built the FastAPI tools Retell AI calls mid-conversation, call analysis webhooks, and a multi-tenant Supabase schema; evaluated Twilio, Telnyx, Vapi, LiveKit, and Pipecat on latency and cost.',
    links: [],
  },
  {
    name: 'ConExt.AI',
    subtitle: 'OCR + LLM Business Card Extraction',
    body: 'Turns business card images into structured, searchable contacts with a Tesseract OCR → Gemini 2.0 Flash pipeline. Next.js frontend, FastAPI backend, SQLite storage with full-text search, duplicate merge, and one-click AI refinement for OCR errors.',
    links: [
      { label: 'GitHub', href: 'https://github.com/Azhartula/conext-ai' },
      { label: 'Live Demo', href: 'https://conext-ai.vercel.app' },
    ],
  },
  {
    name: 'Freight Rate Prediction',
    subtitle: 'Two-Part Ridge + LightGBM (Spotter ML)',
    body: 'Predicts truck freight rates with a time-forward split, train-only label cleaning, and a two-part model on log(rate per mile): Ridge for market level/trend, LightGBM for route residuals. Sep–Oct holdout MAE ≈ $89 full / ≈ $33 on clean rows, beating a single GBDT baseline.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Azhartula/freight-rate-prediction',
      },
    ],
  },
  {
    name: 'UE5 Advanced AI Combat',
    subtitle: 'Unreal Engine 5 C++ Combat System',
    body: 'High-performance AI combat for UE5 with spatial hashing perception (~10× vs naive), custom behavior trees, object-pooled projectiles for 200+ concurrent shots at 60 FPS, and multi-threaded updates that cut game-thread load by ~40%.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Azhartula/UE5-Advanced-AI-Combat',
      },
    ],
  },
  {
    name: 'UE5 Procedural Level Editor',
    subtitle: 'Wave Function Collapse Editor Plugin',
    body: 'UE5 editor plugin for procedural levels via Wave Function Collapse, with Slate dockable UI, custom data assets for rule sets, multi-threaded generation up to 100×100 grids, live viewport preview, and undo/redo.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Azhartula/UE5-Procedural-Level-Editor-Tool',
      },
    ],
  },
]

/** Private repos — high-level only; no source links. */
export const privateProjects: Project[] = [
  {
    name: 'tetherX / Asset Tracker',
    subtitle: 'Multi-tenant device management (private)',
    body: 'Cross-platform digital asset tracking for 100k+ devices: FastAPI backend, React/TypeScript console, and Windows/macOS/Linux agents with registration, heartbeats, remote lock/alarm, SSO/JWT/RBAC, and tenant isolation. Client/office work — repo stays private.',
    links: [],
    private: true,
  },
  {
    name: 'C++ Foundations (FAST)',
    subtitle: 'Coursework — Rational, Array, String (private)',
    body: 'University assignment implementing Rational arithmetic, dynamic Array, and String classes in C++, with Google Test coverage. Kept private as course material.',
    links: [],
    private: true,
  },
  {
    name: 'C++ OOP Lab (FAST)',
    subtitle: 'Early OOP / class design (private)',
    body: 'Introductory C++ project practicing constructors, encapsulation, and simple domain objects (e.g. vehicle state) with unit tests. Coursework — not public.',
    links: [],
    private: true,
  },
]

export const education = {
  degree: 'BS Computer Science',
  school: 'FAST-NUCES, National University of Computer and Emerging Sciences, Islamabad',
  dates: 'Dec 2025',
  awards: [
    'Excellence Award, AUCC Thailand 2026',
    'Neural Networks and Deep Learning, DeepLearning.AI',
    'CITI Research',
    'Neo4j 1–3',
  ],
}
