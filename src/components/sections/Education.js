import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #050816;
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    gap: 25px;
    padding: 0 12px;
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: #00ffff;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 30px;
    margin: 0 auto;
    max-width: 600px;
    
    &::before {
      left: 50%;
      width: 2px;
      transform: translateX(-50%);
      height: 100%;
      top: 0;
    }
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 40px;
  position: relative;
  padding-left: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  &::before {
    content: '';
    position: absolute;
    left: -34px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00ffff;
    border: 2px solid #050816;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    background: #fff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 50%;
    padding: 0 30px;
    margin-bottom: 30px;
    text-align: right;
    
    &:hover {
      transform: translateX(-5px);
    }

    &::before {
      left: auto;
      right: -6px;
      top: 5px;
    }

    &:nth-child(even) {
      align-self: flex-end;
      text-align: left;
      margin-left: 50%;
      
      &:hover {
        transform: translateX(5px);
      }

      &::before {
        right: auto;
        left: -6px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0 20px;
    
    &::before {
      width: 8px;
      height: 8px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineContent = styled.div`
  background: rgba(0, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Institution = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #00ffff;
  transition: all 0.3s ease;

  ${TimelineItem}:hover & {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const Degree = styled.p`
  font-size: 18px;
  color: #aaa6c3;
  margin-bottom: 5px;
  transition: all 0.3s ease;

  ${TimelineItem}:hover & {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

const Score = styled.p`
  font-size: 16px;
  color: #00ffff;
  transition: all 0.3s ease;

  ${TimelineItem}:hover & {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ImageContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0, 255, 255, 0.1), transparent);
    border-radius: 10px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    order: 1;
    max-width: 300px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    margin-bottom: 30px;
    
    img {
      border-radius: 8px;
    }
  }
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <Container>
        <Content>
          <Title className="holographic">
            Education Journey
          </Title>
          
          <Timeline>
            <TimelineItem>
              <TimelineContent>
                <Institution>Kalasalingam University</Institution>
                <Degree>B.Tech Computer Science & Engineering</Degree>
                <Score>CGPA: 8.9 (2022-2026)</Score>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <Institution>NRI Junior College</Institution>
                <Degree>Intermediate Education</Degree>
                <Score>91.1%</Score>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <Institution>Dr. K.K.R. Gowtham School</Institution>
                <Degree>Secondary Education</Degree>
                <Score>100%</Score>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Content>

        <ImageContainer>
          <img 
            src="/education.png" 
            alt="Education Journey Visualization" 
          />
        </ImageContainer>
      </Container>
    </EducationSection>
  );
};

export default Education; 