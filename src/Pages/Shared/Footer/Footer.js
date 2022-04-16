import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className=''>
            <p><small> &copy; RaiyanKabir {year} . All Rights Reserved </small></p>
        </footer>
    );
};

export default Footer;