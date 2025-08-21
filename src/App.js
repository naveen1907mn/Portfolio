import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

// Components
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f4f1eb;
  color: #2d2d2d;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <AppContainer className="texture-overlay">
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </AppContainer>
  );
}

export default App;
