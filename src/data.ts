import { Project, Game, Publication, SocialLink, Education } from './types';
import canteenImage from './assets/canteen2.png';
import llmrefactoringImage from './assets/refactoring.png';

export const personalInfo = {
  name: 'Bartolomeo Zisa',
  title: "Master's Student in Artificial Intelligence",
  university: 'University of Pisa',
  email: 'bartzisa03@gmail.com',
  location: 'Pisa, Italy',
  bio: `I am a Master's Student in Artificial Intelligence at the University of Pisa and a passionate hobbyist game developer. I am interested in Reinforcement Learning, Generative Deep Learning, and AI for software engineering, in my free time I dabble in indie game development and pixel art creation.`,
  avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQF1Q2J5lktyeQ/profile-displayphoto-scale_400_400/B4DZeiVLKgGUAk-/0/1750775149751?e=1785974400&v=beta&t=-uIfaSVxZdS5GFSvxavdzgS2jBZH_9SVcnCneOXsEQ4',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bartolomeo-zisa-578401311/',
    iconName: 'Linkedin',
    colorClass: 'bg-[#0a66c2]/10 text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white border-[#0a66c2]/20',
  },
  {
    name: 'Itch.io',
    url: 'https://bartholomheow.itch.io/',
    iconName: 'Gamepad2',
    colorClass: 'bg-[#fa5c5c]/10 text-[#fa5c5c] hover:bg-[#fa5c5c] hover:text-white border-[#fa5c5c]/20',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/BartolomeoZisa',
    iconName: 'Github',
    colorClass: 'bg-slate-900/10 text-slate-900 hover:bg-slate-900 hover:text-white border-slate-900/20 dark:text-slate-100',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bart_zisa/', // elegant Instagram username placeholder
    iconName: 'Instagram',
    colorClass: 'bg-[#e1306c]/10 text-[#e1306c] hover:bg-[#e1306c] hover:text-white border-[#e1306c]/20',
  },
  {
    name: 'Newgrounds',
    url: 'https://bartholomheow.newgrounds.com/',
    iconName: 'Tv',
    colorClass: 'bg-[#ffc107]/10 text-[#e0a800] hover:bg-[#ffc107] hover:text-slate-900 border-[#ffc107]/20',
  },
  {
    name: 'Email',
    url: 'mailto:bartzisa03@gmail.com',
    iconName: 'Mail',
    colorClass: 'bg-[#0d9488]/10 text-[#0d9488] hover:bg-[#0d9488] hover:text-white border-[#0d9488]/20',
  },
];

export const educationHistory: Education[] = [
  {
    degree: "M.Sc. in Artificial Intelligence",
    institution: "University of Pisa, Italy",
    period: "2025 - Present",
    description: "Specializing in Machine Learning, Deep Learning, and traditional AI. Knowledge in Optimization and Parallel Computing, and AI for Software Engineering.",
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Pisa, Italy",
    period: "2022 - 2025",
    description: "Solid foundation in theoretical computer science, databases, system programming, algorithms, and software engineering."
  }
];

export const publications: Publication[] = [
  {
    title: "Design Pattern-Based Code Refactoring with LLMs",
    authors: ["Bartolomeo Zisa", "Lucia Passaro", "Jacopo Soldani"],
    venue: "Proceedings of the 2026 IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER)",
    year: 2026,
    abstract: "Large Language Models (LLMs) have demonstrated exceptional performance in code generation and basic code refactoring. However, their capability in systematically applying complex design patterns to refactor legacy code remains largely unexplored. In this paper, we present a comprehensive study and framework for design pattern-based code refactoring with LLMs. We evaluate state-of-the-art models on refactoring structural and behavioral design patterns, and propose an AST-based verification method to ensure semantic correctness. Our results show that combining structured chain-of-thought prompting with AST-based validations dramatically improves both compilation rates and pattern adherence.",
    paperUrl: "https://doi.org/10.1109/SANER67736.2026.00033",
    keywords: ["Design Patterns", "Code Refactoring", "Large Language Models", "Software Evolution", "AST Validation"],
    bibtex: `@inproceedings{zisa2026designpattern,
  author    = {Zisa, Bartolomeo and Passaro, Lucia and Soldani, Jacopo},
  title     = {Design Pattern-Based Code Refactoring with LLMs},
  booktitle = {Proceedings of the 2026 IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER)},
  year      = {2026},
  doi       = {10.1109/SANER67736.2026.00033},
  publisher = {IEEE}
}`
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Design Pattern Refactoring with LLM',
    description: 'The official open-source repository for our SANER 2026 paper "Design Pattern-Based Code Refactoring with LLMs". Contains, evaluation datasets, and a tool for refactoring structural and behavioral design patterns using LLMs.',
    tags: ['Python', 'LLMs', 'Design Patterns', 'Software Evolution'],
    githubUrl: 'https://github.com/Unipisa/LLMDesignPatternRefactoring',
    category: 'Software Engineering',
    imageUrl: llmrefactoringImage,
    //stars: 38,
    //forks: 4
  },
  {
    id: 'proj-2',
      title: 'SokobanAI',
    description: 'A Sokoban puzzle solver using A* search and evolutionary algorithms such as GA, CMAES and NEAT.',
    tags: ['Python', 'AI', 'Evolutionary Algorithms', 'Games'],
    githubUrl: 'https://github.com/alebertz/SokobanAI',
    category: 'AI',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'proj-3',
      title: 'MARL Ecosystem Simulation',
    description: 'Multi-Agent Reinforcement Learning simulation for hare and lynx ecosystem dynamics.',
    tags: ['Python', 'Reinforcement Learning', 'Complex Systems'],
    githubUrl: 'https://github.com/BartolomeoZisa/CMCS',
    category: 'AI',
    imageUrl: 'https://raw.githubusercontent.com/BartolomeoZisa/CMCS/refs/heads/main/images/example.png',
  },
    {
    id: 'proj-4',
      title: 'Unipi Canteen Convenience',
    description: 'Web application for the University of Pisa canteen, calculating best meal tariffs.',
    tags: ['TypeScript', 'React', 'Web Development'],
    githubUrl: '  https://github.com/BartolomeoZisa/Unipi-Canteen-Convenience',
    category: 'Software Engineering',
    imageUrl: canteenImage,
  },  

];

