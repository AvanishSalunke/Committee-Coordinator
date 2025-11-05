import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { committees } from '../committees';
import { mockAnnouncements } from '../mockData';
import './Welcome.css'; // We will completely replace this file

// --- Settings (Same) ---
const ITEMS_TO_SHOW = 4;
const AUTO_PLAY_DELAY = 5000;
const TRANSITION_DURATION = 500;
const headlineCommittes = ['Technovanza', 'SRA', 'Pratibimb', 'Enthusia', 'Rangawardhan', 'VJTI Racing', 'E-Cell'];
const announcementsPreview = mockAnnouncements.slice(0, 3);

function Welcome() {
  // --- All State and Logic (This is all unchanged) ---
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(committees.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayTimer = useRef(null);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlineCommittes.length);
    }, 3000);
    return () => clearInterval(headlineInterval);
  }, []);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDisplayIndex((prev) => prev + 1);
    setCurrentIndex((prev) => (prev + 1) % committees.length);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDisplayIndex((prev) => prev - 1);
    setCurrentIndex((prev) => (prev - 1 + committees.length) % committees.length);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [isHovering]);

  const startAutoPlay = () => { if (isHovering) return; stopAutoPlay(); autoPlayTimer.current = setInterval(goToNext, AUTO_PLAY_DELAY); };
  const stopAutoPlay = () => { if (autoPlayTimer.current) clearInterval(autoPlayTimer.current); };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (displayIndex === committees.length * 2) {
      sliderRef.current.style.transition = 'none'; setDisplayIndex(committees.length); void sliderRef.current.offsetWidth;
      sliderRef.current.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
    }
    if (displayIndex === committees.length - 1) {
      sliderRef.current.style.transition = 'none'; setDisplayIndex(committees.length * 2 - 1); void sliderRef.current.offsetWidth;
      sliderRef.current.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
    }
  };
  const sliderItems = [...committees, ...committees, ...committees];
  // --- End of Unchanged Logic ---

  return (
    // We add a new class "aesthetic-welcome" to the root
    <div className="welcome-container aesthetic-welcome">
      
      {/* --- 1. HERO (Redesigned) --- */}
      <header className="aesthetic-hero">
        {/* The hero content is now in a container */}
        <div className="hero-content-container">
          <h1>
            Welcome to the home of
            <span className="dynamic-headline" key={headlineIndex}>
              {headlineCommittes[headlineIndex]}
            </span>
          </h1>
          <p>A unified portal for managing committee finances, expenses, and reimbursements with full transparency.</p>
        </div>
      </header>

      {/* --- 2. ANNOUNCEMENTS (Moved Up) --- */}
      <section className="announcements-container">
        <div className="announcements-header">
          <h2>Live Announcements</h2>
          <p>General updates from the college administration</p>
        </div>
        <div className="announcements-list">
          {announcementsPreview.map((announcement) => (
            <div className="announcement-card" key={announcement.id}>
              <h3>{announcement.title}</h3>
              <span className="announcement-date">{announcement.date}</span>
              <p>{announcement.snippet}</p>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/announcements" className="btn-view-all">
            View All Announcements &rarr;
          </Link>
        </div>
      </section>

      {/* --- 3. COMMITTEE CAROUSEL (Moved Down, Redesigned) --- */}
      <section className="carousel-section">
        <div className="carousel-header">
          <h2>Select Your Committee</h2>
        </div>
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button className="carousel-arrow left" onClick={goToPrevious} aria-label="Previous">&lt;</button>
          
          <div className="carousel-ghost-wrapper">
            <div className="carousel-window">
              <div
                className="carousel-slider"
                ref={sliderRef}
                style={{
                  transform: `translateX(-${displayIndex * (100 / ITEMS_TO_SHOW)}%)`,
                  transition: isTransitioning ? `transform ${TRANSITION_DURATION}ms ease-in-out` : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {sliderItems.map((committee, index) => (
                  <Link
                    to={`/login/${committee.id}`}
                    // We use the NEW card style
                    className="committee-card-portrait"
                    key={`${committee.id}-${index}`}
                  >
                    <div className="card-portrait-logo">
                      <img src={committee.logo} alt={committee.name} />
                    </div>
                    <div className="card-portrait-name">
                      <h3>{committee.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <button className="carousel-arrow right" onClick={goToNext} aria-label="Next">&gt;</button>
        </div>
      </section>
    </div>
  );
}

export default Welcome;