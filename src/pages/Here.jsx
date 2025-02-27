import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Here.css";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaUsers } from "react-icons/fa";

const LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const eventDate = new Date("2024-12-31T23:59:59");
    const now = new Date();
    const difference = eventDate - now;
    
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to the Hackathon!</h1>
        <p>Join us for an exciting coding competition.</p>
      </header>

      <section className="countdown">
        <h2>Event Countdown</h2>
        <div className="timer">
          <span>{timeLeft.days}d</span> :
          <span>{timeLeft.hours}h</span> :
          <span>{timeLeft.minutes}m</span> :
          <span>{timeLeft.seconds}s</span>
        </div>
      </section>

      <section className="event-details">
        <h2>Event Details</h2>
        <ul>
          <li><FaCalendarAlt /> Date: December 31, 2024</li>
          <li><FaClock /> Time: 10:00 AM - 6:00 PM</li>
          <li><FaMapMarkerAlt /> Location: Tech Hub, City Center</li>
          <li><FaUsers /> Participants: Open to all developers</li>
        </ul>
      </section>

      <section className="interactive-map">
        <h2>Event Location</h2>
        <iframe
          title="Event Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509367!2d144.9559231153168!3d-37.8172099797515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sTech%20Hub!5e0!3m2!1sen!2sus!4v1632336895652!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2024 Hackathon Event. All rights reserved.</p>
        <Link to="/register" className="register-btn">Register Now</Link>
      </footer>
    </div>
  );
};

export default LandingPage;
