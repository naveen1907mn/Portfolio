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

  @media (max-width: 480px) {
    min-height: 100vh;
    height: auto;
    padding: 80px 0;
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
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    gap: 25px;
  }
`;

const TextContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: clamp(40px, 8vw, 64px);
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.1;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    font-size: clamp(32px, 6vw, 48px);
  }

  @media (max-width: 480px) {
    margin-bottom: 14px;
    font-size: clamp(28px, 5vw, 36px);
    line-height: 1.2;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(18px, 4vw, 24px);
  color: #aaa6c3;
  margin-bottom: 30px;
  line-height: 1.4;

  @media (max-width: 768px) {
    margin-bottom: 24px;
    font-size: clamp(16px, 3vw, 20px);
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    font-size: clamp(14px, 2.5vw, 18px);
    line-height: 1.5;
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

  @media (max-width: 480px) {
    max-width: 250px;
    
    img {
      border-radius: 8px;
    }
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