import React, { useEffect, useState, useRef } from 'react';
import './App.css';

// Enhanced Icon component with loading states
const Icon = ({ path, className, loading }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`${className} ${loading ? 'animate-pulse' : ''}`}
  >
    <path d={path} />
  </svg>
);

// Particle background for hero section
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `rgba(100, 149, 237, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connect particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 149, 237, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" />;
};

// Enhanced Back-to-top button with progress indicator
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      
      setScrollProgress(progress);
      setVisible(scrolled > 300);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`to-top ${visible ? 'show' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <div className="progress-ring">
        <svg width="44" height="44" className="progress-svg">
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="125.6"
            strokeDashoffset={125.6 - (scrollProgress * 125.6) / 100}
            transform="rotate(-90 22 22)"
          />
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M12 5l7 7-1.4 1.4L13 9.8V20h-2V9.8L6.4 13.4 5 12l7-7z" />
      </svg>
    </button>
  );
};

// Interactive Skill Bar Component
const SkillBar = ({ category, items, level }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`skill-${category}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [category]);

  return (
    <div id={`skill-${category}`} className="skill-bar-container">
      <div className="skill-header">
        <h3 className="skill-category">{category}</h3>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{ width: isVisible ? `${level}%` : '0%' }}
        ></div>
      </div>
      <div className="skill-items">
        {items.map((item, index) => (
          <span key={index} className="skill-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

// Enhanced Project Card with hover effects
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-image-container">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className={`project-image ${isHovered ? 'zoomed' : ''}`}
        />
        <div className={`project-overlay ${isHovered ? 'visible' : ''}`}>
          <div className="project-links">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <Icon path="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" className="btn-icon" />
              Live Demo
            </a>
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <Icon path="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" className="btn-icon" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies?.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div className="counter" ref={countRef}>
      <div className="counter-number">{count}+</div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Enhanced portfolio data
  const portfolioData = {
    name: 'Joshua Ortiz',
    title: 'Web Developer',
    bio: 'Versatile Web Developer experienced in WordPress, Shopify, and creating fully customized websites from scratch. Passionate about building responsive, user-focused designs that combine functionality and creativity.',
    contact: {
      email: 'jsh.ortizxc@gmail.com',
      phone: '0976-410-0610',
      location: 'Iligan City, 9200 Philippines',
      linkedin: 'https://linkedin.com/in/joshua-ortiz-47715b370',
      github: 'https://github.com/jshortiz',
    },
    stats: [
      { number: 15, label: 'Projects Completed' },
      { number: 3, label: 'Years Experience' },
      { number: 10, label: 'Happy Clients' },
      { number: 5, label: 'Technologies' }
    ],
    skills: [
      { 
        category: 'Frontend Development', 
        items: ['HTML5', 'CSS3', 'JavaScript', 'React','TypeScript'],
        level: 90
      },
      { 
        category: 'Backend Development', 
        items: ['Node.js', 'Express', 'PHP', 'Laravel', 'Python', 'MySQL'],
        level: 85
      },
      { 
        category: 'Tools & Platforms', 
        items: ['Git','WordPress', 'Shopify'],
        level: 80
      },
      
    ],
    experience: [
      {
        role: 'Shopify & WordPress Developer',
        company: 'Tugas Virtual Solution',
        period: 'May 2025 – Present',
        location: 'Remote',
        description: 'Build and customize Shopify and WordPress sites using Liquid, JavaScript, and CSS. Create responsive, SEO-friendly themes based on client requirements.',
        achievements: [
          'Improved site performance by 40%',
          'Increased client satisfaction scores',
          'Implemented advanced e-commerce features'
        ]
      },
      {
        role: 'IT Support Specialist',
        company: 'City Administrator — ICTC, City of Iligan',
        period: 'Jan 2025 - Apr 2025',
        location: 'Iligan City, Philippines',
        description: 'Completed a 500-hour practical training program at the CAD City Administrator\'s office (ICTC).',
        achievements: [
          'Reduced ticket resolution time by 25%',
          'Implemented new troubleshooting protocols',
          'Trained 15+ staff members on new systems'
        ]
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Information Technology',
        institution: 'St. Michael\'s College',
        period: '2024 - 2025',
        location: 'Iligan City, Philippines',
        gpa: '1.9'
      },
    ],
    projects: [
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
        imageUrl: 'https://placehold.co/600x400/334155/f8fafc?text=E-Commerce+Platform',
        liveUrl: '#',
        sourceUrl: '#',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
      },
      {
        title: 'Task Management App',
        description: 'Collaborative project management tool with drag-and-drop functionality and real-time updates.',
        imageUrl: 'https://placehold.co/600x400/334155/f8fafc?text=Task+Manager',
        liveUrl: '#',
        sourceUrl: '#',
        technologies: ['Vue.js', 'Firebase', 'SCSS', 'PWA']
      },
      {
        title: 'Weather Dashboard',
        description: 'Real-time weather application with interactive maps and predictive analytics.',
        imageUrl: 'https://placehold.co/600x400/334155/f8fafc?text=Weather+App',
        liveUrl: '#',
        sourceUrl: '#',
        technologies: ['JavaScript', 'API Integration', 'Chart.js', 'Geolocation']
      },
    ]
  };

  // Scroll spy for navigation
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="portfolio">
      {/* Enhanced Header with mobile menu */}
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <a href="#home" className="nav-brand" onClick={() => scrollToSection('home')}>
              <span className="brand-text">J.Ortiz</span>
              <span className="brand-dot"></span>
            </a>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-links">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
                  <li key={section}>
                    <a 
                      href={`#${section}`}
                      className={`nav-link ${activeSection === section ? 'active' : ''}`}
                      onClick={() => scrollToSection(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="nav-contact-btn" onClick={() => scrollToSection('contact')}>
                Contact Me!
              </a>
            </div>

            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Enhanced Hero Section with Particles */}
        <section id="home" className="hero">
          <ParticleBackground />
          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-badge">Hey There!</div>
              <h1 className="hero-name">
                <span className="name-gradient">{portfolioData.name}</span>
              </h1>
              <p className="hero-title">{portfolioData.title}</p>
              <p className="hero-bio">{portfolioData.bio}</p>
              
              <div className="hero-stats">
                {portfolioData.stats.map((stat, index) => (
                  <AnimatedCounter 
                    key={index}
                    end={stat.number}
                    label={stat.label}
                  />
                ))}
              </div>

              <div className="hero-buttons">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Icon path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" className="btn-icon" />
                  GitHub
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <Icon path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" className="btn-icon" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="image-wrapper">
                <img src="/grad-pic.jpg" alt={portfolioData.name} className="hero-image" />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll Down</span>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
              <div className="about-content">
                <p>
                  Hey there! I'm Joshua, a passionate Web Developer based in the Philippines who loves 
                  turning ideas into interactive, user-friendly websites. I earned my degree in Information 
                  Technology from St. Michael's College, where I discovered that coding isn't just about 
                  syntax—it's about solving real problems and creating cool things that actually work.
                </p>
                <p>
                  What started as curiosity about how websites tick soon became a full-blown obsession 
                  with clean code, smooth interfaces, and pixel-perfect design. I work across both 
                  front-end and back-end, building projects with tools like React, Node.js, Laravel, 
                  WordPress, and Shopify.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className="highlight-icon" />
                    <span>5+ Years of Experience</span>
                  </div>
                  <div className="highlight-item">
                    <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className="highlight-icon" />
                    <span>50+ Projects Completed</span>
                  </div>
                  <div className="highlight-item">
                    <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className="highlight-icon" />
                    <span>Full-Stack Development</span>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="floating-card">
                  <Icon path="M13 10V3L4 14h7v7l9-11h-7z" className="card-icon" />
                  <h3>Quick Learner</h3>
                  <p>Always exploring new technologies</p>
                </div>
                <div className="floating-card">
                  <Icon path="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" className="card-icon" />
                  <h3>Problem Solver</h3>
                  <p>Creative solutions for complex challenges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="section section-light">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-container">
              {portfolioData.skills.map((skillGroup, index) => (
                <SkillBar
                  key={skillGroup.category}
                  category={skillGroup.category}
                  items={skillGroup.items}
                  level={skillGroup.level}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="section section-light">
          <div className="container">
            <h2 className="section-title">Work Experience</h2>
            <div className="timeline">
              {portfolioData.experience.map((job, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <h3 className="experience-role">{job.role}</h3>
                      <p className="experience-period">{job.period}</p>
                    </div>
                    <div className="experience-subheader">
                      <p className="experience-company">{job.company}</p>
                      <p className="experience-location">{job.location}</p>
                    </div>
                    <p className="experience-description">{job.description}</p>
                    <ul className="achievement-list">
                      {job.achievements?.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="achievement-item">
                          <Icon path="M9 12l2 2 4-4" className="achievement-icon" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Education Section */}
        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="education-cards">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-icon">
                    <Icon path="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" className="card-icon" />
                  </div>
                  <div className="education-content">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-period">{edu.period}</p>
                    <p className="education-location">{edu.location}</p>
                    {edu.gpa && <div className="education-gpa">GPA: {edu.gpa}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer & Contact */}
      <footer id="contact" className="footer">
        <div className="container">
          <h2 className="footer-title">Let's Work Together</h2>
          <p className="footer-text">
            Whether it's a project, an idea, or just a friendly hello — drop me a message anytime!
          </p>

          <div className="contact-methods">
            <a href={`mailto:${portfolioData.contact.email}`} className="contact-method">
              <Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="contact-icon" />
              <span>{portfolioData.contact.email}</span>
            </a>
            <a href={`tel:${portfolioData.contact.phone}`} className="contact-method">
              <Icon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" className="contact-icon" />
              <span>{portfolioData.contact.phone}</span>
            </a>
          </div>

          <div className="footer-socials">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <Icon path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" className="social-icon" />
              GitHub
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <Icon path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" className="social-icon" />
              LinkedIn
            </a>
          </div>

          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Enhanced Back-to-top button */}
      <BackToTop />
    </div>
  );
};

export default App;