import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImage from '../../assets/bg.png';

const EducationSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-color: #050816;
  color: #ffffff;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(5, 8, 22, 0.8);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;

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
  color: #ffffff;
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
  color: #e0e0e0;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Timeline = styled(motion.div)`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin-bottom: 60px;
  width: 50%;
  
  &:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 30px;
    left: 50%;
    
    .timeline-content {
      &::before {
        left: -15px;
        border-width: 8px 16px 8px 0;
        border-color: transparent rgba(255, 255, 255, 0.05) transparent transparent;
      }
    }
    
    .timeline-dot {
      left: -9px;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    padding-left: 60px;
    left: 0;
    
    &:nth-child(even) {
      left: 0;
      padding-left: 60px;
      
      .timeline-content {
        &::before {
          left: -15px;
          border-width: 8px 16px 8px 0;
          border-color: transparent rgba(255, 255, 255, 0.05) transparent transparent;
        }
      }
      
      .timeline-dot {
        left: 11px;
      }
    }
    
    .timeline-dot {
      left: 11px;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  right: -9px;
  top: 20px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #e25c45;
  border: 3px solid rgba(5, 8, 22, 0.8);
  box-shadow: 0 0 0 3px rgba(226, 92, 69, 0.2);
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    right: -15px;
    top: 20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.05);
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }
  
  @media (max-width: 768px) {
    padding: 25px;
    
    &::before {
      left: -15px;
      border-width: 8px 16px 8px 0;
      border-color: transparent rgba(255, 255, 255, 0.05) transparent transparent;
    }
  }
`;

const TimelineDate = styled.div`
  display: inline-block;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #e25c45;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(226, 92, 69, 0.3);
`;

const TimelineTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
`;

const TimelineSubtitle = styled.h4`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  font-weight: 600;
  color: #e0e0e0;
  margin-bottom: 15px;
`;

const TimelineText = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 15px;
  line-height: 1.6;
  color: #e0e0e0;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
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

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <EducationSection id="education">
      <Container>
        <SectionHeader>
          <SubHeading>Academic Journey</SubHeading>
          <Title>Education</Title>
          <Description>
            My educational background has provided me with a strong foundation in computer science,
            problem-solving skills, and the technical knowledge needed to excel in software development.
          </Description>
        </SectionHeader>
        
        <Timeline
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <TimelineItem variants={itemVariants}>
            <TimelineDot className="timeline-dot" />
            <TimelineContent className="timeline-content">
              <TimelineDate>2022 - 2026</TimelineDate>
              <TimelineTitle>Kalasalingam University</TimelineTitle>
              <TimelineSubtitle>B.Tech Computer Science Engineering</TimelineSubtitle>
              <TimelineText>
                CGPA: 8.9<br />
                Focusing on software development, machine learning, and full-stack technologies.
                Active in technical clubs and hackathons.
              </TimelineText>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem variants={itemVariants}>
            <TimelineDot className="timeline-dot" />
            <TimelineContent className="timeline-content">
              <TimelineDate>2020 - 2022</TimelineDate>
              <TimelineTitle>NRI Junior College, Tenali</TimelineTitle>
              <TimelineSubtitle>Higher Secondary Education (Science)</TimelineSubtitle>
              <TimelineText>
                Percentage: 91.1%<br />
                Focused on Mathematics, Physics, and Computer Science.
                Developed strong analytical and problem-solving skills.
              </TimelineText>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem variants={itemVariants}>
            <TimelineDot className="timeline-dot" />
            <TimelineContent className="timeline-content">
              <TimelineDate>2019 - 2020</TimelineDate>
              <TimelineTitle>Dr.K.K.R Gowtham School, Tenali</TimelineTitle>
              <TimelineSubtitle>Secondary Education</TimelineSubtitle>
              <TimelineText>
                Percentage: 100%<br />
                Excelled in academics with perfect score.
                Participated in various science and mathematics competitions.
              </TimelineText>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </EducationSection>
  );
};

export default Education; 