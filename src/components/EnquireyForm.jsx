import React from 'react'
import Form from './Form'

function EnquireyForm() {
  return (
    <div style={{ backgroundColor: '#1b0a03', fontFamily: 'Neohead', color: 'white', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '49.02px', letterSpacing: '0.02em', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', whiteSpace: 'nowrap', textAlign: 'center' }}>
        Ready to make changes ?
      </h1>
      <h2 style={{ fontSize: '25px', fontWeight: 'bold', lineHeight: '49.02px', letterSpacing: '0.02em', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', whiteSpace: 'nowrap', textAlign: 'center' }}>
        Three day free trail!
      </h2>
      <p style={{ fontSize: '15px', fontWeight: '400', lineHeight: '1.5', letterSpacing: '0.02em', textAlign: 'center', margin: '20px 0' }}>
        Experience my engaging workouts and personalized coaching with 3 days free trial available to everyone. Start your fitness journey today!
      </p> 
      <Form />
    </div>
  )
}

export default EnquireyForm
