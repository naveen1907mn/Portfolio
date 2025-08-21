import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 100px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 50%;
    background: #faf6f0;
    z-index: -1;
    border-bottom-left-radius: 100px;
  }

  @media (max-width: 768px) {
    padding: 80px 0 70px;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 60px;
  max-width: 800px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const SubHeading = styled.span`
  display: inline-block;
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  color: #e25c45;
  margin-bottom: 16px;
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
  }
`;

const Title = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: clamp(36px, 6vw, 48px);
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a1a1a;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 18px;
  line-height: 1.6;
  color: #4b4b4b;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ExperienceList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ExperienceCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 8px;
  padding: 30px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid #e9e3d9;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-color: #d3c9b6;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const Company = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #1a1a1a;
`;

const Position = styled.h4`
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  color: #e25c45;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Duration = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  color: #4b4b4b;
  margin-bottom: 15px;
  font-style: italic;
`;

const ExperienceDescription = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  color: #4b4b4b;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  font-family: 'Outfit', sans-serif;
  background: #faf6f0;
  color: #1a1a1a;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e9e3d9;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e9e3d9;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionHeader>
          <SubHeading>My Journey</SubHeading>
          <Title>Work Experience</Title>
          <Description>
            Professional experiences that have shaped my skills and contributed to my growth as a developer.
          </Description>
        </SectionHeader>
        
        <ExperienceList
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ExperienceCard variants={cardVariants}>
            <Company>Placement and Career Tutelage, Kalasalingam University</Company>
            <Position>Technical Lead - PACT</Position>
            <Duration>Present - Campus</Duration>
            <ExperienceDescription>
              Leading technical initiatives and mentoring 50+ students in mobile and web development.
              Organizing Flutter, PHP, and React workshops with 90% completion rate.
              Developing placement preparation materials and conducting mock technical interviews.
            </ExperienceDescription>
            <TechStack>
              <TechTag>Flutter</TechTag>
              <TechTag>PHP</TechTag>
              <TechTag>React</TechTag>
              <TechTag>Technical Mentoring</TechTag>
              <TechTag>Workshop Facilitation</TechTag>
            </TechStack>
          </ExperienceCard>
          
          <ExperienceCard variants={cardVariants}>
            <Company>Edu-Station</Company>
            <Position>Machine Learning Intern</Position>
            <Duration>February 2023 - April 2023</Duration>
            <ExperienceDescription>
              Developed Heart Disease Prediction system using Python and ML algorithms achieving 85% accuracy.
              Implemented data preprocessing, feature engineering, and model optimization techniques.
              Created visualization dashboard for medical data analysis and prediction results.
            </ExperienceDescription>
            <TechStack>
              <TechTag>Python</TechTag>
              <TechTag>Machine Learning</TechTag>
              <TechTag>Data Visualization</TechTag>
              <TechTag>Feature Engineering</TechTag>
              <TechTag>Data Preprocessing</TechTag>
            </TechStack>
          </ExperienceCard>
        </ExperienceList>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;