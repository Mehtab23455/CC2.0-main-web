import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventsPage';
import TeamRegistrationForm from './pages/TeamRegistrationForm'; // Import Registration Form
import Footer from './components/Footer';
import './App.css';
import HackathonInfoPage from './pages/Here';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/register" element={<TeamRegistrationForm />} /> {/* Add this route */}
            <Route path="/here" element={<HackathonInfoPage />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
