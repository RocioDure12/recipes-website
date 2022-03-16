import {useParams} from "react-router-dom"
import {useEffect} from react;

const DetailRecipe=()=>{
    const params=useParams()
    console.log(params.idRecipe)
return (
    <div>
    <div>detalle personaje</div>
    <h2>Noombre:{useParams.idRecipe}</h2>
    </div>
)
}

export default DetailRecipe;