// SVG Icons Registry
const SVGIcons = {
  // Socials
  github: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  email: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  
  // Technologies & Skills
  python: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M14.25.18a3.3 3.3 0 0 0-2-.18C10.7.27 9.4 1 9.4 2.22V4h4.75a1.72 1.72 0 0 1 1.72 1.72v2.75a1.72 1.72 0 0 1-1.72 1.72h-1.63L11 11.75V14h3a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V2.2C13 1 12.18.25 11.23.18zM9.75 23.82c1.53.1 2-.12 3-.54.95-.42 2.25-1.15 2.25-2.37V19H10.25A1.72 1.72 0 0 1 8.53 17.28v-2.75A1.72 1.72 0 0 1 10.25 13H12l1.62-1.63L13.82 9.75H11a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1v1.8c0 1.2.82 1.95 1.77 2.02zM11.25 2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm1.5 17.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/></svg>`,
  javascript: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 3h18v18H3V3zm12.52 14.07c0-1.42-.87-2.12-2.61-2.87-.87-.38-1.5-.68-1.5-1.12 0-.34.28-.58.74-.58.55 0 .9.28 1.13.72l1.83-1.14c-.54-.95-1.47-1.46-2.8-1.46-1.85 0-3.03.95-3.03 2.52 0 1.34.82 2.05 2.53 2.76 1.03.43 1.5.78 1.5 1.25 0 .47-.4.72-1.03.72-.73 0-1.2-.4-1.52-1l-1.82 1.05c.57 1.12 1.63 1.76 3.2 1.76 2.05 0 3.4-.95 3.4-2.86zm-5.63-2.02c-.52-.3-.52-.86 0-1.16l1.37-.8c.95-.55.95-1.95 0-2.5l-1.37-.8c-.73-.42-1.63-.42-2.36 0l-1.37.8c-.95.55-.95 1.95 0 2.5l1.37.8c.52.3.52.86 0 1.16l-1.37.8c-.95.55-.95 1.95 0 2.5l1.37.8c.73.42 1.63.42 2.36 0l1.37-.8c.95-.55.95-1.95 0-2.5l-1.37-.8z"/></svg>`,
  htmlcss: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M1.5 22L0 2.45h24L22.5 22 12 24.9 1.5 22zm16.55-14.7H6.75l.38 4.2h10.53l-.42 4.63-5.24 1.43-5.24-1.43-.28-3.15H4.25l.48 5.4 7.27 1.97 7.27-1.97.78-8.9z"/></svg>`,
  java: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><path d="M6 1v3"></path><path d="M10 1v3"></path><path d="M14 1v3"></path></svg>`,
  cpp: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M15 9a3 3 0 1 0 0 6"></path><path d="M18 12h4"></path><path d="M20 10v4"></path></svg>`,
  sql: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
  
  instagram: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  cart: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
  network: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  phone: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  location: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  
  // Project Categories
  weather: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19A3.5 3.5 0 0 0 21 15.5a3.5 3.5 0 0 0-3-3.48A7 7 0 1 0 5 15.5a3.5 3.5 0 0 0 3.5 3.5h9z"></path></svg>`,
  heart: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
  gift: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
  qr: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><line x1="7" y1="7" x2="7" y2="7.01"></line><line x1="17" y1="7" x2="17" y2="7.01"></line><line x1="17" y1="17" x2="17" y2="17.01"></line><line x1="7" y1="17" x2="7" y2="17.01"></line></svg>`,
  check: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  code: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
};

// Document Load Event
document.addEventListener("DOMContentLoaded", () => {
  initializePortfolio();
  setupTypewriter();
  setupNavbar();
  setupProgressBarsAnimation();
  setupContactForm();
});

// Initialize Portfolio Data Injection
function initializePortfolio() {
  // Set HTML Titles & Headers
  document.title = `${portfolioData.name} - Modern & Premium Portfolio`;
  document.getElementById("hero-name").textContent = portfolioData.name;
  document.getElementById("hero-description").textContent = portfolioData.description;
  document.getElementById("footer-name").textContent = portfolioData.name;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  
  // Set Avatar Image or Initials
  const avatarCircle = document.querySelector(".main-avatar-circle");
  if (portfolioData.avatarUrl) {
    avatarCircle.innerHTML = `<img src="${portfolioData.avatarUrl}" alt="${portfolioData.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
  } else {
    const avatarLetter = portfolioData.name ? portfolioData.name.charAt(0).toUpperCase() : "Y";
    avatarCircle.innerHTML = `<span class="avatar-letter">${avatarLetter}</span>`;
  }
  
  // Inject Social Links (Hero Section)
  const socialsContainer = document.getElementById("hero-socials");
  socialsContainer.innerHTML = "";
  if (portfolioData.socials.github) {
    socialsContainer.appendChild(createSocialLink(portfolioData.socials.github, "github", "GitHub"));
  }
  if (portfolioData.socials.linkedin) {
    socialsContainer.appendChild(createSocialLink(portfolioData.socials.linkedin, "linkedin", "LinkedIn"));
  }
  if (portfolioData.socials.instagram) {
    socialsContainer.appendChild(createSocialLink(portfolioData.socials.instagram, "instagram", "Instagram"));
  }
  if (portfolioData.socials.email) {
    const isRealEmail = portfolioData.socials.email.includes("@");
    socialsContainer.appendChild(createSocialLink(isRealEmail ? `mailto:${portfolioData.socials.email}` : "#contact", "email", isRealEmail ? "Email" : "Contact"));
  }
  
  // Inject Floating Badge SVGs (Hero Visuals)
  document.getElementById("badge-python").innerHTML = SVGIcons.python;
  document.getElementById("badge-html").innerHTML = SVGIcons.htmlcss;
  document.getElementById("badge-js").innerHTML = SVGIcons.javascript;

  // Inject About Me paragraphs
  const aboutTextDiv = document.getElementById("about-paragraphs");
  aboutTextDiv.innerHTML = "";
  portfolioData.about.paragraphs.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    aboutTextDiv.appendChild(p);
  });
  
  // Inject About Me Stats
  const statsDiv = document.getElementById("about-stats");
  statsDiv.innerHTML = "";
  portfolioData.about.stats.forEach(stat => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    `;
    statsDiv.appendChild(card);
  });
  
  // Inject Skills
  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = "";
  portfolioData.skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    
    const iconSVG = SVGIcons[skill.icon] || SVGIcons.code;
    
    card.innerHTML = `
      <div class="skill-header">
        <div class="skill-info">
          <div class="skill-icon-wrap">${iconSVG}</div>
          <span class="skill-name">${skill.name}</span>
        </div>
        <span class="skill-percent">${skill.level}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-level="${skill.level}"></div>
      </div>
    `;
    skillsContainer.appendChild(card);
  });
  
  // Inject Projects
  const projectsContainer = document.getElementById("projects-container");
  projectsContainer.innerHTML = "";
  portfolioData.projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    
    const iconSVG = SVGIcons[project.icon] || SVGIcons.code;
    const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("");
    
    card.innerHTML = `
      <div class="project-icon-box">${iconSVG}</div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-tags">${tagsHTML}</div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" class="project-link">
          ${SVGIcons.github} Code
        </a>
        <a href="${project.live}" target="_blank" class="project-link">
          ${SVGIcons.externalLink} Live
        </a>
      </div>
    `;
    projectsContainer.appendChild(card);
  });
  
  // Inject Journey Timeline
  const journeyContainer = document.getElementById("journey-container");
  journeyContainer.innerHTML = "";
  portfolioData.journey.forEach(item => {
    const journeyItem = document.createElement("div");
    journeyItem.className = "timeline-item";
    journeyItem.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-date">${item.date}</div>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-desc">${item.description}</p>
    `;
    journeyContainer.appendChild(journeyItem);
  });
  
  // Inject Contact Info List (Left side)
  const contactList = document.getElementById("contact-list-container");
  contactList.innerHTML = "";
  if (portfolioData.socials.email) {
    const isEmailLink = portfolioData.socials.email.includes("@");
    contactList.appendChild(createContactItem("email", portfolioData.socials.email, isEmailLink ? `mailto:${portfolioData.socials.email}` : "#contact"));
  }
  if (portfolioData.socials.phone) {
    contactList.appendChild(createContactItem("phone", portfolioData.socials.phone, `tel:${portfolioData.socials.phone.replace(/\s+/g, '')}`));
  }
  if (portfolioData.socials.location) {
    contactList.appendChild(createContactItem("location", portfolioData.socials.location, `https://maps.google.com/?q=${encodeURIComponent(portfolioData.socials.location)}`));
  }
}

