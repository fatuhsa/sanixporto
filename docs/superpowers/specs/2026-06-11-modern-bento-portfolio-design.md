# Design Spec: Modern Bento Portfolio (High-Contrast Mono)

**Status:** Draft  
**Author:** Gemini CLI  
**Date:** 2026-06-11

## 1. Objective
Transform the existing React portfolio from a traditional vertical layout into a modern, minimalist Bento Grid. The goal is to align the portfolio's visual identity with the user's active, experimental GitHub presence while maintaining a professional, "high-end" aesthetic.

## 2. Visual Identity (High-Contrast Mono)
*   **Palette:** 
    *   Background: Pure Black (`#000000`)
    *   Cards: Zinc 900 (`#18181b`)
    *   Borders: Zinc 800 (`#27272a`)
    *   Primary Text: White (`#ffffff`)
    *   Secondary Text: Zinc 400 (`#a1a1aa`)
*   **Typography:** Clean sans-serif (system fonts or Inter).
*   **Interactivity:** Subtle hover effects (slight scale, border brightening).

## 3. Architecture & Component Structure

### 3.1 Components
*   **`Layout` (in `App.jsx`):** Wraps the entire application with a max-width container and consistent padding.
*   **`BentoGrid`:** A CSS Grid container that manages the responsive layout (1 column on mobile, 4 columns on desktop).
*   **`BentoCard`:** A base wrapper component for all cards, handling backgrounds, borders, and hover animations.
*   **`ProfileCard`:** Displays name, role, and bio. (Size: Large)
*   **`ProjectCard`:** Displays project title, description, tags, and link. (Size: Variable - Featured projects are larger).
*   **`SocialCard`:** A compact card for social media links. (Size: Small)

### 3.2 Data Strategy
Update `src/data/portfolioData.js` to include layout hints:
*   Add `featured: boolean` or `gridSize: 'sm' | 'md' | 'lg'` to each project.

## 4. Implementation Plan (Conceptual)
1.  **Refactor Data:** Update `portfolioData.js` with layout metadata.
2.  **Clean Up:** Remove old `Introduction`, `Projects`, and `ProjectItem` components that don't fit the bento model.
3.  **Build Bento System:** Create the `BentoGrid` and `BentoCard` primitives.
4.  **Implement Specific Cards:** Build out the `ProfileCard` and `ProjectCard`.
5.  **Refine Responsive Design:** Ensure the grid collapses gracefully on smaller screens.

## 5. Success Criteria
*   The site feels "alive" through subtle animations.
*   Information is dense but readable.
*   The "Minimalist Modern" vibe is consistent across all sections.
*   Mobile experience is just as polished as desktop.
