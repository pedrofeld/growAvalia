import { Box, Button, TextField, ThemeProvider, Typography } from '@mui/material';
import ButtonAppBar from './components/Navbar';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { toggleTheme } from './store/slices/themeSlice';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';

export function Root(){
    const dispatch =useAppDispatch();
    const currentMode = useAppSelector((state) => state.theme);
    const theme = currentMode === 'light' ? lightTheme : darkTheme;

    function handleThemeChange() {
        dispatch(toggleTheme());
    }

    return (
        <ThemeProvider theme={theme}>
            <ButtonAppBar handleThemeChange={handleThemeChange}/>
            <Box sx={{paddingLeft: 2}}>
                <Typography variant='h6' sx={{flexGrow: 1, marginTop: 2}}>
                    GrowAvalia
                </Typography>
                <form>
                    <ul 
                        style={{ 
                            listStyleType: "none", 
                            padding: 0, gap: "1rem", 
                            display: "flex", 
                            flexDirection: "column", 
                            maxWidth: "300px" 
                        }}
                    >
                        <li>
                            <TextField 
                                label="Nome" 
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: {
                                            backgroundColor: "gray.200",
                                            borderRadius: 2,
                                        },
                                    },
                                }}  
                            />
                        </li>
                        <li>
                            <TextField 
                                label="E-mail" 
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: {
                                            backgroundColor: "gray.200",
                                            borderRadius: 2,
                                        },
                                    },
                                }}  
                            />
                        </li>
                        <li>
                            <Button variant="contained" color='primary'>
                                LOGIN
                            </Button>
                        </li>
                    </ul>
                </form>        
            </Box>
        </ThemeProvider>
    )
}