export const personalInfo = {
  name: 'Anass Nassiri',
  title: 'AI Engineer',
  location: 'Milan, Italy (20129)',
  phone: '(+39) 3513095490',
  email: 'nassirri115@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anass-nassiri-5487051a3/',
  github: 'https://github.com/ANASS19',
  summary:
    "Innovative AI engineer blending deep learning, intelligent interfaces, and full-stack craftsmanship to ship reliable, people-centered systems. Passionate about building resilient LLM agents, explainable ML, and immersive experiences that bridge research and real-world impact."
};

export const education = [
  {
    degree: "Master's in Artificial Intelligence for Science and Technology",
    school: 'University of Milano-Bicocca - University of Milan - University of Pavia',
    location: 'Milan, Italy',
    period: '09/2023 – Present'
  },
  {
    degree: "Bachelor's in Computer Science and Software Engineering",
    school: 'Cadi Ayyad University, High School of Technology',
    location: 'Essaouira, Morocco',
    period: '09/2021 – 06/2022'
  },
  {
    degree: 'University Diploma in Business Intelligence and Data Sciences',
    school: 'Cadi Ayyad University, High School of Technology',
    location: 'Essaouira, Morocco',
    period: '09/2019 – 06/2021'
  }
];

export const experience = [
  {
    role: 'AI Engineer (Part-Time)',
    company: 'BitApp SRL',
    location: 'Bologna, Italy',
    period: '04/2025 – 06/2025',
    bullets: [
      'Designed and deployed advanced conversational AI agents using the ReAct paradigm across mission-critical workflows.',
      'Built modular RAG pipelines with LangChain and Ollama, tuning retrieval for domain-specific question answering.',
      'Developed stateful multi-agent architectures in LangGraph by orchestrating long-lived memory and adaptive control.',
      'Standardized agent-tool communication through the Model Context Protocol to enforce context safety and auditing.',
      'Exposed capabilities behind secure FastAPI services to integrate with front-ends, knowledge bases, and analytics.',
      'Optimized LLM inference with streaming responses, dynamic tool routing, and memory window management.',
      'Coordinated with cross-functional peers to debug, refactor, and harden Dockerized deployments in Git-driven pipelines.'
    ]
  },
  {
    role: 'Software Engineering Intern',
    company: 'COMABOUT',
    location: 'Marrakech, Morocco',
    period: '04/2022 – 06/2022',
    bullets: [
      'Delivered a full-stack platform connecting fabric printers and designers with a responsive UX.',
      'Implemented progressive React interfaces optimized for both browser and mobile usage.',
      'Built REST APIs with Django REST Framework and modelled a scalable MySQL schema.'
    ]
  },
  {
    role: 'Software Engineering Intern',
    company: 'OPLA TRAVEL',
    location: 'Kenitra, Morocco',
    period: '07/2021 – 08/2021',
    bullets: [
      'Created a React.js + Tailwind CSS web app to streamline stock management for travel operators.',
      'Engineered Django REST APIs and drove insights through exploratory data analysis.'
    ]
  }
];

export const projects = [
  {
    name: 'Handwritten Digit Recognition',
    description:
      'Built and compared CNN architectures on MNIST, running data prep, experimentation, and deployment-ready training loops.',
    tags: ['TensorFlow', 'Computer Vision', 'Model Deployment']
  },
  {
    name: 'LLMs and RAG Platform',
    description:
      'End-to-end conversational AI system pairing LangChain RAG, CSV-based vector stores, and an Ollama-backed LLM with a polished React chat experience.',
    tags: ['LangChain', 'RAG', 'React']
  },
  {
    name: 'Intelligent Monitoring & Control',
    description:
      'Hybrid MobileNetV2 and custom CNN pipeline for lemon defect detection with Grad-CAM explainability optimized for edge hardware.',
    tags: ['Edge AI', 'Explainability', 'Computer Vision']
  },
  {
    name: 'Ambient Intelligence & Domotics Dataset',
    description:
      'Preprocessed HAR data for smart homes, benchmarking CNN, LSTM, and hybrid CNN-LSTM models along manual vs automatic feature extraction.',
    tags: ['HAR', 'Deep Learning', 'IoT']
  }
];

export const advancedWork = [
  'Advanced Human System Interfaces — multimodal biometrics, BCI experiments, affective computing with EEG, GSR, and 3D capture.',
  'Advanced ML & DL for Recommendation and XAI — explainable recommenders balancing transparency and performance.',
  'Advanced Computational Techniques for Big Imaging and Signal Data — large-scale imaging analytics pipelines.',
  'Embedded Intelligent Systems — bringing AI workloads onto responsive embedded deployments.'
];

export const skills = [
  {
    title: 'AI & Machine Learning',
    items: ['Python', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Deep Learning', 'Machine Learning']
  },
  {
    title: 'LLM Engineering',
    items: ['RAG', 'LangChain', 'LangGraph', 'MCP', 'Prompt Engineering']
  },
  {
    title: 'Signal & Vision',
    items: ['MATLAB', 'OpenCV', 'Computer Vision']
  },
  {
    title: 'Full-Stack & APIs',
    items: ['React.js', 'Django', 'Django REST Framework', 'Flask', 'Java', 'Spring', 'HTML', 'CSS', 'Tailwind', 'SASS']
  },
  {
    title: 'Data & Analytics',
    items: ['MySQL', 'SQL', 'Data Analysis', 'Data Mining', 'Data Visualization', 'R']
  },
  {
    title: 'Tooling',
    items: ['Git', 'Jupyter Notebook', 'Matplotlib', 'REST APIs', 'Agile']
  }
];

export const certifications = [
  'Data Science — SoloLearn',
  'Machine Learning — SoloLearn',
  'Learn the Basics of Blockchain with Python — Codecademy',
  'Data Analysis Track — Udacity',
  'Full Stack Development Track — Udacity'
];

export const hackathons = [
  'ESTE.ma — Programmed autonomous robots in C to compete on custom challenges.',
  '1337.ma Coding School — One-month immersion in low-level C, Linux, and shell craftsmanship.',
  'Reply Hackathons, UNIMIB — Prototyped LLM-powered AI agents under tight deadlines.'
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Proficient' },
  { name: 'French', level: 'Proficient' },
  { name: 'Italian', level: 'Basic' }
];
