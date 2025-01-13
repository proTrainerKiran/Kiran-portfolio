import React from 'react'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'

function Package() {
  const packageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#1b0a03',
    gap: '20px'
  };

  return (
    <div style={{ backgroundColor: '#1b0a03', fontFamily: 'Neohead', color: 'white', padding: '20px', textAlign: 'center' }}>
     <h1 style={{ fontSize: '25px', fontWeight: 'bold', lineHeight: '49.02px', letterSpacing: '0.02em', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', whiteSpace: 'wrap' }}>
        Tailored Solution for your Fitness Needs
      </h1>
    <div style={packageContainerStyle}>
      <Card/>
      <Card2/>
      <Card3/>
    </div>
    </div>
  )
}

export default Package
