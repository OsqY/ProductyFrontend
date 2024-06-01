'use client'

import { createContext, useMemo, useState } from "react"
import { darkTheme, lightTheme } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const ThemeContext = createContext(
  {
    darkMode: true,
    toggleDarkMode: () => { },
  }
)

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);

  }

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
