function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

function closeMenu() {
    document.getElementById('navMenu').classList.remove('active');
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .exp-card, .project-card, .edu-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

window.addEventListener('click', function(e) {
    const nav = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    if (nav.classList.contains('active') && !nav.contains(e.target) && e.target !== toggle) {
        nav.classList.remove('active');
    }
});
