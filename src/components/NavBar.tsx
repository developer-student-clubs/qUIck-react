import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    // You can define additional props here for customization
}

const Navbar: React.FC<NavbarProps> = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const handleNavLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>
                    <Link to="/home" onClick={() => handleNavLinkClick('Home')}>
                        Home
                    </Link>
                </li>
                <li className={`nav-item ${activeLink === 'About' ? 'active' : ''}`}>
                    <Link to="/about" onClick={() => handleNavLinkClick('About')}>
                        About Us
                    </Link>
                </li>
                <li className={`nav-item ${activeLink === 'Services' ? 'active' : ''}`}>
                    <Link to="/services" onClick={() => handleNavLinkClick('Services')}>
                        Services
                    </Link>
                </li>
                <li className={`nav-item ${activeLink === 'Contact' ? 'active' : ''}`}>
                    <Link to="/contact" onClick={() => handleNavLinkClick('Contact')}>
                        Contact
                    </Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
