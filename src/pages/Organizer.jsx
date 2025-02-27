import React from 'react';
import AdvancedCard from './Organizer';
import './Organizer.css'

const OrganizerSection = () => {
  const clubs = [
    {
      image: 'path/to/image1.jpg',
      title: 'CT University Organizing Club',
      subtitle: 'Empowering Student Voices',
      description: 'A group of dedicated students and faculty working together to organize events and activities that enrich the university experience.',
      members: ['Alice Smith', 'Bob Johnson', 'Charlie Brown'],
    },
    {
      image: 'path/to/image2.jpg',
      title: 'CT University Event Planners',
      subtitle: 'Creating Memorable Experiences',
      description: 'We specialize in planning and executing events that bring the university community together.',
      members: ['David Wilson', 'Eva Green', 'Frank White'],
    },
    // Add more clubs as needed
  ];

  return (
    <div className="organizer-section">
      <h1>Our Organizing Clubs</h1>
      <div className="card-container">
        {clubs.map((club, index) => (
          <AdvancedCard key={index} {...club} />
        ))}
      </div>
    </div>
  );
};

export default OrganizerSection;