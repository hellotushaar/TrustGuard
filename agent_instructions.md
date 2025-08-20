# Web App Prototype Development Instructions

## Overview

This markdown file serves as the instruction set for the VS Code agent (e.g., Cursor or similar AI-assisted coding tool) to build a prototype web app from scratch based on the provided site map diagram. The app is a frontend-only prototype.

**Key Constraints:**

- Use **only HTML, CSS, and JavaScript**. No frameworks (e.g., no React, Vue, Angular), no libraries beyond vanilla JS (e.g., no Bootstrap, Tailwind unless implemented manually).
- No backend, no database, no server-side logic. All data should be hardcoded in JS (e.g., as arrays/objects) or simulated using localStorage for persistence (e.g., for sign-in state, user progress).
- This is a prototype: Focus on functionality and navigation. Simulate dynamic elements like search, filters, uploads, and suggestions with mock data and basic JS interactions.
- For UI styling: refer to the file named "UI_sample" and follow the same design style when you are styling. Use the color palette as in the file named "color_theme". Use different shades but dont go out of the theme colors. Use icons and illustrations wherever relevant from external sources like Font Awesome. Make the UI look similar to the sample image in terms of layout, fonts, and components. Use CSS to replicate it as closely as possible.

**Project Structure:**
Create the following files in this same folder:

- `index.html`: Main entry point (landing page).
- `styles.css`: All CSS styles.
- `script.js`: All JavaScript logic for navigation, simulations, and interactions.
- `assets/`: Folder for any mock images/icons (generate placeholders if needed, e.g., via base64 or simple CSS shapes).

## Site Map Implementation

Based on the diagram, implement the following pages and flows. Use JS to handle "signed in" state (e.g., a button to toggle sign-in, storing in localStorage). If not signed in, redirect to deepfake detection after landing.

### 1. Landing Page (AKA Homepage)

- Display a welcome message, app description (e.g., "TrustGuard: Educate and Protect Against Deepfakes").
- Sign-in button/form (simulate with username/password fields; on submit, set localStorage 'isSignedIn' to true and redirect to Dashboard).
- If already signed in (check localStorage), auto-redirect to Dashboard.
- Guest option: Button to proceed without sign-in to Deepfake Detection.
- UI: Hero section with logo, tagline, and buttons. Match sample image for layout.

### 2. If Signed In: Dashboard

- Sections:
  - **Recent Notifications**: List 3-5 mock notifications (e.g., "New CTF available!", use UL/LI).
  - **Overview of Knowledge Hub Explored**: Progress bars or cards showing topics covered (hardcode 3-4 topics like "Deepfakes 101", "AI Ethics").
  - **Overview of CTFs**: Cards for recent CTFs played, with scores/badges.
  - **Overview of Communities**: List of joined communities with activity summaries.
  - **Notifications**: Bell icon with dropdown of alerts.
  - **Badges and Personal Progress**: Display metrics like "CTFs Completed: 5", "Community Impacts: 10 posts", "Topics Covered: 8". Use circles or badges for visuals.
- Navigation bar at top/bottom with links to: Admin, Knowledge Hub, CTFs, Communities, Smart Suggest.
- Sign-out button: Clears localStorage and redirects to Landing.
- UI: Grid layout for overviews. Use flexbox/grid CSS. Match sample for dashboard cards.

### 3. Sub-Pages (Accessible from Dashboard)

- **Admin (Account Settings and Personal Preferences)**:

  - Form for username, email, password change (simulate save to localStorage).
  - Preferences: Checkboxes for topics of interest (e.g., "Deepfakes", "CTFs").
  - UI: Simple form layout.

- **Knowledge Hub**:

  - Search bar: Input field + button; on search, filter mock data and display results.
  - Filters: Dropdown or buttons for topics (e.g., "All", "AI", "Security").
  - Most Searched Topics: Display 4-5 cards if no search (hardcode popular ones).
  - Search Results: List of articles/topics with titles, descriptions, and "Read More" buttons (alert mock content on click).
  - UI: Search at top, filters below, results in grid.

- **CTFs**:

  - Search bar: Similar to Knowledge Hub.
  - Filters: Based on topics (e.g., "Beginner", "Advanced").
  - Most Played CTFs: Display 4-5 cards if no search.
  - Search Results: Cards with CTF name, description, "Play" button (simulate game with simple JS quiz/alert win/loss).
  - UI: Similar to Knowledge Hub, but with play buttons.

- **Communities (Cards)**:

  - List of Communities: Grid of cards (hardcode 6-8 communities like "Deepfake Fighters", "CTF Pros").
  - Tabs: "All Communities" and "My Communities" (filter based on mock joined list in localStorage).
  - Each card: Name, description, member count, "Join" button (update localStorage).
  - UI: Tab navigation, card grid.

- **Smart Suggest (Ask TrustGuard)**:
  - Input field for questions (e.g., "Suggest a CTF for beginners").
  - On submit, simulate AI response with mock suggestions (hardcode responses based on keywords).
  - UI: ChatGPT-like interface with input at bottom, suggestions above.

### 4. If Not Signed In: Deepfake Detection

- Upload video/audio: File input (use JS to "analyze" – simulate with delay and random result like "Deepfake detected: 80%").
- Based on detection: Suggest CTFs/communities (hardcode lists, e.g., "Try Deepfake CTF", link to sign-in for more).
- Button to sign up for full access.
- UI: Upload section, result display, suggestion cards.

## Implementation Steps for Agent

1. **Setup Base Structure**:

   - Create `index.html` with basic HTML skeleton (doctype, head with CSS/JS links, body).
   - Add `styles.css`: Define global styles (fonts, colors from sample), resets, and component classes.
   - Add `script.js`: Define routing function (e.g., hide/show sections based on hash or JS state).

2. **Implement Navigation and State**:

   - Use `window.location.hash` for routing (e.g., #dashboard, #knowledge-hub).
   - On load, check localStorage for 'isSignedIn'.
   - Functions for sign-in/out, page rendering.

3. **Simulate Data**:

   - Hardcode arrays/objects for CTFs, communities, topics, etc.
   - Use localStorage for user-specific data (progress, joined communities).

4. **Add Interactivity**:

   - Event listeners for searches, filters, uploads.
   - For deepfake: Use FileReader to "read" file, then timeout for mock analysis.
   - For CTFs: Simple JS quizzes (prompt questions, check answers).

5. **Responsive Design**:

   - Use media queries in CSS for mobile/desktop.

6. **Testing**:

   - Ensure navigation works without refresh.
   - Simulate flows: Sign in -> Dashboard -> Sub-pages -> Sign out -> Deepfake.

7. **Polish UI**:
   - Once UI sample image is provided, adjust CSS to match (e.g., colors, spacing).
   - Use CSS for icons (or Font Awesome via CDN if allowed, but prefer pure CSS).
