import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 16px;
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: clamp(36px, 6vw, 48px);
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  font-size: clamp(16px, 3vw, 18px);
  color: #aaa6c3;
  line-height: 1.6;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 24px;
  }
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ffff;
  font-size: 24px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);

  &:hover {
    background: rgba(0, 255, 255, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
`;

const FormContainer = styled.div`
  background: rgba(0, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const Form = styled.form`
  position: relative;
  z-index: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #00ffff;
  font-size: clamp(14px, 3vw, 16px);

  @media (max-width: 768px) {
    margin-bottom: 6px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: clamp(14px, 3vw, 16px);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px;
  }

  &:focus {
    outline: none;
    border-color: #00ffff;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: clamp(14px, 3vw, 16px);
  min-height: 150px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px;
    min-height: 120px;
  }

  &:focus {
    outline: none;
    border-color: #00ffff;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }
`;

const SubmitButton = styled.button`
  background: #00ffff;
  color: #050816;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: clamp(14px, 3vw, 16px);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 12px 24px;
    width: 100%;
  }

  &:hover {
    background: rgba(0, 255, 255, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Content>
          <Title className="holographic">Get in Touch</Title>
          <Description>
            Feel free to reach out for collaborations or just a friendly hello! I'll try my best to get back to you as soon as possible.
          </Description>
          <SocialLinks>
            <SocialLink href="https://github.com/Naveen1907-swing" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/naveen-mayandi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="mailto:mayandinaveenkare1907@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />  
            </SocialLink>
          </SocialLinks>
        </Content>

        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Your Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Your Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Your Message</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </Form>
        </FormContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact; 