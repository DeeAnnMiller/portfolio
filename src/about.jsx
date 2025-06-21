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
                I’m Diane Miller, one of the developers behind Sunscript. 
                Computers have always facinated me especially with how it functions 
                and makes problem solving easy and simple. 
                I chose the field of software engineering 
                to combine my love for technology with my passion for creativity.
              </p>
              <p>
                I'm a fresher who brings knowledge and skills of various computer languages,
                such as Java, JavaScript, HTML, React, and Python.
                With these developed skills, 
                I look forward to help solving real world problems using technology.
              </p>
              <p>
                Whether it's working backend or frontend,
                I can create seamless, user-friendly experiences that make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <h2>My Mission</h2>
          <p>
            To create software that bridges creativity and technology,
            making everyday challenges simpler and more enjoyable for everyone.
          </p>
          <div className="values-list">
            <div className="value-item">
              <h3>Creativity</h3>
              <p>
                Bringing fresh ideas to life with intuitive, 
                elegant designs and smooth user experiences.
              </p>
            </div>
            <div className="value-item">
              <h3>Precision</h3>
              <p>Writing clean, efficient code that’s built to last and easy to maintain.</p>
            </div>
            <div className="value-item">
              <h3>Growth</h3>
              <p>
                Embracing continuous learning to keep sharpening my skills and exploring new technologies.
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
                <img src={`${PUBLIC}/images/python.svg`} alt="Python" />
                <img src={`${PUBLIC}/images/html.svg`} alt="HTML" />
                <img src={`${PUBLIC}/images/c_plus.png`} alt="C++" />
              </div>
              <div className="skills-row-2">
                <img src={`${PUBLIC}/images/jsx.svg`} alt="JSX" />
                <img src={`${PUBLIC}/images/ps.svg`} alt="Photoshop" />
                <img src={`${PUBLIC}/images/css.svg`} alt="CSS" />
                <img src={`${PUBLIC}/images/react.svg`} alt="React" />
              </div>
            </div>
          </div>
          <div className="skills-right">
            <h3>Engineering Meets Creativity</h3>
            <p>
              I combine powerful tools and languages to build solutions that are both
              functional and beautiful. Whether designing user interfaces or solving
              complex backend problems, I enjoy crafting technology that makes a real impact.
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
