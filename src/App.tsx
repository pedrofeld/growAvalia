import { Box, Button, TextField } from '@mui/material';
import ButtonAppBar from './components/Navbar';

function App() {
  return (
    <>
      <ButtonAppBar />
      <Box sx={{paddingLeft: 2}}>
        <h1>Fazer Login</h1>
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
    </>
  )
}

export default App