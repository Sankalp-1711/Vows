import React, { useState } from 'react';
import { Heart, BriefcaseBusiness, User, Search, Menu, X } from 'lucide-react';
import './Navbar.scss';
import logo from '../../assets/Logo marks/PN Mark-Black.svg';
import navimg from '../../assets/nav.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // <header className="navbar">
    //   <div className="navbar__container">
    //     <div className="navbar__branding">
    //       <img src={navimg} alt="Brand" />
    //     </div>
    <header className="navbar">
    <div className="navbar__container">
      <div className="navbar__branding">
        {/* Use the imported SVG */}
        <img src={logo} alt="Brand Logo" />
      </div>

        {/* Mobile Menu Button */}
        <div className="menu-search">
          <button className="navbar__menu-button" onClick={toggleMobileMenu}>
            <Menu />
          </button>
          {isMobileMenuOpen ? (
            <div className="navbar__search">
              <Search />
              <input type="text" placeholder="SEARCH ...." className="navbar__search-input" />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {/* Close Button */}
        <button className="navbar__close-button" onClick={toggleMobileMenu}>
          <X />
        </button>

        <nav>
          {['NEW IN', 'COLLECTION', 'ACCESSORIES', 'RUNWAY', 'VOWS', 'ABOUT'].map((item, index) => (
            <a key={index} href="/" className="navbar__link" onClick={toggleMobileMenu}>
              {item}
            </a>
          ))}
        </nav>

        <div className="navbar__icons">
          <Heart className="navbar__icon" />
          <BriefcaseBusiness className="navbar__icon" />
          <User className="navbar__icon" />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar__desktop-menu">
        <div className="navbar__search">
          <Search />
          <input type="text" placeholder="SEARCH ...." className="navbar__search-input" />
        </div>

        <nav>
          {['NEW IN', 'COLLECTION', 'ACCESSORIES', 'RUNWAY', 'VOWS', 'ABOUT'].map((item, index) => (
            <a key={index} href="/" className="navbar__link">
              {item}
            </a>
          ))}
        </nav>

        <div className="navbar__icons">
          <Heart className="navbar__icon" />
          <BriefcaseBusiness className="navbar__icon" />
          <User className="navbar__icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
