import { PortfolioContent } from '../types';

export const content: PortfolioContent = {
  meta: {
    title: "Saripilli Murali Krishna — Python Developer | Full Stack Developer | AI/ML Engineer",
    description: "Personal developer portfolio of Saripilli Murali Krishna. Building intelligent digital experiences through code, creativity, and AI.",
    author: "Saripilli Murali Krishna",
    url: "https://github.com/Murali200159",
  },

  navigation: {
    monogram: "MK",
    links: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Credentials", href: "#credentials" },
      { label: "Resume", href: "#resume" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    greeting: "Hi, I'm",
    name: "Murali Krishna",
    roles: [
      "Python Developer",
      "Full Stack Developer",
      "AI/ML Engineer",
    ],
    tagline: "Building intelligent digital experiences through code, creativity, and AI.",
    location: "Ayinada, Visakhapatnam, Andhra Pradesh, India",
    availability: {
      status: true,
      text: "Available for opportunities",
    },
    ctas: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Contact Me", href: "#contact" },
      resume: { label: "Download Resume", href: "/resume.pdf" },
    },
    socials: {
      github: "https://github.com/Murali200159",
      linkedin: "https://linkedin.com/in/murali-krishna-saripilli",
      codechef: "https://www.codechef.com/users/deep_deed_86",
    },
    photo: {
      src: "/profile.jpg",
      alt: "Portrait of Saripilli Murali Krishna",
      caption: "Saripilli Murali Krishna · Python & Full Stack Engineer",
    },
  },

  about: {
    sectionIndex: "01",
    title: "About Me",
    paragraphs: [
      "Results-driven Python Developer with 1 year of experience in building AI-powered applications, including LLM-based chatbots and voice assistants. Skilled in Machine Learning, Retrieval-Augmented Generation (RAG), and Natural Language Processing (NLP). Strong foundation in backend development, data structures, and scalable AI systems. Passionate about leveraging Artificial Intelligence to solve real-world problems.",
    ],
    highlights: [
      "1 Year Experience",
      "Freelance Developer (2025 – Present)",
      "Full Stack Development",
      "AI-Powered Applications",
      "Python & FastAPI",
      "LLM & RAG",
    ],
  },

  skills: {
    sectionIndex: "02",
    title: "Technical Skills",
    categories: [
      {
        category: "Programming Languages",
        skills: ["Python", "Java (Basic)", "SQL"],
      },
      {
        category: "Web Technologies",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
      },
      {
        category: "AI/ML & NLP",
        skills: [
          "Machine Learning",
          "Deep Learning",
          "Natural Language Processing",
          "Large Language Models (LLM)",
          "Retrieval-Augmented Generation (RAG)",
        ],
      },
      {
        category: "Libraries & Frameworks",
        skills: [
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Scikit-learn",
          "Librosa",
          "Tkinter",
          "FastAPI",
        ],
      },
      {
        category: "Tools & Platforms",
        skills: [
          "Git",
          "GitHub",
          "Jupyter Notebook",
          "VS Code",
          "AWS (Basic)",
          "Antigravity",
        ],
      },
      {
        category: "Core Concepts",
        skills: [
          "Data Structures & Algorithms",
          "Operating Systems",
          "REST API Development",
          "Database Management",
        ],
      },
    ],
  },

  experience: {
    sectionIndex: "03",
    title: "Professional Experience",
    items: [
      {
        company: "Freelance & Independent Client Solutions",
        role: "Freelance Full Stack & Mobile Developer",
        period: "2025 – Present (Started During MCA)",
        location: "Visakhapatnam, Andhra Pradesh / Remote",
        highlights: [
          "Initiated independent software development during Master of Computer Applications (MCA at JNTU Kakinada), delivering production web platforms and mobile applications for commercial clients.",
          "Architected and deployed NRK Travels (nrktravels.in), delivering a 24/7 online cab and taxi booking portal with airport transfers, tour package showcases, and instant WhatsApp booking dispatch.",
          "Engineered Sri Vari Marriage Bureau (srivarimarriagebureau.com), developing a comprehensive matrimonial platform with multi-filter partner discovery, profile verification, and membership tiers.",
          "Developing Seedha Properties, a cross-platform real estate mobile application in active development utilizing React Native, NestJS microservices, and PostgreSQL for property listings and tenancy management.",
          "Handled end-to-end delivery: technical scoping, responsive UI/UX, database modeling, secure REST APIs, domain deployment, and client support.",
        ],
        metrics: [
          { label: "Commercial Platforms", value: "3+ Delivered" },
          { label: "Delivery Success Rate", value: "100% On-Time" },
          { label: "Architecture Scope", value: "Web & Mobile" },
        ],
        technologies: [
          "React.js",
          "React Native",
          "NestJS",
          "PostgreSQL",
          "JavaScript",
          "HTML5",
          "CSS3 / Tailwind",
          "REST APIs",
        ],
      },
      {
        company: "Dilshaj Infotech",
        role: "Python Developer / Full Stack Developer (AI/ML)",
        period: "1 Year Experience",
        location: "Visakhapatnam, Andhra Pradesh, India",
        highlights: [
          "Developed and maintained EduProva, a full-scale e-learning platform using React.js for frontend development and Next.js/FastAPI for backend services.",
          "Designed and integrated REST APIs, database operations, authentication, and business logic to support scalable and secure application workflows.",
          "Engineered an AI-powered chatbot and voice assistant using LLMs, RAG, NLP, and speech-to-text technologies.",
          "Improved response accuracy by approximately 30–40% over baseline models.",
          "Integrated MongoDB for application data management and optimized API and database operations, improving system performance by approximately 20%.",
          "Applied prompt engineering and optimized AI retrieval pipelines, reducing average response latency by approximately 25–35%.",
        ],
        metrics: [
          { label: "Response Accuracy Improvement", value: "+30–40%" },
          { label: "System Performance Boost", value: "+20%" },
          { label: "Latency Reduction", value: "25–35%" },
        ],
        technologies: [
          "Python",
          "FastAPI",
          "React.js",
          "Next.js",
          "MongoDB",
          "LLMs",
          "RAG",
          "LangChain",
        ],
      },
    ],
  },

  projects: {
    sectionIndex: "04",
    title: "Featured Projects",
    items: [
      {
        id: "eduprova-platform",
        number: "01",
        title: "EduProva – AI Learning Management System",
        category: "Full Stack & AI/ML Platform",
        overview: "Developed a full-stack AI-based Learning Management System using React.js, FastAPI, Python, and MongoDB.",
        keyFeatures: [
          "User authentication",
          "Attendance management",
          "Task management",
          "AI-powered learning modules",
          "Student learning management",
        ],
        contributions: [
          "Architected responsive web frontend with React.js and backend microservices with FastAPI",
          "Structured secure authentication flows, role-based attendance, and automated task tracking",
          "Integrated MongoDB database management, optimizing database queries for student learning workflows by 20%",
        ],
        technologies: ["React.js", "Python", "FastAPI", "MongoDB", "Next.js", "Tailwind CSS"],
        demoUrl: "https://dilshajinfotech.tech/products/edu-det",
        githubUrl: "https://github.com/Murali200159",
        image: "/projects/eduprova.png",
      },
      {
        id: "ai-chatbot-voice-assistant",
        number: "02",
        title: "LLM Chatbot & Voice Assistant – EduProva",
        category: "Conversational AI & Speech Systems",
        overview: "Built an LLM-based chatbot with RAG for intelligent question answering and document retrieval.",
        keyFeatures: [
          "Document-based question answering",
          "Retrieval-Augmented Generation (RAG)",
          "Speech-to-Text integration",
          "NLP-based processing",
          "Voice-based interactions",
        ],
        contributions: [
          "Engineered intelligent document-based QA using LangChain, LangGraph, and vector similarity search",
          "Implemented Speech-to-Text voice interface for multi-modal conversational interactions",
          "Optimized prompt structures and contextual retrieval to achieve 30–40% higher accuracy and reduce latency by 25–35%",
        ],
        technologies: [
          "Python",
          "FastAPI",
          "LLM",
          "RAG",
          "NLP",
          "LangChain",
          "LangGraph",
          "Speech-to-Text",
        ],
        demoUrl: "https://dilshajinfotech.tech/products/edu-det",
        githubUrl: "https://github.com/Murali200159",
        image: "/projects/eduprova-voice.png",
      },
      {
        id: "srivari-marriage-bureau",
        number: "03",
        title: "Sri Vari Marriage Bureau – Matrimonial Platform",
        category: "Full Stack & Web Application",
        overview: "Developed a comprehensive matrimonial matchmaking web platform featuring verified matrimonial profiles, advanced multi-filter partner search, membership tiers, and direct family inquiry workflows.",
        keyFeatures: [
          "Thousands of Verified Matrimonial Profiles",
          "Advanced Multi-Filter Partner Search (Caste, Education, City)",
          "Membership & Subscription Upgrade Packages",
          "Confidential Matchmaking & Direct Inquiry Management",
        ],
        contributions: [
          "Architected responsive web application with multi-criteria profile filters and clean card displays",
          "Engineered secure registration, profile showcase, and matchmaking inquiry pipelines",
          "Optimized mobile-friendly navigation ensuring seamless usability for families across devices",
        ],
        technologies: ["React.js", "JavaScript", "HTML5", "CSS3 / Tailwind CSS", "RESTful APIs"],
        demoUrl: "https://srivarimarriagebureau.com/",
        githubUrl: "https://github.com/Murali200159",
        image: "/projects/srivari-marriage.png",
      },
      {
        id: "nrk-travels",
        number: "04",
        title: "NRK Travels – Taxi & Cab Booking Platform",
        category: "Web Application & Transport Portal",
        overview: "Developed a responsive travel and cab booking platform providing 24/7 taxi booking, airport transfers, tour packages, and outstation rentals in Visakhapatnam.",
        keyFeatures: [
          "24/7 Online Taxi & Cab Booking System",
          "Airport Taxi & Outstation Trip Rentals",
          "Curated Tour Packages & Itinerary Showcase",
          "Instant Call & WhatsApp Booking Integration",
        ],
        contributions: [
          "Engineered responsive client booking portal with route selections and instant WhatsApp inquiry dispatch",
          "Designed modular tour package cards with comprehensive itinerary breakdowns and pricing",
          "Optimized layout responsiveness, performance, and SEO for high-converting mobile traveler engagement",
        ],
        technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs"],
        demoUrl: "https://www.nrktravels.in/",
        githubUrl: "https://github.com/Murali200159",
        image: "/projects/nrk-travels.png",
      },
      {
        id: "task-management-app",
        number: "05",
        title: "Task Management Application",
        category: "Web Application & Workflow Automation",
        overview: "Developed a comprehensive enterprise task management system for assigning, tracking, and monitoring employee tasks.",
        keyFeatures: [
          "Employee task assignment",
          "Task status tracking",
          "Secure REST APIs",
          "Real-time task status updates",
        ],
        contributions: [
          "Designed and built complete task lifecycle tracking using React.js frontend and FastAPI backend",
          "Constructed secure REST endpoints with role permissions for team leads and staff",
          "Delivered interactive dashboards for instant task assignment and status updates",
        ],
        technologies: ["React.js", "FastAPI", "Python", "MongoDB"],
        demoUrl: "",
        githubUrl: "https://github.com/Murali200159",
        image: "",
      },
      {
        id: "web-service-classification",
        number: "06",
        title: "Web Service Classification Using Semi-Supervised Machine Learning",
        category: "Machine Learning & QoS Optimization",
        overview: "Developed a semi-supervised learning-based Quality of Web Service (QoS) classification model.",
        keyFeatures: [
          "Web service quality classification",
          "Semi-supervised learning",
          "Dynamic thresholding",
          "Model performance evaluation",
        ],
        contributions: [
          "Trained and evaluated ensemble models including CatBoost, XGBoost, and Random Forest",
          "Engineered dynamic thresholding techniques to leverage unlabelled QoS service data",
          "Benchmarked multi-class classification accuracy across latency, throughput, and reliability metrics",
        ],
        technologies: [
          "CatBoost",
          "XGBoost",
          "Random Forest",
          "Python",
          "Scikit-learn",
        ],
        demoUrl: "",
        githubUrl: "https://github.com/Murali200159",
        image: "",
      },
      {
        id: "seedha-properties",
        number: "07",
        title: "Seedha Properties – Real Estate Mobile Application",
        category: "Mobile Architecture · Ongoing Project",
        overview: "Currently in active development: A cross-platform real estate mobile application for property buying, renting, property listings, and digital property management.",
        isOngoing: true,
        keyFeatures: [
          "Property listings & detailed viewings",
          "Location-based property search & filters",
          "Buying, renting & lease management",
          "Owner & tenant management workflows",
        ],
        contributions: [
          "Developing native cross-platform screens with React Native for property browsing",
          "Architecting backend services and listing APIs utilizing NestJS",
          "Structuring database models for property assets, user inquiries, and rental workflows",
        ],
        technologies: ["React Native", "NestJS", "PostgreSQL", "TypeScript"],
        demoUrl: "",
        githubUrl: "https://github.com/Murali200159",
        image: "",
      },
    ],
  },

  education: {
    sectionIndex: "05",
    title: "Education",
    items: [
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "Jawaharlal Nehru Technological University, Kakinada",
        period: "2023 – 2025",
        cgpa: "CGPA: 8.0",
      },
      {
        degree: "Bachelor of Science (B.Sc)",
        institution: "Sri Chaitanya Degree & PG College, Vizianagaram",
        period: "2019 – 2022",
        cgpa: "CGPA: 7.6",
      },
      {
        degree: "Intermediate (MPC)",
        institution: "Narayana Junior College, Vizianagaram",
        period: "2018 – 2019",
        cgpa: "CGPA: 8.89",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Bhavani Vidyaniketan, Boddavalasa, Vizianagaram",
        period: "2017 – 2018",
        cgpa: "CGPA: 8.8",
      },
    ],
  },

  certifications: {
    sectionIndex: "06",
    title: "Certifications",
    items: [
      {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
      },
      {
        title: "Python Crash Course",
        issuer: "Udemy",
      },
    ],
  },

  achievements: {
    sectionIndex: "07",
    title: "Coding & Problem Solving",
    items: [
      {
        title: "CodeChef Competitive Programming",
        achievement: "Solved 65+ problems on CodeChef.",
        url: "https://www.codechef.com/users/deep_deed_86",
        urlLabel: "View CodeChef Profile",
      },
    ],
  },

  hobbies: {
    title: "Interests & Pursuits",
    items: [
      "Physical Fitness",
      "Playing Sports",
    ],
  },

  contact: {
    sectionIndex: "08",
    title: "Let's Build Something Meaningful Together.",
    copy: "Whether you have an upcoming project, are looking for a Python/Full Stack or AI Engineer, or simply want to connect, feel free to reach out directly or send a message below.",
    email: "muralikrishnasaripilli@gmail.com",
    phone: "77990 09855",
    location: "Ayinada, Visakhapatnam, Andhra Pradesh, India",
    socials: {
      linkedin: "https://linkedin.com/in/murali-krishna-saripilli",
      github: "https://github.com/Murali200159",
      codechef: "https://www.codechef.com/users/deep_deed_86",
    },
    formEndpoint: "",
  },

  footer: {
    name: "Saripilli Murali Krishna",
    year: 2026,
    backToTopText: "Back to top",
  },
};
