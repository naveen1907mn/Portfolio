import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background: #050816;
    overflow-x: hidden;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #050816;
  }

  ::-webkit-scrollbar-thumb {
    background: #915eff;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7c4dff;
  }

  /* Glassmorphism */
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Holographic Text */
  .holographic {
    background: linear-gradient(
      45deg,
      #ff0066,
      #6e0dd0,
      #00ff99
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  /* Section Padding */
  section {
    padding: 100px 0;
    position: relative;

    @media (max-width: 768px) {
      padding: 60px 0;
    }
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0 16px;
    }
  }

  /* Responsive Typography */
  html {
    font-size: 16px;
    
    @media (max-width: 1024px) {
      font-size: 15px;
    }
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`; 