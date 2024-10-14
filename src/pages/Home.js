import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css'; // Optional CSS for better styling

function Home() {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to Our E-learning Platform</h1>
        <p>
          Empowering learners with industry-relevant courses. Join us to achieve your goals from anywhere, anytime. 
        </p>
        {/* Use Link instead of button */}
        <Link to="/courses" className="cta-button">Explore Courses</Link>
      </header>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Access courses 24/7 from any device and learn at your own pace.</p>
          </div>
          <div className="feature-card">
            <h3>Industry Experts</h3>
            <p>Learn from professionals with real-world experience.</p>
          </div>
          <div className="feature-card">
            <h3>Certifications</h3>
            <p>Earn certificates to boost your career and skills.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"This platform helped me land my dream job! The courses are practical and easy to follow."</p>
            <h4>— Sarah, Software Engineer</h4>
          </div>
          <div className="testimonial">
            <p>"The instructors are amazing, and the certification really made a difference in my career."</p>
            <h4>— John, Data Scientist</h4>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of learners worldwide who are advancing their careers through our courses.</p>
        <Link to="/courses" className="cta-button">Get Started Now</Link>
      </section>
    </div>
  );
}

export default Home;
