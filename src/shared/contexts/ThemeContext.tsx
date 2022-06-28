import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Box, ThemeProvider } from "@mui/material";

import { LightTheme, DarkTheme } from "../themes";

interface ThemeContextData {
  themeName: "light" | "dark";
  toggleTheme(): void;
}

const ThemeContext = createContext({} as ThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC = ({ children }) => {
  const systemTheme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  const [themeName, setThemeName] = useState<"light" | "dark">(systemTheme);
  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);
  const theme = useMemo(() => {
    return themeName === "light" ? LightTheme : DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
