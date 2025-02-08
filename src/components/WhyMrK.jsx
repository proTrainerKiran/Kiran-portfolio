import React, { useState } from 'react';
import UserCard from "./UserCard";
import certificate1 from '../assets/REPS India.png';
import certificate2 from '../assets/Ministry of Skill Development and Entrepreneurship.png';
import certificate3 from '../assets/K11 School of Fitness Science.png';
import certificate4 from '../assets/PD Approval.png';

const certificates = [certificate1, certificate2, certificate3, certificate4];

const WhyMrK = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div style={{ backgroundColor: '#1b0a03', fontFamily: 'Neohead', color: 'white', padding: '20px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '49.02px', letterSpacing: '0.02em', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', whiteSpace: 'nowrap' }}>
                Why choose Me?
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
            <div style={{ marginTop: '20px' }}>
                <h2 style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '49.02px', letterSpacing: '0.02em', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', whiteSpace: 'nowrap' }}>
                    Certifications
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <button onClick={handlePrev} style={{ marginRight: '10px', backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>{'<'}</button>
                    <img src={certificates[currentIndex]} alt="Certificate" style={{ width: '200px', height: 'auto' }} />
                    <button onClick={handleNext} style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>{'>'}</button>
                </div>
            </div>
        </div>
    );
};

export default WhyMrK;
