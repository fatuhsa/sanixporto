# Design Spec: Enhanced Bento Portfolio Overhaul

**Status:** Approved  
**Author:** sanxmon & Gemini CLI  
**Date:** 2026-06-11

## 1. Objective
Deeply enhance the Bento Portfolio to move beyond "showing projects" to "telling a story." This overhaul addresses Hero impact, project substance, categorization, and professional actionability (Contact/Resume).

## 2. Component Architecture Changes

### 2.1 Hero & Profile (Enhanced `ProfileCard`)
*   **Visual Impact:** Large bold typography for "SANIX".
*   **Tagline:** "Building digital experiences with precision and passion."
*   **Resume/CV:** Integrated "Download CV" button.
*   **About Section:** Short, punchy narrative integrated into the large card.

### 2.2 Functional Cards (New & Improved)
*   **`SkillsCard` (New):** A 2x1 card showcasing a grid of tech icons with text labels (React, Svelte, Node, Python, etc.).
*   **`ContactCard` (Improved):** Replaces the vague "Available for Work" card. Features a "Let's Talk" headline, a button to open email, and a "Copy Email" utility.
*   **`SocialCard` (Relocated):** Moved to the footer or integrated into a more natural position with text labels.

### 2.3 Project Cards (Substantive `ProjectCard`)
*   **Tech Stack Tags:** Small, subtle chips showing the primary tools used for each project.
*   **Substance:** Longer descriptions (3-4 lines) to explain the *how* and *why*.
*   **Actionable Links:** "View Project" button and "Source Code" link for every project.
*   **Category Logic:** Grouped display in the Bento grid (e.g., separating Web Apps from Tools).

## 3. Data Schema Update (`portfolioData.js`)
*   `projects`:
    *   `category`: 'Web App' | 'Game' | 'Tool' | 'Utility'
    *   `techStack`: string[] (e.g., ['React', 'Tailwind'])
    *   `featured`: boolean (determines large card sizing)
    *   `sourceUrl`: string (GitHub link)
    *   `liveUrl`: string (Deployment link)
*   `skills`: string[] (Array of skills to be displayed in the new SkillsCard)

## 4. Navigation & Footer
*   **Navbar:** Clear "About", "Projects", "Skills", "Contact" links that anchor-scroll.
*   **Footer:** Minimalist, containing social links with labels and copyright.

## 5. Visual Polish
*   **Interactivity:** Refined hover states.
*   **Grid Layout:** Optimized for "Flow" — featured projects always appear at the top-left, followed by the Hero/Profile, then categorized projects.
