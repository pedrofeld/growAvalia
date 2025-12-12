import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: 'blue.300',
            main: '#04074c',
            dark: 'blue.900',
        },
        secondary: {
            main: '#ffa700',
        },
        background: {
            default: '#f2f2f2',
        },
    }
})