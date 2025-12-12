import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: 'blue.300',
            main: '#04074c',
            dark: 'blue.900',
        },
        secondary: {
            main: '#0000',
        },
        background: {
            default: '#200303',
            paper: '#460E0E',
        },
    }
})