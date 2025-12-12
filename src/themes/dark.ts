import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#04074c',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#0000',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#200303',
            paper: '#460E0E',
        },
    }
})