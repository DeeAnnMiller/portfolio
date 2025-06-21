// src/Projects.jsx
import React from 'react';
import Header from './header';
import Footer from './footer';
import './index.css';

const PUBLIC = process.env.PUBLIC_URL;

const Projects = () => {
  return (
    <>
      <Header />

      <main>
        {/* About Hero */}
        <section className="hero-section about-hero">
          <div className="hero">
            <div className="hero-content">
              <h1>Welcome to Sunscript</h1>
              <h3>
                <span className="highlight">More Than Just Code</span>
              </h3>
              <p>
                I'm a creative technologist crafting smooth digital journeys.
                <br />
                This is my story, my skills, and my mission.
              </p>
            </div>
            <div className="sun-shape">
              <div className="sun-core" />
            </div>
          </div>
        </section>

        {/* Deep About Section */}
        <section className="about-section deeper-about">
          <div className="about-inner">
            <div className="about-left">
              <img
                src={`${PUBLIC}/images/about-me.jpeg`}
                alt="Myself"
                className="about-img"
              />
            </div>
            <div className="about-right">
              <h2>Who I Am</h2>
              <p>
                I’m Rubens, the developer behind Sunscript. My journey into tech
                started through acoustical engineering, where I learned the power
                of precision and analysis. Later, I transitioned into full-stack
                development, blending creativity and problem-solving into digital
                products.
              </p>
              <p>
                I bring two years of experience building responsive,
                accessible, and modern interfaces for the web, alongside back-end
                logic and API integration. I'm passionate about both front-end
                aesthetics and robust software architecture.
              </p>
              <p>
                Whether it's developing a custom CMS, designing data pipelines,
                or building engaging user experiences, I deliver clean code and
                thoughtful design.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <h2>My Mission</h2>
          <p>
            To build inclusive, meaningful software that solves real-world
            problems and helps people live better, more connected lives.
          </p>
          <div className="values-list">
            <div className="value-item">
              <h3>Creativity</h3>
              <p>
                Turning ideas into sleek, interactive interfaces and bold
                designs.
              </p>
            </div>
            <div className="value-item">
              <h3>Precision</h3>
              <p>Code that’s clean, scalable, and engineered for long-term use.</p>
            </div>
            <div className="value-item">
              <h3>Growth</h3>
              <p>
                Constantly learning, exploring new tech, and evolving my craft.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="skills-section">
          <div className="skills-left">
            <h2>Technologies I Work With</h2>
            <div className="skills-icons">
              <div className="skills-row">
                <img src={`${PUBLIC}/images/figma.svg`} alt="Figma" />
                <img src={`${PUBLIC}/images/ps.svg`} alt="Photoshop" />
                <img src={`${PUBLIC}/images/python.svg`} alt="Python" />
                <img src={`${PUBLIC}/images/html.svg`} alt="HTML" />
                <img src={`${PUBLIC}/images/c_plus.png`} alt="C++" />
              </div>
              <div className="skills-row-2">
                <img src={`${PUBLIC}/images/jsx.svg`} alt="JSX" />
                <img src={`${PUBLIC}/images/php.svg`} alt="PHP" />
                <img src={`${PUBLIC}/images/css.svg`} alt="CSS" />
                <img src={`${PUBLIC}/images/react.svg`} alt="React" />
                <img src={`${PUBLIC}/images/vue.svg`} alt="Vue" />
              </div>
            </div>
          </div>
          <div className="skills-right">
            <h3>Engineering Meets Design</h3>
            <p>
              With a unique background in acoustics and software, I approach
              projects holistically—balancing usability, performance, and design
              fidelity.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Want to Work Together?</h2>
          <p className="contact-email">sunscript@mail.com</p>
          <a href="contact.html" className="btn-secondary">
            Let's Talk
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Projects;
