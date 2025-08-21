import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaGlobe } from 'react-icons/fa';

const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0;
  background-color: #faf6f0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(226, 92, 69, 0.05);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(226, 92, 69, 0.05);
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
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 40px;
  }
`;

const Content = styled.div`
  max-width: 500px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
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
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 25px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 40px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9e3d9;
  color: #e25c45;
  font-size: 18px;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  color: #4b4b4b;
  
  a {
    color: #4b4b4b;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #e25c45;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9e3d9;
  color: #1a1a1a;
  font-size: 18px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e25c45;
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(226, 92, 69, 0.2);
  }
`;

const FormContainer = styled(motion.div)`
  background: #ffffff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9e3d9;

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
`;

const Input = styled.input`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  padding: 12px 15px;
  border: 1px solid #e9e3d9;
  border-radius: 4px;
  background: #faf6f0;
  color: #4b4b4b;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e25c45;
    box-shadow: 0 0 0 3px rgba(226, 92, 69, 0.1);
  }
`;

const TextArea = styled.textarea`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  padding: 12px 15px;
  border: 1px solid #e9e3d9;
  border-radius: 4px;
  background: #faf6f0;
  color: #4b4b4b;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e25c45;
    box-shadow: 0 0 0 3px rgba(226, 92, 69, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: #e25c45;
  color: #ffffff;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    background: #c94b35;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(226, 92, 69, 0.2);
  }
  
  &:focus {
    outline: none;
  }
`;

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <ContactSection id="contact">
      <Container>
        <Content>
          <SectionHeader>
            <SubHeading>Get In Touch</SubHeading>
            <Title>Let's Connect</Title>
            <Description>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </Description>
          </SectionHeader>
          
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <a href="tel:+917671991949">+91 7671991949</a>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <a href="mailto:mayandinaveenkare1907@gmail.com">mayandinaveenkare1907@gmail.com</a>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                Tiruttani, Tamil Nadu, India
              </ContactText>
            </ContactItem>
          </ContactInfo>
          
          <SocialLinks>
            <SocialLink href="https://github.com/Naveenm1907" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/naveen-mayandi" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </SocialLink>
            <SocialLink href="https://portfolio-pi-black-60.vercel.app" target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </SocialLink>
          </SocialLinks>
        </Content>
        
        <FormContainer
          ref={ref}
          variants={formVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FormContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact; 
