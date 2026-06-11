# Modern Bento Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the React portfolio into a high-contrast minimalist Bento Grid.

**Architecture:** A modular bento grid system using CSS Grid and Tailwind CSS. Data-driven cards that adapt their size based on metadata.

**Tech Stack:** React, Tailwind CSS, Lucide React (or existing react-icons).

---

### Task 1: Refactor Portfolio Data

**Files:**
- Modify: `src/data/portfolioData.js`

- [ ] **Step 1: Add layout metadata to projects**
Add `gridSize` ('sm', 'md', 'lg') to projects to determine their bento size.

```javascript
// Example modification in src/data/portfolioData.js
export const projects = [
  {
    title: "Ceki",
    // ...
    gridSize: "md", // Featured
    icon: FaGamepad
  },
  {
    title: "Age Calculator",
    // ...
    gridSize: "sm",
    icon: FaCalculator
  },
  // ... apply to all
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/portfolioData.js
git commit -m "data: add gridSize metadata to projects"
```

---

### Task 2: Create Bento Primitives

**Files:**
- Create: `src/components/BentoGrid.jsx`
- Create: `src/components/BentoCard.jsx`

- [ ] **Step 1: Create BentoCard component**
A base wrapper for all bento items with consistent styling and hover effects.

```jsx
// src/components/BentoCard.jsx
export default function BentoCard({ children, className = "" }) {
  return (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-3xl p-6 transition-all duration-300 hover:border-zinc-700 hover:scale-[1.01] ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Create BentoGrid component**
The main grid container.

```jsx
// src/components/BentoGrid.jsx
export default function BentoGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 py-12 auto-rows-[180px]">
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/BentoCard.jsx src/components/BentoGrid.jsx
git commit -m "feat: add bento grid primitives"
```

---

### Task 3: Implement Functional Cards

**Files:**
- Create: `src/components/ProfileCard.jsx`
- Create: `src/components/ProjectCard.jsx`
- Create: `src/components/SocialCard.jsx`

- [ ] **Step 1: Create ProfileCard**
Large card for bio. Spans 2 columns on desktop.

```jsx
// src/components/ProfileCard.jsx
import BentoCard from "./BentoCard";
import { personalInfo } from "../data/portfolioData";

export default function ProfileCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-end gap-4">
      <h1 className="text-4xl md:text-5xl font-bold">{personalInfo.name}</h1>
      <p className="text-zinc-400 text-lg leading-relaxed">{personalInfo.description}</p>
    </BentoCard>
  );
}
```

- [ ] **Step 2: Create SocialCard**
Small cards for quick links.

```jsx
// src/components/SocialCard.jsx
import BentoCard from "./BentoCard";
import { socialLinks } from "../data/portfolioData";
import { FaGithub, FaInstagram, FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";

export default function SocialCard() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-1 flex flex-wrap gap-6 items-center justify-center">
      <a href={socialLinks.github} target="_blank" className="text-3xl hover:text-white transition-colors"><FaGithub /></a>
      <a href={socialLinks.instagram} target="_blank" className="text-3xl hover:text-white transition-colors"><FaInstagram /></a>
      <a href={socialLinks.telegram} target="_blank" className="text-3xl hover:text-white transition-colors"><FaTelegram /></a>
    </BentoCard>
  );
}
```

- [ ] **Step 3: Create ProjectCard**
Dynamic sizing based on `gridSize`.

```jsx
// src/components/ProjectCard.jsx
import BentoCard from "./BentoCard";

export default function ProjectCard({ project }) {
  const spanClass = project.gridSize === "md" ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1";
  const Icon = project.icon;

  return (
    <BentoCard className={`${spanClass} flex flex-col justify-between group`}>
      <div className="flex justify-between items-start">
        <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-zinc-700 transition-colors">
          <Icon className="text-2xl" />
        </div>
        <a href={project.link} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
           <span className="sr-only">Visit</span>
           ↗
        </a>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-zinc-400 text-sm line-clamp-2">{project.description}</p>
      </div>
    </BentoCard>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ProfileCard.jsx src/components/ProjectCard.jsx src/components/SocialCard.jsx
git commit -m "feat: implement bento cards"
```

---

### Task 4: Integrate and Clean Up

**Files:**
- Modify: `src/App.jsx`
- Delete: `src/components/Introduction.jsx`
- Delete: `src/components/Projects.jsx`
- Delete: `src/components/ProjectItem.jsx`

- [ ] **Step 1: Update App.jsx with Bento Layout**

```jsx
// src/App.jsx
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";
import ProfileCard from "./components/ProfileCard";
import SocialCard from "./components/SocialCard";
import ProjectCard from "./components/ProjectCard";
import { personalInfo, projects } from "./data/portfolioData";

function App() {
  return (
    <HelmetProvider>
      <div className="bg-black text-white select-none min-h-screen font-sans">
        <SEO 
          title={`${personalInfo.name} | ${personalInfo.role}`}
          description={personalInfo.description}
        />
        <Navbar />
        <main className="pb-20">
          <BentoGrid>
            <ProfileCard />
            <SocialCard />
            <BentoCard className="md:col-span-1 md:row-span-1 flex items-center justify-center border-dashed border-zinc-700 bg-transparent">
               <span className="text-zinc-500 font-medium">Available for Work</span>
            </BentoCard>
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

export default App;
```

- [ ] **Step 2: Remove old components**

```bash
rm src/components/Introduction.jsx src/components/Projects.jsx src/components/ProjectItem.jsx
```

- [ ] **Step 3: Run lint to ensure no broken imports**

Run: `npm run lint`

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git rm src/components/Introduction.jsx src/components/Projects.jsx src/components/ProjectItem.jsx
git commit -m "feat: complete bento integration and cleanup"
```
