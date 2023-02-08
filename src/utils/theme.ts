import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif'
  },
  palette: {
    primary: {
      main: '#009FFF'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg'
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '960px',
          '@media (min-width: 900px)': { maxWidth: '960px' }
        },
        maxWidthMd: {
          maxWidth: '1160px',
          '@media (min-width: 960px)': { maxWidth: '1160px' }
        }
      },
      variants: []
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.active': {
            color: '#0084ff'
          }
        }
      }
    }
  }
})
