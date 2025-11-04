import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { committees } from '../committees'; // Import our committee list
import './CommitteeLogin.css';

function CommitteeLogin() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentCommittee, setCurrentCommittee] = useState(null);

  // This is the magic: 'useParams' reads the :committeeId from the URL
  const { committeeId } = useParams();
  const navigate = useNavigate();

  // Find the matching committee from our list
  useEffect(() => {
    const committee = committees.find(c => c.id === committeeId);
    if (committee) {
      setCurrentCommittee(committee);
    } else {
      // If no committee matches, send them back home
      navigate('/');
    }
  }, [committeeId, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in to:', committeeId);
    console.log('Credentials:', { role, email, password });
    
    // --- API Call will go here ---
    // You will send { role, email, password, committeeId }
    // to your backend.
  };

  // While loading or if no committee, show a simple message
  // THIS IS THE CORRECTED LINE:
  if (!currentCommittee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="login-page-container">
      <div className="login-box">
        <div className="login-header">
          <img src={currentCommittee.logo} alt={currentCommittee.name} className="committee-login-logo" />
          <h2>{currentCommittee.name}</h2>
          <p>Faculty & Treasurer Login</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="role-selector">
            <label className={role === 'student' ? 'active' : ''}>
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === 'student'}
                onChange={() => setRole('student')}
              />
              <span>Student Treasurer</span>
            </label>
            <label className={role === 'teacher' ? 'active' : ''}>
              <input
                type="radio"
                name="role"
                value="teacher"
                checked={role === 'teacher'}
                onChange={() => setRole('teacher')}
              />
              <span>Faculty Advisor</span>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">VJTI Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Login
          </button>
        </form>

        <p className="login-footer">
          Credentials are provided by college administration.
        </p>
      </div>
    </div>
  );
}

export default CommitteeLogin;