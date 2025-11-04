import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import { committees } from '../committees'; // Import our scalable list
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome-container">
      <header className="welcome-hero">
        <div className="hero-content">
          <h1>VJTI Committee Coordinator</h1>
          <p>A unified portal for managing committee finances, expenses, and reimbursements with full transparency.</p>
          <h2>Please select your committee to begin.</h2>
        </div>
        <div className="hero-bg"></div>
      </header>

      <section className="committee-grid">
        {committees.map((committee) => (
          // This Link component is from react-router-dom
          // It's like an <a> tag but for React.
          <Link 
            to={`/login/${committee.id}`} 
            className="committee-card" 
            key={committee.id}
          >
            <div className="card-logo">
              <img src={committee.logo} alt={committee.name} />
            </div>
            <div className="card-name">
              <h3>{committee.name}</h3>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Welcome;