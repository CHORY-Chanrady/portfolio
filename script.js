document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded successfully!');
  
    // Highlight active navigation link
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('#nav-links a');
  
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
      console.log('Active section:', current);
    });
  
    // Toggle skills visibility
    const toggleSkillsBtn = document.getElementById('toggle-skills');
    const skillList = document.getElementById('skill-list');
    toggleSkillsBtn.addEventListener('click', () => {
      skillList.classList.toggle('hidden');
      console.log('Skills toggled');
    });
  
    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      console.log('Dark mode toggled');
    });
  
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submitted');
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
});