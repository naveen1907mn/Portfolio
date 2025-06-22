import React from 'react';
import styled from 'styled-components';

const AchievementsSection = styled.section`
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
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  color: #fff;
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const AchievementCard = styled.div`
  background: rgba(0, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);

  &:hover {
    transform: translateY(-10px);
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const AchievementIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 15px;
  }
`;

const AchievementTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #00ffff;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const AchievementDescription = styled.p`
  font-size: 16px;
  color: #aaa6c3;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const achievements = [
  {
    title: "2nd Prize - HACXLERATE 2025",
    description: "Won second place in the national-level hackathon for innovative solutions in healthcare technology.",
    icon: "🏆"
  },
  {
    title: "3rd Prize - Hackathon 2.0",
    description: "Secured third position in the college-level hackathon for developing a smart campus solution.",
    icon: "🥉"
  },
  {
    title: "Edustation ML Certification",
    description: "Completed advanced machine learning certification with specialization in healthcare applications.",
    icon: "📜"
  },
  {
    title: "Udemy Web Development",
    description: "Mastered full-stack web development with modern frameworks and best practices.",
    icon: "💻"
  },
  {
    title: "Udemy Flutter Development",
    description: "Completed comprehensive mobile app development course using Flutter framework.",
    icon: "📱"
  },
  {
    title: "Technical Paper Publication",
    description: "Published research paper on ML applications in healthcare at international conference.",
    icon: "📄"
  }
];

const Achievements = () => {
  return (
    <AchievementsSection id="achievements">
      <Container>
        <Title className="holographic">
          Achievements & Certifications
        </Title>

        <AchievementsGrid>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index}>
              <AchievementIcon>{achievement.icon}</AchievementIcon>
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementDescription>
                {achievement.description}
              </AchievementDescription>
            </AchievementCard>
          ))}
        </AchievementsGrid>
      </Container>
    </AchievementsSection>
  );
};

export default Achievements; 