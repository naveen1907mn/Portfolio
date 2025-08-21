import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  /* Import fonts */
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');

  body {
    background: #f4f1eb;
    overflow-x: hidden;
    font-family: 'Source Serif Pro', serif;
    color: #2d2d2d;
    font-size: 17px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: #1a1a1a;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f4f1eb;
  }

  ::-webkit-scrollbar-thumb {
    background: #d3c9b6;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b8a99a;
  }

  /* Accent text */
  .accent-text {
    color: #e25c45;
    position: relative;
    display: inline-block;
  }

  /* Section Padding */
  section {
    padding: 120px 0 100px;
    position: relative;

    @media (max-width: 768px) {
      padding: 80px 0 70px;
    }
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;

    @media (max-width: 768px) {
      padding: 0 20px;
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

  /* Texture overlay */
  .texture-overlay {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d3c9b6' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
      opacity: 0.4;
      z-index: -1;
      pointer-events: none;
    }
  }

  /* Card styles */
  .card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
    padding: 30px;
    border: 1px solid #e9e3d9;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      border-color: #d3c9b6;
    }
  }

  /* Button styles */
  .button {
    display: inline-block;
    background: #e25c45;
    color: #ffffff;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 16px;
    padding: 12px 28px;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    
    &:hover {
      background: #c94b35;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(226, 92, 69, 0.2);
    }
    
    &.button-outline {
      background: transparent;
      border: 2px solid #e25c45;
      color: #e25c45;
      
      &:hover {
        background: rgba(226, 92, 69, 0.05);
      }
    }
  }

  /* Underline effect */
  .underline-effect {
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: #e25c45;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  /* Pull quote style */
  .pull-quote {
    font-family: 'Source Serif Pro', serif;
    font-style: italic;
    font-size: 24px;
    line-height: 1.5;
    color: #1a1a1a;
    position: relative;
    padding-left: 30px;
    margin: 30px 0;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: #e25c45;
    }
  }
`; 