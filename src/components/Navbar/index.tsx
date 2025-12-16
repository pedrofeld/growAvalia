import { IconButton, CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';

type Props = {
  handleThemeChange: () => void;
};

export default function ButtonAppBar({handleThemeChange}: Props) {
  return (
    <AppBar 
      position="static" 
      sx={{
        backgroundColor: "primary"
      }}
    >
    <CssBaseline />
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        GrowAvalia
      </Typography>
      <IconButton onClick={handleThemeChange}>
        <Brightness4Icon sx={{ color: 'inherit' }} />
      </IconButton>
    </Toolbar>
    </AppBar>
  );
}
