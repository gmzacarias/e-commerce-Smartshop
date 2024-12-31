import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* button {
    background-color: ${({ theme }) => theme.buttonBg};
    color: ${({ theme }) => theme.color};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  } */
`;


