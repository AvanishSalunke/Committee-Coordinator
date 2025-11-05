import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import CommitteeLogin from './pages/CommitteeLogin';
import Announcements from './pages/Announcements';
import Faculty from './pages/Faculty';
import './App.css'; // Import our new design system

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* All pages will render inside this main tag */}
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login/:committeeId" element={<CommitteeLogin />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/faculty" element={<Faculty />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;