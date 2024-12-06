// Menu Toggle for Mobile View
const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.navar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.navar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior of the link

        // Get the target section to scroll to
        const targetSection = document.querySelector(e.target.getAttribute('href'));

        // Scroll to the section with smooth behavior
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Add active class to the clicked link
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Highlight active section as you scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Contact Form Validation (Optional)
const contactForm = document.querySelector('.contact-container form');
contactForm.addEventListener('submit', (e) => {
    // Example of simple validation for required fields
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !subject || !message) {
        e.preventDefault(); // Prevent form submission
        alert("Please fill in all fields.");
    } else {
        alert("Your message has been sent.");
    }
});
