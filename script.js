document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const subject = encodeURIComponent(`Domain Inquiry for asimith.ai from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message/Offer:\n${message}\n\n` +
            `---\n` +
            `This inquiry was submitted via asimith.ai domain landing page.`
        );
        
        const mailtoLink = `mailto:domain@asimith.ai?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        contactForm.reset();
        
        alert('Your default email client will open. Please send the email to complete your inquiry.');
    });
});
