# Copilot Instructions for Claude Workspace

This workspace is a VS Code workspace for the "claude" project, now containing a static website for 에이포스솔라시스템 (Aforce Solar System), a solar energy service provider.

## Architecture Overview

- **Project Type**: Static HTML/CSS/JS website
- **Main Files**: `index.html` (main page), `style.css` (styling), `script.js` (interactivity)
- **Purpose**: Promotional website for solar energy services, similar to solarshare.co.kr but customized for Aforce Solar System
- **Data Flows**: Client-side only; no backend or database
- **Structural Decisions**: Simple single-page layout with sections for hero, benefits, stats, services, and contact

## Developer Workflows

- **Version Control**: Git repository initialized on `main` branch. Use `git add`, `git commit`, `git push` for changes.
- **Builds and Tests**: No build system; static files. Test by running local server: `python3 -m http.server 8000`
- **Debugging**: Use browser dev tools for client-side issues. Check console for JS errors.
- **Running the Site**: Use `python3 -m http.server 8000` in terminal, then open http://localhost:8000
- **Commands**: 
  - Start server: `python3 -m http.server 8000`
  - No custom scripts yet.

## Project Conventions

- **Naming**: Use Korean for content (service name, descriptions); English for code (variables, comments)
- **File Organization**: Root level for main files; `.github/` for instructions
- **Styling**: CSS with flexbox for responsive layout; color scheme inspired by solar energy themes (greens, blues)
- **JavaScript**: Vanilla JS for simple interactions like smooth scrolling

## Integration Points

- **External Dependencies**: None; pure HTML/CSS/JS
- **Cross-Component Communication**: Direct DOM manipulation in JS

## Key Files

- `index.html`: Main webpage structure with Korean content for solar services, includes modal popup for consultation
- `rental.html`: Rental income page with calculator, case studies, and process steps
- `style.css`: Responsive styling with hero section, card layouts, and modal styles
- `script.js`: Smooth scrolling navigation and modal popup functionality
- `claude.code-workspace`: VS Code workspace configuration
- `.github/copilot-instructions.md`: This file for AI guidance

Update this file as the project evolves with specific examples and patterns.