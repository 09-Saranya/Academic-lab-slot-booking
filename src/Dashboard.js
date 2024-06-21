import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = ({ name, academicYear, department, semester, subject }) => {
    const [slotsBooked, setSlotsBooked] = useState(0);
    const [profilePhoto, setProfilePhoto] = useState('C:\Users\HP\Documents\Projects\login page\src\profile_photo.png');
    const [uploadedPhoto, setUploadedPhoto] = useState(null);

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setUploadedPhoto(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="dashboard">
            <div>
                <img src={profilePhoto} alt="Profile Photo" className="profile-photo" />
            </div>
            <div className='profile'>
                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="upload-photo" />
            </div>
            <div>
                <p>Name: {name}</p>
                <p>Academic Year: {academicYear}</p>
                <p>Department: {department}</p>
                <p>Semester: {semester}</p>
                <p>Subject: {subject}</p>
                <p>Number of Slots Booked: {slotsBooked}</p>
            </div>
        </div>
    );
};

export default Dashboard;
