import React from 'react';
import './About.css'; // Include your CSS for styling

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h2>About Us</h2>
        <p>
          We are a leading e-learning platform dedicated to providing top-notch education across various domains. Our mission is to empower learners with the skills and knowledge they need to excel in their careers.
        </p>
      </header>

      <div className="cards-container">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to make quality education accessible to everyone, everywhere. We strive to provide a diverse range of courses that cater to different learning styles and preferences, ensuring that every learner can achieve their goals.
          </p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>
            We envision a world where education is not limited by geographical boundaries. Our aim is to bridge the gap between traditional learning and modern technology, creating a global community of learners who can share knowledge and insights.
          </p>
        </div>

        <div className="card">
          <h3>Our Values</h3>
          <ul>
            <li>Integrity: We believe in maintaining honesty and transparency in all our dealings.</li>
            <li>Innovation: We are committed to embracing change and fostering creativity in our courses.</li>
            <li>Inclusivity: We welcome learners from all backgrounds and strive to create an inclusive environment.</li>
            <li>Excellence: We are dedicated to providing high-quality content and exceptional support to our learners.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Our History</h3>
          <p>
            Founded in [Year], our platform started with a handful of courses and has grown exponentially over the years. Today, we offer hundreds of courses in various fields, taught by industry experts and seasoned educators.
          </p>
        </div>
      </div>

      <section className="cta">
        <h3>Join Us Today!</h3>
        <p>
          Become a part of our growing community of learners and take the first step towards advancing your career. Explore our courses and discover the possibilities!
        </p>
      </section>
    </div>
  );
}

export default About;
