import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #050816;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoadingText = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
`;

const LoadingBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background: rgba(145, 94, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 20px;
`;

const LoadingProgress = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: #915eff;
  transform-origin: left;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <div style={{ textAlign: 'center' }}>
        <LoadingText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="holographic"
        >
          Loading Experience
        </LoadingText>
        <LoadingBar>
          <LoadingProgress
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </LoadingBar>
      </div>
    </LoadingContainer>
  );
};

export default LoadingScreen; 