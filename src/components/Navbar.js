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
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.h1)`
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

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
    left: 0;
    right: 0;
    background: rgba(5, 8, 22, 0.95);
    backdrop-filter: blur(10px);
    padding: 20px;
    gap: 20px;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  padding: 5px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #915eff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 18px;
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
    width: 25px;
    height: 2px;
    background-color: #fff;
    margin: 6px 0;
    transition: all 0.3s ease;

    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }

    &:last-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
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
      className={scrolled ? 'glass' : ''}
    >
      <NavContainer>
        <Logo className="holographic">NM</Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink 
              key={item.to}
              to={item.to} 
              smooth={true} 
              duration={500}
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