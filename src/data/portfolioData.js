import { 
  SiSvelte, 
  SiJavascript, 
  SiTelegram, 
  SiNodedotjs, 
  SiPython, 
  SiTailwindcss, 
  SiVite,
  SiWhatsapp,
  SiOpenai
} from "react-icons/si";
import { FaCalculator, FaTools, FaCode, FaGamepad } from "react-icons/fa";

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

export const projects = [
  {
    title: "Ceki",
    description: "A specialized calculator designed for the Ceki card game, streamlining score tracking.",
    link: "https://ceki.vercel.app/",
    tags: ["Web", "Tool"],
    icon: FaGamepad
  },
  {
    title: "Age Calculator",
    description: "An interactive tool to calculate exactly how long you have lived in years, months, and days.",
    link: "https://agelatoria.vercel.app/",
    tags: ["Utility", "JS"],
    icon: FaCalculator
  },
  {
    title: "Telegram Bot",
    description: "A feature-rich automated bot for Telegram built with modern Node.js practices.",
    link: "https://github.com/fatuhsa/sanix-bot",
    tags: ["Bot", "Node.js"],
    icon: SiTelegram
  },
  {
    title: "Simple Calculator",
    description: "A clean, responsive basic calculator app for quick daily computations.",
    link: "https://sanix-calculator.vercel.app/",
    tags: ["Simple", "UI"],
    icon: SiJavascript
  },
  {
    title: "KASIR-LAUNDRY",
    description: "Sistem kasir laundry digital untuk mempermudah manajemen bisnis.",
    link: "https://github.com/fatuhsa/KASIR-LAUNDRY",
    tags: ["Business", "CRUD"],
    icon: SiJavascript
  },
  {
    title: "SANIX-POKEDEX",
    description: "A digital encyclopedia for Pokémon enthusiasts.",
    link: "https://github.com/fatuhsa/SANIX-POKEDEX",
    tags: ["Svelte", "API"],
    icon: SiSvelte
  },
  {
    title: "AI-CHAF",
    description: "An AI-powered project for interactive chat and assistance.",
    link: "https://github.com/fatuhsa/AI-CHAF",
    tags: ["AI", "Chat"],
    icon: SiOpenai
  },
  {
    title: "TEMPLATE-GALER",
    description: "A specialized template for gallery-based web applications.",
    link: "https://github.com/fatuhsa/TEMPLATE-GALER",
    tags: ["Template", "UI"],
    icon: SiTailwindcss
  },
  {
    title: "FZYXSNX",
    description: "A unique personal project showcasing experimental features.",
    link: "https://github.com/fatuhsa/FZYXSNX",
    tags: ["Personal", "Experimental"],
    icon: FaCode
  }
];
