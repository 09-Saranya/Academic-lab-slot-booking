import React, { useState, useEffect } from 'react';
import './FacultyContentPage.css';


const FacultyContentPage = ({ name, academicYearOptions, semesterOptions, handleSubmission }) => {
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
 

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setSelectedSemester(e.target.value);
  };


  const handleFacultyChange = (facultyName) => {
    if (facultyName === 'shankar') {
      setSelectedSubject('Power Electronics Laboratory');
    } else if (facultyName === 'gopika') {
      setSelectedSubject('');
    }
  };
 

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };


  useEffect(() => {
    handleFacultyChange(name);
  }, [name]);


  useEffect(() => {
    if (selectedSemester === 'S6' && selectedDepartment === 'EEE' && name === 'gopika') {
      setSelectedSubject('Microcontroller');
    } else {
      setSelectedSubject('');
    }
  }, [selectedSemester, selectedDepartment, name]);


  return (
    <div className="content-page">
      <h1>Welcome {name}!</h1>
      <label htmlFor="academicYear">Select Academic Year:</label>
      <select
        id="academicYear"
        value={academicYear}
        onChange={(e) => setAcademicYear(e.target.value)}
      >
        <option value="2023-2024">2023-2024</option>
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
        value={selectedDepartment}
        onChange={handleDepartmentChange}
      >
        <option value="">Select Department</option>
        <option value="EEE">EEE</option>
        <option value="ECE">ECE</option>
        <option value="EIE">EIE</option>
        <option value="CSE">CSE</option>
        <option value="MECH">MECH</option>
        <option value="ISE">ISE</option>
      </select>


      {selectedSemester === 'S6' && (
        <>
          <label htmlFor="subject">Select Subject:</label>
          <select id="subject" value={selectedSubject} disabled>
            <option value={selectedSubject}>{selectedSubject}</option>
          </select>
        </>
      )}


      <br />


      <button>Submit</button>
    </div>
  );
};


export default FacultyContentPage;
