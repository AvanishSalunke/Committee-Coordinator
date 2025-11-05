import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { committees } from '../committees';
import './CommitteeLogin.css';

function CommitteeLogin() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentCommittee, setCurrentCommittee] = useState(null);
  
  // Parallax State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { committeeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const committee = committees.find(c => c.id === committeeId);
    if (committee) {
      setCurrentCommittee(committee);
    } else {
      navigate('/');
    }
  }, [committeeId, navigate]);
  
  // Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in to:', committeeId);
    console.log('Credentials:', { role, email, password });
  };

  if (!currentCommittee) {
    return <div>Loading...</div>;
  }

  return (
    // --- THIS IS THE ONLY LINE WE'RE CHANGING ---
    // We're replacing "page-container login-page-container"
    // with our new full-screen class.
    <div className="login-page-fullscreen-wrapper">
      
      {/* --- Parallax Background --- */}
      <div 
        className="parallax-grid-bg"
        style={{
          transform: `translate(${mousePos.x / -50}px, ${mousePos.y / -50}px)`
        }}
      ></div>
      {/* ------------------------------- */}

      {/* The card will be centered by the new wrapper */}
      <div className="card login-card-layout">
        
        <div className="login-identity-panel">
          <img 
            src={currentCommittee.logo} 
            alt={currentCommittee.name} 
            className="committee-login-logo" 
          />
          <h2>{currentCommittee.name}</h2>
          <p>Faculty & Treasurer Login</p>
        </div>

        <div className="login-form-panel">
          <form onSubmit={handleLogin}>
            <div className="role-selector">
              <label className={role === 'student' ? 'active' : ''}>
                <input
                  type="radio" name="role" value="student"
                  checked={role === 'student'}
                  onChange={() => setRole('student')}
                />
                <span>Student Treasurer</span>
              </label>
              <label className={role === 'teacher' ? 'active' : ''}>
                <input
                  type="radio" name="role" value="teacher"
                  checked={role === 'teacher'}
                  onChange={() => setRole('teacher')}
                />
                <span>Faculty Advisor</span>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">VJTI Email</label>
              <input
                type="email" id="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password" id="password" value={password}
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
    </div>
  );
}

export default CommitteeLogin;