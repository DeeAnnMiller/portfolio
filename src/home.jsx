// src/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';
import './index.css';

const PUBLIC = process.env.PUBLIC_URL;

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <motion.div
          className="hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              Hello!
            </motion.h1>
            <motion.h3 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
              I’m <span className="highlight">Diane Cynthia Miller</span>
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              I’m a software engineer with a passion for <br />
              turning creative ideas into smart,
              <br />
              user-friendly digital experiences. <br />
              I blend technical skill with an eye for design,
              <br />
              building websites and apps and systems <br/>
              that don’t just function, they delight.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="resume.pdf" className="btn-secondary" download>Download Resume</a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="social-icons">
              <a href="https://instagram.com" aria-label="Instagram">
                <img src={`${PUBLIC}/images/instagram.png`} alt="Instagram" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <img src={`${PUBLIC}/images/facebook.png`} alt="Facebook" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <img src={`${PUBLIC}/images/twitter.png`} alt="Twitter" />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest">
                <img src={`${PUBLIC}/images/pinterest.png`} alt="Pinterest" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img src={`${PUBLIC}/images/linkedin.png`} alt="LinkedIn" />
              </a>
            </motion.div>
          </div>
          <motion.div className="sun-shape" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
            <div className="sun-core" />
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="skills-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="skills-left">
            <motion.h2 initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              Check My Skills And<br />Using Source
            </motion.h2>
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
                <img src={`${PUBLIC}/images/ps.svg`} alt="Photoshop" />
                <img src={`${PUBLIC}/images/css.svg`} alt="CSS" />
                <img src={`${PUBLIC}/images/react.svg`} alt="React" />
              </div>
            </div>
          </div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="skills-right">
            <h3>
              We Believe That<br />Good Design Changes<br />The World
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.
            </p>
            <a href="services.html" className="read-more-btn">Read More</a>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2>Take A Look At My Recent Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image" role="img" aria-label="Become Solid">
                <img src={`${PUBLIC}/images/example.png`} alt="Become Solid" />
              </div>
              <h3>Become Solid</h3>
            </div>
            <div className="project-card">
              <div className="project-image" role="img" aria-label="Solare Skateball">
                <img src={`${PUBLIC}/images/example2.png`} alt="Solare Skateball" />
              </div>
              <h3>Solare Skateball</h3>
            </div>
            <div className="project-card">
              <div className="project-image" role="img" aria-label="Devos Outdoors">
                <img src={`${PUBLIC}/images/example3.png`} alt="Devos Outdoors" />
              </div>
              <h3>Devos Outdoors</h3>
            </div>
            <div className="project-card">
              <div className="project-image" role="img" aria-label="Odr This">
                <img src={`${PUBLIC}/images/example4.png`} alt="Odr This" />
              </div>
              <h3>Odr This</h3>
            </div>
            <div className="project-card">
              <div className="project-image" role="img" aria-label="Tide Ocean">
                <img src={`${PUBLIC}/images/example5.webp`} alt="Tide Ocean" />
              </div>
              <h3>Tide Ocean</h3>
            </div>
            <div className="project-card">
              <div className="project-image" role="img" aria-label="Barbell Apparel">
                <img src={`${PUBLIC}/images/example6.png`} alt="Barbell Apparel" />
              </div>
              <h3>Barbell Apparel</h3>
            </div>
          </div>
          <a href="#projects" className="btn-primary">View All Works</a>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <h2>Services I Offer</h2>
          <div className="services-layout">
            <div className="services-list">
              <div className="service-item"><span className="category">DEVELOPMENT</span><br /><span className="title">WEBSITES</span></div>
              <div className="service-item"><span className="category">DEVELOPMENT</span><br /><span className="title">DATA ANALYTICS</span></div>
              <div className="service-item"><span className="category-green">ARTWORK</span><br /><span className="title-green">BRANDINGS</span></div>
              <div className="service-item"><span className="category">DEVELOPMENT</span><br /><span className="title">UX/UI DESIGN</span></div>
              <div className="service-item"><span className="category">DEVELOPMENT</span><br /><span className="title">APP DEVELOPMENT</span></div>
            </div>
            <div className="services-visual">
              <div className="tile large"><img src={`${PUBLIC}/images/gallery-1.jpg`} alt="Gallery 1" /></div>
              <div className="tile small top"><img src={`${PUBLIC}/images/gallery-2.jpg`} alt="Gallery 2" /></div>
              <div className="tile small bottom"><img src={`${PUBLIC}/images/gallery-3.jpg`} alt="Gallery 3" /></div>
              <div className="tile medium"><img src={`${PUBLIC}/images/gallery-4.jpg`} alt="Gallery 4" /></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-img-wrapperr">
            <div className="about-left">
              <h2>About Me</h2>
              <img src={`${PUBLIC}/images/sun-shape-2.png`} alt="Sun Graphic" className="sun-img" />
              <img src={`${PUBLIC}/images/about-me.jpg`} alt="My Profile" className="profile-img" />
            </div>
            <div className="about-right">
              <p>
                I'm a fresher who brings knowledge and skills of various computer languages,
                such as Java, JavaScript, HTML, React, and Python. In addition
                to professional courses, I am currently pursuing a degree in Computer Science. I love learning new
                things and am passionate about technology and creative solutions to solve real-world problems.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="expertise-section">
          <div className="container"><div className="expertise-wrapper">
            <div className="expertise-left"><h2><span>What</span> I Do Best?</h2></div>
            <div className="expertise-right">
              <div className="expertise-featured">
                <img src={`${PUBLIC}/images/icon-branding.png`} alt="Branding Icon" />
                <div className="expertise-text">
                  <h3>Branding And Identity Development</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                  a more-or-less normal distribution of letters.</p>
                </div>
              </div>
              <div className="expertise-item">
                <img src={`${PUBLIC}/images/icon-app.png`} alt="App Design Icon" />
                <h4>App Design & Development</h4>
              </div>
              <div className="expertise-item">
                <img src={`${PUBLIC}/images/icon-web.png`} alt="Web Icon" />
                <h4>Web And Digital Experience Design</h4>
              </div>
              <div className="expertise-item">
                <img src={`${PUBLIC}/images/icon-styleguide.png`} alt="Style Guide Icon" />
                <h4>Visual Style Guide</h4>
              </div>
              <div className="expertise-item">
                <img src={`${PUBLIC}/images/icon-social.png`} alt="Social Media Icon" />
                <h4>Social Media Management</h4>
              </div>
            </div>
          </div></div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Let's Work Together</h2>
          <p className="contact-email">sunscript@mail.com</p>
          <a href="contact.html" className="btn-secondary">Get Started</a>
        </section>

        {/* Get In Touch */}
        <section
          className="get-in-touch get-in-touch-hero"
          style={{
            background: `url(${PUBLIC}/images/get-in-touch-bg.jpg) no-repeat center center/cover`,
            color: '#fff',
            padding: '50px 20px',
            textAlign: 'center'
          }}
        >
          <div className="hero-overlay"><div className="content">
            <h2>Get In Touch With Me</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters.</p>
            <form className="newsletter-form">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Mail id here" required />
              <button type="submit">Subscribe</button>
            </form>
          </div></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
