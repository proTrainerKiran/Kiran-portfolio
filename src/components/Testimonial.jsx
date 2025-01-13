import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import leftArrow from '../assets/Circle Arrow-1.png';
import rightArrow from '../assets/Circle Arrow.png';

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      heading: '" Comfortable and motivated throughout the journey "',
      content: "Kiran is an exceptional trainer who helped me achieve my weight loss goals and regain my confidence. His personalized training plans and positive encouragement were instrumental in my success. He not only pushed me to my limits but also made sure I was comfortable and motivated throughout the journey. Kiran's expertise and dedication are truly commendable. I highly recommend him to anyone looking for a supportive and effective trainer.",
      user: "Sabina"
    },
    {
      heading:'" Enthusiastic encouragements and non-judgmental quality "',
      content: "Kiran has been training me for the last six months. The one thing about him that stands out to me is his enthusiastic encouragements and the non-judgmental quality. If someone inspires us to work out more than just ourselves and our own power and motivation to do so, that will have the biggest impact and inspire us to accomplish more. It is highly recommended that Kiran just does that. I wanted to take this opportunity to express my sincere gratitude to Kiran for his expertise and commitment, which have had a great impact on many of their fitness journeys.",
      user: "Padma"
    },
    {
      heading: '" Made every session effective and enjoyable "',
      content: "Training with Kiran has been a game-changer for me. His deep understanding of fitness and personalized approach made every session effective and enjoyable. Kiran knows exactly how to challenge without overwhelming, which kept me consistent and focused. I’ve not only improved my physical fitness but also developed a healthier mindset.",
      user: "Andrew"
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ backgroundColor: '#1b0a03', fontFamily: 'Neohead', color: 'white', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '49.02px', letterSpacing: '0.02em', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', whiteSpace: 'wrap' }}>
        Hear it from my clients
      </h1>
      <TestimonialCard 
        heading={testimonials[currentIndex].heading} 
        content={testimonials[currentIndex].content} 
        user={testimonials[currentIndex].user} 
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={handlePrevClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={leftArrow} alt="Previous" style={{ width: '40px', height: '40px' }} />
        </button>
        <button onClick={handleNextClick} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
          <img src={rightArrow} alt="Next" style={{ width: '40px', height: '40px' }} />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;