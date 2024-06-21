import React, { useState } from 'react';
import StudentContentPage from './StudentContentPage';
import FacultyContentPage from './FacultyContentPage';


const ContentPage = ({ name, userType }) => {
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const academicYearOptions = ['2021-2022', '2022-2023', '2023-2024'];
  const semesterOptions = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];


  const handleSubmission = () => {


    console.log(`Selected Academic Year: ${academicYear}, Selected Semester: ${semester}`);
  };


  return (
    <>
      {userType === 'student' ? (
        <StudentContentPage
          name={name}
          academicYear={academicYear}
          setAcademicYear={setAcademicYear}
          semester={semester}
          setSemester={setSemester}
          academicYearOptions={academicYearOptions}
          semesterOptions={semesterOptions}
          handleSubmission={handleSubmission}
        />
      ) : (
        <FacultyContentPage
          name={name}
          academicYear={academicYear}
          setAcademicYear={setAcademicYear}
          semester={semester}
          setSemester={setSemester}
          academicYearOptions={academicYearOptions}
          semesterOptions={semesterOptions}
          handleSubmission={handleSubmission}
        />
      )}
    </>
  );
};


export default ContentPage;
