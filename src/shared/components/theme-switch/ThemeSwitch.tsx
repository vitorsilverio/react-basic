import { Box, FormLabel, Switch } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useAppThemeContext } from "../../contexts";

export const ThemeSwitch = () => {
  const { toggleTheme, themeName } = useAppThemeContext();
  const isDarkTheme = themeName === "dark";

  return (
    <Box display="flex" alignItems="center">
      <FormLabel>
        <LightModeIcon />
      </FormLabel>
      <Switch
        checked={isDarkTheme}
        onChange={() => {
          toggleTheme();
        }}
      />
      <FormLabel>
        <DarkModeIcon />
      </FormLabel>
    </Box>
  );
};
