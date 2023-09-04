import { AppBar, Toolbar, Typography } from "@mui/material";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					React Table App 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
