import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header';
import MainPage from '../src/Components/MainPage';
import About from '../src/Components/About';
import Contact from '../src/Components/Contact';
import Footer from '../src/Components/Footer';
import '../src/style.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;