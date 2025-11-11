# asimith.ai Domain Landing Page

## Overview

This is a static landing page for selling the premium domain **asimith.ai**. The project is a single-page application built with pure HTML, CSS, and vanilla JavaScript, designed for simplicity and easy deployment to GitHub Pages. It features a professional design with a contact form that uses mailto integration to send inquiries directly to domain@asimith.ai.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript - no frameworks or build tools required.

**Design Pattern**: Single-page static website with component-based CSS organization.

**Rationale**: A static approach was chosen because:
- No backend processing is needed for a domain sales page
- Simplifies deployment to GitHub Pages
- Reduces maintenance overhead
- Ensures fast load times and maximum uptime

**Key Components**:
- `index.html` - Main page structure with semantic HTML sections (header, hero, benefits, contact form)
- `styles.css` - Global styles with CSS custom properties for theming
- `script.js` - Contact form handling with mailto integration

### Contact Form Mechanism

**Solution**: Client-side form processing with mailto link generation.

**How it works**: When the user submits the contact form, JavaScript prevents the default submission, extracts form data (name, email, message), constructs a mailto URL with pre-filled subject and body, and opens the user's default email client.

**Trade-offs**:
- **Pros**: No backend required, no spam protection needed, works on static hosts
- **Cons**: Requires user to have email client configured, less seamless than server-side form processing

### Styling Approach

**Solution**: CSS custom properties (variables) for consistent theming with gradient backgrounds and modern UI patterns.

**Key Design Decisions**:
- Mobile-first responsive design
- CSS animations for visual polish (fadeIn effects)
- Gradient backgrounds for modern aesthetic
- Card-based layout for benefits section
- Smooth color transitions and hover effects

### Deployment Strategy

**Primary Target**: GitHub Pages for zero-cost hosting.

**Local Development**: Python's built-in HTTP server (`python3 -m http.server`) for quick testing.

**Why this approach**: 
- No build process required
- Version control integrated with hosting
- Free SSL certificate via GitHub
- Custom domain support available
- Simple deployment workflow (git push)

## External Dependencies

### Third-Party Services

**None** - The application is completely self-contained with no external API calls, CDN dependencies, or third-party JavaScript libraries.

### Email Integration

**mailto Protocol**: Uses the standard mailto URL scheme to trigger the user's email client.
- **Target**: domain@asimith.ai
- **Data Flow**: Form data → JavaScript encoding → mailto URL → User's email client

### Hosting Platform

**GitHub Pages** (recommended):
- Static file hosting
- HTTPS by default
- Custom domain support (optional)
- Integrated with Git version control

### Browser APIs Used

- **DOM API**: For form handling and event listeners
- **encodeURIComponent**: For safely encoding email subject and body
- **window.location.href**: For mailto link activation