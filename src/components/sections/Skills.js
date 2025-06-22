import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #050816;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const Title = styled.h2`
  font-size: clamp(36px, 6vw, 48px);
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    font-size: clamp(28px, 5vw, 36px);
  }

  @media (max-width: 480px) {
    margin-bottom: 25px;
    font-size: clamp(24px, 4vw, 28px);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    margin-bottom: 25px;
  }
`;

const SkillCategory = styled.div`
  background: rgba(0, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 25px;
    border-radius: 15px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 12px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(20px, 4vw, 24px);
  font-weight: 600;
  margin-bottom: 20px;
  color: #00ffff;

  @media (max-width: 768px) {
    font-size: clamp(18px, 3vw, 20px);
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 15px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #fff;
  font-size: clamp(14px, 3vw, 16px);

  span:last-child {
    color: #00ffff;
  }

  @media (max-width: 768px) {
    margin-bottom: 6px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    margin-bottom: 5px;
    font-size: 13px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 6px;
  }

  @media (max-width: 480px) {
    height: 5px;
  }
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 255, 255, 0.5), #00ffff);
  border-radius: 4px;
  width: ${props => props.$progress}%;
  transition: width 1s ease-out;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
`;

const skills = {
  "Frontend Development": {
    "React.js": 90,
    "Next.js": 85,
    "Flutter": 80,
    "HTML/CSS": 95,
    "JavaScript": 90
  },
  "Backend Development": {
    "Node.js": 85,
    "Express": 80,
    "MongoDB": 85,
    "Firebase": 90,
    "REST APIs": 90
  },
  "Machine Learning": {
    "Python": 90,
    "TensorFlow": 85,
    "Scikit-learn": 85,
    "OpenCV": 80,
    "NLP": 75
  },
  "Tools & Others": {
    "Git": 90,
    "Docker": 75,
    "AWS": 70,
    "CI/CD": 75,
    "Agile": 85
  }
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <Title className="holographic">
          Technical Skills
        </Title>

        <SkillsGrid>
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory key={index}>
              <CategoryTitle>{category}</CategoryTitle>
              {Object.entries(items).map(([skill, proficiency], i) => (
                <SkillItem key={i}>
                  <SkillName>
                    <span>{skill}</span>
                    <span>{proficiency}%</span>
                  </SkillName>
                  <ProgressBar>
                    <Progress $progress={proficiency} />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 