import React, { useState } from 'react';
import './TeamRegistrationForm.css';

const TeamRegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    hackathonExperience: '',
    teamSize: 2,
    participantNames: '',
    contactNumber: '',
    teamLeaderEmail: '',
    college: '',
    program: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "teamSize") {
      let newSize = parseInt(value, 10);
      if (newSize < 2) newSize = 2;
      if (newSize > 4) newSize = 4;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Team Registration Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="registration-container">
      <div className="form-wrapper">
        {!submitted && <h2 className="header"></h2>}
        <p className='sexess'>Register Your Team</p>

        {submitted ? (
          <div className="success-message">
            <h3>Registration Successful!</h3>
            <p className='sexesss'>Your team has been registered. We will contact you soon.</p>
            <button onClick={() => setSubmitted(false)}>REGISTER ANOTHER TEAM</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label>Team Name*</label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
                placeholder="Enter team name"
              />
            </div>

            <div className="form-group">
              <label>Number of Team Members (2-4)*</label>
              <input
                type="number"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                min="2"
                max="4"
                required
              />
            </div>

            <div className="form-group">
            <label>Names of Participants*</label>
  <textarea
    name="participantNames"
    value={formData.participantNames}
    onChange={handleChange}
    required
    placeholder="Enter all participant names, separated by commas"
    className="fixed-size-textarea"
  ></textarea>
            </div>

            <div className="form-group">
              <label>Contact Number (Any One Member)*</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                placeholder="Enter one contact number"
              />
            </div>

            <div className="form-group">
              <label>Team Leader Email*</label>
              <input
                type="email"
                name="teamLeaderEmail"
                value={formData.teamLeaderEmail}
                onChange={handleChange}
                required
                placeholder="Enter team leader's email"
              />
            </div>

            <div className="form-group">
              <label>College/University Name (Only for Team Leader)*</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
                placeholder="Enter college/university name"
              />
            </div>

            <div className="form-group">
              <label>Program (Only for Team Leader)*</label>
              <select name="program" value={formData.program} onChange={handleChange} required>
                <option value="">Select a program</option>
                <option value="B.Tech">B.Tech</option>
                <option value="BCA">BCA</option>
                <option value="B.Sc">B.Sc</option>
                <option value="MCA">MCA</option>
                <option value="M.Tech">M.Tech</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="form-group">
              <label>Have you participated in a hackathon before?*</label>
              <select name="hackathonExperience" value={formData.hackathonExperience} onChange={handleChange} required>
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-footer">
              <p className='mia'>* Required fields. Teams must have total members between 2-4 members.</p>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default TeamRegistrationForm;
