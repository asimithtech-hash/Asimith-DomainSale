# Generic Domain For Sale Landing Page

A professional, static landing page template for selling premium domains. **Automatically detects and displays whichever domain it's loaded from** - no code changes needed!

## Features

- **Fully Dynamic**: Automatically detects the current domain and updates all content
- Clean, modern design optimized for domain sales
- Fully responsive (mobile, tablet, desktop)
- Contact form with mailto integration to domain@[your-domain]
- Smooth animations and professional UI
- No backend required - pure HTML/CSS/JS
- Reusable template - works for any domain without modifications

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
git commit -m "Initial commit: domain for sale landing page"
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

### Custom Domain Setup (Recommended)

To use your actual domain (e.g., yourdomain.com) with GitHub Pages:

1. Add a `CNAME` file to the repository root with your domain: `yourdomain.com`
2. In your domain registrar (e.g., Namecheap, GoDaddy), configure DNS:
   - Add an A record pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record: `YOUR-USERNAME.github.io`
3. In GitHub repository settings under "Pages", add your custom domain
4. Enable "Enforce HTTPS" once DNS propagates (may take 24-48 hours)

**Note**: The page will automatically display your custom domain once DNS is configured - no code changes needed!

## File Structure

```
.
├── index.html          # Main landing page with dynamic placeholders
├── styles.css          # Styling and responsive design
├── script.js           # Domain detection and form handling with mailto
└── README.md           # This file
```

## Technical Details

### Dynamic Content Updates

The `script.js` file dynamically updates the following elements:

- **Page Title**: `[domain] - Premium Domain For Sale`
- **Header**: Large domain name display
- **Benefits Section**: "Why [domain]?" heading
- **Contact Section**: "Interested in acquiring [domain]?" text
- **Footer**: Copyright with domain name
- **Email**: mailto link to `domain@[detected-domain]`

## How It Works - Dynamic Domain Detection

The landing page automatically detects which domain it's running on and updates all content dynamically:

1. **Domain Detection**: JavaScript reads `window.location.hostname` to get the current domain
2. **Auto-Population**: Updates page title, header, content, and email addresses with the detected domain
3. **Localhost Handling**: Shows "yourdomain.com" as a placeholder when running locally
4. **www Handling**: Automatically strips "www." prefix (e.g., www.example.com becomes example.com)

### Email Integration

The contact form uses a mailto link to send inquiries to **domain@[detected-domain]**. When a visitor submits the form, their default email client will open with pre-filled information addressed to domain@yourdomain.com (or whatever domain the page is running on).

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

Free to use for your domain sales pages.
