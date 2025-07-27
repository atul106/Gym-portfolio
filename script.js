document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('active'); // Close mobile menu on click
        });
    });

    // About section slider
    const aboutSlides = document.querySelectorAll('.about-content');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentAboutSlide = 0;

    function showAboutSlide(index) {
        aboutSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            slide.parentElement.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    leftArrow.addEventListener('click', () => {
        currentAboutSlide = (currentAboutSlide - 1 + aboutSlides.length) % aboutSlides.length;
        showAboutSlide(currentAboutSlide);
    });

    rightArrow.addEventListener('click', () => {
        currentAboutSlide = (currentAboutSlide + 1) % aboutSlides.length;
        showAboutSlide(currentAboutSlide);
    });

    showAboutSlide(currentAboutSlide);

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    showTestimonial(currentTestimonial);
    setInterval(nextTestimonial, 5000);

    // Form submission (prevent default for demo)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo, so no data is sent.');
        contactForm.reset();
    });
});