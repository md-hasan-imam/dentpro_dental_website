import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer">
                <p> <small>All rights reserved by DentPro &copy;{new Date().getFullYear()}</small> </p>
            </div>
        </div>
    );
};

export default Footer;