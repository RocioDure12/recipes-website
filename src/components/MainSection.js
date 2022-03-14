import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";

const MainSection = ({ busqueda }) => {
  const [recipes, setRecipes] = useState([]);
  const [data, setData] = useState({});


  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${busqueda}&app_id=d76d54c6&app_key=c5f3fc901a11ea4aa0023d0a03af9e0e&imageSize=REGULAR`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
        setData(data);
      });
   
  }, [busqueda])

  return (
    <Container>
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {recipes.map((data) => (
          <Grid item
          >
            <CardActionArea>
              <Card sx={{ maxWidth: 200, height: 300 }}>
                <CardMedia
                  component="img"
                  height="150"
                  key={data._links.self.href}
                  image={data.recipe.image}
                  alt={data.recipe.label}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
              
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainSection;