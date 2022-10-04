import {defaultTheme} from "./defaultTheme";

export const monokaiTheme = {
  ...defaultTheme,
  background: "#2e2e2e",
  backgroundAlt: "",
  palette: {
    ...defaultTheme.palette,
    common: {
      ...defaultTheme.palette.common,
      black: '#000000',
      white: "#d6d6d6",
    },
    primary: {
      ...defaultTheme.palette.primary,
      main: '#6c99bb',
      contrastText: '#d6d6d6'
    },
    secondary: {
      ...defaultTheme.palette.secondary
    }
  }
}