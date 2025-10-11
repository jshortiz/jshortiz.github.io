import React, { useEffect, useState } from 'react';
import './App.css';

// Helper component for SVG icons
const Icon = ({ path, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);

// Back-to-top floating button (appears after scrolling)
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      className={`to-top ${visible ? 'show' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      {/* Up arrow icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M12 5l7 7-1.4 1.4L13 9.8V20h-2V9.8L6.4 13.4 5 12l7-7z" />
      </svg>
    </button>
  );
};

// Small helper to build an email link that works well on desktop and mobile
const buildEmailHref = (email, subject = '', body = '') => {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent || '' : '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  const enc = encodeURIComponent;
  if (isMobile) {
    // Mobile: open default mail app
    let href = `mailto:${email}`;
    const params = [];
    if (subject) params.push(`subject=${enc(subject)}`);
    if (body) params.push(`body=${enc(body)}`);
    if (params.length) href += `?${params.join('&')}`;
    return href;
  }

  // Desktop: open Gmail compose in a new tab
  let href = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(email)}`;
  if (subject) href += `&su=${enc(subject)}`;
  if (body) href += `&body=${enc(body)}`;
  return href;
};

const App = () => {
  // Portfolio data
  const portfolioData = {
    name: 'Joshua Ortiz',
    title: 'Aspiring Full Stack Developer',
    bio: 'Proactive and adaptable IT fresh graduate eager to leverage academic knowledge in real-world projects. A fast learner with a growth mindset, I thrive in team environments and value open, clear communication. Seeking a full-time role where I can expand my skillset, deliver innovative solutions, and contribute immediately with resilience, an open mind, and a collaborative spirit.',
    contact: {
      email: 'jsh.ortizxc@gmail.com',
      phone: '0976-410-0610',
      location: 'Iligan City, 9200 Philippines',
      linkedin: 'https://linkedin.com/in/joshua-ortiz-47715b370',
      github: 'https://github.com/jshortiz',
    },
    skills: [
      { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'PHP', 'Laravel', 'MySQL'] },
      { category: 'Networking', items: ['Network Devices', 'Firewall Concepts', 'IP Addressing', 'Subnetting'] },
      { category: 'Internet of Things (IoT)', items: ['Arduino', 'Sensors & Modules'] },
      { category: 'Operating Systems', items: ['Windows 10/11', 'CMD', 'PowerShell'] },
    ],
    experience: [
      {
        role: 'Shopify & WordPress Developer',
        company: 'Tugas Virtual Solution',
        period: 'May 2025 – Present',
        location: 'Remote',
        description: 'Build and customize Shopify and WordPress sites using Liquid, JavaScript, and CSS. Create responsive, SEO-friendly themes based on client requirements. Implement features like location-based visibility and conditional logic. Optimize site speed and ensure cross-browser compatibility.'
      },
      {
        role: 'IT Support',
        company: 'City Administrator — ICTC, City of Iligan',
        period: 'Jan 2025 - Apr 2025',
        location: 'Iligan City, Philippines',
        description: 'Completed a 500-hour practical training program at the CAD City Administrator\'s office (ICTC). Supported operations through hardware/software installation, network troubleshooting, and user support.'
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Information Technology',
        institution: 'St. Michael\'s College',
        period: '2024 - 2025',
        location: 'Iligan City, Philippines',
      },
    ],
    projects: [
      {
        title: 'Project One Title',
        description: 'Lorem Ipsum.',
        imageUrl: 'https://placehold.co/600x400/334155/f8fafc?text=Project+One',
        liveUrl: '#',
        sourceUrl: '#',
      },
      {
        title: 'Project Two Title',
        description: 'Lorem Ipsum',
        imageUrl: 'https://placehold.co/600x400/334155/f8fafc?text=Project+Two',
        liveUrl: '#',
        sourceUrl: '#',
      },
      {
        title: 'Project Three Title',
        description: 'Lorem Ipsum',
        imageUrl: 'https://placehold.co/600x400/334155/f8fafc?text=Project+Three',
        liveUrl: '#',
        sourceUrl: '#',
      },
    ]
  };

  // Optional: customize the prefilled subject/body of the email
  const emailSubject = 'Inquiry from your portfolio';
  const emailBody = 'Hi Joshua,\n\nI saw your portfolio and would love to connect.\n\nBest regards,\n';
  const emailHref = buildEmailHref(portfolioData.contact.email, emailSubject, emailBody);

  return (
    <div className="portfolio">
      {/* -- Header & Navigation -- */}
      <header className="header">
        <div className="container">
          <nav className="navbar">
            {/* Made the logo a link (no underline) */}
            <a href="https://jshortiz.github.io/" className="nav-brand" style={{ textDecoration: 'none' }}>
              J.Ortiz
            </a>
            <ul className="nav-menu">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact" className="nav-contact-btn">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* -- Hero Section -- */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <h1 className="hero-name">{portfolioData.name}</h1>
              <p className="hero-title">{portfolioData.title}</p>
              <p className="hero-bio">{portfolioData.bio}</p>
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
              {/* Image from /public */}
              <img src="/grad-pic.jpg" alt={portfolioData.name} className="hero-image" />
            </div>
          </div>
        </section>

        {/* -- About Me Section -- */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p>
                Hello! I'm Joshua, a passionate developer based in the Philippines. I recently graduated with a degree in Information Technology from St. Michael's College, where I discovered my passion for creating dynamic and user-friendly web applications.
              </p>
              <p>
                My journey into tech started with a fascination for how things work, which quickly evolved into a love for coding and problem-solving. I'm proficient in front-end technologies like React, HTML, and CSS, as well as back-end development using Node.js and Laravel. I'm always eager to learn new things and take on challenging projects that push my skills to the next level. When I'm not coding, I enjoy exploring new places and watching movies.
              </p>
            </div>
          </div>
        </section>

        {/* -- Skills Section -- */}
        <section id="skills" className="section section-light">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {portfolioData.skills.map(skillGroup => (
                <div key={skillGroup.category} className="skill-card">
                  <h3 className="skill-card-title">{skillGroup.category}</h3>
                  <ul className="skill-list">
                    {skillGroup.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Projects Section -- */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="project-card">
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live Demo</a>
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-tertiary">Source Code</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Experience Section -- */}
        <section id="experience" className="section section-light">
          <div className="container">
            <h2 className="section-title">Work Experience</h2>
            <div className="experience-list">
              {portfolioData.experience.map((job, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3 className="experience-role">{job.role}</h3>
                    <p className="experience-period">{job.period}</p>
                  </div>
                  <div className="experience-subheader">
                    <p className="experience-company">{job.company}</p>
                    <p className="experience-location">{job.location}</p>
                  </div>
                  <p className="experience-description">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Education Section -- */}
        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="experience-list">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3 className="experience-role">{edu.degree}</h3>
                    <p className="experience-period">{edu.period}</p>
                  </div>
                  <div className="experience-subheader">
                    <p className="experience-company">{edu.institution}</p>
                    <p className="experience-location">{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* -- Footer & Contact -- */}
      <footer id="contact" className="footer">
        <div className="container">
          <h2 className="footer-title">Get In Touch</h2>
        <p className="footer-text">
            I'm currently looking for new opportunities. If you have a project in mind or just want to say hello, feel free to reach out!
          </p>

          {/* ✅ Mobile-friendly + Desktop Gmail compose link */}
          <a
            href={emailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {portfolioData.contact.email}
          </a>

          <div className="footer-socials">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>&bull;</span>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>

          <p className="footeropyright">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating back-to-top button */}
      <BackToTop />
    </div>
  );
}

export default App;
