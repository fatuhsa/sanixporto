# Enhanced Bento Portfolio Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the bento portfolio with substantive project details, high-impact hero section, and professional actionability.

**Architecture:** Data-driven enhancement of the Bento system. Adding categorization and multi-link support to project cards.

**Tech Stack:** React, Tailwind CSS, Lucide React (or react-icons).

---

### Task 1: Substantive Data Refactor

**Files:**
- Modify: `src/data/portfolioData.js`

- [ ] **Step 1: Update data structure**
Add `category`, `techStack`, `liveUrl`, `sourceUrl`, and longer descriptions to all projects. Add a `skills` array.

```javascript
// src/data/portfolioData.js updates
export const projects = [
  {
    title: "YGO",
    description: "A specialized project related to Yu-Gi-Oh! card mechanics or data. Built to handle complex card interactions and game state management.",
    category: "Game",
    techStack: ["TypeScript", "Canvas", "State"],
    liveUrl: "https://ygo.vercel.app", // example
    sourceUrl: "https://github.com/fatuhsa/YGO",
    icon: FaGamepad,
    gridSize: "md"
  },
  // ... apply to all
];

export const skills = [
  { name: "Svelte", icon: SiSvelte },
  { name: "React", icon: FaCode },
  { name: "Node.js", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "Tailwind", icon: FaCode },
];
```

- [ ] **Step 2: Commit**
```bash
git add src/data/portfolioData.js
git commit -m "data: enhance project substance and add skills"
```

---

### Task 2: The "Power Hero" Card

**Files:**
- Modify: `src/components/ProfileCard.jsx`

- [ ] **Step 1: Enhance ProfileCard visuals**
Add large "SANIX" branding and a tagline. Add a "Download CV" action.

```jsx
// src/components/ProfileCard.jsx
import BentoCard from "./BentoCard";
import { personalInfo } from "../data/portfolioData";
import { FaFileDownload } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between p-8">
      <div>
        <span className="text-sm text-zinc-500 uppercase tracking-widest">Web Developer</span>
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">SANIX</h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
          {personalInfo.description}
        </p>
      </div>
      <div className="flex gap-4">
        <a href="#" className="bg-white text-black px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors">
          <FaFileDownload /> Resume
        </a>
      </div>
    </BentoCard>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/ProfileCard.jsx
git commit -m "feat: enhance ProfileCard with high-impact hero style"
```

---

### Task 3: Skills & Actionable Contact

**Files:**
- Create: `src/components/SkillsCard.jsx`
- Create: `src/components/ContactCard.jsx`

- [ ] **Step 1: Create SkillsCard**
A card to display the skills grid.

```jsx
// src/components/SkillsCard.jsx
import BentoCard from "./BentoCard";
import { skills } from "../data/portfolioData";

export default function SkillsCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-1">
      <h3 className="text-zinc-500 text-sm uppercase mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
           <div key={skill.name} className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-xl">
             <skill.icon className="text-xl" />
             <span className="text-sm font-medium">{skill.name}</span>
           </div>
        ))}
      </div>
    </BentoCard>
  );
}
```

- [ ] **Step 2: Create ContactCard**
A card with a "Let's Talk" button.

```jsx
// src/components/ContactCard.jsx
import BentoCard from "./BentoCard";
import { personalInfo } from "../data/portfolioData";

export default function ContactCard() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between">
      <h3 className="text-xl font-bold italic">Let's talk?</h3>
      <a href={`mailto:${personalInfo.email}`} className="bg-zinc-800 hover:bg-zinc-700 p-4 rounded-2xl text-center font-bold transition-colors">
        Contact Me
      </a>
    </BentoCard>
  );
}
```

- [ ] **Step 3: Commit**
```bash
git add src/components/SkillsCard.jsx src/components/ContactCard.jsx
git commit -m "feat: add skills and actionable contact cards"
```

---

### Task 4: Substantive Project Cards

**Files:**
- Modify: `src/components/ProjectCard.jsx`

- [ ] **Step 1: Update ProjectCard to show tags and buttons**

```jsx
// src/components/ProjectCard.jsx
import BentoCard from "./BentoCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const spanClass = project.gridSize === "md" ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1";
  const Icon = project.icon;

  return (
    <BentoCard className={`${spanClass} flex flex-col justify-between group h-full`}>
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-zinc-700 transition-colors">
            <Icon className="text-2xl" />
          </div>
          <div className="flex gap-2">
            <a href={project.sourceUrl} target="_blank" className="text-zinc-500 hover:text-white transition-colors p-2">
              <FaGithub size={20} />
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" className="text-zinc-500 hover:text-white transition-colors p-2">
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map(tech => (
          <span key={tech} className="text-[10px] uppercase tracking-tighter bg-zinc-800 px-2 py-0.5 rounded-md text-zinc-500">{tech}</span>
        ))}
      </div>
    </BentoCard>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/ProjectCard.jsx
git commit -m "feat: enhance project cards with tech tags and links"
```

---

### Task 5: Integration & Better Footer

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Update Footer with labels**
```jsx
// src/components/Footer.jsx
import { socialLinks } from "../data/portfolioData";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-8">
          <a href={socialLinks.github} target="_blank" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <FaGithub /> <span>GitHub</span>
          </a>
          <a href={socialLinks.instagram} target="_blank" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a href={socialLinks.telegram} target="_blank" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <FaTelegram /> <span>Telegram</span>
          </a>
        </div>
        <p className="text-zinc-600 text-sm">© 2026 Fatuh Sani Ansori. Built with passion.</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Final App.jsx Assembly**
Group projects by category and integrate new cards.

```jsx
// src/App.jsx integration
// ... existing imports ...
import SkillsCard from "./components/SkillsCard";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <HelmetProvider>
      <div className="bg-black text-white select-none min-h-screen font-sans">
        <SEO ... />
        <Navbar />
        <main className="pb-20">
          <BentoGrid>
            <ProfileCard />
            <SkillsCard />
            <ContactCard />
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </BentoGrid>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
```

- [ ] **Step 3: Commit**
```bash
git add src/App.jsx src/components/Footer.jsx
git commit -m "feat: final assembly with categorization and better footer"
```
