import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const getTheme = (mode: string, themeToggler: () => void): Theme =>
  responsiveFontSizes(
    createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1260,
          xl: 1921,
        },
      },
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: 'LuckiestGuy, sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          } as ComponentsOverrides['MuiButton'],
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiInputBase'],
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiOutlinedInput'],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          } as ComponentsOverrides['MuiCard'],
        },
      },
      themeToggler,
    }),
  );

export default getTheme;
