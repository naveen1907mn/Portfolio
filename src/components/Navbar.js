import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
  transition: all 0.4s ease;

  &.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: #1a1a1a;
  cursor: pointer;
  position: relative;
  letter-spacing: -0.02em;
  
  span {
    color: #e25c45;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 20px;
    right: 20px;
    background: #ffffff;
    padding: 30px;
    gap: 25px;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #e9e3d9;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  padding: 5px 0;
  color: #2d2d2d;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #e25c45;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #e25c45;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 0;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 24px;
    height: 2px;
    background-color: #1a1a1a;
    margin: 5px 0;
    transition: all 0.3s ease;

    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }

    &:last-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
    }
  }
`;

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'education', 'experience', 'projects', 'skills', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 200) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: "home", text: "Home" },
    { to: "education", text: "Education" },
    { to: "experience", text: "Experience" },
    { to: "projects", text: "Projects" },
    { to: "skills", text: "Skills" },
    { to: "contact", text: "Contact" }
  ];

  return (
    <Nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={scrolled ? 'scrolled' : ''}
    >
      <NavContainer>
        <Logo>
          N<span>M</span>
        </Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink 
              key={item.to}
              to={item.to} 
              smooth={true} 
              duration={500}
              spy={true}
              className={activeLink === item.to ? 'active' : ''}
            >
              {item.text}
            </NavLink>
          ))}
        </NavLinks>
        <HamburgerButton onClick={toggleMenu} isOpen={isOpen}>
          <div />
          <div />
          <div />
        </HamburgerButton>
      </NavContainer>

      <AnimatePresence>
        {isOpen && (
          <MobileNavLinks
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navItems.map((item) => (
              <NavLink 
                key={item.to}
                to={item.to} 
                smooth={true} 
                duration={500}
                onClick={closeMenu}
                className={activeLink === item.to ? 'active' : ''}
              >
                {item.text}
              </NavLink>
            ))}
          </MobileNavLinks>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar; 