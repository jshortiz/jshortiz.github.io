import React from "react";
import "./App.css";

const data = {
  name: "Joshua  Ortiz",
  title: "",
  // Image served from /public
  photo: process.env.PUBLIC_URL + "/grad-pic.jpg",
  contact: [
    { label: "Phone", value: "0963-893-1304" },
    { label: "Email", value: "jh.ortizxc@gmail.com" },
    {
      label: "Location",
      value: "Quezon Ave Prk 2 Pala-o, Iligan City, 9200 Philippines",
    },
  ],
  about:
    "Proactive and adaptable IT fresh graduate eager to leverage academic knowledge in real-world projects. A fast learner with a growth mindset, I thrive in team environments and value open, clear communication. Seeking a full-time role where I can expand my skillset, deliver innovative solutions, and contribute immediately with resilience, an open mind, and a collaborative spirit.",
  strengths: ["Competitive", "Adapting", "Flexible", "Open minded person"],
  education: [
    {
      degree: "Bachelor of Information Technology",
      school: "St. Michael's College",
      period: "2024 – 2025",
      description:
        "Graduated on time with no failing grades or subject retakes. Completed the program with dedication, perseverance, and strong faith—guided by the virtue of God, inspired by Fiat and Magnificat. Developed a solid foundation in IT principles through both academic and hands-on experiences.",
    },
  ],
  experience: [
    {
      role: "IT Support",
      company: "City Administrator — ICTC, City of Iligan",
      period: "January 2025 – April 2025",
      bullets: [
        "Completed a 500-hour practical training program at the CAD City Administrator's office (ICTC).",
        "Supported operations through hardware/software installation, network troubleshooting, and user support.",
        "Assisted in documenting system configurations, SOPs, and training materials.",
        "Collaborated with senior IT staff on small-scale projects to improve office workflow and data management.",
      ],
    },
    {
      role: "Shopify & WordPress Developer",
      company: "Tugas Virtual Solution",
      period: "May 2025 – Present",
      bullets: [
        "Build and customize Shopify and WordPress sites using Liquid, JavaScript, and CSS.",
        "Create responsive, SEO-friendly themes based on client requirements.",
        "Implement features like location-based visibility and conditional logic.",
        "Optimize site speed and ensure cross-browser compatibility.",
        "Collaborate on content and design to deliver polished, user-friendly e-commerce experiences.",
      ],
    },
  ],
  skills: [
    {
      group: "Web Development",
      bullets: [
        "Build responsive websites using HTML, CSS, and JavaScript",
        "Basic database work with MySQL (schema design, queries, connecting back-end services)",
        "Familiar with back-end development (Node.js/Express) and designing simple CRUD APIs",
      ],
    },
    {
      group: "Networking",
      bullets: [
        "Foundational understanding of network devices (switches, routers, firewalls) and their purposes",
        "Basic firewall and access-control concepts",
        "Comfortable with IP addressing, subnetting, and connectivity diagnostics",
      ],
    },
    {
      group: "Internet of Things (IoT)",
      bullets: [
        "Hands-on experience building Arduino-based projects using sensors and modules (motion, temperature, ultrasonic)",
      ],
    },
    {
      group: "Operating System",
      bullets: [
        "Windows installation and configuration (10/11)",
        "System updates, driver installations, and troubleshooting",
        "Basic command-line operations (CMD, PowerShell)",
      ],
    },
  ],
};

const Section = ({ title, children }) => (
  <section className="section">
    <h2 className="section__title">{title}</h2>
    <div className="section__body">{children}</div>
  </section>
);

function App() {
  return (
    <div className="viewport">
      <div className="page">
        <div className="columns">
          {/* Left sidebar */}
          <aside className="sidebar">
            <header className="nameblock">
              <h1 className="name">{data.name}</h1>
              {data.title && <div className="title">{data.title}</div>}
            </header>

            <div className="photo-wrap">
              <img className="photo" src={data.photo} alt={data.name} />
            </div>

            <Section title="Contact">
              <ul className="list">
                {data.contact.map((c, i) => (
                  <li key={i} className="list__item">
                    <span className="muted">{c.label}:</span> {c.value}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="About Me">
              <p className="para">{data.about}</p>
            </Section>

            <Section title="Personal Strength">
              <ul className="bullets">
                {data.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </Section>
          </aside>

          {/* Main column */}
          <main className="content">
            <Section title="Education">
              {data.education.map((ed, i) => (
                <div className="entry" key={i}>
                  <div className="entry__header">
                    <div>
                      <div className="entry__role">{ed.degree}</div>
                      <div className="entry__place">{ed.school}</div>
                    </div>
                    <div className="entry__period">{ed.period}</div>
                  </div>
                  <p className="para">{ed.description}</p>
                </div>
              ))}
            </Section>

            <Section title="Experience">
              {data.experience.map((ex, i) => (
                <div className="entry" key={i}>
                  <div className="entry__header">
                    <div>
                      <div className="entry__role">{ex.role}</div>
                      <div className="entry__place">{ex.company}</div>
                    </div>
                    <div className="entry__period">{ex.period}</div>
                  </div>
                  <ul className="bullets">
                    {ex.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>

            <Section title="Skills">
              {data.skills.map((sk, i) => (
                <div className="skills-group" key={i}>
                  <div className="skills-group__title">{sk.group}</div>
                  <ul className="bullets bullets--tight">
                    {sk.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
