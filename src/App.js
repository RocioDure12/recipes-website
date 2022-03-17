import MainSection from "./components/MainSection";
import Box from "@mui/material/Box";
import Busqueda from "./components/Busqueda";
import { useState } from "react";
import Navbar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipe from "./components/RecipeList"
import RecipeList from "./components/RecipeList";
import DetailRecipe from "./components/DetailRecipe";
import PageNoFound from "./components/PageNoFound";



const App = () => {
return(
  <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route  path="/" element={<RecipeList/>} />
      <Route path="/RecipeList/:id" element={<DetailRecipe/>}/>
      <Route path="*" element={<PageNoFound/>}/>
    </Routes>
  </BrowserRouter>
)
};

export default App;

