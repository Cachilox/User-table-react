import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { CustomDialog, FavoriteTable } from "..";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { dialogOpenSubject$ } from "../CustomDialog/dialogSubjects";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Table App
          </Typography>
          <IconButton onClick={handleClick} color="secondary" aria-label="favorites" component="label">
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
