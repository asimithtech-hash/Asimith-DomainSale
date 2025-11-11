document.addEventListener('DOMContentLoaded', function() {
    function getCurrentDomain() {
        let hostname = window.location.hostname;
        
        if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
            return 'yourdomain.com';
        }
        
        const parts = hostname.split('.');
        
        if (parts.length >= 2) {
            return parts.slice(-2).join('.');
        }
        
        return hostname;
    }
    
    function populateDomainReferences() {
        const domain = getCurrentDomain();
        
        document.getElementById('page-title').textContent = `${domain} - Premium Domain For Sale`;
        
        const headerDomain = document.getElementById('header-domain');
        if (headerDomain) {
            headerDomain.textContent = domain;
        }
        
        const benefitsDomain = document.getElementById('benefits-domain');
        if (benefitsDomain) {
            benefitsDomain.textContent = domain;
        }
        
        const contactDomain = document.getElementById('contact-domain');
        if (contactDomain) {
            contactDomain.textContent = domain;
        }
        
        const footerDomain = document.getElementById('footer-domain');
        if (footerDomain) {
            footerDomain.textContent = domain;
        }
    }
    
    populateDomainReferences();
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const domain = getCurrentDomain();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const subject = encodeURIComponent(`Domain Inquiry for ${domain} from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message/Offer:\n${message}\n\n` +
            `---\n` +
            `This inquiry was submitted via ${domain} domain landing page.`
        );
        
        const mailtoLink = `mailto:domain@${domain}?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        contactForm.reset();
        
        alert('Your default email client will open. Please send the email to complete your inquiry.');
    });
});
