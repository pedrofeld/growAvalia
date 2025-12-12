import { Box, Button, TextField, ThemeProvider, Typography } from '@mui/material';
import ButtonAppBar from './components/Navbar';
// import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}> {/*Possível trocar para darkTheme*/}
        <ButtonAppBar />
          <Box sx={{paddingLeft: 2}}>
            <Typography variant='h6' sx={{flexGrow: 1, marginTop: 2}}>
              GrowAvalia
            </Typography>
            <form>
              <ul style={{ listStyleType: "none", padding: 0, gap: "1rem", display: "flex", flexDirection: "column", maxWidth: "300px" }}>
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
    </>
  )
}

export default App