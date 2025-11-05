import React from 'react';
import { mockAnnouncements } from '../mockData'; // Get ALL announcements
import './Announcements.css'; // New CSS file

function Announcements() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>All Announcements</h1>
        <p>A complete archive of all official communication.</p>
      </div>

      <div className="full-announcements-list">
        {/* We map the full list, not just the preview */}
        {mockAnnouncements.map((announcement) => (
          <div className="announcement-card" key={announcement.id}>
            <h3>{announcement.title}</h3>
            <span className="announcement-date">{announcement.date}</span>
            <p>{announcement.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;