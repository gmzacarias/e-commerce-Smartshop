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

function setCookie(theme: boolean) {
    const currentTheme = document.cookie = `darkMode=${theme}`
    return currentTheme
}

function getCookieTheme() {
    if (typeof document === "undefined") return null;
    const cookieString = document.cookie as any
    const cookies = cookieString.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith("darkMode=")) {
            return cookie.substring("darkMode=".length);
        }
    }
    return null;
}

export const ThemeContext = createContext<ThemeContextProps>({
    isDarkMode: false,
    toggleTheme: () => { },
});

export function ThemeProvider({ children }: ThemeProviderType) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const currentCookie = getCookieTheme()
        return currentCookie
    })

    function toggleTheme() {
        setIsDarkMode((prev) => !prev)
        setCookie(!isDarkMode)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme: () => toggleTheme() }}>
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