export const games: Game[] = [
  {
    id: 'game-1',
    title: 'Marta',
    description: 'A hauntingly beautiful, narrative-driven 2D puzzle adventure game with stunning atmospheric pixel art. Explore a forgotten city to reconstruct memories of the past.',
    type: 'Game',
    platform: 'Itch.io',
    platformUrl: 'https://bartholomheow.itch.io/marta',
    tags: ['Adventure', 'Puzzle', 'Narrative', 'Pixel Art'],
    imageUrl: 'https://img.itch.zone/aW1nLzIzNTc2NTExLnBuZw==/315x250%23c/6sMk4g.png'
  },
  {
    id: 'game-2',
    title: 'Inverted Merge',
    description: 'A mind-bending spatial puzzle game based on block merging. Moving pieces inverts the color values and physics of adjacent tiles, requiring advanced forward planning.',
    type: 'Game',
    platform: 'Itch.io',
    platformUrl: 'https://bartholomheow.itch.io/inverted-merge',
    tags: ['Puzzle', 'Retro', 'Color Theory', 'Casual'],
    imageUrl: 'https://img.itch.zone/aW1nLzIwOTIzOTc3LnBuZw==/315x250%23c/SIKAs%2B.png'
  },
  {
    id: 'game-3',
    title: 'Programming Escape',
    description: 'Escape from a glitchy mainframe! A logic-platformer where players solve short, visual coding nodes and write minor algorithm snippets to activate bridges, open doors, and override system security.',
    type: 'Game',
    platform: 'Itch.io',
    platformUrl: 'https://bartholomheow.itch.io/programming-escape',
    tags: ['Education', 'Coding', 'Platformer', 'Cyberpunk'],
    imageUrl: 'https://img.itch.zone/aW1nLzIwNjIyMDkzLnBuZw==/315x250%23c/aY%2F36I.png'
  },
  {
    id: 'game-4',
    title: 'Treant Killer',
    description: 'An arcade-style action hack-and-slash game. Play as a forest guardian battling rogue tree giants. Survive escalating waves of monsters while harvesting ancient energy rings.',
    type: 'Game',
    platform: 'Newgrounds',
    platformUrl: 'https://bartholomheow.newgrounds.com/',
    tags: ['Action', 'Survival', 'Hack & Slash', 'Arcade'],
    imageUrl: '' // Will render beautiful interactive placeholder
  },
  {
    id: 'game-5',
    title: 'Brainrot Destruction',
    description: 'A humorous, chaotic arcade action game mocking internet meme culture. Dodge endless falling emojis and stream alerts while defending your dopamine indicators from critical decay.',
    type: 'Game',
    platform: 'Itch.io',
    platformUrl: 'https://bartholomheow.itch.io/brainrot-destruction',
    tags: ['Action', 'Comedy', 'Meme', 'Fast-Paced'],
    imageUrl: 'https://img.itch.zone/aW1nLzE3ODQ1NjgzLnBuZw==/315x250%23c/SZ6w9U.png'
  },
  {
    id: 'game-6',
    title: '16bit Elemental Enemies Pack',
    description: 'A beautifully animated high-quality asset pack containing hand-crafted pixel art characters. Includes idle, attack, run, and death animations for fire, earth, wind, and water golems.',
    type: 'Asset Pack',
    platform: 'Itch.io',
    platformUrl: 'https://bartholomheow.itch.io/16bit-elemental-enemies',
    tags: ['Asset Pack', 'Pixel Art', 'Game Assets', 'Fantasy'],
    imageUrl: 'https://img.itch.zone/aW1nLzIyNTM2NzkzLnBuZw==/315x250%23c/CM0Wxm.png'
  }
];
