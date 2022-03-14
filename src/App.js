import MainSection from "./components/MainSection";
import Box from "@mui/material/Box";
import Busqueda from "./components/Busqueda";
import { useState } from "react";
import Navbar from "./components/NavBar"


const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("iphone");

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    setBusqueda(valorDelInput);
  };

  return (
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
  );
};

export default App;