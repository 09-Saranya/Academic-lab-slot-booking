import React, { useState } from 'react';
import './StudentContentPage.css';
import Dashboard from'./Dashboard'
import BookSlot from './BookSlot'

const StudentContentPage = ({ name, academicYearOptions, semesterOptions, handleSubmission }) => {
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [subject, setSubject] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showBookSlot, setShowBookSlot] = useState(false);
  const [showExperimentList, setShowExperimentList] = useState(false);

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    if (e.target.value === 'EEE' && semester === 'S6') {
      setSubject('');
    } else {
      setSubject('');
    }
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    if (department === 'EEE' && e.target.value === 'S6') {
      setSubject('');
    } else {
      setSubject('');
    }
  };

  const handleSubmit = () => {
    handleSubmission();
    setSubmitted(true);
  };

  const handleDashboardClick = () => {
    setShowDashboard(true);
    setShowBookSlot(false);
  };
  const handleBookSlotClick = () => {
    setShowBookSlot(true);
    setShowDashboard(false);
  };
  
  
  if (submitted) {
    return (
      <div className="content-page">
        {showDashboard ? (
          <Dashboard
            name={name}
            academicYear={academicYear}
            department={department}
            semester={semester}
            subject={subject}
          />
        ) : showBookSlot ? (
          <div>
            <h1>Book Slot</h1>
            <BookSlot/>
          </div>
        ) : (
          <div>
            <h1>Welcome {name} !</h1>
            <p className="profile-component">
              <button onClick={handleDashboardClick}>Dashboard</button>
            </p>
            <p className='book-slot-component'>
              <button onClick={handleBookSlotClick}>Book slot</button>
            </p>
            <p className='experiments-list-component'>
              <button>List of Experiments</button>
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="content-page">
      <label htmlFor="academicYear">Select Academic Year:</label>
      <select
        id="academicYear"
        value={academicYear}
        onChange={(e) => setAcademicYear(e.target.value)}
      >
        <option value="">Select Academic Year</option>
        {academicYearOptions.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <br />

      <label htmlFor="semester">Select Semester:</label>
      <select
        id="semester"
        value={semester}
        onChange={handleSemesterChange}
      >
        <option value="">Select Semester</option>
        {semesterOptions.map((sem) => (
          <option key={sem} value={sem}>{sem}</option>
        ))}
      </select>

      <br />

      <label htmlFor="department">Select Department:</label>
      <select
        id="department"
        value={department}
        onChange={handleDepartmentChange}
      >
        <option value="">Select Department</option>
        <option value="EEE">EEE</option>
        <option value="ECE">ECE</option>
        <option value="EIE">EIE</option>
        <option value="MECH">MECH</option>
        <option value="ISE">ISE</option>
        <option value="CSE">CSE</option>
      </select>

      <br />

      {department === 'EEE' && semester === 'S6' && (
        <>
          <label htmlFor="subject">Select Subject:</label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="Microcontroller">Microcontroller</option>
            <option value="Power Electronics">Power Electronics</option>
          </select>
        </>
      )}

      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StudentContentPage;