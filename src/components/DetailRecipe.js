import {useParams} from "react-router-dom"
import {useState,useEffect} from "react";

const DetailRecipe=()=>{
const params=useParams()   
const [recipe, setRecipes]=useState([])

  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q&app_id=d76d54c6&app_key=c5f3fc901a11ea4aa0023d0a03af9e0e&imageSize=REGULAR`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
    
      });

  }, [params.linkRecipe])

  return(
    <div>
      <h1>Receta especifica</h1>
    </div>
  )
}
 

export default DetailRecipe;