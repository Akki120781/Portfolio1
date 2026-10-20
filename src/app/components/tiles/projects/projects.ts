export const projectsData = [
  {
    name: "SafeBox – Ephemeral Sandboxed Code Execution Engine",
    description:
      "High-throughput, sub-millisecond cold-start execution sandbox for autonomous AI agents. Features multi-tier containment with pre-execution AST static analysis blocking shell escapes and secret exfiltration, hermetic V8 WASM isolate (<1ms spin-up) for JavaScript/TypeScript, quarantined ephemeral process jails for Python 3.12 with wiped host credentials, and hardware watchdog timers enforcing hard CPU/memory quotas and SIGKILL process-tree termination.",
    image: "/projects/safebox.png",
    github: "https://github.com/Akki120781/safebox",
    view: "http://localhost:4000",
    workStatus: true,
    date: "Oct 2026",
    demo: false,
    personal: true,
    tech: [
      { name: "Node.js", image: "/tech/nodejs.svg" },
      { name: "Python", image: "/tech/python.svg" },
      { name: "TypeScript", image: "/tech/typescript.svg" },
      { name: "Linux / Cgroups", image: "/tech/linux.svg" },
      { name: "REST API", image: "/tech/postman.svg" },
    ],
  },
  {
    name: "DocuRAG - Intelligent Documentation Assistant",
    description:
      "Production-ready Retrieval-Augmented Generation assistant for technical documentation, source code, and PDFs. Features header-aware hierarchical chunking, hybrid vector retrieval (Dense Cosine + BM25Okapi) with dynamic alpha fusion, multi-provider LLM support (Gemini, OpenAI, local offline), and strict citation provenance with section attribution.",
    image: "/projects/rag-assistant.png",
    github: "https://github.com/Akki120781/-RAG-documentation-assistant",
    view: false,
    workStatus: true,
    date: "Oct 2026",
    demo: false,
    personal: true,
    tech: [
      { name: "Python", image: "/tech/python.svg" },
      { name: "FastAPI", image: "/tech/python.svg" },
      { name: "Gemini / OpenAI", image: "/tech/openai.svg" },
      { name: "Tailwind", image: "/tech/tailwindcss.svg" },
    ],
  },
  {
    name: "CampusFlow – School Management ERP",
    description:
      "Production school ERP actively piloted in a live school environment with role-based dashboards for Admin, Teacher, Student, and Parent users. Designed Firebase Authentication with custom registration IDs and Firestore data model managing attendance, timetables, assignments, fees, and payroll. Integrated Razorpay for online fee collection with partial-payment support and automated monthly accrual; built attendance-linked payroll calculation with admin approval workflows.",
    image: "/projects/campusflow-erp.png",
    github: false,
    view: "https://campusflow.smrpublicschool.in/",
    workStatus: true,
    date: "Present",
    demo: false,
    personal: false,
    tech: [
      { name: "React.js", image: "/tech/react.svg" },
      { name: "Tailwind", image: "/tech/tailwindcss.svg" },
      { name: "Firebase", image: "/tech/supabase.svg" },
      { name: "TypeScript", image: "/tech/typescript.svg" },
    ],
  },
  {
    name: "The Council – AI Deliberation Arena",
    description:
      "Autonomous multi-agent consensus and deliberation platform powered by Groq SDK and LLaMA 3.3 70B. Features 5 distinct AI persona archetypes (Chancellor, Cynical VC, Deep-Tech Architect, UX Strategist, Devil's Advocate) that dynamically cross-examine startup theses with 400-800+ tokens/sec SSE streaming, live speech synthesis, user interjections, and automated 4-quadrant SWOT executive dossier generation.",
    image: "/projects/ai-agent-council.png",
    github: "https://github.com/Akki120781/ai-agent",
    view: false,
    workStatus: true,
    date: "Sep 2026",
    demo: false,
    personal: true,
    tech: [
      { name: "Groq / LLMs", image: "/tech/ollama.svg" },
      { name: "React.js", image: "/tech/react.svg" },
      { name: "Node.js", image: "/tech/nodejs.svg" },
      { name: "Tailwind", image: "/tech/tailwindcss.svg" },
    ],
  },
  {
    name: "India Air Quality Monitoring Dashboard",
    description:
      "Interactive Power BI analytics dashboard for real-time Air Quality Index (AQI) tracking across 516+ monitoring stations in India. Automated API data ingestion pipeline built with Python and Pandas to fetch and clean multi-pollutant metrics (PM2.5, PM10, CO, NO2, O3, SO2, NH3). Features geospatial Esri station mapping, dynamic state and severity category slicers, and pollutant breakdown analytics.",
    image: "/projects/air-quality-analyzer.png",
    github: "https://github.com/Akki120781/Air-Quality-Analyzer-main",
    view: false,
    workStatus: true,
    date: "Dec 2025",
    demo: false,
    personal: true,
    tech: [
      { name: "Power BI", image: "/tech/powerbi.svg" },
      { name: "Python", image: "/tech/python.svg" },
      { name: "Pandas", image: "/tech/pandas.svg" },
      { name: "REST API", image: "/tech/postman.svg" },
    ],
  },
  {
    name: "Stratford Academy – School Web Portal",
    description:
      "Modern web portal for Stratford Academy Bagli (Dewas) featuring admissions inquiry modals, academic wing programmes (Pre-Nursery to X), 32+ event video & media directory with category filtering, Google Drive photo archive integration, WhatsApp broadcast sharing, live announcements ticker, and interactive campus facilities tour.",
    image: "/projects/stratford-school.png",
    github: "https://github.com/Akki120781/smr-",
    view: "https://stratford-school.vercel.app/",
    workStatus: true,
    date: "2026",
    demo: false,
    personal: false,
    tech: [
      { name: "React.js", image: "/tech/react.svg" },
      { name: "Tailwind", image: "/tech/tailwindcss.svg" },
      { name: "Vercel", image: "/tech/vercel-icon-dark.svg" },
      { name: "JavaScript", image: "/tech/js.svg" },
    ],
  },
  {
    name: "Stock Dashboard",
    description:
      "Full-stack financial analytics platform handling 50+ concurrent users with sub-1-second response times under load. Integrated live stock market APIs with distributed Node.js + Express.js backend and MongoDB indexing. Implemented Redis caching cutting external API calls by 70%; frontend data reconciliation logic validates incoming API data against MongoDB records before display.",
    image: "/projects/stock-dashboard.jpg",
    github: "https://github.com/Akki120781",
    view: "https://stock-dashboard-three-chi.vercel.app",
    workStatus: true,
    date: "Feb 2025 – Mar 2025",
    demo: false,
    personal: true,
    tech: [
      { name: "React.js", image: "/tech/react.svg" },
      { name: "Node.js", image: "/tech/nodejs.svg" },
      { name: "Express.js", image: "/tech/express.svg" },
      { name: "MongoDB", image: "/tech/mongodb.svg" },
      { name: "Redis", image: "/tech/redis.svg" },
    ],
  },
  {
    name: "Stock Market Comparison & Prediction",
    description:
      "Python financial data pipeline using yfinance for historical market datasets. ML models (Linear Regression, LSTM, RNN) benchmarked for stock price prediction. Interactive Streamlit dashboard with daily/monthly/yearly breakdowns.",
    image: "/projects/stock-prediction.jpg",
    github: "https://github.com/Akki120781",
    view: false,
    workStatus: false,
    date: "Feb 2025 – Mar 2025",
    demo: false,
    personal: true,
    tech: [
      { name: "Python", image: "/tech/ubuntu.svg" },
      { name: "Pandas", image: "/tech/ubuntu.svg" },
      { name: "TensorFlow", image: "/tech/ubuntu.svg" },
    ],
  },
  {
    name: "Smart Route Navigator",
    description:
      "Optimal pathfinding engine in Java using A* Search with traffic-weighted cost functions. O(E log V) time complexity using unordered maps, adjacency lists, priority queues. Haversine Formula for geospatial distance. Modular OOP architecture with isolated layers.",
    image: "/projects/route-navigator.jpg",
    github: "https://github.com/Akki120781",
    view: false,
    workStatus: false,
    date: "Jan 2025 – Mar 2025",
    demo: false,
    personal: true,
    tech: [
      { name: "Java", image: "/tech/ubuntu.svg" },
      { name: "DSA", image: "/tech/vscode.svg" },
    ],
  },
  {
    name: "Portfolio",
    description:
      "A personal portfolio website designed to display my development skills and projects. This highlights my proficiency in Angular, and more.",
    image: "/projects/portfolio.webp",
    github: "https://github.com/Akki120781/Portfolio1",
    view: "https://akshat-eta.vercel.app",
    workStatus: true,
    date: "Augest - 2024",
    demo: false,
    personal: true,
    tech: [
      {
        name: "Angular",
        image: "/tech/angular17.svg",
      },
      {
        name: "Tailwind",
        image: "/tech/tailwindcss.svg",
      },
      {
        name: "Typescript",
        image: "/tech/typescript.svg",
      },
      {
        name: "Figma",
        image: "/tech/figma.svg",
      },
    ],
  },
  {
    name: "Audius App",
    description:
      "Audius is a modern music streaming platform that offers a seamless experience with a curated selection of music genres.",
    image: "/projects/retro-radio.png",
    github: "https://github.com/Akki120781/audius",
    view: "https://audius-lime.vercel.app",
    workStatus: true,
    date: "Feb - 2026",
    demo: false,
    personal: true,
    tech: [
      {
        name: "Nextjs",
        image: "/tech/nextjs2.svg",
      },
      {
        name: "Tailwind",
        image: "/tech/tailwindcss.svg",
      },
      {
        name: "vercel",
        image: "/tech/vercel-icon-dark.svg",
      },
      {
        name: "Supabase",
        image: "/tech/supabase.svg",
      },
    ],
  },
  {
    name: "Minimal Portfolio",
    description:
      "A new and minimal personal portfolio website designed to display my development skills and projects.",
    image: "/projects/minimal-portfolio-new.png",
    github: "https://github.com/Akki120781/portfolio",
    view: "https://portfolio-gray-ten-50.vercel.app/",
    workStatus: false,
    date: "December - 2025",
    demo: false,
    personal: true,
    tech: [
      {
        name: "Nextjs",
        image: "/tech/nextjs2.svg",
      },
      {
        name: "Tailwind",
        image: "/tech/tailwindcss.svg",
      },
      {
        name: "Typescript",
        image: "/tech/typescript.svg",
      },
    ],
  },

  {
    name: "Itrend Commerce",
    description:
      "Multi-tenant Laravel backend integrating Amazon SP-API and Ads API for real-time inventory sync across seller accounts with row-level security. Engineered data-transformation pipeline normalizing inconsistent API payloads with diff-checking logic that cut manual reconciliation by 60%. Implemented background job queuing for large-scale async operations and integrated Ollama for AI-assisted data enrichment.",
    image: "/projects/itrend-sp.webp",
    github: false,
    view: false,
    workStatus: true,
    date: "May - 2025",
    demo: false,
    personal: false,
    tech: [
      {
        name: "Laravel",
        image: "/tech/laravel.svg",
      },
      {
        name: "Mysql",
        image: "/tech/mysql.svg",
      },
      {
        name: "Bootstrap",
        image: "/tech/bootstrap.svg",
      },
      {
        name: "Amazon SP",
        image: "/tech/aws.svg",
      },
      {
        name: "Ollama",
        image: "/tech/ollama.svg",
      },
    ],
  },
  {
    name: "Quotes Generator",
    description:
      "Click to receive a new, uplifting quote from a wide range of categories and let each day be filled with wisdom and motivation.",
    image: "/projects/quotes.webp",
    github: "https://github.com/Akki120781/quotegenerater",
    view: "https://quotegenerater.vercel.app/",
    workStatus: false,
    date: "Augest - 2024",
    demo: true,
    tech: [
      {
        name: "Angular",
        image: "/tech/angular17.svg",
      },
      {
        name: "Tailwind",
        image: "/tech/tailwindcss.svg",
      },
      {
        name: "Typescript",
        image: "/tech/typescript.svg",
      },
      {
        name: "Apininja",
        image: "/tech/ninja.png",
      },
    ],
  },
  {
    name: "QRCode Generate",
    description:
      "This tool is perfect for anyone needing a quick and reliable way to create QR codes for personal or professional use.",
    image: "/projects/qrcode-page.webp",
    github: "https://github.com/Akki120781/quotegenerater",
    view: "https://quotegenerater.vercel.app/",
    workStatus: false,
    date: "Augest - 2024",
    demo: true,
    tech: [
      {
        name: "Angular",
        image: "/tech/angular17.svg",
      },
      {
        name: "Tailwind",
        image: "/tech/tailwindcss.svg",
      },
      {
        name: "Typescript",
        image: "/tech/typescript.svg",
      },
      {
        name: "Apininja",
        image: "/tech/ninja.png",
      },
    ],
  },
  {
    name: "Instagram",
    description:
      "A clone of Instagram, the popular social media platform, allowing users to interact with content in a visually appealing and user-friendly environment.",
    image: "/projects/instagram.webp",
    github: "https://github.com/Akki120781/legendary-spork",
    view: "https://legendary-spork-khaki.vercel.app",
    workStatus: true,
    date: "July - 2024",
    demo: true,
    tech: [
      {
        name: "Angular",
        image: "/tech/angular17.svg",
      },
      {
        name: "Tailwind",
        image: "/tech/tailwindcss.svg",
      },
      {
        name: "Flowbite",
        image: "/tech/flowbite.svg",
      },
      {
        name: "Typescript",
        image: "/tech/typescript.svg",
      },
    ],
  },
  {
    name: "Netflix",
    description:
      "A Netflix clone that allows browsing and viewing TV shows using data from an open API, featuring a responsive and user-friendly interface.",
    image: "/projects/netflix-cole.webp",
    github: "https://github.com/Akki120781/upgraded-octo-happiness",
    view: "https://clone-netflix-eta-seven.vercel.app/",
    workStatus: false,
    date: "June - 2024",
    demo: true,
    tech: [
      {
        name: "Angular",
        image: "/tech/angular17.svg",
      },
      {
        name: "Tailwind",
        image: "/tech/tailwindcss.svg",
      },
      {
        name: "Flowbite",
        image: "/tech/flowbite.svg",
      },
      {
        name: "Swipper",
        image: "/tech/swipper.svg",
      },
      {
        name: "Tmdb",
        image: "/tech/tmdb.svg",
      },
    ],
  },

  {
    name: "Expense Sharing System",
    description:
      "A modern web application designed to track and split expenses seamlessly.",
    image: "/projects/expense-sharing.gif",
    github: "https://github.com/Akki120781/expense-sharing-system",
    view: false,
    workStatus: false,
    date: "April - 2024",
    demo: false,
    tech: [
      {
        name: "Nodejs",
        image: "/tech/nodejs.svg",
      },
      {
        name: "Bootstrap",
        image: "/tech/bootstrap.svg",
      },
      {
        name: "MongoDB",
        image: "/tech/mongodb.svg",
      },
      {
        name: "HTML",
        image: "/tech/html5.svg",
      },
      {
        name: "Javascript",
        image: "/tech/js.svg",
      },
    ],
  },
];
