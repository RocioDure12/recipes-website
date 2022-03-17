import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState} from "react";
import {Link} from "react-router-dom"
 {/*const Nav = () => {
  return (
   <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Find your recipe
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;]
*/}


export default () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
      <>
        <button onClick={()=>setDrawerOpen(true)}>Abrir menu</button>
      <SwipeableDrawer
        anchor={"left"}
        open={drawerOpen}
        onOpen={()=>setDrawerOpen(true)}
        onClose={()=>setDrawerOpen(false)}
      >
        <Box
        onClick={()=>setDrawerOpen(false)}
        onKeyDown={()=>setDrawerOpen(false)}
        sx={{ width: 250 }}
        role="presentation"
        
      >
        <List>
          <Link to="/">
            <ListItem button key={"Item menu 1"}>
              <ListItemText primary={"Home"} />
            </ListItem>
            </Link>

            <Link to="">
            <ListItem button key={"Item menu 2"}>
              <ListItemText primary={"Vegan recipes"} />
            </ListItem>
            </Link>

            <ListItem button key={"Item menu 3"}>
              <ListItemText primary={"Vegetarian recipes"} />
            </ListItem>
            <ListItem button key={"Item menu 4"}>
              <ListItemText primary={"All"} />
            </ListItem>
        </List>
        </Box>
      </SwipeableDrawer>
      </>
    )
  };
