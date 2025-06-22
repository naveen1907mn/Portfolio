import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
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

const ExperienceCard = styled.div`
  background: rgba(0, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
`;

const Company = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #00ffff;
`;

const Position = styled.h4`
  font-size: 20px;
  color: #00ffff;
  margin-bottom: 10px;
`;

const Duration = styled.p`
  font-size: 16px;
  color: #aaa6c3;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #aaa6c3;
  line-height: 1.6;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TechTag = styled.span`
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  border: 1px solid rgba(0, 255, 255, 0.2);
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

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Container>
        <Content>
          <Title className="holographic">
            Work Experience
          </Title>

          <ExperienceCard>
            <Company>EduStation</Company>
            <Position>Machine Learning Intern</Position>
            <Duration>June 2023 - August 2023</Duration>
            <Description>
              Developed and implemented a Heart Disease Prediction system using machine learning algorithms.
              Achieved high accuracy in predicting potential heart disease risks based on patient data.
              Collaborated with a team of healthcare professionals to validate and improve the model.
            </Description>
            <TechStack>
              <TechTag>Python</TechTag>
              <TechTag>Scikit-learn</TechTag>
              <TechTag>TensorFlow</TechTag>
              <TechTag>Pandas</TechTag>
              <TechTag>NumPy</TechTag>
            </TechStack>
          </ExperienceCard>
        </Content>

        <ImageContainer>
          <img 
            src="/experience.png" 
            alt="Experience Visualization" 
          />
        </ImageContainer>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 