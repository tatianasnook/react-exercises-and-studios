import recipedata from "./recipe.json";

function RecipeImage() {
   return <img className="recipeImage" src={recipedata[0].recipeImage} alt={recipedata[0].name}/> 
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className 
 