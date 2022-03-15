import MainSection from "./components/MainSection";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Busqueda from "./components/Busqueda";
import { useState } from "react";
import Navbar from "./components/NavBar"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Recipe from "./components/Recipe"
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

/*const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    setBusqueda(valorDelInput);
  };

  return (
    
    <BrowserRouter>
    <Routes>
      <Route/>
      <Route path="/recipe" element={<Recipe/>}/>
    </Routes>


      <Box>
        <Navbar />
        <Box sx={{ mt: 12 }}>
          <Busqueda
            actualizarInput={handleChange}
            escucharClickDelBoton={handleClick}
          />
        </Box>
        <Box>
          <MainSection busqueda={busqueda} />
        </Box>
      </Box>
    </BrowserRouter>
    
  );
};

export default App;*/

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
        
          <ListItem button key={"Item menu 1"}>
            <ListItemText primary={"Item menu 1"} />
          </ListItem>
          <ListItem button key={"Item menu 2"}>
            <ListItemText primary={"Item menu 2"} />
          </ListItem>
          <ListItem button key={"Item menu 3"}>
            <ListItemText primary={"Item menu 3"} />
          </ListItem>
      </List>
      </Box>
    </SwipeableDrawer>
    </>
  )
};