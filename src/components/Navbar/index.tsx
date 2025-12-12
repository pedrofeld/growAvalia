import { CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <AppBar 
        position="static" 
        sx={{
            backgroundColor: "primary"
        }}
    >
        <CssBaseline />
        <Toolbar>
            <Typography variant="h6" component="div">
            GrowAvalia
            </Typography>
        </Toolbar>
    </AppBar>
  );
}
