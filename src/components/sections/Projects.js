import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImage from '../../assets/bg.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 100px;
  position: relative;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-color: #050816;
  color: #ffffff;

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
    padding: 80px 0 70px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: ${props => props.featured ? '35px 30px' : '30px'};
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  grid-column: ${props => props.featured ? 'span 6' : 'span 4'};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 1024px) {
    grid-column: ${props => props.featured ? 'span 6' : 'span 6'};
  }
  
  @media (max-width: 768px) {
    grid-column: span 12;
    padding: ${props => props.featured ? '30px 25px' : '25px'};
  }
`;

const ProjectTag = styled.span`
  display: inline-block;
  font-family: 'Source Serif Pro', serif;
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
  color: #e25c45;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

const ProjectTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: ${props => props.featured ? '24px' : '20px'};
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
  line-height: 1.3;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: ${props => props.featured ? '22px' : '18px'};
    margin-bottom: 14px;
  }
`;

const ProjectDescription = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: ${props => props.featured ? '16px' : '15px'};
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  font-family: 'Outfit', sans-serif;
  background: rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(226, 92, 69, 0.1);
  color: #e25c45;
  text-decoration: none;
  border-radius: 6px;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgba(226, 92, 69, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: #e25c45;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(226, 92, 69, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`;

const projects = [
  {
    tag: "E-commerce",
    title: "JAI SHREE CRACKERS",
    description: "Developed complete e-commerce solution with secure payment integration and inventory management. Built responsive frontend with Bootstrap and implemented shopping cart with session management. Created admin panel with dashboard analytics, order tracking, and customer management.",
    tech: [ "React", "PHP", "MySQL", "JavaScript", "Bootstrap", "Session Management"],
    featured: true,
    link: "https://jaishreecrackers.com",
    linkType: "live"
  },
  {
    tag: "College Service",
    title: "SWING Platform",
    description: "Developed Laravel-based photocopying service platform with user authentication and order management. Implemented real-time order tracking, payment integration, and automated email notifications. Built REST API for mobile app integration and admin dashboard for service management.",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    link: "https://doswing.host20.uk",
    featured: true,
    linkType: "live"
  },
  {
    tag: "Finance",
    title: "Expense Tracker with Analytics",
    description: "Built comprehensive Flutter app with local storage, state management, and FL Chart analytics. Implemented CRUD operations, expense categorization, date filtering, and theme support. Added data export functionality and spending insights with visual charts.",
    tech: ["Flutter", "Dart", "Hive", "Provider", "FL Chart"],
    link: "https://github.com/Naveenm1907/expense-tracker",
    linkType: "github"
  },
  {
    tag: "Navigation",
    title: "UNI MAPS Route Optimization",
    description: "Created Flutter app with Google Maps SDK integration and GPS-based route optimization. Implemented real-time location tracking, custom markers, and turn-by-turn navigation. Added delivery status management and route history with performance analytics.",
    tech: ["Flutter", "Google Maps API", "GPS", "Route Optimization"],
    link: "https://github.com/Naveenm1907/uni-maps",
    linkType: "github"
  },
  {
    tag: "Agriculture AI",
    title: "3D Plant Disease Detection",
    description: "Built Flutter app with TensorFlow Lite integration for real-time crop disease detection. Implemented camera integration, image preprocessing, and ML model inference with 90% accuracy. Created disease database with treatment recommendations and farmer consultation features.",
    tech: ["Flutter", "TensorFlow Lite", "Python", "Camera Integration"],
    link: "https://github.com/Naveenm1907/plant-disease-detection",
    linkType: "github"
  }
];

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

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const getLinkIcon = (linkType) => {
    return linkType === 'github' ? <FaGithub /> : <FaExternalLinkAlt />;
  };
  
  const getLinkText = (linkType) => {
    return linkType === 'github' ? 'View Project' : 'View Project';
  };
  
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <SubHeading>My Work</SubHeading>
          <Title>Featured Projects</Title>
          <Description>
            A collection of projects that showcase my skills and passion for creating innovative solutions to real-world problems.
          </Description>
        </SectionHeader>

        <ProjectsGrid
          as={motion.div}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              variants={cardVariants}
              featured={project.featured}
            >
              <ProjectTag>{project.tag}</ProjectTag>
              <ProjectTitle featured={project.featured}>
                {project.title}
              </ProjectTitle>
              <ProjectDescription featured={project.featured}>
                {project.description}
              </ProjectDescription>
              <TechStack>
                {project.tech.map((tech, i) => (
                  <TechTag key={i}>
                    {tech}
                  </TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {getLinkIcon(project.linkType)}
                  {getLinkText(project.linkType)}
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 