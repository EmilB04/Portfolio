interface ProjectTypes {
  id: number;
  title: string;
  languages?: string[];
  description: string;
  details: string;
  localPath: string;
  url: string;
  images?: string[];
  videos?: string[];
  tags?: string[];
}

const ProjectsList: ProjectTypes[] = [
  {
    id: 0,
    title: 'PageProbe',
    languages: ['.NET', 'C#'],
    description:
      'PageProbe is a .NET 8-based open-source web crawler library for C# that enables automated retrieval and monitoring of content from statically generated websites.',
    details:
      'PageProbe is a simple and extensible .NET 8 library for web crawling and content extraction. It supports HTML parsing, handling of robots.txt, and can extract data such as text, metadata, images, links, and multimedia. Results can be exported to CSV, JSON, XML, or Markdown. The library is designed to be testable and easy to extend, making it suitable for automation, data mining, and content monitoring on websites without APIs.',
    localPath: 'pageprobe',
    url: 'https://github.com/EmilB04/Rammeverk-og-.NET/tree/main/Project/PageProbe',
    images: [],
    videos: [],
    tags: [
      '.NET',
      'dotnet8',
      'C#',
      'open-source',
      'web-crawler',
      'site-crawler',
      'html-parsing',
      'robots.txt',
      'data-extraction',
      'content-extraction',
      'csv',
      'json',
      'xml',
      'markdown',
      'text',
      'metadata',
      'images',
      'links',
      'multimedia',
      'extensible',
      'testable',
      'automation',
      'data-mining',
      'library',
    ],
  },
  {
    id: 1,
    title: 'VarsEL',
    languages: ['Java', 'Vue', 'Quasar', 'npm'],
    description:
      'VarsEL is an open-source project that offers a simple and efficient way to view and retrieve electricity prices in Norway.',
    details:
      'VarsEL is a Java library with Vue and Quasar front-end that provides access to electricity prices in Norway. It fetches data from hvakosterstrømmen.no and offers a simple API for retrieving electricity prices for different time periods. The project is designed to be easy to use and integrate into other applications, supporting both real-time data and historical prices.',
    localPath: 'varsel',
    url: 'https://github.com/EmilB04/VarsEL',
    images: [
      '/images/projects/VarsEL/landing.png',
      '/images/projects/VarsEL/detaljer.png',
      '/images/projects/VarsEL/historikk.png',
    ],
    videos: [],
    tags: [
      'Java',
      'Vue',
      'Quasar',
      'npm',
      'open-source',
      'electricity-prices',
      'Norway',
      'API',
      'real-time-data',
      'historical-prices',
      'hvakosterstrømmen.no',
      'data-access',
      'library',
      'integration',
    ],
  },
  {
    id: 2,
    title: 'ChoreChamp',
    languages: [
      'React Native',
      'JavaScript',
      'TypeScript',
      'Figma',
      'Expo',
      'Firebase',
      'iOS',
      'Android',
      'npm',
    ],
    description:
      'ChoreChamp is a mobile app that helps families manage and organize household chores in a fun and engaging way.',
    details:
      'ChoreChamp is a mobile application designed to make household chore management easier and more enjoyable for families. The app allows users to create and assign chores, set deadlines, and track progress. It features a reward system to motivate users, making chore completion a fun activity. ChoreChamp is available on both iOS and Android platforms, providing a user-friendly interface for all family members. ChoreChamp is designed in Figma and built using React Native with Expo, ensuring cross-platform compatibility and a seamless user experience.',
    localPath: 'chorechamp',
    url: 'https://github.com/EmilB04/ChoreChamp',
    images: [
      '/images/projects/ChoreChamp/Hjem.png',
      '/images/projects/ChoreChamp/Historikk.png',
      '/images/projects/ChoreChamp/Legg til.png',
      '/images/projects/ChoreChamp/Varsel.png',
      '/images/projects/ChoreChamp/Profil.png',
    ],
    videos: [],
    tags: [
      'mobile-app',
      'iOS',
      'Android',
      'expo',
      'react-native',
      'household-chores',
      'task-management',
      'family-organization',
      'reward-system',
      'user-friendly',
      'cross-platform',
      'productivity',
    ],
  },
  {
    id: 3,
    title: 'SkillSwap',

    description:
      'SkillSwap is a web application that enables users to exchange skills and services through a secure platform, supporting both bartering and paid transactions.',
    details:
      'SkillSwap is a comprehensive web application designed to connect people who want to exchange skills and services. Users can create detailed profiles, post advertisements for services they offer or need, and engage in either skill swapping or paid transactions. The platform features advanced filtering by categories, search functionality, secure messaging system, and a review system that builds trust within the community. Services range from gardening and home maintenance to web design and professional consulting, creating a diverse marketplace for skill exchange.',
    localPath: 'skillswap',
    url: 'https://github.com/EmilB04/SkillSwap',
    images: [
      '/images/projects/SkillSwap/dashboard.png',
      '/images/projects/SkillSwap/ad.png',
      '/images/projects/SkillSwap/new_ad.png',
      '/images/projects/SkillSwap/profile.png',
    ],
    tags: [
      'web-application',
      'skill-exchange',
      'service-marketplace',
      'user-profiles',
      'advertisement-system',
      'filtering',
      'search-functionality',
      'secure-messaging',
      'review-system',
      'swap',
      'paid-transactions',
      'community-platform',
      'trust-building',
      'diverse-services',
      'professional-services',
    ],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    languages: ['Vue.js', 'HTML', 'CSS', 'Quasar', 'JavaScript', 'TypeScript'],
    description:
      'A personal portfolio website to showcase my projects, skills, and experience as a developer.',
    details:
      'This portfolio website is built using Vue.js and Quasar Framework, providing a modern and responsive design. It features sections for my projects, skills, experience, and contact information. The website is optimized for multiple devices and accessibility, ensuring a great user experience across all devices. It serves as a platform to highlight my work and connect with potential clients or employers.',
    localPath: 'portfolio-website',
    url: 'https://github.com/EmilB04/Portfolio',
    images: [],
    videos: ['/videos/landing.mp4'],
    tags: [
      'Vue.js',
      'Quasar',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'portfolio',
      'responsive-design',
      'web-development',
      'personal-website',
      'projects-showcase',
      'skills',
      'experience',
      'contact-information',
      'accessibility',
      'modern-design',
    ],
  },
  {
    id: 5,
    title: 'HangBot',
    languages: ['React', 'JavaScript', 'Vite', 'Tailwind CSS'],
    description:
      'HangBot is an AI-powered hangman game where a bot generates the mystery word and players compete on a persistent leaderboard.',
    details:
      'HangBot is a React and Vite-based hangman game inspired by FleetBot\'s flow. Players enter a username, choose a difficulty, and try to guess bot-generated mystery words before running out of attempts. The game includes hints, category reveals, difficulty-based scoring, and a persistent leaderboard. It is deployed on Cloudflare Pages and uses a Pages Function with D1 support for storing leaderboard results, with a localStorage fallback when the database binding is unavailable.',
    localPath: 'hangbot',
    url: 'https://github.com/SpillArena/HangBot',
    images: [
      '/images/projects/HangBot/landing.png',
      '/images/projects/HangBot/runde.png',
      '/images/projects/HangBot/runde-forsok.png',
      '/images/projects/HangBot/resultat.png',
    ],
    videos: [],
    tags: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Cloudflare Pages',
      'D1',
      'hangman',
      'leaderboard',
      'game',
      'bot-generated',
      'difficulty-modes',
    ],
  },
  {
    id: 6,
    title: 'FleetBot',
    languages: ['React', 'JavaScript', 'CSS', 'HTML'],
    description:
      'FleetBot is a Battleship game where you face off against an AI opponent with a global leaderboard powered by Cloudflare D1.',
    details:
      'FleetBot is a Battleship game built with React and Cloudflare Pages Functions. The game runs with an AI opponent, and leaderboard data is persisted in Cloudflare D1. User settings are stored in localStorage, and the project is set up to deploy entirely on Cloudflare Pages with an SPA fallback for direct route refreshes. It is a practical example of a cloud-native frontend with a lightweight backend function for shared game state.',
    localPath: 'fleetbot',
    url: 'https://github.com/SpillArena/FleetBot',
    images: [
      '/images/projects/FleetBot/landing.png',
      '/images/projects/FleetBot/place-ships.png',
      '/images/projects/FleetBot/placed-ships.png',
      '/images/projects/FleetBot/ongoing-game.png',
      '/images/projects/FleetBot/ongoing-game-shot.png',
      '/images/projects/FleetBot/result.png',
    ],
    videos: [],
    tags: [
      'React',
      'Cloudflare Pages',
      'Pages Functions',
      'D1',
      'Battleship',
      'AI opponent',
      'leaderboard',
      'game',
      'localStorage',
    ],
  },
];

export default ProjectsList;
