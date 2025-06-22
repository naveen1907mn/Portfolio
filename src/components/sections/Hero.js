import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #050816;

  @media (max-width: 768px) {
    height: calc(100vh - 60px);
    padding-top: 60px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 0 16px;
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: clamp(40px, 8vw, 64px);
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.1;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(18px, 4vw, 24px);
  color: #aaa6c3;
  margin-bottom: 30px;
  line-height: 1.4;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <TextContent>
          <Title className="holographic">
            NAVEEN MAYANDI
          </Title>
          <Subtitle>
            Software Developer | ML Enthusiast | Full-Stack Engineer
          </Subtitle>
        </TextContent>
        <ImageContainer>
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