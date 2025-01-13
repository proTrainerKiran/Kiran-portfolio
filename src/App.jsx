import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import AboutUser from './components/AboutUser';
import WhyUser from './components/WhyUser';
import Package from './components/Package';
import Testimonial from './components/Testimonial';
import EnquireyForm from './components/EnquireyForm';
import WhyMrK from './components/WhyMrK';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#1b0a03', fontFamily: 'Neohead' }}>
        <NavigationBar />
        <div className="container">
          {/* Sections with respective IDs */}
          <section id="about">
            <AboutUser />
          </section>
          <section id="why">
            <WhyUser />
          </section>
          <section id="package">
            <Package />
          </section>
          <section id="why-mrk">
            <WhyMrK />
          </section>
          <section id="testimonial">
            <Testimonial />
          </section>
          <section id="enquiry">
            <EnquireyForm />
          </section>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
