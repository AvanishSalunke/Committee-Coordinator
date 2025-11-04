import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import CommitteeLogin from './pages/CommitteeLogin';

function App() {
  return (
    <div className="app-container">
      <Navbar /> {/* The navbar will show on every page */}
      <main>
        <Routes>
          {/* Route 1: The "Welcome" Homepage */}
          <Route path="/" element={<Welcome />} />
          
          {/* Route 2: The "Login" page for a specific committee */}
          {/* :committeeId is a dynamic part of the URL */}
          <Route path="/login/:committeeId" element={<CommitteeLogin />} />
          
          {/* Later, we will add protected routes for the dashboard */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;