import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #050816;
  padding: 80px 0;
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
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #fff;
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
  }

  @media (max-width: 768px) {
    padding-left: 0;
    
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 40px;
  position: relative;
  padding-left: 20px;

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
  }

  @media (max-width: 768px) {
    padding-left: 0;
    
    &::before {
      left: 50%;
      transform: translateX(-50%);
      top: -20px;
    }
  }
`;

const Institution = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #00ffff;
`;

const Degree = styled.p`
  font-size: 18px;
  color: #aaa6c3;
  margin-bottom: 5px;
`;

const Score = styled.p`
  font-size: 16px;
  color: #00ffff;
`;

const ImageContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    order: 1;
    max-width: 300px;
    margin-bottom: 40px;
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
              <Institution>Kalasalingam University</Institution>
              <Degree>B.Tech Computer Science & Engineering</Degree>
              <Score>CGPA: 8.9 (2022-2026)</Score>
            </TimelineItem>

            <TimelineItem>
              <Institution>NRI Junior College</Institution>
              <Degree>Intermediate Education</Degree>
              <Score>91.1%</Score>
            </TimelineItem>

            <TimelineItem>
              <Institution>Dr. K.K.R. Gowtham School</Institution>
              <Degree>Secondary Education</Degree>
              <Score>100%</Score>
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