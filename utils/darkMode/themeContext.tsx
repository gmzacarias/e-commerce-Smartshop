import { createContext, ReactNode, useState, useContext } from 'react';
import { LightTheme, DarkTheme } from "@/utils/darkMode/theme";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from "@/utils/darkMode/globalStyles";

interface ThemeContextProps {
    isDarkMode: boolean
    toggleTheme: () => void
}

type ThemeProviderType = {
    children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextProps>({
    isDarkMode: false,
    toggleTheme: () => { },
});

export function ThemeProvider({ children }: ThemeProviderType) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    function toggleTheme(){
        setIsDarkMode((prev)=> !prev)
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