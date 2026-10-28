import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// SVG Icon Helper Component
const SvgIcon = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'sun':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'moon':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    case 'check':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      );
    case 'external-link':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      );
    case 'copy':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case 'mail':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'phone':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case 'map-pin':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'github':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    default:
      return null;
  }
};

function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('joshua_portfolio_theme');
    return saved ? saved === 'dark' : true;
  });

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter state for featured projects
  const [activeFilter, setActiveFilter] = useState('all');

  // Modal state for project specs
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Toast state
  const [toast, setToast] = useState({ visible: false, message: '', icon: '✓' });

  // Back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'WordPress Development',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // Lightweight form spam protection (honeypot + minimum completion time).
  // These client-side checks help, but server-side validation is still stronger.
  const formInteractionAt = useRef(0);
  const formSubmissionLock = useRef(false);

  // Sync theme with document class & localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('joshua_portfolio_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toast display function
  const showToast = (message, icon = '✓') => {
    setToast({ visible: true, message, icon });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3200);
  };

  // Safe clipboard copy helper
  const copyToClipboard = (text, label) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => showToast(`${label} copied to clipboard!`, '✓'))
        .catch(() => fallbackCopy(text, label));
    } else {
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text, label) => {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`${label} copied to clipboard!`, '✓');
    } catch (e) {
      showToast(text, 'ℹ');
    }
    document.body.removeChild(tempInput);
  };

  // Featured Projects Data (1 WordPress + 1 Shopify)
  const projects = [
    {
      id: 'wp',
      type: 'wordpress',
      title: 'St. Michael’s College of Iligan — WordPress Website Modernization',
      badge: 'WordPress & ACF',
      badgeColor: 'brand',
      role: 'WordPress Developer',
      image: `${process.env.PUBLIC_URL}/wp-showcase.jpg`,
      overview: 'Contributed to modernizing the official St. Michael’s College of Iligan website by improving its design, functionality, and content management capabilities. Enhanced the existing WordPress site using Advanced Custom Fields (ACF) to create dynamic, manageable content sections, allowing administrators to update college departments, leadership information, faculty profiles, and other website content more efficiently without manually editing code.',
      features: [
        'Modernized the existing WordPress website and improved its user interface',
        'Implemented ACF-powered dynamic content for easier website management',
        'Developed custom PHP functionality and WordPress theme enhancements',
        'Built reusable content sections and dynamic college department layouts',
        'Customized HTML, CSS, and JavaScript for interactive components and responsive layouts',
        'Improved maintainability by organizing content into manageable, reusable components',
        'Updated and maintained WordPress plugins to support site functionality'
      ],
      techStack: ['WordPress', 'PHP', 'Advanced Custom Fields (ACF)', 'HTML5', 'CSS3', 'JavaScript'],
      links: {
        demo: 'https://smciligan.edu.ph/',
        code: 'https://github.com/jshortiz'
      }
    },
    {
      id: 'shopify',
      type: 'shopify',
      title: 'Glamlite — Shopify Store Rebuild & Platform Migration',
      badge: 'Shopify & Liquid',
      badgeColor: 'accent',
      role: 'Shopify Developer & E-Commerce Specialist',
      image: `${process.env.PUBLIC_URL}/shopify-showcase.jpg`,
      overview: 'Rebuilt Glamlite’s e-commerce storefront from the ground up, migrating the existing store from an outdated Shopify setup to the latest Shopify platform. Focused on modernizing the storefront, improving responsive layouts, and ensuring core shopping functionality worked smoothly across desktop and mobile devices.',
      features: [
        'Rebuilt the Shopify storefront from scratch',
        'Migrated the existing store from an outdated Shopify version to the latest platform',
        'Developed and customized Shopify Liquid templates and sections',
        'Improved mobile responsiveness and storefront usability',
        'Maintained product displays, collections, and core e-commerce functionality',
        'Tested and troubleshot the migrated storefront to ensure a smooth shopping experience'
      ],
      techStack: ['Shopify', 'Shopify Liquid', 'JavaScript', 'HTML5', 'CSS3'],
      links: {
        demo: 'https://glamlite.com',
        code: 'https://github.com/jshortiz'
      }
    }
  ];

  // Work Experience Data
  const experiences = [
    {
      role: 'WordPress and Shopify Developer',
      company: 'Tugas Virtual Solution',
      period: 'May 2025 – Present',
      location: 'Remote / E-Commerce Operations',
      type: 'Full-Scope Web Development',
      badge: 'Active Role',
      badgeColor: 'brand',
      icon: '🛍️',
      bullets: [
        'Develop, customize, and maintain responsive WordPress and Shopify websites.',
        'Troubleshoot website errors, plugin conflicts, and mobile responsiveness issues.',
        'Perform website updates, speed optimization, security checks, and technical support.'
      ],
      tags: ['WordPress', 'WooCommerce', 'Shopify Liquid', 'Speed Optimization', 'Site Security']
    },
    {
      role: 'IT Technical Support & Web Developer',
      company: "St. Michael's College",
      period: 'June 2026 – Present',
      location: 'Iligan City, Philippines',
      type: 'Web Development & IT Infrastructure Support',
      badge: 'Institutional IT & Web',
      badgeColor: 'accent',
      icon: '🖥️',
      bullets: [
        "Manage, develop, and maintain the official St. Michael's College WordPress website, including custom themes, ACF dynamic content, and plugin updates.",
        'Install, configure, and maintain computer hardware, software, printers, and other IT equipment.',
        'Troubleshoot network, system, and technical issues for faculty, staff, and students.',
        'Provide user support, perform system updates, and document technical issues and solutions.'
      ],
      tags: ['WordPress Management', 'Web Development', 'Hardware & Peripherals', 'Network Diagnostics', 'OS & Software Setup', 'User Support']
    }
  ];

  // Contact form submission handler using Web3Forms
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: real visitors should never fill this off-screen field.
    const honeypotValue = e.currentTarget.elements.company_website?.value?.trim();
    if (honeypotValue) {
      // Silently ignore likely automated submissions.
      setFormStatus({ type: 'success', message: 'Success! Your message has been sent.' });
      return;
    }

    // Reject instant submissions that are unlikely to be genuine.
    const elapsed = formInteractionAt.current
      ? Date.now() - formInteractionAt.current
      : 0;
    if (elapsed > 0 && elapsed < 2500) {
      setFormStatus({
        type: 'error',
        message: 'Please take a moment to review your message and try again.'
      });
      return;
    }

    // Prevent accidental double-submits.
    if (formSubmissionLock.current) return;
    formSubmissionLock.current = true;
    setSubmitting(true);
    setFormStatus(null);

    // Guaranteed string formatting to prevent extra space errors
    const payload = {
      access_key: "7c1882c4-f28f-4db5-8349-c5f815aa27d0".trim(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      service: formData.service,
      subject: (formData.subject && formData.subject.trim()) || "New Portfolio Message - Joshua Ortiz",
      from_name: "Joshua Ortiz Portfolio Website",
      message: formData.message.trim()
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && (data.success || response.status === 200)) {
        setFormStatus({ type: 'success', message: 'Success! Your message has been sent.' });
        setFormData({
          name: '',
          email: '',
          service: 'WordPress Development',
          subject: '',
          message: ''
        });
        formInteractionAt.current = 0;
        showToast('Message sent successfully! Joshua will reply soon.', '✓');
      } else {
        const errorMsg = data.message || 'Failed to submit form.';
        setFormStatus({ type: 'error', message: `Error: ${errorMsg}` });
        showToast(`Error: ${errorMsg}`, '⚠️');
      }
    } catch (err) {
      setFormStatus({ type: 'error', message: 'Something went wrong. Please check your connection and try again.' });
      showToast('Submission error. Please try again.', '⚠️');
    } finally {
      setSubmitting(false);
      formSubmissionLock.current = false;
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <div className={`min-h-screen bg-dark-900 text-slate-200 transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
      
      {/* Toast Notification */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 flex items-center gap-3 bg-slate-900 border border-brand-500/50 shadow-2xl text-white px-5 py-3.5 rounded-xl font-medium text-sm ${
          toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <span className="text-brand-400 font-bold">{toast.icon}</span>
        <span>{toast.message}</span>
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 glass-nav border-b border-slate-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center font-display font-extrabold text-white text-lg shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
              JO
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white group-hover:text-brand-400 transition-colors flex items-center gap-2">
                Joshua Ortiz
                <span className="inline-block w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
              </span>
              <span className="block text-xs font-mono text-slate-400 tracking-wide">WordPress & Shopify Dev</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-brand-400 transition-colors py-1">About</a>
            <a href="#skills" className="hover:text-brand-400 transition-colors py-1">Skills</a>
            <a href="#projects" className="hover:text-brand-400 transition-colors py-1">Featured Projects</a>
            <a href="#experience" className="hover:text-brand-400 transition-colors py-1">Experience</a>
            <a href="#credentials" className="hover:text-brand-400 transition-colors py-1">Education & Certs</a>
            <a href="#contact" className="hover:text-brand-400 transition-colors py-1">Contact</a>
          </nav>

          {/* Actions & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-700/80 bg-slate-800/50 hover:bg-slate-700/60 text-slate-300 hover:text-white transition-all text-sm"
              title="Toggle Light/Dark Theme"
              aria-label="Toggle Light/Dark Theme"
            >
              <SvgIcon name={darkMode ? 'sun' : 'moon'} className="w-4 h-4" />
            </button>

            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-medium text-sm shadow-lg shadow-brand-500/25 transition-all hover:shadow-brand-500/40 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300"
              aria-label="Toggle Theme"
            >
              <SvgIcon name={darkMode ? 'sun' : 'moon'} className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-white"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-brand-400 font-medium"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-brand-400 font-medium"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-brand-400 font-medium"
            >
              Featured Projects
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-brand-400 font-medium"
            >
              Experience
            </a>
            <a 
              href="#credentials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-brand-400 font-medium"
            >
              Education & Certs
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-brand-400 font-medium"
            >
              Contact
            </a>
            <div className="pt-2">
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 rounded-xl bg-brand-500 text-white font-medium text-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden hero-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                <span>Open for WordPress & Shopify Projects</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Joshua Ortiz
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-400 to-indigo-400 mt-2">
                  WordPress & Shopify Developer • IT Technical Support
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Results-driven IT professional specializing in WordPress and Shopify development, website maintenance, troubleshooting, and end-user technical support. Skilled in developing responsive websites, resolving complex hardware/software and network challenges, optimizing speed, and delivering dependable IT solutions.
              </p>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-2">
                <div className="card-glass p-3.5 rounded-xl border border-slate-800 text-center lg:text-left">
                  <div className="font-display font-extrabold text-2xl text-white">2+</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Years Experience</div>
                </div>
                <div className="card-glass p-3.5 rounded-xl border border-slate-800 text-center lg:text-left">
                  <div className="font-display font-extrabold text-2xl text-brand-400">2</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">E-Commerce CMS (WP & Shopify)</div>
                </div>
                <div className="card-glass p-3.5 rounded-xl border border-slate-800 text-center lg:text-left">
                  <div className="font-display font-extrabold text-2xl text-accent-400">TOPCIT</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Level 2 Certified</div>
                </div>
                <div className="card-glass p-3.5 rounded-xl border border-slate-800 text-center lg:text-left">
                  <div className="font-display font-extrabold text-2xl text-indigo-400">100%</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Responsive & Fast</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="#projects" 
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-semibold text-sm shadow-xl shadow-brand-500/25 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>View Featured Projects</span>
                  <SvgIcon name="arrow-right" className="w-4 h-4" />
                </a>
                
                <a 
                  href="#contact" 
                  className="px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 hover:text-white text-slate-200 font-medium text-sm transition-all"
                >
                  Contact Me
                </a>

                <button 
                  onClick={() => copyToClipboard('jsh.ortizxc@gmail.com', 'Email')}
                  className="px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-brand-400 text-sm font-mono flex items-center gap-2 transition-all"
                  title="Click to copy email address"
                >
                  <SvgIcon name="copy" className="w-4 h-4" />
                  <span>Copy Email</span>
                </button>
              </div>

            </div>

            {/* Right Profile Photo Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-brand-500/30 to-accent-500/30 rounded-full blur-2xl opacity-70"></div>
                
                {/* Circular Portrait Image */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-brand-500 via-accent-500 to-indigo-500 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img 
                      src={`${process.env.PUBLIC_URL}/grad-pic.jpg`} 
                      alt="Joshua Ortiz — WordPress & Shopify Developer" 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                  </div>
                </div>

               

               

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Concise Header & Core Summary */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono uppercase tracking-widest font-semibold">
              About Joshua
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 leading-tight">
              Bridging Web Engineering &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                Reliable IT Infrastructure
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              I build custom <strong className="text-white font-semibold">WordPress/WooCommerce</strong> and <strong className="text-white font-semibold">Shopify Liquid</strong> storefronts backed by hands-on institutional IT support—combining bloat-free e-commerce engineering, speed optimization, and root-cause hardware/network troubleshooting.
            </p>
          </div>

          {/* 4 Core Specialty Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                code: '01 / CMS',
                badge: 'WP',
                title: 'WordPress & WooCommerce',
                color: 'brand',
                desc: 'Custom PHP themes, custom post types, and lean WooCommerce storefronts built without page-builder bloat.',
                highlights: ['Custom Themes & CPTs', 'WooCommerce Setup', 'Plugin Troubleshooting']
              },
              {
                code: '02 / E-COMMERCE',
                badge: 'SH',
                title: 'Shopify & Liquid Themes',
                color: 'accent',
                desc: 'Conversion-focused Shopify storefronts with custom Liquid sections, slide-out carts, and app integrations.',
                highlights: ['Custom Liquid Schemas', 'Drawer Cart & Upsells', 'Checkout Optimization']
              },
              {
                code: '03 / SYSTEMS',
                badge: 'IT',
                title: 'IT Technical Support',
                color: 'indigo',
                desc: 'End-to-end hardware diagnostics, OS/software deployment, printer setup, and LAN troubleshooting.',
                highlights: ['PC & Peripheral Repair', 'Network & LAN Support', 'System Updates & Docs']
              },
              {
                code: '04 / VITALS',
                badge: '🚀',
                title: 'Performance & Security',
                color: 'emerald',
                desc: 'Core Web Vitals tuning, asset compression, mobile-first layouts, and proactive security hardening.',
                highlights: ['90+ PageSpeed Tuning', 'Mobile Responsiveness', 'Backups & Security']
              }
            ].map((card, idx) => {
              const colorMap = {
                brand: {
                  borderHover: 'hover:border-brand-500/50',
                  badgeBg: 'bg-brand-500/10 text-brand-400 border-brand-500/30',
                  dot: 'text-brand-400'
                },
                accent: {
                  borderHover: 'hover:border-accent-500/50',
                  badgeBg: 'bg-accent-500/10 text-accent-400 border-accent-500/30',
                  dot: 'text-accent-400'
                },
                indigo: {
                  borderHover: 'hover:border-indigo-500/50',
                  badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
                  dot: 'text-indigo-400'
                },
                emerald: {
                  borderHover: 'hover:border-emerald-500/50',
                  badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
                  dot: 'text-emerald-400'
                }
              }[card.color];

              return (
                <div
                  key={idx}
                  className={`card-glass p-6 rounded-2xl border border-slate-800 ${colorMap.borderHover} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-base font-display font-bold ${colorMap.badgeBg}`}>
                        {card.badge}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold tracking-wider">
                        {card.code}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-800/80 space-y-1.5">
                    {card.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <span className={`${colorMap.dot} font-bold`}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono uppercase tracking-widest font-semibold">
              Core Proficiencies
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Technical Competencies &amp; Skills
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Production-tested stack across CMS engineering, e-commerce development, and institutional IT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🛍️',
                title: 'CMS & E-Commerce Engineering',
                subtitle: 'Custom Storefronts & Dynamic Content',
                color: 'brand',
                items: [
                  { name: 'WordPress & ACF', detail: 'Custom themes, CPTs & dynamic field schemas' },
                  { name: 'Shopify & Liquid', detail: 'Store rebuilds, migrations & custom sections' },
                  { name: 'WooCommerce & Checkout', detail: 'Catalog setup, payment gateways & cart flows' }
                ],
                tags: ['WordPress', 'ACF', 'Shopify', 'Liquid', 'WooCommerce']
              },
              {
                icon: '💻',
                title: 'Frontend & Web Development',
                subtitle: 'Responsive UI & Theme Scripting',
                color: 'accent',
                items: [
                  { name: 'HTML5 & Modern CSS3', detail: 'Semantic markup, Flexbox/Grid & mobile-first UI' },
                  { name: 'JavaScript (ES6+)', detail: 'Interactive UI components & DOM manipulation' },
                  { name: 'PHP for WordPress', detail: 'Custom template logic, hooks & dynamic queries' }
                ],
                tags: ['HTML5', 'CSS3', 'Responsive Design', 'JavaScript', 'PHP']
              },
              {
                icon: '🔧',
                title: 'IT Technical & Network Support',
                subtitle: 'Hardware, OS & Infrastructure Care',
                color: 'indigo',
                items: [
                  { name: 'Hardware & Peripherals', detail: 'PC assembly, diagnostics, printers & repair' },
                  { name: 'OS & Software Systems', detail: 'System installation, updates & driver config' },
                  { name: 'Network & End-User Support', detail: 'LAN troubleshooting, ticketing & documentation' }
                ],
                tags: ['PC Diagnostics', 'LAN / Network', 'OS Deployment', 'Printers', 'IT Docs']
              },
              {
                icon: '⚡',
                title: 'Optimization, Security & Workflow',
                subtitle: 'Performance, Stability & Version Control',
                color: 'emerald',
                items: [
                  { name: 'Speed & Core Web Vitals', detail: 'Asset compression, caching & layout stability' },
                  { name: 'Site Maintenance & Security', detail: 'Plugin updates, conflict fixes & safe backups' },
                  { name: 'Git, Analytics & QA', detail: 'GitHub workflows, GA4 tracking & cross-device testing' }
                ],
                tags: ['Speed Optimization', 'Site Security', 'Git / GitHub', 'GA4', 'Cross-Browser QA']
              }
            ].map((group, idx) => {
              const styles = {
                brand: {
                  bar: 'from-brand-500 to-emerald-400',
                  borderHover: 'hover:border-brand-500/50',
                  iconBox: 'bg-brand-500/10 text-brand-400 border-brand-500/30',
                  dot: 'bg-brand-400'
                },
                accent: {
                  bar: 'from-accent-500 to-sky-400',
                  borderHover: 'hover:border-accent-500/50',
                  iconBox: 'bg-accent-500/10 text-accent-400 border-accent-500/30',
                  dot: 'bg-accent-400'
                },
                indigo: {
                  bar: 'from-indigo-500 to-purple-400',
                  borderHover: 'hover:border-indigo-500/50',
                  iconBox: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
                  dot: 'bg-indigo-400'
                },
                emerald: {
                  bar: 'from-emerald-500 to-teal-400',
                  borderHover: 'hover:border-emerald-500/50',
                  iconBox: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
                  dot: 'bg-emerald-400'
                }
              }[group.color];

              return (
                <div
                  key={idx}
                  className={`card-glass rounded-2xl overflow-hidden border border-slate-800 ${styles.borderHover} transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className={`h-1 w-full bg-gradient-to-r ${styles.bar}`} />

                    <div className="p-6">
                      <div className="flex items-center gap-3.5 mb-5">
                        <span className={`w-11 h-11 rounded-xl border flex items-center justify-center text-lg shrink-0 ${styles.iconBox}`}>
                          {group.icon}
                        </span>
                        <div>
                          <h3 className="font-display font-bold text-lg text-white leading-snug">
                            {group.title}
                          </h3>
                          <p className="text-xs text-slate-400 font-mono">{group.subtitle}</p>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        {group.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80"
                          >
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${styles.dot}`} />
                              <span>{item.name}</span>
                            </div>
                            <span className="text-xs text-slate-400 sm:text-right pl-3.5 sm:pl-0">
                              {item.detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-3.5 border-t border-slate-800/80 bg-slate-900/40 flex flex-wrap gap-1.5">
                    {group.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/70 text-slate-300 font-mono text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Featured Projects Section (1 WordPress + 1 Shopify) */}
      <section id="projects" className="py-20 border-t border-slate-800/80 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-mono text-brand-400 uppercase tracking-widest font-semibold">Curated Portfolio</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">
                Featured Projects
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Showcasing custom WordPress &amp; ACF institutional web modernization alongside full-scale Shopify Liquid storefront engineering.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 self-start md:self-auto">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === 'all' ? 'bg-brand-500 text-white shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                All (2)
              </button>
              <button 
                onClick={() => setActiveFilter('wordpress')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === 'wordpress' ? 'bg-brand-500 text-white shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                WordPress (1)
              </button>
              <button 
                onClick={() => setActiveFilter('shopify')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === 'shopify' ? 'bg-brand-500 text-white shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                Shopify (1)
              </button>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="card-glass rounded-3xl overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Card Media Preview */}
                  <div className="relative h-64 overflow-hidden bg-slate-900 border-b border-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = project.type === 'wordpress' 
                          ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
                          : 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    
                    {/* Top Overlay Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold text-white keep-white shadow-md ${
                        project.badgeColor === 'brand' ? 'bg-brand-600/90' : 'bg-accent-600/90'
                      }`}>
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-4 px-3 py-1 rounded-lg bg-slate-950/85 backdrop-blur text-[11px] font-mono text-white keep-white border border-slate-700/80 shadow-md">
                      {project.role}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-2">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-brand-400 mt-0.5">✔</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 font-mono text-xs border border-slate-700/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 mt-4">
                  <button 
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2 rounded-xl bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 border border-brand-500/30 text-xs font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>View Full Specs</span>
                    <SvgIcon name="arrow-right" className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-brand-400 hover:text-brand-300 underline underline-offset-4 break-all transition-colors"
                    title="Open project URL"
                  >
                    {project.links.demo}
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono text-brand-400 uppercase tracking-widest font-semibold">Career History</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">
                Professional Experience
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-2xl">
                Demonstrated track record across commercial e-commerce development and institutional IT infrastructure support.
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              <span className="text-xs font-mono text-slate-300">2 Active Professional Roles</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => {
              const isBrand = exp.badgeColor === 'brand';
              return (
                <div
                  key={idx}
                  className={`card-glass rounded-3xl overflow-hidden border border-slate-800 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group ${
                    isBrand ? 'hover:border-brand-500/50' : 'hover:border-accent-500/50'
                  }`}
                >
                  <div>
                    {/* Top Gradient Accent Bar */}
                    <div
                      className={`h-1.5 w-full bg-gradient-to-r ${
                        isBrand
                          ? 'from-brand-500 via-emerald-400 to-accent-500'
                          : 'from-accent-500 via-sky-400 to-indigo-500'
                      }`}
                    />

                    <div className="p-6 sm:p-8">
                      {/* Top Status & Period Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-2.5">
                          <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-mono text-xs font-bold text-slate-400">
                            0{idx + 1}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold border ${
                              isBrand
                                ? 'bg-brand-500/10 text-brand-400 border-brand-500/30'
                                : 'bg-accent-500/10 text-accent-400 border-accent-500/30'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isBrand ? 'bg-brand-400' : 'bg-accent-400'
                              }`}
                            />
                            {exp.badge}
                          </span>
                        </div>

                        <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs font-medium">
                          {exp.period}
                        </span>
                      </div>

                      {/* Role Header & Organization */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 border ${
                            isBrand
                              ? 'bg-brand-500/10 border-brand-500/30 text-brand-400'
                              : 'bg-accent-500/10 border-accent-500/30 text-accent-400'
                          }`}
                        >
                          {exp.icon}
                        </div>
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                            {exp.type}
                          </span>
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5">
                            <span
                              className={`font-semibold text-sm ${
                                isBrand ? 'text-brand-400' : 'text-accent-400'
                              }`}
                            >
                              {exp.company}
                            </span>
                            <span className="text-slate-500">•</span>
                            <span className="text-xs text-slate-400 inline-flex items-center gap-1">
                              <SvgIcon name="map-pin" className="w-3.5 h-3.5" />
                              <span>{exp.location}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Core Responsibilities Box */}
                      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          Key Responsibilities & Impact
                        </div>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3 leading-relaxed">
                              <span
                                className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold ${
                                  isBrand
                                    ? 'bg-brand-500/20 text-brand-400'
                                    : 'bg-accent-500/20 text-accent-400'
                                }`}
                              >
                                ✓
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Domain Competency Pills */}
                  <div className="px-6 sm:px-8 py-4 border-t border-slate-800/80 bg-slate-900/40 flex flex-wrap items-center gap-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-slate-300 font-mono text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Education & Credentials Section (NO 1.9 GPA DISPLAYED) */}
      <section id="credentials" className="py-20 border-t border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-400 uppercase tracking-widest font-semibold">Academic & Professional Background</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">
              Education & Certifications
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Verified formal degrees and practical IT competency certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card 1: Education */}
            <div className="card-glass p-7 rounded-2xl border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center text-2xl mb-5">
                  🎓
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Higher Education</span>
                <h3 className="font-display font-bold text-xl text-white mt-1">Bachelor of Science in Information Technology</h3>
                <p className="text-sm font-semibold text-brand-300 mt-1">St. Michael's College</p>
                
                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Period:</span>
                    <span className="font-mono text-white">2024 – 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-white">Iligan City, Philippines</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                    Comprehensive coursework covering software development, database management systems, network infrastructure, web systems, and information security.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-brand-400 flex items-center gap-2 font-medium">
                <span>✓ Official Degree Completed</span>
              </div>
            </div>

            {/* Card 2: TOPCIT Certification */}
            <div className="card-glass p-7 rounded-2xl border border-slate-800 hover:border-accent-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center text-2xl mb-5">
                  📜
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Professional Certification</span>
                <h3 className="font-display font-bold text-xl text-white mt-1">TOPCIT Level 2</h3>
                <p className="text-sm font-semibold text-accent-300 mt-1">Test of Practical Competency in IT</p>
                
                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Official Score:</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-accent-500/20 text-accent-300 font-mono font-bold text-xs border border-accent-500/40">
                      Score: 315
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Assessment:</span>
                    <span className="text-white">Standardized IT Competency</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                    Evaluates practical software design, database handling, network communication protocols, and project management acumen required in commercial IT environments.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-accent-400 flex items-center gap-2 font-medium">
                <span>✓ Certified Practical Competency</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Section with Web3Forms Integration */}
      <section id="contact" className="py-20 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-400 uppercase tracking-widest font-semibold">Start A Project</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">
              Let's Build Something Exceptional
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Have an e-commerce store idea, need a custom WordPress theme, or require dependable technical support? Send me a direct message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Contact Information Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="card-glass p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
                <h3 className="font-display font-bold text-2xl text-white">Direct Information</h3>
                
                <div className="space-y-4">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400 mt-1">
                      <SvgIcon name="phone" className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-slate-400 uppercase">Phone / Mobile</div>
                      <div className="text-sm font-semibold text-white mt-0.5">0976-410-0610</div>
                      <div className="flex items-center gap-3 mt-1.5">
                        <a href="tel:09764100610" className="text-xs text-brand-400 hover:underline">Call Directly</a>
                        <span className="text-slate-600">•</span>
                        <button 
                          onClick={() => copyToClipboard('0976-410-0610', 'Phone number')} 
                          className="text-xs text-slate-400 hover:text-white"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-accent-500/10 text-accent-400 mt-1">
                      <SvgIcon name="mail" className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-slate-400 uppercase">Email Address</div>
                      <div className="text-sm font-semibold text-white mt-0.5">jsh.ortizxc@gmail.com</div>
                      <div className="flex items-center gap-3 mt-1.5">
                        <a href="mailto:jsh.ortizxc@gmail.com" className="text-xs text-accent-400 hover:underline">Send Email</a>
                        <span className="text-slate-600">•</span>
                        <button 
                          onClick={() => copyToClipboard('jsh.ortizxc@gmail.com', 'Email address')} 
                          className="text-xs text-slate-400 hover:text-white"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 mt-1">
                      <SvgIcon name="map-pin" className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-slate-400 uppercase">Location</div>
                      <div className="text-sm font-semibold text-white mt-0.5">Pala-o, Iligan City</div>
                      <div className="text-xs text-slate-400 mt-0.5">Northern Mindanao, Philippines</div>
                    </div>
                  </div>

                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                  <a 
                    href="https://github.com/jshortiz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 flex items-center gap-2 transition-all"
                  >
                    <SvgIcon name="github" className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>

                  <a 
                    href="https://linkedin.com/in/joshua-ortiz-47715b370" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 flex items-center gap-2 transition-all"
                  >
                    <SvgIcon name="linkedin" className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Interactive Form Column */}
            <div className="lg:col-span-7">
              <div className="card-glass p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl">
                <h3 className="font-display font-bold text-2xl text-white">Send a Direct Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
                  Fill in your project requirements below, and I'll get back to you within 24 hours.
                </p>

                {formStatus && (
                  <div className={`p-4 rounded-xl text-sm font-medium mb-6 ${
                    formStatus.type === 'success' 
                      ? 'bg-brand-500/10 border border-brand-500/40 text-brand-300' 
                      : 'bg-rose-500/10 border border-rose-500/40 text-rose-300'
                  }`}>
                    {formStatus.message}
                  </div>
                )}

                <form
                  onSubmit={handleContactSubmit}
                  onFocusCapture={() => {
                    if (!formInteractionAt.current) formInteractionAt.current = Date.now();
                  }}
                  onChangeCapture={() => {
                    if (!formInteractionAt.current) formInteractionAt.current = Date.now();
                  }}
                  className="space-y-4"
                >
                  {/* Hidden anti-spam fields: keep these out of the visible form UI. */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-10000px',
                      top: 'auto',
                      width: '1px',
                      height: '1px',
                      overflow: 'hidden'
                    }}
                  >
                    <label htmlFor="company_website">Leave this field empty</label>
                    <input
                      id="company_website"
                      name="company_website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  {/* Hidden Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="7c1882c4-f28f-4db5-8349-c5f815aa27d0" />
                  <input type="hidden" name="subject" value="New Portfolio Message - Joshua Ortiz" />
                  <input type="hidden" name="from_name" value="Joshua Ortiz Portfolio Website" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">YOUR NAME *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Santos" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">YOUR EMAIL *</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">SERVICE REQUIRED</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      >
                        <option value="WordPress Development">WordPress / WooCommerce Development</option>
                        <option value="Shopify Store Development">Shopify Store / Liquid Customization</option>
                        <option value="Website Optimization & Bug Fixes">Website Speed Optimization & Bug Fixes</option>
                        <option value="IT Technical Support & Systems">IT Technical Support & Systems</option>
                        <option value="General Inquiry">General Inquiry / Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">SUBJECT</label>
                      <input 
                        type="text" 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project or Inquiry Subject" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">YOUR MESSAGE *</label>
                    <textarea 
                      required 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, deliverables, or technical support requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-semibold text-sm shadow-xl shadow-brand-500/25 transition-all hover:shadow-brand-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <span>Sending Message...</span>
                        <svg className="animate-spin w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>Send Direct Message</span>
                        <SvgIcon name="arrow-right" className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 font-mono">
                    <span>⚡ Protected via Web3Forms API</span>
                    <span>🔒 Privacy guaranteed</span>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 font-display font-bold text-white text-base">
            <span className="w-7 h-7 rounded-lg bg-brand-500 text-slate-950 flex items-center justify-center font-extrabold text-xs">JO</span>
            <span>Joshua Ortiz</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-normal text-xs">WordPress & Shopify Developer</span>
          </div>
          <p className="max-w-md mx-auto text-slate-400 text-xs">
            Crafting high-speed e-commerce stores, bespoke CMS themes, and resilient technical IT systems.
          </p>
          <div className="pt-2 text-slate-400 font-mono">
            &copy; {new Date().getFullYear()} Joshua Ortiz. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Project Specs Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              ✕
            </button>

            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-brand-400 font-mono text-xs font-semibold border border-brand-500/30">
                  {activeModalProject.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">{activeModalProject.role}</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white">{activeModalProject.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{activeModalProject.overview}</p>

              <div className="pt-3">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2 font-bold">Key Architectural Highlights:</h4>
                <ul className="space-y-2">
                  {activeModalProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                      <span className="text-brand-400 mt-0.5">✔</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2 font-bold">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800 flex items-center justify-end">
                <a 
                  href={activeModalProject.links.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                >
                  <span>Live Preview Link</span>
                  <SvgIcon name="external-link" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Back to top floating button */}
      {showBackToTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-xl bg-slate-800/90 hover:bg-brand-500 text-slate-300 hover:text-white border border-slate-700/80 shadow-xl transition-all duration-300"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      )}

    </div>
  );
}

export default App;
