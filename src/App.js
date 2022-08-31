import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Video />} />
      </Routes>


      <Footer />
    </Router >


  );
}

export default App;
