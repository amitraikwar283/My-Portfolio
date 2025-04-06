import React from 'react';
import contactImage from '../assets/contact.png';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <img src={contactImage} alt="Contact" className="contact" />
            <p>Email: amitraikwar283@gmail.com</p>
            </section>
    );
};

export default Contact;