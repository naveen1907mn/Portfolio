import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImage from '../../assets/bg.png';
import { 
  FaTrophy, 
  FaMedal, 
  FaLaptopCode, 
  FaMobile, 
  FaGlobe, 
  FaRobot, 
  FaChartBar 
} from 'react-icons/fa';

const AchievementsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0;
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
    padding: 80px 0;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
  max-width: 800px;
  margin: 0 auto 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
    text-align: center;
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
    height: 2px;
    background: #e25c45;
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Title = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: clamp(36px, 6vw, 48px);
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
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
    margin: 0 auto;
  }
`;

// Tabs for categories
const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow-x: auto;
  scrollbar-width: none;
  position: relative;
  max-width: 800px;
  margin: 0 auto 30px;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    padding-bottom: 5px;
  }
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? '#e25c45' : 'rgba(255, 255, 255, 0.6)'};
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
    color: ${props => props.active ? '#e25c45' : 'rgba(255, 255, 255, 0.8)'};
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const AchievementsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const AchievementCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.color || '#e25c45'};
  }

  @media (max-width: 768px) {
    padding: 25px;
    text-align: center;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const AchievementIcon = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffffff;
  display: inline-block;
  background: rgba(226, 92, 69, 0.1);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(226, 92, 69, 0.2);
  transition: all 0.3s ease;
  
  ${AchievementCard}:hover & {
    transform: scale(1.1);
    background: rgba(226, 92, 69, 0.2);
    color: #e25c45;
  }

  @media (max-width: 768px) {
    margin: 0 auto 15px;
    width: 60px;
    height: 60px;
  }
`;

const AchievementTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #ffffff;
  transition: all 0.3s ease;
  
  ${AchievementCard}:hover & {
    color: #e25c45;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const AchievementDescription = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AchievementDate = styled.div`
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: auto;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255,255,255,0.6)' viewBox='0 0 448 512'%3E%3Cpath d='M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// Data for achievements and certifications
const achievementsData = [
  {
    title: "2nd Prize - HACXLERATE 2025",
    description: "Developed a route optimization system that saved delivery drivers 30% in fuel costs. Recognized for innovative approach to logistics challenges.",
    icon: <FaTrophy />,
    date: "2025",
    color: "#FFD700",
    issuer: "KARE-MLSC"
  },
  {
    title: "3rd Prize - HACKATHON 2.0 2024",
    description: "Created a smart waste management system that could detect when bins needed emptying. Judges appreciated the practical application and environmental impact.",
    icon: <FaMedal />,
    date: "2024",
    color: "#CD7F32",
    issuer: "KARE-ACM"
  },
  {
    title: "Technical Lead at PACT",
    description: "Leading technical initiatives and mentoring 50+ students in mobile and web development. Organizing workshops and technical training sessions.",
    icon: <FaLaptopCode />,
    date: "Present",
    color: "#4299e1",
    issuer: "Kalasalingam University"
  }
];

const certificationsData = [
  {
    title: "Flutter Development",
    description: "Comprehensive mobile app development course covering Flutter framework, Dart programming, state management, and app deployment.",
    icon: <FaMobile />,
    date: "2025",
    issuer: "Udemy",
    color: "#38b2ac"
  },
  {
    title: "Complete Web Development",
    description: "Full-stack web development certification covering frontend and backend technologies, responsive design, and modern frameworks.",
    icon: <FaGlobe />,
    date: "2024",
    issuer: "Udemy",
    color: "#4299e1"
  },
  {
    title: "Machine Learning",
    description: "Certification in machine learning fundamentals, algorithms, data preprocessing, and model development for real-world applications.",
    icon: <FaRobot />,
    date: "2023",
    issuer: "Edustation",
    color: "#9f7aea"
  },
  {
    title: "Data Structures & Algorithms",
    description: "In-depth study of efficient data structures and algorithms, problem-solving techniques, and optimization strategies.",
    icon: <FaChartBar />,
    date: "2024",
    issuer: "Udemy",
    color: "#48bb78"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("achievements");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <AchievementsSection id="achievements">
      <Container>
        <Content>
          <SectionHeader>
            <SubHeading>Recognition & Growth</SubHeading>
            <Title>Achievements & Certifications</Title>
            <Description>
              Awards, recognitions, and professional certifications that demonstrate my commitment
              to continuous learning and excellence in software development.
            </Description>
          </SectionHeader>

          <TabsContainer>
            <Tab 
              active={activeTab === "achievements"}
              onClick={() => setActiveTab("achievements")}
            >
              Achievements
            </Tab>
            <Tab 
              active={activeTab === "certifications"}
              onClick={() => setActiveTab("certifications")}
            >
              Certifications
            </Tab>
          </TabsContainer>

          <AchievementsGrid
            as={motion.div}
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {(activeTab === "achievements" ? achievementsData : certificationsData).map((item, index) => (
              <AchievementCard 
                key={index} 
                variants={itemVariants}
                color={item.color}
              >
                <AchievementIcon>{item.icon}</AchievementIcon>
                <AchievementTitle>{item.title}</AchievementTitle>
                <AchievementDescription>
                  {item.description}
                </AchievementDescription>
                <AchievementDate>
                  {activeTab === "certifications" ? `${item.issuer} (${item.date})` : item.date}
                </AchievementDate>
              </AchievementCard>
            ))}
          </AchievementsGrid>
        </Content>
      </Container>
    </AchievementsSection>
  );
};

export default Achievements; 