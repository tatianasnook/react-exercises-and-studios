const RecipeAuthor = () => {
   let authorLink = "https://www.sipandfeast.com/fettuccine-cherry-tomato-butter-sauce/";
   let authorPhoto = "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/404908546_840742918057167_8210668609417996119_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UzSaRiRXq1gQ7kNvgFJpUFM&_nc_ht=scontent-ord5-1.xx&oh=00_AYDNTpVcViABDBTZnDVVEYVzKIXo2XChcFfjqxwCDDSe0Q&oe=66D6DDFC";
   let authorName = "James C Delmage";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['fettuccine', 'butter', 'tomatoes', 'onion', 'basil'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Fettuccine with Cherry Tomato Butter Sauce</h1>
            <p>
               There is nothing simpler than fettuccine with cherry tomato butter sauce. 
               Bright cherry tomatoes are sauteed in butter with chopped onion, 
               tossed with al dente fettuccine, and finished with fresh parsley and basil. 
               Perfect for weeknights or when you’re short on time but don’t want to compromise on flavor.
            </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.sipandfeast.com/wp-content/uploads/2022/03/fettuccine-cherry-tomato-butter-sauce-recipe-6.jpg" alt="plate of fettuccine with Cherry Tomato Butter Sauce" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
