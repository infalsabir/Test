
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to My React App</h1>
        <p className="hero-description">
          This is a modern and beautiful home page design.
        </p>
        <button className="hero-button">Get Started</button>
      </header>

      <section className="features">
        <div className="feature-item">
          <h2>Feature 1</h2>
          <p>Learn more about this feature.</p>
        </div>
        <div className="feature-item">
          <h2>Feature 2</h2>
          <p>Explore the possibilities with this.</p>
        </div>
        <div className="feature-item">
          <h2>Feature 3</h2>
          <p>See how this feature can benefit you.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
