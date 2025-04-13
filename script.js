document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const links = document.querySelectorAll('.menu-links a, .nav-links a');
 
 
    // Toggle mobile navigation
    hamburger.addEventListener('click', () => {
        menuLinks.classList.toggle('open');
        hamburgerIcon.classList.toggle('open');
    });
 
 
    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.classList.remove('open');
            hamburgerIcon.classList.remove('open');
        });
    });
 
 
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuLinks.contains(e.target) && !hamburger.contains(e.target)) {
            menuLinks.classList.remove('open');
            hamburgerIcon.classList.remove('open');
        }
    });
 
 
    // Handle navigation
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // If it's an anchor link (starts with #), handle smooth scrolling
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
               
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
            // For page links (like about.html), let the default behavior handle it
        });
    });
 }); 