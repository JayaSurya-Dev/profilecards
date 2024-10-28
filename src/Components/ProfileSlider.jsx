import React, { useState } from 'react';
import '../Styles/UserCard.css';

const profiles = [
    {
        name: 'John Doe',
        address: 'New York, USA',
        skills: ['JavaScript', 'React', 'Node.js'],
        company: 'TechCorp',
    },
    {
        name: 'Jane Smith',
        address: 'London, UK',
        skills: ['Python', 'Django', 'Data Science'],
        company: 'DataGen',
    },
    {
        name: 'Alex Johnson',
        address: 'Sydney, Australia',
        skills: ['Java', 'Spring Boot', 'AWS'],
        company: 'CloudWorks',
    },
];

const ProfileSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProfile = () => {
        setCurrentIndex((currentIndex + 1) % profiles.length);
    };

    const prevProfile = () => {
        setCurrentIndex((currentIndex - 1 + profiles.length) % profiles.length);
    };

    return (
        <div className="profile-slider">
            <div className="profile-card">
                <h2>{profiles[currentIndex].name}</h2>
                <p><strong>Address:</strong> {profiles[currentIndex].address}</p>
                <p><strong>Skills:</strong> {profiles[currentIndex].skills.join(', ')}</p>
                <p><strong>Company:</strong> {profiles[currentIndex].company}</p>
            </div>
            <div className="slider-controls">
                <button onClick={prevProfile}>&lt; Prev</button>
                <button onClick={nextProfile}>Next &gt;</button>
            </div>
        </div>
    );
};

export default ProfileSlider;
