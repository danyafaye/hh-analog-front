import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    scrollbar-color: #b0babf rgba(60, 70, 78, .05);
    scrollbar-width: thin;
  }

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Mabry Pro";
    font-weight: 400;
  }

  :focus, :active {
    outline: none;
  }

  a:focus, a:active {
    outline: none;
  }

  nav, footer, header, aside {
    display: block;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
  
  body {
    color: ${COLORS.$PRIMARY_DARK_GRAY};
  }
  
  #root {
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  input::-ms-clear {
    display: none;
  }

  input, button, textarea {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
`;

export const AppWrapper = styled.div`
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
