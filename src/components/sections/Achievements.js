import React from 'react';
import styled from 'styled-components';
import achievementImage from '../../assets/Acheievement.png';

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

  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    gap: 25px;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.2));
  }

  @media (max-width: 1200px) {
    order: -1;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 25px;
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    margin-bottom: 20px;
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
    padding: 25px;
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 480px) {
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

  @media (max-width: 480px) {
    font-size: 36px;
    margin-bottom: 12px;
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

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const AchievementDescription = styled.p`
  font-size: 16px;
  color: #aaa6c3;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.5;
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
        <Content>
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
        </Content>
        <ImageContainer>
          <img src={achievementImage} alt="Achievements Illustration" />
        </ImageContainer>
      </Container>
    </AchievementsSection>
  );
};

export default Achievements; 