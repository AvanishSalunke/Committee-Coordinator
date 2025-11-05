import React from 'react';
import { mockFaculty } from '../mockData'; // Get faculty list
import './Faculty.css'; // New CSS file

function Faculty() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Faculty Advisors</h1>
        <p>Official faculty managers for VJTI committees.</p>
      </div>

      <div className="faculty-grid">
        {mockFaculty.map((faculty) => (
          <div className="faculty-card" key={faculty.id}>
            <div className="faculty-photo">
              <img src={faculty.photo} alt={faculty.name} />
            </div>
            <div className="faculty-info">
              <h3>{faculty.name}</h3>
              <p className="faculty-dept">{faculty.department}</p>
              <div className="faculty-committees">
                <strong>Advising:</strong>
                <ul>
                  {faculty.committees.map((committee) => (
                    <li key={committee}>{committee}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;