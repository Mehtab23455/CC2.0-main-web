import React from 'react';
import './EventsPage.css';

function EventsPage() {
  return (
    <div className="events-container">
      <div className="registration-section">
        <h1 className="registration-title">
          <span className="arrow">&gt;</span>Registration Is Closed
        </h1>
        <p className="thank-you-message">
          Thank you for contributing to open source this month. Open source
          couldn't survive without the dynamic duo of project maintainers and
          volunteers like you.
        </p>
        <p className="event-status">
          <span className="event-highlight">HackApps #11</span> has officially ended.
        </p>
      </div>
    </div>
  );
}

export default EventsPage;