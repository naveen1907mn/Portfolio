import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #050816;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
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
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: rgba(0, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);

  &:hover {
    transform: translateY(-10px);
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 20px;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(20px, 4vw, 24px);
  font-weight: 600;
  margin-bottom: 15px;
  color: #00ffff;
`;

const ProjectDescription = styled.p`
  font-size: clamp(14px, 3vw, 16px);
  color: #aaa6c3;
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 80px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const TechTag = styled.span`
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  border: 1px solid rgba(0, 255, 255, 0.2);
`;

const projects = [
  {
    title: "Jai Shree Crackers",
    description: "An e-commerce platform for crackers with secure payment integration and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "SWING",
    description: "A social networking platform for college students to connect, share resources, and collaborate on projects.",
    tech: ["Flutter", "Firebase", "Cloud Functions"]
  },
  {
    title: "UNI MAPS",
    description: "Interactive campus navigation system with real-time location tracking and event notifications.",
    tech: ["React Native", "Google Maps API", "Node.js"]
  },
  {
    title: "Heart Disease Prediction",
    description: "ML-powered system for predicting heart disease risks using patient health data.",
    tech: ["Python", "TensorFlow", "Scikit-learn"]
  },
  {
    title: "Plant Disease Detection",
    description: "Computer vision application to identify plant diseases from leaf images using deep learning.",
    tech: ["Python", "OpenCV", "TensorFlow"]
  },
  {
    title: "Feedback System",
    description: "Automated feedback collection and analysis system for educational institutions.",
    tech: ["React", "Express", "MongoDB", "NLP"]
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Title className="holographic">
          Featured Projects
        </Title>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 