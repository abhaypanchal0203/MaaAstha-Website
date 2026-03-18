import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components Import
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- Ye line add kar

// Pages Import
import Home from './pages/Home';
import About from './pages/About';
import MissingPeople from './pages/MissingPeople';
import RescueRequest from './pages/RescueRequest';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Login from './pages/Login';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      {/* min-h-screen aur flex-col ensure karega ki Footer hamesha niche rahe */}
      <div className="pt-20 min-h-screen flex flex-col font-sans">
        
        {/* flex-grow poori baaki bachi jagah le lega, jisse footer niche push hoga */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/missing" element={<MissingPeople />} />
            <Route path="/rescue" element={<RescueRequest />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donation />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </main>

        {/* Routes ke khatam hone ke baad Footer aayega */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;