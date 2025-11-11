# asimith.ai - Domain For Sale Landing Page

A professional, static landing page for the premium domain **asimith.ai**.

## Features

- Clean, modern design optimized for domain sales
- Fully responsive (mobile, tablet, desktop)
- Contact form with mailto integration to domain@asimith.ai
- Smooth animations and professional UI
- No backend required - pure HTML/CSS/JS

## Local Development

To run locally:

```bash
python3 -m http.server 5000
```

Then visit `http://localhost:5000` in your browser.

## GitHub Pages Deployment

### Quick Start

1. Create a new repository on GitHub
2. Push this code to your repository:

```bash
git init
git add .
git commit -m "Initial commit: asimith.ai domain for sale page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

4. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Custom Domain Setup (Optional)

To use asimith.ai with GitHub Pages:

1. Add a `CNAME` file to the repository root with content: `asimith.ai`
2. In your domain registrar (e.g., Namecheap, GoDaddy), configure DNS:
   - Add an A record pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record: `YOUR-USERNAME.github.io`
3. In GitHub repository settings under "Pages", add your custom domain: `asimith.ai`
4. Enable "Enforce HTTPS" once DNS propagates (may take 24-48 hours)

## File Structure

```
.
├── index.html          # Main landing page
├── styles.css          # Styling and responsive design
├── script.js           # Form handling with mailto
└── README.md           # This file
```

## Email Integration

The contact form uses a mailto link to send inquiries to **domain@asimith.ai**. When a visitor submits the form, their default email client will open with pre-filled information.

For production use, consider integrating a backend service like:
- FormSpree
- Netlify Forms
- SendGrid
- AWS SES

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

All rights reserved © 2025 asimith.ai
