/** Static CV data for the /programmer page. No CMS behind this persona yet — edit here to update. */

export type ExperienceEntry = {
  company: string
  role: string
  location: string
  period: string
  current?: boolean
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Metro Tennis Terminal',
    role: 'Full-stack Developer (remote)',
    location: 'Jakarta, Indonesia',
    period: 'Sept 2025 – current',
    current: true,
    bullets: [
      'Developed a full-stack e-commerce storefront using Medusa v2 and Next.js, integrating Olsera POS for real-time product and pricing synchronization.',
      'Built a bulk product management pipeline with CSV-based import/export, SKU mapping, and variant handling to streamline catalog updates.',
      'Implemented semantic search and explored AI-powered chatbot integration using Qdrant and Meilisearch to enhance product discovery and user experience.',
      'Conducted website audits to identify usability, performance, SEO, and functional issues, then contributed improvements and recommendations.',
    ],
  },
  {
    company: 'PT. Aset Kripto International',
    role: 'Full-stack Developer',
    location: 'Jakarta, Indonesia',
    period: 'Juni 2024 – Juni 2025',
    bullets: [
      'Automated the cryptocurrency buyback system using Node.js and PostgreSQL, reducing manual workload and improving efficiency.',
      'Designed monitoring and reporting dashboards that increased transaction visibility and reduced reconciliation issues.',
      'Developed a monthly statement automation pipeline by integrating multi-source crypto data, significantly speeding up reporting.',
      'Built a notification service to ensure timely delivery of monthly statements to stakeholders.',
    ],
  },
  {
    company: 'Ganesha Multi Kreatif',
    role: 'Web Developer (Freelance)',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2024 – August 2024',
    bullets: [
      'Delivered full-stack web applications with Next.js, React, and Node.js for company profiles and e-commerce platforms in the tax and legal sectors.',
      'Led project planning and execution, ensuring reliable delivery and strong client satisfaction.',
      'Applied SEO best practices, leading to better visibility and stronger search rankings for client websites.',
    ],
  },
  {
    company: 'Apotek Roxy',
    role: 'Full-stack Developer',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2024 – May 2024',
    bullets: [
      'Enhanced the POS system by troubleshooting and fixing critical software issues, improving stability and reliability.',
      'Developed new ERP features with React (frontend) and Java Spring Boot (backend) to support business operations.',
      'Completed diverse development tasks quickly, demonstrating adaptability and effective problem-solving.',
      'Collaborated with the UI/UX team to implement user-friendly interfaces, improving usability of the ERP system.',
    ],
  },
]

export type ProjectEntry = {
  name: string
  description: string
  stack: string[]
  featured?: boolean
}

export const projects: ProjectEntry[] = [
  {
    name: 'MauKerja',
    description:
      'An AI-powered job seeker agent and web crawling platform that automates job discovery, application tracking, and intelligent job matching. Collects listings from Glints, Indeed, and JobStreet via Playwright-based browser automation, normalizes and de-duplicates them, then uses AI to compare CVs against job requirements, score opportunities, and filter roles by preference.',
    stack: ['Node.js', 'Playwright', 'OpenRouter (LLM)'],
    featured: true,
  },
  {
    name: 'MauHealthy',
    description:
      'A web platform for tracking daily calorie intake and monitoring Body Mass Index (BMI), with an intuitive interface for logging meals and getting real-time feedback on nutritional intake.',
    stack: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
  },
  {
    name: 'MauKetik',
    description:
      'A multiplayer typing-accuracy game in the spirit of 10FastFingers, challenging players to improve typing speed and accuracy in a competitive environment.',
    stack: ['React.js', 'Redux', 'Express.js', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
  },
  {
    name: 'MauMain',
    description:
      'A platform connecting sports enthusiasts who lack partners to play with, facilitating connections between players and fostering community among like-minded individuals.',
    stack: ['React Native', 'Expo', 'MongoDB', 'Express', 'TypeScript', 'NativeWind'],
  },
]

export const skills = {
  language: ['JavaScript', 'TypeScript', 'PHP', 'Golang'],
  exploring: ['Golang'],
  frontend: [
    'React JS',
    'Redux',
    'React Native',
    'HTML & CSS',
    'Apollo Client',
    'Expo',
    'jQuery',
    'Next.js',
    'Tailwind CSS',
    'Angular',
  ],
  backend: [
    'Node JS',
    'Express',
    'Sequelize',
    'PostgreSQL',
    'GraphQL',
    'Apollo Server',
    'MongoDB',
    'Redis',
    'REST API',
    'Socket.io',
    'Jest',
    'AWS',
    'Docker',
    'Java',
    'Spring Boot',
    'Laravel',
  ],
}

export type CertificationEntry = {
  issuer: string
  title: string
  id: string
  url?: string
  /** Filename under /public/certificates/, e.g. 'udemy-web-bootcamp.png'. Add a screenshot and set this to show it on the card. */
  image?: string
}

export const certifications: CertificationEntry[] = [
  {
    issuer: 'English Academy by RuangGuru',
    title: 'B2 English Certificate',
    id: 'certificate-of-completion',
    image: 'english-academy-b2.png',
  },
  {
    issuer: 'Hacktiv8',
    title: 'Fullstack Javascript Immersive',
    id: '638ac3c3-70ee-4592-8a94-bf550cfc81c0',
    image: 'hacktiv8-fullstack-js.jpg',
  },
  {
    issuer: 'Udemy',
    title: 'The Web Developer Bootcamp 2024',
    id: 'UC-fbb53c61-8070-4dc5-92ff-f3e6e6be0275',
    url: 'https://www.udemy.com/certificate/UC-fbb53c61-8070-4dc5-92ff-f3e6e6be0275/',
    image: 'udemy-web-dev-bootcamp.jpg',
  },
  {
    issuer: 'Udemy',
    title: 'The Complete SQL Bootcamp: Go From Zero to Hero',
    id: 'UC-53b61232-7931-4f4c-b2ba-8a9183861d91',
    url: 'https://www.udemy.com/certificate/UC-53b61232-7931-4f4c-b2ba-8a9183861d91/',
    image: 'udemy-sql-bootcamp.jpg',
  },
  {
    issuer: 'Udemy',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    id: 'UC-06f77234-9fd9-4791-acbf-5394396c0b37',
    url: 'https://www.udemy.com/certificate/UC-06f77234-9fd9-4791-acbf-5394396c0b37/',
    image: 'udemy-nodejs-complete-guide.jpg',
  },
  {
    issuer: 'HackerRank',
    title: 'Node.js (Intermediate)',
    id: 'e6da6daa204d',
    url: 'https://www.hackerrank.com/certificates/e6da6daa204d',
    image: 'hackerrank-nodejs.png',
  },
  {
    issuer: 'HackerRank',
    title: 'Problem Solving (Intermediate)',
    id: 'b70fc22104fd',
    url: 'https://www.hackerrank.com/certificates/b70fc22104fd',
    image: 'hackerrank-problem-solving.png',
  },
  {
    issuer: 'HackerRank',
    title: 'SQL (Intermediate)',
    id: 'e6da6daa204d',
    url: 'https://www.hackerrank.com/certificates/e6da6daa204d',
    image: 'hackerrank-sql.png',
  },
]
