// import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from '../component/AboutUs/About';
// import Contactus from '../component/Contactus/Contactus';
// import Destinations from '../component/Destinations/Destinations';
// import Footer from '../component/Footer/Footer';
// import Home from '../component/Home/Home';
// import Navbar from '../component/Navbar/Navbar';
// import Tour from '../component/Tour/Tour';

// function App() {
//   return (
   
//   <Navbar />;
//   <Home />;
//   <About />;
//   <Destinations />;
//   <Tour />; 
//   <Contactus />;
//   <Footer /> 
// </div>

//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../component/AboutUs/About";
import Contactus from "../component/Contactus/Contactus";
import Tour from "../component/Tour/Tour";
import Destinations from "../component/Destinations/Destinations";
import Navbar from "../component/Navbar/Navbar";
import Home from "../component/Home/Home";
import Footer from "../component/Footer/Footer"

export default function App() {
  return (
    <BrowserRouter>
   
      <Navbar />
      
      <Routes>
        {/* Define all your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="tour" element={<Tour />} />
        <Route path="destinations" element={<Destinations />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
