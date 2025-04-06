import React from 'react';
import { Link } from 'react-router-dom';
import portfolioImage1 from '../assets/portfolio-1.png';
import portfolioImage2 from '../assets/portfolio-2.png';
import portfolioImage3 from '../assets/portfolio-3.png';
import portfolioImage4 from '../assets/portfolio-4.png';
import portfolioImage5 from '../assets/portfolio-5.png';
import portfolioImage6 from '../assets/portfolio-6.png';
const MainPage = () => {
    return (
        <div className="main-page">
            <h2>Welcome to My Portfolio</h2>
            <div className="image-gallery">
                <img src={portfolioImage1} alt="Portfolio-1" />
                <img src={portfolioImage2} alt="Portfolio-2" />
                <img src={portfolioImage3} alt="Portfolio-3" />
                <img src={portfolioImage4} alt="Portfolio-4" />
                <img src={portfolioImage5} alt="Portfolio-5" />
                <img src={portfolioImage6} alt="Portfolio-6" />
            </div>
            <div className="options">
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
        </div>
    );
};

export default MainPage;