import { useState } from "react";
import MainSection from "./MainSection";
import Box from "@mui/material/Box";
import Busqueda from "./Busqueda";

const RecipeList=()=>{
    const [valorDelInput, setValorDelInput] = useState("");
    const [busqueda, setBusqueda] = useState("");
  
  
    const handleChange = (e) => {
      setValorDelInput(e.target.value);
    };
  
    const handleClick = () => {
      setBusqueda(valorDelInput);
    };
  
    return (
     
        <Box>
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

}
export default RecipeList;