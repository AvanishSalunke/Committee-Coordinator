import React from 'react';
import { Link } from 'react-router-dom';
import { committees } from '../committees';
import { mockAnnouncements } from '../mockData';
import './Welcome.css'; // We'll keep this file, but *only* for the hero

// Get just the top 3 announcements
const announcementsPreview = mockAnnouncements.slice(0, 3);

// --- A "Bullhorn" SVG Icon (Same as before) ---
const BullhornIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M21.75 12a.75.75 0 0 1-.75.75H13.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72h7.19a.75.75 0 0 1 .75.75Z" />
    <path fillRule="evenodd" d="M11.03 2.522a.75.75 0 0 1 .622.868l-1.04 4.162a.75.75 0 0 1-.622.868H9.36l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72h.63l1.04-4.162a.75.75 0 0 1 .868-.622Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M10.125 15.75a.75.75 0 0 1 .75.75v5.04l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-5.04a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M15.47 11.03a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H15a.75.75 0 0 1 0-1.5h2.19l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

function Welcome() {
  return (
    <div className="welcome-page">
      
      {/* --- 1. THE "PERFECTED" HERO --- */}
      <header className="hero-container">
        {/* This is a real, high-quality image of VJTI */}
        <img 
          src="https://vjti.ac.in/wp-content/uploads/2024/06/VJTI-Quad-1-scaled.jpg" 
          alt="VJTI Campus" 
          className="hero-image"
          onError={(e) => e.target.src = 'https://placehold.co/1920x600/0a1f49/444444?text=VJTI+Campus'}
        />
        <div className="hero-overlay"></div>
        
        {/* The Glass Panel (Now correctly styled) */}
        <div className="hero-panel">
          <h1>Committee Coordinator</h1>
          <p>
            A VJTI portal for financial transparency, expense tracking, 
            and unified committee management.
          </p>
          <a href="#committee-grid" className="btn btn-primary">
            Select Your Committee
          </a>
        </div>
      </header>

      {/* --- 2. ANNOUNCEMENTS SECTION --- */}
      {/* We use the global .page-container class from App.css */}
      <section className="page-container">
        <div className="page-header">
          <h1>Live Announcements</h1>
          <p>General updates from the college administration</p>
        </div>
        
        {/* We use a specific layout for announcements */}
        <div className="announcement-list-layout">
          {announcementsPreview.map((announcement) => (
            // We use the global .card class from App.css
            <div className="card announcement-card-layout" key={announcement.id}>
              <div className="announcement-icon">
                <BullhornIcon />
              </div>
              <div className="announcement-content">
                <h3>{announcement.title}</h3>
                <span className="announcement-date">{announcement.date}</span>
                <p>{announcement.snippet}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-link">
          <Link to="/announcements">
            View All Announcements &rarr;
          </Link>
        </div>
      </section>

      {/* --- 3. COMMITTEE GRID SECTION --- */}
      {/* We use the global .page-container class again */}
      <section className="page-container" id="committee-grid">
        <div className="page-header">
          <h1>Select Your Committee</h1>
          <p>Choose your committee to log in and access your dashboard.</p>
        </div>
        
        {/* We use the global .committee-grid-layout class from App.css */}
        <div className="committee-grid-layout">
          {committees.map((committee) => (
            // We use the global .card class from App.css
            <Link to={`/login/${committee.id}`} className="card committee-card" key={committee.id}>
              <div className="committee-card-logo">
                <img src={committee.logo} alt={committee.name} />
              </div>
              <div className="committee-card-name">
                <h3>{committee.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Welcome;