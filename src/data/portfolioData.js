import { 
  SiSvelte, 
  SiJavascript, 
  SiPython,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";
import { 
  FaCalculator, 
  FaGamepad, 
  FaSkull, 
  FaCashRegister, 
  FaBroadcastTower, 
  FaRobot, 
  FaSearch,
  FaReact
} from "react-icons/fa";

export const personalInfo = {
  name: "Fatuh Sani Ansori",
  role: "Web Developer",
  email: "sanioriginal@gmail.com",
  description: "I am a Computer Science student and a passionate tech enthusiast. Welcome to my portfolio website where I showcase my creations, projects, and anything else I want to share with the world.",
};

export const socialLinks = {
  github: "https://github.com/fatuhsa",
  facebook: "https://www.facebook.com/sanixitd",
  instagram: "https://www.instagram.com/vinsmokesani22",
  youtube: "https://youtube.com/@sanimonid",
  telegram: "https://t.me/suradirajayadiningrat",
};

export const skills = [
  { name: "Svelte", icon: SiSvelte },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "Tailwind", icon: SiTailwindcss },
];

export const projects = [
  {
    title: "YGO",
    description: "A specialized application for Yu-Gi-Oh! card mechanics and deck management. It features a comprehensive database of cards and interactive deck-building tools.",
    category: "Game",
    techStack: ["TypeScript", "React"],
    liveUrl: "#",
    sourceUrl: "https://github.com/fatuhsa/YGO",
    icon: FaGamepad,
    gridSize: "md"
  },
  {
    title: "DUNGEON-BATTLER",
    description: "An immersive dungeon crawler game experience with procedural generation and turn-based combat. Explore dark dungeons and fight various monsters to survive.",
    category: "Game",
    techStack: ["TypeScript", "Canvas"],
    liveUrl: "#",
    sourceUrl: "https://github.com/fatuhsa/DUNGEON-BATTLER",
    icon: FaSkull,
    gridSize: "md"
  },
  {
    title: "ALL-POS",
    description: "A modern Point of Sale system designed for small to medium businesses. It includes inventory tracking, sales reporting, and employee management features.",
    category: "Web App",
    techStack: ["TypeScript", "React", "Node.js"],
    liveUrl: "#",
    sourceUrl: "https://github.com/fatuhsa/ALL-POS",
    icon: FaCashRegister,
    gridSize: "md"
  },
  {
    title: "SANIX-POKEDEX",
    description: "A digital encyclopedia for Pokémon enthusiasts using the PokeAPI. Features detailed stats, move sets, and evolution chains for all known Pokémon.",
    category: "Web App",
    techStack: ["Svelte", "Tailwind"],
    liveUrl: "#",
    sourceUrl: "https://github.com/fatuhsa/SANIX-POKEDEX",
    icon: SiSvelte,
    gridSize: "md"
  },
  {
    title: "STREAMFLOW",
    description: "A streamlined platform to manage live streaming via VPS. It automates server setup and broadcast management for content creators.",
    category: "Tool",
    techStack: ["EJS", "Node.js", "Express"],
    liveUrl: "#",
    sourceUrl: "https://github.com/fatuhsa/STREAMFLOW",
    icon: FaBroadcastTower,
    gridSize: "sm"
  },
  {
    title: "ELAINA-MULTIDEVICE",
    description: "A versatile multi-device automated bot designed for messaging platforms. It supports various commands, automation scripts, and media processing.",
    category: "Utility",
    techStack: ["JavaScript", "Node.js"],
    liveUrl: "#",
    sourceUrl: "https://github.com/fatuhsa/ELAINA-MULTIDEVICE",
    icon: FaRobot,
    gridSize: "sm"
  },
  {
    title: "CEKI",
    description: "A specialized calculator specifically built for the Ceki card game. It helps players track scores and manage game rounds efficiently.",
    category: "Tool",
    techStack: ["JavaScript", "React"],
    liveUrl: "https://ceki.vercel.app/",
    sourceUrl: "#",
    icon: FaGamepad,
    gridSize: "sm"
  },
  {
    title: "ENDPOINT_FINDER",
    description: "A Python-based tool for discovering and managing API endpoints during development. It scans codebases and documents available routes automatically.",
    category: "Tool",
    techStack: ["Python"],
    liveUrl: "#",
    sourceUrl: "https://github.com/fatuhsa/ENDPOINT_FINDER",
    icon: FaSearch,
    gridSize: "sm"
  },
  {
    title: "KASIR-LAUNDRY",
    description: "A digital laundry management system that simplifies the cashier process. It tracks orders, customer history, and payment status in real-time.",
    category: "Web App",
    techStack: ["JavaScript", "Node.js"],
    liveUrl: "#",
    sourceUrl: "https://github.com/fatuhsa/KASIR-LAUNDRY",
    icon: SiJavascript,
    gridSize: "sm"
  },
  {
    title: "SANIX-CALCULATOR",
    description: "A clean and responsive calculator application with a modern UI. It supports basic arithmetic operations and maintains a history of calculations.",
    category: "Utility",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://sanix-calculator.vercel.app/",
    sourceUrl: "#",
    icon: FaCalculator,
    gridSize: "sm"
  }
];
