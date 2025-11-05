import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import CommitteeLogin from './pages/CommitteeLogin';
import Announcements from './pages/Announcements'; // Import new page
import Faculty from './pages/Faculty';       // Import new page

function App() {
  return (
    <div className="app-container">
      <Navbar /> {/* The navbar will show on every page */}
      <main>
        <Routes>
          {/* Route 1: The "Welcome" Homepage */}
          <Route path="/" element={<Welcome />} />
          
          {/* Route 2: The "Login" page */}
          <Route path="/login/:committeeId" element={<CommitteeLogin />} />
          
          {/* Route 3: The "All Announcements" page (NEW) */}
          <Route path="/announcements" element={<Announcements />} />
          
          {/* Route 4: The "Faculty Advisors" page (NEW) */}
          <Route path="/faculty" element={<Faculty />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;