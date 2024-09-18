import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Homepages/Home';
import Services from './pages/Servicespages/Services';
import Appointments from './pages/Appointmentspages/Appointments';
import Contact from './pages/Contactpages/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './styles/App.css';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;