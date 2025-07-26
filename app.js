
   // Navbar toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      }
    });
  });

  // Typewriter effect
  const typewriterEl = document.querySelector('.typewriter');
  const phrases = [
    "AI Video Dubbing Expert",
    "CGI Ad Producer",
    "Social Media Manager",
    "HTML CSS JS Developer"
  ];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;
  let pauseTime = 1500;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (!isDeleting) {
      typewriterEl.textContent = currentPhrase.slice(0, currentCharIndex + 1);
      currentCharIndex++;
      if (currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
        return;
      }
    } else {
      typewriterEl.textContent = currentPhrase.slice(0, currentCharIndex - 1);
      currentCharIndex--;
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(type, isDeleting ? typeSpeed / 2 : typeSpeed);
  }
  type();

  // Floating particles in hero
  const particlesContainer = document.getElementById('particles');
  const particleCount = 40;

  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = randomRange(4, 12);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${randomRange(0, 100)}%`;
    particle.style.animationDuration = `${randomRange(8, 20)}s`;
    particle.style.animationDelay = `${randomRange(0, 20)}s`;
    particle.style.backgroundColor = `rgba(0, 255, 255, ${randomRange(0.05, 0.15)})`;
    particlesContainer.appendChild(particle);
  }

  // IntersectionObserver for scroll animations
  const observerOptions = {
    threshold: 0.15
  };
  const fadeEls = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeEls.forEach(el => observer.observe(el));

  // Animate skill progress bars on scroll
  const skillBars = document.querySelectorAll('#about .progress-bar > div');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-target');
        bar.style.width = targetWidth + '%';
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact form submission (dummy)
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });

  function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
 let btn1 = document.querySelector('.service-cta')
 btn1.addEventListener('click', () => {window.open("https://www.fiverr.com/m_hasnain782/provide-professional-video-translation-dubbing-and-subtitles-using-ai")}
)

let btn2 = document.querySelector('.btn2')
 btn2.addEventListener('click', () => {window.open("https://www.fiverr.com/m_hasnain782/create-stunning-3d-cgi-product-commercial-ads-using-ai-tools")}
)

let btn3 = document.querySelector('.btn3')
btn3.addEventListener('click', () => {window.open("https://www.fiverr.com/m_hasnain782/be-your-expert-x-twitter-manager-and-verified-facebook-business-manager")})

let btn4 = document.querySelector("btn4")
btn4.addEventListener('click' , () => {
    window.open("https://wa.me/=923166362069")
})