// Helper to create a social link icon
function createSocialLink(url, iconName, label) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.className = "social-icon";
  a.setAttribute("aria-label", label);
  a.innerHTML = SVGIcons[iconName];
  return a;
}

// Helper to create a contact list item
function createContactItem(iconName, text, linkUrl) {
  const item = document.createElement("div");
  item.className = "contact-item";
  item.innerHTML = `
    <div class="contact-icon-box">${SVGIcons[iconName]}</div>
    <a href="${linkUrl}" target="_blank" class="contact-value">${text}</a>
  `;
  return item;
}

// Typewriter Role Text Animation
function setupTypewriter() {
  const target = document.getElementById("hero-role");
  const words = portfolioData.roles || ["Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;
  
  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50; // faster when deleting
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 150; // normal speed when typing
    }
    
    // Switch states
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1500; // wait before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // wait before typing next word
    }
    
    setTimeout(type, typeSpeed);
  }
  
  if (words.length > 0) {
    setTimeout(type, 800);
  }
}

// Navbar Scroll Effect and Active Links Highlight
function setupNavbar() {
  const header = document.querySelector(".navbar-header");
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-link");
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-nav-menu");
  
  // Scrolled navbar state
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    // Highlight links based on current scroll offset
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active");
      }
    });
  });
  
  // Mobile Hamburger Toggle
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
  
  // Close mobile menu on nav click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileToggle.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });
}

// Intersection Observer for Skills Progress Bars Animation
function setupProgressBarsAnimation() {
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".skill-bar-fill");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const level = bar.getAttribute("data-level");
          bar.style.width = `${level}%`;
        });
        // Stop observing after animating
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  if (skillsSection) {
    observer.observe(skillsSection);
  }
}

// Contact Form and success modal controls
function setupContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const modal = document.getElementById("success-modal");
  const closeModalBtn = document.getElementById("modal-close-btn");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector(".btn-submit");
      const originalBtnHTML = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';
      
      const payload = {
        access_key: "29901146-535f-47f2-b0e4-da240df2e2c3",
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        phone: document.getElementById("contact-phone").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value,
        from_name: "Aman Kumar Jangid Portfolio"
      };
      
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(async (response) => {
        if (response.status === 200) {
          form.reset();
          // Open Modal
          modal.classList.add("open");
          document.body.style.overflow = "hidden"; // disable scroll
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Network error. Please check your internet connection.");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      });
    });
  }
  
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("open");
      document.body.style.overflow = "auto"; // enable scroll
    });
  }
  
  // Close modal when clicking outside the card
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "auto";
    }
  });
}
