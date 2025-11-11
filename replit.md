# Generic Domain For Sale Landing Page

## Overview

This is a reusable, static landing page template for selling premium domains. The project is a single-page application built with pure HTML, CSS, and vanilla JavaScript, designed for simplicity and easy deployment to GitHub Pages. 

**Key Innovation**: The template automatically detects which domain it's loaded from and updates all content dynamically - no code changes needed when deploying to different domains. It features a professional design with a contact form that uses mailto integration to send inquiries directly to domain@[detected-domain].

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
- `index.html` - Main page structure with semantic HTML sections and dynamic placeholder elements (IDs for domain injection)
- `styles.css` - Global styles with CSS custom properties for theming
- `script.js` - Dynamic domain detection, content population, and contact form handling with mailto integration

### Dynamic Domain Detection

**Solution**: JavaScript-based automatic domain detection and content population.

**How it works**: 
1. On page load, JavaScript reads `window.location.hostname` to detect the current domain
2. The domain is normalized (strips "www." prefix)
3. For localhost/127.0.0.1, defaults to "yourdomain.com" as a placeholder
4. All placeholder elements in the HTML are populated with the detected domain name
5. Page title, header, content sections, and email addresses are all updated dynamically

**Implementation Details**:
- `getCurrentDomain()` function handles domain extraction and normalization
- `populateDomainReferences()` updates all DOM elements with class-based selectors
- Runs on `DOMContentLoaded` event for optimal performance
- Graceful fallback if JavaScript is disabled (shows default placeholder text)

**Benefits**:
- Single codebase works for any domain
- No configuration needed when deploying to different domains
- Reduces maintenance and eliminates hardcoded values
- Perfect for domain portfolio sales pages

### Contact Form Mechanism

**Solution**: Client-side form processing with dynamic mailto link generation.

**How it works**: When the user submits the contact form, JavaScript prevents the default submission, extracts form data (name, email, message), constructs a mailto URL with pre-filled subject and body (including the detected domain), and opens the user's default email client with the recipient set to domain@[detected-domain].

**Trade-offs**:
- **Pros**: No backend required, no spam protection needed, works on static hosts, automatically adapts to any domain
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
- **Target**: domain@[detected-domain] (dynamically generated based on current domain)
- **Data Flow**: Domain detection → Form data → JavaScript encoding → Dynamic mailto URL → User's email client
- **Example**: When deployed to example.com, emails are sent to domain@example.com

### Hosting Platform

**GitHub Pages** (recommended):
- Static file hosting
- HTTPS by default
- Custom domain support (optional)
- Integrated with Git version control

### Browser APIs Used

- **window.location.hostname**: For automatic domain detection
- **DOM API**: For form handling, event listeners, and dynamic content injection
- **encodeURIComponent**: For safely encoding email subject and body
- **window.location.href**: For mailto link activation
- **document.title**: For dynamic page title updates