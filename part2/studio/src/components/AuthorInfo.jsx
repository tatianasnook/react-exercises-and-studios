import recipedata from "./recipe.json";
import './styling.css';

function AuthorInfo() {
   return(
    <div>
         <img className="authorImage" src={recipedata[0].authorImage} alt="author picture"/>
         <h4>{recipedata[0].author}</h4>
         <a href={recipedata[0].website} target="_blank">Recipe website</a>
      </div>

   )
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 