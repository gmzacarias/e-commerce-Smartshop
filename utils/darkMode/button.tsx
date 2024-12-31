// components/ThemeToggle.js
import { useTheme} from './themeContext';
import { useContext, useState } from "react"
import styled from "styled-components"
import {SunIcon,MoonIcon} from "ui/icons"

const StyledButton = styled.button`
background-color: none;
  color: ${({ theme }) => theme.color};
  border: unset;
  padding: 10px 20px;
  cursor: pointer;
  /* transition: background-color 0.3s ease, color 0.3s ease; */

  &:hover {
    opacity: 0.8;
  }
`;



export function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
      <StyledButton onClick={toggleTheme}>
        {isDarkMode ? <SunIcon/> : <MoonIcon/>}
      </StyledButton>
    );


}