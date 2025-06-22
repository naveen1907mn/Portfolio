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
  background: #050816;
  color: #ffffff;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
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
