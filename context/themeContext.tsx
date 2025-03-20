import { createContext, ReactNode, useState, useContext } from 'react';
import { LightTheme, DarkTheme } from "@/context/theme";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from "@/context/globalStyles";

interface ThemeContextProps {
    isDarkMode: boolean
    toggleTheme: () => void
}

type ThemeProviderType = {
    children: ReactNode;
};

const currentTheme=document.cookie||false

export const ThemeContext = createContext<ThemeContextProps>({
    isDarkMode:false,
    toggleTheme: () => { },
});

export function ThemeProvider({ children }: ThemeProviderType) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    function toggleTheme(){
        setIsDarkMode((prev)=> !prev)
        console.log("currentTheme",currentTheme)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme:()=> toggleTheme() }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function ThemeConsumer({ children }: ThemeProviderType) {
    const { isDarkMode } = useTheme();
    return (
        <StyledThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('hubo un error al obtener el contexto');
    }
    return context;
}