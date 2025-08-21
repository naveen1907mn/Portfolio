import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    right: -5%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: #faf6f0;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding-top: 100px;
    height: auto;
    padding-bottom: 60px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 50px;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SubHeading = styled.span`
  display: inline-block;
  font-family: 'Source Serif Pro', serif;
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  color: #e25c45;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #e25c45;
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(42px, 7vw, 64px);
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.1;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  
  .accent {
    color: #e25c45;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Description = styled(motion.p)`
  font-size: 19px;
  color: #4b4b4b;
  margin-bottom: 40px;
  line-height: 1.6;
  font-weight: 400;
  max-width: 90%;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    max-width: 100%;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-block;
  padding: 14px 32px;
  background: #e25c45;
  color: #ffffff;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c94b35;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(226, 92, 69, 0.2);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-block;
  padding: 14px 32px;
  background: transparent;
  color: #1a1a1a;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  text-decoration: none;
  border: 2px solid #1a1a1a;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(-3px);
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 0.8;
  max-width: 450px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    right: -20px;
    width: 100%;
    height: 100%;
    background: #e9e3d9;
    border-radius: 4px;
    z-index: -1;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    display: block;
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2
    }
  }
};

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <TextContent
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <SubHeading>Hello, I'm</SubHeading>
          <Title>
            Naveen <span className="accent">Mayandi</span>
          </Title>
          <Description>
            Full-Stack Software Developer with 2+ years of experience in mobile and web development. 
            Skilled in Flutter, Laravel, React, and modern development practices. Seeking to contribute 
            to innovative projects in a dynamic technology environment.
          </Description>
          <ButtonGroup>
            <PrimaryButton 
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </PrimaryButton>
            <SecondaryButton 
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </SecondaryButton>
          </ButtonGroup>
        </TextContent>
        <ImageContainer
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img 
            src="/hero-image.png" 
            alt="Naveen Mayandi - Developer Portrait" 
          />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 