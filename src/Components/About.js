import React from 'react';
import myImage from '../assets/image.jpg';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <img src={myImage} alt="Myself" className="about-image" />
            <p>My name is Aradhya Nagaich, and I am currently in Class 1.
                I completed my schooling at Mount Carmel School, where I enjoy learning and exploring new things.
                I have a younger brother named Aryan Nagaich, who is in U.K.G. 
                We both share a great bond, and I love spending time with him.
                I look forward to achieving many more milestones in my academic journey!</p>
        </section>
    );
};

export default About;