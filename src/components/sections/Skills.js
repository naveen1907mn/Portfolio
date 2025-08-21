import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, 
  FaMobile, 
  FaGlobe, 
  FaServer, 
  FaSyncAlt, 
  FaDatabase, 
  FaCloud, 
  FaTools, 
  FaSearch,
  FaUsers,
  FaTasks,
  FaPuzzlePiece,
  FaComments,
  FaLanguage
} from 'react-icons/fa';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;

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

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? '#e25c45' : '#1a1a1a'};
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #e25c45;
    transform: scaleX(${props => props.active ? 1 : 0});
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.active ? '#e25c45' : '#4b4b4b'};
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SkillCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9e3d9;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-color: #d3c9b6;
  }
`;

const SkillIcon = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  color: #e25c45;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(226, 92, 69, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  ${SkillCard}:hover & {
    transform: scale(1.1);
    background: rgba(226, 92, 69, 0.15);
  }
`;

const SkillTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  color: #4b4b4b;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '•';
    color: #e25c45;
    font-weight: bold;
    margin-right: 10px;
  }
  
  &:last-child {
    margin-bottom: 0;
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

const skillsData = {
  technical: [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["Dart", "JavaScript", "Python", "Java", "C++", "PHP", "SQL", "TypeScript"]
    },
    {
      title: "Mobile Development",
      icon: <FaMobile />,
      skills: ["Flutter", "Kotlin", "Android Studio", "iOS Development", "Cross-platform Apps"]
    },
    {
      title: "Web Frontend",
      icon: <FaGlobe />,
      skills: ["HTML5", "CSS3", "React", "Bootstrap", "jQuery", "Material Design", "Responsive Design"]
    },
    {
      title: "Web Backend",
      icon: <FaServer />,
      skills: ["Laravel", "Node.js", "Express.js", "RESTful APIs", "JSON", "AJAX", "MVC Architecture"]
    },
    {
      title: "State Management",
      icon: <FaSyncAlt />,
      skills: ["Provider", "BLoC", "Riverpod", "Redux", "GetX", "setState"]
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MySQL", "PostgreSQL", "Firebase Firestore", "MongoDB", "SQLite", "Hive"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: ["Firebase", "Google Cloud", "AWS basics", "Git", "GitHub", "CI/CD"]
    },
    {
      title: "Development Tools",
      icon: <FaTools />,
      skills: ["VS Code", "Android Studio", "Postman", "PHPMyAdmin", "XAMPP", "Docker basics"]
    },
    {
      title: "Specialized",
      icon: <FaSearch />,
      skills: ["Google Maps API", "TensorFlow Lite", "OCR", "Camera Integration", "Payment Gateways"]
    }
  ],
  soft: [
    {
      title: "Team Leadership",
      icon: <FaUsers />,
      skills: ["Technical Team Management", "Mentoring", "Delegation", "Team Building", "Conflict Resolution"]
    },
    {
      title: "Project Management",
      icon: <FaTasks />,
      skills: ["Agile/Scrum Methodology", "Requirements Gathering", "Timeline Planning", "Resource Allocation", "Risk Management"]
    },
    {
      title: "Problem Solving",
      icon: <FaPuzzlePiece />,
      skills: ["Algorithm Design", "Performance Optimization", "Debugging", "System Integration", "Creative Solutions"]
    },
    {
      title: "Communication",
      icon: <FaComments />,
      skills: ["Technical Documentation", "Client Presentations", "Workshop Facilitation", "Cross-functional Collaboration", "Knowledge Transfer"]
    },
    {
      title: "Languages",
      icon: <FaLanguage />,
      skills: ["Tamil (Native)", "English (Fluent)", "Telugu (Fluent)", "Hindi (Proficient)"]
    }
  ],
  development: [
    {
      title: "Development Practices",
      icon: <FaCode />,
      skills: ["Agile/Scrum Methodology", "Test-Driven Development", "Code Reviews", "Documentation"]
    },
    {
      title: "Architecture & Design",
      icon: <FaServer />,
      skills: ["MVC Pattern", "RESTful Design", "Microservices Basics", "Database Design", "UI/UX Principles"]
    },
    {
      title: "Project Management",
      icon: <FaTasks />,
      skills: ["Team Leadership", "Cross-functional Collaboration", "Technical Mentoring", "Workshop Facilitation"]
    },
    {
      title: "Problem Solving",
      icon: <FaPuzzlePiece />,
      skills: ["Algorithm Design", "Performance Optimization", "Debugging", "System Integration"]
    }
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionHeader>
          <SubHeading>My Toolkit</SubHeading>
          <Title>Skills & Expertise</Title>
          <Description>
            A comprehensive collection of technical skills, tools, and methodologies I've mastered
            throughout my journey as a software developer.
          </Description>
        </SectionHeader>
        
        <TabsContainer>
          <Tab 
            active={activeTab === "technical"}
            onClick={() => setActiveTab("technical")}
          >
            Technical Skills
          </Tab>
          <Tab 
            active={activeTab === "soft"}
            onClick={() => setActiveTab("soft")}
          >
            Soft Skills
          </Tab>
          <Tab 
            active={activeTab === "development"}
            onClick={() => setActiveTab("development")}
          >
            Development Practices
          </Tab>
        </TabsContainer>
        
        <SkillsGrid
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillsData[activeTab].map((category, index) => (
            <SkillCard key={index} variants={cardVariants}>
              <SkillIcon>{category.icon}</SkillIcon>
              <SkillTitle>{category.title}</SkillTitle>
              <SkillsList>
                {category.skills.map((skill, i) => (
                  <SkillItem key={i}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 