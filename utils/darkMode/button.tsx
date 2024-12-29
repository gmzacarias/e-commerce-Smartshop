// components/ThemeToggle.js
import { useTheme} from './themeContext';
import { useContext, useState } from "react"
import styled from "styled-components"


const StyledButton = styled.button`
background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.color};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;



export function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
      <StyledButton onClick={toggleTheme}>
        {isDarkMode ? 'Activar Modo Claro' : ' Activar Modo Oscuro'}
      </StyledButton>
    );


}