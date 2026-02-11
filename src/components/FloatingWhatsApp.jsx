import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/918849609020"
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
};

export default FloatingWhatsApp;
