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
 
 
    // Smooth scrolling for navigation links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
           
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
 }); 