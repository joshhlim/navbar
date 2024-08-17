import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footbar from './Footbar';
import Whisky from './pages/Whisky';
import Spirits from './pages/Spirits';
import Wine from './pages/Wine';
import Sake from './pages/Sake';
import Home from './pages/Home';
import Privacy from './pages/privacy';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/Whisky" element={<Whisky />} />
                    <Route path="/Spirits" element={<Spirits />} />
                    <Route path="/Wine" element={<Wine />} />
                    <Route path="/Sake" element={<Sake />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </div>
            <Footbar />
            <Routes>
                <Route path="/Terms" element={<Terms />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Privacy" element={<Privacy />} />
            </Routes>
        </Router>
    );
};

export default App;
